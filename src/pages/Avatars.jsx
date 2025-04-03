import React from 'react'
import PersonaList from '../components/common/Cardgrid.jsx'
import Layout from '../app/layout.jsx'
import Searchbar from '../components/common/Searchbar.jsx'
import Headline from '../components/common/Headline.jsx'

function Avatars() {

    return (
        <>
          <Layout>
            <Headline />
            <Searchbar /> 
            <PersonaList />
            {/* <Painpoints /> */}
          </Layout>
        </>
      )

}

export default Avatars