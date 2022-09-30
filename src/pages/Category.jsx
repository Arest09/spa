import React, { useEffect,useState } from "react";
import ClipLoader from "react-spinners/ClockLoader";
import { useParams,useNavigate } from "react-router-dom";

import { searchByCategory } from "../api";
import { MealList } from "../components/MealList";


export function Category() {
  
  
    const {name} = useParams();
    const [meal,setMeal] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        searchByCategory(name).then((data)=>{
            setMeal(data.meals);
        })
    },[name])
   
return <div>
  
    <span className="button inline-block mb-4 cursor-pointer" onClick={()=>{
    
        navigate(-1)
    }}>back</span>
    {meal.length > 0 ?<MealList meal={meal}/>  : <ClipLoader className="m-auto"  size={50}/>}
</div>
  
  
}

