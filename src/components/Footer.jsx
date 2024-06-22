import face from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twit from "../images/twitter.png";
import insta from "../images/instagram.png";
import four from "../images/Patron de Puntos (4).png";
import five from "../images/Patron de Puntos (5).png";

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center flex-col bg-[#EDEEFF] p-10 rounded-tl-[50px]  relative">
      <div className="icons flex items-center justify-center gap-10 mb-10 max-sm:gap-3 max-sm:mb-5">
        <img src={insta} alt="insta" />
        <img src={face} alt="face" />
        <img src={linkedin} alt="linkedin" />
        <img src={twit} alt="twitter" />
      </div>
      <p className="text-[18px] text-[#5F6073]">Hassan Abu Ali © 2022</p>
      <img
        src={four}
        alt="four"
        className="absolute bottom-0 left-0 max-sm:w-[50px]"
      />
      <img
        src={five}
        alt="five"
        className="absolute top-10 right-0 max-sm:w-[40px]"
      />
    </div>
  );
};

export default Footer;
