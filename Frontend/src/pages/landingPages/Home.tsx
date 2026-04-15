import About from "../../compnents/landing-page-components/About"
import HeroSection from "../../compnents/landing-page-components/HeroSection"
import Problem from "../../compnents/landing-page-components/Problem"
import Solution from "../../compnents/landing-page-components/Solution"
import HowItWorks from "../../compnents/landing-page-components/HowItWorks"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Problem/>
      <Solution/>
      <HowItWorks/>
    </div>
  )
}

export default Home