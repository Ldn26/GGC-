import Header from '../components/Header'
import Title from '../components/Title'
import Banner from '../components/Banner'
import Skils from '../components/Skiles'
import About from '../components/About'
import Projects from '../components/Projects'
import Tools from '../components/Tools'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
export default function Home() {
  return (

    <div className="overflow-x-hidden"> 
    <Header/>
    <Banner/>
    <Title  titel={'My Expertise'}   />
    <Skils />
    <About />
    <Title
     titel={'Portfolio'}   />
    <Projects />
    <Title  titel={'Tools that I use '}   />
    <Tools />
    <Title  titel={'Contact Me '}   />  
    <ContactMe/> 
    <Footer />
    
    </div>


  );
}
