import Title from '../components/Title'
import Banner from '../components/Banner'
import Skils from '../components/Skiles'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Nazim from '../components/Nazim'
// import StockPage from '../components/'
import Footer2 from "../components/Footer2"
import Carousel from '../components/Carousel'
import AboutAndTeam from '../components/Nazim'
import FAQ from '../components/FAQ'
export default function Home() {
  return (
    <div className="overflow-x-hidden    ">
      <Banner />

      <AboutAndTeam />

      <FAQ />
      <ContactMe />
      <section className="pricing-section  banne  mb-10    ">
        <h2 className="text-center text-[50px]   text-[#57ca98]  font-bold">
          Plans & Pricing
        </h2>
        <p className="subtitle  mb-10 text-center  text-gray-400 ">
          Maximum functionality. Security and quality. Affordable prices.
        </p>

        <div className="pricing-cards">
          <div className="card   bg-[#470fa6] ">
            <div className="icon">🚀</div>
            <h3>START</h3>
            <p className="desc">Get started today</p>
            <ul>
              <li>Reservation module</li>
              <li>Business dashboards</li>
              <li>Social media integration</li>
              <li>Financial reports</li>
              <li>Direct payments</li>
            </ul>
            <button>Get Started</button>
          </div>

          <div className="card pro">
            <span className="best-seller">Best Seller</span>
            <div className="icon">💎</div>
            <h3>PRO</h3>
            <p className="desc">Take your business to the next level</p>
            <ul>
              <li>All START features, plus:</li>
              <li>Marketing tools</li>
              <li>Personalized ticket/email templates</li>
              <li>Automated notifications</li>
              <li>Online checkout</li>
              <li>Channel manager</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="card enterprise">
            <div className="icon">🏆</div>
            <h3>ENTERPRISE</h3>
            <p className="desc">For specialized and custom solutions</p>
            <ul>
              <li>All PRO features, plus:</li>
              <li>API access</li>
              <li>ADD‑ONS</li>
              <li>Multi-business accounts</li>
              <li>Agent & reseller access</li>
              <li>Centralized management for networks</li>
            </ul>
            <button>Request a Quote</button>
          </div>
        </div>
      </section>
      <Carousel />
      <Footer2 />
      {/* <Footer /> */}
    </div>
  );
}
