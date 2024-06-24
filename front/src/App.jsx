import React from "react";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden relative mr-10">sidebar</div>
      <div className="lex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        navbar
      </div>
    </div>
  );
};

export default App;
