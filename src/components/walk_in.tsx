import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

export function Client() {
  return (
    <div className="flex flex-row">
      <Select />
    </div>
  );   
}
function Select() {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {
              name
              ? clients.find((client) => client.name === name)?.name
              : "Select client..."
            }
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No client found.</CommandEmpty>
              <CommandGroup>
                {clients.map((client) => (
                  <CommandItem
                    key={client.name}
                    name={client.name}
                    onSelect={(currentName) => {
                      setName(currentName === name ? "" : currentName)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        name === client.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {client.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
function New() {

}

const clients = [
  { name: "Lorie" },
  { name: "James" },
  { name: "Sophia" },
  { name: "Michael" },
  { name: "Emma" },
  { name: "William" },
  { name: "Olivia" },
  { name: "Benjamin" },
  { name: "Charlotte" },
  { name: "Ethan" },
  { name: "Amelia" },
  { name: "Alexander" },
  { name: "Mia" },
  { name: "Daniel" },
  { name: "Harper" },
  { name: "Matthew" },
  { name: "Evelyn" },
  { name: "Henry" },
  { name: "Abigail" },
  { name: "Sebastian" }
];