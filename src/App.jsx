import { useState } from 'react'
import data from './data'
import Questions from './Questions'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const showQuestion = (id) => {
    setActiveId(id)
  }
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        showQuestion={showQuestion}
      />
    </main>
  )
}
export default App
