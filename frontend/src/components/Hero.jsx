import Button from 'react-bootstrap/Button';
import './Hero.css';

export function HeroComponent() {
    return (
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
}

