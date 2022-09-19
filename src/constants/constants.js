var sources = require("./../assets/data/sources.json");
var one = require("./../assets/data/1.json");

export const SITE_VARS = {
  name: "FreeResources Hub",
  email: "heysarvesh@pm.me",
  github: "https://github.com/sarvesh4396/freeresourceshub",
  github_issue: "https://github.com/sarvesh4396/freeresourceshub/issues",
  twitter: "https://twitter.com/sarvesh4396",
};
const data = [].concat(one);
const tags = [];

data.map((item) => {
  tags.push(...item.tags);
});

export const DATA = {
  sources: sources,
  resources: data,
  tags: [...new Set(tags)],
};
