import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import req from '../components/Request'

const Home = () => {
  return (
    <div className='text-white'>
      <Main/>
      <Row rowId="1" title="Latest" url={req.latest}/>
      <Row rowId="2" title="Upcoming" url={req.upcoming}/>
      <Row rowId="3" title="Popular" url={req.popular}/>
      <Row  rowId="4" title="Trending" url={req.trending}/>
      <Row  rowId="5" title="Top Rated" url={req.toprated}/>
    
    </div>
  )
}

export default Home
