import { CategoryItem } from "./CategoryItem/CategoryItem";


export function CategoryList(props) {
const {catalog} = props;
  return <div className="my-custom-grid grid gap-4 ">
   {catalog.map((item)=>{
    return <CategoryItem key={item.idCategory} {...item}/>
   })}
  </div>;
}
