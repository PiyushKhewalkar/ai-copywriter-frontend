import React, { useEffect, useState } from "react";

import CampaignCard from "./CampaignCard.jsx";

function CampaignCardGrid({filteredCampaign}) {

  return (
    <div className="m-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredCampaign.length > 0 ? (
          filteredCampaign.map((campaign, index) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}

export default CampaignCardGrid;
