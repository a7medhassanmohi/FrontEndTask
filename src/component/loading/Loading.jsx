import React from 'react';
import styles from "./loading.module.scss";

function Loading({noBackGroud,size}) {
    
  return (
    
    <div className={styles["loading_container"]} style={{backgroundColor:noBackGroud && "transparent"}}>

        <div className={styles["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading