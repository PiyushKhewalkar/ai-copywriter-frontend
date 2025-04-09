import React from "react";
import { Card } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.tsx";

function Intro({ product }) {
  return (
    <div>
      <Card className="rounded-sm w-full p-3 gap-3">
        <div className="flex justify-between">
        <Button className="bg-[#272321] hover:bg-[#272321] text-white hover:text-white text-[14px] items-center font-medium px-[8px] py-[4px] rounded-[3px] w-fit">
          {product.category}
        </Button>
          <div className="flex space-x-2 h-fit">
           <Button variant="secondary"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Edit</Button>
           <Button variant="destructive"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Delete</Button>
          </div>
        </div>
  
          <div className="space-y-1">
            <h1 className="md:text-3xl text-xl font-medium w-fit">
              {product.name}
            </h1>
            <p className="text-[12px] md:text-[16px] w-fit">{product.description}</p>
          </div>
      </Card>
    </div>
  );
}

export default Intro;
