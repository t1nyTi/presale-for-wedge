import {
  SvgAAVE,
  SvgAPE,
  SvgArrange,
  SvgAVAX,
  SvgBINANCE,
  SvgBNB,
  SvgEarnCircleBig,
  SvgEarnCircleSmall,
  SvgETH,
  SvgETHEREUM,
  SvgGridBG,
  SvgRETH,
  SvgRETHAPYEXTRA,
  SvgSAVAX,
  SvgSAVAXToken,
  SvgSOL,
  SvgSOLToken,
  SvgSTETH,
  SvgSTETHAPYEXTRA,
  SvgStethEarnCircleBig,
  SvgStethEarnCircleSmall,
  SvgUNI,
  SvgUSDC,
  SvgUSDCAPYEXTRA,
  SvgWBTC,
  SvgWBTCAPYEXTRA
} from "assets/svg";
import { useState } from "react";
import s from "./Cards.module.css";
import cn from "classnames";
import Wedge from "assets/logo.png";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

import ButtonWrapper from "./paymentMethod"
import PaymentMethodTP from "./paymentMethodTP";



const Cards = () => {
  const [strategyShow, setStrategyShow] = useState(false);
  const [depositShow, setDepositShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);
  const [bnbApyInfoShow, setBnbApyInfoShow] = useState(false);
  

  
  return (
    <div className={s.root}>
      
      <div className={cn(s.cardsWrapper,"justify-center")}>


        <div className={cn(s.card, s.bnbCard)}>
          <div className={cn(s.cardTop, "bgFadeInOut", s.bnb)}>
            <div className="flex justify-start gap-1">
              <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide">
                COVERED CALL
              </div>
              <div className="bg-[#f0b90b40] rounded-[4px] p-[3px] text-sm tracking-wide">
                <SvgBINANCE />
              </div>
              <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide border border-[#f0b90b]">
                V2
              </div>
            </div>
          </div>
          <div className={s.cardContent}>
            
            <div className={cn(s.svgIcon, "bg-[#44350d]")}>
              <SvgBNB />
            </div>
            
            <div className="relative flex justify-center items-center h-[240px]">
              <div className="absolute top-[16px] left-[16px] right-[16px]">
                <div className="flex gap-[4px]">
                  <div className="w-[16px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                  <div className="w-[8px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-2"></div>
                  <div className="w-[2px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
                </div>
              <div className="flex flex-row-reverse gap-[4px]">
                <div className="w-[16px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[2px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
              </div>
              </div>
              <div className="absolute bottom-[16px] left-[16px] right-[16px]">
              <div className="flex gap-[4px]">
                <div className="w-[16px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[2px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
                <div className="w-[2px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-4"></div>
              </div>
              <div className="flex flex-row-reverse gap-[4px]">
                <div className="w-[2px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-2"></div>
                <div className="w-[16px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[8px] h-[2px] bg-[#00a3ff] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
              </div>
              </div>
              
              <SvgStethEarnCircleBig className="absolute rotate_clockwise" />
              <SvgStethEarnCircleSmall className="absolute rotate_counter_clockwise" />
              <div
                className={cn(
                  "aboslute rounded-full w-[120px] h-[120px] flex justify-center items-center",
                  "bg-[#032d4a]"
                )}
                style={{ boxShadow: "rgb(18, 18, 24) 0px 0px 0px 2px" }}
              >
                {/* <SvgSTETH /> */}
                {/* <Wedge/> */}
                <img className={cn("ml-2 mt-1")} src={Wedge}></img>
              
              </div>
            </div>
          </div>
        </div>


        <div className={cn(s.card, s.bnbCard)}>
          <div className={cn(s.cardPay,"overflow-auto", "bgFadeInOut", s.bnb)}>
          <PaymentMethodTP/>
            </div>
        
        </div>


        
        {/* <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
              
              <ButtonWrapper
                          currency={'usd'}
                          showSpinner={false}
                      />
			</PayPalScriptProvider>
		</div> */}


          {/* <div className={cn(s.card, s.earnCard)}>
            <SvgGridBG className="absolute w-full h-full left-0 top-0" />
            <div className="absolute top-[16px] left-[16px] right-[16px]">
              <div className="flex gap-[4px]">
                <div className="w-[16px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[8px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-2"></div>
                <div className="w-[2px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
              </div>
              <div className="flex flex-row-reverse gap-[4px]">
                <div className="w-[16px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[2px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
              </div>
            </div>

            <div className="absolute bottom-[16px] left-[16px] right-[16px]">
              <div className="flex gap-[4px]">
                <div className="w-[16px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[2px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
                <div className="w-[2px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-4"></div>
              </div>
              <div className="flex flex-row-reverse gap-[4px]">
                <div className="w-[2px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-2"></div>
                <div className="w-[16px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-3"></div>
                <div className="w-[8px] h-[2px] bg-[#3E73C4] rounded-[1000px] ml-0 animate-fadeInOut-1"></div>
              </div>
            </div>

            <div className={s.earnCardContent}>
              <div className="mb-[8px] text-3xl">R-EARN</div>
              <div className="mb-[16px] text-base text-[#787883] h-[20px]">
                2.25M USDC / 25M USDC
              </div>
              <div className="relative flex justify-center items-center h-[240px]">
                <SvgEarnCircleBig className="absolute rotate_clockwise" />
                <SvgEarnCircleSmall className="absolute rotate_counter_clockwise" />
                <div
                  className={cn(
                    "aboslute rounded-full w-[80px] h-[80px]",
                    "bg-[#13203b]"
                  )}
                  style={{ boxShadow: "rgb(18, 18, 24) 0px 0px 0px 2px" }}
                >
                  <SvgUSDC />
                </div>
              </div>
              <span className="text-[#a1a1a9] text-base mx-[28px] mt-[16px] font-inter-sans text-center">
                Earn up to
                <span className="text-base font-inter-sans text-white">
                  &nbsp; 11.44% APY &nbsp;
                </span>
                with a
                <span className="text-base font-inter-sans text-white">
                  &nbsp; principle protected &nbsp;
                </span>
                vault strategy
              </span>
            </div>
          </div>



          <div className={cn(s.card, s.bnbCard)}>
            <div className={cn(s.cardTop, "bgFadeInOut", s.bnb)}>
              <div className="flex justify-start gap-1">
                <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide">
                  COVERED CALL
                </div>
                <div className="bg-[#f0b90b40] rounded-[4px] p-[3px] text-sm tracking-wide">
                  <SvgBINANCE />
                </div>
                <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide border border-[#f0b90b]">
                  V2
                </div>
              </div>
            </div>
            <div className={s.cardContent}>
              
              <div className={cn(s.svgIcon, "bg-[#44350d]")}>
                <SvgBNB />
              </div>
              <div className="my-4 text-3xl">T-BNB-C</div>
              <div className="mt-[8px] flex items-center">
                <div className="text-[#787883] font-sans text-sm">
                  Total Projected Yield (APY)
                </div>
                <div
                  className="relative w-[16px] h-[16px] rounded-full border border-[#2e2c2b] font-sans text-sm text-center ml-2"
                  onMouseEnter={() => setBnbApyInfoShow(true)}
                  onMouseLeave={() => setBnbApyInfoShow(false)}
                >
                  i
                  {bnbApyInfoShow && (
                    <div className={s.apyInfoWrapper}>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#f0b90b] font-sans text-lg">
                          Total Projected Yield (APY)
                        </div>
                        <div className="text-[#f0b90b] text-lg font-vcr-osd">
                          20.00%
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#acacab] font-sans text-[16px] ml-2">
                          Vault Yield
                        </div>
                        <div className="text-[#acacab] text-[16px] font-vcr-osd">
                          45.38%
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#acacab] font-sans text-[16px] ml-2">
                          Base Staking Yield
                        </div>
                        <div className="text-[#acacab] text-[16px] font-vcr-osd">
                          0.00%
                        </div>
                      </div>
                      <div className="text-[#acacab] text-[16px] mt-6 text-start leading-6">
                        Vault yield is calculated by annualising the 4-week
                        average weekly yield generated by the vault. The weekly
                        yield does not include any losses incurred by the vault.
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="my-4 text-3xl">20.00%</div>
              <div className="mt-[8px] flex items-center">
                <div className="w-1/2">
                  <div className="text-[#787883] font-sans text-sm">
                    Weekly Strike Price
                  </div>
                  <div className="text-base">$340.00</div>
                </div>

                <div className="w-1/2">
                  <div className="text-[#787883] font-sans text-sm">
                    Current Price
                  </div>
                  <div className="text-base text-[#16ceb9]">$330.09</div>
                </div>
              </div>
              <div className="relative w-full h-[4px] my-[24px] rounded-[10px] bg-[#26262b]">
                <div className="absolute top-[-2px] w-[1px] h-[8px] left-[50%] z-[100] bg-white"></div>
                <div className="w-1/2 flex justify-end h-full">
                  <div className="relative flex w-[13.3382%] h-full bg-[#16ceb930] ">
                    <div className="absolute w-[4px] h-[4px] rounded-full bg-[#16ceb9] mr-[-2px]"></div>
                  </div>
                </div>
                <div className="w-1/2 "></div>
              </div>
            </div>
            <div className="mt-[8px] flex items-center justify-between">
              <div className="text-[#787883] font-sans text-sm">
                Current Deposites
              </div>
              <div className="text-base">251.69 BNB</div>
            </div>
            <div className="relative w-full h-[4px] my-[6px] rounded-[10px] bg-[#26262b]">
              <div className="absolute flex w-[16.7793%] h-full bg-[#ffffff] rounded-[10px] "></div>
            </div>
            <div className="mt-[8px] flex items-center justify-between">
              <div className="text-[#787883] font-sans text-sm">Max Capacity</div>
              <div className="text-base">1,500.00 BNB</div>
            </div>
          </div>



          <div className={cn(s.card, s.bnbCard)}>
            <div className={cn(s.cardTop, "bgFadeInOut", s.bnb)}>
              <div className="flex justify-start gap-1">
                <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide">
                  COVERED CALL
                </div>
                <div className="bg-[#f0b90b40] rounded-[4px] p-[3px] text-sm tracking-wide">
                  <SvgBINANCE />
                </div>
                <div className="bg-[#f0b90b40] rounded-[4px] p-[8px] text-sm tracking-wide border border-[#f0b90b]">
                  V2
                </div>
              </div>
            </div>
            <div className={s.cardContent}>
              
              <div className={cn(s.svgIcon, "bg-[#44350d]")}>
                <SvgBNB />
              </div>
              <div className="my-4 text-3xl">T-BNB-C</div>
              <div className="mt-[8px] flex items-center">
                <div className="text-[#787883] font-sans text-sm">
                  Total Projected Yield (APY)
                </div>
                <div
                  className="relative w-[16px] h-[16px] rounded-full border border-[#2e2c2b] font-sans text-sm text-center ml-2"
                  onMouseEnter={() => setBnbApyInfoShow(true)}
                  onMouseLeave={() => setBnbApyInfoShow(false)}
                >
                  i
                  {bnbApyInfoShow && (
                    <div className={s.apyInfoWrapper}>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#f0b90b] font-sans text-lg">
                          Total Projected Yield (APY)
                        </div>
                        <div className="text-[#f0b90b] text-lg font-vcr-osd">
                          20.00%
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#acacab] font-sans text-[16px] ml-2">
                          Vault Yield
                        </div>
                        <div className="text-[#acacab] text-[16px] font-vcr-osd">
                          45.38%
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-[#acacab] font-sans text-[16px] ml-2">
                          Base Staking Yield
                        </div>
                        <div className="text-[#acacab] text-[16px] font-vcr-osd">
                          0.00%
                        </div>
                      </div>
                      <div className="text-[#acacab] text-[16px] mt-6 text-start leading-6">
                        Vault yield is calculated by annualising the 4-week
                        average weekly yield generated by the vault. The weekly
                        yield does not include any losses incurred by the vault.
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="my-4 text-3xl">20.00%</div>
              <div className="mt-[8px] flex items-center">
                <div className="w-1/2">
                  <div className="text-[#787883] font-sans text-sm">
                    Weekly Strike Price
                  </div>
                  <div className="text-base">$340.00</div>
                </div>

                <div className="w-1/2">
                  <div className="text-[#787883] font-sans text-sm">
                    Current Price
                  </div>
                  <div className="text-base text-[#16ceb9]">$330.09</div>
                </div>
              </div>
              <div className="relative w-full h-[4px] my-[24px] rounded-[10px] bg-[#26262b]">
                <div className="absolute top-[-2px] w-[1px] h-[8px] left-[50%] z-[100] bg-white"></div>
                <div className="w-1/2 flex justify-end h-full">
                  <div className="relative flex w-[13.3382%] h-full bg-[#16ceb930] ">
                    <div className="absolute w-[4px] h-[4px] rounded-full bg-[#16ceb9] mr-[-2px]"></div>
                  </div>
                </div>
                <div className="w-1/2 "></div>
              </div>
            </div>
            <div className="mt-[8px] flex items-center justify-between">
              <div className="text-[#787883] font-sans text-sm">
                Current Deposites
              </div>
              <div className="text-base">251.69 BNB</div>
            </div>
            <div className="relative w-full h-[4px] my-[6px] rounded-[10px] bg-[#26262b]">
              <div className="absolute flex w-[16.7793%] h-full bg-[#ffffff] rounded-[10px] "></div>
            </div>
            <div className="mt-[8px] flex items-center justify-between">
              <div className="text-[#787883] font-sans text-sm">Max Capacity</div>
              <div className="text-base">1,500.00 BNB</div>
            </div>
          </div> */}

        
      </div>
    </div>
  );
};

export default Cards;
