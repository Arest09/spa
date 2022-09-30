import style from '../RecipeItem/RecipeItem.module.scss'


export function RecipeItem(props) {
  const {
    strInstructions: instr,
    strMealThumb: img,
    strYoutube: youtube,
    strCategory: category,
  } = props;

 let ingridients = (Object.keys(props).filter((item)=>{
    if (item.includes('strIngredient')) {
      return props[item];
    }
   else{
    return false
   }
  }))

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h2 className={style.title}>
          {category}
        </h2>
        <img className={style.img} src={img} alt="meal" />
        <div className={style.text}>{instr}</div>
      </div>
       
   <div className={style.recipe}> 
    <ul className="mb-9">
      <h2 className={style.recipeText}>Ingridients</h2>
      {ingridients.map((item)=>{
        return <li className="list p-2">{props[item]}</li>
      })}
    </ul>
    {youtube ? <iframe className="max-w-md h-94 grow" title="food-video" src={`https://www.youtube.com/embed/${youtube.slice(-11)}`} allowFullScreen/>:null}
</div>
    </div>
    
  );
}
