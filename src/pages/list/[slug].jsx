import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function StaticList(props) {
  console.log(props.currentList);
  const router = useRouter()
  console.log(router);
  return (
    <div>
      <h1 >{router.query.slug.charAt(0).toUpperCase() + router.query.slug.slice(1)}</h1>
      <table>
        <tbody>
        {props.currentList.map((item) => (
          <tr key={item.fr}>
            <td>{item.en}</td>
            <td>{item.fr}</td>
          </tr>
))}
        </tbody>
      </table>
      
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await import("../../data/list.json");
  const currentList = data.englishList.find((list) => list.name === slug);
  if(!currentList){
    return {
      notFound: true
    }
  }
  return {
    props: {
      currentList: currentList.data || null,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("../../data/list.json");

  const paths = data.englishList.map((list) => ({
    params: { slug: list.name },
  }));

  return {
    paths,
    fallback: false,
  };
}
