import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';
import Result from './Result';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        search: "",
        query: "",
        results: []
    });

    const handleInput = (event) => {
        let input = event.target.value;
        setState(prev => ({...prev,search : input}))
    }
    const SearchResult = (event) => {
        event.preventDefault();
        setState(prev => ({...prev, query: prev.search}));
    }; 
    
    useEffect(() => {
        if (!state.query || !state.query.trim()) {

            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8ab358e64193e91aa0501da86049db98`)
            .then(res => {
                setState(prevState => ({...prevState, results: res.data.results }));
            })
            .catch(err => console.log(err));
        return
       }
       axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8ab358e64193e91aa0501da86049db98&query=${state.query}`)
       .then(res => {
            setState(prev => ({...prev, results : res.data.results}))
            
       })
       .catch(err => console.log(err));
    }, [state.query]);

    const openDetails = (id) => {
        navigate(`/movie/${id}`)
    }  
    return (
                <>
                <div className='row'>
                    <div className='col-12 col-md-12 col-sm-12 px-0'>
                        <div className='search-bg text-white py-5'>
                            
                            <div className="w-100 text-center text-white my-5 mx-auto f-fantasy">
                                <h3>Dive into millions of movies, all in one place.</h3>
                                <Search handleInput={handleInput} SearchResult={SearchResult} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12 col-sm-12 px-0'>
                        <div className='bg-white text-black py-5'>
                            <div className="w-100 text-center text-dark  mx-auto">
                            {state.query ? ( 
                                <h3>
                                    Search results for "{state.query}"
                                </h3>
                            ) : (
                                <h3 className=''> Popular this week</h3>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 bg-white">
                            <div className="row mx-3">
                                {state.results && state.results.map((result) => (
                                    <div className='col-6 col-sm-6 col-md-3 col-lg-2' key={result.id}>
                                        <Result result={result} openDetails={openDetails} />
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
               </>
            )}
        
    


export default Home;