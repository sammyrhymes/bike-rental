import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

const Footer = () => {
    return (
        <footer className="absolute  inset-x-0 bg-highlight text-primary mt-4  ">
            <div className="container max-w-[1000px] mx-auto p-4 ">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0">
                        <Link className='text-xl font-bold' to="/">
                            Logo
                            {/* <img src="/path/to/logo.png" alt="Logo" className="h-12" /> */}
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div>
                    <h3 className="text-lg font-semibold my-2 md:mt-0 md:mb-2">Quick Links</h3>
                    <div className="flex flex-col gap-2">
                        <Link to="/about" className=" hover:underline">About Us</Link>
                        <Link to="/services" className="hover:underline">Services</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                    </div>
                    </div>

                    {/* Feedback Form */}
                    <div>
                        <h3 className="text-lg font-semibold my-2 md:mt-0 md:mb-2">Feedback</h3>
                        <form action="/submit-feedback" method="POST" className="flex flex-col">
                            <input className='p-2 mb-2 rounded' type="email" placeholder='example@email.com' />
                            <textarea
                                className="mb-2 p-2 h-16 border border-gray-600 rounded"
                                placeholder="Your feedback..."
                                rows="4"
                                required
                            />
                            <button type="submit" className="bg-accent transition duration-500 hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 text-center">
                    <p>&copy; 2024 Bike Rental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
