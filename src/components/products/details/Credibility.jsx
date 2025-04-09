import React from 'react'

import { Card } from "@/components/ui/card.jsx";

function Credibility({product}) {
  return (
    <Card className="rounded-sm w-full p-3 gap-3">
              <div className="space-y-1">
                <h1 className="md:text-3xl text-xl font-bold w-fit">
                  Credibilty Boosters
                </h1>
                <div className="space-y-1">
                <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Scientific Studies / Research / Stats:</span> {product.specificStats || "--"}</p>
                <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Credible Figure:</span> {product.credibleFigure || "--"}</p>
                </div>
              </div>
          </Card>
  )
}

export default Credibility