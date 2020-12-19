import * as React from 'react'
import styled from 'styled-components'

interface Props {
  cancel?: boolean // ?で指定しなくてもOK
  children: string
  onClick: () => void
}

export const Button: React.FC<Props> = (props) => (
  <StyledButton onClick={props.onClick} className={props.cancel ? 'cancel' : ''}>
    {/* trueならキャンセル */}
    {props.children}
    {/* ボタン内に表示するテキスト */}
  </StyledButton>
)

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;   
  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`