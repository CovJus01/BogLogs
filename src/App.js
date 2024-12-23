import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/main";
import PostPage from "./pages/PostContent";
import Header from "./components/Header";
import {Route,Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/post" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
