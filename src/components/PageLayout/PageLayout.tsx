import { Container } from "@thenolans/nolan-ui";
import Navbar from "components/Navbar";
import { ReactNode } from "react";

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
