import PersonaList from './components/common/Cardgrid.jsx'
import './index.css'
import Layout from './app/layout.jsx'
import Searchbar from './components/common/Searchbar.jsx'
import Headline from './components/common/Headline.jsx'

import Intro from './components/details/Intro.jsx'

import Demographics from './components/details/Demographics.jsx'

import Professional from './components/details/Professional.jsx'

import Goals from './components/details/Goals.jsx'
import Painpoints from './components/details/Painpoint.jsx'



function App() {
 
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

export default App
