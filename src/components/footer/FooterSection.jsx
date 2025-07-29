import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
const FooterSection = () => {
    const [isFindOpen1, setIsFindOpen1] = useState(false);
  const [isFindOpen2, setIsFindOpen2] = useState(false);
  const [isFindOpen4, setIsFindOpen4] = useState(false);
  return (
    <>
      <div className="space-y-4 md:flex md:space-x-12 ">
        <div className="find">
          <div
            onClick={() => setIsFindOpen1((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-white text-lg">Help Us</h1>
            <div className="md:hidden">
              {!isFindOpen1 ? <ChevronDown className="text-white" /> : <ChevronUp className="text-white" />}
            </div>
          </div>
          <div
            className={`text-white space-y-3 text-sm mt-5 ${
              isFindOpen1 ? "block" : "hidden"
            } md:block`}
          >
            <h1>Post an Article</h1>
            <h1>Suggest Topics</h1>
            <h1>Irrelevant Articles</h1>
            <h1>Broken Links</h1>
            <h1>Content Feedback</h1>
          </div>
        </div>

        
        <div className="info">
          <div
            onClick={() => setIsFindOpen2((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-white text-lg">Information</h1>
            <div className="md:hidden">
              {!isFindOpen2 ? <ChevronDown className="text-white" /> : <ChevronUp className="text-white" />}
            </div>
          </div>
          <div
            className={`text-white space-y-3 text-sm mt-5  ${
              isFindOpen2 ? "block" : "hidden"
            } md:block`}
          >
            <h1>
            <Link to="/about">About Us</Link>
            </h1>
            <h1>
              <Link to="/contact">Contact Us</Link>
              </h1>
            <h1>
              <Link to="/collections">Explore Catalog</Link>
              </h1>
            <h1>
              <Link to="/terms">Privacy Policy</Link>
              </h1>
            <h1>
              <Link to="/terms">Terms & Conditions</Link>
              </h1>
          </div>
        </div>

        
        <div className="">
          <div
            onClick={() => setIsFindOpen4((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-white text-lg">
              Categories
            </h1>
            <div className="md:hidden">
              {!isFindOpen4 ? <ChevronDown className="text-white" /> : <ChevronUp className="text-white" />}
            </div>
          </div>
          <div
            className={`text-white space-y-3 text-sm mt-5 ${
              isFindOpen4 ? "block" : "hidden"
            } md:block`}
          >
            <h1>Business</h1>
            <h1>Technology</h1>
            <h1>Sports</h1>
            <h1>Entertainment</h1>
            <h1>Health</h1>
            <h1>Science</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection
