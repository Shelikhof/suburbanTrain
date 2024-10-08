import React from "react";
import Header from "@/3_widgets/baseComponents/Header";
import Footer from "@/3_widgets/baseComponents/Footer";
import useGlobalStore from "@/5_entities/global/globalStore";

interface MainLayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  const { setIsMobile } = useGlobalStore((state) => state);

  const handleResize = () => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
