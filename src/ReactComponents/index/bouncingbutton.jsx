import { Helmet } from "react-helmet"

//Props Format
/*
const BouncingButtonProps = {
  id: "",
  text: "test",
  href: "",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  transition: "left 3s linear, top 3s linear",
  timetoscroll: "3000",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xcenterpc: "50",
  xradiuspc: "5",
  ycenterpc: "50",
  yradiuspc: "5",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xcenterphone: "50",
  xradiusphone: "5",
  ycenterphone: "50",
  yradiusphone: "5"
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
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.bouncingbutton == "undefined")
              window.aaron.common.bouncingbutton = new Object();
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
              baseelem = document.createElement("a");
              baseelem.id = "`+ props.id + `";
              baseelem.href = "`+ props.href + `";
              baseelem.innerText = "`+ props.text + `";
              baseelem.classList.add("bouncingbutton");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.transition = "`+ props.transition + `";
              baseelem.style.textDecoration = "none";
              baseelem.style.whiteSpace = "nowrap";
              baseelem.style.backgroundColor = "rgba(46, 52, 69, 0.5)";
              //
              let fontfamily = "`+ props.fontfamily + `";
              if (fontfamily != "")
                baseelem.style.fontFamily = fontfamily;
              let fontsize = "`+ props.fontsize + `";
              if (fontsize != "")
                baseelem.style.fontSize = fontsize;
              let fontweight = "`+ props.fontweight + `";
              if (fontweight != "")
                baseelem.style.fontWeight = fontweight;
              let color = "`+ props.color + `";
              if (color != "")
                baseelem.style.color = color;

              baseelem.dataset.id = "`+ props.id + `";
              baseelem.dataset.text = "`+ props.text + `";
              baseelem.dataset.fontfamily = "`+ props.fontfamily + `";
              baseelem.dataset.fontsize = "`+ props.fontsize + `";
              baseelem.dataset.fontweight = "`+ props.fontweight + `";
              baseelem.dataset.color = "`+ props.color + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              baseelem.dataset.anchorpointpc = "`+ props.anchorpointpc + `";
              baseelem.dataset.sizingmodepc = "`+ props.sizingmodepc + `";
              baseelem.dataset.widthpc = "`+ props.widthpc + `";
              baseelem.dataset.heightpc = "`+ props.heightpc + `";
              baseelem.dataset.xcenterpc = "`+ props.xcenterpc + `";
              baseelem.dataset.xradiuspc = "`+ props.xradiuspc + `";
              baseelem.dataset.ycenterpc = "`+ props.ycenterpc + `";
              baseelem.dataset.yradiuspc = "`+ props.yradiuspc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xcenterphone = "`+ props.xcenterphone + `";
              baseelem.dataset.xradiusphone = "`+ props.xradiusphone + `";
              baseelem.dataset.ycenterphone = "`+ props.ycenterphone + `";
              baseelem.dataset.yradiusphone = "`+ props.yradiusphone + `";

              let addColorChangeListener = function (aelem) {
                aelem.addEventListener("mouseenter", () => {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  aelem.style.color = "rgb(115, 204, 168)";
                });
                aelem.addEventListener("mouseleave", () => {
                  aelem.style.border = "none";
                  aelem.style.color = "rgb(211, 211, 211)";
                });
              }
              addColorChangeListener(baseelem);
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);

              Resize(); //First we manually resize to set an initial location
              setTimeout(Resize, 10); //Then we resize quickly after negligible delay to begin movement
              setInterval(Resize, 3000); //Then we start the repeated task to change target loc
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let doStuff = function (elem, imgElemForOriginalRatio, setVisible) {
                /*
                * elem - The element to be resized
                * imgElemForOriginalRatio - The (assumed) img element defining the aspect ratio for auto scaling
                * setVisible - Self explanatory
                */
                if (setVisible) {
                  elem.style.visibility = "visible";
                }
                elem.style.zIndex = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.zindexpc : elem.dataset.zindexphone;
                let originalRatio = imgElemForOriginalRatio ? imgElemForOriginalRatio.naturalWidth / imgElemForOriginalRatio.naturalHeight : 1;
                let width, height, x, y;
                if (deviceType == "pc" || deviceType == "tablet") {
                  let widthPercentSetting = elem.dataset.widthpc/100;
                  let heightPercentSetting = elem.dataset.heightpc/100;
                  switch (elem.dataset.sizingmodepc) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = parseInt(elem.dataset.xcenterpc);
                  let xRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  x += parseInt(elem.dataset.xradiuspc) * xRNG;
                  y = parseInt(elem.dataset.ycenterpc);
                  let yRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  y += parseInt(elem.dataset.yradiuspc) * yRNG;
                } else if (deviceType == "phone") {
                  widthPercentSetting = elem.dataset.widthphone/100;
                  heightPercentSetting = elem.dataset.heightphone/100;
                  switch (elem.dataset.sizingmodephone) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = parseInt(elem.dataset.xcenterphone);
                  let xRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  x += parseInt(elem.dataset.xradiusphone) * xRNG;
                  y = parseInt(elem.dataset.ycenterphone);
                  let yRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  y += parseInt(elem.dataset.yradiusphone) * yRNG;
                }
                //Handle anchor offsets
                let anchor = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.anchorpointpc : elem.dataset.anchorpointphone;
                let offsetX = 0, offsetY = 0;
                switch (anchor) {
                  case "topleft":
                    offsetX += width / 2;
                    offsetY += height / 2;
                    break;
                  case "topmiddle":
                    offsetY += height / 2;
                    break;
                  case "topright":
                    offsetX -= width / 2;
                    offsetY += height / 2;
                    break;
                  case "middleleft":
                    offsetX += width / 2;
                    break;
                  case "middlemiddle":
                    break;
                  case "middleright":
                    offsetX -= width / 2;
                    break;
                  case "bottomleft":
                    offsetX += width / 2;
                    offsetY -= height / 2;
                    break;
                  case "bottommiddle":
                    offsetY -= height / 2;
                    break;
                  case "bottomright":
                    offsetX -= width / 2;
                    offsetY -= height / 2;
                    break;
                }
                elem.style.left = ((vw * (x/100)) + offsetX) + "px";
                elem.style.top = ((vh * (y/100)) + offsetY) + "px";

                //Pad around text so doesn't clip into border
                let paddingIntTop = (elem.style.paddingTop == "") ? 0 : parseFloat(elem.style.paddingTop);
                let vertPad = parseInt((elem.getBoundingClientRect().height - 2*paddingIntTop) * .6) + "px";
                elem.style.paddingTop = vertPad;
                elem.style.paddingBottom = vertPad;
                let paddingIntLeft = (elem.style.paddingLeft == "") ? 0 : parseFloat(elem.style.paddingLeft);
                let horizPad = parseInt((elem.getBoundingClientRect().width - 2*paddingIntLeft) * .4) + "px";
                elem.style.paddingLeft = horizPad;
                elem.style.paddingRight = horizPad;
                //Resize border radius in accordance to measured height
                elem.style.borderRadius = (elem.getBoundingClientRect().height) + "px";
              }
              doStuff(baseelem, null, false);
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