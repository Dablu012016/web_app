import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://web-app-8sy8.onrender.com/api/auth/login",
        user
      );

      // console.log(data.token)

      alert("Login Successful");

      const data = response.data;

      storeTokenInLS(data.token);

      setUser({
        email: "",
        password: "",
      });

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.message ||
        "login failed "
      );
    }
  };
  return (
    <>
      <section className='bg-neutral-900 text-white md:h-235'>
        <div className='max-w-3/4 mx-auto'>
          <div className='grid md:grid-cols-2 items-center'>

            <div className='p-5 mt-5'>
              <img src="/images/login.png" alt="A boy is trying to do Login." height={400} width={400} />
            </div>

            <div className=' p-6 rounded-lg mt-5'>
              <h1 className='text-5xl font-bold p-5 text-blue-800 text-center'>LogIn Form</h1>
              <br />

              <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 text-2xl font-medium'>

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
                <button type='submit' className='bg-blue-800 text-white py-3 px-5 rounded-lg text-2xl font-medium md:max-w-1/3 hover:bg-blue-600' >LogIn Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
