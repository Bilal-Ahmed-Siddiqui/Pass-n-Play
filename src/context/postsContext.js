import { createContext, useState } from "react";

const postsContext = createContext();

export const PostsState = (props) => {
  const [posts, setposts] = useState([]);
  const url = "http://localhost:8000";

  //api call fetch all
  const fetchAll = async () => {
     //api call
     const response = await fetch(`${url}/api/post/fetchall`, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    //update client side
    const data = await response.json();
    setposts(data);
  };

  return (
    <postsContext.Provider value={{ posts, setposts, fetchAll }}>
      {props.children}
    </postsContext.Provider>
  );
};

export default postsContext;
