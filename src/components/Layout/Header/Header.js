import s from "./Header.module.css";

import cn from "classnames";
import { SvgDots, SvgExtend } from "assets/svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { label: "HOME", url: "/" },
    { label: "PRODUCT", active: true, url: "/product" },
    { label: "LEND", extra: true },
  ];
  const location = useLocation();
  return (
    <div className={s.root}>
      <nav className={s.nav}>
        <SvgDots className={cn(s.logo)} />
        <div className={s.itemsWrapper}>
          {navLinks.map((link, index) => (
            <Link to={link.url}>
              <div
                className={cn(
                  s.item,
                  location.pathname === link.url && s.active,
                  link.extra && s.extraLink
                )}
                key={index}
              >
                {link.label}
                {link.extra && <SvgExtend />}
              </div>
            </Link>
          ))}
        </div>
        <div className={s.connectWallet}>CONNECT WALLET</div>
      </nav>

      <div className="flex items-center gap-2">{/* <SvgGridMenu /> */}</div>
    </div>
  );
};

export default Header;
