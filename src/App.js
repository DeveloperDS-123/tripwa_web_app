import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
