import banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
       <section className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-10">

        {/* Left Content */}
        <div className="space-y-5">
          <h1 className="text-6xl font-extrabold">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 
                  bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 font-medium">
            Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that <br />
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn
                    bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 
                    font-medium text-white">Explore Technologies
            </button>
            <button className="btn font-medium text-gray-500">Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={banner}
            alt="banner-stack"
            className="w-full max-w-[400px] "
          />
        </div>

      </div>
    </section>
    );
};

export default Hero;