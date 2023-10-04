import React from 'react'
import Event from './Event'

function EventList({items}) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {items.map(item => <Event key={item.event_id} id={item.event_id} title={item.event_name} date={item.event_date} location={item.event_location} image={item.event_image_url} />)}
                </div>
            </div>
        </section>
    )
}

export default EventList