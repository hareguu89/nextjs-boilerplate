import { ReactNode } from 'react'
import Atoms from '@components//Atoms'
import styled from 'styled-components'

interface IError {
  children: ReactNode
}

const ErrorForm = ({ children }: IError) => {
  return (
    <>
      {children ? (
        <Atoms.Div fontSize="xs" color="hive-status-100">
          {children}
        </Atoms.Div>
      ) : (
        <FakeBox>&nbsp;</FakeBox>
      )}
    </>
  )
}

export default ErrorForm

const FakeBox = styled.div`
  height: 12px;
`
