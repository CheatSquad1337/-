const clients = [
    {
        id: 2,
        name: "Vigor internal cheat",
        price: "Free",
        tags: ["Free", "Internal"],
        game: "Other Games",
        update: "08.10.24",
        description: "Funtions : Aimbot, Magic Bullet, Infinit Ammoy, Infinity Stamina  ㅤㅤㅤㅤㅤㅤㅤESP : Player Box, Skeleton, Healthbar, show player distance,ㅤㅤ player name, player Tracers",
        cover: "https://i.imgur.com/8qwdwnx.jpeg",
        downloadLink: "https://lootdest.org/s?8b4dadc5",
    },
];

// Render cheats by tags
function renderCheats() {
    const allCheatsSection = document.querySelector("#all-cheats-section .cheats-grid");
    const bestSection = document.querySelector("#best-section .cheats-grid");
    const rageSection = document.querySelector("#rage-section .cheats-grid");
    const legitSection = document.querySelector("#legit-section .cheats-grid");

    allCheatsSection.innerHTML = "";
    bestSection.innerHTML = "";
    rageSection.innerHTML = "";
    legitSection.innerHTML = "";

    clients.forEach((client) => {
        const card = createCheatCard(client);

        // Add to "All Cheats"
        allCheatsSection.appendChild(card.cloneNode(true));

        // Add to specific categories based on tags
        if (client.tags.includes("Best")) bestSection.appendChild(card.cloneNode(true));
        if (client.tags.includes("Rage")) rageSection.appendChild(card.cloneNode(true));
        if (client.tags.includes("Legit")) legitSection.appendChild(card.cloneNode(true));
    });
}

// Create a cheat card element
function createCheatCard(client) {
    const card = document.createElement("div");
    card.className = "cheat-card";

    const img = document.createElement("img");
    img.src = client.cover;
    img.alt = client.name;
    card.appendChild(img);

    const name = document.createElement("h3");
    name.innerText = client.name;
    card.appendChild(name);

    const description = document.createElement("p");
    description.innerText = client.description;
    card.appendChild(description);

    const link = document.createElement("a");
    link.href = client.downloadLink;
    link.target = "_blank";
    link.innerText = "Download";
    card.appendChild(link);

    return card;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderCheats();
});
