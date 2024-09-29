import { useGetItemsQuery } from "@/shared/api/base";
import { Footer } from "@/widgets/footer/ui/ui-footer";
import { Header } from "@/widgets/header/ui/ui-header";
import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledShop = styled.main`
  padding: 1.25rem 0.5rem;
  flex-grow: 1;
`;

export const MainPage = () => {
  const { data } = useGetItemsQuery("");
  console.log(data);
  return (
    <StyledWrapper>
      <Header />
      <StyledShop />
      <Footer />
    </StyledWrapper>
  );
};
