import React from 'react'
import Link from 'next/link'
export default function Blog() {
  return (
    <div>
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum nulla dolores, libero ipsum, ipsam non debitis rerum maxime minima corporis reiciendis, fugit consectetur. Ad necessitatibus quae tempore nemo minus?</p>
        <Link href={"/blog/articles"}>See all articles</Link>
    </div>
  )
}
