import React, { useEffect, useState } from "react";

import AvatarCard from "./AvatarCard.jsx";

function AvatarCardGrid({filteredPersona}) {

  return (
    <div className="m-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredPersona.length > 0 ? (
          filteredPersona.map((persona, index) => (
            <AvatarCard key={persona._id} persona={persona} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}

export default AvatarCardGrid;
