var sources = require("./../assets/data/sources.json");
var one = require("./../assets/data/1.json");
var two = require("./../assets/data/2.json");

export const SITE_VARS = {
  name: "FreeResources Hub",
  email: "heysarvesh@pm.me",
  github: "https://github.com/sarvesh4396/freeresourceshub",
  github_issue: "https://github.com/sarvesh4396/freeresourceshub/issues",
  twitter: "https://twitter.com/sarvesh4396",
};
// Setting source id for data
one.forEach(function (res) {
  res["source"] = "1";
});

two.forEach(function (res) {
  res["source"] = "2";
});

// Structuring data
const data = [].concat(one, two);
const tags = [];

data.map((item) => {
  tags.push(...item.tags);
});

var plain_sources = [];

Object.keys(sources).forEach((key) => {
  console.log(key);
  plain_sources.push(sources[key].name);
});

// filtering resources with same url
var final_data = data.reduce((res, item) => {
  if (!res.find((u) => u.url === item.url)) {
    res.push(item);
  }
  return res;
}, []);

export const DATA = {
  sources: sources,
  resources: final_data,
  plain_sources: plain_sources,
  tags: [...new Set(tags)],
};
