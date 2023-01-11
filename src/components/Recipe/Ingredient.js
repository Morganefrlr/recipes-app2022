

const Ingredient = ({ingredient, measure}) => {
    
    return (
        <div className="ingredient-tab">
            <p className="ingredient-title">Ingredients</p>
            <div className="ingredients">
                <div className="ingredient-list">
                    {ingredient.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                <div className="ingredient-list">
                    {measure.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })} 
                </div>
            </div>
            
            
            
            
        </div>
    );
};

export default Ingredient;