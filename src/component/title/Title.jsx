import React from 'react';
import styles from "./tilte.module.scss";
function Title({title}) {
  return (
    <div className={styles['title']}>
    <p>{title}</p>
</div>
  )
}

export default Title