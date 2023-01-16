const { REST } = require('@discordjs/rest');
//const { Routes } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
//const { REST, Routes } = require('discord.js');

const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [
    {
        name: 'roll',
        description: 'Tournament Roll',
    },
	{
        name: 'championrole',
        description: 'Update Champion Role',

    },
	{
        name: 'tournamentchannel',
        description: 'create or update tournament channels',
		options: [
			{
				name: 'tournament',
				description: 'Tournament ID that you are creating the channels',
				required: true,
				type: 3,
			},
			{
				name: 'type',
				description: 'What channels are you adding or updating?',
				required: true,
				type: 3,
				choices: [
					{
						name: "bracket",
						value: "bracket"
					},
					{
						name: "channel",
						value: "channel"
					}
				]
			},
		],
		permissions: [
			{
				id: '828023642771947580',
				type: '"ROLE"',
				permission: true,
			}
		],
    },
];

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

// const { SlashCommandBuilder } = require('@discordjs/builders')

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('test')
// 		.setDescription('Select a member and ban them.')
// 		.addUserOption(option =>
// 			option
// 				.setName('target')
// 				.setDescription('The member to ban')
// 				.setRequired(true))
		
// };

// Grab all the command files from the commands directory you created earlier
//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	commands.push(command.data.toJSON());
// }

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '9' }).setToken("OTY1NTE0NDkxMzE4MTIwNDc4.G83t7l.PG9mjpA-w0R35bwErNvOmlEHELC4SZ7K5wBQeE");

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(Routes.applicationGuildCommands("965514491318120478", "821898888130461736"),{ body: commands });

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();