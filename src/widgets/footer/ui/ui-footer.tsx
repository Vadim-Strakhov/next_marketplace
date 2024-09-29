import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4a188c;
  color: #fff;
  font-size: 1rem;
`;

export const Footer = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} Copyright Text</StyledFooter>
  );
};
