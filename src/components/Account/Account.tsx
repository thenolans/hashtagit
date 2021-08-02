import PageLayout from "components/PageLayout";
import Urls from "constants/urls";
import { Button, Icon, Link } from "react-kit";

export default function Account() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <Link to={Urls.routes.selector}>
          <Icon as="fa-angle-left" className="mr-2" />
          Return to app
        </Link>
        <div className="grid grid-cols-1 divide-y divide-gray-300">
          <div className="py-3">
            <Link to={Urls.routes.logout}>
              <Icon as="fa-sign-out" className="mr-2" />
              Logout
            </Link>
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
