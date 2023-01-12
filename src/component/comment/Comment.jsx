import React, { forwardRef, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { useLocation } from "react-router";
import { fetchComments } from "../../helper/fetchData";
import Loading from "../loading/Loading";
import styles from "./comment.module.scss";
import CommetItem from "./CommetItem";
const Comment = forwardRef(({ postId }, ref) => {
  const loadItem = useRef(null);
  let location = useLocation();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
    isError,
    isLoading,
    refetch,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["comments", postId],
    (postId) => fetchComments(postId),
    {
      // getNextPageParam determining if there is more data to load and the information to fetch it.
      getNextPageParam: (lastPage, pages) => {
        // need to check if current page have more than totalPage or current skip have more than total products
        if (parseInt(lastPage.skip) < lastPage.total) {
          return parseInt(lastPage.skip) + lastPage.limit;
        }
        return false;
      },
      staleTime: 220,
    }
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <div className={styles["wrap"]} ref={ref.wrape}>
        {isLoading && <Loading noBackGroud />}

        <div className={styles["comments"]} ref={ref.comment}>
          <h4
            className={styles["comments_title"]}
            style={{ padding: isLoading && "50px 0 0 0" }}
          >
            Comments
          </h4>
          {!isError && !isLoading && !data?.pages[0].comments.length && (
            <p className={styles["no_comments"]}>No Comments available</p>
          )}
          {isError && (
            <div className={styles["error"]} onClick={refetch}>
              <p className={styles["error_message"]}>
                Failed to Fetch Comment please click here to refetch
              </p>
            </div>
          )}

          <div
            className={styles[`comments_items`]}
            style={{ padding: (isError || isLoading) && "0" }}
          >
            {data?.pages.map((page) => {
              return page.comments.map((commet) => (
                <CommetItem key={commet.id} {...commet} />
              ));
            })}
          </div>
        </div>
      </div>
      {/* <ScrollLoading isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} ref={loadItem} text="No comment Left" isLoading={isLoading} isError={isError}/> */}
    </>
  );
});

export default Comment;
