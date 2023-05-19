import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Books } from "./pages/Books";
import { NewBook } from "./pages/NewBook";
import { BookLayout } from "./BookLayout";
import {NotFound} from "./pages/NotFound"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout/>}>
          <Route path=":id" element={<Books />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>



        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
