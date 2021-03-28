import "./App.css";
import Card from "./components/Card";

function App() {
  const faqs = [
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam quod labore enim illum aperiam dolores inventore architecto cupiditate officiis?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequatur.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam quod labore enim illum aperiam dolores inventore architecto cupiditate officiis?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequatur.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam quod labore enim illum aperiam dolores inventore architecto cupiditate officiis?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequatur.",
    },
  ];

  return (
    <div className="App">
      {faqs.map(({ question, answer }, idx) => (
        <Card key={idx} question={question} answer={answer} />
      ))}
    </div>
  );
}

export default App;
