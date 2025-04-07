import React from 'react'

//components
import CampaignCard from './CampaignCard'

function CampaignGrid({filteredCampaign}) {
  return (
    <div className="mx-5 overflow-x-scroll">
      <ul className="flex w-[50vw] whitespace-nowrap space-x-3">
        {filteredCampaign.length > 0 ? (
          filteredCampaign.map((campaign, index) => (
            <li key={campaign._id} className="">
                <CampaignCard campaign={campaign} />
            </li>
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  )
}

export default CampaignGrid