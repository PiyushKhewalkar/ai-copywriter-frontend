import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// layout
import Layout from '../app/layout'

// components
import Demographics from "../components/details/Demographics.jsx"
import Goals from "../components/details/Goals.jsx"
import Intro from "../components/details/Intro.jsx"
import Professional from "../components/details/Professional.jsx"
import Painpoints from '../components/details/Painpoint.jsx'

// ui components
import { Button } from "@/components/ui/button.tsx"

//router
import { Link } from 'react-router-dom'

function AvatarDetails() {
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

  return (
    <Layout>
      <div className="mx-5 space-y-5 my-10">
        <Link to={"/ai-copywriter-frontend/dashboard/avatars"}>
        <Button className="mb-5 rounded-sm cursor-pointer" variant="outline">Go Back</Button>
        </Link>
        {details ? (
          <>
            <Intro persona={details} />
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
