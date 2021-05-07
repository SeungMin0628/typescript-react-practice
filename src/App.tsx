import React, { useState } from 'react'
import styled from 'styled-components'
import Number from './Number'
import { Form, Input } from './Input'

const Container = styled.div``

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const add = (): void =>
    setCounter(counter + 1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void =>
    event.preventDefault()

  return (
    <Container>
      <Number count={counter} />
      <button onClick={add}>Add</button>
      <Form onSubmit={handleSubmit}>
        <Input value={name} onChange={handleChange} />
      </Form>
    </Container>
  )
}

export default App
