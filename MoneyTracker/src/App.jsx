import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');

  function addNewTransaction(ev){
    ev.preventDefault();
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({name,description,dateTime})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json)
      })
    })
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>

      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type="text"
                 placeholder={'+200$ Samm'}
                 value={name}
                 onChange={ev => setName(ev.target.value)}
          />
          
          <input type="datetime-local"
                 value={dateTime}
                 onChange={ev => setDateTime(ev.target.value)}
          />
        </div>

        <div className='description'>
          <input type='text' 
                placeholder={'description'}
                value={description}
                onChange={ev => setDescription(ev.target.value)}
          />
        </div>
        <button type='submit'>Add new Transaction</button>
      </form>

      <div className='transactions'>

        <div className='transaction'>
          <div className="left">
            <div className="name">TV</div>
            <div className="description">This is a TV</div>
          </div>

          <div className="right">
            <div className="price red">$-20</div>
            <div className="datetime">2024-06-05 21:50</div>
          </div>
        </div>

        <div className='transaction'>
          <div className="left">
            <div className="name">Salary</div>
            <div className="description">You got paid</div>
          </div>

          <div className="right">
            <div className="price green">$200</div>
            <div className="datetime">2024-06-05 21:50</div>
          </div>

        </div>

        <div className='transaction'>
          <div className="left">
            <div className="name">TV</div>
            <div className="description">This is a TV</div>
          </div>

          <div className="right">
            <div className="price">$20</div>
            <div className="datetime">2024-06-05 21:50</div>
          </div>

        </div>

      </div>

    </main>
  )
}

export default App
