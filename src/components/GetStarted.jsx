import styles from "../style";
// import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} cursor-pointer`}>
    <div className={`${styles.flexStart} flex-row`}>
      {/* <p className="font-poppins font-medium text-[100px] leading-[23.4px]">
        <span className="text-gradient">Negócios.com</span>
      </p> */}
      {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
    </div>

    {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
      <span className="text-gradient">Parte</span>
    </p> */}
  </div>
);

export default GetStarted;
