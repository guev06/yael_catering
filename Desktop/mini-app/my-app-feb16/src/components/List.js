import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const fetchMovies = async () => {
    const res = await axios.get('http://localhost:5000/movies')
    return res.data
}

function List(){
    const {data: movies, error, isLoading} = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        staleTime: 5000,
    });

    if(isLoading) return <p>Loading Movies...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <ul id="outer-div" style={{display: 'flex'}}>
            {movies.map((i) => (
                <li class="cards"key={i.id}>
                    <img class="img" src={i.img} alt={i.title} style={{ width: "200px" }} />
                    <h3>Title: {i.title}</h3>
                    <h5>Year: {i.year}</h5>
                </li>
            ))}
            
        </ul>
    )
}

export default List



// const List = () => {
//     const [movies, setMovies] = useState([])
//     const [loading,setLoading]= useState(false)
//     const [error, setError]= useState(false)
    
//     useEffect(() => {
//         async function FetchAlbum(){
//             try {
//                 setLoading(true)
//                 const response = await axios.get("http://localhost:5000/movies")
//                 const data = response.data
//                 setMovies(data)
//                 setLoading(false)
//             }
//             catch (err){
//                 setError(true)
//                 console.log(err)
//             }
//     }FetchAlbum()},[])

//     return (
//         <ul id="outer-div" style={{display: 'flex'}}>
//             {movies.map((i) => (
//                 <li class="cards"key={i.id}>
//                     <img class="img" src={i.img} alt={i.title} style={{ width: "200px" }} />
//                     <h3>Title: {i.title}</h3>
//                     <h5>Year: {i.year}</h5>
//                 </li>
//             ))}
            
//         </ul>
//     );
    

        
        
// }


// export default List