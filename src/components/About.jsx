import leftImage from "../images/Icono.png";
import centerImage from "../images/Group 27.png";
import rightImage from "../images/calendar-tick.png";
import dots from "../images/dots2.png";
import dots2 from "../images/Highlight_04.png";
import dots3 from "../images/Patron de Puntos (3).png";

const About = () => {
  return (
    <div className=" relative about mt-36 bg-about bg-cover h-[750px] flex flex-col justify-center items-center before:w-full before:h-full before:absolute before:bg-aboutBG before:bg-cover">
      <h3 className="absolute top-12 text-white font-semibold ">About Me</h3>

      <div className="banner relative flex items-center gap-4 justify-center w-[80%] h-[30%] bg-white rounded-xl">
        <div className="left flex justify-end items-center flex-col w-[35%]">
          <img src={leftImage} alt="left" />
          <h4 className="font-black">100%</h4>
          <p className="text-[#5F6073]">Responsibility</p>
        </div>
        <div className="center w-[250px] h-full flex justify-center items-center">
          <img
            src={centerImage}
            alt="center"
            className="w-[424px] h-[443px] absolute top-[-150px] max-sm:w-[180px]"
          />
        </div>
        <div className="right w-[35%] flex justify-start items-center flex-col">
          <img src={rightImage} alt="right" />
          <h4 className="font-black">100%</h4>
          <p className="text-[#5F6073]">Puntuality</p>
        </div>
      </div>
      <img
        src={dots}
        alt=""
        className="absolute top-[20%] left-0 max-sm:w-[50px]"
      />
      <img
        src={dots2}
        alt=""
        className="absolute top-[10%] right-0 max-sm:w-[50px]"
      />
      <img
        src={dots3}
        alt=""
        className="absolute bottom-[20%] right-0 max-sm:w-[50px]"
      />
    </div>
  );
};

export default About;
