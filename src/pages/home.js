import React from "react";
import { DATA } from "./../constants/constants";
import Multiselect from "multiselect-react-dropdown";
import { ProductCard } from "../components/ProductCard";
import { get_tagged_resource, get_sourced_resource } from "../constants/utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: DATA.resources,
      sources: DATA.plain_sources,
      tags: DATA.tags,
      selectedSources: [],
      selectedTags: [],
    };
    this.addSource = this.addSource.bind(this);
    this.removeSource = this.removeSource.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.addSetResources = this.addSetResources.bind(this);
  }
  addSetResources() {
    var resources;
    const { selectedTags, selectedSources } = this.state;
    var tagsLength = selectedTags.length;
    var sourcesLength = selectedSources.length;

    // Get resources from particular source
    if (sourcesLength === 0) {
      resources = DATA.resources;
    } else {
      resources = get_sourced_resource(DATA.resources, selectedSources);
    }

    // get sources from particular tag
    if (tagsLength !== 0) {
      resources = get_tagged_resource(resources, selectedTags);
      console.log(selectedTags);
    }

    this.setState({
      resources: resources,
    });
  }
  addSource(selectedList, selectedItem) {
    this.state.selectedSources.push(selectedItem);
    this.addSetResources();
  }
  removeSource(selectedList, removedItem) {
    this.state.selectedSources.pop(removedItem);

    this.addSetResources();
  }

  addTag(selectedList, selectedItem) {
    this.state.selectedTags.push(selectedItem);
    this.addSetResources();
  }
  removeTag(selectedList, removedItem) {
    this.state.selectedTags.pop(removedItem);
    this.addSetResources();
  }

  render() {
    return [
      <div className="flex gap-4 items-center justify-center w-full flex-wrap">
        <Multiselect
          showArrow
          placeholder="Select Tags"
          options={this.state.tags} // Options to display in the dropdown
          selectedValues={this.state.selectedTags} // Preselected value to persist in dropdown
          onSelect={this.addTag} // Function will trigger on select event
          onRemove={this.removeTag} // Function will trigger on remove event
          isObject={false}
          className="text-justify font-semibold homeSelectOptionSearch"
        />
        <Multiselect
          showArrow
          placeholder="Select Sources"
          options={this.state.sources} // Options to display in the dropdown
          selectedValues={this.state.selectedSources} // Preselected value to persist in dropdown
          onSelect={this.addSource} // Function will trigger on select event
          onRemove={this.removeSource} // Function will trigger on remove event
          isObject={false}
          className="text-justify font-semibold homeSelectOptionSearch"
        />
      </div>,

      <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,auto))] gap-4 m-10 justify-center items-center">
        {this.state.resources.map(function (item) {
          return ProductCard(item);
        })}
      </div>,
    ];
  }
}

export default Home;
