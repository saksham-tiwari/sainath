import React from 'react'
import EventsCard from './EventsCard/EventsCard'
import EventsList from './EventsList/EventsList'
import NewsCard from './NewsCard/NewsCard'

const NewsAndEvents = (props) => {
  return (
    <div ref={props.eventsRef} style={{margin:"20px 5%"}} className="d-flex justify-content-center flex-wrap">
        <NewsCard/>
        <EventsCard/>
        <EventsList/>
    </div>
  )
}

export default NewsAndEvents