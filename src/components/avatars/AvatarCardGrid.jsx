import React, { useEffect, useState } from "react";
import AvatarCard from "./AvatarCard.jsx";

function AvatarCardGrid({ filteredPersona }) {
  const [personas, setPersonas] = useState(filteredPersona || []);

  // Sync when filteredPersona updates from parent
  useEffect(() => {
    setPersonas(filteredPersona);
  }, [filteredPersona]);

  // Handle deletion by filtering out the deleted one
  const handleDeleteSuccess = (id) => {
    setPersonas(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="m-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {personas.length > 0 ? (
          personas.map((persona) => (
            <AvatarCard
              key={persona._id}
              persona={persona}
              onDeleteSuccess={() => handleDeleteSuccess(persona._id)}
            />
          ))
        ) : (
          <p>No personas found.</p>
        )}
      </ul>
    </div>
  );
}

export default AvatarCardGrid;
