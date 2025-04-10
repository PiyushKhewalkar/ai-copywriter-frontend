import React from "react";
import { Card } from "@/components/ui/card.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";

import { deletePersona } from "../../../lib/api";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function Intro({persona, onDeleteSuccess}) {

  const handleDelete = async (id) => {
    try {
      await deletePersona(id);
      if (onDeleteSuccess) onDeleteSuccess(); // 👈 Callback to parent
    } catch (err) {
      console.error("Error deleting persona:", err);
    }
  };

  return (
    <div>
      <Card className="rounded-sm w-full p-3">
        <div className="flex justify-between">
        <div className="flex space-x-3 items-center w-fit">
            <Avatar className="md:w-24 w-12 h-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h1 className="md:text-3xl text-xl font-medium w-fit">{persona.name}</h1>
                <p className="text-[12px] md:text-sm w-fit">{persona.jobTitle}</p>
            </div>
        </div>

        <div className="flex space-x-2 h-fit">
            <Button variant="secondary"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Edit</Button>

   
        <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button variant="destructive"  className="cursor-pointer rounded-sm md:py-[2px] w-auto">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
            This avatar will be permanently deleted and cannot be recovered. Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(persona._id)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
            
        </div>
        </div>
        <div>
            <p className="text-[16px] w-fit">{persona.twoOrThreeLinerDescription}</p>
        </div>

      </Card>
    </div>
  );
}

export default Intro;
