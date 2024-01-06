import { Helmet } from "react-helmet";
import GLOBE from "./globe"

export default function() {
  return (
    <>
      <GLOBE></GLOBE>
      <div className="globeOverflowWrapper" style={{ overflow: "hidden", position: "absolute", left: "0px", top: "0px" }}>
        <div id="globeDiv" style={{ zIndex: 999 }}></div>
      </div>
      <Helmet>
        <script>{`
          if (deviceType != "phone") {
            if (true) {
              let Resize = function () {
                document.getElementsByClassName("globeOverflowWrapper")[0].style.width = vw + "px";
                document.getElementsByClassName("globeOverflowWrapper")[0].style.height = vh + "px";
              }
              window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
              Resize();
            }
            var globe1 = new globe(vw / 2, 3*vh / 4, vw/12, -Math.PI / 180.0 * .25, -Math.PI / 180.0 * .25, 0, document.getElementById("globeDiv"), false);
            new globeWord('g1', 'I am Aaron Skeels', degreeToRadian(90), degreeToRadian(0), 0, 0, 0, globe1);
            new globeWord('g2', 'MatLab', degreeToRadian(90), degreeToRadian(180), 0, 0, 0, globe1, "/src/img/projects/matlab_min.webp");
            new globeWord('g3', 'Java', degreeToRadian(90), degreeToRadian(90), 0, 0, 0, globe1, "/src/img/projects/java_min.webp");
            new globeWord('g4', 'MySQL', degreeToRadian(90), degreeToRadian(-90), 0, 0, 0, globe1, "/src/img/projects/mysql_min.webp");
            new globeWord('g5', 'Node.js', degreeToRadian(135), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/nodejs_min.webp");
            new globeWord('g6', 'Photoshop', degreeToRadian(135), degreeToRadian(120), 0, 0, 0, globe1, "/src/img/projects/photoshop_min.webp");
            new globeWord('g11', 'RaspberryPi', degreeToRadian(135), degreeToRadian(-120), 0, 0, 0, globe1, "/src/img/projects/rpi_min.webp");
            new globeWord('g7', 'Javascript', degreeToRadian(180), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/js_min.webp");
            new globeWord('g8', 'Unreal Engine', degreeToRadian(45), degreeToRadian(45), 0, 0, 0, globe1, "/src/img/projects/unrealengine_min.webp");
            new globeWord('g9', 'C++', degreeToRadian(45), degreeToRadian(165), 0, 0, 0, globe1, "/src/img/projects/cpp_min.webp");
            new globeWord('g12', 'Arduino', degreeToRadian(45), degreeToRadian(-75), 0, 0, 0, globe1, "/src/img/projects/arduino_min.webp");
            new globeWord('g10', 'Blender', degreeToRadian(0), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/blender_min.webp");
          }
        `}</script>
      </Helmet>
    </>
  )
}