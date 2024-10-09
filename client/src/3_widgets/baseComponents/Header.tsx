import React from "react";
import logo from "/logos/logo.svg";
import favoritesIcon from "/icons/favorites-filled.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin = true }) => {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto py-[30px] px-1 w-full gap-12">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      {isAdmin ? (
        <div className="flex items-center gap-5">
          <Link to={"/admin/directions"}>Ветки</Link>
          <Link to={"/admin/routes"}>Маршруты</Link>
        </div>
      ) : (
        <Link to={"/favorites"}>
          <div className="flex items-center gap-2">
            <img src={favoritesIcon} alt="favorites" />
            <span className="max-sm:hidden">Избранное</span>
          </div>
        </Link>
      )}
    </header>
  );
};

export default Header;
