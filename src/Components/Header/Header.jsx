import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import {ReactComponent as Dogs} from '../../Assets/dogs.svg';
import { UserContext } from "../../UserContext";

const Header = ()=>{
  const {data} = React.useContext(UserContext);
  return(
    <header className={styles.header}>
     <nav className={`container ${styles.nav}`}>
      <Link className="styles.logo" to="/" aria-label="Dogs - Home">
        <Dogs/>
      </Link>
      {data ? (<Link to="/login" className={styles.login}>{data.nome }</Link>
      ) : ( 
      <Link to="/login" className={styles.login}>Login / Criar</Link>
      )}     
      
      
     </nav>
    </header>
    ) 
}
export default Header;