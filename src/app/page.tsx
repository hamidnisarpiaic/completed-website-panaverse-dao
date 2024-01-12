import CoreTracks from "@/app/components/widgets/CoreTracks"
import Hero from "@/app/components/widgets/Hero"
import Header from "@/app/components/layout/Header"
import SpecializedTracks from "@/app/components/widgets/SpecializedTracks"
import ProgramOutcome from "@/app/components/widgets/ProgramOutcome"
import Footer from "@/app/components/shared/Footer"
import Wrapper from "@/app/components/shared/Wrapper"

export default function Home() {
  return (
    <>
      <main>
    <Wrapper>


  {/* Hero Section */}
  <Hero />
        {/* CoreTracks Section */}
         <CoreTracks/> 

         {/* Specilized Tracks */}
        <SpecializedTracks/>
{/* ProgramOutcome Section  */}
<ProgramOutcome/>

<Footer/>

    </Wrapper>

      
      </main>

    </>
  )
}




