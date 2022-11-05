import React, { useState } from 'react'
import EventsCard from './EventsCard/EventsCard'
import EventsList from './EventsList/EventsList'
import NewsCard from './NewsCard/NewsCard'

const NewsAndEvents = (props) => {
  const [url] = useState(["pn8rbLuRvV4","4TLu_KjR5w4", "Mxzc4qhQxrM", "lOH1yM7hvNU", "nrqWLddzOYk"])
  return (
    <div ref={props.eventsRef} style={{margin:"20px 5%"}} className="d-flex justify-content-center flex-wrap">
        <NewsCard/>
        {url.map(x=>{
          return <EventsCard url={x}/>
        })}
        <EventsList/>
    </div>
  )
}

export default NewsAndEvents