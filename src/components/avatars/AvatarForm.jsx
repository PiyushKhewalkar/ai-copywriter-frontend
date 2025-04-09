import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import TextArea from "../common/formFields/TextArea";
import TextInput from "../common/formFields/TextInput";
import SubmitButton from "../common/formFields/SubmitButton";

import { generatePersona } from "../../lib/api";

export function AvatarForm() {

  const navigate = useNavigate()


  const [userInputs, setUserInputs] = useState({
    product: "",
    targetMarket: "",
    problem: "",
    industry: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [persona, setPersona] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      setIsLoading(true)
      const newPersona = await generatePersona(userInputs);
      setPersona(newPersona);
      setIsLoading(false)
      navigate(`/ai-copywriter-frontend/dashboard/avatars/${newPersona._id}`);
      console.log("Generated Persona:", newPersona);
    } catch (error) {
      console.error("Error generating persona:", error);
    }

    // Clear the form after submission
    setUserInputs({
      product: "",
      targetMarket: "",
      problem: "",
      industry: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer py-5">+ Create New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Avatar</DialogTitle>
          <DialogDescription>
            Just fill the following fields, our AI will generate your dream
            buyer avatar
          </DialogDescription>
        </DialogHeader>
        <form action="" className="grid gap-4 py-4" onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 items-center gap-2">
            <TextArea
              label={"What do you sell?"}
              id={"product"}
              placeholder={"Ex. Quick-Haircare products for busy professionals not having time for hair care"}
              value={userInputs.product}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Who do you want to attract?"}
              id={"targetMarket"}
              placeholder={"Ex. Corporate Men"}
              value={userInputs.targetMarket}
              onChange={handleChange}
            />
          </div>

            <div className="grid grid-cols-2 items-center gap-2">
            <TextArea
              label={"Biggest problem your product solves"}
              id={"problem"}
              placeholder={"Ex. Let professionals take charge of their hair-health with just a 30 secs/day"}
              value={userInputs.problem}
              onChange={handleChange}
            />
          </div>
          

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Any specific industry you focus on?"}
              id={"industry"}
              placeholder={"Ex. corporate"}
              value={userInputs.industry}
              onChange={handleChange}
            />
          </div>

          <DialogFooter>
            <SubmitButton label={"Generate Avatar"} loadingLabel={"Generating..."} isLoading={isLoading} handleSubmit={handleSubmit} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AvatarForm;
