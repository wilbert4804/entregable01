import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

function ContainerInfo({quote, handLeNewquote}) {
    console.log(quote)
  return (
    <section className='containerInfo'>
      <h1 className='containerInfo__title'>FORTUNE COOKIES</h1>
      <Button handLeNewquote={handLeNewquote}/>
      <article className='containerInfo__phrase'>
        <p>{quote.phrase}</p>
      </article>
      <article className='containerInfo__author'>
        <h4>fuente: {quote.author}</h4>
      </article>
     </section>
  )
}

export default ContainerInfo