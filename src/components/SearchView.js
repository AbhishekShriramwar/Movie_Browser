import Hero from "./Hero";
import { Link } from 'react-router-dom';

//tmdb api: ee95ea1408f1cb3ed638dabececd0b9f
//https://api.themoviedb.org/3/search/movie?api_key=ee95ea1408f1cb3ed638dabececd0b9f&query=star%20wars&include_adult=false&language=en-US&page=1

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card" >
  <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
  </div>
</div>
</div>
    )
}



const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <>
        <Hero text= {title} />
        {resultsHtml &&
        <div className="container">
            <div className="row">
                {resultsHtml}
                </div>
                </div>}
        </>
    );
};

export default SearchView;