const reactquestions = [
    {
      question: "What is React mainly used for?",
      options: [
        "Styling websites",
        "Building user interfaces",
        "Managing databases",
        "Handling server-side operations"
      ],
      answer: "Building user interfaces"
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook"
    },
    {
      question: "What is a React component?",
      options: [
        "A function or class that returns HTML",
        "A database table",
        "A CSS file",
        "A backend API"
      ],
      answer: "A function or class that returns HTML"
    },
    {
      question: "How do you create a component in React?",
      options: [
        "function MyComponent() {}",
        "create component MyComponent()",
        "component MyComponent()",
        "new MyComponent()"
      ],
      answer: "function MyComponent() {}"
    },
    {
      question: "What syntax is used to write HTML inside JavaScript in React?",
      options: ["HTMLJS", "JSHTML", "JSX", "ReactHTML"],
      answer: "JSX"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      answer: "useState"
    },
    {
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      answer: "useEffect"
    },
    {
      question: "How do you pass data to a child component in React?",
      options: ["props", "state", "setState", "dispatch"],
      answer: "props"
    },
    {
      question: "What does the `key` prop help with in React lists?",
      options: [
        "Styling list items",
        "Tracking item uniqueness",
        "Changing colors",
        "Debugging the app"
      ],
      answer: "Tracking item uniqueness"
    },
    {
      question: "Which command is used to create a new React app?",
      options: [
        "npx create-react-app myApp",
        "npm create-react-app myApp",
        "npx react-new-app myApp",
        "npm react-create myApp"
      ],
      answer: "npx create-react-app myApp"
    },
    {
      question: "What is the default file extension for React components?",
      options: [".js", ".jsx", ".react", ".html"],
      answer: ".jsx"
    },
    {
      question: "Which tool helps manage routing in React apps?",
      options: ["React Router", "Redux", "Axios", "Webpack"],
      answer: "React Router"
    },
    {
      question: "Which method is used to render React content into the DOM?",
      options: ["React.mount()", "ReactDOM.render()", "React.render()", "DOMReact.render()"],
      answer: "ReactDOM.render()"
    },
    {
      question: "In React, props are _______",
      options: ["Mutable", "Immutable", "Editable", "Changeable"],
      answer: "Immutable"
    },
    {
      question: "What does useRef hook provide?",
      options: [
        "A way to manage global state",
        "A way to create side effects",
        "A way to persist values without causing re-render",
        "A way to fetch APIs"
      ],
      answer: "A way to persist values without causing re-render"
    }
  ];

  
  const getreactQuiz = (req, res) => {
    try {
      res.json(reactquestions);
    } catch (err) {
      console.error("Error in /api/reactquestions:", err);
      res.status(500).json({ error: "Something went wrong!" });
    }
  };
  
  const postreactQuiz = (req, res) => {
    const userAnswers = req.body;
    if (!Array.isArray(userAnswers) || userAnswers.length !==  reactquestions.length){
      return res.status(400).json({ error: "Invalid number of answers" });
    }
  
    let score = 0;
    const results = [];
  
    reactquestions.forEach((q, index) => {
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
      total: reactquestions.length,
      results
    });
  };
   
  module.exports = { getreactQuiz, postreactQuiz };