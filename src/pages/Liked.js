import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";




const Liked = () => {
    const[listMeal, setListMeal] = useState([]);

    useEffect(() => {
        let mealsId = window.localStorage.recipes ? window.localStorage.recipes.split(',') : []
        for(let i = 0; i < mealsId.length; i++ ){
            axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId[i]}`)
            .then((res) => setListMeal((listMeal) => [...listMeal, res.data.meals[0]]))
        }

    }, [])

    const noLiked = () => {
        if(listMeal.length === 0){
            return (
                <p className="no-liked">No liked yet!</p>
            )
        }
    }
    return (
        <div>
            <Navbar />
            <div className="recipe-liked">
                {listMeal && listMeal.map((meal, index) => 
                    <Card key={index} meals={meal} />
                )}
                {noLiked()}
            </div>
            <Footer />
        </div>
    );
};

export default Liked;