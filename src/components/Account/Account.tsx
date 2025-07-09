import { Button, Icon } from "@thenolans/nolan-ui";
import PageLayout from "components/PageLayout";
import Urls from "constants/urls";
import { Link } from "react-router-dom";

export default function Account() {
  function logout() {}

  return (
    <PageLayout>
      <div className="space-y-6">
        <Link to={Urls.routes.app}>
          <Icon icon="ChevronLeft" className="mr-2" />
          Return to app
        </Link>
        <div className="grid grid-cols-1 divide-y divide-gray-300">
          <div className="py-3">
            <Button theme="tertiary" onClick={() => logout()}>
              <Icon icon="LogOut" className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
