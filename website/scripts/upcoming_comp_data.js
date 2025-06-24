const url = "https://www.worldcubeassociation.org/api/v0/users/2023WELT02?upcoming_competitions=true";

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    const list = document.getElementById("competition-list");

    // Sort competitions by start_date (earliest first)
    const sortedComps = data.upcoming_competitions.sort((a, b) => {
      return new Date(a.start_date) - new Date(b.start_date);
    });

    // Create list items with links
    sortedComps.forEach(comp => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = comp.url;
      a.textContent = comp.name;
      a.target = "_blank"; // Open in new tab
      li.appendChild(a);
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById("error-message").textContent = "Failed to load data: " + error.message;
  });
