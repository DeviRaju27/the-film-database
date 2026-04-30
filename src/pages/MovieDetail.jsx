

const MovieDetails = ({ selected, close }) => {
    return (
        <div className=' d-flex flex-column bg-white justify-content-center text-dark'>
            {/* <h3 className="text-center font-weight-bold  ">Movie-Details</h3> */}
            <div className='container mt-5'>

                <div className='row py-3'>
                    <div className='col-12 col-md-4 col-sm-12 text-center'>
                         <div className='border rounded-2 overflow-hidden detail-img-div  mx-auto'>
                        <img className='detail-img img-fluid object-fit-cover' src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`} alt='' />
                        </div>
                    </div>
                    <div className='col-12 col-md-8 col-sm-12 text-red'>
                        <div className='d-flex flex-column'>
                            <h1>{selected.title} (<span>{selected.release_date?.split('-')[0]}</span>)</h1>
                            <p className='fs-5'><i className="bi bi-star-fill text-warning"></i> {selected.vote_average.toFixed(1)}</p>
                        </div>
                        <div>
                            <p className='d-flex flex-wrap'>{selected.genres?.map(g => (
                                <span className='custom-border rounded-pill px-3 py-1 me-2'>{g.name} </span>)) }</p>
                        </div> 
                        {/* <p>Original Language: {selected.original_language}</p> */}
                        <p>Release Date: <span className="fw-bold">{selected.release_date} </span></p>
                        <p>Runtime: <span className="fw-bold">{selected.runtime} minutes </span></p>
                        <p>Rating: <span className="fw-bold">{selected.vote_average.toFixed(1)}</span>/10 (voted by {selected.vote_count})</p>
                        <p>{selected.overview}</p>
                        <button onClick={close} className='btn btn-logo-color'>Go back</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieDetails;