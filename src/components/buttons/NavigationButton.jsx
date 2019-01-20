import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
  display: inline-block;
  border-radius: 5px;
  padding: 0.7rem 0;
  margin: 0.5rem 0.5rem;
  width: 10rem;
  background: #151515;
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
`

export default Button
