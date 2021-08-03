import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "components/PageLayout";
import Urls from "constants/urls";
import { Button, Icon, Link } from "react-kit";

export default function Account() {
  const { logout } = useAuth0();

  return (
    <PageLayout>
      <div className="space-y-6">
        <Link to={Urls.routes.app}>
          <Icon as="fa-angle-left" className="mr-2" />
          Return to app
        </Link>
        <div className="grid grid-cols-1 divide-y divide-gray-300">
          <div className="py-3">
            <Button
              theme="link"
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              <Icon as="fa-sign-out" className="mr-2" />
              Logout
            </Button>
          </div>
          <div className="py-3">
            <Button
              onClick={() => {
                // TODO Handle remove account with Auth0
              }}
              theme="link--danger"
            >
              <Icon as="fa-trash" className="mr-2" />
              Delete my account
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
