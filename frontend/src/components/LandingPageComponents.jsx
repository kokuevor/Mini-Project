import Button from 'react-bootstrap/Button';
import { FeatureCard } from './FeatureCard';
import './LandingPageComponents.css';

const HeroComponent = () => (
    <div className="">
        <div className="hero-section">
            <div className="logo-name">
                <span className="logo-name-text">Study</span>
                <span className="logo-name-text-1">Paddies</span>
            </div>
            <div className="tagline" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="get-started-btn" >
                <Button href="/get-started" variant="primary"><b>Get Started</b></Button>
            </div>
        </div>
    </div>
);


const MainContentComponent = () => (
    <div id="about">
        <main className="about-section-t-midbar">
            <div className="about-section-bg">
                <div className="about-section-t-image">
                    <img className="about-section-image" src="/assets/image.png" loading="lazy" />
                </div>
                <div className="about-text" >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.
                    </p>
                    <br />
                    <p>
                        Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis.
                    </p>
                </div>
            </div>
        </main>
    </div>
);


const FeaturesComponent = () => (
    <div id='features'>
        <div className="section-header">FEATURES</div>
        <section className="features-section">
            <FeatureCard
                className="card-1"
                backgroundColor1="card-1-0-type"
                featureTitle="Feature Name"
                featureDescription1="Voluptatem quaerat non archit audantium modi mim sunt sse temporibus sit culpa, cusanae aliquam numqam totam ration"
            />
            <FeatureCard
                className="card-2"
                backgroundColor1="card-2-0-type"
                featureTitle="Feature Name"
                featureDescription1="Voluptatem quaerat non archit audantium modi mim sunt sse temporibus sit culpa, cusanae aliquam numqam totam ration"
            />
            <FeatureCard
                className="card-3"
                backgroundColor1="card-3-0-type"
                featureTitle="Feature Name"
                featureDescription1="Voluptatem quaerat non archit audantium modi mim sunt sse temporibus sit culpa, cusanae aliquam numqam totam ration"
            />
            <FeatureCard
                className="card-1"
                backgroundColor1="card-1-0-type"
                featureTitle="Feature Name"
                featureDescription1="Voluptatem quaerat non archit audantium modi mim sunt sse temporibus sit culpa, cusanae aliquam numqam totam ration"
            />
        </section>
    </div>
);

export { HeroComponent, MainContentComponent, FeaturesComponent }