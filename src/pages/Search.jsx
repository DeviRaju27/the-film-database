
const Search = ({ handleInput, SearchResult }) => {
  return (
    <form className='search-input' onSubmit={SearchResult}>
      <input type='text' name='movie' className='w-75 p-2 border rounded-3 '
        placeholder='Search Movie....' onChange={handleInput}></input>
    <button className='btn bg-transparent border-0 text-white fs-3' type='submit'> <i className="bi bi-search"></i></button>
    </form>
  )
}

export default Search