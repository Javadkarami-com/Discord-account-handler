const channelId = "PUT CHANEL ID HERE LIKE 71709868757501440";
const tokens = [
    "TOKEN",
    "TOKEN",
    "TOKEN",
    "TOKEN",
    "TOKEN"
];


//---------------------------------------------IGNORE THIS---------------------------------------------
const ActivityName = ["Apex Legends", "Fortnite", "League of Legends", "Overwatch", "Rocket League", "Smite", "World of Warcraft"];
const status = ["online", "idle", "dnd", "invisible"];
const ActivityType = ["PLAYING", "LISTENING", "WATCHING"];
const channel = client.channels.cache.get(channelId);
const random = (Thing) => Thing[Math.floor(Math.random() * Thing.length)];