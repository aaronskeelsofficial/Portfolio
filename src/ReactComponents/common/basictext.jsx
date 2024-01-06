import { Helmet } from "react-helmet"

//Props Format
/*
const BasicTextProps = {
  id: "",
  text: "test",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  whitespace: "",
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
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.basictext == "undefined")
              window.aaron.common.basictext = new Object();
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
              baseelem = document.createElement("span");
              baseelem.id = "`+ props.id + `";
              baseelem.innerText = "`+ props.text + `";
              baseelem.classList.add("basictext");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
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
              let whitespace = "`+ props.whitespace + `";
              if (whitespace != "")
                baseelem.style.whiteSpace = whitespace;

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
              baseelem.dataset.xpc = "`+ props.xpc + `";
              baseelem.dataset.ypc = "`+ props.ypc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";
              //
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();
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
                  x = elem.dataset.xpc;
                  y = elem.dataset.ypc;
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
                  x = elem.dataset.xphone;
                  y = elem.dataset.yphone;
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