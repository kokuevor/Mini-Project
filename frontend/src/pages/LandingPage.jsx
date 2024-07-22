import { NavbarComponent } from '../components/Navbar';
import { HeroComponent } from '../components/Hero';
import { MainContentComponent } from '../components/MainContent'
import { FeaturesComponent } from '../components/Features';
import { ContactFormComponent } from '../components/Contact';
import { Footer } from '../components/Footer';


export default function LandingPage() {
    return (
        <>
            <NavbarComponent />
            <HeroComponent />
            <MainContentComponent />
            <FeaturesComponent />
            <ContactFormComponent />
            <Footer />
        </>
    );
}