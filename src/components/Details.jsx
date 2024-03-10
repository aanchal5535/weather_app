import React from "react";

function Details({ stats }) {
  return (
    <div className="bg-gray-100 p-2 text-black flex flex-col justify-start items-center border rounded-xl pointer hover:border-4">
      <h2 className="text-sm mt-2">{stats.title}</h2>
      <div className="mt-2">
        
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-2xl">{stats.unit}</span>
      </div>
      

      {stats.title === "Humidity" ? (
        <div className="w-full mt-4 bg-gray-300 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default Details;