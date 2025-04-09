import React from 'react'

import { Card } from "@/components/ui/card.jsx";

function ProductInfo({product}) {
  return (
     <div>
          <Card className="rounded-sm w-full p-3 gap-3">
              <div className="space-y-1">
                <h1 className="md:text-3xl text-xl font-bold w-fit">
                  Product Info
                </h1>
                <div className="space-y-1">
                <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Features or USP:</span> {product.usp || "--"}</p>
                <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Specific Techonology / Ingredients / Methodology:</span> {product.specificMethod || "--"}</p>
                <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Unique Mechanism:</span> {product.uniqueMechanism || "--"}</p>
                </div>
              </div>
          </Card>
        </div>
  )
}

export default ProductInfo