import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto; 
  padding: 2.5rem 1rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
export const LabelStyle = styled.label`
  width: 100%;
  padding: 0 1.5rem;

  background-color: white;

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: baseline;
`

export const Input = styled.input`
  margin-bottom: 1rem;
  width: 100%;
  border: 0;
  padding: 0.75rem 1rem;
  font-size: 1.3rem;
`

export const Button = styled.button`
  margin-bottom: 1rem;
  border: 0;
  padding: 0.75rem 1rem;
  font-size: 1.3rem;
  background-color: var(--green);
  color: white;
`

export const Table = styled.table`
  margin-top: 2rem;

  width: 100%;
  border-spacing: 0 0.5rem;
  background-color: white;

  th {
    color: var(--text-title);
    font-weight: 400;
    padding: 1rem 1rem;
    text-align: left;
    line-height: 1.5rem;
    background-color: white;
  }

  td {
    padding: 1rem 1rem;
    border: 0;
    background: var(--shape);
    color: '000';
    border-radius: 0.25rem;
  }
`

export const ButtonIcon = styled.button`
  padding: 0 0.5rem;
  height: 3rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    filter: brightness(0.9)
  }


`