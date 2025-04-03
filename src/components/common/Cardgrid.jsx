import React, { useEffect, useState } from "react";

import { fetchAllPersona } from "../../lib/api.js";

import PersonCard from "./PersonCard.jsx";

function PersonaList({filteredPersona}) {
  // const [allPersona, setAllPersona] = useState([]);

  // useEffect(() => {
  //   fetchAllPersona().then(setAllPersona);
  //   console.log(allPersona)
  // }, []);


  return (
    <div className="m-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredPersona.length > 0 ? (
          filteredPersona.map((persona, index) => (
            <PersonCard key={persona._id} persona={persona} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}

export default PersonaList;
