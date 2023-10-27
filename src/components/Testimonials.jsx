import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="Team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[100] w-[80%] h-[80%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-200 mb-50 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        Nosso Time de Fundadores
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center max-w-[500px]`}>
          "...Presamos pela entrega e pela eficiência de nossa gestão!"
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} className="mx-2 my-2" />
      ))}
    </div>

  </section>
);

export default Testimonials;
