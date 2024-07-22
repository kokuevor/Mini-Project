import PropTypes from 'prop-types';
import "./FeatureCard.css";

export function FeatureCard({
    className = "",
    backgroundColor1 = "",
    featureTitle = "Feature Name",
    featureDescription1 = "Voluptatem quaerat non archit audantium modi mim sunt sse temporibus sit culpa, cusanae aliquam numqam totam ration",
}) {
    return (
        <div className={`${className} feature-card-t-rectangle-3rectangle-1`}>
            <div className={`${backgroundColor1} feature-card-rectangle-1`}>
                <div className="feature-card-feature-name">{featureTitle}</div>
                <p className="feature-card-para">{featureDescription1}</p>
            </div>
        </div>
    );
}

FeatureCard.propTypes = {
    className: PropTypes.string,
    backgroundColor1: PropTypes.string,
    featureTitle: PropTypes.string,
    featureDescription1: PropTypes.string,
};