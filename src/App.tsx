import FavoriteProvider from "../src/context/favorite";
import { SearchProvider } from "./context/Search";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <SearchProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </FavoriteProvider>
    </SearchProvider>
  );
}

export default App;