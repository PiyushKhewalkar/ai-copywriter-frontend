import React from "react";
import { Card } from "@/components/ui/card.jsx";

function WhoWhyWhat({ product }) {
  return (
    <div>
      <Card className="rounded-sm w-full p-3 gap-3">
          <div className="space-y-1">
            <h1 className="md:text-3xl text-xl font-bold w-fit">
              Who-Why-What Matrix
            </h1>
            <div className="space-y-1">
            <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Target Market:</span> {product.targetMarket || "--"}</p>
            <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Pressing Problem:</span> {product.pressingProblem || "--"}</p>
            <p className="text-[14px] md:text-[18px] w-fit"><span className="font-semibold">Desired Outcome:</span> {product.desiredOutcome || "--"}</p>
            </div>
          </div>
      </Card>
    </div>
  );
}

export default WhoWhyWhat;
