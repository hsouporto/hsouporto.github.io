async function loadPublications() {
  const container = document.getElementById("pubs");

  try {
    const res = await fetch("./publications.json");

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    const data = await res.json();

    data.sort((a, b) => b.year - a.year);

    container.innerHTML = "";

    data.forEach(pub => {
      const div = document.createElement("div");
      div.innerHTML = `
        <b>${pub.title}</b><br>
        ${pub.authors}<br>
        <i>${pub.venue}</i>, ${pub.year}
        <hr>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "⚠️ Failed to load publications. Check console (F12).";
  }
}

loadPublications();
