const questions = [
    {
      question: "What does the abbreviation 'IP' stand for in networking?",
      options: ["Internet Protocol", "Internal Protocol", "Internet Process", "Internal Process"],
      answer: "Internet Protocol"
    },
    {
      question: "Which language runs in browser?",
      options: ["Python", "Java", "C++", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "Hyper Transfer Markup Language"
      ],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "What is the brain of the computer?",
      options: ["RAM", "Hard Disk", "CPU", "GPU"],
      answer: "CPU"
    },
    {
      question: "Which device is used to input data into a computer?",
      options: ["Monitor", "Keyboard", "Speaker", "Printer"],
      answer: "Keyboard"
    },
    {
      question: "Which of the following is an operating system?",
      options: ["Windows", "Linux", "MacOS", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which protocol is used to transfer web pages?",
      options: ["FTP", "SMTP", "HTTP", "TCP"],
      answer: "HTTP"
    },
    {
      question: "Which one is a storage device?",
      options: ["Monitor", "Keyboard", "Hard Drive", "CPU"],
      answer: "Hard Drive"
    },
    {
      question: "Which tag is used for inserting an image in HTML?",
      options: ["<image>", "<img>", "<src>", "<pic>"],
      answer: "<img>"
    },
    {
      question: "Which part of the computer stores data permanently?",
      options: ["RAM", "Cache", "ROM", "Hard Disk"],
      answer: "Hard Disk"
    },
    {
      question: "CSS is used for:",
      options: [
        "Adding interactivity",
        "Structuring HTML",
        "Styling web pages",
        "Running backend code"
      ],
      answer: "Styling web pages"
    },
    {
      question: "What is the correct syntax for creating a WebSocket connection in JavaScript?",
      options: ["new WebSocket('ws://example.com')", "new WebSocket('http://example.com')", "new WebSocket('https://example.com')", "new Socket('ws://example.com')"],
      answer: "new WebSocket('ws://example.com')"
    },
    {
      question: "Which HTML tag is used to define a client-side JavaScript script?",
      options: ["<js>", "<script>", "<javascript>", "<client-script>"],
      answer: "<script>"
    },
    {
      question: "Which of the following browsers support the 'Service Worker' API?",
      options: ["Chrome", "Firefox", "Safari", "All of the above"],
      answer: "All of the above"
    }
  ];
  
  const getwebQuiz = (req, res) => {
    try {
      res.json(questions);
    } catch (err) {
      console.error("Error in /api/questions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postwebQuiz = (req, res) => {
    const userAnswers = req.body;
    let score = 0;
    const results = [];
  
    questions.forEach((q, index) => {
      // Normalize the answers (trim and convert to lowercase)
      const userAnswer = userAnswers[index].trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
  
      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score++;
  
      results.push({
        question: q.question,
        selected: userAnswers[index],
        correct: q.answer,
        isCorrect
      });
    });
  
    res.json({
      score,
      total: questions.length,
      results
    });
  };
  
  module.exports = { getwebQuiz, postwebQuiz };
  