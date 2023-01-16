
const express = require('express');
const app = express();
const Discord = require('discord.js');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_BANS", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGE_REACTIONS"];
const client = new Discord.Client({intents: intents, ws:{intents: intents}});
let embedid = 0;


client.on('ready', client => {

    let guild = client.guilds.cache.get("821898888130461736")
    let warns = JSON.parse(fs.readFileSync("./embed.json", "utf8"))
    var embedid = warns.config.id;


    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();

    var url = "https://oceaniaesports.gg/Discord/donation.php";
    console.log(url);
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);

            if(!embedid){ //check if any id registered or first time

                //Initial Embed
                const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('https://oceaniaesports.gg/support/')
                .setURL('https://oceaniaesports.gg/support/')
                .setAuthor('Tournament Donation', 'https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png','https://oceaniaesports.gg/support/')
                .setDescription('You can help our community in many different ways without spending any money. Please click on the link above and find out how you can help.')
                .setThumbnail('https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png')
                .addFields(
                )
                //.addField('Inline field title', 'Some value here', true)
                .setImage('https://cdn.discordapp.com/attachments/877087863488016384/1031463483197374464/donations.png')
                .setTimestamp()
                .setFooter('Last Update','https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png');  

                var dtitle =  "💲 Donations";
                var desc = "For every $100 in donations, we will create a new free entry tournament.";
                exampleEmbed.addField(dtitle, desc, false)
                
                var dtitle =  "🟧 Apex Legends";
                var desc = "$" + result.apex + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "🟨 CS:GO";
                var desc = "$" + result.gsgo + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "🟦 League of Legends";
                var desc = "$" + result.leagueoflegends + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "🟥 Valorant";
                var desc = "$" + result.valorant + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "🟩 Dota2";
                var desc = "$" + result.dota2 + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "🟫 Fifa";
                var desc = "$" + result.fifa + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "⬜️ Overwatch";
                var desc = "$" + result.overwatch + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
        
                var dtitle =  "⬛️ All Games";
                var desc = "$" + result.allgames + ".00 / $100";
                exampleEmbed.addField(dtitle, desc, false)
                    
                
                //Send embed and save id
                client.channels.cache.get(warns.config.channelid).send({ embeds: [exampleEmbed] })
                .then(async msg => {
                    warns.config.id = msg.id;//save json new data
                    fs.writeFileSync("./embed.json", JSON.stringify(warns), (err) => {
                        if (err) console.error(err)
                    });
                })
            }
            
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
    
})

client.on('interactionCreate', async interaction => {

    if (interaction.commandName === 'roll') {
        var roll =  Math.floor(Math.random() * 100) + 1;
        await interaction.reply(roll.toString());
        //await interaction.reply('Pong!');
    }
});

client.on('messageCreate', async msg => {

    const guild = client.guilds.cache.get('821898888130461736');   // copy the id of the server your bot is in and paste it in place of guild-ID.
     
    if ( msg.channelId == "1032014160940249099" && msg.author.id == "1032014435453247600" ) {
        if(msg.content == "Premium List Check"){

            var apexroleid = "1034746995207843870"; // 83
            var csgoroleid = "1034747793765580860"; // 47
            var dota2roleid = "1034747690841559070"; // 52
            var valorantroleid = "1034747324527808582"; // 92
            var leagueoflegendsroleid = "1034747538630250556"; // 81
            var overwatchroleid = "1033104923350552606"; // 86
            var fifaroleid = "1033105207392993322"; // 98
            var premiumroleid = "928547461725818900"; // premium
            var streamerroleid = "930729482690637844"; // streamer

            var XMLHttpRequest = require('xhr2');
            var xhr = new XMLHttpRequest();

            var url = "https://oceaniaesports.gg/Discord/premiumlist.php";
            console.log(url);
            xhr=new XMLHttpRequest();
            xhr.onreadystatechange = function() 
            {
                if (this.readyState == 4 && this.status == 200) {
                    var result = JSON.parse(this.responseText);
                    console.log(result);
                    const apexlist = [];
                    const csgolist = [];
                    const dota2list = [];
                    const valorantlist = [];
                    const lollist = [];
                    const overwatchlist = [];
                    const fifalist = [];
                    const premiumlist = [];
                    const streamlist = [];

                    result.forEach(function(user) {
                        if(user.role == '83'){
                            apexlist.push(user.discordid)
                        }
                        if(user.role == '47'){
                            csgolist.push(user.discordid)
                        }
                        if(user.role == '52'){
                            dota2list.push(user.discordid)
                        }
                        if(user.role == '92'){
                            valorantlist.push(user.discordid)
                        }
                        if(user.role == '81'){
                            lollist.push(user.discordid)
                        }
                        if(user.role == '86'){
                            overwatchlist.push(user.discordid)
                        }
                        if(user.role == '98'){
                            fifalist.push(user.discordid)
                        }
                        if(user.role == 'premium'){
                            premiumlist.push(user.discordid)
                        }
                        if(user.role == 'streamer'){
                            streamlist.push(user.discordid)
                        }
                    });

                    // #### APEX
                    const apexmembers = msg.guild.roles.cache.get(apexroleid).members.map(m=>m.user);
                    const apexrole = guild.roles.cache.get(apexroleid);

                    apexmembers.forEach(async function(user) {
                        if(!apexlist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(apexrole);
                            }
                        }
                    })

                    apexlist.forEach(async function(user) {
                        if(!apexmembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(apexrole);  
                            }
                        }
                    })

                    // #### CSGO
                    const csgomembers = msg.guild.roles.cache.get(csgoroleid).members.map(m=>m.user);
                    const csgorole = guild.roles.cache.get(csgoroleid);

                    csgomembers.forEach(async function(user) {
                        if(!csgolist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(csgorole);
                            }
                        }
                    })

                    csgolist.forEach(async function(user) {
                        if(!csgomembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(csgorole);  
                            }
                        }
                    })

                    // #### DOTA2
                    const dota2members = msg.guild.roles.cache.get(dota2roleid).members.map(m=>m.user);
                    const dota2role = guild.roles.cache.get(dota2roleid);

                    dota2members.forEach(async function(user) {
                        if(!dota2list.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(dota2role);
                            }
                        }
                    })

                    dota2list.forEach(async function(user) {
                        if(!dota2members.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(dota2role);  
                            }
                        }
                    })
                    
                    // #### VALORANT
                    const valorantmembers = msg.guild.roles.cache.get(valorantroleid).members.map(m=>m.user);
                    const valorantrole = guild.roles.cache.get(valorantroleid);

                    valorantmembers.forEach(async function(user) {
                        if(!valorantlist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(valorantrole);
                            }
                        }
                    })

                    valorantlist.forEach(async function(user) {
                        if(!valorantmembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(valorantrole);  
                            }
                        }
                    })

                
                    // #### LEAGUE OF LEGENDS
                    const lolmembers = msg.guild.roles.cache.get(leagueoflegendsroleid).members.map(m=>m.user);
                    const lolrole = guild.roles.cache.get(leagueoflegendsroleid);

                    lolmembers.forEach(async function(user) {
                        if(!lollist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(lolrole);
                            }
                        }
                    })

                    lollist.forEach(async function(user) {
                        if(!lolmembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(lolrole);  
                            }
                        }
                    })

                     // #### OVERWATCH
                     const overwatchmembers = msg.guild.roles.cache.get(overwatchroleid).members.map(m=>m.user);
                     const overwatchrole = guild.roles.cache.get(overwatchroleid);
 
                     overwatchmembers.forEach(async function(user) {
                         if(!overwatchlist.includes(user.id)){
                             if (guild.members.fetch(user.id)) {
                                 const member = await guild.members.fetch(user.id);
                                 member.roles.remove(overwatchrole);
                             }
                         }
                     })
 
                     overwatchlist.forEach(async function(user) {
                         if(!overwatchmembers.includes(user)){
                             if (guild.members.fetch(user)) {
                                 const member = await guild.members.fetch(user);
                                 member.roles.add(overwatchrole);  
                             }
                         }
                     })

                      // #### FIFA
                    const fifamembers = msg.guild.roles.cache.get(fifaroleid).members.map(m=>m.user);
                    const fifarole = guild.roles.cache.get(fifaroleid);

                    fifamembers.forEach(async function(user) {
                        if(!fifalist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(fifarole);
                            }
                        }
                    })

                    fifalist.forEach(async function(user) {
                        if(!fifamembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(fifarole);  
                            }
                        }
                    })

                    // #### PREMIUM
                    const premiummembers = msg.guild.roles.cache.get(premiumroleid).members.map(m=>m.user);
                    const premiumrole = guild.roles.cache.get(premiumroleid);

                    premiummembers.forEach(async function(user) {
                        if(!premiumlist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(premiumrole);
                            }
                        }
                    })

                    premiumlist.forEach(async function(user) {
                        if(!premiummembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(premiumrole);  
                            }
                        }
                    })

                    // #### STREAMER
                    const streammembers = msg.guild.roles.cache.get(streamerroleid).members.map(m=>m.user);
                    const streamrole = guild.roles.cache.get(streamerroleid);

                    streammembers.forEach(async function(user) {
                        if(!streamlist.includes(user.id)){
                            if (guild.members.fetch(user.id)) {
                                const member = await guild.members.fetch(user.id);
                                member.roles.remove(streamrole);
                            }
                        }
                    })

                    streamlist.forEach(async function(user) {
                        if(!streammembers.includes(user)){
                            if (guild.members.fetch(user)) {
                                const member = await guild.members.fetch(user);
                                member.roles.add(streamrole);  
                            }
                        }
                    })

                }
            };
            xhr.open("GET", url, true);
            xhr.send();

        }
    }


    if ( msg.channelId == "853113040919855135" && msg.author.id == "930323699683430401" ) {

        let warns = JSON.parse(fs.readFileSync("./embed.json", "utf8"))

        var XMLHttpRequest = require('xhr2');
        var xhr = new XMLHttpRequest();

        var url = "https://oceaniaesports.gg/Discord/donation.php";
        console.log(url);
        xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);

                const exampleEmbed2 = new MessageEmbed()

                .setColor('#0099ff')
                .setTitle('https://oceaniaesports.gg/support/')
                .setURL('https://oceaniaesports.gg/support/')
                .setAuthor('Tournament Donation', 'https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png','https://oceaniaesports.gg/support/')
                .setDescription('You can help our community in many different ways without spending any money. Please click on the link above and find out how you can help.')
                .setThumbnail('https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png')
                .setTimestamp()
                .setFooter('Last Update','https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png');  

                var dtitle =  "💲 Donations";
                var desc = "For every $100 in donations, we will create a new free entry tournament.";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟧 Apex Legends";
                var desc = "$" + result.apex + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟨 CS:GO";
                var desc = "$" + result.gsgo + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟦 League of Legends";
                var desc = "$" + result.leagueoflegends + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟥 Valorant";
                var desc = "$" + result.valorant + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟩 Dota2";
                var desc = "$" + result.dota2 + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "🟫 Fifa";
                var desc = "$" + result.fifa + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "⬜️ Overwatch";
                var desc = "$" + result.overwatch + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                var dtitle =  "⬛️ All Games";
                var desc = "$" + result.allgames + ".00 / $100";
                exampleEmbed2.addField(dtitle, desc, false)

                const embedMessage = client.channels.cache.get(warns.config.channelid).messages.fetch({ around: warns.config.id, limit: 1 })
                .then(async msg => {
                    const fetchedMsg = msg.first();
                    fetchedMsg.edit({ embeds: [exampleEmbed2] });
                })

                console.log("Donation Updated");
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

});


client.login('OTY1NTE0NDkxMzE4MTIwNDc4.G83t7l.PG9mjpA-w0R35bwErNvOmlEHELC4SZ7K5wBQeE');