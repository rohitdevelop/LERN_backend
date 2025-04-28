const javascriptquestions = [
    {
      question: "What is JavaScript primarily used for?",
      options: [
        "Styling web pages",
        "Structuring web content",
        "Adding interactivity to web pages",
        "Defining databases"
      ],
      answer: "Adding interactivity to web pages"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/*", "#", "<!--"],
      answer: "//"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["variable carName;", "var carName;", "v carName;", "carName var;"],
      answer: "var carName;"
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      options: ["var", "let", "const", "constant"],
      answer: "const"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "=", "-", "+"],
      answer: "="
    },
    {
      question: "What will `typeof []` return?",
      options: ["array", "object", "list", "undefined"],
      answer: "object"
    },
    {
      question: "Which method is used to write something into the browser console?",
      options: ["console.write()", "console.log()", "log.console()", "document.console()"],
      answer: "console.log()"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "create myFunction()"
      ],
      answer: "function myFunction()"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
      answer: "onclick"
    },
    {
      question: "Which method is used to select an element by id?",
      options: [
        "getElementByClassName",
        "querySelectorAll",
        "getElementById",
        "querySelectorId"
      ],
      answer: "getElementById"
    },
    {
      question: "Which operator is used to compare both value and type?",
      options: ["==", "===", "!=", "="],
      answer: "==="
    },
    {
      question: "How do you create an array in JavaScript?",
      options: [
        "var colors = 'red', 'green', 'blue';",
        "var colors = (red, green, blue);",
        "var colors = ['red', 'green', 'blue'];",
        "var colors = {red, green, blue};"
      ],
      answer: "var colors = ['red', 'green', 'blue'];"
    },
    {
      question: "How do you call a function named `myFunction`?",
      options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
      answer: "myFunction()"
    },
    {
      question: "Which method adds a new element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
      answer: "JSON.parse()"
    }
  ];
  

  const getjsQuiz = (req, res) => {
    try {
      res.json(javascriptquestions);
    } catch (err) {
      console.error("Error in /api/javascriptquestions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postjsQuiz = (req, res) => {
    const userAnswers = req.body;
    if (!Array.isArray(userAnswers) || userAnswers.length !== javascriptquestions.length) {
      return res.status(400).json({ error: "Invalid number of answers" });
    }
  
    let score = 0;
    const results = [];
  
    javascriptquestions.forEach((q, index) => {
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
      total: javascriptquestions.length,
      results
    });
  };
  
  module.exports = { getjsQuiz, postjsQuiz };