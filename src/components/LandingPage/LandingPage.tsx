import { useAuth0 } from "@auth0/auth0-react";
import Logo from "components/Logo";
import Urls from "constants/urls";
import { Button, Container } from "react-kit";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  return (
    <Container>
      <div className="text-center space-y-8 py-8">
        <div className="text-5xl">
          <Logo />
        </div>
        <p>
          Quickly build a list of hashtags for your social media posts by
          selecting from your personalized database of commonly used tags!
        </p>
        {isAuthenticated ? (
          <Button onClick={() => history.push(Urls.routes.app)}>
            Go to app
          </Button>
        ) : (
          <div className="space-x-4">
            <Button onClick={() => loginWithRedirect()}>Login</Button>
            <Button
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup",
                })
              }
              theme="secondary"
            >
              Sign up
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
