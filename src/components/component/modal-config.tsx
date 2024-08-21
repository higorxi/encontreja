"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function ModalConfig({ onClose }: { onClose: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
  const [isCookiesEnabled, setIsCookiesEnabled] = useState(true)
  const [language, setLanguage] = useState("en")
  const [isLoading, setIsLoading] = useState(false)
  const handleSaveChanges = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }
  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Manage your app settings, notifications, cookies, and more.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSaveChanges} className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="font-medium">
                Dark Mode
              </Label>
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="font-medium">
                Notifications
              </Label>
              <Switch id="notifications" checked={isNotificationsEnabled} onCheckedChange={setIsNotificationsEnabled} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="cookies" className="font-medium">
                Cookies
              </Label>
              <Switch id="cookies" checked={isCookiesEnabled} onCheckedChange={setIsCookiesEnabled} />
            </div>
          </div>
          <div>
            <Label htmlFor="language" className="font-medium">
              Language
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="font-medium">Other Settings</Label>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>Setting 1</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span>Setting 2</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span>Setting 3</span>
                <Switch />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button type="submit" onClick={onClose}>
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
