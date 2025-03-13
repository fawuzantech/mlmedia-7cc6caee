import { Outlet } from "react-router-dom";
import FloatingButton from "../components/ui/FloatingButton"; // Adjust the path if needed

const Layout = () => {
  return (
    <div>
      <Outlet /> 
      <FloatingButton /> 
    </div>
  );
};

export default Layout;
