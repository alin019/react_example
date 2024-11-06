import React from 'react';

function Tours() {
  return (
    <section className="section" id="tours">
    <div className="section-title">
        <h2>featured <span>tours</span></h2>
    </div>
    <div className="section-center featured-center">
        {/* <!-- first tour  --> */}
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/1.png" alt="" className="tour-img"/>
                <p className="tour-date">Aug 26th,2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis fugiat ab, sapiente fugit mollitia!</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </div>
        </article>
        {/* <!-- second tour  --> */}
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/2.png" alt="" className="tour-img"/>
                <p className="tour-date">Aug 26th,2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis fugiat ab, sapiente fugit mollitia!</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </div>
        </article>
        {/* <!-- third tour  --> */}
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/3.png" alt="" className="tour-img"/>
                <p className="tour-date">Aug 26th,2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis fugiat ab, sapiente fugit mollitia!</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </div>
        </article>
        {/* <!-- fourth tour  --> */}
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/4.png" alt="" className="tour-img"/>
                <p className="tour-date">Aug 26th,2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis fugiat ab, sapiente fugit mollitia!</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </div>
        </article>
    </div>
</section>
  )
}

export default Tours