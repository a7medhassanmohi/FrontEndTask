import React from 'react';
import styles from "./comment.module.scss";

function CommetItem({user,body
}) {
  return (
    <div className={styles["comments_item"]} >
    <h5>{user.username}</h5>
    <p>
    {body}
    </p>
  </div>
  )
}

export default CommetItem