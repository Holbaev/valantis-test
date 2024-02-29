import "./App.scss";
import { Routes, Route} from "react-router-dom";
import {routes} from "../shared/routes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // app
  return (
    <div className="app">
      <Routes>
        {routes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.component} />;
        })}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <ToastContainer
      toastClassName="toast"
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable 
      />
    </div>
  );
}

export default App;
