import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'
import MovieCarousel from '@/components/MovieCarousel'
import { getPopularMovies, getTopratedMovies, getUpcomingMovies } from '@/lib/getMovies'
import Image from 'next/image'

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies()
  const topratedMovies = await getTopratedMovies()
  const popularMovies = await getPopularMovies()
  return (
    <main className="">
    
    <CarouselBannerWrapper id={''} keywords={''}/>

    <div className="flex flex-col">
      <MovieCarousel movies={upcomingMovies} title='Upcoming'/>
      <MovieCarousel movies={topratedMovies} title='Top Rated'/>
      <MovieCarousel movies={popularMovies} title='Popular'/>
    </div>
    </main>
  )
}
