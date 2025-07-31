import { MapPin, Linkedin, Github, Facebook, Twitter } from 'lucide-react';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";

const AuthorExperience = () => {
  const { id } = useParams();

  const blog = blogData.find((b) => String(b.id) === id);
  const { workExperience, technologies } = blog.author;

  return (
    <div className="bg-[#1c1c1c] w-full rounded-xl p-8  lg:mt-6 lg:sticky lg:top-6">
      {/* Heading */}
      <h1 className="text-gray-400 text-md font-semibold mb-4">
        Work Experience
      </h1>

      {/* Work Experience Section */}
      <div className="mb-6">
        {workExperience.map((job, index) => (
          <div key={index} className="text-white flex justify-between items-center space-y-2 border-b border-gray-600 py-3">
            <div className="">
                <h2 className="text-lg font-semibold">{job.role}</h2>
            <p className="text-gray-300">{job.company}</p>
            </div>
            <h1 className="text-sm text-gray-300">{job.years}</h1>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <h1 className="text-gray-400 text-md font-semibold mb-4">
        Technologies
      </h1>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AuthorExperience;
