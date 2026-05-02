
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail () {

    const { id } = useParams();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!id) return;

        window.scrollTo(0,0);
        const fetchMovie = async() => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8ab358e64193e91aa0501da86049db98&append_to_response=credits`)
                const data =  await res.json()
                setSelected(data)
            } catch(err){
                console.log(err)
            }
        }
        fetchMovie();
    },[id])

    if (!selected) return <p>lodadng</p>;

    return (
        <div className=' d-flex flex-column bg-white justify-content-center text-dark'>
            <div className='container mt-5'>
                
                <div className='row py-3'>
                    <div className='col-12 col-md-3 col-sm-12 text-center'>
                         <div className='border rounded-2 overflow-hidden detail-img-div  mx-auto'>
                        <img className='detail-img img-fluid object-fit-cover' src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`} alt='' />
                        </div>   
                    </div>
                    <div className='col-12 col-md-9 col-sm-12 text-red detail-info-div'>
                        <div className='d-flex flex-column'>
                            <h2>{selected.title} (<span>{selected.release_date?.split('-')[0]}</span>)</h2>
                            <p className='fs-6 mb-2'><i className="bi bi-star-fill text-warning"></i> {selected?.
                            vote_average?.toFixed(1)}/10 <span className="font-15">(voted by {selected.vote_count})</span></p>
                            <div className="d-flex font-15 gap-1 align-items-baseline">
                                <p> <i className="bi bi-calendar-date"></i><span > {selected.release_date} </span></p>
                                <span className="divider"></span>
                                <p><i className="bi bi-clock-history"></i><span> {selected.runtime} minutes </span></p>    
                            </div>
                        <div>
                        <p className='d-flex flex-wrap'>{selected?.genres?.map(g => (
                            <span className='custom-border rounded-pill px-3 py-1 me-2' key={g.id}>{g.name} </span>)) }</p>
                    </div> 
                        <p className="fw-bold fst-italic">{selected.tagline}</p>
                        <p>{selected.overview}</p>
                        <div className="crew-div d-flex flex-column justify-items-between">
                            <p>Director: < span className="fw-bold">{selected?.credits?.crew?.find(d => d.job?.toLowerCase() === 'director').name || 'N/A'}</span></p>
                            <p>Writer:  <span className="fw-bold">{selected?.credits?.crew?.find(d => d.job?.toLowerCase() ===  'writer' || 'N/A' ).name}</span></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col-12 col-md-12 col-sm-12 text-center'></div>
                        <h5>Cast</h5>
                        <div className="d-flex overflow-auto gap-2 py-2 cast-div">
                            {selected?.credits?.cast?.slice(0,15).map(actor=>(                         
                                <div key={actor.id} className="cast-div-id">
                                    <img className='object-fit-cover border rounded-2 cast-img' src={actor.profile_path 
                                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` 
                                    :  "https://placehold.co/100x150"} alt='' />
                                    <p className="fw-bold px-2 m-0">{actor.name}</p>
                                    <span className="font-15 text-muted d-block px-2 pb-1">{actor.character}</span>
                                </div>
                        ))}
                         </div>
                    </div>
                    <button onClick={()=> navigate(-1)} className='btn btn-logo-color my-3'>back to results</button>
                    </div>
                </div>  
    )
}

export default MovieDetail;