const Discord = require("discord.js-self");
const { tokens, ActivityName, status, ActivityType, channel, random } = require("./setting.js")

//Starting Application
for (const token of tokens) {
    const client = new Discord.Client();

    //setting up client ActivityType & ActivityName & status
    client.on('ready', () => {
        client.user.setStatus(random(status));
        client.user.setActivity(random(ActivityName), { type: random(ActivityType) });
    })

    //startnig joining voice
    client.on("ready", async () => {
        if (!channel) console.error(`NOT joined: ${client.user.tag}`);
        else console.info(`Joined voice : ${client.user.tag}`)
        channel.join().then((connection) => {
            connection.voice.setSelfDeaf(true); // false or true
            connection.voice.setSelfMute(true); // false or true
        });
    });
    client.login(token);
}