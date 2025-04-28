const mongoquestions = [
    {
      question: "What type of database is MongoDB?",
      options: [
        "Relational database",
        "Document-oriented NoSQL database",
        "Graph database",
        "Key-value store"
      ],
      answer: "Document-oriented NoSQL database"
    },
    {
      question: "Which command is used to insert a document in MongoDB?",
      options: ["db.collection.insertOne()", "db.collection.add()", "db.collection.save()", "db.collection.push()"],
      answer: "db.collection.insertOne()"
    },
    {
      question: "In MongoDB, what is a 'document'?",
      options: [
        "A row in a relational table",
        "A JSON-like data structure",
        "An API response",
        "A file on the server"
      ],
      answer: "A JSON-like data structure"
    },
    {
      question: "Which MongoDB method is used to find documents?",
      options: ["search()", "find()", "get()", "query()"],
      answer: "find()"
    },
    {
      question: "What is the default database in MongoDB?",
      options: ["defaultDB", "mongoDB", "admin", "test"],
      answer: "test"
    },
    {
      question: "Which company developed MongoDB?",
      options: ["Google", "Facebook", "MongoDB Inc.", "Microsoft"],
      answer: "MongoDB Inc."
    },
    {
      question: "Which field is automatically added to every MongoDB document?",
      options: ["id", "_id", "docId", "mongoId"],
      answer: "_id"
    },
    {
      question: "What is used to connect Node.js with MongoDB?",
      options: ["mongoose", "express", "nodemon", "axios"],
      answer: "mongoose"
    }
  ];

  
  const getmongoQuiz = (req, res) => {
    try {
      res.json(mongoquestions);
    } catch (err) {
      console.error("Error in /api/mongoquestions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postmongoQuiz = (req, res) => {
    const userAnswers = req.body;
    if (!Array.isArray(userAnswers) || userAnswers.length !== mongoquestions.length) {
      return res.status(400).json({ error: "Invalid number of answers" });
    }
  
    let score = 0;
    const results = [];
  
    mongoquestions.forEach((q, index) => {
      const userAnswer = userAnswers[index].trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
  
      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score++;
  
      results.push({
        question: q.question, // corrected here
        selected: userAnswers[index],
        correct: q.answer,
        isCorrect
      });
    });
  
    res.json({
      score,
      total: mongoquestions.length,
      results
    });
  };
  
  module.exports = { getmongoQuiz, postmongoQuiz };