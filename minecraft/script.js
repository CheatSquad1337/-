const clients = [
    {
        id: 1,
        name: "Aqua",
        price: "15€",
        tags: ["Best", "Rage"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Holy Moly its Aqua A Realy nice Blatant/legit client and it get rigt now a recode",
        cover: "https://i.imgur.com/hBsjZHy.jpeg",
        downloadLink: "https://minecraft-clients.de/products/aqua-client-1",
    },
        {
        id: 2,
        name: "Aristois",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting. Aristois offers over 100 in-game modules to extend and enhance your Minecraft gameplay. With a focus on PvE, we offer a modern and personlised experience — get it today! In addition to many unique modules and features, Aristois contains a worldwide in-game chat. Plan your next adventure and coordinate with players on other servers, right from the chat. The Aristois UI is designed with customisation in mind, so it can look exactly how you want it. We've also created two additional UIs to enhance speed and smoothness of enabling mods.",
        cover: "https://i.imgur.com/A6OuOF2.png",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://lootdest.org/s?395bc7ea",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 3,
        name: "LiquidBounce",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric.", // Stolen from official LiquidBounce website xd
        cover: "https://liquidbounce.net/img/logos/favicon.png",
        screenshots: ["https://liquidbounce.net/img/screenshots/clickgui-large.png", "https://liquidbounce.net/img/screenshots/hud-large.png", "https://liquidbounce.net/img/screenshots/xray-large.png", "https://liquidbounce.net/img/screenshots/main-menu-large.png"],
        downloadLink: "https://lootdest.org/s?9b96f488",
        otherButtons:[["https://loot-link.com/s?55a3ed27", "SimpleBounce Theme"], ["https://www.youtube.com/watch?v=e2XqIRHpVOY", "Download Tutorial For Lunar"], ["https://liquidbounce.net/proxy", "LiquidProxy"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
        {
        id: 4,
        name: "FDP",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        update: "08.10.24",
        description: "FDP is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, FDP is completely free, open source and compatible with Forge. FDP is a fork of liquidbounce so you get the benefits of liquidbounce while still getting updates and support.",
        cover: "https://user-images.githubusercontent.com/105464811/177683437-8b768dcf-0e15-4ac4-85f0-2b673c2e8540.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-9.jpg"],
        downloadLink: "https://loot-link.com/s?bd40bca5",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
        {
        id: 5,
        name: "Meteor",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Based Minecraft utility mod.",
        cover: "https://meteorclient.com/icon.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/06/Meteor-Client-Mod-Screenshots-10.jpg"],
        downloadLink: "https://lootdest.org/s?1acd68d3",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
        {
        id: 6,
        name: "Sigma Jello",
        price: "Free",
        tags: ["Free", "outdated"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Discover the Sigma and Jello merge , Sigma 5.0 including Jello for Sigma  for FREE , 1.16 to 1.8",
        cover: "https://avatars.githubusercontent.com/u/83773282?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/0GwkNzz6wFc/maxresdefault.jpg", "https://cheater.fun/uploads/posts/2020-09/1600299856_prev.jpg"],
        downloadLink: "https://lootdest.org/s?6e7c93d9",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
        {
        id: 7,
        name: "Raven B+",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Raven B3 but better. No updates but still works on Hypixel with decent settings",
        cover: "https://avatars.githubusercontent.com/u/88325435?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/J-MQASXPh9k/hqdefault.jpg"],
        downloadLink: "https://lootdest.org/s?6288ac6a",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
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
