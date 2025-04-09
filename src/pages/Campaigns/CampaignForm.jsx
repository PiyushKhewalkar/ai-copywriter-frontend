import React, { useEffect, useState } from 'react'

// layour
import Layout from '../../app/layout'

// components
import Form from '../../components/campaigns/Form'

// ui components
import { Button } from '@/components/ui/button'

// API
import { fetchAllPersona } from '../../lib/api'

const goals = []
const channels = []
const avatars = []
const products = []

function CampaignForm() {

    const [allPersonas, setAllPersonas] = useState([])


  useEffect(() => {
    fetchAllPersona().then(setAllPersonas);
      console.log(allPersonas)
  }, [])


  return (
    <>
         <Layout>
            <div>
                <div className='mx-5 space-y-2 mt-10'>
                    <h3 className="md:text-3xl text-2xl font-bold">New Campaign</h3>
                    <p>fill the following inputs, to generate a full fledged campaign</p>
                </div>
                <Form />
            </div>
         </Layout>

    </>
  )
}

export default CampaignForm