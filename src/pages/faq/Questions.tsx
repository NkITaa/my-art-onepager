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
      <div className="bg-slate-100 dark:bg-zinc-800 pt-8 pb-32 lg:py-16">
        <div className="">
          <div className="text-[32px] lg:text-5xl font-bold grow text-center">
            Fragen & Antworten
          </div>
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
