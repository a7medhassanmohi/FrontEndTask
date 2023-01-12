import axios from "axios";

export const fetchUsers = async ({ pageParam = 0 }) => {
    const {data} = await axios(`https://dummyjson.com/users?limit=10&skip=${pageParam}`) ;
    return data;
  };

  export const fetchPosts = async ({queryKey,pageParam=0}) => {
  
    const {data} = await axios(`https://dummyjson.com/users/${queryKey[1]}/posts?limit=10&skip=${pageParam}`) ;
     return data;
  };
  export const fetchComments = async ({queryKey,pageParam=0}) => {
    
     const {data} = await axios(`https://dummyjson.com/posts/${queryKey[1]}/comments?limit=10&skip=${pageParam}`) ;
      return data;
   };
//   