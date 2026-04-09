// Dark mode
const toggle = document.getElementById("theme-toggle");

function setTheme(mode) {
    document.body.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
}

toggle.onclick = () => {
    const current = localStorage.getItem("theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
}

// Publications
fetch("publications.json")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("pub-list");
        list.innerHTML = "";
        data.forEach(pub => {
            const li = document.createElement("li");
            li.innerHTML = `<b>${pub.title}</b> (${pub.year})`;
            list.appendChild(li);
        });
    })
    .catch(() => {
        document.getElementById("pub-list").innerHTML =
            "<li>Unable to load publications.</li>";
    });
