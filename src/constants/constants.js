var sources = require("./../assets/data/sources.json");
var zero = require("./../assets/data/0.json").submittedNewData;
var one = require("./../assets/data/1.json").data;
var two = require("./../assets/data/2.json").data;

function set_source_id() {
  Object.keys(ALL_SOURCES).forEach((key) => {
    const source = ALL_SOURCES[key];
    // Setting source id for data
    source.forEach(function (res) {
      res["source"] = key.toString();
    });
  });
}

// filtering resources with same url
function filter_data(params) {
  return data.reduce((res, item) => {
    if (!res.find((u) => u.url === item.url)) {
      res.push(item);
    }
    return res;
  }, []);
}

function get_plain_sources() {
  var plain_sources = [];

  Object.keys(sources).forEach((key) => {
    plain_sources.push(sources[key].name);
  });

  return plain_sources;
}

// Vars

// Sources
const ALL_SOURCES = { 0: zero, 1: one, 2: two };

export const SITE_VARS = {
  name: "FreeResources Hub",
  email: "heysarvesh@pm.me",
  github: "https://github.com/sarvesh4396/freeresourceshub",
  // github_issue: "https://github.com/sarvesh4396/freeresourceshub/issues",
  twitter: "https://twitter.com/sarvesh4396",
};

set_source_id();

// Structuring data
const data = [].concat(...Object.values(ALL_SOURCES));
const tags = [];

data.map((item) => tags.push(...item.tags));

var plain_sources = get_plain_sources();

var final_data = filter_data();

export const DATA = {
  sources: sources,
  resources: final_data,
  plain_sources: plain_sources,
  tags: [...new Set(tags)],
};
