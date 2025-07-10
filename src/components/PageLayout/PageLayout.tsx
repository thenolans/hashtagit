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
      <Container className="max-w-5xl">
        <div className="pb-20 pt-6">{children}</div>
      </Container>
    </>
  );
}

export default PageLayout;
