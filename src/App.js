// project import
import { AuthProvider } from "./pages/authentication/auth-forms/Auth";
import Routes from "./routes";
import ThemeCustomization from "./themes";
import ScrollTop from "./components/ScrollTop";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeCustomization>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </ThemeCustomization>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
