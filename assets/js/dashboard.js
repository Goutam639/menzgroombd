document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('contactsTableBody');
    const totalContactsSpan = document.getElementById('totalContacts');
    const unreadContactsSpan = document.getElementById('unreadContacts');
    const clearAllBtn = document.getElementById('clearAllBtn');
    
    // Modal elements
    const viewModal = document.getElementById('viewModal');
    const closeModal = document.querySelector('.close-modal');
    
    function loadContacts() {
        const data = localStorage.getItem('menzgroom_contacts');
        const contacts = data ? JSON.parse(data) : [];
        return contacts;
    }

    function saveContacts(contacts) {
        localStorage.setItem('menzgroom_contacts', JSON.stringify(contacts));
    }

    function renderTable() {
        const contacts = loadContacts();
        tableBody.innerHTML = '';
        
        let unreadCount = 0;
        
        if (contacts.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">No messages found.</td></tr>';
        } else {
            // Reverse so newest is first
            const sortedContacts = [...contacts].reverse();
            
            sortedContacts.forEach((contact, index) => {
                if (contact.status === 'unread') unreadCount++;
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${contact.id}</td>
                    <td>${contact.date}</td>
                    <td>${contact.name}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.subject}</td>
                    <td class="message-col">${contact.message}</td>
                    <td>
                        <span class="badge ${contact.status === 'unread' ? 'new' : 'read'}">
                            ${contact.status === 'unread' ? 'New' : 'Read'}
                        </span>
                    </td>
                    <td>
                        <button class="action-btn view-btn" data-id="${contact.id}" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn delete delete-btn" data-id="${contact.id}" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        }
        
        totalContactsSpan.textContent = contacts.length;
        unreadContactsSpan.textContent = unreadCount;
        
        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                viewContact(id);
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                deleteContact(id);
            });
        });
    }

    function viewContact(id) {
        let contacts = loadContacts();
        const contactIndex = contacts.findIndex(c => c.id.toString() === id);
        
        if (contactIndex > -1) {
            const contact = contacts[contactIndex];
            
            // Populate modal
            document.getElementById('modalDate').textContent = contact.date;
            document.getElementById('modalName').textContent = contact.name;
            document.getElementById('modalPhone').textContent = contact.phone;
            document.getElementById('modalSubject').textContent = contact.subject;
            document.getElementById('modalMessage').textContent = contact.message;
            
            // Mark as read
            if (contact.status === 'unread') {
                contacts[contactIndex].status = 'read';
                saveContacts(contacts);
                renderTable(); // Update background silently
            }
            
            viewModal.classList.add('active');
        }
    }

    function deleteContact(id) {
        if (confirm('Are you sure you want to delete this message?')) {
            let contacts = loadContacts();
            contacts = contacts.filter(c => c.id.toString() !== id);
            saveContacts(contacts);
            renderTable();
        }
    }

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('WARNING: Are you sure you want to delete ALL messages? This cannot be undone.')) {
                localStorage.removeItem('menzgroom_contacts');
                renderTable();
            }
        });
    }

    // Modal Close
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            viewModal.classList.remove('active');
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === viewModal) {
            viewModal.classList.remove('active');
        }
    });

    // Logout Logic
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('menzgroom_admin_logged_in');
            window.location.href = 'login.html';
        });
    }

    // Initial Render
    renderTable();
});
