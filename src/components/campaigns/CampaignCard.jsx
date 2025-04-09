import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card.tsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link } from "react-router-dom";

import {Button} from "@/components/ui/button.tsx"

import menuDots from "../../assets/menu-dots-vertica.svg";

function CampaignCard({campaign}) {
  return (

      <Card className="rounded-sm w-full p-3 cursor-pointer" onClick={(e)=> console.log(campaign._id)} >
        <CardContent className="space-y-2">
        <div className="bg-[#5271ff] text-[12px] font-medium px-[8px] py-[5px] rounded-[3px] w-fit">
          {(campaign.chosenChannels).join(", ")}
        </div>
        <CardTitle className="text-2xl my-2 line-clamp-1">{campaign.name}</CardTitle>
        <p className="w-fit text-[16px] line-clamp-1 opacity-70 text-gray-300">
          {campaign.product}
        </p>
        <div className="flex justify-between">
          <Link to={`/ai-copywriter-frontend/dashboard/campaigns/${campaign._id}`}>
          <Button className="rounded-[4px] cursor-pointer" variant="secondary">
            View Campaign
          </Button></Link>
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

  );
}

export default CampaignCard;
