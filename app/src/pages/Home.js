import { useContext } from "react";
import { ThemeContext } from "../App";

function Home() {
  const { state } = useContext(ThemeContext);
  const theme = state.darkMode ? "lightText" : "darkText"

  return (
    <div className="mainContainer" key={"home"} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.4, type: "spring" }} style={{ width: "100%" }}>
      <div className={`${theme}`}>
        <h3 className={`text-center navText`}>Welcome</h3>
        <p className="text-center">Hang in there, still under development.</p>
      </div>
    </div>

  )
}
export default Home;
