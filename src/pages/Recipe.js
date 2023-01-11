import axios from 'axios'
import { useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'
import Tags from '../components/Recipe/Tags';
import Ingredient from '../components/Recipe/Ingredient';


const Recipe = () => {

    const params = useParams();
    const[meal, setMeal] = useState([]);

    useEffect(() => {
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        .then((res) => setMeal(res.data.meals[0]))
    },[params.id]);
   

    const id = meal.idMeal
    
   
    
    const addStorage = () => {

        let storedData = window.localStorage.recipes ? window.localStorage.recipes.split(','):[]
        
        if (!storedData.includes(meal.idMeal.toString())){
            storedData.push(meal.idMeal)
            window.localStorage.recipes = storedData;
        }
         
    }
    const deleteStorage = () => {
        let storedData = window.localStorage.recipes.split(',');
        let newData = storedData.filter((id) => id !== meal.idMeal);
        window.localStorage.recipes = newData
        return (
            <i className="fa-regular fa-heart coeur-regular"></i>
        )
    }
    const [clicked, setClicked]= useState()
    const toogle = id => {
        if(clicked === id){
            return setClicked(null)
        }
        setClicked(id)
    };
    const likeRecipe = () => {
        let storedData = window.localStorage.recipes ? window.localStorage.recipes.split(','):[]
        if(!storedData.includes(meal.idMeal)){
            return (
                <div className='icon-heart' onClick={() => {addStorage(); toogle(id)}}>
                    {clicked === meal.idMeal ? <i className="fa-solid fa-heart heart-solid"></i> : <i className="fa-regular fa-heart heart-regular"></i>}    
                </div>
            )
        } else if (storedData.includes(meal.idMeal)) {       
            return (
                <i className="fa-solid fa-heart heart-solid" onClick={() => {deleteStorage(); window.location.reload()}}></i>    
            )
        }
    } 
    
   
    const ingredients = [meal.strIngredient1,meal.strIngredient2,meal.strIngredient3,meal.strIngredient4,meal.strIngredient5,meal.strIngredient6,meal.strIngredient7,meal.strIngredient8,meal.strIngredient9,meal.strIngredient10,meal.strIngredient11,meal.strIngredient12,meal.strIngredient13,meal.strIngredient14,meal.strIngredient15,meal.strIngredient16,meal.strIngredient17,meal.strIngredient18,meal.strIngredient19,meal.strIngredient20]
    const measures = [meal.strMeasure1,meal.strMeasure2,meal.strMeasure3,meal.strMeasure4,meal.strMeasure5,meal.strMeasure6,meal.strMeasure7,meal.strMeasure8,meal.strMeasure9,meal.strMeasure10,meal.strMeasure11,meal.strMeasure12,meal.strMeasure13,meal.strMeasure14,meal.strMeasure15,meal.strMeasure16,meal.strMeasure17,meal.strMeasure18,meal.strMeasure19,meal.strMeasure20]
    
  
   

    return (
        <div>
            <Navbar />
            <div className='recipe'>
                <h1 className='recipe-name'>{meal.strMeal}</h1>
                <div className='recipe-details'>
                    <h3 className='recipe-info'>CATEGORY: {meal.strCategory}</h3>
                    <h3 className='recipe-info'>ORIGIN: {meal.strArea}</h3>
                </div>
                <img className='recipe-img' src={meal.strMealThumb} alt={meal.strMeal} />
                <div className='recipe-tags'>
                    <Tags  tags={meal.strTags} />
                    {likeRecipe()}  
                </div>
               <div className='recipe-explanation'>
                    <Ingredient ingredient={ingredients} measure={measures} />
                    <p className='recipe-instruction'>" {meal.strInstructions} "</p>
               </div> 
                <div className='recipe-links'>
                    {meal.strYoutube &&
                        <a href={meal.strYoutube} target="_blank" rel="noreferrer">Youtube</a>
                    }
                    {meal.strSource &&
                        <a href={meal.strSource} target="_blank" rel="noreferrer">Recipe Source</a>
                    }               
                </div> 
            </div>
            <Footer />
           

        </div>
    );
};

export default Recipe;