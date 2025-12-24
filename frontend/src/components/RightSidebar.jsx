import React from 'react';
import { Search, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const RightSidebar = ({ trends, suggestions }) => {
  return (
    <div className="w-[350px] h-screen sticky top-0 py-2 px-4">
      <div className="sticky top-2">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 text-white rounded-full py-3 pl-12 pr-4 border border-transparent focus:border-blue-500 focus:bg-black outline-none transition-colors"
          />
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden mb-4">
          <h2 className="text-xl font-bold text-white p-4">What's happening</h2>
          {trends.map((trend, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="text-gray-500 text-[13px]">Trending</div>
              <div className="font-bold text-white text-[15px]">{trend.tag}</div>
              <div className="text-gray-500 text-[13px]">{trend.tweets} posts</div>
            </div>
          ))}
          <button className="text-blue-500 hover:bg-gray-800 transition-colors w-full text-left px-4 py-3 text-[15px]">
            Show more
          </button>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          <h2 className="text-xl font-bold text-white p-4">Who to follow</h2>
          {suggestions.map((user) => (
            <div
              key={user.id}
              className="px-4 py-3 hover:bg-gray-800 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-[15px] hover:underline cursor-pointer">
                      {user.displayName}
                    </span>
                    {user.verified && <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />}
                  </div>
                  <div className="text-gray-500 text-[15px]">@{user.username}</div>
                </div>
              </div>
              <Button
                className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-4 py-1.5 h-auto text-[14px] transition-colors"
              >
                Follow
              </Button>
            </div>
          ))}
          <button className="text-blue-500 hover:bg-gray-800 transition-colors w-full text-left px-4 py-3 text-[15px]">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;