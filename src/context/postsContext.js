import { createContext, useState } from "react";

const postsContext = createContext();

export const PostsState = (props) => {
  const [posts, setposts] = useState([]);
  const [userposts, setuserposts] = useState([]);
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

  //api call fetch user post
  const fetchUserPost = async () => {
    //api call
    const response = await fetch(`${url}/api/post/userposts`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMWU1YmRmODIxMGZiYjc1MzdiNjc3In0sImlhdCI6MTcxMzQ5NzY0Nn0.laVpWmPL77Hl7zO4_kIENVsadI1dKSGyspcqaGRsl8o",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    //update client side
    const data = await response.json();
    setuserposts(data);
  };

  //api call delete post
  const deletePost = async (id) => {
    //api call
    const response = await fetch(`${url}/api/post/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMWU1YmRmODIxMGZiYjc1MzdiNjc3In0sImlhdCI6MTcxMzQ5NzY0Nn0.laVpWmPL77Hl7zO4_kIENVsadI1dKSGyspcqaGRsl8o",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete Ad!");
    }

    //update client side
    const data = await response.json();
    alert(data);
  };

  return (
    <postsContext.Provider
      value={{
        posts,
        setposts,
        fetchAll,
        userposts,
        setuserposts,
        fetchUserPost,
        deletePost,
      }}
    >
      {props.children}
    </postsContext.Provider>
  );
};

export default postsContext;
