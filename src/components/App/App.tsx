import { useAuth0 } from "@auth0/auth0-react";
import Account from "components/Account";
import AuthLoader from "components/AuthLoader";
import HashtagSelector from "components/HashtagSelector";
import LandingPage from "components/LandingPage";
import RequireAuth from "components/RequireAuth";
import Urls from "constants/urls";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <AuthLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route element={<RequireAuth />}>
            <Route path={Urls.routes.app} element={<HashtagSelector />} />
            <Route path={Urls.routes.account} element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
