import React from "react";
import Header from "@/3_widgets/baseComponents/Header";
import Footer from "@/3_widgets/baseComponents/Footer";
import useGlobalStore from "@/5_entities/global/globalStore";
import { useLocation } from "react-router-dom";

interface MainLayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  const { setIsMobile } = useGlobalStore((state) => state);

  const handleResize = () => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  };

  const location = useLocation();
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (location.pathname.startsWith("/admin/")) setIsAdmin(true);
    else setIsAdmin(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAdmin={isAdmin} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
