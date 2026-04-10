async function loadPublications() {
  const container = document.getElementById("pubs");

  try {
    const res = await fetch("publications.json");
    const data = await res.json();

    container.innerHTML = "";

    data.forEach(pub => {
      const div = document.createElement("div");
      div.className = "pub";

      div.innerHTML = `
        <b>${pub.title}</b><br>
        ${pub.authors}<br>
        <i>${pub.venue}</i>, ${pub.year}
        <hr>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    container.innerHTML = "Failed to load publications.";
  }
}

loadPublications();