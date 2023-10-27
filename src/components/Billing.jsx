import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Como a Negócios.com<br className="sm:block hidden" /> atua no mercado?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Possuímos um software de gestão e serviços financeiros, oferecendo facilidades para condomínios em pareceria com o PJBANK!
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <span className="text-white text-xl font-bold">PARA CONTAS DIGITAIS:</span>  Seguimos com o padrão de segurança PCI-DSS, um conjunto de regras e exigências internacionais usado por todas as soluções de pagamento do mercado. <br /><br />
        <span className="text-white text-xl font-bold"> SOBRE A COBRANÇA:</span>  As regras de juros e multas das cobranças são definidas pela Loja, podendo ser zero!
      </p>





      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>

    </div>

  </section>

);

export default Billing;
