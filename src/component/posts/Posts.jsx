import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPosts } from "../../helper/fetchData";
import ScrollLoading from "../infintyScrollLoading/ScrollLoading";
import Loading from "../loading/Loading";
import Title from "../title/Title";
import UseIntersect from "../useIntersect/UseIntersect";
import PostItem from "./PostItem";
import styles from "./posts.module.scss";
function Posts() {
  const loadItem = useRef(null);
  let { id } = useParams();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    isFetching,
  } = useInfiniteQuery(["posts", id], (id) => fetchPosts(id), {
    // getNextPageParam determining if there is more data to load and the information to fetch it.
    getNextPageParam: (lastPage, pages) => {
      // need to check if current page have more than totalPage or current skip have more than total products
      if (parseInt(lastPage.skip) < lastPage.total) {
        return parseInt(lastPage.skip) + lastPage.limit;
      }
      return false;
    },
    staleTime: 220,
  });
  let inerSect = UseIntersect(loadItem, fetchNextPage, hasNextPage);
  return (
    <>
      {isLoading && createPortal(<Loading />, document.body)}
      <div className={styles["all_posts"]}>
        <Title title="All Posts" />
        <div className={styles["all_posts_items"]}>
          <ol>
            {data?.pages?.map((page) => {
              return page?.posts.map((post) => (
                <li className={styles["all_posts_items_list"]} key={post.id}>
                  <PostItem {...post} />
                </li>
              ));
            })}
          </ol>
        </div>
      </div>
      {!isError && !isLoading && !data?.pages[0].posts?.length && (
        <div className={styles["no_posts"]}>No posts Exists</div>
      )}
      {isError && (
        <div className={styles["error"]} onClick={refetch}>
          <p className={styles["error_message"]}>
            Failed to Fetch Data please click here
          </p>
        </div>
      )}
      <ScrollLoading
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        ref={loadItem}
        text={data?.pages[0].posts?.length ? "No posts Left" : ""}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default Posts;
