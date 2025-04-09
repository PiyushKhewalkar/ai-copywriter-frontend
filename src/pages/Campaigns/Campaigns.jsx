import React, { useState, useEffect } from 'react'
import Layout from '@/app/layout.jsx'
import Searchbar from '@/components/common/Searchbar.jsx'
import HeadingButton from '../../components/home/HeadingButton'

//api
import { getAllCampaigns } from '@/lib/api.js'
import CampaignCardGrid from '../../components/campaigns/CampaignCardGrid'

function Campaigns() {

  const [searchTerm , setSearchTerm] = useState("")
  const [allCampaigns, setAllCampaigns] = useState([])
  const [filteredCampaign, setFilteredCampaign] = useState([])

  useEffect(() => {
    getAllCampaigns().then(setAllCampaigns);
      console.log(allCampaigns)
  }, [])

  useEffect(() => {
    const filtered = allCampaigns.filter((campaign) =>
      Object.values(campaign)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredCampaign(filtered);
    console.log(allCampaigns)
  }, [searchTerm, allCampaigns]);

    return (

        <>
          <Layout>
            <HeadingButton heading="Your Campaigns" form="campaign" />
            <Searchbar placeholder="Search Campaign" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
            <CampaignCardGrid filteredCampaign={filteredCampaign} />
          </Layout>
        </>
      )

}

export default Campaigns