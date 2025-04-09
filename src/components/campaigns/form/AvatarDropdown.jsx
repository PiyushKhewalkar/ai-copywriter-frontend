"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// api
import { fetchAllPersona } from "../../../lib/api"

export function AvatarDropdown({ selectedAvatarId, onAvatarChange }) {
  const [avatars, setAvatars] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    fetchAllPersona().then(setAvatars);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between mt-2"
        >
          {selectedAvatarId
            ? avatars.find((avatar) => avatar._id === selectedAvatarId)?.name
            : "Select avatar..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search avatar..." className="h-9" />
          <CommandList className="w-full">
            <CommandEmpty>No avatar found.</CommandEmpty>
            <CommandGroup>
              {avatars.map((avatar) => (
                <CommandItem
                  key={avatar._id}
                  value={avatar._id}
                  onSelect={(currentValue) => {
                    onAvatarChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {`${avatar.name} - ${avatar.jobTitle}`}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedAvatarId === avatar._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

