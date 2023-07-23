import { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import NewsModal from "../components/NewsModal";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <Navbar toggleModal={() => setShowModal(!showModal)} />
      {showModal && (
        <NewsModal
          show={showModal}
          toggleModal={() => setShowModal(!showModal)}
        />
      )}
      <Outlet />
      <Footer toggleModal={() => setShowModal(!showModal)} />
    </Fragment>
  );
};

export default RootLayout;
