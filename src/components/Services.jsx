import React from 'react';

function Services() {
  return (
    <section className="section" id="services">
    <div className="section-title">
        <h2>our <span>services</span></h2>
    </div>
    <div className="section-center services-center">
        {/* <!-- first icon  --> */}
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-wallet"></i></span>
            <div className="service-info">
                <h4 className="service-title">saving money</h4>
                <p className="service-text">Lorem ipsum adipisicing elit.quisquam deleniti quibusdam eum nesciunt maiores.</p>
            </div>
        </article>
        {/* <!-- second icon  --> */}
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-tree"></i></span>
            <div className="service-info">
                <h4 className="service-title">endless hiking</h4>
                <p className="service-text">Lorem ipsum adipisicing elit.quisquam deleniti quibusdam eum nesciunt maiores.</p>
            </div>
        </article>
        {/* <!-- third icon  --> */}
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-socks"></i></span>
            <div className="service-info">
                <h4 className="service-title">amazing comfort</h4>
                <p className="service-text">Lorem ipsum adipisicing elit.quisquam deleniti quibusdam eum nesciunt maiores.</p>
            </div>
        </article>
    </div>
    </section>
  )
}

export default Services