
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import './App.css';
import Movie from "./movie"


class App extends Component{

      state = {
   movies:[],
   name : "",
   filteredList: [],
     }


  // console.log(res.data.Search)
componentDidMount(){
     
  axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
  .then(res=> this.setState({
    movies : res.data.Search
  }))

}

onInputChange(e){
 this.state.name = e.target.value
let filteredData = this.state.movies.filter(user => user.Title.toLowerCase().includes(this.state.name.toLowerCase()))
this.setState({
 filteredList : filteredData
})
console.log("Filtered List", this.state.filteredList)
}

  render(){
    // console.log("movies", this.state.movies)
    return(
     
      <>
      <input onChange={(e)=> this.onInputChange(e)} className='input' type="text" placeholder="Search for Movie Title..."/>
      {this.state.movies.length !== 0 && this.state.name.length === 0 ? <div className='cardGrid'>{this.state.movies.map(((item,index) => <Movie data ={item} key={index}  />))}</div>:"" }
{/* 
      {this.state.filteredList.length !== 0 ? <div className='cardGrid'>{this.state.filteredList.map(((item,index) => <Movie data ={item} key={index}  />))}</div>:<div className='cardGrid'>{this.state.movies.map(((item,index) => <Movie data ={item} key={index}  />))}</div> } */}

      {this.state.filteredList.length !== 0  ? <div className='cardGrid'>{this.state.filteredList.map(((item,index) => <Movie data ={item} key={index}  />))}</div>: <div>  </div> }



      </>
    )
  }
}

export default App;
