import { createContext, useState } from "react";

const postsContext = createContext();

export const PostsState = (props) => {
  const initialState = [
    {
      _id: "662207912f95831f78274932",
      user: "6621e5bdf8210fbb7537b677",
      title: "God of War: Ragnarok",
      description: "GoW DvD for Ps4",
      location: "Karachi",
      condition: "Used",
      rentPeriod: 2,
      price: 4000,
      timeStamp: "2024-04-19T05:56:33.361Z",
      __v: 0,
    },
    {
      _id: "662207912f95831f78274932",
      user: "6621e5bdf8210fbb7537b677",
      title: "God of War: Ragnarok",
      description: "GoW DvD for Ps4",
      location: "Karachi",
      condition: "Used",
      rentPeriod: 2,
      price: 4000,
      timeStamp: "2024-04-19T05:56:33.361Z",
      __v: 0,
    },
    {
      _id: "662207912f95831f78274932",
      user: "6621e5bdf8210fbb7537b677",
      title: "God of War: Ragnarok",
      description: "GoW DvD for Ps4",
      location: "Karachi",
      condition: "Used",
      rentPeriod: 2,
      price: 4000,
      timeStamp: "2024-04-19T05:56:33.361Z",
      __v: 0,
    },
    {
      _id: "662207912f95831f78274932",
      user: "6621e5bdf8210fbb7537b677",
      title: "God of War: Ragnarok",
      description: "GoW DvD for Ps4",
      location: "Karachi",
      condition: "Used",
      rentPeriod: 2,
      price: 4000,
      timeStamp: "2024-04-19T05:56:33.361Z",
      __v: 0,
    },
    {
      _id: "662207912f95831f78274932",
      user: "6621e5bdf8210fbb7537b677",
      title: "God of War: Ragnarok",
      description: "GoW DvD for Ps4",
      location: "Karachi",
      condition: "Used",
      rentPeriod: 2,
      price: 4000,
      timeStamp: "2024-04-19T05:56:33.361Z",
      __v: 0,
    },
  ];
  const [posts, setposts] = useState(initialState);
  return (
    <postsContext.Provider value={{ posts, setposts }}>
      {props.children}
    </postsContext.Provider>
  );
};

export default postsContext;
