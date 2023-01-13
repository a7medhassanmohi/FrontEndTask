import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./allUser.module.scss";
import UserInfo from './UserInfo';

function UserItem({id,image,username,firstName,gender,phone,email,address}) {
  const navigate=useNavigate()
  const handleErrorImage=(e)=>{
    const defaultImage="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
e.currentTarget.src=defaultImage
  }


  return (
    
    <div className={styles['item']}>
      <div className={styles['image']}>
        <img src={image} alt="image" onError={handleErrorImage} />
        <p>{username}</p>
      </div>
      <div className={styles['info']}>
      <UserInfo title="Name" value={firstName}/>
      <UserInfo title="Gender" value={gender}/>
      <UserInfo title="Phone" value={phone}/>
      <UserInfo title="Email" value={email}/>
        <div className={styles['info_item']}>
          <p className={styles['info_item_title']}>Address:</p>
          <p className={styles['info_item_value_address']}>{address?.address}- {(address?.city)|| "Alex"}  </p>
        </div>
      </div>
      <div className={styles['btn']}>

      <button onClick={()=>{navigate(`/posts/${id}`)}}>Posts</button>
      </div>
  
  </div>
  )
}

export default UserItem