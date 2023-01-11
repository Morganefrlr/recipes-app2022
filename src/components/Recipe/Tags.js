

const Tags = ({tags}) => {

    const lesTags = () => {
        if(tags){
            const tagsTab = tags.split(',')
            return (
                tagsTab.map((tag, index) =>{
                    return (
                       <p className="tag" key={index}>{tag}</p> 
                    )
                }) 
            )
        } 
        
    }
    return (
        <div className="tags">
                    {lesTags()} 
        </div>
    );
};

export default Tags;