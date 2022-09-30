import { MealItem } from "./MealItem/MealItem";

export function MealList(props) {
    const {meal} = props;

    return<div className="grid my-custom-grid gap-4 ">
        {meal.map((item)=>{
            return <MealItem key={item.idMeal} {...item} /> 
        })}
    </div>
}