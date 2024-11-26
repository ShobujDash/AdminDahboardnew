import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  const [toggle,setToggle ] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  console.log(toggle)

  return (
    <>
      <Sidebar toggle={toggle} />
      <section id="content">
        <Navbar onHanldeToggle={handleToggle} />
        <main>{children}</main>
      </section>
    </>
  );
};

export default Layout;
