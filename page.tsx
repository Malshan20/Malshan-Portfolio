import AnimatedHeader from "@/components/animated-header"
import SunburstLogo from "@/components/sunburst-logo"
import SiteReliability from "@/components/site-reliability"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AnimatedHeader />
      <div className="flex flex-col items-center justify-center min-h-screen gap-20 p-4">
        <SunburstLogo />
        <SiteReliability />
      </div>
    </main>
  )
}

