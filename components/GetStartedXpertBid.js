// components/GetStartedXpertBid.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const countries = {
  liveIn: [
    { name: "United Arab Emirates", flag: "https://flagcdn.com/w80/ae.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w80/pk.png" },
  ],
  expandingTo: [
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w80/sa.png" },
    { name: "China", flag: "https://flagcdn.com/w80/cn.png" },
    { name: "Africa", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_African_Union.png/240px-Flag_of_the_African_Union.png" },
  ],
};

const blackBtnStyle = {
  minWidth: '200px',
  padding: '14px 28px',
  fontWeight: '600',
  fontSize: '1.1rem',
  borderRadius: '8px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
  transition: 'background-color 0.3s ease',
};

export default function GetStartedXpertBid() {
  return (
    <section
      className="get-started-section py-5"
      style={{ backgroundColor: '#fff', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#2C3E50' }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '3rem', letterSpacing: '1.2px' }}>
  Get Started with{' '}
  <span style={{ color: '#43ACE9' }}>Xpert</span>
  <span style={{ color: '#333333' }}>Bid</span>
</h1>


        <p className="text-center mb-4" style={{ fontSize: '1.25rem', fontWeight: '500', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: '#555' }}>
          Whether you're ready to list or just exploring, you’re only a few clicks away.
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4" style={{ userSelect: 'none' }}>
          {["Post Your Property", "Browse Live Auctions", "Create Free Account"].map((text, idx) => (
            <button
              key={idx}
              type="button"
              className="btn shadow-sm"
              style={blackBtnStyle}
              onClick={() => alert(`Redirect to ${text}`)}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#222')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000')}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="d-flex flex-column flex-md-row gap-5 justify-content-center" style={{ userSelect: 'none' }}>
          {/* Live In */}
          <div style={{ flex: 1, maxWidth: '45%' }}>
            <h3 className="fw-bold mb-3 text-center" style={{ fontSize: '1.6rem' }}>Live in:</h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              {countries.liveIn.map((country, idx) => (
                <SwiperSlide
                  key={idx}
                  className="d-flex flex-column align-items-center"
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
                    backgroundColor: '#fafafa',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img src={country.flag} alt={`${country.name} Flag`} style={{ width: '65px', height: '40px', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 0 6px rgba(67,172,233,0.4)', marginBottom: '8px' }} />
                  <span style={{ fontWeight: '700', fontSize: '1rem', color: '#2C3E50', whiteSpace: 'nowrap' }}>{country.name}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Expanding To */}
          <div style={{ flex: 1, maxWidth: '45%' }}>
            <h3 className="fw-bold mb-3 text-center" style={{ fontSize: '1.6rem' }}>Expanding to:</h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              {countries.expandingTo.map((country, idx) => (
                <SwiperSlide
                  key={idx}
                  className="d-flex flex-column align-items-center"
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
                    backgroundColor: '#fafafa',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img src={country.flag} alt={`${country.name} Flag`} style={{ width: '65px', height: '40px', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 0 6px rgba(67,172,233,0.4)', marginBottom: '8px' }} />
                  <span style={{ fontWeight: '700', fontSize: '1rem', color: '#2C3E50', whiteSpace: 'nowrap' }}>{country.name}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
