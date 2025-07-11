import Link from "next/link";
import CountdownTimer from "./countdown";

export default function DisplayProducts({ products }) {
    return (
        <div className="row makt-parent w-100 mx-auto">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-6  mkt-child" key={product.id}>
              
              <div className="market-card">
                <div className="mkt-img">
                <Link href={`/product/${product.slug}`} className="product-box">
                  <img
                    src={`https://admin.xpertbid.com/${JSON.parse(product.album)[0].replace(/^\/+/, "")}`}
                    alt={product.name}
                  />
                  </Link>
                  <CountdownTimer startDate={product.start_date} endDate={product.end_date} />
                </div>
                <div className="mkt-body">
                  <div className="mkt-pro-head">
                    <h3><Link href={`/product/${product.slug}`} className="product-box">{product.title}</Link></h3>
                  </div>
                  <div className="mkt-detail">
                    <div className="mkt-crt-bid">
                      <span className="crnt-bid">Current Bid</span>
                      <div className="mkt-bid-price">
                        <i className="fa-solid fa-dollar-sign"></i>
                        <span className="price">{product.bids_max_bid_amount}</span> USD
                      </div>
                    </div>
                    <div className="mkt-bid-btn">
                      <Link href={`/product/${product.slug}`}>Place Bid</Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      
    );
  }
  