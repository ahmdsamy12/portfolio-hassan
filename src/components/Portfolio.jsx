import { cards } from "../constants";
import Underline from "../images/Underline_06.png";

const Portfolio = () => {
  return (
    <div className="port mt-2">
      <h2 className=" relative text-[64px] pl-10 bg-gradient-to-r from-[#B224EF]  to-[#7579FF] inline-block text-transparent bg-clip-text font-semibold">
        Portfolio
        <img
          src={Underline}
          alt="underline"
          className="absolute top-20 right-0"
        />
      </h2>
      <div className="port-content mt-5 grid min-[1120px]:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-10 mb-10">
        {cards.map((card) => (
          <div
            className="portcard shadow-2xl p-10 rounded-2xl w-[318px] h-[220px] bg-white relative flex flex-col justify-center items-center mt-44 max-sm:w-full"
            key={card.title}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute max-sm:w-full max-sm:pr-10 top-[-100px] max-w-full left-0 w-[280px] pl-10 h-[218px] flex justify-center items-center rounded-xl"
            />
            <div className="text-card mt-24">
              <h3 className="bg-gradient-to-r from-[#B224EF]  to-[#7579FF] inline-block text-transparent bg-clip-text text-[24px]">
                {card.title}
              </h3>
              <p className="text-[#5F6073] text-[14px]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
