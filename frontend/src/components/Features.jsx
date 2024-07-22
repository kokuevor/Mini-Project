import { FeatureCard } from './FeatureCard';
import './Features.css';

export function FeaturesComponent() {
    return (
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
}

