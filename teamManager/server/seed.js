const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Player = require('./models/player.model');
const Game = require('./models/game.model');
require('dotenv').config();

const seedGames = async () => {
    try {
        await connectDB();

        const players = await Player.find();
        if (players.length === 0) {
            console.log('No players found. Please create players first.');
            process.exit(1);
        }

        const gameTitles = ['Game 1', 'Game 2', 'Game 3'];
        const statuses = ['playing', 'not playing', 'undecided'];

        for (const title of gameTitles) {
            const gamePlayers = players.map(player => {
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                return {
                    player: player._id,
                    status: randomStatus
                };
            });

            const existingGame = await Game.findOne({ title });
            if (existingGame) {
                console.log(`Game "${title}" already exists. Updating...`);
                existingGame.players = gamePlayers;
                await existingGame.save();
                console.log(`Game "${title}" updated.`);
            } else {
                await Game.create({
                    title: title,
                    players: gamePlayers
                });
                console.log(`Game "${title}" created.`);
            }
        }

        console.log('Seeding completed successfully.');
        process.exit(0);

    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedGames();
