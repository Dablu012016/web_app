import { NavLink } from "react-router-dom";

const Home = () => {
  return (

    <>
      <section className='bg-neutral-900 text-white'>
        <div className='max-w-3/4 mx-auto '>
          <div className='grid md:grid-cols-2 gap-12 '>
            <div className='flex flex-col gap-4 justify-center'>
              <small className='font-medium md:text-2xl text-1xl mb-0 mt-5 text-gray-300'>We are the World Best IT Company</small>
              <h1 className='text-6xl font-bold'>Welcome to <span className='text-blue-800'>WeAnalyz </span>Techhnical</h1>
              <p className='text-1xl font-normal text-gray-400'>Are you ready to take your bussiness to the next level with cutting-edge IT solution? Look no further! At WeAnalyz Technical. We specialize in providing innovative IT services and solutions tallered to meet your unique needs.</p>
              <div className="flex gap-6">
                <NavLink to='/contact'>            
                    <button className="bg-blue-800 px-6 py-2 rounded hover:bg-blue-700 cursor-pointer text-2xl">Contact Now</button>
                </NavLink>
                <NavLink to='/services'>
                  <button className="border-2 border-blue-700 rounded px-6 py-2 hover:bg-blue-700 cursor-pointer text-2xl">Learn More</button>
                </NavLink>
              </div>
            </div>
            <div className='flex justify-center text-center md:p-5 md:m-5'>
              <img src="/images/home.png" alt="" height={400} width={400} />
            </div>
          </div>
        </div>

        <div className="max-w-3/4 mx-auto bg-white text-black rounded-lg ">
          <div className="md:flex justify-around py-4">
            <div className="text-3xl font-medium md:border-r  p-4 text-center md:w-2xl">
              <h2 className="text-4xl font-bold">50+</h2>
              <p>Registered Companies</p>
            </div>
            <div className="text-3xl font-medium md:border-r  p-4  text-center md:w-2xl">
              <h2 className="text-4xl font-bold">100,00+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="text-3xl font-medium md:border-r p-4  md:w-2xl text-center">
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Well Know Developers</p>
            </div>
            <div className="text-3xl md:w-2xl font-medium  p-4 text-center">
              <h2 className="text-4xl font-bold">24/7</h2>
              <p>Services</p>
            </div>
          </div>
        </div>

        <div className="max-w-3/4 mx-auto mt-8 p-5">
          <div className="grid md:grid-cols-2 ">
            <div>
              <img src="/images/design.png" alt="design image" height={400} width={400} />
            </div>
            <div className='flex flex-col gap-6 justify-center'>
              <small className='font-medium md:text-2xl text-1xl mb-0 mt-5 text-gray-300'>We are here to help you</small>
              <h1 className='text-6xl font-bold mt-0'>Get Started Today</h1>
              <p className='text-1xl font-normal text-gray-400'>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let`s discus how WeAnalyz can help your bussiness thrive in the digital age.</p>
              <div className="flex gap-6">
                <NavLink to='/contact'>             
                   <button className="bg-blue-800 px-6 py-2 rounded hover:bg-blue-700 cursor-pointer text-2xl">Contact Now</button>
                </NavLink>
                <NavLink to='/services'>
                  <button className="border-2 border-blue-700 rounded px-6 py-2 hover:bg-blue-700 cursor-pointer text-2xl">Learn More</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Home;
