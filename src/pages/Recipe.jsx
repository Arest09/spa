import { useEffect,useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import {searchById} from '../api'

import ClipLoader from "react-spinners/ClockLoader";
import { RecipeList } from "../components/RecipeList";


export function Recipe() {
   const [recipe, setRecipe] =useState([])
   const {id} = useParams();
   const navigate = useNavigate();
    
   useEffect(()=>{
    searchById(id).then((data)=>{
        setRecipe(data.meals);
    })
   },[id])
   
    return<div>
       <span className="button inline-block mb-4 cursor-pointer" onClick={()=>{
    
    navigate(-1)
}}>back</span>

      {recipe.length > 0 ?<RecipeList recipe={recipe}/>  : <ClipLoader className="m-auto"  size={50}/>}
        </div>
}