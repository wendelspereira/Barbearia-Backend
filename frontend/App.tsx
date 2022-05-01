import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthProvider } from "./src/context/auth";
const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
