const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/HamiltonWenhamDB"
);

const studentSeed = [
  {
    first: "Dave",
    last: "Hauck",
    email: "dave@dave.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYCUP8E5-f99c481e727c-512",
    level: "beginner",
    status: 1,
    categories: [
      "javacript", 
      "react"
    ],
    bio:
      "Trying to learn javascript to impress the ladies",
    date: new Date(Date.now())
  },
  {
    first: "Rodney",
    last: "Julien",
    email: "rodney@rodney.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMTFVUGQZ-f8c64f387f92-512",
    level: "advanced",
    status: 1,
    categories: [
      "angular", 
      "mongo"
    ],
    bio:
      "I'm a sum'gun who loves to code",
    date: new Date(Date.now())
  },
  {
    first: "Achille",
    last: "Bavoua",
    email: "achille@achille.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMPL144FM-89deb0011ed2-512",
    level: "advanced",
    status: 1,
    categories: [
      "Javascript",
      "MySQL",
      "CSS"
    ],
    bio:
      "I'm too handsome to worry about coding",
    date: new Date(Date.now())
  },
  {
    first: "Ali",
    last: "Mustafa",
    email: "ali@ali.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UN13LV7HT-9175ac33b69b-512",
    level: "advanced",
    status: 1,
    categories: [
      "Javascript",
      "Jquery",
      "HTML",
    ],
    bio:
      "I want to learn coding so I can work in a warm office",
    date: new Date(Date.now())
  }
];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.students.insert(
    [
      {
        first: "Dave",
        last: "Hauck",
        email: "dave@dave.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYCUP8E5-f99c481e727c-512",
        level: "beginner",
        status: 1,
        categories: [
          "javacript", 
          "react"
        ],
        bio:
          "Trying to learn javascript to impress the ladies",
        reviews: [],
        date: new Date(Date.now())
      },
      {
        first: "Rodney",
        last: "Julien",
        email: "rodney@rodney.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMTFVUGQZ-f8c64f387f92-512",
        level: "advanced",
        status: 1,
        categories: [
          "angular", 
          "mongo"
        ],
        bio:
          "I'm a sum'gun who loves to code",
        date: new Date(Date.now())
      },
      {
        first: "Achille",
        last: "Bavoua",
        email: "achille@achille.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMPL144FM-89deb0011ed2-512",
        level: "advanced",
        status: 1,
        categories: [
          "Javascript",
          "MySQL",
          "CSS"
        ],
        bio:
          "I'm too handsome to worry about coding",
        date: new Date(Date.now())
      },
      {
        first: "Ali",
        last: "Mustafa",
        email: "ali@ali.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UN13LV7HT-9175ac33b69b-512",
        level: "advanced",
        status: 1,
        categories: [
          "Javascript",
          "Jquery",
          "HTML",
        ],
        bio:
          "I want to learn coding so I can work in a warm office",
        date: new Date(Date.now())
      }
    ]
 )

 db.listings.insertOne(
  {
    name: "Dunkin' Donuts",
    address1: "Crosby's Marketplace",
    address2: "15 Walnut Road",
    city: "Hamilton",
    state: "MA",
    zip: "01982",
    photo: "https://cdn.usarestaurants.info/assets/uploads/9254b5c6020ab871dcce5231bd273918_-united-states-massachusetts-essex-county-hamilton-dunkin-978-468-0555htm.jpg",
    description: "Long-running chain serving signature donuts, breakfast sandwiches & a variety of coffee drinks.",
    categories: [
      "Restaurants", 
    ],
    website: "https://www.dunkindonuts.com/", 
    facebook: "https://www.dunkindonuts.com/",
    twitter: "https://www.dunkindonuts.com/",
    instagram: "https://www.dunkindonuts.com/",
    date: new Date(Date.now())
  }
 )




 // https://www.blwengineers.com/wp-content/uploads/2014/06/Cumberland-Farms-1-1024x768.jpg