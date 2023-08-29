import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
        <div className="home__row">
            <Product id='1' title="Noise Pulse 2 Max 1.85'' Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)" price={1499} image={"https://m.media-amazon.com/images/I/41UoKKWuxjL._SX300_SY300_QL70_FMwebp_.jpg"} rating={5}/>
            <Product id='2' title="Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin & Light (16GB/512GB SSD/Iris Xe Graphics/15.6'' 3.2K Resolution/Win 11/Thunderbolt 4/MS Office '21/Fingerprint Sensor/1.7 Kg)"
            price={48999} image={"https://m.media-amazon.com/images/I/710aJMxsUXL._SX522_.jpg"} rating={4}/>
            {/* product */}
        </div>
        <div className="home__row">
            <Product id='3' title="rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)" price={587} image={"https://m.media-amazon.com/images/I/611RCy1XjsL._SY679_.jpg"} rating={4}/>
            <Product id='4' title="Red Chief Leather Derby Black Formal Shoe for Mens" price={2294} image={"https://m.media-amazon.com/images/I/81k99-CSpXL._UX695_.jpg"} rating={4}/>
            <Product id='5' title="Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things [Paperback] Foroux, Darius Paperback – 27 October 2020" image={"https://m.media-amazon.com/images/I/41W-o6xu2bL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"} price={127} rating={3}/>
             {/* product */}
             {/* product */}
             {/* product */}
            
        </div>
        <div className="home__row">
            <Product id='6' title="ZEBRONICS AC32FHD LED Curved 75Hz 80Cm (32'') (81.28 Cm) 1920x1080 Pixels FHD Resolution Monitor with HDMI + VGA Dual Input, Built-in Speaker, Max 250 Nits Brightness, Black" price={12999} image={"https://m.media-amazon.com/images/I/813Y1TIZwfL._SX522_.jpg"} rating={5}/>
             {/* product */}
            
            
        </div>
            
        </div>
      
    </div>
  )
}

export default Home
