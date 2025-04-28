const expressquestions = [
    {
      question: "What is Express.js?",
      options: [
        "A frontend framework",
        "A backend web application framework for Node.js",
        "A database",
        "A browser extension"
      ],
      answer: "A backend web application framework for Node.js"
    },
    {
      question: "Which method is used to define a GET route in Express?",
      options: ["app.get()", "app.route()", "app.fetch()", "app.create()"],
      answer: "app.get()"
    },
    {
      question: "Which function handles middleware in Express?",
      options: ["next()", "handle()", "use()", "route()"],
      answer: "next()"
    },
    {
      question: "How do you start an Express server?",
      options: [
        "app.start()",
        "app.begin()",
        "app.listen()",
        "app.run()"
      ],
      answer: "app.listen()"
    },
    {
      question: "What is middleware in Express?",
      options: [
        "A function that handles database queries",
        "A function that handles requests and responses",
        "A function that creates frontend views",
        "A function that runs the server"
      ],
      answer: "A function that handles requests and responses"
    },
    {
      question: "Which HTTP method is used to send data to the server?",
      options: ["GET", "POST", "DELETE", "PATCH"],
      answer: "POST"
    },
    {
      question: "Which package is commonly used to handle JSON data in Express?",
      options: ["body-parser", "express-json", "json-parser", "express-body"],
      answer: "body-parser"
    },
    {
      question: "What does `req.params` contain?",
      options: [
        "Query string parameters",
        "Form data",
        "Route parameters",
        "Header information"
      ],
      answer: "Route parameters"
    }
  ];

  
  const getexpressQuiz = (req, res) => {
    try {
      res.json(expressquestions);  // Responds with the quiz data
    } catch (err) {
      console.error("Error in /api/expressquestions:", err);  // Logs error
      res.status(500).json({ error: "Something went wrong!" });  // Sends error if something goes wrong
    }
  };
  
  
  const postexpressQuiz = (req, res) => {
    const userAnswers = req.body;  // Extract user answers from request body
    
    // Validate the answers
    if (!Array.isArray(userAnswers) || userAnswers.length !== expressquestions.length) {
      return res.status(400).json({ error: "Invalid number of answers" });  // Return error if validation fails
    }
  
    let score = 0;
    const results = [];
  
    expressquestions.forEach((q, index) => {
      const userAnswer = userAnswers[index].trim().toLowerCase();  // Normalize user answer
      const correctAnswer = q.answer.trim().toLowerCase();  // Normalize correct answer
  
      const isCorrect = userAnswer === correctAnswer;  // Check if answer is correct
      if (isCorrect) score++;  // Increase score if correct
  
      results.push({
        question: q.question,  // Include the question in the results
        selected: userAnswers[index],  // User's selected answer
        correct: q.answer,  // The correct answer
        isCorrect  // Whether the answer was correct
      });
    });
  
    // Send back the score, total questions, and detailed results
    res.json({
      score,
      total: expressquestions.length,
      results
    });
  };
  
  
  module.exports = { getexpressQuiz, postexpressQuiz };
