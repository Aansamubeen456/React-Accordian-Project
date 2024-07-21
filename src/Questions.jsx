import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, showQuestion }) => {
  return (
    <div className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            showQuestion={showQuestion}
          />
        )
      })}
    </div>
  )
}

export default Questions
