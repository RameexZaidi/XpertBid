// components/StartSelling.js

import Link from "next/link";

export default function StartSelling() {
    return (
      <section className="start-selling">
        <div className="container-fluid">
          <div className="start-selling-parent">
            <div className="row start-slelling-child">
              <div className="col-md-8 start-slelling-left">
                <h2>Start selling today!</h2>
                <p>Connecting you to buyers Worldwide</p>
                <div className="selling-btns">
                  <Link href="/marketplace" className="exp-more">Explore More</Link>
                  <Link href="/sell" className="start-sell-now">Sell Now</Link>
                </div>
              </div>
              <div className="col-md-4 start-slelling-right">
                <img src="/assets/images/hero-prodcut1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  