import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./auth/Login";
import ProductList from "./components/ProductList";
import Page404 from './components/Page404';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/product-list" element={<ProductList />}></Route>
          <Route path="/*" element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
