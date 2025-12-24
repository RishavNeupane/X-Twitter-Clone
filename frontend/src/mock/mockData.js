export const mockUsers = [
  {
    id: '1',
    username: 'elonmusk',
    displayName: 'Elon Musk',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    bio: 'Tesla, SpaceX, Twitter',
    following: 120,
    followers: 156000000,
    verified: true
  },
  {
    id: '2',
    username: 'sama',
    displayName: 'Sam Altman',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    bio: 'OpenAI CEO',
    following: 500,
    followers: 2500000,
    verified: true
  },
  {
    id: '3',
    username: 'naval',
    displayName: 'Naval',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    bio: 'AngelList',
    following: 0,
    followers: 1800000,
    verified: true
  },
  {
    id: '4',
    username: 'you',
    displayName: 'Your Name',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    bio: 'Just exploring X',
    following: 50,
    followers: 125,
    verified: false
  }
];

export const mockTweets = [
  {
    id: '1',
    userId: '1',
    content: 'Just launched the new Tesla Model Y. Performance beyond expectations! 🚗⚡',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 45231,
    retweets: 12453,
    replies: 3421,
    image: null,
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '2',
    userId: '2',
    content: 'AI will change everything we know about technology. The future is closer than you think.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 28392,
    retweets: 8234,
    replies: 2103,
    image: null,
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '3',
    userId: '3',
    content: 'Seek wealth, not money or status. Wealth is having assets that earn while you sleep.',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    likes: 52103,
    retweets: 15234,
    replies: 1823,
    image: null,
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '4',
    userId: '1',
    content: 'SpaceX Starship launch was incredible today. Mars, here we come!',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    likes: 89234,
    retweets: 23421,
    replies: 5234,
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&h=400&fit=crop',
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '5',
    userId: '2',
    content: 'Working on something exciting at OpenAI. Can\'t wait to share more soon.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    likes: 34521,
    retweets: 9234,
    replies: 2834,
    image: null,
    likedBy: [],
    retweetedBy: []
  }
];

export const mockTrends = [
  { tag: '#AI', tweets: '125K' },
  { tag: '#Tesla', tweets: '89K' },
  { tag: '#SpaceX', tweets: '67K' },
  { tag: '#Technology', tweets: '234K' },
  { tag: '#Innovation', tweets: '45K' }
];

export const mockSuggestions = [
  { id: '5', username: 'pmarca', displayName: 'Marc Andreessen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', verified: true },
  { id: '6', username: 'balajis', displayName: 'Balaji', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', verified: true },
  { id: '7', username: 'dhh', displayName: 'DHH', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop', verified: false }
];