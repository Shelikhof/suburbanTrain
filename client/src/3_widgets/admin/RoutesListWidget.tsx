import DirectionList from "@/4_features/admin/DirectionList";
import Button from "@/6_shared/ui/Button";
import Search from "@/6_shared/ui/Search";
import { DIRECTIONS_ADMIN } from "@/6_shared/utils/variables";
import React from "react";

const RoutesListWidget = () => {
  const handleSearch = () => {
    console.log("search");
  };

  return (
    <div className="grid grid-cols-1-2 gap-12">
      <div className="flex flex-col gap-8">
        <Search handleClick={handleSearch} />
        <Button>Добавить расписание</Button>
      </div>
      <DirectionList list={DIRECTIONS_ADMIN} />
    </div>
  );
};

export default RoutesListWidget;
