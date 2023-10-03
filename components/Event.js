import React from 'react'
import Image from 'next/image'
function Event() {
    return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
                <Image src={'https://booking.geniusocean.xyz/assets/images/location/country/1628935352california-golden-gate-bridge-night.jpg'} width={1200} height={500} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    )
}

export default Event