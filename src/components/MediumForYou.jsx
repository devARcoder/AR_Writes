import React, { useEffect, useState } from 'react';

const MediumForYou = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devARcoder/writeARmedium_jsondata/main/medium.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Expected an array, got:', data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading...</p>;
  }

  if (posts.length === 0) {
    return <p className="text-center py-6">No posts found.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {posts.map((post) => (
        <div key={post.id} className="rounded shadow hover:shadow-lg transition">
          <img
            src={post.coverImg}
            alt={post.title}
            className="w-full h-48 object-cover rounded-t"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&h=600';
            }}
          />
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-1">{post.category}</p>
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
            <p className="text-sm text-gray-600 line-clamp-3">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediumForYou;
