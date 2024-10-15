// Notification Icon Click Event
document.getElementById('notification-icon').addEventListener('click', function() {
    alert('You have new notifications!');
});

// Simulate dynamic data updates
setTimeout(function() {
    document.getElementById('efficiency-value').innerText = '90%';
    document.getElementById('efficiency-bar').style.width = '90%';
}, 3000);

setTimeout(function() {
    document.getElementById('tasks-value').innerText = '20';
    document.getElementById('tasks-bar').style.width = '50%';
}, 5000);

setTimeout(function() {
    document.getElementById('online-time-value').innerText = '10.5 h';
    document.getElementById('online-time-bar').style.width = '80%';
}, 7000);

// Toggle Dropdown for Settings Menu
document.getElementById('settings-menu').addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan aksi default link
    const submenu = this.nextElementSibling; // submenu adalah elemen setelah Settings
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Tampilkan atau sembunyikan
});
// Toggle Dropdown for Settings Menu
document.getElementById('settings-menu').addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan aksi default link
    const submenu = this.nextElementSibling; // submenu adalah elemen setelah Settings
    const parent = this.parentElement; // Ambil elemen <li> parent
    
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Tampilkan atau sembunyikan
    
    // Toggle kelas "open" untuk memutar ikon panah
    parent.classList.toggle('open');
});
// Toggle Dropdown for Settings Menu
document.getElementById('settings-menu').addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan aksi default link
    const submenu = this.nextElementSibling; // submenu adalah elemen setelah Settings
    const parent = this.parentElement; // Ambil elemen <li> parent
    
    // Toggle display submenu
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; 
    
    // Toggle kelas "open" untuk memutar ikon panah
    parent.classList.toggle('open');
});
