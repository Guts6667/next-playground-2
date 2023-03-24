import { useRouter } from 'next/router'
import React from 'react'

export default function ListArticles() {
    const router = useRouter();
    const articles = [
        {
            id: "JHG",
            title: "Les formes du Crabe",
            description: "jkerndgkqznes,ùaz,efldkneqsdkj,;ndksqf"
        },
        {
            id: "4356RTE",
            title: "La tomate mangeuse d'abeille",
            description: "rioeknd,gzmkgndlksfgsfjdg"
        },
        {
            id: "987YUTIKJFHDT7UI",
            title: "La route du rhum",
            description: "kdlxngkjdf,gn, dn;sq, sdgn;f,f"
        },
        {
            id: "CVHJèrte§(t'zo",
            title: "Voyage en Alaska",
            description: "ejkrzfndsgklsqngklqsdg"
        },
        {
            id: "876RTEUYHG",
            title: "Spectacle en terre inconnue",
            description: "utrdjgoiqshgiaejqbdgjkzdbqsgjz"
        }
    ]
    const handleBtn = (e, title) => {
        e.preventDefault()
        router.push(`${router.asPath}/${title}`)
    }
  return (
    <div>
        <h1>Articles</h1>
        {articles.map((item) => (
            <article key={item.id}>
                <title>{item.title}</title>
                <p>{item.description}</p>
                <button onClick={(e) =>handleBtn(e, item.title)}>Read More</button>
            </article>
        ))}
    </div>
  )
}
