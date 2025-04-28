const cssquestions = [
    {
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML tag is used to link an external CSS file?",
      options: ["<link>", "<css>", "<style>", "<stylesheet>"],
      answer: "<link>"
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "background-color", "bgcolor", "background"],
      answer: "background-color"
    },
    {
      question: "Which property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["font-weight: bold;", "text-weight: bold;", "font: bold;", "weight: bold;"],
      answer: "font-weight: bold;"
    },
    {
      question: "Which property is used to change the text color?",
      options: ["background-color", "font-color", "text-color", "color"],
      answer: "color"
    },
    {
      question: "Which property is used to set the space between lines?",
      options: ["line-height", "letter-spacing", "word-spacing", "spacing"],
      answer: "line-height"
    },
    {
      question: "Which property is used to align text in CSS?",
      options: ["text-align", "align-text", "text-style", "font-align"],
      answer: "text-align"
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: ["#demo", ".demo", "demo", "*demo"],
      answer: "#demo"
    },
    {
      question: "How do you select elements with class 'container' in CSS?",
      options: [".container", "#container", "container", "*container"],
      answer: ".container"
    },
    {
      question: "Which property changes the left margin of an element?",
      options: ["padding-left", "margin-left", "indent", "spacing-left"],
      answer: "margin-left"
    },
    {
      question: "Which CSS property controls the size of an element?",
      options: ["height and width", "size", "dimension", "length"],
      answer: "height and width"
    },
    {
      question: "Which value of `position` makes the element relative to its normal position?",
      options: ["static", "fixed", "absolute", "relative"],
      answer: "relative"
    },
    {
      question: "Which CSS property makes an element disappear but still take up space?",
      options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide: true;"],
      answer: "visibility: hidden;"
    },
    {
      question: "Which CSS property is used to make a responsive design?",
      options: ["media queries", "responsive", "screen-size", "viewport"],
      answer: "media queries"
    }
  ];
  

  const getcssQuiz = (req, res) => {
    try {
      res.json(cssquestions);
    } catch (err) {
      console.error("Error in /api/cssquestions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postcssQuiz = (req, res) => {
    const userAnswers = req.body;
    if (!Array.isArray(userAnswers) || userAnswers.length !== cssquestions.length) {
      return res.status(400).json({ error: "Invalid number of answers" });
    }
  
    let score = 0;
    const results = [];
  
    cssquestions.forEach((q, index) => {
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
      total: cssquestions.length,
      results
    });
  };
  
  module.exports = { getcssQuiz, postcssQuiz };