import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Counter = ({ target, duration, id }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
  
    useEffect(() => {
      const element = document.getElementById(id)
  
      if (!element) return
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounting()
            setHasAnimated(true)
          }
        },
        { threshold: 0.5 }
      )
  
      observer.observe(element)
  
      return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAnimated, id])  // aman: id bisa ganti, hasAnimated untuk lock sekali jalan.
  
    const startCounting = () => {
      let start = 0
      const end = parseInt(target)
      const incrementTime = Math.floor(duration / end)
  
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)
    }
  
    return (
      <span id={id}>
        {count}{target.toString().includes('+') && '+'}
      </span>
    )
  }
  
const HomePage = () => {
  return (
    <div className="homePage" id='home'>
        {/* Hero */}
        <div className="hero md:min-h-screen h-[650px] md:pt-[23%] pt-[60%]">
            <div className="title mb-4 md:mb-8 font-['badscript'] italic text-center px-10">
                <h1 className='text-4xl md:text-7xl' data-aos='zoom-in' data-aos-duration="1000">Taste The Love In <span className='text-orange-500'>Every Bite</span></h1>
            </div>
            <div className="content font-['inter']">
                <p className='text-[10px] md:text-sm md:w-1/2 w-3/4 text-center font-extralight' data-aos='zoom-in' data-aos-duration="1000">Enjoy special moments with our selected desserts, made from high-quality ingredients and processed with love. We present every layer of flavor to pamper your tongue, starting from the soft texture, tempting aroma, to the right sweetness in every bite. With affordable prices and comparable taste, it is suitable to be enjoyed alone, shared with family, or as a complement to your special moments.</p>
            </div>
        </div>
        {/* About */}
        <div className="about py-10" id='about'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                {/* Title Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left" data-aos='fade-right' data-aos-duration="1000">
                        <h1 className="font-['BadScript'] italic text-4xl md:text-5xl">About <span className='text-orange-500'>H.N Cheese</span></h1>
                        <p className="italic mt-4 text-gray-600 text-[11px] md:text-sm font-['inter'] font-light">
                        H.N Cheese is a business engaged in the dessert sector, established since 2024 with a commitment to presenting a sweet taste that pampers every tongue. We always prioritize the quality of raw materials, from high-quality cheese to other supporting ingredients that are fresh and guaranteed quality.
                        <br /> <br />
                        Our dedication to quality is what makes every hncheese product not only delicious, but also safe and satisfying for dessert lovers. With a price that is comparable to the quality of taste and ingredients we use, hncheese is ready to be your favorite choice to enjoy sweet moments with family, friends, or at every special celebration.
                        </p>
                        <div className="medsos mt-5">
                            <a href="https://www.instagram.com/hncheese"><FontAwesomeIcon icon={faSquareInstagram} className='text-[23px] md:text-[27px] hover:scale-110 transition-all' /></a>
                            <a href="" className='mx-2'></a>
                            <a href="https://www.tiktok.com/@hncheese_"><FontAwesomeIcon icon={faTiktok} className='text-[20px] md:text-[25px] hover:scale-110 transition-all' /></a>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 -mt-14" data-aos='fade-left' data-aos-duration="1500">
                        <img src="src/assets/hncheeseLogo.png" alt="About Us" className="md:ms-auto rounded-lg md:mt-20" />
                    </div>
                </div>
            </div>
        </div>
        {/* Paralax */}
        <div className="paralax bg-fixed bg-slate-500 h-96 flex items-center justify-center">
            <div className="flex flex-col md:flex-row md:justify-evenly text-white font-light text-center w-full z-10" data-aos='fade-up' data-aos-duration="2000">
                <div className="project m-4">
                    <p className='text-3xl md:text-7xl'><Counter id="project-counter" target="125+" duration={2000} /></p>
                    <p className='text-sm md:text-md md:mt-3'>Complete Project</p>
                </div>
                <div className="trusted m-4">
                    <p className='text-3xl md:text-7xl'><Counter id="client-counter" target="100+" duration={2000} /></p>
                    <p className='text-sm md:text-md md:mt-3'>Trusted Client</p>
                </div>
                <div className="years m-4">
                    <p className='text-3xl md:text-7xl'><Counter id="years-counter" target="2" duration={1000} /></p>
                    <p className='text-sm md:text-md md:mt-3'>Years Experience</p>
                </div>
                <div className="professional m-4">
                    <p className='text-3xl md:text-7xl'><Counter id="experts-counter" target="10" duration={1000} /></p>
                    <p className='text-sm md:text-md md:mt-3'>Professional & Experts</p>
                </div>
            </div>
        </div>
        {/* Menu */}
        <div className="menu pt-10 md:mt-8" id='menu'>
            <div className="container mx-auto">
                <div className="title" data-aos='fade-down' data-aos-duration="1000">
                    <h1 className="font-['BadScript'] italic text-4xl md:text-5xl text-center">Our <span className='text-orange-500'>Menu</span></h1>
                    <p className="italic mt-1 text-[18px] md:text-xl font-['BadScript'] font-bold text-center  ">Spesial Taste</p>
                </div>
                <div className="content mx-auto md:mt-5">
                    <div className="flex flex-wrap md:flex-nowrap text-center gap-4 p-4 md:p-8" data-aos='fade-up' data-aos-duration="1000">
                        <div className="card mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/burnt2.jpeg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Burnt Cheesecake Brownies</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size 20 x 10</p>
                            </div>
                        </div>
                        <div className="card md:mx-8 mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/brownies3.jpeg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Fugdy Brownies</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size 20 x 10, - 20 x 20, - 20 x 25</p>
                            </div>
                        </div>
                        <div className="card mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/browbite2.jpeg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Brownies Bites</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size Normal</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap text-center gap-4 p-4 md:p-8" data-aos='fade-up' data-aos-duration="1000">
                        <div className="card mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/normal1.jpg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Cheesecuit</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size 300 ml</p>
                            </div>
                        </div>
                        <div className="card md:mx-8 mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/mini1.jpeg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Cheesecuit Mini</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size 200 ml</p>
                            </div>
                        </div>
                        <div className="card mx-auto">
                            <div className="overflow-hidden w-72 h-64 md:w-96 md:h-80 rounded-md mx-auto">
                                <img 
                                    src="src/assets/mix1.jpeg" 
                                    alt="Product 1" 
                                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic">Cheesecuit Mix</h2>
                                <p className="card-text font-['BadScript'] font-medium text-slate-800 italic">Size 300 ml</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Information */}
        <div className="information pt-10 h-full bg-slate-50" id='information'>
            <div className="title" data-aos='fade-right' data-aos-duration="1000">
                <h1 className="font-['BadScript'] italic text-2xl md:text-4xl text-left md:mx-20 mx-6">
                What's That ?</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 mt-10 md:mx-20 pb-24">
                <div className="card mx-auto" data-aos='fade-up' data-aos-duration="1000">
                    <div className="card-body text-center w-80">
                        <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic mb-2">Burnt Cheesecake Brownies</h2>
                        <p className="card-text font-['BadScript'] font-medium text-slate-800 md:text-md ">The combination of grilled cheese from cream cheese and chocolate brownies produces a taste that is sweet, creamy, soft and melts on the tongue.</p>
                    </div>
                </div>
                <div className="card mx-auto" data-aos='fade-up' data-aos-duration="1000">
                    <div className="card-body text-center w-80">
                        <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic mb-2">Fudgy Brownies</h2>
                        <p className="card-text font-['BadScript'] md:text-md font-medium text-slate-800 ">Brownies that have a soft, dense texture, and a sweet and crunchy chocolate taste create an interesting combination of flavors on the tongue</p>
                    </div>
                </div>
                <div className="card mx-auto" data-aos='fade-up' data-aos-duration="1000">
                    <div className="card-body text-center w-80">
                        <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic mb-2">Brownies Bites</h2>
                        <p className="card-text font-['BadScript'] md:text-md font-medium text-slate-800 ">Fudgy brownies cut into small pieces with the same taste make brownie bites suitable for a special snack</p>
                    </div>
                </div>
                <div className="card mx-auto" data-aos='fade-up' data-aos-duration="1000">
                    <div className="card-body text-center w-80">
                        <h2 className="card-title md:text-xl text-lg font-['BadScript'] text-orange-800 font-bold mt-4 italic mb-2">Cheesecuit</h2>
                        <p className="card-text font-['BadScript'] md:text-md font-medium text-slate-800">Combination of cheese and biscuits that creates a crunchy sensation from the biscuits and a creamy sensation from the cheese, as well as a sweet taste from various toppings</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Cheesecuit */}
        <div className="cheesecuit pt-16 mb-20" id='cheesecuit'>
            <div className="title -mb-14" data-aos='fade-left' data-aos-duration="1000">
                <h1 className="font-['BadScript'] italic text-lg md:text-2xl text-right md:mx-20 mx-6">
                You Can Enjoy Various <span className='text-orange-500'>Special Flavors!</span></h1>
            </div>
            <div className="content">
                <div className="columns gap-1 md:gap-1 sm:columns-2 md:columns-5 [&>img:not(:first-child)]:mt-0 md:[&>img:not(:first-child)]:mt-1 md:mx-28 mx-20">
                    <div className="overflow-hidden" data-aos='zoom-in' data-aos-duration="2000">
                        <img src="src/assets/coklat.png" alt="" className="transition-transform duration-500 hover:scale-110"/>
                        <p className="text-center font-['BadScript'] text-2xl md:text-3xl italic">Chocolate</p>
                    </div>
                    <div className="overflow-hidden -mt-14" data-aos='zoom-in' data-aos-duration="2000">
                        <img src="src/assets/oreo.png" alt="" className="transition-transform duration-500 hover:scale-110"/>
                        <p className="text-center font-['BadScript'] text-2xl md:text-3xl italic ">Oreo</p>
                    </div>
                    <div className="overflow-hidden -mt-14" data-aos='zoom-in' data-aos-duration="2000">
                        <img src="src/assets/tiramisu.png" alt="" className="transition-transform duration-500 hover:scale-110"/>
                        <p className="text-center font-['BadScript'] text-2xl md:text-3xl italic">Tiramisu</p>
                    </div>
                    <div className="overflow-hidden -mt-14" data-aos='zoom-in' data-aos-duration="2000">
                        <img src="src/assets/matcha.png" alt="" className="transition-transform duration-500 hover:scale-110"/>
                        <p className="text-center font-['BadScript'] text-2xl md:text-3xl italic">Matcha</p>
                    </div>
                    <div className="overflow-hidden -mt-14" data-aos='zoom-in' data-aos-duration="2000">
                        <img src="src/assets/redvelvet.png" alt="" className="transition-transform duration-500 hover:scale-110"/>
                        <p className="text-center font-['BadScript'] text-2xl md:text-3xl italic">Red Velvet</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Testimony */}
        <div className="testimony pt-10 h-full bg-slate-50" id='testimony'>
            <div className="title" data-aos='fade-right' data-aos-duration="1000">
                <h1 className="font-['BadScript'] italic text-2xl md:text-4xl text-left md:mx-20 mx-6">
                    What They Say
                </h1>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:mx-20 mt-10 mx-10 md:mt-16 pb-10"  data-aos='fade-right' data-aos-duration="1000">
                <div className="flex-shrink-0 snap-start w-full md:w-1/3 text-center">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="src/assets/1.png"
                            className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                            alt="Anna Morian"
                        />
                    </div>
                    <p className="my-4 text-md md:text-lg text-black italic">
                        "The combination of flavors from each H.N Cheese menu is amazing. It spoils my tongue and makes me want to try again!"
                    </p>
                    <p className="italic">- Customer</p>
                </div>

                <div className="flex-shrink-0 snap-start w-full md:w-1/3 text-center">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="src/assets/2.png"
                            className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                            alt="Teresa May"
                        />
                    </div>
                    <p className="my-4 text-md md:text-lg text-black italic">
                        "All the menus have a delicious and tasty taste. The sweet, soft, and creamy taste makes a perfect combination of flavors. I will never forget that taste!"
                    </p>
                    <p className="italic">- Customer</p>
                </div>

                <div className="flex-shrink-0 snap-start md:mt-2 w-full md:w-1/3 text-center">
                    <div className="mb-6 flex justify-center">
                        <img
                             src="src/assets/3.png"
                            className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                            alt="Teresa May"
                        />
                    </div>
                    <p className="my-4 text-md md:text-lg text-black italic">
                        "Delicious taste, nice packaging, and good service make H.N Cheese a customer favorite to try their choice of dessert!"
                    </p>
                    <p className="italic">- Customer</p>
                </div>
                <div className="flex-shrink-0 md:mt-2 snap-start w-full md:w-1/3 text-center">
                    <div className="mb-6 flex justify-center">
                        <img
                             src="src/assets/4.png"
                            className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                            alt="Teresa May"
                        />
                    </div>
                    <p className="my-4 text-md md:text-lg text-black italic">
                       "I felt something extraordinary when I bit into it. Something I've never tried before. I really taste the love in every bite."
                    </p>
                    <p className="italic">- Customer</p>
                </div>
            </div>
            <div className="arrow mx-8 md:mx-20 pb-12" data-aos='fade-right' data-aos-duration="1000">
                <a href="https://www.instagram.com/hncheese"> <FontAwesomeIcon icon={faArrowRight} size='2x'/></a>
                <a href="https://www.instagram.com/hncheese"><p className='mt-2 text-[12px] md:text-lg font-["BadScript"] font-extralight italic'>See More? Visit Instagram</p></a>
            </div>
        </div>
         {/* Gallery */}
         <div className="gallery mt-14 md:mt-16" id='gallery'>
            <div className="title" data-aos='fade-up' data-aos-duration="1000">
                <h1 className="font-['BadScript'] italic text-2xl md:text-4xl text-center ">Our <span className='text-orange-500'>Gallery</span></h1>
                <p className="mt-1 text-[14px] md:text-lg text-center font-['BadScript'] font-extralight w-64 md:w-[550px] mx-auto text-slate-500 italic">
                You can see our gallery here. A variety of dessert menus that will captivate your eyes and pamper your tongue.</p>
            </div>
            <div className="columns gap-5 md:gap-1 sm:columns-2 md:columns-4 [&>img:not(:first-child)]:mt-1 md:[&>img:not(:first-child)]:mt-1 mt-10" data-aos='fade-up' data-aos-duration="1000">
                <div className="overflow-hidden">
                    <img src="src/assets/brownies1.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/brownies3.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/burnt2.jpeg" alt="" className="transition-transform duration-500 hover:scale-110 md:h-[465px] md:w-full"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/mini1.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/brownies2.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/mini3.jpeg" alt="" className="transition-transform duration-500 hover:scale-110 md:h-[515px]"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/burnt3.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/burnt4.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/browbite1.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/browbite2.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/burnt1.jpeg" alt="" className="transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="overflow-hidden mt-1">
                    <img src="src/assets/mini2.jpeg" alt="" className="transition-transform duration-500 hover:scale-110 md:h-[490px]"/>
                </div>
            </div>
        </div>
        {/* Contact */}
        <div className="contact bg-slate-50 md:pb-24 pb-16" id='contact'>
            <div className="title md:pt-20 pt-12">
                <h1 className="font-['BadScript'] italic text-3xl md:text-4xl text-center" data-aos='fade-up' data-aos-duration="1000">Contact <span className='text-orange-500'>Us</span></h1>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-24 gap-5">
                    <div className="w-full md:w-1/3" data-aos='fade-right' data-aos-duration="1000">
                        <div className='mt-8'>
                            <h1 className='font-[BadScript] italic text-xl md:text-3xl text-center md:text-left mb-4'>Get In Touch</h1>
                            <p className="mt-1 text-[14px] md:text-lg font-['BadScript'] font-extralight text-center md:text-left w-72 mx-auto md:mx-0 md:w-[500px] text-slate-500 italic">
                            If you have any questions or inquiries, please don't hesitate to contact us. We would be happy to assist you.</p>
                        </div>
                        <div className="mt-8">
                            <h1 className='font-[BadScript] italic text-xl md:text-3xl text-center md:text-left mb-4'>Address</h1>
                            <p className="mt-1 text-[14px] md:text-lg font-['BadScript'] font-extralight text-center md:text-left w-72 mx-auto md:mx-0 md:w-[550px] text-slate-500 italic">
                            Curug Wetan Village <br />Curug District <br />Tangerang Regency - Banten 15810.</p>
                        </div>
                    </div>
                    <div className="w-full mt-3 md:mt-16">
                        <div className="aspect-video" data-aos='fade-left' data-aos-duration="1000">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253823.81119444707!2d106.26162079453125!3d-6.264116799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fdea09eeddf1%3A0x65719edbe636ab7f!2sBadranaya%20Grosir!5e0!3m2!1sid!2sid!4v1745245689139!5m2!1sid!2sid" 
                                className="w-full h-full border-0 rounded-lg"
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
