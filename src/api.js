import { API_URL } from "./config";

const searchByName=(mealName)=>{
  return  fetch(API_URL+`search.php?s=${mealName}`).then((data)=>{
        return  data.json()
    })
}

const searchById=(mealId)=>{
  return  fetch(API_URL+`/lookup.php?i=${mealId}`).then((data)=>{
        return data.json()
    })
}

const AllCategories = ()=>{
  return fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((data)=>{
    return data.json();
   })
    
   
}

const searchByCategory=(category)=>{
  return  fetch(`${API_URL}/filter.php?c=${category}`).then((data)=>{
        return data.json()
    })
}

export{AllCategories,searchByCategory,searchById,searchByName}
