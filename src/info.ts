import intelligence from "./assets/images/intelligence.svg";
import devotional from "./assets/images/devotional.svg";
import store from "./assets/images/store.svg";
import community from "./assets/images/community2.svg";
import read from "./assets/images/read.svg";
import audio from "./assets/images/audio.svg";
import video from "./assets/images/video.svg";
import book from "./assets/images/book.svg";
import intelligenceImg from "./assets/images/intelligence-img.png";
import calender from "./assets/images/calender.svg";

const tips = [
  {
    id: 1,
    icon: intelligence,
    title: "Bible Intelligence",
    content:
      "Deep biblical studies with expert commentary, multimedia content, and practical applications for modern life.",
  },
  {
    id: 2,
    icon: devotional,
    title: "Daily Devotionals",
    content:
      "Start each day with inspiring devotionals, scripture readings, and prayers to guide your spiritual journey.",
  },
  {
    id: 3,
    title: "Christian Store",
    icon: store,
    content:
      "Access quality ebooks, study guides, audio content, and spiritual resources for continued growth.",
  },
  {
    id: 4,
    title: "Community",
    icon: community,
    content:
      "Connect with fellow believers, share insights, and grow together in faith through meaningful discussions.",
  },
];

const intelligences = [
  {
    id: 1,
    image: intelligenceImg,
    tag: "faith",
    media: {
      icon: read,
      text: "read",
    },
    title: "Understanding God's Sovereignty",
    bibletext: {
      icon: book,
      passage: "Romans 8:28",
    },
    content:
      "In our study of God's sovereignty, we discover that He works all things together for the good of those who love Him and are called...",
  },
  {
    id: 2,
    image: intelligenceImg,
    tag: "prayer",
    media: {
      icon: audio,
      text: "audio",
    },
    title: "The Power of Persistent Prayer",
    bibletext: {
      icon: book,
      passage: "Luke 18:1-8",
    },
    content:
      "Jesus taught His disciples about the importance of persistent prayer through the parable of the persistent widow. This story...",
  },
  {
    id: 3,
    image: intelligenceImg,
    tag: "discipleship",
    media: {
      icon: video,
      text: "video",
    },
    title: "Following Jesus in Daily Life",
    bibletext: {
      icon: book,
      passage: "Matthew 16:24",
    },
    content:
      "Jesus said to His disciples, 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' This call to...",
  },
];

const nourishment = [
  {
    id: 1,
    image: intelligenceImg,
    calender: {
      icon: calender,
      date: "Aug 25",
    },
    title: "Walking in His Light",
    bibletext: {
      icon: book,
      passage: "1 John 1:7",
    },
    content:
      "Light has an amazing ability to dispel darkness. No matter how dark a room is, even the smallest light can make a difference. As...",
  },
  {
    id: 2,
    image: intelligenceImg,
    calender: {
      icon: calender,
      date: "Aug 25",
    },
    title: "Strength for Today",
    bibletext: {
      icon: book,
      passage: "Isaiah 40:31",
    },
    content:
      "Life can be exhausting. Between work responsibilities, family obligations, and the challenges that come our way, it's easy to feel...",
  },
  {
    id: 3,
    image: intelligenceImg,
    calender: {
      icon: calender,
      date: "Aug 25",
    },
    title: "Perfect Peace",
    bibletext: {
      icon: book,
      passage: "Isaiah 26:3",
    },
    content:
      "In a world filled with anxiety and uncertainty, the promise of perfect peace seems almost too good to be true. Yet this is exactly what God...",
  },
];

const stores = [
  {
    id: 1,
    image: intelligenceImg,
    tag: "Ebook",
    title: "Daily Devotional Guide",
    price: 4.99,
    content:
      "A 365-day journey through Scripture with daily readings, reflections, and prayers. Perfect for personal...",
  },
  {
    id: 2,
    image: intelligenceImg,
    tag: "Ebook",
    title: "Bible Study Methods Guide",
    price: 4.99,
    content:
      "A 365-day journey through Scripture with daily readings, reflections, and prayers. Perfect for personal...",
  },
  {
    id: 3,
    image: intelligenceImg,
    tag: "Ebook",
    title: "Bible Study Methods Guide",
    price: 4.99,
    content:
      "A 365-day journey through Scripture with daily readings, reflections, and prayers. Perfect for personal...",
  },
];

export { tips, intelligences, nourishment, stores };
