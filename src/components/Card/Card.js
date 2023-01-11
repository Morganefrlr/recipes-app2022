import {Link} from 'react-router-dom'
import Tags from '../Recipe/Tags';


const Card = ({meals}) => {

    

    return (

        <div className='card'>
            <img src={meals.strMealThumb} alt={meals.strMeal} />
            <div className="card-right">
                <h1 className='card-name'>{meals.strMeal}</h1>
                <div className='card-details'>
                    <div className="card-info">
                        <p>CATEGORY: </p>
                        <p>{meals.strCategory}</p>
                    </div>
                    <div className="card-info">
                        <p>ORIGIN: </p>
                        <p>{meals.strArea}</p>
                    </div>  
                </div>
                <Tags tags={meals.strTags}/>
                <Link className='card-link' to={`/recipe/${meals.idMeal}`}>Recipe</Link>                
            </div>
        </div>
                
          
    );
};

export default Card;