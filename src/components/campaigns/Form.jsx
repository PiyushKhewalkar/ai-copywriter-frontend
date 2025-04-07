import React from "react";

// ui components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

function Form({personas}) {
  return (
    <div className="mx-5 space-y-5 my-10">
      <div className="grid grid-cols-2 items-center gap-2">
        <Label htmlFor="name" className="text-[16px] font-semibold">
          Name
        </Label>
        <Input
          id="name"
          required
          value=""
          placeholder="Ex. Josh Barter"
          className="col-span-3"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <span className="text-[16px] font-semibold">Choose Buyer Avatar</span>
      </div>

      <Card>Choose Product</Card>

      <div className="flex flex-col space-y-3">
        <span className="text-[16px] font-semibold">
          What's your goal with the campaign?
        </span>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Awareness / Lead Generation
          </label>
        </div>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sales & Conversion
          </label>
        </div>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Engagement & Rentention
          </label>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <span className="text-[16px] font-semibold">
          What's your goal with the campaign?
        </span>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Awareness / Lead Generation
          </label>
        </div>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sales & Conversion
          </label>
        </div>
        <div className="flex space-x-2">
          <Checkbox id="leadGen" />
          <label
            htmlFor="leadGen"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Engagement & Rentention
          </label>
        </div>
      </div>
    </div>
  );
}

export default Form;
