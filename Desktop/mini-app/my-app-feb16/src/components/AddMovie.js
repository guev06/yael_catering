import axios from "axios"
import {useState, useEffect} from "react"

const AddMovie = () => {
    const [movieId, setId] =useState('')
    const [movieTitle, setTitle] =useState('')
    const [movieYear, setYear] =useState('')
    const [movieImg, setImg] =useState('')
    const [movieWasAdded, setMovie]=useState(false)
    const [lastId, setLastId] = useState('')

   
    useEffect(() => {
        async function GetLastMovie(){
            const last = await axios.get('http://localhost:5000/movies')
            const lastMovie = last.data
            const lastfr = lastMovie[lastMovie.length-1]
            setLastId(lastfr.id)
            
        }
        GetLastMovie()
    },[movieWasAdded])

    

    const addCurrentMovie = async () =>{
        const currentMovie = {id: movieId, title: movieTitle, year: movieYear, img: movieImg}
        await axios.post("http://localhost:5000/movies", currentMovie)
        setId('');
        setTitle('');
        setYear('');
        setImg('');
        setMovie(!movieWasAdded)
    }
 
    return (
        <div id="input-outer-div">
            <input class="input" value={movieId} placeholder='Add movie Id' onChange={e => setId(e.target.value)}></input>
            <input class="input" value={movieTitle} placeholder='Add movie title' onChange={e => setTitle(e.target.value)}></input>
            <input class="input" value={movieYear} placeholder='Add movie year' onChange={e => setYear(e.target.value)}></input>
            <input class="input" value={movieImg} placeholder='Add movie Image' onChange={e => setImg(e.target.value)}></input>
            <button class="input" onClick={addCurrentMovie} >Add Movie</button>
            <h5>last movie id: {lastId} </h5>
        </div>
    )
}


export default AddMovie