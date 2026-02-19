import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <section className='bg-neutral-900 text-white h-screen'>
                <div className='max-w-3/4 mx-auto p-8'>
                    <div className='flex flex-col gap-8 text-center justify-center md:w-4xl mx-auto'>
                        <h1 className='text-9xl font-bold'>404</h1>
                        <h2 className='text-4xl font-medium'>Sorry! Page not found</h2>
                        <p className='text-2xl font-normal'>Oops! It seems like the page you`re trying to access doesn`t exist. If you believe there`s an issue, feel free to report it, and we will look into it</p>
                        <div>
                            <NavLink to="/">
                                <button type='submit' className='bg-blue-800 text-white py-3 px-5 rounded-lg text-2xl font-medium hover:bg-blue-600' >Return Home</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button type='submit' className='border border-blue-800 text-white py-3 px-5 md:ms-6 rounded-lg text-2xl font-medium hover:bg-blue-600' >Report Problem</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Error404;
