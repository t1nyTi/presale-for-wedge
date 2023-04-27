import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className="w-2/3 flex items-center">
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          FAQ
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          BLOG
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          TERMS
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          POLICY
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          AUCTIONS
        </div>
      </div>
      {/* <div className="w-1/3 flex items-center justify-end">
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          DISCORD
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          TWITTER
        </div>
        <div className="py-0 px-[12px] md:px-[24px] text-sm opacity-[0.48] hover:opacity-100 cursor-pointer">
          GITHUB
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
