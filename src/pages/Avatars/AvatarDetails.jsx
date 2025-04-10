import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// layout
import Layout from '../../app/layout'

// components

import Demographics from "@/components/avatars/details/Demographics.jsx"
import Goals from "@/components/avatars/details/Goals.jsx"
import Intro from "@/components/avatars/details/Intro.jsx"
import Professional from "@/components/avatars/details/Professional.jsx"
import Painpoints from "@/components/avatars/details/Painpoint.jsx"

// ui components
import { Button } from "@/components/ui/button.tsx"

//router
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//api
import { deletePersona } from '../../lib/api'

function AvatarDetails() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [details, setDetails] = useState(null); // ✅ Use null instead of []

  useEffect(() => {
    fetch(`https://ai-copywriter-backend.onrender.com/api/persona/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Persona:", data); // Debugging
        setDetails(data.persona);
      })
      .catch((error) => {
        console.error("Error fetching persona:", error);
      });
  }, [id]);

  const handleDeleteSuccess = () => {
    setDetails(null);
    navigate("/ai-copywriter-frontend/dashboard/avatars")
  };

  return (
    <Layout>
      <div className="mx-5 space-y-5 my-10">
        <Link to={"/ai-copywriter-frontend/dashboard/avatars"}>
        <Button className="mb-5 rounded-sm cursor-pointer" variant="outline">Go Back</Button>
        </Link>
        {details ? (
          <>
            <Intro persona={details} onDeleteSuccess={handleDeleteSuccess} />
            <Demographics persona={details} />
            <Professional persona={details} />
            <Goals persona={details} />
            <Painpoints persona={details} />
          </>
        ) : (
          <p>Loading...</p> // ✅ Prevents null errors
        )}
      </div>
    </Layout>
  );
}

export default AvatarDetails;
