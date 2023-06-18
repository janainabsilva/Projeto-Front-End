import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home/Home";
import Login from "../Paginas/Login/Login";

const RotasApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RotasApp;