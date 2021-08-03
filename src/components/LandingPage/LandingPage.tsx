import { useAuth0 } from "@auth0/auth0-react";
import Category from "components/Category";
import Footer from "components/Footer";
import HashtagPreview from "components/HashtagPreview";
import Logo from "components/Logo";
import Urls from "constants/urls";
import { HashtagProvider } from "contexts/hashtags";
import { Button, Container } from "react-kit";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  return (
    <div className="pb-20">
      <Container>
        <div className="text-center space-y-8 py-8 text-gray-700">
          <div className="text-5xl">
            <Logo />
          </div>
          <p>
            Quickly build and copy a list of hashtags for your social media
            posts by selecting from your personalized database of commonly used
            tags!
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
          <hr />
          <h3 className="text-2xl text-blue-700">Try it out!</h3>
          <p>
            Select any or all of the hashtags from the list below and click
            "Results" to review and copy them to the clipboard. Create an
            account to build your own lists!
          </p>
          <div className="text-left">
            <HashtagProvider>
              <div className="space-y-4">
                <Category
                  sample
                  category={{
                    _id: "sample1",
                    name: "Dog posts",
                    hashtags: [
                      "dogs",
                      "dogsofinstagram",
                      "dogstagram",
                      "siberianhusky",
                      "husky",
                    ],
                  }}
                />
                <Category
                  sample
                  category={{
                    _id: "sample2",
                    name: "Photography posts",
                    hashtags: [
                      "photography",
                      "actionshot",
                      "timelapse",
                      "longexposure",
                    ],
                  }}
                />
              </div>
              <HashtagPreview />
            </HashtagProvider>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
