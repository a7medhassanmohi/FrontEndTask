import React, { useEffect, useRef, useState } from "react";
import Comment from "../comment/Comment";
import styles from "./posts.module.scss";

function PostItem({ id, title, body }) {
  const [isloadingcomment, setisloadingcomment] = useState(false);

  const [open, setopen] = useState(false);
  const comment = useRef(null);
  const wrape = useRef(null);
  function HandleopenComment() {
    const { height } = comment.current.getBoundingClientRect();
    if (open) {
      wrape.current.style.height = "0px";
      setopen(false);
    } else {
      wrape.current.style.height = `${height + 10}px`;
      setopen(true);
    }
  }
  useEffect(() => {
    const { height } = comment.current.getBoundingClientRect();
    if (!open) {
      wrape.current.style.height = "0px";
    } else {
      wrape.current.style.height = `${height + 10}px`;
    }
  }, [isloadingcomment]);

  return (
    <div className={styles["all_posts_item"]} onClick={HandleopenComment}>
      <div className={styles["all_posts_card"]}>
        <div className={styles["all_posts_card_info"]}>
          <h2 className={styles["all_posts_card_info_title"]}>{title}</h2>
          <p className={styles["all_posts_card_info_body"]}>{body}</p>
        </div>
        <Comment
          open={open}
          setopen={setopen}
          ref={{ comment, wrape }}
          postId={id}
          setisloadingcomment={setisloadingcomment}
        />
      </div>
    </div>
  );
}

export default PostItem;
