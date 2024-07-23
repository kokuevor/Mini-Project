import { NavbarComponent } from '../components/Navbar';
import { HeroComponent, MainContentComponent, FeaturesComponent } from '../components/LandingPageComponents';
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