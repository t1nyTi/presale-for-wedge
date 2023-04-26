import s from "./NewInfo.module.css";
import cn from "classnames";

const NewInfo = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.dot, "fadeInOut")}></div>
      <div className="mr-4 font-normal text-base text-[#f0b90b] font-inter-sans">
        BNB Covered Call Vault is now live
      </div>
      <div className="px-[16px] py-[12px] border border-[#f0b90b] rounded-[100px] font-normal text-base text-[#f0b90b] font-inter-sans">
        Start Depositing
      </div>
    </div>
  );
};

export default NewInfo;
