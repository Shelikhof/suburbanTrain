import DirectionList from "@/4_features/main/DirectionList";
import FavoriteList from "@/4_features/main/FavoriteList";
import React from "react";

const MainListsWidget = () => {
  return (
    <div className="grid lg:grid-cols-4-3 gap-x-24 gap-y-8">
      <DirectionList />
      <FavoriteList />
    </div>
  );
};

export default MainListsWidget;
