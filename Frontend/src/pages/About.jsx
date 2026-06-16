import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {
  const [userData, setUserData] = useState(true);
  const [name, setName] = useState("");
    const { user } = useAuth();
  
    if (userData && user) {
      setName({
        username: user.username,
      });
      setUserData(false)
    }
  return (
    <>
      <section className="bg-neutral-900 text-white md:h-235 pb-4">
        <div className="max-w-3/4 mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-8 justify-center md:w-3xl px-4">
              <p className='font-medium md:text-2xl text-1xl mb-0 mt-5 text-gray-300'>Welcome, WeAnalyz Technical <span className="text-5xl capitalize text-blue-700 font-medium"> {name.username} </span></p>
              <h1 className='text-6xl font-bold'>Why Choose Us?</h1>
              <p className='text-1xl font-normal text-gray-400'>Expertise: Our team consist of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
              <p className='text-1xl font-normal text-gray-400'>Customerization: We understand that every bussiness is unique. That`s why we create solutions that are tallord to your specific needs and gols.</p>
              <p className='text-1xl font-normal text-gray-400'>Customer-Centric Approach: We priaritize your satisfaction and provide top-match support to adress your IT Comapny.</p>
              <p className='text-1xl font-normal text-gray-400'>Affordability: We offer competative pricing without compromizing on the quality of our services.</p>
              <p className='text-1xl font-normal text-gray-400'>Relability: Count on uis to be there when you need us. Where commited to ensuring your IT enviroment is reliable and available 24/7.</p>
              <div className="flex gap-6">
                <NavLink to='/contact'>                <button className="bg-blue-800 px-6 py-2 rounded hover:bg-blue-700 cursor-pointer text-2xl">Contact Now</button>
                </NavLink>
                <NavLink to='/services'>
                  <button className="border-2 border-blue-700 rounded px-6 py-2 hover:bg-blue-700 cursor-pointer text-2xl">Learn More</button>

                </NavLink>
              </div>
            </div>
            <div className='flex justify-center text-center md:p-5 md:m-5 mt-3'>
              <img src="/images/about.png" height={400} width={400} alt="About Images" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

