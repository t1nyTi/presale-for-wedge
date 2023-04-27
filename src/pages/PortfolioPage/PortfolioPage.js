import s from "./PortfolioPage.module.css";
import NewInfo from "components/NewInfo";
import { useState } from "react";
import cn from "classnames";
// import WedgeVideo from "";

function PortfolioPage() {
  const [activityShow, setActivityShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);

  const onActivity = () => {
    setActivityShow(!activityShow);
    setSortShow(false);
  };

  const onSort = () => {
    setSortShow(!sortShow);
    setActivityShow(false);
  };
  return (
    <div className={s.root}>
      <NewInfo />
      <div className={s.container}>
        <div className={s.contentWrapper}>
          <div className={s.content}>
            {/* <span className="text-xl ">PORTFOLIO SUMMARY</span> */}
            <div className={s.balances}>
              <div className={s.balancesMain}>
                
                <div className=" mt-[20px] flex w-full h-[224px] border-t border-t-[#1c1c22] items-center justify-center">
                  
                  <video width="750" height="500" controls className="rounded-xl	" >
                    <source src="assets/wedgeAI.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
              
            </div>
            <div className="mt-[80px] flex flex-wrap w-full">
              <span className="text-5xl mr-[16px] w-full uppercase tracking-wide	leading-tight	tracking-wide	line-clamp-3	">
                Wedge Finance Token
              </span>
              <span className="text-lg leading-[24px] mt-[24px] text-[#b6b6b5]">
                Name: Wedge Finance Token
              </span>
              
            </div>
            <div className=" flex flex-wrap flex-1 mb-12">
              <div className="mb-6 w-full items-center flex-wrap flex">
                <span className="text-lg leading-[24px] mt-[24px] text-[#b6b6b5]">
                    Ticker: WEDGE
                </span>
              
              </div>

              <div className="w-full">
                <span className=" text-lg leading-[24px] mt-[24px] text-[#b6b6b5]">
                  Contract Address: 0x0E4bE24920a04b3AF1A5fa29a8aB2C263F06Dc19
                </span>
              </div>
              <div className="mb-6 w-full items-center flex-wrap flex">
                <span className="text-lg leading-[24px] mt-[24px] text-[#b6b6b5]">
                  Chain: BNB (BEP20)
                </span>
              
              </div>

              <div className="mb-6 w-full items-center flex-wrap flex">
                <span className="text-2xl leading-[24px] mt-[24px] text-[#e3e5e4]">
                  Wedge Finance Provide Frictionless Decentralised Finance transactions in a block chain Environment
                </span>
              
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
