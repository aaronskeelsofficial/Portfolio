import { Helmet } from "react-helmet"

//Props Format
/*
const SpinnableCoinProps = {
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
  srcpc: "mecartoonifypin256",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50",
  srcphone: "",
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
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.spinnablecoin == "undefined")
              window.aaron.index.spinnablecoin = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("img");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("spinnablecoin");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.userSelect = "none";
              baseelem.style.visibility = "hidden";
              //
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.src = "`+ props.srcpc + `";
              } else {
                baseelem.src = "`+ props.srcphone + `";
              }
              baseelem.ondragstart = () => {
                return false;
              };
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
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              baseelem.addEventListener("load", Resize);

              //Handle spins
              let spinDegree = 0;
              let spinVelocity = 0;
              let spinDrag = .025;
              let spinTrigger = 0;
              baseelem.style.scale = "1";
              let ID_SpinInterval = setInterval(() => {
                if(spinVelocity >= 20){
                  spinTrigger = 1;
                }
                if(spinTrigger){
                  baseelem.style.scale = parseFloat(baseelem.style.scale) + .1;
                  window.location.href = "/wordsphere";
                }
                spinDegree += spinVelocity;
                spinDegree = spinDegree > 360 ? spinDegree - 360 : spinDegree;
                spinVelocity -= spinDrag;
                spinVelocity = spinVelocity < 0 ? 0 : spinVelocity;
                baseelem.style.transform = "translateX(-50%) translateY(-50%) rotateY(" + Math.round(spinDegree) + "deg)";
              }, 10)
              baseelem.addEventListener("mousedown", (e) => {
                if(spinVelocity == 0)
                  spinVelocity += 2;
                spinVelocity += 1;
              });
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
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