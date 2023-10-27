import { card } from "../assets";
import styles, { layout } from "../style";


const CardDeal = () => (

  <section id="clients" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Oferecemos diferentes  <br className="sm:block hidden" /> tipos de pagamento
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Na nossa empresa, proporcionamos diversas opções de pagamento para atender às preferências individuais de nossos clientes. Aceitamos cartões de crédito e débito, transferências bancárias, PayPal, boletos bancários, carteiras digitais e até pagamento na entrega (COD). Além disso, oferecemos a conveniência do parcelamento para aquisições de maior valor. Nosso compromisso é garantir que a experiência de compra seja conveniente e segura, independentemente da escolha de pagamento, com a promessa de manter a confidencialidade dos dados dos nossos clientes.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
