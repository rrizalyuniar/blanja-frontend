import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/auth/Login";
import RegisterSeller from "../../Pages/auth/RegisterSeller";
import Register from "../../Pages/auth/RegisterCustomer";

import ProductList from "../../Pages/ProductsList/ProductList";
import Profile from "../../Pages/Profile";
import ModalCreate from "../../../src/components/module/ActionProduct/CreateProductModal";
import Checkout from "../../Pages/Checkout";
import Detail from "../../Pages/DetailProduct";
// import RequireAuth from "../../components/base/RequireAuth";
// import PageBag from "../../Pages/PageBag";

// const Role = ({ children }) => {
//    const { user } = useSelector((state) => state.auth);
//    console.log(user)
//   if (user.role !== "seller") {
//     Swal.fire("Only Seller, Please!");
//     return <Navigate to="/profil" replace />;
//   }
//   return children;
// };
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerSeller" element={<RegisterSeller />} />

        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList" element={<ModalCreate />}/>
        <Route path="/profil" element={<Profile />}/>
        <Route path="/Checkout" element={<Checkout />}/>
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/Bag" element={<PageBag />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;