import React, {useState} from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"

export function AvatarForm() {

    const [userInputs, setUserInputs] = useState({
        product : "",
        targetMarket : "",
        problem : "",
        industry : ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserInputs((prev) => ({ ...prev, [id]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted", userInputs);
        setUserInputs({
            product : "",
            targetMarket : "",
            problem : "",
            industry : ""
        })
    }

    const handleAPI = () => {
        
    }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer py-5">+ Create New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Avatar</DialogTitle>
          <DialogDescription>
            Just fill the following fields, our AI will generate your dream buyer avatar
          </DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="product" className="">
              What do you sell?
            </Label>
            <Textarea required id="product" value={userInputs.product} onChange={handleChange} placeholder="Quick-Haircare products for busy professionals not having time for hair care" className="col-span-3 resize-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="targetmarket" className="">
              Who do you want to attract?
            </Label>
            <Input id="targetMarket" value={userInputs.targetMarket} onChange={handleChange} placeholder="Corporate Men" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="problem" className="">
              Biggest problem your product solves
            </Label>
            <Textarea id="problem" required value={userInputs.problem} onChange={handleChange} placeholder="Let professionals take charge of their hair-health with just a 30 secs/day" className="col-span-3 resize-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="industry" className="">
              Any specific industry you focus on?
            </Label>
            <Input id="industry" value={userInputs.industry} onChange={handleChange} placeholder="IT" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Generate</Button>
        </DialogFooter>

        </form>
        
      </DialogContent>
    </Dialog>
  )
}

export default AvatarForm