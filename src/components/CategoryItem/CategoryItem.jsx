import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";
import style from './CategoryItem.module.scss';

export function CategoryItem(props) {
 const  {strCategory:category,strCategoryThumb:image,strCategoryDescription:descr} = props;
    return <React.Fragment>
    <div className={style.card}>
        <h2 className={style.title} >{category}</h2>
        <img className="mb-4" src={image} alt="meal" />
        <div className={style.text}>
        {descr.slice(0,150)}...
        </div>
        <Link to={`${category}`} className='button'>category</Link>
    </div>
    </React.Fragment>
}