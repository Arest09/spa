import {Link } from "react-router-dom";
import style from '../MealItem/MealItem.module.scss'

export function MealItem(props) {
  const { strMeal: name, strMealThumb: image,idMeal:id } = props;
  return (
    <div className={style.card}>
      <h2 className={style.title}>{name}</h2>
      <img className={style.img} src={image} alt="meal" />
      <Link to={`/meal/${id}`} className="button">watch recipe</Link>
    </div>
  );
}
