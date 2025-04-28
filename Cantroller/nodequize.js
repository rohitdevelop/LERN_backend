const nodequestions = [
    {
      question: "What is Node.js primarily used for?",
      options: [
        "Designing websites",
        "Building server-side applications",
        "Creating mobile apps",
        "Editing videos"
      ],
      answer: "Building server-side applications"
    },
    {
      question: "Which programming language is Node.js based on?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "Which command is used to initialize a Node.js project?",
      options: ["npm install", "node init", "npm init", "node install"],
      answer: "npm init"
    },
    {
      question: "Which object in Node.js is used to handle file system operations?",
      options: ["fs", "http", "url", "path"],
      answer: "fs"
    },
    {
      question: "Which keyword is used to import a module in Node.js (CommonJS)?",
      options: ["import", "include", "require", "use"],
      answer: "require"
    },
    {
      question: "Which module is used to create a server in Node.js?",
      options: ["fs", "http", "path", "os"],
      answer: "http"
    },
    {
      question: "What is the file extension for a typical Node.js file?",
      options: [".html", ".js", ".node", ".json"],
      answer: ".js"
    },
    {
      question: "What does `npm` stand for?",
      options: [
        "Node Project Manager",
        "Node Package Manager",
        "New Package Manager",
        "Next Programming Method"
      ],
      answer: "Node Package Manager"
    }
  ];

  
  const getnodeQuiz = (req, res) => {
    try {
      res.json(nodequestions);
    } catch (err) {
      console.error("Error in /api/nodequestions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postnodeQuiz = (req, res) => {
    const userAnswers = req.body;
    if (!Array.isArray(userAnswers) || userAnswers.length !== nodequestions.length) {
      return res.status(400).json({ error: "Invalid number of answers" });
    }
  
    let score = 0;
    const results = [];
  
    nodequestions.forEach((q, index) => {
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
      total: nodequestions.length,
      results
    });
  };
  
  module.exports = { getnodeQuiz, postnodeQuiz };