import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useInfiniteQuery } from "react-query";
import { useLocation } from 'react-router';
import { fetchUsers } from "../../helper/fetchData";
import ScrollLoading from '../infintyScrollLoading/ScrollLoading';
import Loading from '../loading/Loading';
import Title from '../title/Title';
import UseIntersect from '../useIntersect/UseIntersect';
import styles from "./allUser.module.scss";
import UserItem from './UserItem';
 const AllUser = () => {
  const loadItem=useRef(null)
 
  let location = useLocation();
  const { data, fetchNextPage, hasNextPage, status,isError,isLoading,isFetching,refetch,isFetchingNextPage,error } = useInfiniteQuery(
    ["products"],
    fetchUsers,
    {
      // getNextPageParam determining if there is more data to load and the information to fetch it.
      getNextPageParam: (lastPage, pages) => {
        // console.log({lastPage,pages});
        // need to check if current page have more than totalPage or current skip have more than total products
        if (parseInt(lastPage.skip) < lastPage.total) {
          return parseInt(lastPage.skip) + lastPage.limit;
        }
        return false;
      },
      staleTime:220
    },
    
  );
  let inerSect=UseIntersect(loadItem,fetchNextPage,hasNextPage)

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
   },[location])
  

  return (
   <>
 
   {isLoading && createPortal(<Loading/>,document.body) }
   <div className={styles['all_user']}>
      <Title title="All User"/>
        <div className={styles['items']}>
        {data?.pages.map((page)=>{
          return page.users.map((user)=> <UserItem key={user.id} {...user}/>)
        })}

        
        </div>

    </div>
    { isError && <div className={styles["error"]} onClick={refetch}>
    <p className={styles["error_message"]}> Failed to Fetch Data please click here</p>
   </div> }
 
   <ScrollLoading isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} ref={loadItem} text="No User Left" isLoading={isLoading} isError={isError}/>
    </>
   
  )
}


export default AllUser