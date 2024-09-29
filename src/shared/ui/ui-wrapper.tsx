import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
