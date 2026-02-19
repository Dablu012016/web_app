import React, { useState } from 'react';
import axios from "axios";


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser(prev => {
      const updated = { ...prev, [name]: value };
      return updated;
    });

  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );

      const data = response.data;
     
      localStorage.setItem("token", data.token);

      alert("Registration Successful");

   
      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.message ||
        "Registration failed "
      );
    }
  };

  return (
    <>
      <section className='bg-neutral-900 text-white md:h-235'>
        <main>
          <div className='max-w-3/4 mx-auto'>
            <div className='grid md:grid-cols-2 items-center'>

              <div className='p-5'>
                <img src="/images/register.png" alt="A girl is trying to do Registration." height={500} width={500} />
              </div>

              <div className=' p-6  mt-5'>
                <h1 className='text-5xl font-bold p-5 text-blue-800 text-center'>Registration Form</h1>
                <br />

                <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 text-2xl font-medium'>
                  <div className=''>
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      name='username'
                      placeholder='Enter your name'
                      id='username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                      className='w-full mt-3 border border-black  py-3 px-2 rounded-md bg-neutral-600'
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email: </label>
                    <input
                      type="email"
                      name='email'
                      placeholder='Enter your email'
                      id='email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                      className=' w-full mt-3  border border-black  py-3 px-2 rounded-md bg-neutral-600'
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                      type="text"
                      name='phone'
                      placeholder='Enter your number'
                      id='phone'
                      required
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInput}
                      className='w-full mt-3  border border-black  py-3 px-2 rounded-md bg-neutral-600'
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password: </label>
                    <input
                      type="password"
                      name='password'
                      placeholder='Enter your password'
                      id='password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                      className='w-full mt-3  border border-black  py-3 px-2 rounded-md bg-neutral-600'
                    />
                  </div>

                  <br />

                  <button type='submit' className='bg-blue-800 text-white py-3 px-5 rounded-lg text-2xl font-medium max-w-1/2 hover:bg-blue-400' >Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;
