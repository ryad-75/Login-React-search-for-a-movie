import React from 'react';

//const image = "https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

const Card = ({ name, year, image }) => {
    return (
        <div class="col m4">
            <div class="card">
                <div class="card-image">
                    <img src={image} alt="" style={{ height: 280 }} />
                </div>
                <div class="card-content">
                    <span className="card-title">{name}</span>
                <p>Year : {year}</p>
            </div>
        </div>
        </div >

    );
}

export default Card;