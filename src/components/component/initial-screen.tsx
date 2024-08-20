import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function InitialScreen() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] justify-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connecting You to the Best Service Providers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover a wide range of top-rated service providers in your area. Book appointments, read reviews,
                    and get the services you need with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BrushIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Beauty Services</h3>
                  <p className="text-muted-foreground text-center">
                    Pamper yourself with our top-rated hair, nail, and spa services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <WrenchIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Home Repairs</h3>
                  <p className="text-muted-foreground text-center">
                    Get your home in top shape with our skilled handyman and repair services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <LaptopIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Tech Support</h3>
                  <p className="text-muted-foreground text-center">
                    Get expert help with your tech devices and software troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 justify-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Reach and Advantages</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects you with over 10,000 service providers across 50 cities, ensuring you can find
                  the right professional for your needs, no matter where you are.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    Vetted and trusted service providers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    Transparent pricing and booking process
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    Convenient scheduling and payment options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    Reliable and responsive customer support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Trusted by Thousands</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">What Our Customers Say</h2>
                <div className="grid gap-6">
                  <div className="grid gap-2 rounded-lg bg-background p-4">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-semibold">John Doe</div>
                        <div className="text-xs text-muted-foreground">Satisfied Customer</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I have been using this platform for all my home services\n needs and I am consistently impressed by
                      the quality of\n the providers and the ease of booking. Highly\n recommended!
                    </p>
                  </div>
                  <div className="grid gap-2 rounded-lg bg-background p-4">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-semibold">Sarah Miller</div>
                        <div className="text-xs text-muted-foreground">Satisfied Customer</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I have been using this platform for all my home services\n needs and I'm consistently impressed by
                      the quality of\n the providers and the ease of booking. Highly\n recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="m20 6-12 12-5-5" />
    </svg>
  );
}

function WrenchIcon(props) {
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
      <path d="M17.66 8.34a2.11 2.11 0 0 0 0-2.99L15 2.68a2.11 2.11 0 0 0-2.99 0l-3.1 3.1a2.11 2.11 0 0 0 0 2.99l.79.79L6.7 10.29a2.11 2.11 0 0 0 0 2.99l.79.79a2.11 2.11 0 0 0 2.99 0l3.1-3.1a2.11 2.11 0 0 0 2.99 0l3.11-3.11a2.11 2.11 0 0 0 0-2.99z" />
    </svg>
  );
}

function LaptopIcon(props) {
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
      <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
      <path d="M1 20h22" />
    </svg>
  );
}
