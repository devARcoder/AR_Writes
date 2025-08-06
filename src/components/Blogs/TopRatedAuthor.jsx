import {  Github, Globe, Linkedin, MapPin, Twitter } from 'lucide-react';
import React from 'react';

const TopRatedAuthor = ({ avatar, name, field, intro, location, socialLinks }) => {
  return (
    <div className=" bg-[#1c1c1c] w-full rounded-xl p-8 inset-shadow-sm w-full  inset-shadow-gray-500 lg:mt-6">
      {/* Heading */}
      <h1 className="text-gray-400 text-md font-semibold">About Top Rated User</h1>

      {/* Author Info */}
      <div className="flex items-center space-x-3 pt-4">
        <div className="img">
          <img
            className="rounded-full w-14 h-14 object-cover"
            src={avatar}
            alt={name}
          />
        </div>
        <div className="head">
          <h1 className="font-bold text-white text-lg">{name}</h1>
          <p className="text-gray-300 text-sm">{field}</p>
        </div>
      </div>

      {/* Intro */}
      <p className="pt-4 text-gray-300 text-md leading-relaxed">{intro}</p>

      {/* Location */}
      {location && (
        <div className="flex items-center space-x-2 pt-4 text-gray-300">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">
            {location.country}, {location.city}
          </span>
        </div>
      )}

      {/* Social Links */}
      <div className="flex space-x-4 items-center pt-6 text-gray-300">
        
        {socialLinks.website && (
          <a href={socialLinks.website} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <Globe/>
          </a>
        )}
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <Github/>
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <Linkedin />
          </a>
        )}
      </div>
    </div>
  );
};

export default TopRatedAuthor;
