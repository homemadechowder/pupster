import React from "react";

function Match(props) {
    
    const style = {
        backgroundImage: "url("+props.url+")"
    }

    return(
        <div className = "card" style = {style}>
                <button className = "card-btn pass"></button>
                <button className = "card=btn pick"></button>
        </div>
    );
}

export default Match;