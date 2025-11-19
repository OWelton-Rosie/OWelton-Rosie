export async function getUpcomingCompetitions() {
    try {
      const res = await fetch(
        "https://www.worldcubeassociation.org/api/v0/users/2023WELT02?upcoming_competitions=true"
      );
  
      if (!res.ok) throw new Error("Network response was not ok");
  
      const data = await res.json();
  
      return {
        competitions: data.upcoming_competitions.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        ),
        error: null
      };
    } catch (err) {
      return {
        competitions: [],
        error: "Failed to load competitions: " + err.message
      };
    }
  }
  