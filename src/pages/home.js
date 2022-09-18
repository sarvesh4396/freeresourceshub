import React from "react";
import { SITE_VARS } from "./../constants/constants";

function ProductCard(item) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <div class="flex overflow-hidden shadow-lg border-4 border-slate-200 border-b-slate-500 rounded-lg transform transition duration-500 hover:scale-110 ">
        <img
          class="object-none w-20 h-20 object-center"
          src={
            "https://s2.googleusercontent.com/s2/favicons?sz=64&domain=" +
            item.url
          }
          alt={item.name}
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{item.name}</div>
          <p class="text-gray-700 text-base">{item.description}</p>
        </div>
      </div>
    </a>
  );
}

function Home() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 m-10">
      {SITE_VARS.data.map(function (item) {
        return ProductCard(item);
      })}
    </div>
  );
}

export default Home;
