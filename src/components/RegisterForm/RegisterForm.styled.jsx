import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 1px 1px 5px gray;
  background: #00afff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  font-size: 18px;
`;

export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;
`;

export const Button = styled.button`
  margin: 0 auto;
  border-radius: 8px;
  padding: 5px 10px;
  background: #0ceeb8;
  color: white;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #145d6f;
  }
`;
