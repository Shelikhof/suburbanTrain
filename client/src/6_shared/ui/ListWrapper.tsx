import React from "react";

interface ListWrapperProps {
  icon: string;
  header: string;
  children: React.ReactNode;
}

const ListWrapper: React.FC<ListWrapperProps> = ({ children, header, icon }) => {
  return (
    <div className="w-full md:p-7 rounded-lg bg-purple-100 p-2">
      <div className="flex items-center gap-2 md:mb-6 mb-3">
        <img src={icon} alt="train" />
        <h3>{header}</h3>
      </div>
      {children}
    </div>
  );
};

export default ListWrapper;
