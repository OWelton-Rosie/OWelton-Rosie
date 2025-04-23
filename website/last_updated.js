// last_updated.js

function updateLastUpdated() {
    const lastUpdated = document.getElementById("lastUpdated");
    if (lastUpdated) {
        const modified = new Date(document.lastModified);

        const dateOptions = {
            timeZone: "Pacific/Auckland",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const timeOptions = {
            timeZone: "Pacific/Auckland",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };

        const datePart = new Intl.DateTimeFormat("en-NZ", dateOptions).format(modified);
        const timePart = new Intl.DateTimeFormat("en-NZ", timeOptions).format(modified);

        lastUpdated.textContent = `${datePart}, ${timePart}`;
    }
}

updateLastUpdated();
