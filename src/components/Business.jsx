import { features } from "../constants";
import styles, { layout } from "../style";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Você precisa de controle das finanças, <br className="sm:block hidden" /> Nós podemos te ajudar!
      </h2> <br></br>
      <p className={`${styles.paragraph}  `}>
        Somos uma empresa especializada em Gestão de Serviço para condomínios e associações. Aqui temos toda a facilidade financeira que a sua loja precisa, entregando resultados satisfatórios aos nossos clientes! <br></br> <br></br>
        <li> Contabilidade completa </li><br></br>
        <li> Equipe com mais de 40 anos de experiência </li> <br></br>
        <li>  O sistema mais completo do mercado  </li>



      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
