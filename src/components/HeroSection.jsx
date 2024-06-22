import img1 from "../images/Highlight_05.png";
import img2 from "../images/arrow-circle-right.png";
import img3 from "../images/Arrow_01.png";
import img4 from "../images/Allura UI Windows.png";
import img5 from "../images/dots.png";

const HeroSection = () => {
  return (
    <div className="hero mt-20 relative">
      <div className="hero-content flex items-center">
        <div className="hero-text md:w-[661px] w-[648px] relative">
          <div className="text-info relative">
            <h1 className="font-semibold text-[#1B1C37] md:text-[94px] text-[50px] max-md:w-[90%]">
              Hi, I am Hassan <span className="text-[65px]">🎨</span>
            </h1>
            <img
              src={img1}
              alt="image-h1"
              className="absolute top-0 md:right-24 right-14 max-md:w-[60px] max-md:right-[7rem] max-md:top-[-15px]"
            />
          </div>

          <div className="text-para">
            <p className="text-[14px] text-black mt-8 w-[375px] max-md:w-full">
              I am a UI/UX Designer, I like to make interfaces simple and
              aesthetically pleasing for users; The idea is not to create an
              interface for creating it, it is that users prefer you because
              your product is easy to use.
            </p>
            <button className="px-7 py-4  text-white flex gap-1 rounded-lg mt-8 bg-gradient-to-r from-[#B224EF] to-[#7579FF]">
              Contact Me!
              <img src={img2} alt="image-arrow" />
            </button>
          </div>
          <img
            src={img3}
            alt="big-arrow"
            className="absolute -bottom-20 right-0 w-[187px] max-md:right-[-10px]"
          />
        </div>
        <div className="hero-img hidden min-[850px]:flex">
          <img src={img4} alt="hero-image" />
        </div>
      </div>
      <img
        src={img5}
        alt="dots"
        className="hidden md:flex absolute top-0 right-[-100px]"
      />
      <img
        src={img5}
        alt="dots"
        className="hidden md:flex absolute bottom-0 left-[-100px] "
      />
    </div>
  );
};

export default HeroSection;
