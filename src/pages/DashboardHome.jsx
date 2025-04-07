import React, { useEffect, useState } from 'react'
import Layout from '../app/layout'

// components
import CampaignCard from '../components/home/CampaignCard'
import Greeting from '../components/home/Greeting'
import HeadingButton from '../components/home/HeadingButton'
import Searchbar from '../components/common/Searchbar'
import CampaignGrid from '../components/home/CampaignGrid'
import ProductGrid from '../components/home/ProductGrid'

// ui components
import { Separator } from "@/components/ui/separator"

// api
import { getAllCampaigns } from '../lib/api'
import { getProducts } from '../lib/api'

function DashboardHome() {

  const [campaigns, setCampaigns] = useState([])
  const [filteredCampaign, setFilteredCampaign]  = useState([])

  const [products, setProduts] = useState([])
  const [filteredProducts, setFilteredProducts]  = useState([])

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // fetch campaigns from API
    getAllCampaigns().then(setCampaigns)
  }, [])

  useEffect(() => {
    // fetch campaigns from API
    getProducts().then(setProduts)
  }, [])

   useEffect(() => {
      const filtered = campaigns.filter((campaign) =>
        Object.values(campaign)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredCampaign(filtered);
      console.log(campaigns)
    }, [searchTerm, campaigns]);

    useEffect(() => {
      const filtered = products.filter((product) =>
        Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      console.log(products)
    }, [searchTerm, products]);

  return (
  
      <Layout>
        <Greeting />
        <Searchbar placeholder="Search Campaigns, Products" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
        <HeadingButton heading={"Your Campaigns"} form={"campaign"} />
        <CampaignGrid filteredCampaign={filteredCampaign} />
        <Separator />
        <HeadingButton heading={"Your Products"} form={"product"} />
        <ProductGrid filteredProducts={filteredProducts} />
      </Layout>
  )
}

export default DashboardHome