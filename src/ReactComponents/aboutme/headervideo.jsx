import { Helmet } from "react-helmet"

//Props Format
/*
const HeaderVideoProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "50",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50"
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

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.headervideo == "undefined")
              window.aaron.aboutme.headervideo = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, backelem, faceelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("headervideo");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.overflow = "hidden";
              baseelem.style.backgroundColor = "black";
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

              let loadingelem = document.createElement("p");
              loadingelem.style.position = "absolute";
              loadingelem.style.left = "50%";
              loadingelem.style.top = "50%";
              loadingelem.style.transform = "translate(-50%, -50%)";
              loadingelem.innerText = "Loading...";
              baseelem.append(loadingelem);

              backelem = document.createElement("video");
              backelem.muted = "true";
              backelem.loop = "true";
              backelem.autoplay = "true";
              backelem.style.position = "absolute";
              backelem.style.transform = "translate(-50%,-50%)";
              backelem.style.left = "50%";
              backelem.style.top = "50%";
              backelem.style.userSelect = "none";
              backelem.style.zIndex = 0;
              //
              let source = document.createElement("source");
              // source.src = "https://i.imgur.com/tvzH8C7.mp4";
              setTimeout(() => {
                source.src = "https://i.imgur.com/qwKhg7N.mp4";
                backelem.load();
                backelem.play();
              }, 100);
              source.type = "video/mp4";
              backelem.append(source);

              faceelem = document.createElement("img");
              faceelem.style.position = "absolute";
              faceelem.style.transform = "translate(-50%,-50%)";
              faceelem.style.left = "50%";
              faceelem.style.top = "50%";
              faceelem.style.width = "100.5%";
              faceelem.style.height = "100.5%";
              faceelem.style.userSelect = "none";
              faceelem.style.zIndex = 1;
              faceelem.style.backgroundColor = "white";
              faceelem.style.opacity = "1";
              faceelem.style.transition = "background-color 2.5s ease-in, opacity 2.5s ease-in";
              //
              faceelem.src = "/src/img/overlay-nameplate.png";
              faceelem.ondragstart = () => {
                return false;
              };
              window.requestAnimationFrame(() => {
                faceelem.style.backgroundColor = "rgb(84,84,84)";
                faceelem.style.opacity = ".8";
                setTimeout(() => {
                  faceelem.style.transition = "background-color 1s linear";
                  faceelem.style.backgroundColor = "rgba(84,84,84,0)"
                }, 2500);
              });
          
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.appendChild(baseelem);
              baseelem.append(backelem);
              baseelem.append(faceelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              if (vw/1920 > vh/1080) { //If width stretch is more than height
                backelem.style.width = "100%"; //Then scale off width
                backelem.style.height = "";
              } else { //If height stretch is more than width
                backelem.style.height = "100%"; //Then scale off height
                backelem.style.width = "";
              }
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
    </>
  )
};