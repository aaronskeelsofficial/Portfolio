import { Helmet } from "react-helmet"

//Props Format
/*
const RectangularTextProps = {
  id: "",
  parentid: "",
  text: "test",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "undefined",
  rszdeltafontsize: "undefined",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  sizingunitpc: "parent",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "50",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  sizingunitphone: "parent",
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

//SizingUnit Enums
/*
* viewport
* parent
* pixel
*/

//ResizeEstimatedFontSize Purpose
/*
* This is used in the resizing algorithm to start at a size closer to appropriate
*/

//ResizeDeltaFontSize Purpose
/*
* This is used in the resizing algorithm to speed up resizings that don't require refined accuracy
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
            if (typeof window.aaron.aboutme.rectangulartext == "undefined")
              window.aaron.aboutme.rectangulartext = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("rectangulartext");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              //baseelem.style.backgroundColor = "orange";
              //
              baseelem.dataset.id = "`+ props.id + `";
              baseelem.dataset.fontfamily = "`+ props.fontfamily + `";
              baseelem.dataset.fontsize = "`+ props.fontsize + `";
              baseelem.dataset.fontweight = "`+ props.fontweight + `";
              baseelem.dataset.color = "`+ props.color + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              baseelem.dataset.anchorpointpc = "`+ props.anchorpointpc + `";
              baseelem.dataset.sizingmodepc = "`+ props.sizingmodepc + `";
              baseelem.dataset.sizingunitpc = "`+ props.sizingunitpc + `";
              baseelem.dataset.widthpc = "`+ props.widthpc + `";
              baseelem.dataset.heightpc = "`+ props.heightpc + `";
              baseelem.dataset.xpc = "`+ props.xpc + `";
              baseelem.dataset.ypc = "`+ props.ypc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.sizingunitphone = "`+ props.sizingunitphone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";

              pelem = document.createElement("p");
              pelem.innerHTML = "`+ props.text + `";
              baseelem.append(pelem);
              //
              let fontfamily = "`+ props.fontfamily + `";
              if (fontfamily != "") {
                pelem.style.fontFamily = fontfamily;
              }
              let fontsize = "`+ props.fontsize + `";
              if (fontsize != "")
                pelem.style.fontSize = fontsize;
              let fontweight = "`+ props.fontweight + `";
              if (fontweight != "")
                pelem.style.fontWeight = fontweight;
              let color = "`+ props.color + `";
              if (color != "")
                pelem.style.color = color;

              let parentelemid = "`+ props.parentid + `" == "" ? "root" : "` + props.parentid + `";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              //The following is required because for infocards the div isn't properly resized until the image loads so if we resize here immediately, it bases the "parent" sizing unit off an inappropriately sized div.
              if (parentelemid.includes("card")) {
                parentelem.childNodes[0].addEventListener("load", () => {
                  Resize();
                });
              } else {
                Resize();
              }
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              //Calculate proper font size to fit within rectangle maxing either height or width
              let boundingWidth = parseInt(baseelem.style.width);
              let boundingHeight = parseInt(baseelem.style.height);
              let targetFontSize = ("` + props.rszestimatedfontsize + `" != "undefined") ? ` + props.rszestimatedfontsize + ` : boundingHeight;
              pelem.style.fontSize = targetFontSize + "px";
              let liveWidth = pelem.getBoundingClientRect().width;
              let liveHeight = pelem.getBoundingClientRect().height;
              while ((Math.floor(liveWidth) > boundingWidth || Math.floor(liveHeight) > boundingHeight) && targetFontSize > 1) {
                targetFontSize -= ("` + props.rszdeltafontsize + `" != "undefined") ? ` + props.rszdeltafontsize + ` : 1;
                pelem.style.fontSize = targetFontSize + "px";
                liveWidth = pelem.getBoundingClientRect().width;
                liveHeight = pelem.getBoundingClientRect().height;
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