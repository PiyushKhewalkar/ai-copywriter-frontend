import React from 'react'

// layout
import Layout from '../app/layout'

//components
import Demographics from "../components/details/Demographics.jsx"
import Goals from "../components/details/Goals.jsx"
import Intro from "../components/details/Intro.jsx"
import Professional from "../components/details/Professional.jsx"
import Painpoints from '../components/details/Painpoint.jsx'

function AvatarDetails() {
  return (
    <Layout>
      <div className="mx-5 space-y-5 my-10">
      <Intro />
      <Demographics />
      <Professional />
      <Goals />
      <Painpoints />
      </div>
    </Layout>
  )
}

export default AvatarDetails