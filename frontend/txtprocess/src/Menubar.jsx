import "./App.css";
import imgLogo from "./recursos/imglogo.png";
import fbIcon from "./recursos/fb.png";
import xIcon from "./recursos/x.png";
import ytIcon from "./recursos/yt.png";

function MenuBar() {
  return (
    <div id="barramenu">
      <div id="imgdiv">
        <img id="imglogo" src={imgLogo} alt="" />
        <div id="txtimg">App.txt</div>
      </div>
      <div id="redes">
        <div id="txtglobal">
          <div id="bk"></div>
          <div id="txtredes">Follow us:</div>
        </div>
        <div id="logosredes">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fblogo"
          >
            <img src={fbIcon} alt="" className="fblogo" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ytlogo"
          >
            <img src={ytIcon} alt="" className="ytlogo" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="xlogo"
          >
            <img src={xIcon} alt="" className="xlogo" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default MenuBar;
