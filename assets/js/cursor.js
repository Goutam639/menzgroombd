/**
 * Standalone Custom Cursor Effect
 * Works by moving fixed-position elements to the mouse coordinates (viewport-relative).
 */
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure default cursor is hidden
        document.body.style.cursor = 'none';

        // Check if cursor elements already exist, otherwise create them
        let glow = document.querySelector(".cursor-glow");
        let core = document.querySelector(".cursor-core");

        if (!glow || !core) {
            const container = document.createElement('div');
            container.id = 'cursor-system-container';
            container.style.position = 'fixed';
            container.style.inset = '0';
            container.style.pointerEvents = 'none';
            container.style.zIndex = '9999';
            
            if (!glow) {
                glow = document.createElement('div');
                glow.className = 'cursor-glow';
                container.appendChild(glow);
            }
            if (!core) {
                core = document.createElement('div');
                core.className = 'cursor-core';
                container.appendChild(core);
            }
            document.body.appendChild(container);
        }

        const container = glow.parentElement;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let glowX = mouseX;
        let glowY = mouseY;
        let lastX = mouseX;
        let lastY = mouseY;

        function createTrail(x, y, speed = 1) {
            const trail = document.createElement("div");
            trail.className = "trail";
            const size = Math.max(18, Math.min(60, 20 + speed * 0.35));
            trail.style.width = `${size}px`;
            trail.style.height = `${size}px`;
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            trail.style.animationDuration = `${0.5 + Math.random() * 0.35}s`;
            container.appendChild(trail);
            setTimeout(() => trail.remove(), 900);
        }

        function createSpark(x, y) {
            const spark = document.createElement("div");
            spark.className = "spark";
            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;
            const dx = `${(Math.random() - 0.5) * 80}px`;
            const dy = `${(Math.random() - 0.5) * 80}px`;
            spark.style.setProperty("--dx", dx);
            spark.style.setProperty("--dy", dy);
            container.appendChild(spark);
            setTimeout(() => spark.remove(), 850);
        }

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const dx = mouseX - lastX;
            const dy = mouseY - lastY;
            const speed = Math.sqrt(dx * dx + dy * dy);

            core.style.left = `${mouseX}px`;
            core.style.top = `${mouseY}px`;

            createTrail(mouseX, mouseY, speed);

            const sparksCount = speed > 25 ? 2 : 0;
            for (let i = 0; i < sparksCount; i++) {
                createSpark(mouseX, mouseY);
            }

            lastX = mouseX;
            lastY = mouseY;
        });

        function animate() {
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;
            glow.style.left = `${glowX}px`;
            glow.style.top = `${glowY}px`;
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener("mousedown", () => {
            core.style.transform = "translate(-50%, -50%) scale(1.8)";
            glow.style.transform = "translate(-50%, -50%) scale(1.2)";
        });

        window.addEventListener("mouseup", () => {
            core.style.transform = "translate(-50%, -50%) scale(1)";
            glow.style.transform = "translate(-50%, -50%) scale(1)";
        });

        // Hide cursor when leaving window
        document.addEventListener("mouseleave", () => {
            glow.style.opacity = "0";
            core.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
            glow.style.opacity = "1";
            core.style.opacity = "1";
        });
    });
})();
