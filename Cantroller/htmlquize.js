const htmlquestions = [
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
      question: "Which tag is used for inserting an image in HTML?",
      options: ["<image>", "<img>", "<src>", "<pic>"],
      answer: "<img>"
    },
    {
      question: "Which HTML tag is used to define a client-side JavaScript script?",
      options: ["<js>", "<script>", "<javascript>", "<client-script>"],
      answer: "<script>"
    },
    {
      question: "What is the correct tag for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<linebreak>"],
      answer: "<br>"
    },
    {
      question: "Which HTML tag is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<row>"],
      answer: "<tr>"
    },
    {
      question: "Which attribute is used to provide a unique name to an HTML element?",
      options: ["class", "id", "name", "style"],
      answer: "id"
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "What tag is used to define a table in HTML?",
      options: ["<table>", "<td>", "<tr>", "<tab>"],
      answer: "<table>"
    },
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["<head>", "<h1>", "<h6>", "<header>"],
      answer: "<h1>"
    },
    {
      question: "Which attribute is used to display an image?",
      options: ["href", "src", "alt", "link"],
      answer: "src"
    },
    {
      question: "What does the <title> tag do in HTML?",
      options: [
        "Sets the main heading",
        "Displays a tooltip",
        "Specifies the document title",
        "Creates a button"
      ],
      answer: "Specifies the document title"
    },
    {
      question: "What tag is used to define a list item?",
      options: ["<list>", "<item>", "<li>", "<ul>"],
      answer: "<li>"
    },
    {
      question: "Which tag is used to create a form in HTML?",
      options: ["<form>", "<input>", "<submit>", "<button>"],
      answer: "<form>"
    },
    {
      question: "What tag is used to add a checkbox in a form?",
      options: ["<checkbox>", "<input type='checkbox'>", "<check>", "<box>"],
      answer: "<input type='checkbox'>"
    }
  ];

const gethtmlQuiz = (req, res) => {
  try {
    res.json(htmlquestions);
  } catch (err) {
    console.error("Error in /api/htmlquestions:", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

const posthtmlQuiz = (req, res) => {
  const userAnswers = req.body;
  if (!Array.isArray(userAnswers) || userAnswers.length !== htmlquestions.length) {
    return res.status(400).json({ error: "Invalid number of answers" });
  }

  let score = 0;
  const results = [];

  htmlquestions.forEach((q, index) => {
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
    total: htmlquestions.length,
    results
  });
};

module.exports = { gethtmlQuiz, posthtmlQuiz };
