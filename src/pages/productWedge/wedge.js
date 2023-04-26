import s from "./Wedge.module.css";
import NewInfo from "components/NewInfo";
import Cards from "components/Cards";

function PoolsPage() {
  return (
    <div className={s.root}>
      <NewInfo />
      <Cards />
    </div>
  );
}

export default PoolsPage;
