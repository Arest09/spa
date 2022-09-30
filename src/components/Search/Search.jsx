import { useState } from "react";
import style from '../Search/Search.module.scss'

export function Search(props) {
  const [value, setValue] = useState("");
  const {cb} = props;

  const handleKey = (e)=>{
    if(e.key === 'Enter'){
        handleSearch();
    }
  }

 const handleSearch = ()=>{
    cb(value);
  }
    
  return (
    <div className={style.wrapper}>
      <input
      onKeyDown={handleKey}
      onInput={(e)=>{
        setValue(e.target.value)
      }}
      value={value}
        type="text"
        placeholder="search ... "
        className={style.input}
      />
      <button  onClick={handleSearch} className={style.button}>search</button>
    </div>
  );
}
