import React from 'react';
import { useAuth } from '../store/auth';

const Services = () => {
  const { services } = useAuth();

  return (
    <>
      <section className='bg-neutral-900 text-white '>

        <div className='max-w-3/4 mx-auto p-6'>
          <h1 className='text-6xl font-bold'>Service</h1>
          <div className='grid md:grid-cols-3 gap-12 p-5 mt-8'>
            {
              services.map((curElm, index) => {
                const { description, prices, service, provider } = curElm;
                return (

                  <div key={index} className=' p-8 m-5 shadow-xl/30 shadow-white rounded-md'>
                    <div className='items-center'>
                      <img src="images/services.png" alt="service image" height={250} width={250} />
                    </div>
                    <div>
                      <div className='flex justify-between text-blue-700'>
                        <p>{provider}</p>
                        <p>{prices}</p>
                      </div>
                      <h1 className='text-4xl font-medium py-5'>{service}</h1>
                      <p className='text-2xl font-normal'>{description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>
      </section>

    </>
  );
}

export default Services;
