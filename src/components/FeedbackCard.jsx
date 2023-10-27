const FeedbackCard = ({ name, img, content, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[40px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[1.25em] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[0.8125em] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>

    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <p className="font-poppins font-normal text-[1em] leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
