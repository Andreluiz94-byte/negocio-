import React from "react";
import styles from "../style";

const Button = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=seu_numero_de_telefone";

  const openWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`${styles.button} bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600`}
    >
      Fale no WhatsApp
    </button>
  );
};

const CTA = () => (
  <section
    id="Contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Vamos fechar negócio agora!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
