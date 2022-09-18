import React from "react";

export function ProductCard(item) {
  return (
    <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="flex overflow-hidden shadow-lg border-4 border-slate-200 border-b-slate-500 rounded-lg transform transition duration-500 hover:scale-110 ">
        <img
          className="object-none w-20 h-20 object-center"
          src={
            "https://s2.googleusercontent.com/s2/favicons?sz=64&domain=" +
            item.url
          }
          alt={item.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
      </div>
    </a>
  );
}
