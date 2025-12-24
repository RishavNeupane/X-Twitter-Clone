import React from 'react';
import { Home, Search, Bell, Mail, BookMarked, User, MoreHorizontal, Feather } from 'lucide-react';
import { Button } from './ui/button';

const Sidebar = ({ currentUser, onCompose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: BookMarked, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: MoreHorizontal, label: 'More' }
  ];

  return (
    <div className="w-[275px] h-screen sticky top-0 flex flex-col px-2">
      <div className="flex-1">
        <div className="p-3 mb-1">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-5 px-4 py-3 rounded-full transition-colors w-fit ${
                item.active
                  ? 'font-bold'
                  : 'font-normal hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-[26px] h-[26px] text-white" strokeWidth={item.active ? 2.5 : 2} />
              <span className="text-xl text-white">{item.label}</span>
            </button>
          ))}
        </nav>

        <Button
          onClick={onCompose}
          className="w-[90%] bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full py-6 mt-4 text-[17px] transition-colors"
        >
          Post
        </Button>
      </div>

      {currentUser && (
        <div className="p-3 mb-4 hover:bg-gray-900 rounded-full transition-colors cursor-pointer flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.displayName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="font-bold text-white text-[15px] truncate">{currentUser.displayName}</div>
            <div className="text-gray-500 text-[15px] truncate">@{currentUser.username}</div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;