import React, { useState } from 'react';
import { Heart, Repeat2, MessageCircle, Share, MoreHorizontal, CheckCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const TweetCard = ({ tweet, user, onLike, onRetweet }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [likeCount, setLikeCount] = useState(tweet.likes);
  const [retweetCount, setRetweetCount] = useState(tweet.retweets);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    if (onLike) onLike(tweet.id);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetCount(isRetweeted ? retweetCount - 1 : retweetCount + 1);
    if (onRetweet) onRetweet(tweet.id);
  };

  const formatCount = (count) => {
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count.toString();
  };

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-900/50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <img
          src={user.avatar}
          alt={user.displayName}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold text-white hover:underline">{user.displayName}</span>
              {user.verified && <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />}
              <span className="text-gray-500">@{user.username}</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500">
                {formatDistanceToNow(new Date(tweet.timestamp), { addSuffix: true })}
              </span>
            </div>
            <button className="text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-full p-1 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <p className="text-white text-[15px] mt-2 leading-5 break-words">{tweet.content}</p>

          {tweet.image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
              <img
                src={tweet.image}
                alt="Tweet media"
                className="w-full object-cover max-h-[500px]"
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                <MessageCircle className="w-[18px] h-[18px]" />
              </div>
              <span className="text-sm">{formatCount(tweet.replies)}</span>
            </button>

            <button
              onClick={handleRetweet}
              className={`flex items-center gap-2 group transition-colors ${
                isRetweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                <Repeat2 className="w-[18px] h-[18px]" />
              </div>
              <span className="text-sm">{formatCount(retweetCount)}</span>
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center gap-2 group transition-colors ${
                isLiked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                <Heart className={`w-[18px] h-[18px] ${isLiked ? 'fill-pink-500' : ''}`} />
              </div>
              <span className="text-sm">{formatCount(likeCount)}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                <Share className="w-[18px] h-[18px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;