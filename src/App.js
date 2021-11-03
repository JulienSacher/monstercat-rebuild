import "./App.scss";
import Artist from "./components/page/Artist";
import Cover from "./components/page/Cover";
import Footer from "./components/page/Footer";
import Nav from "./components/page/Nav";
import Stream from "./components/page/Stream";
import Suggestion from "./components/page/Suggestion";
import Tracklist from "./components/page/Tracklist";

function App() {
  /*const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);*/

  return (
    <div>
      <div
      /*className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}*/
      ></div>
      <Cover />
      <Nav />
      <Artist />
      <Stream />
      <Tracklist />
      <Suggestion />
      <Footer />
    </div>
  );
}

export default App;
