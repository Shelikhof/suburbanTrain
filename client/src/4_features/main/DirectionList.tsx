import useGlobalStore from "@/5_entities/global/globalStore";
import ListWrapper from "@/6_shared/ui/ListWrapper";
import { DIRECTIONS } from "@/6_shared/utils/variables";
import React from "react";
import { Link } from "react-router-dom";

const DirectionList = () => {
  const { isMobile } = useGlobalStore((state) => state);
  let directions = DIRECTIONS.slice();

  if (isMobile) {
    directions = directions.slice(0, 4);
  }

  return (
    <ListWrapper header="Направления электричек" icon="/icons/train.svg">
      <div className="grid md:grid-cols-3 gap-x-4 gap-y-3">
        {directions.map((direction) => (
          <DirectionItem key={direction.id} {...direction} />
        ))}
      </div>
    </ListWrapper>
  );
};

interface DirectionListProps {
  id: string;
  name: string;
}
const DirectionItem: React.FC<DirectionListProps> = ({ id, name }) => {
  return (
    <Link className="hover:text-purple-900" to={"/"}>
      {name}
    </Link>
  );
};

export default DirectionList;
