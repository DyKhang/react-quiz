function NextButton({ dispatch, answer, currIndex, numQuestions }) {
  if (currIndex < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
        style={answer === null ? { opacity: 0, visibility: "hidden" } : {}}
      >
        Next
      </button>
    );

  if (currIndex >= numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finishedQuiz" })}
        style={answer === null ? { opacity: 0, visibility: "hidden" } : {}}
      >
        Finished Quiz
      </button>
    );
}

export default NextButton;
