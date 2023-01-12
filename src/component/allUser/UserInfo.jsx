import styles from "./allUser.module.scss";
const UserInfo = ({title,value}) => {
  return   <div className={styles['info_item']}>
  <p className={styles['info_item_title']}>{title}:</p>
  <p className={styles['info_item_value']}>{value}</p>
</div>;
};
export default UserInfo;