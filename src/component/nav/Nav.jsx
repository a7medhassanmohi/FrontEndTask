import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsCloudMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from "./nav.module.scss";

const Nav = () => {
    const [isDark, setisDark] = useState(true)

    const navigate=useNavigate()

    useEffect(() => {
    

     if(isDark){
        document.documentElement.className="dark"

     }else{

         document.documentElement.className="light"
     }
    }, [isDark])
    
  return <div className={styles["Nav_container"]}>
    <h1 onClick={()=>navigate("/")} >Aliens</h1>
    <div className={styles["dark_light"]}>
     {isDark ?  <BsFillSunFill onClick={()=>setisDark(false)} className={styles["sun"]} />:<BsCloudMoonFill onClick={()=>setisDark(true)} />}  
        
    </div>
  </div>;
};
export default Nav;