import React from 'react'

interface IInputProps {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) =>
  <input type="text" placeholder="name" value={value} onChange={onChange} />

interface IFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form: React.FC<IFormProps> = ({ onSubmit, children }) =>
  <form onSubmit={onSubmit}>{ children }</form>
