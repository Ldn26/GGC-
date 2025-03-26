import Title from '../components/Title'
import Banner from '../components/Banner'
import Skils from '../components/Skiles'
import About from '../components/About'

import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
export default function Home() {
  return (
    <div className="overflow-x-hidden   banner ">
      <Banner />
      <Title titel={"من نحن"} />
      <About />
      <Title titel={"مميزات التطبيق"} />
      <Skils />
      <Title titel={" خطط الأسعار"} />

      <Pricing />
      <Title titel={"تواصل معنا "} />
      <ContactMe />

      <Footer />
    </div>
  );
}
