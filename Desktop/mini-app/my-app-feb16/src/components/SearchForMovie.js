import axios from "axios"
import {useState, useEffect} from "react"

function SearchForMovie(){

    const [movie, setMovie] = useState('')
    const [movieTitle, setTitle] =useState('')
   


    async function findMovie(){
        const response = await axios.get(`http://localhost:5000/movies?title=${movieTitle}`)
        const films = response.data
        console.log(films)
        setMovie(films[0])
    }




    return <div>
        <input placeholder="search by title" onChange={e => setTitle(e.target.value)}></input>
        <button onClick={findMovie}>search</button>
        {movie !=='' &&  (<p className="cards">
        <img className="img" src={movie.img} alt={movie.title} style={{ width: "200px" }} />
        <h3>Title: {movie.title}</h3>
        <h5>Year: {movie.year}</h5>
    </p>)}</div>
    
}

export default SearchForMovie
