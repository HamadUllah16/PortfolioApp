import { useContext } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";
function Home() {
  const { state } = useContext(ThemeContext);
  return (
    <motion.div className="mainContainer justify-content-between align-items-center position-relative"
      key={"home"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className={`${state.textColor} d-flex flex-column justify-content-center align-items-center w-100`}>
        <h3 className={`text-center navText d-flex justify-content-center align-items-center gap-2`}>Hello <img className="img-fluid" alt="hand wave" style={{ width: "2.5rem" }} src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg" /></h3>
        <p className="text-center">{state.darkMode ? "its dark in here light it up" : "MY EYES AAAHHHH!"} </p>
      </div>
      <img src="/home-image.png" alt="bg-banner" className={`img-fluid position-absolute bottom-0`} />
    </motion.div>

  )
}
export default Home;
