import { motion } from "framer-motion";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        variants={itemVariants}
      >
        <motion.div
          // className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          variants={itemVariants}
        >
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`text-center ${styles.paragraph} ml-2`}>
            <span className="text-white"> negócios</span>
          </p> */}
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
        </motion.div>

        <motion.div
          className="flex flex-row justify-between items-center w-full"
          variants={itemVariants}
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Garantimos  <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> o Seu Sucesso </span>{" "}
          </h1>
        </motion.div>

        <motion.h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          variants={itemVariants}
        >
          Finaceiro!
        </motion.h1>

        <motion.p
          className="font-poppins text-lg text-white mt-4"
          variants={itemVariants}
        >



          A Negócios.com é uma plataforma líder que conecta empresas, empreendedores e investidores, oferecendo oportunidades de crescimento e colaboração global. Se você procura investimento ou parceiros estratégicos, explore nosso ecossistema digital e descubra como estamos inovando nos negócios online.

        </motion.p>
      </motion.div>

      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        variants={itemVariants}
      >
        <motion.img
          src={robot}
          alt="billing"
          className={`w-[100%] h-[95%] relative z-[5] ${styles.robot}`}
          style={{ borderRadius: '100px' }}
          variants={itemVariants}
        />

        {/* gradient start */}
        <motion.div
          className={`absolute z-[0] w-[40%] h-[35%] top-0 ${styles.pink__gradient}`}
          variants={itemVariants}
        />
        <motion.div
          className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${styles.white__gradient} bottom-40`}
          variants={itemVariants}
        />
        <motion.div
          className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${styles.blue__gradient}`}
          variants={itemVariants}
        />
        {/* gradient end */}
      </motion.div>

      <motion.div className={`ss:hidden ${styles.flexCenter}`} variants={itemVariants}>
        <GetStarted />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
