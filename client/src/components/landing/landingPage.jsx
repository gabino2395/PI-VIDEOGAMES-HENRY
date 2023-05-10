import React from 'react'
import { Link } from 'react-router-dom'
const landingPage = () => {
  return (
    <>
    <div> Esta es la landingPage</div>
    <h4>para ingresar haz click  <Link to={'/home'} >Aqui</Link></h4>
    </>
  )
}

export default landingPage