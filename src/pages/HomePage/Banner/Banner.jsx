import bg from "../../../assets/headerNew.jpg";
import PrimaryButton from "../../../components/PrimaryButton";
import heroVector from "../../../assets/hero-vector.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen grid md:grid-cols-2"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-span-1 md:col-span-1 px-4 md:px-16 py-4 md:py-16 flex flex-col justify-center">
        {/* Content for the first column */}
        <div className="relative text-white text-5xl md:mt-16">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Elevate Your Digital Presence with Us
          </h1>
          <p className="text-sm text-secondary">
            Transform your ideas into reality and redefine the digital
            experience with our expertise.
          </p>
          <div className="mt-4">
            <PrimaryButton label={"Get Started"}></PrimaryButton>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                Explore Solutions
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 md:flex justify-center items-center hidden">
        <img src={heroVector} alt="" className="w-2/3" />
      </div>
    </div>
  );
};

export default Banner;
