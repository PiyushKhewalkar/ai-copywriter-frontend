import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// layout
import Layout from '../../app/layout'

// components

import Intro from "@/components/products/details/Intro.jsx"
import WhoWhyWhat from '@/components/products/details/WhoWhyWhat'
import ProductInfo from '@/components/products/details/ProductInfo'
import Credibility from '../../components/products/details/Credibility'
import SocialProof from '../../components/products/details/SocialProof'

// ui components
import { Button } from "@/components/ui/button.tsx"

//router
import { Link } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null); // ✅ Use null instead of []

  useEffect(() => {
    fetch(`https://ai-copywriter-backend.onrender.com/api/product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched product:", data); // Debugging
        setDetails(data.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  return (
    <Layout>
      <div className="mx-5 space-y-5 my-10">
        <Link to={"/ai-copywriter-frontend/dashboard/products"}>
        <Button className="mb-5 rounded-sm cursor-pointer" variant="outline">Go Back</Button>
        </Link>
        {details ? (
          <>
            <Intro product={details} />
            <WhoWhyWhat product={details} />
            <ProductInfo product={details}/>
            <Credibility product={details} />
            <SocialProof product={details} />

          </>
        ) : (
          <p>Loading...</p> // ✅ Prevents null errors
        )}
      </div>
    </Layout>
  );
}

export default ProductDetails;
