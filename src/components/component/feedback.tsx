import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { FaWrench } from "react-icons/fa"

export function Feedback() {
  return (
    <Card className="w-full p-6 grid border-none shadow-none">
      <div className="flex items-start gap-4">
        <div className="bg-primary rounded-2xl p-2 flex items-center justify-center">
          <FaWrench className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="grid gap-2 flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">Pro Plan</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="text-sm leading-loose text-muted-foreground">
            <p>
              I have been using this service for over a year now and I am extremely satisfied with the results. The team is
              responsive and the platform is user-friendly. Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function WebcamIcon(props: any) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}
