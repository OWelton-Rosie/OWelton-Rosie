async function fetchAndShowData() {
    const url = "https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/2023WELT02.json";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      const totalCompetitions = Array.isArray(data.competitionIds) ? data.competitionIds.length : 0;
      let totalSolves = 0;
      const results = data.results;

      for (const compId in results) {
        const comp = results[compId];

        for (const eventId in comp) {
          const rounds = comp[eventId];

          rounds.forEach(round => {
            round.solves.forEach(solve => {
              if (typeof solve === "number" && solve > 0) {
                totalSolves++;
              } else {
                console.log(`Ignoring invalid solve time:`, solve, `in comp: ${compId}, event: ${eventId}, round: ${round.round}`);
              }
            });
          });
        }
      }

      document.getElementById("total-solves").textContent = ` ${totalSolves}`;
      document.getElementById("total-comps").textContent = ` ${totalCompetitions}`;
    } catch (error) {
      document.getElementById("total-solves").textContent = `Failed to load data: ${error.message}`;
      document.getElementById("total-comps").textContent = `Failed to load data: ${error.message}`;
    }
  }

  fetchAndShowData();
