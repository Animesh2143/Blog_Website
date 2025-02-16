import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizedTextDisplay = ({ text }) => {
  const navigate = useNavigate();

  const formatText = (section) => {
    // Convert **bold** to <strong> and *italic* to <em>
    return section
      .split(/(\*\*.*?\*\*|\*.*?\*)/)
      .map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        } else if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
      });
  };

  const processText = (text) => {
    return text.split(/\n+/).map((section, index) => {
      if (section.startsWith("##")) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-4 mb-2 text-blue-50">
            {section.replace(/^##\s*/, "")}
          </h3>
        );
      } else if (section.startsWith("#")) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-white underline">
            {section.replace(/^#\s*/, "")}
          </h2>
        );
      } else {
        return (
          <p key={index} className="text-lg leading-relaxed text-gray-300 mb-4">
            {formatText(section)}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-3xl text-right text-grey-700 font-bold mb-6 underline">Blog starts from here..</h1>
      <div className="max-w-4xl mx-auto mb-8">{processText(text)}</div>

      {/* Navigate Button */}
      <button
        onClick={() => navigate("/blog")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition"
      >
        View All Blogs
      </button>
    </div>
  );
};

export default OrganizedTextDisplay;
