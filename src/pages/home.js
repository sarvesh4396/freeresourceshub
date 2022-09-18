import React from "react";
import { SITE_VARS } from "./../constants/constants";

function ProductCard(item) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-2 border-4 border-slate-200 border-b-slate-500 ">
      <img class="w-full" src="/img/card-top.jpg" alt={item.name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{item.name}</div>
        <p class="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
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
