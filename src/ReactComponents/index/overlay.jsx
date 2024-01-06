import { Helmet } from "react-helmet"
import Fader from "./fader"

//Props Format
/*
const OverlayProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  widthpc: "101",
  heightpc: "101",
  xpc: "50",
  ypc: "50",
  srcpc: "/src/img/bg-darkgeometry.png",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "101",
  xphone: "50",
  yphone: "50",
  srcphone: "/src/img/bg-darkgeometry.png",
}
*/

//AnchorPoint Enums
/*
* topleft,topmiddle,topright,middleleft,middlemiddle,middleright,bottomleft,bottommiddle
* bottomright
*/

//SizingMode Enums
/*
* widthAutoHeight
* heightAutoWidth
* explicit
*/

const FaderProps_Img = {
  id: "",
  targetid: "overlay-img",
  timekeyframes: "[0,1000]",
  opacitykeyframes: "[1,0]",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const FaderProps_P1 = {
  id: "",
  targetid: "overlay-p1",
  timekeyframes: "[0,2000,3000]",
  opacitykeyframes: "[1,1,0]",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const FaderProps_P2 = {
  id: "",
  targetid: "overlay-p2",
  timekeyframes: "[0,2000,3000]",
  opacitykeyframes: "[1,1,0]",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const FaderProps_P3 = {
  id: "",
  targetid: "overlay-p3",
  timekeyframes: "[0,2000,3000]",
  opacitykeyframes: "[0,0,0]",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const FaderProps_Overlay = {
  id: "",
  targetid: "overlay",
  timekeyframes: "[0,3000,4000]",
  opacitykeyframes: "[1,1,0]",
  //
  enablepc: "true",
  //
  enablephone: "true",
}

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.overlay == "undefined")
              window.aaron.index.overlay = new Object();
          })();

          let skipOverlayURL = false;
          let URLQueries = window.aaron.common.urltool.GetQueries();
          if (typeof URLQueries.skipOverlay != "undefined" && URLQueries.skipOverlay == "true") {
            skipOverlayURL = true;
            window.aaron.common.urltool.UpdateURL(window.location.origin, false);
          }
          if ((((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true))
              && !skipOverlayURL) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, p1, p2;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("overlay");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.backgroundColor = "black"; //This is to hide png texture popping
              //We can't just hide the entire element or the background elements show.
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "`+ props.id + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              baseelem.dataset.anchorpointpc = "`+ props.anchorpointpc + `";
              baseelem.dataset.sizingmodepc = "`+ props.sizingmodepc + `";
              baseelem.dataset.widthpc = "`+ props.widthpc + `";
              baseelem.dataset.heightpc = "`+ props.heightpc + `";
              baseelem.dataset.xpc = "`+ props.xpc + `";
              baseelem.dataset.ypc = "`+ props.ypc + `";
              baseelem.dataset.srcpc = "`+ props.srcpc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";
              baseelem.dataset.srcphone = "`+ props.srcphone + `";
              //
              let onClick = function () {
              
              }
              baseelem.addEventListener("click", () => {
                console.log("click");
                baseelem.style.backgroundColor = "white";
                if (typeof window.aaron.index.fader.ActivateFuncs != "undefined") {
                  for (let f of window.aaron.index.fader.ActivateFuncs) {
                    f();
                  }
                }
              });

              imgelem = document.createElement("img");
              imgelem.id = "overlay-img";
              imgelem.style.position = "absolute";
              imgelem.style.transform = "translate(-50%,-50%)";
              imgelem.style.userSelect = "none";
              imgelem.style.left = "50%";
              imgelem.style.top = "50%";
              imgelem.style.width = "101%";
              imgelem.style.height = "101%";
              imgelem.style.backgroundColor = "black";
              imgelem.style.opacity = "0";
              imgelem.style.transition = "opacity .5s";
              //
              if (deviceType == "pc" || deviceType == "tablet") {
                imgelem.src = "`+ props.srcpc + `";
              } else {
                imgelem.src = "`+ props.srcphone + `";
              }
              imgelem.ondragstart = () => {
                return false;
              };
              imgelem.addEventListener("load", () => {
                imgelem.style.opacity = "1";
                setTimeout(() => {
                  imgelem.style.transition = "";
                }, 500);
              });

              p1 = document.createElement("span");
              p1.id = "overlay-p1";
              p1.innerText = "I Am";
              p1.style.fontWeight = "100";
              p1.style.position = "absolute";
              p1.style.transform = "translate(-50%,-50%)";
              p1.style.left = "50%";
              p1.style.top = "47%";

              p2 = document.createElement("span");
              p2.id = "overlay-p2";
              p2.innerText = "Aaron Skeels";
              p2.style.position = "absolute";
              p2.style.transform = "translate(-50%,-50%)";
              p2.style.left = "50%";
              p2.style.top = "53%";

              let p3 = document.createElement("span");
              p3.id = "overlay-p3";
              p3.innerText = "(Click to Enter)";
              p3.style.position = "absolute";
              p3.style.transform = "translate(-50%,-50%)";
              p3.style.left = "50%";
              p3.style.top = "75%";
              p3.style.opacity = ".3";
              p3.style.fontSize = "200%";
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
              baseelem.append(imgelem);
              baseelem.append(p1);
              baseelem.append(p2);
              baseelem.append(p3);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              window.requestAnimationFrame(() => {
                let fontSize = parseInt(baseelem.getBoundingClientRect().height*.06) + "px";
                // let p1 = baseelem.childNodes[1];
                p1.style.fontSize = fontSize;
                // let p2 = baseelem.childNodes[2];
                p2.style.fontSize = fontSize;
              });
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
      <Fader {...FaderProps_Img} />
      <Fader {...FaderProps_P1} />
      <Fader {...FaderProps_P2} />
      <Fader {...FaderProps_P3} />
      <Fader {...FaderProps_Overlay} />
    </>
  )
};