import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [formValues, setFormValues] = useState({ petName: '', petType: '' })
  const [pets, setPets] = useState(petsList)

  const change = (evt) => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (evt) => {
    evt.preventDefault()
    setPets(
      pets.concat({ petName: formValues.petName, petType: formValues.petType })
    )
    setFormValues({ petName: '', petType: '' })
  }

  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {pets.map((pet, idx) => {
        return (
          <p key={idx}>
            {pet.petName} is a {pet.petType}
          </p>
        )
      })}
      <form onSubmit={submit}>
        <input
          type='text'
          onChange={change}
          name='petName'
          value={formValues.petName}
        />
        <input
          type='text'
          onChange={change}
          name='petType'
          value={formValues.petType}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>,
  document.querySelector('#root')
)

//add useState, addpets.map, add key, add form -> input,
