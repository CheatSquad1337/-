// Client data
const presetColors = {
        white: "#ffffff",
        black: "#000000",
        lime: "#00ff04",
        pink: "#ff00f2",
        purple: "#7700ff",
        lightGray: "#b5b5b5",
        gray: "#808080",
        darkGray: "#3b3b3b",
        red: "#ff0000",
        orange: "#ff8400",
        yellow: "#ffe600",
        lightGreen: "#91ff00",
        green: "#1aff00",
        darkGreen: "#0e8a00",
        turquoise: "#00ff8c",
        lightBlue: "#00ffd9",
        blue: "#0084ff",
        darkBlue: "#0800ff",
        darkPurple: "#2f0080",
        darkRed: "#800000"
    }

const clients = [
        {
        id: 1,
        name: "Aqua",
        price: "15€",
        tags: ["Blatant"],
        game: "Minecraft",
        description: "Holy Moly its Aqua A Realy nice Blatant/legit client and it get rigt now a recode",
        cover: "https://i.imgur.com/hBsjZHy.jpeg",
        screenshots: ["https://i.imgur.com/SpAxx1M.png"],
        downloadLink: "https://minecraft-clients.de/products/aqua-client-1",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.red, // Accent
            header: presetColors.orange // Header
        }
    },
    {
        id: 2,
        name: "Vigor internal cheat",
        price: "Free",
        tags: ["Free", "Internal"],
        game: "Other Games",
        description: "Funtions :ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ Aimbot, Magic Bullet, Infinit Ammoy, Infinity Stamina  ㅤㅤㅤㅤㅤㅤㅤESP : Player Box, Skeleton, Healthbar, show player distance,ㅤㅤ player name, player Tracers",
        cover: "https://i.imgur.com/7xa1LJU.png",
        screenshots: ["https://i.imgur.com/8qwdwnx.jpeg", "https://i.imgur.com/4PSVF5i.jpeg"],
        downloadLink: "https://lootdest.org/s?abc853f3",
        otherButtons:[["https://sourceforge.net/projects/systeminformer/", "System Informer (Process Hacker 2)"]],
        colors: {
            text: "#000000", // Text
            accent: "#36fff5", // Accent
            header: "#f70cf0" // Header
        }
    },
    {
        id: 3,
        name: "LiquidBounce",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        description: "LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric.", // Stolen from official LiquidBounce website xd
        cover: "https://liquidbounce.net/img/logos/favicon.png",
        screenshots: ["https://liquidbounce.net/img/screenshots/clickgui-large.png", "https://liquidbounce.net/img/screenshots/hud-large.png", "https://liquidbounce.net/img/screenshots/xray-large.png", "https://liquidbounce.net/img/screenshots/main-menu-large.png"],
        downloadLink: "https://lootdest.org/s?9b96f488",
        otherButtons:[["https://loot-link.com/s?55a3ed27", "SimpleBounce Theme"], ["https://www.youtube.com/watch?v=e2XqIRHpVOY", "Download Tutorial For Lunar"], ["https://liquidbounce.net/proxy", "LiquidProxy"]],
        colors: {
            text: "#000000", // Text
            accent: "#0040ff", // Accent
            header: "#0040ff" // Header
        }
    },
    {
        id: 4,
        name: "FDP",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        description: "FDP is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, FDP is completely free, open source and compatible with Forge. FDP is a fork of liquidbounce so you get the benefits of liquidbounce while still getting updates and support.",
        cover: "https://user-images.githubusercontent.com/105464811/177683437-8b768dcf-0e15-4ac4-85f0-2b673c2e8540.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-9.jpg"],
        downloadLink: "https://lootdest.org/s?db52142d",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#df5eff", // Accent
            header: "#42bff5" // Header
        }
    },
    {
        id: 5,
        name: "Aristois",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting. Aristois offers over 100 in-game modules to extend and enhance your Minecraft gameplay. With a focus on PvE, we offer a modern and personlised experience — get it today! In addition to many unique modules and features, Aristois contains a worldwide in-game chat. Plan your next adventure and coordinate with players on other servers, right from the chat. The Aristois UI is designed with customisation in mind, so it can look exactly how you want it. We've also created two additional UIs to enhance speed and smoothness of enabling mods.",
        cover: "https://aristois.net/logo.webp",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://lootdest.org/s?1384c193'",
        colors: {
            text: "#000000", // Text
            accent: "#85a9ff", // Accent
            header: "#d885ff" // Header
        }
    },
    {
        id: 6,
        name: "Meteor",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        description: "Based Minecraft utility mod.",
        cover: "https://meteorclient.com/icon.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/06/Meteor-Client-Mod-Screenshots-10.jpg"],
        downloadLink: "https://lootdest.org/s?6912fd22",
        colors: {
            text: "#000000", // Text
            accent: "#9000ff", // Accent
            header: "#ca85ff" // Header
        }
    },
    {
        id: 7,
        name: 'Tarasande',
        price: 'Free',
        tags: ["Free" ,"Fabric"],
        game: "Minecraft",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur explicabo ex maiores a odit sequi accusamus. Amet esse ad, at dolorem deserunt nostrum quo quaerat voluptatem, expedita provident excepturi.",
        cover: 'https://github.com/Sumandora/tarasande/blob/1.20.4/src/main/resources/assets/tarasande/icon.png?raw=true',
        screenshots: ["https://github.com/Sumandora/tarasande/blob/1.20.4/media/GUI.png?raw=true", "https://github.com/Sumandora/tarasande/blob/1.20.4/media/BedESP%20showcase.png?raw=true"],
        downloadLink: 'https://loot-link.com/s?787211a2',
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.pink, // Accent
            header: presetColors.purple // Header
        }
    },
    {
        id: 8,
        name: "Sigma Jello",
        price: "Free",
        tags: ["Free", "outdated"],
        game: "Minecraft",
        description: "Discover the Sigma and Jello merge , Sigma 5.0 including Jello for Sigma  for FREE , 1.16 to 1.8",
        cover: "https://avatars.githubusercontent.com/u/83773282?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/0GwkNzz6wFc/maxresdefault.jpg", "https://cheater.fun/uploads/posts/2020-09/1600299856_prev.jpg"],
        downloadLink: "https://lootdest.org/s?a0af6607",
        colors: {
            text: "#000000", // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 9,
        name: "Chimera",
        price: "Free",
        tags: ["Free",],
        game: "Minecraft",
        description: "Cancer, but for Minecraft",
        cover: "https://i.imgur.com/U1DDFbz.png",
        screenshots: ["https://imgur.com/lsJpmua.jpg", "https://imgur.com/jEL2QWK.jpg", "https://imgur.com/QAzZNKe.jpg", "https://imgur.com/bG6FYEe.jpg"],
        downloadLink: "https://lootdest.org/s?5d533527",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.darkPurple // Header
        }
    },
    {
        id: 10,
        name: "Schizoid",
        price: "Free",
        tags: ["Free", "Fabric",],
        game: "Minecraft",
        description: "Proof that not every IMGUI-ClickGUI looks ass",
        cover: "https://github.com/Lyzev/Schizoid/blob/master/.idea/icon.png?raw=true",
        screenshots: ["https://i.imgur.com/FiYgkID.png", "https://i.imgur.com/QceiFun.png"],
        downloadLink: "https://lootdest.org/s?2af3a3b1",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.green, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 11,
        name: "Raven B+",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        description: "Raven B3 but better. No updates but still works on Hypixel with decent settings",
        cover: "https://avatars.githubusercontent.com/u/88325435?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/J-MQASXPh9k/hqdefault.jpg"],
        downloadLink: "https://loot-link.com/s?df8b360d",
        colors: {
            text: presetColors.darkGray, // Text
            accent: presetColors.purple, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 12,
        name: "BlockOverlay",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        description: "Minecraft blockoverlay forge mod 1.8.9. Command: /blockoverlay",
        cover: "https://i.imgur.com/kCOTuHg.png",
        screenshots: ["https://i.imgur.com/6RGRgvc.png"],
        downloadLink: "https://loot-link.com/s?71257f9b",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.lightBlue, // Accent
            header: presetColors.pink // Header
        }
    },
    // GTA and shit
    {
        id: 13,
        name: 'Kiddions',
        price: 'Free',
        tags: ['Free'],
        game: "GTA V",
        description: "GTA Cheat",
        cover: 'https://i.pinimg.com/originals/5b/ec/47/5bec474d275dbdf8fdb071f30fc978f4.png',
        screenshots: ["https://www.kiddionsmodmenu.com/img/12.jpg"],
        downloadLink: 'https://lootdest.org/s?abf9416d',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 14,
        name: 'AmongUsMenu',
        price: 'Free',
        tags: ['Free'],
        game: "Other Games",
        description: "AmongUS Cheat",
        cover: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        screenshots: ["https://data.exloader.net/webp_images/AmongUsMenu/replay.webp"],
        downloadLink: 'https://lootdest.org/s?3a4fc08e',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
];
// Boolean flag to hide clients with "outdated" tag
let hideOutdated = false;

// Populate clients and filter options
document.addEventListener("DOMContentLoaded", () => {
    populateClients();
    populateTagFilter();
    populateGameFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
    const selectedTag = document.getElementById('tagFilter').value;
    const selectedGame = document.getElementById('gameFilter').value;
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        // Skip clients with "hidden" tag
        if (client.tags.includes("hidden")) {
            return;
        }

        // Skip clients with "outdated" tag if hideOutdated is true
        if (hideOutdated && client.tags.includes("outdated")) {
            return;
        }

        if ((selectedTag === "all" || client.tags.includes(selectedTag)) &&
            (selectedGame === "all" || client.game === selectedGame)) {
            const clientDiv = document.createElement('div');
            clientDiv.className = 'client';

            // Apply rainbow border if client is recommended
            if (client.tags.includes("recommended")) {
                clientDiv.classList.add('recommended');
            }

            clientDiv.innerHTML = `
                <img src="${client.cover}" alt="if you see this, firefox messed up (or bipas did lol yes dyslex skided this website)${client.name}">
                <h2>${client.name}</h2>
                <p>${client.game}</p>
                <p>${client.price}</p>
                <a href="client.html?id=${client.id}">View Client</a>
            `;
            clientList.appendChild(clientDiv);
        }
    });
}


// Function to populate tag filter options
function populateTagFilter() {
    const tagFilter = document.getElementById('tagFilter');
    let allTags = new Set();
    clients.forEach(client => {
        client.tags.forEach(tag => {
            if (tag !== 'hidden') {
                allTags.add(tag);
            }
        });
    });

    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// Function to populate game filter options
function populateGameFilter() {
    const gameFilter = document.getElementById('gameFilter');
    let allGames = new Set();
    clients.forEach(client => {
        allGames.add(client.game);
    });

    allGames.forEach(game => {
        const option = document.createElement('option');
        option.value = game;
        option.textContent = game;
        gameFilter.appendChild(option);
    });
}

// Function to toggle outdated clients visibility
function toggleOutdatedClients() {
    hideOutdated = !hideOutdated;
    document.getElementById('toggleOutdated').textContent = hideOutdated ? "Show Outdated" : "Hide Outdated";
    filterClients();
}

// Function to filter clients based on selected tag and game
function filterClients() {
    populateClients();
}
