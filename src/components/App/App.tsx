import { ProtectedRoutes, SSOContextProvider } from "@thenolans/nolan-ui";
import Account from "components/Account";
import HashtagSelector from "components/HashtagSelector";
import LandingPage from "components/LandingPage";
import Urls from "constants/urls";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SSOContextProvider
        cookieDomain={process.env.REACT_APP_TOKEN_COOKIE_DOMAIN!}
        cookieName={process.env.REACT_APP_TOKEN_COOKIE_NAME!}
        apiBaseUrl={process.env.REACT_APP_API_BASE_URL!}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route
              element={<ProtectedRoutes redirectPath={Urls.routes.root} />}
            >
              <Route path={Urls.routes.app} element={<HashtagSelector />} />
              <Route path={Urls.routes.account} element={<Account />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SSOContextProvider>
    </QueryClientProvider>
  );
};

export default App;
