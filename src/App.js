
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./Context/GlobalState";
import Router from "./Routes/Router";



function App() {
  return (
  <ChakraProvider>
    <GlobalState>
      <Router/>
    </GlobalState>
  </ChakraProvider>
  );
}

export default App;
