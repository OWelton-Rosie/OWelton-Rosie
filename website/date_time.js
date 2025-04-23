function displayNZTime() {
    const now = new Date();

    // Convert to New Zealand time
    const nzTime = new Date(now.toLocaleString('en-US', { timeZone: 'Pacific/Auckland' }));

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayName = days[nzTime.getDay()];
    const day = nzTime.getDate();
    const month = months[nzTime.getMonth()];
    const year = nzTime.getFullYear();
    
    // Get ordinal suffix (st, nd, rd, th)
    function getOrdinal(n) {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const hourRaw = nzTime.getHours();
    const minutes = nzTime.getMinutes().toString().padStart(2, '0');
    const hour12 = hourRaw % 12 || 12;
    const ampm = hourRaw >= 12 ? 'PM' : 'AM';

    const ordinal = getOrdinal(day);
    const formattedDateTime = `${hour12}:${minutes} ${ampm} on ${dayName} the ${day}${ordinal} of ${month} ${year}  `;

    document.getElementById('timeDisplay').innerHTML = formattedDateTime;
}

displayNZTime();
setInterval(displayNZTime, 1000);
