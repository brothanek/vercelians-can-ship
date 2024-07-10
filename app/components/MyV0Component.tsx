/**
 * v0 by Vercel.
 * @see https://v0.dev/t/H3kih9Ep8ef
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground animate-pulse">
          Build the Web with Vercel
        </h1>
        <p className="max-w-[700px] text-primary-foreground/80 text-lg md:text-xl">
          Securely build, deploy, and scale the best web experiences with our complete platform.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
      <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-no-repeat bg-center bg-cover opacity-10" />
    </section>
  )
}
