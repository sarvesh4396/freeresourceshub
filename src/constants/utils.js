import { DATA } from "./../constants/constants";

function get_tagged_resource(resources, tags) {
  var finalResources = [];
  for (var i = 0; i < resources.length; i++) {
    var original = resources[i];
    if (original.tags.some((r) => tags.includes(r))) {
      finalResources.push(original);
    }
  }
  return finalResources;
}

function get_sourced_resource(resources, sources) {
  var finalResources = [];
  for (var i = 0; i < resources.length; i++) {
    var original = resources[i];
    if (sources.includes(DATA.sources[original.source].name)) {
      finalResources.push(original);
    }
  }
  return finalResources;
}

export { get_tagged_resource, get_sourced_resource };
