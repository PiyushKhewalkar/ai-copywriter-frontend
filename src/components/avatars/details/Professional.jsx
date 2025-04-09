import React from 'react'

import {Card} from "@/components/ui/card.jsx"


function Professional({persona}) {
  return (
     
          <Card className="rounded-sm w-full p-3">
            <h1 className="text-xl font-medium">Professional Details</h1>
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0">
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">Studied till {persona.educationLevel}</span>
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">{persona.jobTitle}</span>
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">works in {persona.industry}</span>
            </div>
          </Card>
  )
}

export default Professional