import React from "react";

const SkillButton = ({ children }) => {
  return (
    <div className="font-medium rounded-full p-3 bg-slate-300">
      {children}
    </div>
  );
}

export default SkillButton;