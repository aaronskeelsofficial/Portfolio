import { Helmet } from "react-helmet"

//Props Format
/*
const HeaderScrollerProps = {
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
            if (typeof window.aaron.aboutme.headerscroller == "undefined")
              window.aaron.aboutme.headerscroller = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, bigelem, medelem, smallelem, IntervalID;

            let clamp = function (a, min = 0, max = 1) {
              return Math.min(max, Math.max(min, a));
            }
            let evaluateLinear = function (xValue, xArray, yArray) {
              //Find which two x points to interpolate between
              //Assume xArray is assorted ascending
              //Assume xArray length = yArray length
              let x1, x2, y1, y2;
              if (xValue < xArray[0]) {
                x1 = xArray[0];
                x2 = xArray[1];
                y1 = yArray[0];
                y2 = yArray[1];
              } else if (xValue > xArray[xArray.length-1]) {
                x1 = xArray[xArray.length-2];
                x2 = xArray[xArray.length-1];
                y1 = yArray[yArray.length-2];
                y2 = yArray[yArray.length-1];
              } else {
                for (let i = 0;i < xArray.length-1;i++) {
                  if (xValue >= xArray[i] && xValue <= xArray[i+1]) {
                    x1 = xArray[i];
                    x2 = xArray[i+1];
                    y1 = yArray[i];
                    y2 = yArray[i+1];
                    i = xArray.length; //End loop
                  }
                }
              }
              return y1 + ((xValue-x1)*(y2-y1)/(x2-x1));
            }
            let evaluateParametric = function (xValue, xArray, yArray) {
              //Find which two x points to interpolate between
              //Assume xArray is assorted ascending
              //Assume xArray length = yArray length
              let x1, x2, y1, y2;
              if (xValue < xArray[0]) {
                x1 = xArray[0];
                x2 = xArray[1];
                y1 = yArray[0];
                y2 = yArray[1];
              } else if (xValue > xArray[xArray.length-1]) {
                x1 = xArray[xArray.length-2];
                x2 = xArray[xArray.length-1];
                y1 = yArray[yArray.length-2];
                y2 = yArray[yArray.length-1];
              } else {
                for (let i = 0;i < xArray.length-1;i++) {
                  if (xValue >= xArray[i] && xValue <= xArray[i+1]) {
                    x1 = xArray[i];
                    x2 = xArray[i+1];
                    y1 = yArray[i];
                    y2 = yArray[i+1];
                    i = xArray.length; //End loop
                  }
                }
              }
              let t = (xValue-xArray[0])/(xArray[1]-xArray[0]);
              let sqt = t * t;
              let output = sqt / (2 * (sqt - t) + 1);
              return yArray[0] + output*(yArray[1]-yArray[0]);
            }
            let queueScrollDown = function () {
              let xValues = [0,800];
              let yValues; //We set this after the setTimeout delay for a smooth experience
              let startingTime; //We set this after the setTimeout delay for a smooth experience
              let scrollablebody = document.getElementById("scrollablebody");
              //Disable scrolling until finished
              scrollablebody.dataset.disableScroll = "true";
              let SetScroll = function () {
                let deltaTime = Date.now() - startingTime;
                let scrollValue = evaluateParametric(deltaTime, xValues, yValues);
                scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(scrollValue*vh));
                scrollablebody.dataset.targetScrollPos = parseInt(scrollValue*vh);
                if (deltaTime > xValues[1]) {
                  scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(vh));
                  delete scrollablebody.dataset.disableScroll;
                  clearInterval(IntervalID);
                }
              }
              clearInterval(IntervalID);
              setTimeout(() => {
                startingTime = Date.now()
                yValues = [(scrollablebody.scrollTop/vh), 1];
                IntervalID = setInterval(SetScroll, 10);
              }, 50);
            }
            let queueScrollUp = function () {
              let xValues = [0,800];
              let yValues; //We set this after the setTimeout delay for a smooth experience
              let startingTime; //We set this after the setTimeout delay for a smooth experience
              let scrollablebody = document.getElementById("scrollablebody");
              //Disable scrolling until finished
              scrollablebody.dataset.disableScroll = "true";
              let SetScroll = function () {
                let deltaTime = Date.now() - startingTime;
                let scrollValue = evaluateParametric(deltaTime, xValues, yValues);
                scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(scrollValue*vh));
                scrollablebody.dataset.targetScrollPos = parseInt(scrollValue*vh);
                if (deltaTime > xValues[1]) {
                  scrollablebody.scroll(scrollablebody.scrollLeft, 0);
                  delete scrollablebody.dataset.disableScroll;
                  clearInterval(IntervalID);
                }
              }
              clearInterval(IntervalID);
              setTimeout(() => {
                startingTime = Date.now()
                yValues = [(scrollablebody.scrollTop/vh), 0];
                IntervalID = setInterval(SetScroll, 10);
              }, 50);
            }
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("headerscroller");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.cursor = "pointer";
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
              baseelem.addEventListener("click", () => {
                queueScrollDown();
              });

              let interval = 1;
              let offsetInterval = 50;
              let topMax = "75";
              let topMin = "25";
              let MoveUp = function () {
                setTimeout(() => {
                  bigelem.style.top = topMin + "px";
                }, offsetInterval*0);
                setTimeout(() => {
                  medelem.style.top = topMin + "px";
                }, offsetInterval*1);
                setTimeout(() => {
                  smallelem.style.top = topMin + "px";
                }, offsetInterval*2);
                setTimeout(() => {
                  MoveDown();
                }, interval*1000);
              }
              let MoveDown = function () {
                setTimeout(() => {
                  bigelem.style.top = topMax + "px";
                }, offsetInterval*0);
                setTimeout(() => {
                  medelem.style.top = topMax + "px";
                }, offsetInterval*1);
                setTimeout(() => {
                  smallelem.style.top = topMax + "px";
                }, offsetInterval*2);
                setTimeout(() => {
                  MoveUp();
                }, interval*1000);
              }

              bigelem = document.createElement("img");
              bigelem.src = "/src/img/jigglearrow-big-g.png";
              bigelem.style.position = "absolute";
              bigelem.style.top = topMax + "%";
              bigelem.style.left = "50%";
              bigelem.style.width = "100%";
              bigelem.style.height = "100%";
              bigelem.style.transform = "translate(-50%,-50%)";
              bigelem.style.transition = "top " + interval + "s linear";
              bigelem.ondragstart = () => {
                return false;
              };

              medelem = document.createElement("img");
              medelem.src = "/src/img/jigglearrow-med-g.png";
              medelem.style.position = "absolute";
              medelem.style.top = topMax + "%";
              medelem.style.left = "50%";
              medelem.style.width = "100%";
              medelem.style.height = "100%";
              medelem.style.transform = "translate(-50%,-50%)";
              medelem.style.transition = "top " + interval + "s linear";
              medelem.ondragstart = () => {
                return false;
              };

              smallelem = document.createElement("img");
              smallelem.src = "/src/img/jigglearrow-sma-g.png";
              smallelem.style.position = "absolute";
              smallelem.style.top = topMax + "%";
              smallelem.style.left = "50%";
              smallelem.style.width = "100%";
              smallelem.style.height = "100%";
              smallelem.style.transform = "translate(-50%,-50%)";
              smallelem.style.transition = "top " + interval + "s linear";
              smallelem.ondragstart = () => {
                return false;
              };
          
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.appendChild(baseelem);
              baseelem.append(bigelem);
              baseelem.append(medelem);
              baseelem.append(smallelem);
              //
              scrollablebody.addEventListener("wheel", (e) => {
                if (scrollablebody.dataset.disableScroll == "true")
                  return;

                //Do specific checks to see if should automate top page scrolling
                if (scrollablebody.scrollTop >= 0 && scrollablebody.scrollTop < vh/2 && e.deltaY > 0)
                  queueScrollDown();
                else if (scrollablebody.scrollTop > vh/2 && scrollablebody.scrollTop <= vh && e.deltaY < 0)
                  queueScrollUp();

                else {
                  //Do general check to see if should cap targetscrollpos
                  setTimeout(() => {
                    //This condition will only be met if we scroll upwards from a point past the navbar through a point where the navbar is no longer at top of screen
                    if (scrollablebody.dataset.targetScrollPos > 0 && scrollablebody.dataset.targetScrollPos < vh) {
                      //Stop autoscroll animation from scrollbar
                      uss.stopScrollingAll();
                      //Reset values
                      scrollablebody.dataset.targetScrollPos = vh;
                      scrollablebody.scroll(0, vh);
                    }
                  }, 1);
                }
              });
          
              Resize();
              MoveUp();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
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