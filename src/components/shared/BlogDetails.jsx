import { ChevronRight, Linkedin, Twitter, Facebook, ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";
import AboutAuthor from "./AboutAuthor";
import AuthorFeaturedPost from "./AuthorFeaturedPost";
import AuthotExperience from "./AuthorExperience";

const BlogDetails = () => {
  const [viewComments, setViewComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatarOption, setAvatarOption] = useState("random");
  const [customAvatarUrl, setCustomAvatarUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // Avatar options
  const avatarOptions = [
    { value: "random", label: "Random Avatar" },
    { value: "male", label: "Male Avatar" },
    { value: "female", label: "Female Avatar" },
    { value: "custom", label: "Custom URL" }
  ];

  const currentIndex = blogData.findIndex((b) => String(b.id) === id);
  const blog = blogData[currentIndex] || { 
    id: "",
    title: "",
    excerpt: "",
    content: "",
    quotes: [],
    coverImage: "",
    author: {
      name: "",
      avatar: "",
      bio: "",
      featurePost: {},
      workExperience: []
    },
    category: "",
    tags: [],
    publishedAt: "",
    readTime: "",
    likes: 0,
    views: 0,
    comments: [],
    slug: ""
  };

  const getRandomAvatar = (gender = null) => {
    const randomId = Math.floor(Math.random() * 100);
    if (gender === "male") {
      return `https://randomuser.me/api/portraits/men/${randomId}.jpg`;
    } else if (gender === "female") {
      return `https://randomuser.me/api/portraits/women/${randomId}.jpg`;
    }
    return `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${randomId}.jpg`;
  };

  const handleComments = () => {
    setViewComments((prev) => !prev);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "" || !firstName.trim()) return;
    
    let avatarUrl;
    switch(avatarOption) {
      case "male":
        avatarUrl = getRandomAvatar("male");
        break;
      case "female":
        avatarUrl = getRandomAvatar("female");
        break;
      case "custom":
        avatarUrl = customAvatarUrl || getRandomAvatar();
        break;
      default:
        avatarUrl = getRandomAvatar();
    }

    const comment = {
      id: Date.now(),
      user: {
        name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        avatar: avatarUrl
      },
      text: newComment,
      date: new Date().toISOString(),
      replies: []
    };
    
    // Update the blog data
    blog.comments = [...(blog.comments || []), comment];
    setNewComment("");
    setFirstName("");
    setLastName("");
    setAvatarOption("random");
    setCustomAvatarUrl("");
  };

  // Get previous and next posts
  const previousPost = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [id]);

  if (!blog || !blog.id) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p className="text-lg font-bold">Blog not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row bg-[#222] px-6 py-4 md:px-9 lg:px-16 lg:space-x-8">
      <div className="lg:w-2/3">
        <div className="breadcrum flex items-center my-4 text-white text-sm md:text-md font-semibold">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <ChevronRight size={20} className="pt-1" />
          <Link to={`/${blog.category}`} className="hover:text-gray-300">{blog.category}</Link>
          <ChevronRight size={20} className="pt-1" />
          <Link className="line-clamp-1 text-gray-200 hover:text-gray-300" to="#">
            {blog.title}
          </Link>
        </div>

        <div className="mr-3">
          <div className="img relative">
            <img
              className="w-full h-60 sm:h-73 md:h-85 lg:h-[25rem] rounded-xl md:rounded-2xl object-cover"
              src={blog.coverImage}
              alt={blog.title}
            />
            <div className="absolute top-0 left-0 h-full lg:h-[25rem] rounded-xl md:rounded-2xl w-full bg-black/30 z-10"></div>
            <div className="head absolute top-10 sm:top-16 md:top-20 lg:top-24 left-4 right-4 z-20 text-white text-center space-y-5">
              <p className="text-sm sm:text-lg md:text-xl text-white font-semibold">
                {blog.author.name}{" "}
                <span className="text-gray-100">on {blog.publishedAt}</span>
              </p>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:mx-24 font-bold md:mx-4 mt-1 line-clamp-3">
                {blog.title}
              </h1>

              <p className="hidden lg:block text-gray-100 text-lg">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap justify-center space-y-1 space-x-3 items-center md:mt-8">
                {blog.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-black/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm sm:text-[16px] cursor-pointer hover:bg-white/30 transition"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="data text-white space-y-5 pt-8">
          <p>{blog.excerpt}</p>
          <p>{blog.content}</p>

          <h1 className="text-2xl font-bold">
            {blog.slug.charAt(0).toUpperCase() + blog.slug.slice(1)}
          </h1>
          <p>{blog.content.slice(1301)}</p>
          <p>{blog.content.slice(43, 320)}</p>
        </div>

        {blog.quotes && blog.quotes.length > 0 && (
          <div className="quotes bg-black/50 text-white mx-4 my-6 px-5 py-3 rounded-xl shadow-lg text-center">
            <span className="block text-4xl mb-1">"</span>
            <h1 className="text-lg md:text-xl font-semibold italic leading-relaxed">
              {blog.quotes[0]}
            </h1>
            <span className="block text-4xl mt-1">"</span>
          </div>
        )}

        <p className="text-white">{blog.content.slice(100, 320)}</p>

        <div className="flex text-white justify-between items-center pt-12">
          <h1 className="font-bold">
            {blog.author.name}
            <span className="text-gray-200 text-sm font-semibold"> on {blog.publishedAt}</span>
          </h1>
          <h1 className="bg-black/20 px-5 text-[14px] font-semibold py-0.5 border border-black/20 rounded-md">
            {blog.category}
          </h1>
        </div>

        <div className="flex items-center space-x-1 text-white mt-2">
          <p className="text-gray-200 text-md font-semibold">
            {blog.views}k <span className="text-gray-100">Views</span>
          </p>
          <p>•</p>
          <p className="text-gray-200 text-md font-semibold">
            {blog.likes}k <span className="text-gray-100">Likes</span>
          </p>
        </div>

        {/* Previous and Next Post Navigation */}
        <div className="flex justify-between mt-8 mb-12 border-t border-b border-gray-700 py-6">
          {previousPost ? (
            <Link 
              to={`/blog/${previousPost.id}`}
              className="flex items-center space-x-2 group bg-black/20 py-6 px-6 rounded-lg hover:bg-black/30 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition" />
              <div>
                <p className="text-gray-400 text-sm">Previous Post</p>
                <p className="text-white font-medium group-hover:text-gray-300 transition line-clamp-1">
                  {previousPost.title.slice(0, 30) + "..."}
                </p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextPost && (
            <Link 
              to={`/blog/${nextPost.id}`}
              className="flex items-center space-x-2 group ml-auto text-right bg-black/20 py-6 px-5 rounded-lg hover:bg-black/30 transition"
            >
              <div>
                <p className="text-gray-400 text-sm">Next Post</p>
                <p className="text-white font-medium group-hover:text-gray-300 transition line-clamp-1">
                  {nextPost.title.slice(0, 30) + "..."}
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition" />
            </Link>
          )}
        </div>

        {/* Comments Section */}
        <div className="text-white mb-8">
          <h1 
            onClick={handleComments} 
            className="text-xl font-bold cursor-pointer hover:text-gray-300 mb-4 flex items-center"
          >
            {viewComments ? (
              <>
                <ChevronRight className="rotate-90 mr-2" size={20} />
                Hide Comments
              </>
            ) : (
              <>
                <ChevronRight className="mr-2" size={20} />
                View Comments
              </>
            )}
            <span className="ml-2 text-gray-400 text-sm">
              ({blog.comments?.length || 0})
            </span>
          </h1>

          {viewComments && (
            <div className="comments space-y-6">
              {/* Enhanced Comment Form */}
              <form onSubmit={handleAddComment} className="bg-black/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Add a Comment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">First Name*</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-black/30 text-white p-2 rounded border border-white/20 focus:border-white/30 focus:outline-none"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-black/30 text-white p-2 rounded border border-white/20 focus:border-white/30 focus:outline-none"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">Avatar</label>
                  <div className="flex flex-wrap gap-3">
                    {avatarOptions.map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={avatarOption === option.value}
                          onChange={() => setAvatarOption(option.value)}
                          className="text-blue-500"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {avatarOption === "custom" && (
                    <div className="mt-2">
                      <input
                        type="url"
                        value={customAvatarUrl}
                        onChange={(e) => setCustomAvatarUrl(e.target.value)}
                        className="w-full bg-black/30 text-white p-2 rounded border border-white/20 focus:border-white/30 focus:outline-none"
                        placeholder="Paste image URL"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">Comment*</label>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-black/30 text-white p-3 rounded border border-white/20 focus:border-white/30 focus:outline-none"
                    rows="3"
                    placeholder="Share your thoughts..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!firstName.trim() || !newComment.trim()}
                  className="mt-3 border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-full px-7 py-2 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out disabled:cursor-not-allowed"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              {blog.comments?.length > 0 ? (
                blog.comments.map((comment) => (
                  <div key={comment.id} className="comment bg-black/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={comment.user?.avatar || 'https://via.placeholder.com/40'} 
                        alt={comment.user?.name || 'User'}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{comment.user?.name || 'Anonymous'}</h4>
                            <span className="text-xs text-gray-400">
                              {new Date(comment.date || new Date()).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 mt-2">{comment.text}</p>
                        
                        {/* Replies Section */}
                        {comment.replies?.length > 0 && (
                          <div className="replies mt-4 ml-6 pl-4 border-l-2 border-gray-600 space-y-4">
                            {comment.replies.map((reply, replyIndex) => (
                              <div key={replyIndex} className="reply flex items-start space-x-3 pt-3">
                                <img 
                                  src={reply.author?.avatar || 'https://via.placeholder.com/32'} 
                                  alt={reply.author || 'User'}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <h5 className="text-sm font-medium">
                                      {reply.author || 'Anonymous'}
                                    </h5>
                                    <span className="text-xs text-gray-400">
                                      {new Date(reply.date || new Date()).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1">{reply.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 py-4 text-center bg-black/30 rounded-lg">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center space-x-3 my-4 text-white">
          <h1 className="text-xl font-bold">Share Post on - </h1>
          <Linkedin className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg cursor-pointer" />
          <Facebook className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg cursor-pointer" />
          <Twitter className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg cursor-pointer" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 md:mr-25 lg:mr-0 lg:mt-6">
        <AboutAuthor author={blog.author} />
        <AuthorFeaturedPost featurePost={blog.author.featurePost} />
        <AuthotExperience experience={blog.author.workExperience} />
      </div>
    </div>
  );
};

export default BlogDetails;