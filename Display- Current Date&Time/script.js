document.addEventListener('DOMContentLoaded', () => {
    const dateTimeElement = document.getElementById('date-time');

    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        dateTimeElement.textContent = `${date} at ${time}`;
    }

    // Update the date and time initially and every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});