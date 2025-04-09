import React, { useState, useEffect } from 'react'
import AvatarCardGrid from '@/components/avatars/AvatarCardGrid.jsx'
import Layout from '@/app/layout.jsx'
import Searchbar from '@/components/common/Searchbar.jsx'
import Headline from '@/components/common/Headline.jsx'

//api
import { fetchAllPersona } from '@/lib/api.js'

function Avatars() {

  const [searchTerm , setSearchTerm] = useState("")
  const [allPersona, setAllPersona] = useState([])
  const [filteredPersona, setFilteredPersona] = useState([])

  useEffect(() => {
    fetchAllPersona().then(setAllPersona);
      console.log(allPersona)
  }, [])

  useEffect(() => {
    const filtered = allPersona.filter((persona) =>
      Object.values(persona)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredPersona(filtered);
    console.log(allPersona)
  }, [searchTerm, allPersona]);

    return (

        <>
          <Layout>
            <Headline heading="Dream Buyer Avatar" formType="avatar" />
            <Searchbar placeholder="search avatar" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
            <AvatarCardGrid filteredPersona={filteredPersona} />
          </Layout>
        </>
      )

}

export default Avatars