import React from "react";
import "./style.scss";

import Store from "../store";
import SvgDefs from "../components/molecules/SvgDefs";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import Footer from "../components/organisms/Footer";
import Modal from "../components/organisms/Modal";

export default () => (
  <div className="app">
    <Store>
      <SvgDefs />
      <Header />
      <Main />
      <Footer />
      <Modal />
    </Store>
  </div>
);
