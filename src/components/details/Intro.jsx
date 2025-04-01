import React from "react";
import { Card } from "@/components/ui/card.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";

function Intro() {
  return (
    <div className="mx-5 my-10">
      <Card className="rounded-sm w-full p-3">
        <div className="flex justify-between">
        <div className="flex space-x-3 items-center w-fit">
            <Avatar className="md:w-24 w-12 h-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h1 className="md:text-3xl text-xl font-medium w-fit">{persona.name}</h1>
                <p className="text-sm w-fit">{persona.jobTitle}</p>
            </div>
        </div>

        <div className="flex space-x-2 h-fit">
            <Button variant="secondary"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Edit</Button>
            <Button variant="destructive"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Delete</Button>
        </div>
        </div>
        <div>
            <p className="text-[16px] w-fit">{persona.twoOrThreeLinerDescription}</p>
        </div>

        {/* <div className="grid md:grid-cols-2">
          <p>📍 {persona.location}</p>
          <p>Age: {persona.ageRange}</p>
        </div> */}
      </Card>
    </div>
  );
}

export default Intro;
