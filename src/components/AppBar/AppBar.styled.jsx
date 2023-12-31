import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  padding: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00afff;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const UserMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const User = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  height: 35px;
  padding: 0 5px;
  background: #0ceeb8;
  color: white;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  font-size: 18px;
  font-weight: bold;

  :hover,
  :focus {
    cursor: pointer;
    background: #ff8100;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
