//Create a script that populates the database with disc objects
require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
const Disc = require('../models/discModel');
const fs = require('fs');

mongoose.connect(process.env.MONGO_URI);

//Read data from discs.json
const discData = JSON.parse(fs.readFileSync('../discs.json', "utf8"));

// Seed the database, any pre-existing data will be erased
async function seedDatabase() {
    try {
      // Remove existing data
      await Disc.deleteMany();
  
      // Insert new data
      await Disc.insertMany(discData);
  
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Close the connection
      mongoose.disconnect();
    }
  }
  
  // Run the seeding function
  seedDatabase();