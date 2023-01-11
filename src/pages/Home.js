import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
    const [mealsData, setMealsData] = useState([]);
    const [inputSearch, setInputSearch] = useState('');


    useEffect(() => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputSearch)
        .then((res) => setMealsData(res.data.meals))
    }, [inputSearch]);
    


    return (
        <div>
            <Navbar />
            <div className='home-img'></div> 
            <div className='home'>
                <input className='search-bar' type="text" placeholder="Search here" onChange={(e) => setInputSearch(e.target.value)}/>
                <div className='search-results'>
                    {mealsData && mealsData.map((meals) => 
                        <Card key={meals.idMeal} meals={meals}/>
                    )}
                    {!mealsData && 
                        <p className='no-recipe'>Sorry, no recipe found!</p>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;


