import React from "react"
import "./movie.css"

class Movie extends React.Component {
    render() {
        const {Title, Poster} =  this.props.data
//    console.log(this.props.data.Title)
        return (
            <>
        <div className="card">
             <img className="img" src={Poster}  alt="Movie Image"/>
             <h3 className="title">{Title}</h3>
        </div>
      
            </>
        )
    }
}

export default Movie