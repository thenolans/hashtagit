import Logo from "components/Logo";
import { Container, Icon } from "react-kit";

export default function AuthLoader() {
  return (
    <Container>
      <div className="space-y-4 text-center py-8">
        <div className="relative inline-block text-blue-600">
          <Icon className="fa-5x text-blue-300" spin as="fa-circle-o-notch" />
          <Icon
            className="fa-2x text-blue-600 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            as="fa-lock"
          />
        </div>
        <div className="text-3xl">
          <Logo />
        </div>
      </div>
    </Container>
  );
}
