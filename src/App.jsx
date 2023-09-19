import { useState } from 'react'
import './App.css'

function App() {

  const [myCounter, setMyCounter] = useState(1)

  const [advise, setAdvise] = useState([
    "For indeed, with hardship (will be) ease.",
    "So do not weaken and do not grieve, and you will be superior if you are [true] believers.”",
    "Allah does not lay a responsibility on anyone beyond his capacity.",
  ])



  function nextHandler() {
    console.log("next")
    if (myCounter < 3) {
      setMyCounter(myCounter + 1)
    }
  }
  function previousHandler() {
    console.log("previous")
    if (myCounter > 0) {
      setMyCounter(myCounter - 1)
    }
  }



  return (

    <>

      <div className='main'>
      <div className='heading' >

      <h1 >Assignment</h1>
      </div>


        <div className='box'>
          <div className='circle' >


            {Array.from([1, 2, 3], e => (<div style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: myCounter >= e ? 'black' : 'grey', textAlign: 'center', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {
                e
              }
            </div>))
            };
          </div>


          <div className='advisePara'>
            <p className='advise'>
           
              {
                advise[myCounter - 1]
              }
            </p>

          </div>



          <div className='buttonDiv'>

            {
              Array.from(["previous", "Next"], x => (
                <button  className='btn' onClick={x == "previous" ? previousHandler : nextHandler}>{x}</button>
              ))
            }


          </div>
        </div>

      </div>




    </>







  )
}

export default App
