

function Result({ result, openDetails }) {

    return (
        <div className='result bg-white text-black text-center mx-auto' onClick={() => openDetails(result.id)}>
            <div className='border rounded-2 overflow-hidden'>
                
                    <img src={ result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` :
                "https://placehold.co/300x450?text=No+Image" } alt='' className="img-fluid object-fit-cover " />
                
            </div>

            <div className='bg-white text-dark p-2'>
                <h6>{result.title} ({result.release_date?.split("-")[0]}) </h6>
            </div>

        </div>
    )
}

export default Result;