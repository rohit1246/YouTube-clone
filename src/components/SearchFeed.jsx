import { Box, Stack, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  // const [searchTerm, setsearchTerm] = useState('New');
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();
  
  useEffect(()=>{
    fetchFromAPI(`search?q=${searchTerm}&part=snippet,id&regionCode=US&maxResults=50&order=date`)
    .then((data)=>{ 
      // console.log(data.items)  
      setVideos(data.items)})
  }, [searchTerm]);


  return (
    <Stack>
    <Box>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      <span style={{ color: "#FC1503" }}>Search results for ' <span style={{ color: "white" }}>{searchTerm}</span> ' </span>
        </Typography>
      <Videos videos={videos} />
    </Box>
    </Stack>
  )
}

export default SearchFeed
