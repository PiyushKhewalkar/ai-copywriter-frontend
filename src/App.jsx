import PersonaList from './components/common/Cardgrid.jsx'
import './index.css'
import Layout from './app/layout.jsx'
import Searchbar from './components/common/Searchbar.jsx'
import Headline from './components/common/Headline.jsx'



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
