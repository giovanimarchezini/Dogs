import React from "react";
import	styles from "./Input.module.css"


const Input = ({label, type, name, value, onChange, error, onBlur, min})=>{
  return(
    <div className={styles.wrapper}>
      <label htmlFor="" className={styles.label}>{label}</label>
      <input className={styles.input} type={type} name={name} onChange={onChange} onBlur={onBlur} value={value} min={min}/>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
 
}

export default Input;