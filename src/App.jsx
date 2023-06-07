import React from "react";

const App = () => {
  return (
    <div className="blocks-container">
      <div className="grid grid-cols-3 w-[90%] h-full py-4">
        <div className="bg-purple-500 col-span-2 p-4">
          <p>top left</p>
        </div>
        <div className="bg-rose-400 row-span-2 p-4">
          <p>right</p>
        </div>
        <div className="bg-yellow-200 row-span-2 p-4">
          <p>left</p>
        </div>
        <div className="bg-blue-200 p-4">
          <p>center</p>
        </div>
        <div className="bg-green-300 col-span-2 p-4">
          <p>bottom right</p>
        </div>
      </div>
    </div>
  );
};

export default App;
