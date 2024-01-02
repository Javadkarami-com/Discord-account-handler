// Import mudules
const Discord = require("discord.js-self");
const { ActivityType, ActivityName, status, channelId, tokens } = require("./setting.json");


//Starting Application
const random = (Thing) => Thing[Math.floor(Math.random() * Thing.length)];
for (const token of tokens) {
    const client = new Discord.Client();

    //Setting up client ActivityType & ActivityName & status
    client.on('ready', () => {
        client.user.setStatus(random(status));
        client.user.setActivity(random(ActivityName), { type: random(ActivityType) });
    });

    //Account startnig joining voice
    const channel = client.channels.cache.get(channelId);
    client.on("ready", async () => {
        if (!channel) return console.error(`NOT joined: ${client.user.tag}`);
        else console.info(`Joined voice : ${client.user.tag}`)

        channel.join().then((connection) => {
            connection.voice.setSelfDeaf(true); // false or true
            connection.voice.setSelfMute(true); // false or true
        });
    });
    client.login(token);
}
