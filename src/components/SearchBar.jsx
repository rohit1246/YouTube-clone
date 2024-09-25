import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material';


const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const {searchTerm} = useParams()

  const handleInputChange = (e) => {
    setInputValue(e.target.value?e.target.value:searchTerm);  
  };
   
  const navigate = useNavigate();
  return (
    <div>
      <Paper
        component="form"
        onSubmit={(e)=>{
          e.preventDefault();
          navigate(`/search/${inputValue}`)
        }}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}
      >
        <input
            className='search-bar'
            placeholder='Search..'
            value={inputValue}
            onChange={handleInputChange}
        />

        <IconButton type="submit" sx={{p:'10px', color:'red'}}>
            <Search/>
        </IconButton>

      </Paper>
    </div>
  )
}

export default SearchBar
