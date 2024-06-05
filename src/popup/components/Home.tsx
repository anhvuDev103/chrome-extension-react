import React, { useEffect } from "react";

const Home = () => {
  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    chrome.storage.sync.set({ name }, () => {
      console.log(`Name is set to ${name}`);
    });
  };

  useEffect(() => {
    chrome.storage.sync.get(["name"], (response) => {
      console.log(">> Check | response:", response);
    });
  }, []);

  return (
    <div>
      <form
        onSubmit={handleInput}
        className="flex justify-center items-center py-44"
      >
        <input
          type="text"
          name="name"
          className="bg-gray ring-black px-4 py-4"
          placeholder="Enter a Word"
        />
        <button className="py-4 px-3 bg-indigo-500 text-white m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
