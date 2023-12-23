import MovieCarousel from '@/components/MovieCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'



async function GenrePage( {params: {id},
                           searchParams: { genre },
                          }:{
                            params:{id:string};
                            searchParams:{
                              genre:string};
                            }) {
                              console.log(id)
  const movies = await getDiscoverMovies(id);
  console.log(genre)
  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure Ai suggetsions */}
      <div className=" flex flex-col space-y-4 mt-32 lg:mt-42">
      <h1 className="font-bold text-6xl px-10">Results for: {genre}</h1>
      <MovieCarousel movies={movies} title={`Genre`} isVertical/>
      </div> 
    </div>
  )
}

export default GenrePage;