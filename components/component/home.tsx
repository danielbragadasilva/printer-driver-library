import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Suporte } from "@/components/suporte";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-blue-gradient">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white/80 backdrop-blur-sm border-b border-blue-200">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-blue-600" />
          <span className="sr-only">Acme Support</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-blue-700 hover:text-blue-900" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-blue-700 hover:text-blue-900" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-blue-700 hover:text-blue-900" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-blue-700 hover:text-blue-900" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                    Reliable Support for Your Business
                  </h1>
                  <p className="max-w-[600px] text-blue-700 md:text-xl">
                    Get the support you need to keep your business running smoothly. Our team of experts is here to help
                    you with any issues you may encounter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-button-gradient hover:bg-button-gradient-hover px-8 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Support
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white/60 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Key Features</h2>
                <p className="max-w-[600px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our support service offers a range of features to help you get the assistance you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 bg-card-gradient p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">24/7 Support</h3>
                </div>
                <p className="text-blue-700">
                  Our team is available around the clock to assist you with any issues you may have.
                </p>
              </div>
              <div className="grid gap-1 bg-card-gradient p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <GaugeIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Fast Response Times</h3>
                </div>
                <p className="text-blue-700">
                  We pride ourselves on our quick response times, ensuring you get the help you need as soon as
                  possible.
                </p>
              </div>
              <div className="grid gap-1 bg-card-gradient p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Secure Support</h3>
                </div>
                <p className="text-blue-700">
                  Your data and information are safe with us. We use industry-leading security measures to protect your
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Submit a Support Request</h2>
                <p className="text-blue-700 md:text-xl/relaxed">
                  Fill out the form below to get in touch with our support team.
                </p>
              </div>
              <form className="grid gap-4 bg-card-gradient p-6 rounded-lg shadow-lg">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-blue-900">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="border-blue-300 focus:border-blue-500" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-blue-900">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="border-blue-300 focus:border-blue-500" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-blue-900">Description</Label>
                  <Textarea id="description" placeholder="Briefly describe your issue" className="border-blue-300 focus:border-blue-500" />
                </div>
                <Button type="submit" className="justify-center bg-button-gradient hover:bg-button-gradient-hover text-white shadow-md hover:shadow-lg transition-all duration-200">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 bg-white/80 backdrop-blur-sm">
        <p className="text-xs text-blue-600">&copy; 2024 Acme Support. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-blue-600 hover:text-blue-800" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-blue-600 hover:text-blue-800" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
