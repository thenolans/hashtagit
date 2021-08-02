import Account from "components/Account";
import HashtagSelector from "components/HashtagSelector";
import ProtectedRoute from "components/ProtectedRoute";
import Urls from "constants/urls";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <ProtectedRoute
            path={Urls.routes.selector}
            component={HashtagSelector}
          />
          <ProtectedRoute path={Urls.routes.account} component={Account} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
