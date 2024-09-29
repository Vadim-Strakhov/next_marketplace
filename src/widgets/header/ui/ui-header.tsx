import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1.25rem 1rem;
  border-bottom: 1px solid #cbd5e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4a188c;
  color: #fff;
  font-size: 1.5rem;

`;

export const Header = () => {
  return <StyledHeader>Next Showcase</StyledHeader>;
};
