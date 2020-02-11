import React from "react";

const divStyle = {
    color: 'white',
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/61IDUBEg-KL._AC_SL1468_.jpg)',
    backgroundSize: 'cover',
    height: '70vh',
};

function Banner(){
    return(
        <div style = {divStyle} className = "jumbotron">
            <h1>Welcome to Pupster 2.0</h1>
            <p>They are the best boys and girls</p>
        </div>
    )
}

export default Banner;