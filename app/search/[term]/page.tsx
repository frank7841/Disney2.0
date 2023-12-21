import { notFound } from 'next/navigation'
import React from 'react'

type Props ={
    params:{
        term:string
    }
}
function SearchPage({params: {term}}: Props) {
    
    if(!term) notFound()
    const termToUse = decodeURI(term);
  return (
    <div>Welcome to searchpage: {term}</div>
  )
}

export default SearchPage