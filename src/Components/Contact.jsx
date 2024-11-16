const Contact = () => {
    return (
        <div className="text-white px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center my-12 py-12">
            <h1 className="m-4 p-4 text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                Contact Me
            </h1>
            <p className="text-base md:text-lg px-4 md:px-16 lg:px-40 text-center text-gray-200">
                I am actively seeking new career opportunities, and my inbox is always open. Whether you have a job opportunity or if you just want to connect, feel free to reach out.
            </p>
            <a href="mailto:tanishqsethi05@gmail.com?subject=Contact%20Request&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%0D%0A%0D%0AThank%20you!">
                <button className="transition ease-in-out bg-black bg-opacity-40 border-2 border-amber-500 my-8 py-3 px-6 md:py-4 md:px-8 text-amber-500 rounded-xl hover:bg-amber-500 hover:text-white">
                    Contact Me!
                </button>
            </a>
        </div>
    );
};
export default Contact;
