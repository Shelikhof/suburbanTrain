import React from "react";
import { Link } from "react-router-dom";

interface DirectionItem {
  id: string;
  name: string;
}

interface DirectionList {
  list: DirectionItem[];
}

const DirectionList: React.FC<DirectionList> = ({ list }) => {
  return (
    <div className="grid gap-3">
      {list.map((item) => (
        <DirectionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const DirectionItem: React.FC<DirectionItem> = ({ id, name }) => {
  return (
    <Link to={`/admin/directions/${id}`}>
      <div className="w-full bg-purple-100 rounded-lg p-4 hover:bg-purple-200 transition-all">{name}</div>
    </Link>
  );
};

export default DirectionList;
