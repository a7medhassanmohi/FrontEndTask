import styles from "./error.module.scss";

const FailedFetchError = ({isError,refetch}) => {
  return   <>{ isError && <div className={styles["error"]} onClick={refetch}>
  <p className={styles["error_message"]}> Failed to Fetch Data please click here</p>
 </div> }</>
};
export default FailedFetchError;