import { Genres } from '@/typings';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

import Link from 'next/link';

async function GenreDropDown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options:RequestInit={
        method:"GET",
        headers:{
            accept:"application/json",
            Authorization:`Bearer ${process.env.TMDB_API_KEY}`
        },
        // caching
        next:{
            revalidate:60*60*168 //7days till recaching
        }
    };
    const response = await fetch(url,options)
    const data = (await response.json()) as  Genres
  

  return (
   <DropdownMenu>
        <DropdownMenuTrigger className="text-white  flex items-center justify-center">
            Genre <ChevronDown className="ml-1"/>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Select genre</DropdownMenuLabel>
            <DropdownMenuSeparator/>

            {data.genres.map((genre)=>(
                    <DropdownMenuItem key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}
                        </Link>

                    </DropdownMenuItem>
            ))}
                            

            
        </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default GenreDropDown