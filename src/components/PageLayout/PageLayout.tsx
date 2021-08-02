import Navbar from "components/Navbar";
import { ReactNode } from "react";
import { Container } from "react-kit";

type Props = {
  children: ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="p-4 pb-20">{children}</div>
      </Container>
    </>
  );
}

export default PageLayout;
