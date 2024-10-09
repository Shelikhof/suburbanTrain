import React from "react";

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className="px-1 max-w-[1000px] m-auto pt-8">{children}</div>;
};

export default Container;
