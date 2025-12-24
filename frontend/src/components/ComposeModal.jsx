import React, { useState } from 'react';
import { X, Image, Smile, MapPin, BarChart } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from './ui/dialog';

const ComposeModal = ({ isOpen, onClose, currentUser, onPost }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);

  const handlePost = () => {
    if (tweetContent.trim()) {
      onPost({
        content: tweetContent,
        image: imageUrl || null
      });
      setTweetContent('');
      setImageUrl('');
      setShowImageInput(false);
      onClose();
    }
  };

  const charLimit = 280;
  const remainingChars = charLimit - tweetContent.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-gray-800 text-white max-w-[600px] p-0">
        <DialogHeader className="border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-white hover:bg-gray-900 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="p-4">
          <div className="flex gap-3">
            {currentUser && (
              <img
                src={currentUser.avatar}
                alt={currentUser.displayName}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <textarea
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
                placeholder="What is happening?!"
                className="w-full bg-transparent text-white text-xl outline-none resize-none min-h-[120px] placeholder-gray-500"
                autoFocus
              />

              {showImageInput && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter image URL"
                    className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 outline-none border border-gray-800 focus:border-blue-500 transition-colors"
                  />
                  {imageUrl && (
                    <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
                      <img
                        src={imageUrl}
                        alt="Preview"
                        className="w-full object-cover max-h-[300px]"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-800">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowImageInput(!showImageInput)}
                    className="text-blue-500 hover:bg-blue-500/10 rounded-full p-2 transition-colors"
                  >
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="text-blue-500 hover:bg-blue-500/10 rounded-full p-2 transition-colors">
                    <BarChart className="w-5 h-5" />
                  </button>
                  <button className="text-blue-500 hover:bg-blue-500/10 rounded-full p-2 transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="text-blue-500 hover:bg-blue-500/10 rounded-full p-2 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm ${
                      remainingChars < 0
                        ? 'text-red-500'
                        : remainingChars < 20
                        ? 'text-yellow-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {remainingChars < 20 && remainingChars}
                  </span>
                  <Button
                    onClick={handlePost}
                    disabled={!tweetContent.trim() || remainingChars < 0}
                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-bold rounded-full px-6 transition-colors"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComposeModal;