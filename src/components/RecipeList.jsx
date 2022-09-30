import {RecipeItem} from './RecipeItem/RecipeItem'

export function RecipeList(props) {
  const {recipe} = props;
    return <div>
        {recipe.map((item)=>{
            return <RecipeItem key={item.idMeal} {...item}/>
        })}
    </div>
}