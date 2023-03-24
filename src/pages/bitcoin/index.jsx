import React from 'react'

export default function Bitcoin(props) {
    console.log(props.results.bpi.EUR);
  return (
    <div>
        <h1>Bitcoin rate</h1>
        <span>{`The rate of the BTC is now: ${props.results.bpi.EUR.rate}${props.results.bpi.EUR.description}`}</span>
    </div>
  )
}
export async function getServerSideProps(){
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const results = await data.json()

    return{
        props: {
            results
        }
    }

}