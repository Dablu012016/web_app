import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
   username: "",
    email: "",
    message: "",
}
const Contact = () => {
  const [contact, setContact] = useState({ defaultContactFormData});
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://web-app-8sy8.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(contact)

      });

      if (response.ok) {
        setContact(defaultContactFormData);
        alert("message sent successfully");
      }

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <>
      <section className='bg-neutral-900 text-white '>
        <div className='max-w-3/4 mx-auto'>
          <div className='grid md:grid-cols-2 p-5'>
            <div className="p-5 m-5">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <img src="/images/support.png" alt="Support png" height={400} width={400} />
            </div>
            <div className='p-6 rounded-lg m-5'>
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
                    value={contact.username}
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
                    value={contact.email}
                    onChange={handleInput}
                    className=' w-full mt-3  border border-black  py-3 px-2 rounded-md bg-neutral-600'
                  />
                </div>
                <div>
                  <label htmlFor="message">Message: </label>
                  <textarea
                    rows={6}
                    cols={30}
                    type="text"
                    name='message'
                    placeholder='Enter your message'
                    id='message'
                    required
                    autoComplete='off'
                    value={contact.message}
                    onChange={handleInput}
                    className='w-full mt-3  border border-black  py-3 px-2 rounded-md bg-neutral-600'
                  />
                </div>
                <br />

                <button type='submit' className='bg-blue-800 text-white py-3 px-5 rounded-lg text-2xl font-medium max-w-1/2 hover:bg-blue-600' >Submit</button>

              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86724361168!2d85.06064087374845!3d25.608169162910194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1771485481697!5m2!1sen!2sin" width="1510" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
}

export default Contact;
