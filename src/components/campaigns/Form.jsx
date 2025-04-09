import React, { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

// ui components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// components
import { AvatarDropdown } from "./form/AvatarDropdown";
import { ProductDropdown } from "./form/ProductDropdown";

//api
import { generateCampaignJson } from "../../lib/api";



function Form() {

  //form values
  const [name, setName] = useState("");
  const [avatarId, setAvatarId] = useState("")
  const [productId, setProductId] = useState("")
  const [goal, setGoal] = useState("");
  const [channels, setChannels] = useState([])
  const [offerLine, setOfferLine] = useState([])

  const [campaign, setCampaign] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const formData = {
    name,
    avatarId,
    productId,
    goal,
    channels,
    offerLine
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      setIsLoading(true)
      const newCampaign = await generateCampaignJson(formData);
      setCampaign(newCampaign);
      setIsLoading(false)
      // navigate(`/ai-copywriter-frontend/dashboard/campaign/${newPersona._id}`);
      console.log("Generated Campaign:", newCampaign);
    } catch (error) {
      console.error("Error generating Campaign:", error);
    }

    // // Clear the form after submission
    // setUserInputs({
    //   name: "",
    //   avatar: "",
    //   problem: "",
    //   industry: "",
    // });
  };

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleChannelsChange = (checked, value) => {
    setChannels((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mx-5 space-y-5 my-10">
        <div className="grid grid-cols-2 items-center gap-2">
          <Label htmlFor="name" className="text-[16px] font-semibold">
            Name
          </Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex. Josh Barter"
            className="col-span-3"
          />
        </div>

        <div className="gap-2">
          <Label htmlFor="avatar" className="text-[16px] font-semibold">
            Select Buyer Avatar
          </Label>
          <AvatarDropdown id="avatar" selectedAvatarId={avatarId}
  onAvatarChange={(id) => setAvatarId(id)} />
        </div>

        <div className="gap-2">
          <Label htmlFor="product" className="text-[16px] font-semibold">
            Select Product
          </Label>
          <ProductDropdown id="product" selectedProductId={productId}
  onProductChange={(id) => setProductId(id)} />
        </div>

        <div className="flex flex-col space-y-3">
          <span className="text-[16px] font-semibold">
            What's your goal with the campaign?
          </span>
          <RadioGroup onChange={(e) => setGoal(e.target.value)} defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="leadGen"
                id="leadGen"
              />
              <Label htmlFor="leadGen">Lead Generation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="awareness" id="awareness" />
              <Label htmlFor="awareness">Awareness about your product</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="conversion" id="conversion" />
              <Label htmlFor="conversion">Sales & Conversion</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="engagement" id="engagement" />
              <Label htmlFor="engagement">Engagement & Retention</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col space-y-3">
          <span className="text-[16px] font-semibold">
            How do you want to market?
          </span>
          <div className="flex space-x-2">
            <Checkbox checked={channels.includes("email")}
  onCheckedChange={(checked) => handleChannelsChange(checked, "email")} id="email" value="email" />
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Emails
            </label>
          </div>
          <div className="flex space-x-2">
            <Checkbox checked={channels.includes("sms")}
  onCheckedChange={(checked) => handleChannelsChange(checked, "sms")} id="sms" value="sms" />
            <label
              htmlFor="sms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              SMS
            </label>
          </div>
          <div className="flex space-x-2">
            <Checkbox checked={channels.includes("whatsApp")}
  onCheckedChange={(checked) => handleChannelsChange(checked, "whatsApp")} id="whatsApp" value="whatsApp" />
            <label
              htmlFor="whatsApp"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              WhatsApp
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-2">
          <Label htmlFor="offerLine" className="text-[16px] font-semibold">
            Offer Line
          </Label>
          <Textarea
            value={offerLine}
            onChange={(e) => setOfferLine(e.target.value)}
            id="offerLine"
            placeholder="Ex. 50% off on all products"
            className="resize-none col-span-3"
          />
        </div>

        {!isLoading ? (
              <Button type="submit">Generate Campaign</Button>
            ) : (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Generating
              </Button>
            )}
      </div>
    </form>
  );
}

export default Form;
