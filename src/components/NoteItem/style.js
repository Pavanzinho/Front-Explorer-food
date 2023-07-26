import styled from "styled-components";

export const Container = styled.div`
  width: 13rem;
  height: 3.2rem;
  background: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.DARK_DARK_800 : theme.COLORS.LIGHT_LIGHT_600};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  gap: 8px;
  padding: 8px 16px;
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_LIGHT_500}` : "none"};

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: white;
    font-family: "Roboto", sans-serif;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
    }
  }

  button {
    svg {
      color: white;
    }
  }
`;
