import React from 'react'
import "./styles.css"

const EventsList = () => {
  return (
    <div className="container eventList">
        <div className="row">
            <div className="col d-flex">
                <div>
                    <h1>03 Nov</h1>
                </div>
                <div>
                    <h3>The Announcement</h3>
                    <p>Announcement of Dil Dhadakta Hai Tumhare Naam Se</p>
                </div>
            </div>
            <hr className="w-100"></hr>
            <div className="col d-flex">
                <div>
                    <h1>26 Aug</h1>
                </div>
                <div>
                    <h3>The Invitation</h3>
                    <p>Now playing exclusively in Movie Theaters</p>
                </div>
            </div>
            <hr className="w-100"></hr>
            <div className="col d-flex">
                <div>
                    <h1>26 Aug</h1>
                </div>
                <div>
                    <h3>The Invitation</h3>
                    <p>Now playing exclusively in Movie Theaters</p>
                </div>
            </div>
            <hr className="w-100"></hr>
            <div className="col d-flex">
                <div>
                    <h1>26 Aug</h1>
                </div>
                <div>
                    <h3>The Invitation</h3>
                    <p>Now playing exclusively in Movie Theaters</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsList