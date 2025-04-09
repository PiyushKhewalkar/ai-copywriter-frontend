import React from 'react'

// icons
import menuDots from "../../assets/menu-dots-vertica.svg";


// router dom
import { Link } from 'react-router-dom'

// ui components
import { Button } from '../ui/button.jsx'
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "../ui/dropdown-menu.jsx"
import {Card, CardContent} from "../ui/card.jsx"

function CampaignCard({campaign, product}) {

    let channels = []

    const getChannelsArr = () => {

        // get all channels Array

        return channels
    }


  return (
    <>
    <Card className="rounded-sm md:w-[370px] w-[250px] text-wrap p-3 cursor-pointer">
        <CardContent className='space-y-2'>
        <h3 className='text-xl font-medium line-clamp-1'>{campaign.name}</h3>
        <p className='line-clamp-1'>Product: {campaign.product}</p>
        <p className='line-clamp-1'>Channel: {campaign.chosenChannels.join(", ")}</p>
        <div className="flex justify-between">
            <Link to={`/ai-copywriter-frontend/dashboard/campaigns/${campaign._id}`}>
                <Button className="rounded-[4px] cursor-pointer" variant="secondary">
                    View Campaign
                </Button>
            </Link>
            <DropdownMenu className="cursor-pointer">
                <DropdownMenuTrigger className="cursor-pointer">
                <img
                    className="h-4 w-4"
                    style={{ filter: "invert(1)" }}
                    src={menuDots}
                    alt="Menu Dots"
                />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </CardContent>
    </Card>
    </>
  )
}

export default CampaignCard