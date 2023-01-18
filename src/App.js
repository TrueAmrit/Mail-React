import "./App.css";
import { ApplicationContextProvider } from "./components/common/context/app-context";
import CustomLayout from "./components/common/custom-layout/custom-layout";
import Header from "./components/common/header/header";
import AppRoute from "./components/common/Routes/app-route";

function App() {
  return (
    <div className="App">
   
        
        <ApplicationContextProvider>
        <AppRoute />
        </ApplicationContextProvider>
      
    </div>
  );
}

export default App;
