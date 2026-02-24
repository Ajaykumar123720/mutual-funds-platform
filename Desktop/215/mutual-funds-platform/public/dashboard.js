// Dashboard Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId + '-section');
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Highlight active nav item
    event.target.closest('.nav-item').classList.add('active');
}

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Filter Functions
function filterFunds(type) {
    console.log('Filter by type:', type);
    // Implement filtering logic
}

function filterRisk(risk) {
    console.log('Filter by risk:', risk);
    // Implement filtering logic
}

// Investment Functions
function investFund(fundName) {
    const amount = prompt(`Enter investment amount for ${fundName}:`);
    if (amount) {
        alert(`Investment of $${amount} in ${fundName} - Feature coming soon!`);
    }
}

function compareSelected() {
    const checkboxes = document.querySelectorAll('.compare-info input[type="checkbox"]:checked');
    if (checkboxes.length < 2) {
        alert('Please select at least 2 funds to compare');
        return;
    }
    alert('Comparison feature coming soon!');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set first section as active
    const firstSection = document.querySelector('.section');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    // Set first nav item as active
    const firstNavItem = document.querySelector('.nav-item:not(.logout)');
    if (firstNavItem) {
        firstNavItem.classList.add('active');
    }
});
