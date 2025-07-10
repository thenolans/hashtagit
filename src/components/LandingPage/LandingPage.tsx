import {
  BuiltByTheNolans,
  Button,
  GitHubLink,
  useRedirectIfAuthenticated,
  useSSO,
} from "@thenolans/nolan-ui";
import Category from "components/Category";
import HashtagPreview from "components/HashtagPreview";
import Logo from "components/Logo";
import { GITHUB_REPOSITORY_LINK } from "constants/defaults";
import Urls from "constants/urls";
import { HashtagProvider } from "contexts/hashtags";

export default function LandingPage() {
  const { redirectToLogin, redirectToRegister } = useSSO();

  useRedirectIfAuthenticated(Urls.routes.app);

  return (
    <div className="pb-20">
      <div className="text-center space-y-8 py-8 text-gray-700 max-w-2xl mx-auto px-4">
        <Logo className="mx-auto" />
        <div>
          Quickly build and copy a list of hashtags for your social media posts
          by selecting from your personalized database of commonly used tags!
        </div>
        <div className="space-x-4">
          <Button onClick={() => redirectToLogin(window.location.href)}>
            Login
          </Button>
          <Button
            onClick={() => redirectToRegister(window.location.href)}
            theme="secondary"
          >
            Sign up
          </Button>
        </div>
        <div className="py-4" />
        <h3 className="text-2xl text-primary-700">Try it out!</h3>
        <div>
          Select any or all of the hashtags from the list below and click
          "Results" to review and copy them to the clipboard. Create an account
          to build your own lists!
        </div>
        <div className="text-left">
          <HashtagProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto items-start">
              <Category
                sample
                category={{
                  id: 1,
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
                  id: 2,
                  name: "Photography posts",
                  hashtags: [
                    "photography",
                    "actionshot",
                    "timelapse",
                    "longexposure",
                    "canon",
                  ],
                }}
              />
            </div>
            <HashtagPreview />
          </HashtagProvider>
        </div>
      </div>
      <GitHubLink repositoryLink={GITHUB_REPOSITORY_LINK} />
      <BuiltByTheNolans />
    </div>
  );
}
