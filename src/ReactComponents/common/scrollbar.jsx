import { Helmet } from "react-helmet"

//Props Format
/*
const ScrollbarProps = {
  id: "",
  targetid: "",
  //
  enablepc: "true",
  zindexpc: "1",
  scrollstrengthpc: "50",
  minimumanimframespc: "5",
  pixelsperframepc: "13",
  widthmodepc: "px",
  widthvaluepc: "10",
  scrollbaroffsetpc: "0",
  //
  enablephone: "true",
  zindexphone: "1",
  scrollstrengthphone: "50",
  minimumanimframesphone: "5",
  pixelsperframephone: "5",
  widthmodephone: "px",
  widthvaluephone: "5",
  scrollbaroffsetphone: "100"
}
*/

//WidthMode Enums
/*
* px, %
*/

//ScrollbarOffset Info
/*
* This value is in % relative to the width of the scrollbar
*/

//Scroll state is stored within elements via elem.dataset.targetScrollPos for external mods
//Disable scrolling with elem.dataset.disableScroll flag

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
            if (typeof window.aaron.common.scrollbar == "undefined")
              window.aaron.common.scrollbar = new Object();
            if (typeof window.aaron.common.scrollbar.pending == "undefined")
              window.aaron.common.scrollbar.pending = new Object();
            if (typeof window.aaron.common.scrollbar.resizefuncs == "undefined")
              window.aaron.common.scrollbar.resizefuncs = new Object();
          })();
          
          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let div, img, scrolllistener;
            //Hoist misc vars
            let toggleSkipScrollListenerResize = false;
        
            Startup = function () {
              let targetScrollID = '`+ props.targetid + `';
              if (targetScrollID == "")
                return;
              let targetElem = document.getElementById(targetScrollID);
              if (targetElem != null) {
                AddElems();
              } else {
                window.aaron.common.scrollbar.pending[targetScrollID] = AddElems;
              }
              window.aaron.common.scrollbar.resizefuncs[targetScrollID] = Resize;
            };
            AddElems = function () {
              let targetScrollID = '`+ props.targetid + `';
              let targetElem = document.getElementById(targetScrollID);
              targetElem.style.overflow = "hidden";
              
              div = document.createElement("div");
              div.classList.add("scrollbar");
              div.style.position = "absolute";
              div.style.zIndex = window.getComputedStyle(targetElem).zIndex;
              img = document.createElement("img");
              img.src = "https://imgur.com/ctKPRB1.png";
              img.style.position = "absolute";
              img.style.pointerEvents = "none";
              scrolllistener = document.createElement("img");
              scrolllistener.src = "https://imgur.com/e7GGFtS.png";
              scrolllistener.style.position = "absolute";
              document.getElementById("universalsmoothscrollscript").addEventListener('load', ()=>{
                if (deviceType == "pc" || deviceType == "tablet") {
                  uss.setMinAnimationFrame(`+ props.minimumanimframespc + `);
                  uss.setStepLength(`+ props.pixelsperframepc + `);
                } else {
                  uss.setMinAnimationFrame(`+ props.minimumanimframesphone + `);
                  uss.setStepLength(`+ props.pixelsperframephone + `);
                }
              });
        
              // --- Scroll overrides ---
          //PC Wheel Override
              targetElem.onwheel = function (event) {
                if (event.deltaY == 0 || targetElem.dataset.disableScroll == "true")
                  return;

                let delta;
                if (deviceType == "pc" || deviceType == "tablet") {
                  delta = event.deltaY > 0 ? `+ props.scrollstrengthpc + ` : -` + props.scrollstrengthpc + `;
                } else {
                  delta = event.deltaY > 0 ? `+ props.scrollstrengthphone + ` : -` + props.scrollstrengthphone + `;
                }
                // targetElem.scroll({
                //   top: targetElem.scrollTop + delta,
                //   left: 0,
                //   behavior: 'smooth'
                // });
                //Touchpad delta override
                if (Math.abs(event.deltaY) < 15) {
                  delta = event.deltaY;
                }
                //Mac (Safari) fix because no smooth scroll
                if (typeof targetElem.dataset.targetScrollPos == "undefined")
                  targetElem.dataset.targetScrollPos = targetElem.scrollTop;
                let newTargetScrollPos = parseInt(targetElem.dataset.targetScrollPos) + delta;
                newTargetScrollPos = Math.max(Math.min(newTargetScrollPos,targetElem.scrollTopMax), 0);
                targetElem.dataset.targetScrollPos = newTargetScrollPos;
                uss.scrollYTo(newTargetScrollPos, targetElem);
              };
          //PC Bar Drag Override
              let barTouchY = 0;
              let barStartScroll = 0;
              let isMouseDown = false;
              let cacheZIndex = -999;
              scrolllistener.addEventListener('mousedown', (event) => {
                if (isMouseDown == false) {
                  barTouchY = event.clientY;
                  barStartScroll = targetElem.scrollTop;
                  isMouseDown = true;
                  cacheZIndex = div.style.zIndex;
                  scrolllistener.style.zIndex = 100;
                  div.style.zIndex = 100;
                  scrolllistener.style.left = (-vw) + "px";
                  scrolllistener.style.width = (vw*2) + "px";
                  scrolllistener.style.top = (-vh) + "px";
                  scrolllistener.style.height = (vh*2) + "px";
                  toggleSkipScrollListenerResize = true;
                }
              });
              let stopBarScroll = function (event) {
                isMouseDown = false;
                scrolllistener.style.zIndex = cacheZIndex;
                div.style.zIndex = cacheZIndex;
                toggleSkipScrollListenerResize = false;
                Resize();
              };
              scrolllistener.addEventListener('mouseup', (event) => {
                if (isMouseDown == true) {
                  stopBarScroll(event);
                }
              });
              scrolllistener.addEventListener('mouseleave', (event) => {
                if (isMouseDown == true) {
                  stopBarScroll(event);
                }
              });
              scrolllistener.addEventListener('mousemove', (event) => {
                if (isMouseDown == true) {
                  let deltaYPagespace = (event.clientY - barTouchY);
                  let cTarget = getComputedStyle(targetElem);
                  let targetActualHeight = parseInt(cTarget.height) + parseInt(cTarget.paddingTop) + parseInt(cTarget.paddingBottom);
                  let deltaYScrollspace = deltaYPagespace * (targetElem.scrollHeight/targetActualHeight);
                  targetElem.scroll({
                    top: barStartScroll + deltaYScrollspace,
                    left: 0,
                    behavior: 'instant'
                  });
                  targetElem.dataset.targetScrollPos = (barStartScroll + deltaYScrollspace);
                }
              });
              scrolllistener.ondragstart = function (event) {
                return false;
              }
          //Phone Touch Override
              let touchY;
              let startScroll;
              let touchMomentumYCheckpointNew, touchMomentumYCheckpointOld;
              let touchMomentumTCheckpointNew, touchMomentumTCheckpointOld;
              let touchMomentumTimeout;
              targetElem.ontouchstart = function (event) {
                touchY = event.touches[0].pageY;
                startScroll = targetElem.scrollTop;
                touchMomentumYCheckpointNew = event.touches[0].pageY;
                touchMomentumYCheckpointOld = touchMomentumYCheckpointNew;
                touchMomentumTCheckpointNew = Date.now();
                touchMomentumTCheckpointOld = touchMomentumTCheckpointNew;
                if (typeof touchMomentumTimeout != "undefined") {
                  clearTimeout(touchMomentumTimeout);
                  delete touchMomentumTimeout;
                }
              };
              targetElem.ontouchmove = function (event) {
                let deltaY = - (event.touches[0].pageY - touchY);
                targetElem.scroll({
                  top: startScroll + deltaY,
                  left: 0,
                  behavior: 'instant'
                });
                touchMomentumYCheckpointOld = touchMomentumYCheckpointNew;
                touchMomentumYCheckpointNew = event.touches[0].pageY;
                touchMomentumTCheckpointOld = touchMomentumTCheckpointNew;
                touchMomentumTCheckpointNew = Date.now();
              };
              targetElem.ontouchend = function (event) {
                let velocityDecayRate = .03;
                let recursiveMomentum = function (velocity, originalTime, curTime) {
                  touchMomentumTimeout = setTimeout(recursiveMomentum, 10, velocity, originalTime, Date.now());
                  let deltaV = velocityDecayRate * (originalTime - curTime) * (velocity >= 0 ? -1 : 1);
                  let newV = velocity - deltaV;
                  if (Math.sign(velocity) != Math.sign(newV) || newV == 0) {
                    clearTimeout(touchMomentumTimeout);
                    delete touchMomentumTimeout;
                    return;
                  }
                  let newTop = targetElem.scrollTop + newV;
                  targetElem.scroll({
                    top: newTop,
                    left: 0,
                    behavior: 'instant'
                  });
                  if (newTop <= 0 || newTop >= targetElem.scrollTopMax) {
                    clearTimeout(touchMomentumTimeout);
                    delete touchMomentumTimeout;
                    return;
                  }
                };
                let deltaY = -(touchMomentumYCheckpointNew - touchMomentumYCheckpointOld);
                let deltaT = touchMomentumTCheckpointNew - touchMomentumTCheckpointOld;
                let rate = deltaY / deltaT;
                let rateConverted = rate * 10;
                recursiveMomentum(rateConverted, Date.now(), Date.now());
              };
              //Resize listener
              targetElem.onscroll = function (event) {
                Resize();
              }
              //
        
              // Mouse move fade functions
              let cacheOpacity = div.style.opacity;
              let cacheTimeout = null;
              div.style.transition = "opacity 1s";
              div.style.opacity = 0;
              targetElem.addEventListener('mousemove', () => {
                div.style.opacity = cacheOpacity;
                if (cacheTimeout != null)
                  clearTimeout(cacheTimeout);
                cacheTimeout = setTimeout(() => {
                  div.style.opacity = 0;
                }, 500);
              });
              targetElem.addEventListener('scroll', () => {
                div.style.opacity = cacheOpacity;
                if (cacheTimeout != null)
                  clearTimeout(cacheTimeout);
                cacheTimeout = setTimeout(() => {
                  div.style.opacity = 0;
                }, 500);
              });
              //
              
              let root = document.getElementById("root");
              div.appendChild(img);
              div.appendChild(scrolllistener);
              root.appendChild(div);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              if (div == null) //This happens when attached elements resize before scrollbar AddElems is called
                return;
              let targetScrollID = '`+ props.targetid + `';
              let targetElem = document.getElementById(targetScrollID);
              function doStuff () {
                let measurement = targetElem.getBoundingClientRect();
                let cTarget = getComputedStyle(targetElem);
                let barWidth;
                if (deviceType == "pc" || deviceType == "tablet") {
                  barWidth = '`+ props.widthmodepc + `' == "px" ? ` + props.widthvaluepc + ` : vw*` + props.widthvaluepc + `/100;
                } else {
                  barWidth = '`+ props.widthmodephone + `' == "px" ? ` + props.widthvaluephone + ` : vw*` + props.widthvaluephone + `/100;
                }
                //Handle necessary visibility
                if (targetElem.scrollTopMax == 0) {
                  div.style.visibility = "hidden";
                } else {
                  div.style.visibility = "visible";
                }
                //Handle div
                let offset;
                if (deviceType == "pc" || deviceType == "tablet") {
                  offset = `+ props.scrollbaroffsetpc + `/100 * barWidth;
                } else {
                  offset = `+ props.scrollbaroffsetphone + `/100 * barWidth;
                }
                div.style.left = (measurement.left + measurement.width - parseInt(cTarget.borderRight) - barWidth + offset) + "px";
                div.style.top = (measurement.top) + "px";
                div.style.width = barWidth + "px";
                div.style.height = (measurement.height) + "px";
                //Handle img
                let targetActualHeight = parseInt(cTarget.height) + parseInt(cTarget.paddingTop) + parseInt(cTarget.paddingBottom);
                let resizedBarTop = targetElem.scrollTop/targetElem.scrollHeight * targetActualHeight;
                let barHeight = targetActualHeight/targetElem.scrollHeight * targetActualHeight;
                img.style.width = barWidth + "px";
                img.style.top = (resizedBarTop + parseInt(cTarget.borderTop)) + "px";
                img.style.height = barHeight + "px";
                img.style.left = "0px";
                if (toggleSkipScrollListenerResize == false) {
                  scrolllistener.style.width = img.style.width;
                  scrolllistener.style.top = img.style.top;
                  scrolllistener.style.height = img.style.height;
                  scrolllistener.style.left = img.style.left;
                }
              }
              if (targetElem != null)
                doStuff();
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            // window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems); // We don't want this one to run automatically, startup will handle
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
    </>
  )
};