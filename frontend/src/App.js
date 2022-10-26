import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<h1>Hello World</h1>} />
          <Route path="movie/:id" element={<h1>Movie detail page</h1>} />
          <Route path="movies/:type" element={<h1>Movies list page</h1>} />
          <Route path="/*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
