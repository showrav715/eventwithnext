import React from 'react'
import Event from './Event'

function EventList() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <Event />
                    <Event />
                    <Event />
                </div>
            </div>
        </section>
    )
}

export default EventList