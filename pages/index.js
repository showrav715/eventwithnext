
import { Inter } from 'next/font/google'
import EventSearch from '@/components/EventSearch'
import EventList from '@/components/EventList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    <EventSearch />
    <EventList />

   
    </main>
  )
}
