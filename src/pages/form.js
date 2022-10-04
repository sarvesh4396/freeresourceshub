import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { DATA } from './../constants/constants';
import axios from 'axios';

export default function Form() {
  const [tagsOption, setTagsOption] = useState(DATA.tags);
  const [errorMessage, setErrorMessage] = useState({
    userName: '',
    resourceTags: '',
    resourceName: '',
    resourceURL: '',
    resourceDescription: '',
  });
  const [data, setData] = useState({
    userName: '',
    userMail: '',
    resourceTags: [],
    resourceName: '',
    resourceURL: '',
    resourceDescription: '',
  });

  const addTag = (selectedList, selectedItem) => {
    data.resourceTags.push(selectedItem);
  };

  const removeTag = (selectedList, removedItem) => {
    data.resourceTags.pop(removedItem);
  };

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.userName === '') {
      let copyErrorMessage = { ...errorMessage };
      copyErrorMessage.userName = 'Please fill your user name!';
      setErrorMessage(copyErrorMessage);
    } else if (data.resourceTags.length === 0) {
      let copyErrorMessage = { ...errorMessage };
      copyErrorMessage.resourceTags = 'Please select the resource tags!';
      setErrorMessage(copyErrorMessage);
    } else if (data.resourceName === '') {
      let copyErrorMessage = { ...errorMessage };
      copyErrorMessage.resourceName = 'Please fill the resource name!';
      setErrorMessage(copyErrorMessage);
    } else if (data.resourceURL === '') {
      let copyErrorMessage = { ...errorMessage };
      copyErrorMessage.resourceURL = 'Please fill the resource url!';
      setErrorMessage(copyErrorMessage);
    } else if (data.resourceDescription === '') {
      let copyErrorMessage = { ...errorMessage };
      copyErrorMessage.resourceDescription =
        'Please fill the resource description!';
      setErrorMessage(copyErrorMessage);
    } else {
      axios
        .post('http://localhost:8000/submittedNewData', {
          tags: data.resourceTags,
          name: data.resourceName,
          url: data.resourceURL,
          description: data.resourceDescription,
        })
        .then((res) => {
          alert('Your resource have been submitted!');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full max-w-2xl py-12 flex flex-col gap-10 px-6 mx-auto">
      <h2 className="text-white text-3xl font-bold text-center">
        Submit new Resource
      </h2>
      <form action="/" className="flex flex-col mb-0 space-y-6">
        <label htmlFor="name" className="text-white">
          Your Name:
        </label>
        <input
          type="text"
          name="name"
          id="userName"
          placeholder="Your Name..."
          className="p-4 border-[3px] border-black border-solid"
          onChange={(e) => handleInput(e)}
        />
        <span className="text-sm text-red-500">
          {data.userName === '' ? errorMessage.userName : ''}
        </span>
        <label htmlFor="email" className="text-white">
          Your Email:
        </label>
        <input
          type="email"
          name="email"
          id="userMail"
          placeholder="Your email..."
          className="p-4 border-[3px] border-black border-solid"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="resourceTags" className="text-white">
          Resource Tags:
        </label>
        <Multiselect
          showArrow
          placeholder="Select Tags"
          options={tagsOption} // Options to display in the dropdown
          selectedValues={data.resourceTags} // Preselected value to persist in dropdown
          onSelect={addTag}
          onRemove={removeTag}
          isObject={false}
          className="border-[3px] submitResourceTagInput border-black border-solid text-justify font-semibold homeSelectOptionSearch"
        />
        <span className="text-sm text-red-500">
          {data.resourceTags.length === 0 ? errorMessage.resourceTags : ''}
        </span>
        <label htmlFor="resourceName" className="text-white">
          Name of the Resource:
        </label>
        <input
          type="text"
          name="name"
          id="resourceName"
          placeholder="Resource Name"
          className="p-4 border-[3px] border-black border-solid"
          onChange={(e) => handleInput(e)}
          value={data.resourceName}
        />
        <span className="text-sm text-red-500">
          {data.resourceName === '' ? errorMessage.resourceName : ''}
        </span>
        <label htmlFor="resourceURL" className="text-white">
          Resource URL:
        </label>
        <input
          type="text"
          name="site"
          id="resourceURL"
          placeholder="Resource Site"
          className="p-4 border-[3px] border-black border-solid"
          onChange={(e) => handleInput(e)}
          value={data.resourceURL}
        />
        <span className="text-sm text-red-500">
          {data.resourceURL === '' ? errorMessage.resourceURL : ''}
        </span>
        <label htmlFor="description" className="text-white">
          Description:
        </label>
        <textarea
          cols="30"
          rows="10"
          name="description"
          id="resourceDescription"
          placeholder="Resource Description"
          className="p-4 border-[3px] border-black border-solid"
          onChange={(e) => handleInput(e)}
          value={data.resourceDescription}
        />
        <span className="text-sm text-red-500">
          {data.resourceDescription === ''
            ? errorMessage.resourceDescription
            : ''}
        </span>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="p-4 bg-white text-black font-medium text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
