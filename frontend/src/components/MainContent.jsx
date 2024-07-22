import "./MainContent.css";

export function MainContentComponent() {
    return (
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
}