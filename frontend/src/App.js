import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import TweetCard from "./components/TweetCard";
import ComposeModal from "./components/ComposeModal";
import { mockUsers, mockTweets, mockTrends, mockSuggestions } from "./mock/mockData";
import { Sparkles } from "lucide-react";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[3]); // Default to "you"
  const [tweets, setTweets] = useState([]);
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  useEffect(() => {
    // Load mock tweets
    setTweets(mockTweets);
  }, []);

  const handlePostTweet = (newTweetData) => {
    const newTweet = {
      id: String(tweets.length + 1),
      userId: currentUser.id,
      content: newTweetData.content,
      image: newTweetData.image,
      timestamp: new Date(),
      likes: 0,
      retweets: 0,
      replies: 0,
      likedBy: [],
      retweetedBy: []
    };
    setTweets([newTweet, ...tweets]);
  };

  const getTweetUser = (userId) => {
    return mockUsers.find(user => user.id === userId) || currentUser;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex max-w-[1280px] mx-auto">
        <Sidebar currentUser={currentUser} onCompose={() => setIsComposeOpen(true)} />
        
        <main className="flex-1 border-x border-gray-800 max-w-[600px]">
          <div className="sticky top-0 z-10 backdrop-blur-md bg-black/60 border-b border-gray-800">
            <div className="flex items-center justify-between px-4 py-3">
              <h1 className="text-xl font-bold">Home</h1>
              <button className="text-white hover:bg-gray-900 rounded-full p-2 transition-colors">
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
            <div className="flex border-b border-gray-800">
              <button className="flex-1 py-4 hover:bg-gray-900 transition-colors relative font-bold">
                For you
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full" />
              </button>
              <button className="flex-1 py-4 hover:bg-gray-900 transition-colors text-gray-500">
                Following
              </button>
            </div>
          </div>

          <div className="border-b border-gray-800 p-4">
            <div className="flex gap-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.displayName}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <button
                  onClick={() => setIsComposeOpen(true)}
                  className="w-full text-left text-gray-500 text-xl py-3 outline-none"
                >
                  What is happening?!
                </button>
              </div>
            </div>
          </div>

          <div>
            {tweets.map(tweet => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                user={getTweetUser(tweet.userId)}
              />
            ))}
          </div>
        </main>

        <RightSidebar trends={mockTrends} suggestions={mockSuggestions} />
      </div>

      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        currentUser={currentUser}
        onPost={handlePostTweet}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
