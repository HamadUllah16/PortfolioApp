import { useContext, useState } from "react";
import { ThemeContext } from "../App";

function Home() {
  const getJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit")
      .then((res) => res.json()).then(data => setJoke(data));
    if (stop === true) {
      setStop(false)
    }
  }

  const [joke, setJoke] = useState("")
  const [stop, setStop] = useState(false)
  const { state } = useContext(ThemeContext);
  return (
    <div className="mainContainer flex-column justify-content-between position-relative p-4"
      key={"home"}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-end gap-2">
          <div onClick={getJoke} className={`shadow border rounded p-2`} style={{ cursor: "pointer" }}>
            <p className={`${state.textColor} p-0 m-0`}>Gimme a joke</p>
          </div>
          {joke === "" ?
            ""
            :
            <div onClick={() => setStop(true)} className={`shadow border rounded p-2`} style={{ cursor: "pointer" }}>
              <p className={`p-0 m-0 ${state.textColor}`}>Stop pls</p>
            </div>

          }
        </div>
        <div className="d-flex justify-content-center">
          {!stop &&
            joke.type === "twopart" ?
            <div className="text-center">
              <p className={`${state.textColor}`}>
                {joke.setup}
              </p>
              <p className={`${state.textColor} text-center`}>{joke.delivery}</p>
            </div>
            :
            <p className={state.textColor}>{joke.joke}</p>
          }
        </div>
      </div>

      <div className={`${state.textColor}`} style={{ paddingBottom: "8rem" }}>
        <h3 className={`text-center navText d-flex justify-content-center align-items-center gap-2`}>Hello <img className="img-fluid" alt="hand wave" style={{ width: "2.5rem" }} src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg" /></h3>
        <p className="text-center">{state.darkMode ? "its dark in here light it up" : "MY EYES AAAHHHH!"} </p>
      </div>
      <img src="/home-image.png" alt="bg-banner" className={`img-fluid position-absolute bottom-0`} />
    </div>

  )
}
export default Home;
