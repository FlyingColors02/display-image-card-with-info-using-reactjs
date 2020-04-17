import React from "react";
const ShowImages = ({d})=>{
    return(
        <div className="row" >
        {d.map(item=>(
            <div className="col-md-4" key={item.id}>
                <div className="card text-left">
                    <img className="card-img-top" src={item.largeImageURL} alt={item.photo}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.user}</h4>
                            <p className="card-text">{item.tags}</p>
                        </div>
                </div>
            </div>
        ))}
        </div>
    )
    
}
export default ShowImages;