import Logo from "components/Logo";
import Urls from "constants/urls";
import { Container, Icon, Link } from "react-kit";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-white shadow-md text-center z-10">
      <Container>
        <div className="flex items-center justify-between px-4">
          <Icon as="fa-user" className="invisible" />
          <Link to={Urls.routes.selector}>
            <Logo />
          </Link>
          <Link to={Urls.routes.account}>
            <Icon as="fa-user" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
