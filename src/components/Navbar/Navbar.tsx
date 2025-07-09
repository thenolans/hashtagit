import { Container, Icon } from "@thenolans/nolan-ui";
import Logo from "components/Logo";
import Urls from "constants/urls";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-white shadow-md text-center z-10">
      <Container>
        <div className="flex items-center justify-between px-4">
          <Icon icon="User" className="invisible" />
          <Link className="text-3xl" to={Urls.routes.app}>
            <Logo />
          </Link>
          <Link to={Urls.routes.account}>
            <Icon icon="User" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
