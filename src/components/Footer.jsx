import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className="footer bg-slate-950 text-white py-10">
        <div className="mx-auto px-6 md:px-20 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
            <div className="flex-1 -mt-6">
              <div className="hncheese italic">
                <h1 className="text-xl font-bold mb-2">
                  H.N <span className="text-orange-500">Cheese</span>
                </h1>
                <p className="text-[13px] md:text-[15px] text-slate-400">
                  Our company is very responsible for the quality of the materials for the products. 
                  We also always do development and evaluation of customer reviews.
                </p>
              </div>
            </div>
            <div className="flex-1 -mt-6">
              <div className="address italic">
                <h1 className="text-xl font-medium mb-2">Address</h1>
                <p className="text-[13px] md:text-[15px] text-slate-400">
                  Jl. Kp Kandang, Curug Wetan, Kec. Curug, Kab. Tangerang-Banten 15810
                </p>
              </div>
            </div>
            <div className="flex-1 -mt-6">
              <div className="order italic mb-6">
                <h1 className="text-xl font-medium mb-2">Order</h1>
                <p className="text-[13px] md:text-[15px] text-slate-400">
                  You can contact our available social media.
                </p>
              </div>
              <div className="medsos italic flex gap-4">
                <a href="https://www.instagram.com/hncheese">
                  <FontAwesomeIcon icon={faSquareInstagram} className="text-[30px] md:text-[27px] hover:scale-110 transition-all text-slate-300" />
                </a>
                <a href="https://www.tiktok.com/@hncheese_">
                  <FontAwesomeIcon icon={faTiktok} className="text-[25px] md:text-[25px] hover:scale-110 transition-all text-slate-300" />
                </a>
              </div>
            </div>
            <div className="flex-1 -mt-6">
              <div className="resources italic mb-6">
                <h1 className="text-xl font-medium mb-2">Resources</h1>
                <p className="text-[13px] md:text-[15px] text-slate-400">
                  - ReactJs <br />
                  - TailwindCss
                </p>
              </div>
            </div>
            <div className="flex-1 -mt-10 md:mt-0">
              <h1 className='text-2xl md:text-4xl text-slate-200 font-["BadScript"] italic'>Taste The Love In <span className='text-orange-500'>Every Bite</span></h1>
            </div>
          </div>
          <div className="text-center mt-8 text-slate-300">
            <h1>
              MHA - NT || © 2025 H.N Cheese || All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
