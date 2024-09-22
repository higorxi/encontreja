import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Profile() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary px-4 lg:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="text-lg font-semibold text-primary-foreground">John Smith</div>
            <div className="text-sm text-primary-foreground">Handyman Services</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <PhoneIcon className="h-4 w-4" />
            Contact
          </Button>
          <Button variant="secondary" size="sm">
            <CalendarIcon className="h-4 w-4" />
            Book Now
          </Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[200px_1fr] gap-6 p-6">
        <nav className="bg-muted rounded-lg p-4 flex flex-col gap-2">
          <Button variant="ghost" size="sm" className="justify-start gap-2">
            <UserIcon className="h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2">
            <CalendarIcon className="h-4 w-4" />
            Bookings
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2">
            <StarIcon className="h-4 w-4" />
            Reviews
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2">
            <UsersIcon className="h-4 w-4" />
            Profiles
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2">
            <MailIcon className="h-4 w-4" />
            Contact
          </Button>
        </nav>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="text-xl font-semibold">John Smith</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LocateIcon className="h-4 w-4" />
                  <span>São Paulo, Brazil</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PhoneIcon className="h-4 w-4" />
                  <span>(11) 98765-4321</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 fill-primary" />
                <StarIcon className="h-4 w-4 fill-primary" />
                <StarIcon className="h-4 w-4 fill-primary" />
                <StarIcon className="h-4 w-4 fill-primary" />
                <StarIcon className="h-4 w-4" />
              </div>
              <span>4.8 (125 reviews)</span>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Services</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <WrenchIcon className="h-8 w-8" />
                  <div className="text-lg font-semibold">Handyman</div>
                  <div className="text-sm text-muted-foreground">General home repairs and maintenance</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <PaintbrushIcon className="h-8 w-8" />
                  <div className="text-lg font-semibold">Painting</div>
                  <div className="text-sm text-muted-foreground">Interior and exterior painting</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <HammerIcon className="h-8 w-8" />
                  <div className="text-lg font-semibold">Carpentry</div>
                  <div className="text-sm text-muted-foreground">Custom furniture and home improvements</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <PlugIcon className="h-8 w-8" />
                  <div className="text-lg font-semibold">Plumbing</div>
                  <div className="text-sm text-muted-foreground">Faucet repair, pipe installation, and more</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="prose max-w-none">
              <p>
                I am a skilled and experienced handyman with over 10 years of experience in the industry. I take pride
                in my work and always strive to provide the highest quality service to my clients.
              </p>
              <p>
                Whether you need help with a small repair or a larger home improvement project, I have the knowledge and
                expertise to get the job done right. I specialize in a wide range of services, including carpentry,
                painting, plumbing, and general maintenance.
              </p>
              <p>
                I am committed to providing excellent customer service and always go the extra mile to ensure my clients
                are satisfied with the work I do. I am reliable, punctual, and take great care to keep your home clean
                and tidy throughout the process.
              </p>
              <p>
                If you are looking for a trustworthy and skilled handyman, I would be honored to work with you. Please
                dont hesitate to contact me to discuss your project and get a free estimate.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <LocateIcon className="h-4 w-4" />
                        <span>São Paulo, Brazil</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <span>4 days ago</span>
                  </div>
                  <div>
                    John did an excellent job repairing my leaky faucet. He was very professional, efficient, and left
                    my kitchen spotless. I highly recommend his services.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <div className="font-semibold">Michael Brown</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <LocateIcon className="h-4 w-4" />
                        <span>Rio de Janeiro, Brazil</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                    </div>
                    <span>1 week ago</span>
                  </div>
                  <div>
                    I hired John to paint my entire house, and I could not be happier with the results. He was
                    professional, efficient, and the quality of his work was top-notch. I would definitely use his
                    services again.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <div className="font-semibold">Jessica Rodriguez</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <LocateIcon className="h-4 w-4" />
                        <span>Belo Horizonte, Brazil</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <span>2 weeks ago</span>
                  </div>
                  <div>
                    John did a great job installing new shelves in my home office. He was very knowledgeable, took the
                    time to understand my needs, and completed the project quickly and efficiently. I would definitely
                    hire him again.
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="justify-self-start">
              View all reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function HammerIcon(props: any) {
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
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
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


function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PaintbrushIcon(props: any) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function PlugIcon(props: any) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
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


function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WrenchIcon(props: any) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
