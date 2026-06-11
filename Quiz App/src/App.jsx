import axios from 'axios'
import React, {useEffect , useState} from 'react'



const App = () => {
  const [loading, setLoading] = useState(true)
  const [ error,  setError] = useState(false)
  const [data, setData]= useState([])
  const [ index , setIndex] = useState(0)
  const [option, setOption] = useState([])  
  const [ selected, setSelected] = useState ("")
  const [ score , setScore] = useState(0)
  const [result , setResult] = useState(false)

  useEffect(()=>{
    axios('https://the-trivia-api.com/v2/questions')
    
    .then((res)=>{
      console.log(res);
      
      setData(res.data)
      
    })
    .catch((err)=>{
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])

  useEffect(()=>{
    if(data.length > 0){
      const curent = data[index];
      const allOption = [...curent.incorrectAnswers, curent. correctAnswer];
      const shuffle = allOption.sort(()=>Math.random() - 0.5)
      setOption(shuffle)
    }
  }, [data, index])

   const currentQuestion = data[index];

   const handelanswer = (option) =>{
    setSelected(option);
    if(option === currentQuestion.correctAnswer){
      setScore((prev) => prev + 10)
    }
   };

   const nextQuestion = () =>{
    if(index < data.length -1){
      setIndex((prev)=> prev +1)
      setSelected("")
    }else{
      setResult(true)
    }
   };







  return (
    <>
  
  <div className="app">
    <div className="quiz-container">

      <h1 className="title">Quiz App</h1>

      {loading && <h2>Loading...</h2>}
      {error && <h2>Error Occurred</h2>}

      {!loading && !error && !result && currentQuestion && (
        <>
          <div className="top-bar">
            <h3>Question {index + 1} / {data.length}</h3>
            <h3>Score: {score}</h3>
          </div>

          <h2 className="question">
            {currentQuestion?.question?.text}
          </h2>

          <div className="options">
            {option.map((opt, i) => (
              <button
                key={i}
                onClick={() => handelanswer(opt)}
                disabled={selected !== "" && selected !== opt}
                className={`option-btn ${
                  selected
                    ? opt === currentQuestion.correctAnswer
                      ? "correct"
                      : opt === selected
                      ? "wrong"
                      : ""
                    : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            className="next-btn"
            onClick={nextQuestion}
            disabled={!selected}
          >
            {index === data.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </>
      )}

      {result && (
        <div className="result">
          <h1>🎉 Quiz Finished</h1>
          <h2>Your Score: {score}</h2>

          <button
            className="restart-btn"
            onClick={() => {
              setIndex(0);
              setScore(0);
              setResult(false);
              setSelected("");
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}

    </div>
  </div>
 

    </>
  )
}

export default App