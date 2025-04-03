import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

// layout
import Layout from '../app/layout'

//components
import Demographics from "../components/details/Demographics.jsx"
import Goals from "../components/details/Goals.jsx"
import Intro from "../components/details/Intro.jsx"
import Professional from "../components/details/Professional.jsx"
import Painpoints from '../components/details/Painpoint.jsx'

function AvatarDetails() {

  const {id} = useParams()
  const [details, setDetails] = useState([])

  useEffect(()=>{
    fetch(`https://ai-copywriter-backend.onrender.com/api/persona/${id}`).then((response) => response.json()).then((data)=>setDetails(data))
  }, [id])

  return (
    <Layout>
      <div className="mx-5 space-y-5 my-10">
      <Intro persona={details} />
      <Demographics persona={details} />
      <Professional  persona={details}/>
      <Goals persona={details} />
      <Painpoints persona={details} />
      </div>
    </Layout>
  )
}

export default AvatarDetails