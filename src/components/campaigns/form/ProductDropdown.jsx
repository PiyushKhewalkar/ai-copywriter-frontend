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
import { getProducts } from "../../../lib/api"

export function ProductDropdown({ selectedProductId, onProductChange }) {
  const [products, setProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    getProducts().then(setProducts);
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
          {selectedProductId
            ? products.find((product) => product._id === selectedProductId)?.name
            : "Select product..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search product..." className="h-9" />
          <CommandList className="w-full">
            <CommandEmpty>No product found.</CommandEmpty>
            <CommandGroup>
              {products.map((product) => (
                <CommandItem
                  key={product._id}
                  value={product._id}
                  onSelect={(currentValue) => {
                    onProductChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {product.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedProductId === product._id ? "opacity-100" : "opacity-0"
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

