import React, { forwardRef } from 'react';
import styles from "./scrollLoading.module.scss";

const ScrollLoading=forwardRef(({isFetchingNextPage,hasNextPage,text,isLoading,isError},ref)=> {
  
  return (
    <div  className={styles["infinity_Scroll"]} ref={ref}>
     {!isLoading && !isError &&  <p> {isFetchingNextPage && hasNextPage ?"Loading.....":text} </p>}
   </div>
  )
})

export default ScrollLoading