import React from 'react'
import { Card } from '../../ui/card'

function SocialProof({product}) {
  return (
       <Card className="rounded-sm w-full p-3 gap-3">
                  <div className="space-y-1">
                    <h1 className="md:text-3xl text-xl font-bold w-fit">
                      Social Prood
                    </h1>
                    <div className="space-y-1">
                    <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Features In:</span> {product.featuredIn || "--"}</p>
                    <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Number of Reviews:</span> {product.numberOfReviews || "--"}</p>
                    <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Average Review Rating:</span> {product.avgRating || "--"}</p>
                    <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Total Customers:</span> {product.totalCustomers || "--"}</p>
                    </div>
                  </div>
              </Card>
      )
}

export default SocialProof