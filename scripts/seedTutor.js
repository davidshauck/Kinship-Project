const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/HamiltonWenhamDB"
);

const tutorSeed = [
  {
    first: "Jim",
    last: "Dhima",
    email: "jim@jim.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UN08XVAMD-91d7f7c5aa77-512",
    password: "444",
    status: 2,
    categories: [
      "Javascript",
      "React",
      "Angular",
    ],
    bio:
      "I've been coding since I was in diapers",
    rating: 2.4,
    reviews: [
      {
      reviewer: "",
      title: "",
      review: "",
      }
    ],
    date: new Date(Date.now())
  },
  {
    first: "Justin",
    last: "Rice",
    email: "justin@justin.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMKKNMWAW-aed8cd16208f-512",
    password: "333",
    status: 2,
    categories: [
      "Mongo",
      "SQL",
      "Node.js",
      "Mongoose"
    ],
    bio:
      "If anyone wants to learn about database architecture, come see me. I am a Full-Stack Web Development Teacher and DevOps Engineer who is most comfortable with working in teams that have optimism about the future of tech. I love what I do. ",
    reviews: [],
    date: new Date(Date.now())
  },
  {
    first: "Dan",
    last: "Levenson",
    email: "dan@dan.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYD1375K-526a14ab8189-512",
    password: "222",
    status: 2,
    categories: [
      "Ruby on Rails",
      "React",
      "Jquery",
      "Javascript"
    ],
    bio:
      "I'm the Jacob deGrom of coding. Build websites for small businesses primarily utilizing HTML, CSS, React, and Bootstrap. Responsibilities included working with clients to determine web page content, creating, designing, and deploying the webpage, as well as providing follow-up support as needed by clients.",
    reviews: [],
    date: new Date(Date.now())
  },
  {
    first: "Irving",
    last: "Angulo",
    email: "irving@irving.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMS1L0BQ9-3df4a04a4703-512",
    password: "111",
    status: 2,
    categories: [
      "Javascript",
      "Jquery",
      "HTML",
      "CSS",
      "Firebase"
    ],
    bio:
      "I am Irving dammit!",
    rating: "5.0",
    reviews: [],
    date: new Date(Date.now())
  }
];

db.Tutor
  .remove({})
  .then(() => db.Tutor.collection.insertMany(tutorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



  db.tutors.insertOne(
    {
      first: "Irving",
      last: "Angulo",
      email: "irving@irving.com",
      photo: "https://ca.slack-edge.com/TMU2T4ECF-UMS1L0BQ9-3df4a04a4703-512",
      password: "111",
      status: 2,
      categories: [
        "Javascript",
        "Jquery",
        "HTML",
        "CSS",
        "Firebase"
      ],
      bio:
        "Full Stack Web Developer from the Dominican Republic. My background is in music technology, composition, and cello. I have a solid understanding of JavaScript with a strong focus on the MERN stack, and I am also proficient with Max/MSP and C++.",
      rating: "5.0",
      reviews: [],
      date: new Date(Date.now())
    }
    )