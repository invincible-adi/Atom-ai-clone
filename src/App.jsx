import Header from './components/Header';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import Outbound from './components/Outbound';
import Success from './components/Success';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Stats from './components/Stats';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-black">
            <Header />
            <Hero />
            <Workflow />
            <Outbound />
            <Success />
            <Testimonials />
            <Quote />
            <Stats />
            <Integrations />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    )
}

export default App 