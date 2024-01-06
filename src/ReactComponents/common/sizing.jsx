import { Helmet } from "react-helmet"

export default function() {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.sizing == "undefined")
              window.aaron.common.sizing = new Object();
            // window.aaron.common.sizing.lastWidth // this is set below
            window.aaron.common.sizing.resizeFunctions = [];
          })();
          
          let vw, vh;
          let deviceType;
          window.aaron.common.sizing.updateSizing = function () {
            vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            if (vw <= 428) {
              deviceType = "phone";
            } else if (vw <= 834) {
              deviceType = "tablet";
            } else {
              deviceType = "pc";
            }
          }
          window.aaron.common.sizing.updateSizing();
        
          window.aaron.common.sizing.lastWidth = vw;
          window.addEventListener('resize', (event) => {
            window.aaron.common.sizing.updateSizing();
            if ((deviceType != "phone") || (vw != window.aaron.common.sizing.lastWidth)) {
              window.aaron.common.sizing.lastWidth = vw;
              for (let f of window.aaron.common.sizing.resizeFunctions)
                f();
            }
          });
        
          window.aaron.common.sizing.DefaultSetSize = function (elem, imgElemForOriginalRatio, setVisible) {
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
            let CalculateWidthUnit = function (value, deviceTypeUnit) {
              //value is passed in originally as a percent
              let unitType = (typeof deviceTypeUnit == "undefined" || deviceTypeUnit == "") ? "viewport" : deviceTypeUnit;
              switch (unitType) {
                case "viewport":
                  return vw * value;
                case "parent":
                  return elem.parentElement.getBoundingClientRect().width * value;
                  break;
                case "pixel":
                  return 100*value;
                  break;
                default:
                  return null;
              }
            }
            let CalculateHeightUnit = function (value, deviceTypeUnit) {
              //value is passed in originally as a percent
              let unitType = (typeof deviceTypeUnit == "undefined" || deviceTypeUnit == "") ? "viewport" : deviceTypeUnit;
              switch (unitType) {
                case "viewport":
                  return vh * value;
                case "parent":
                  return elem.parentElement.getBoundingClientRect().height * value;
                  break;
                case "pixel":
                  return 100*value;
                  break;
                default:
                  return null;
              }
            }
            if (deviceType == "pc" || deviceType == "tablet") {
              let widthPercentSetting = elem.dataset.widthpc/100;
              let heightPercentSetting = elem.dataset.heightpc/100;
              switch (elem.dataset.sizingmodepc) {
                case "widthAutoHeight":
                  width = CalculateWidthUnit(widthPercentSetting, elem.dataset.sizingunitpc);
                  height = width / originalRatio;
                  break;
                case "heightAutoWidth":
                  height = CalculateHeightUnit(heightPercentSetting, elem.dataset.sizingunitpc);
                  width = height * originalRatio;
                  break;
                case "explicit":
                  width = CalculateWidthUnit(widthPercentSetting, elem.dataset.sizingunitpc);
                  height = CalculateHeightUnit(heightPercentSetting, elem.dataset.sizingunitpc);
                  break;
                default:
                  console.log("ERROR SIZINGMODEPC");
                  break;
              }
              x = elem.dataset.xpc;
              y = elem.dataset.ypc;
            } else if (deviceType == "phone") {
              widthPercentSetting = elem.dataset.widthphone/100;
              heightPercentSetting = elem.dataset.heightphone/100;
              switch (elem.dataset.sizingmodephone) {
                case "widthAutoHeight":
                  width = CalculateWidthUnit(widthPercentSetting, elem.dataset.sizingunitphone);
                  height = width / originalRatio;
                  break;
                case "heightAutoWidth":
                  height = CalculateHeightUnit(heightPercentSetting, elem.dataset.sizingunitphone);
                  width = height * originalRatio;
                  break;
                case "explicit":
                  width = CalculateWidthUnit(widthPercentSetting, elem.dataset.sizingunitphone);
                  height = CalculateHeightUnit(heightPercentSetting, elem.dataset.sizingunitphone);
                  break;
                default:
                  console.log("ERROR SIZINGMODEPHONE");
                  break;
              }
              x = elem.dataset.xphone;
              y = elem.dataset.yphone;
            }
            elem.style.width = width + "px";
            elem.style.height = height + "px";
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
            if (deviceType == "pc" || deviceType == "tablet") {
              let xUnit = CalculateWidthUnit(x/100, elem.dataset.sizingunitpc)
              elem.style.left = (xUnit + offsetX) + "px";
              let yUnit = CalculateHeightUnit(y/100, elem.dataset.sizingunitpc)
              elem.style.top = (yUnit + offsetY) + "px";
            } else {
              let xUnit = CalculateWidthUnit(x/100, elem.dataset.sizingunitphone)
              elem.style.left = (xUnit + offsetX) + "px";
              let yUnit = CalculateHeightUnit(y/100, elem.dataset.sizingunitphone)
              elem.style.top = (yUnit + offsetY) + "px";
            }
            // elem.style.left = ((vw * (x/100)) + offsetX) + "px";
            // elem.style.top = ((vh * (y/100)) + offsetY) + "px";
          };
        `}</script>
      </Helmet>
    </>
  )
};