import AnimatedHeader from "@/components/animated-header"
import SiteReliability from "@/components/site-reliability"
import ProjectSlider from "@/components/project-slider"
import AboutMe from "@/components/about-me"
import AnimatedSkills from "@/components/animated-skills"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer-portfolio"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AnimatedHeader />
      <div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-20 p-4">
        <SiteReliability />
      </div>
      <AboutMe />
      <AnimatedSkills />
      <Portfolio />
      <div>
        <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
        <ProjectSlider />
      </div>
      <Footer/>
    </main>
  )
}

