import React from 'react'
import styled from 'styled-components'

const Container = styled.span<{isBlue: boolean}>`
  color: ${props => props.isBlue ? props.theme.blueColor : 'black'};
  font-weight: bold;
  margin-right: 10px;
`

interface IProps {
  count: number
}

const Number: React.FC<IProps> = ({ count }) =>
  <Container isBlue={count > 10}>{count}</Container>

export default Number
