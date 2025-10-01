// TabButton.jsx
import React from "react";

const TabButton = ({ active = false, selectTab, children, ...props }) => {
  return (
    <button
      type="button"
      onClick={selectTab}
      {...props}
      className={[
        "relative mr-3 transition-colors duration-200 pb-1",
        active
  ? "text-white font-bold border-b-2 border-white"
  : "text-gray-400 hover:text-white font-light border-b-2 border-transparent hover:border-gray-500 transition-all duration-300"
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default TabButton;
