import { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import NewsModal from "../components/NewsModal";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <Navbar toggle={() => setShowModal(!showModal)} />
      {showModal && (
        <NewsModal show={showModal} toggle={() => setShowModal(!showModal)} />
      )}
      <Outlet />
      <Footer toggle={() => setShowModal(!showModal)} />
    </Fragment>
  );
};

export default RootLayout;
