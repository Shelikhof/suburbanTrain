import ListWrapper from "@/6_shared/ui/ListWrapper";
import { FAVORITES } from "@/6_shared/utils/variables";
import React from "react";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const favorites = FAVORITES.slice(0, 5);

  return (
    <ListWrapper header="Избранное" icon="/icons/favorites-filled.svg">
      <div className="grid gap-y-3">
        {favorites.map((favorite, i) => (
          <FavoriteItem key={i} {...favorite} />
        ))}
      </div>
    </ListWrapper>
  );
};

interface FavoriteItemProps {
  from: {
    id: string;
    name: string;
  };
  to: {
    id: string;
    name: string;
  };
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ from, to }) => {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-3">
        <p>{from.name}</p>
        <img src="/icons/arrow-right.svg" alt="->" />
        <p>{to.name}</p>
      </div>
    </Link>
  );
};

export default FavoriteList;
