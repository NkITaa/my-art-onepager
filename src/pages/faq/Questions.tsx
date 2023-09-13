import Question from "./Question";

function Questions() {
  const questions = [
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
    {
      question: "Wie kann ich ein Konto bei MyArt erstellen?",
      answer:
        "Gehen Sie einfach auf unsere Anmeldeseite und folgen Sie den Anweisungen. Innerhalb weniger Minuten können Sie beginnen, die Welt von MyArt zu erkunden.",
    },
  ];

  return (
    <>
      <div className="bg-slate-100 py-16">
        <div className="self-stretch px-40">
          <div className="grow text-5xl font-bold">Fragen & Antworten</div>
        </div>
        <ul className="">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Questions;
