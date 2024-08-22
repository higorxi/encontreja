"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import states from "@/lib/states" 

export function ModalSearchCity({ onSelectCity, onClose  }: {onSelectCity: any, onClose: () => void}) {
  const [searchQuery, setSearchQuery] = useState("")

  const normalizeString = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const filteredCities = useMemo(() => {
    const allCities = states.flatMap(state =>
      state.cities.map(city => ({
        name: city,
        state: state.abbreviation,
      }))
    )

    const matchingCities = allCities.filter(city =>
      normalizeString(city.name).includes(normalizeString(searchQuery))
    )

    return matchingCities.slice(0, 10)
  }, [searchQuery])

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle>Pesquisar cidade</DialogTitle>
          <DialogDescription>Digite o nome de uma cidade para encontrar sua localização.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Pesquise sua cidade..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <div className="max-h-[400px] overflow-auto">
            {filteredCities.map((city) => (
              <div
                key={`${city.name}-${city.state}`}
                className="flex items-center justify-between gap-4 px-4 py-2 hover:bg-muted/50 rounded-md cursor-pointer"
                onClick={() => onSelectCity(city.name)} 
              >
                <div className="flex items-center gap-2">
                  <LocateIcon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{city.name}</div>
                    <div className="text-sm text-muted-foreground">{city.state}</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-muted/50">
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
