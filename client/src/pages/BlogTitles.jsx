import React from "react";
import { useState } from "react";
import { Hash, Sparkles } from "lucide-react";

const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Education",
    "Travel",
    "Lifestyle",
    "Food",
  ];
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="h-full overflow-y-scroll  p-6 flex flex-wrap items-start
  gap-4 text-slate-700"
    >
      {/* Left Side */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded
border border-gray-300"
          placeholder="The future of artifical intelligence is ..."
          required
        />
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`
    text-xs px-4 py-1 border rounded-full cursor-pointer ${
      selectedCategory === item
        ? "bg-purple-50 text-purple-700"
        : "text-gray-500 border-gray-300 "
    }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button
          className="w-full flex justify-center items-center gap-2
      bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 
      text-sm rounded-lg cursor-pointer"
        >
          <Hash className="w-5" />
          Generate titles
        </button>
      </form>
      {/* Right Side */}
      <div
        className="w-full max-w-lg p-4 bg-white rounded-lg
    flex flex-col border border-gray-200 min-h-96 "
      >
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">Generated titles</h1>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm text-gray-500 flex flex-col items-center gap-5">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click "Generate titles" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
