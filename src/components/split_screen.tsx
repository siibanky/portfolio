import React from "react";

const SplitScreen: React.FC = () => {
  return (
    <div className="Split">
      <div className="left"></div>
      <div className="right">
        <div className="centered">
          <img src="https://picsum.photos/id/821/900/900" alt="Picture of me" />
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
