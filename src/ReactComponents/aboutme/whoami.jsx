import { Helmet } from "react-helmet"

//Props Format
/*
const WhoamiProps = {
  id: "",
  parentid: "",
  loadtype: "before",
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

//LoadType Enums
/*
* before - This loads before the page has sized itself
* after - This loads after the page has sized itself
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
            if (typeof window.aaron.aboutme.whoami == "undefined")
              window.aaron.aboutme.whoami = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize, ResizeDivs;
            //Hoist vars
            let baseelem, scrollerdiv, scrollerrail, scrollerball, leftdiv, rightdiv, leftcontentdiv, rightcontentdiv;
            //Hoist misc vars
            let IntervalID;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("whoami");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              //
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

              scrollerdiv = document.createElement("div");
              scrollerdiv.style.position = "absolute";
              scrollerdiv.style.transform = "translate(-50%,-50%)";
              scrollerdiv.style.left = "50%";
              scrollerdiv.style.top = "5%";
              scrollerdiv.style.height = "10%";
              scrollerdiv.style.width = "100%";
              baseelem.append(scrollerdiv);
              //
              document.body.addEventListener("mousedown", (e) => {
                if (scrollerball.dataset.isHovered == "true") {
                  scrollerdiv.dataset.mouseorigin = e.screenX;
                  scrollerdiv.dataset.ballorigin = parseInt(scrollerball.style.left);
                  scrollerdiv.dataset.mousedown = "true";
                }
                e.preventDefault();
              });
              document.body.addEventListener("mouseup", () => {
                scrollerdiv.dataset.mousedown = "false";
                scrollerdiv.dataset.mouseorigin = "";
                ResizeDivs();
              });
              document.body.addEventListener("mousemove", (e) => {
                if (scrollerdiv.dataset.mousedown == "true") {
                  let mouseDelta = e.screenX - scrollerdiv.dataset.mouseorigin;
                  let targetLeft = parseInt(scrollerdiv.dataset.ballorigin) + mouseDelta;
                  //Clamp values to rail
                  let divMeasure = scrollerdiv.getBoundingClientRect();
                  let ballMeasure = scrollerball.getBoundingClientRect();
                  targetLeft = Math.min(targetLeft, Math.floor(divMeasure.width)); //This floor call is important because the width may be decimal and that breaks ResizeDivs();
                  targetLeft = Math.max(targetLeft, 0);
                  scrollerball.style.left = targetLeft + "px";
                  ResizeDivs();
                }
              });
              scrollerdiv.addEventListener("touchstart", (e) => {
                if (parseInt(scrollerball.style.left) == 0) {
                  let divMeasure = scrollerdiv.getBoundingClientRect();
                  scrollerball.style.left = divMeasure.width + "px";
                  ResizeDivs();
                } else {
                  scrollerball.style.left = "0px";
                  ResizeDivs();
                }
              });

              scrollerrail = document.createElement("img");
              scrollerrail.style.position = "absolute";
              scrollerrail.style.transform = "translate(-50%,-50%)";
              scrollerrail.style.left = "50%";
              scrollerrail.style.top = "50%";
              scrollerrail.style.height = "100%";
              scrollerrail.style.width = "100%";
              scrollerrail.src = "/src/img/aboutme-slider-rail.png";
              scrollerdiv.append(scrollerrail);

              scrollerball = document.createElement("div");
              scrollerball.style.position = "absolute";
              scrollerball.style.transform = "translate(-50%,-50%)";
              scrollerball.style.left = "50%";
              scrollerball.style.top = "50%";
              scrollerball.style.height = "100%";
              scrollerball.style.width = "0px"; //Constantly updated in resize function
              scrollerball.style.borderRadius = "50%";
              scrollerball.style.backgroundColor = "#73cca8";
              scrollerball.style.cursor = "pointer";
              scrollerdiv.append(scrollerball);
              //
              let GoLeft, GoRight, GoMid, StopAnimation;
              // let deltaX = scroller
              GoLeft = function () {
                scrollerball.dataset.isRunning = "true";
                scrollerball.style.transition = "left .25s linear";
                IntervalID = setInterval(() => {
                  ResizeDivs();
                }, 10);
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .25) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    GoRight();
                  }, 250);
                })
              }
              GoRight = function () {
                if (scrollerball.dataset.isStopped == "true")
                  return;
                scrollerball.style.transition = "left .25s linear";
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .75) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    GoMid();
                  }, 250);
                })
              }
              GoMid = function () {
                if (scrollerball.dataset.isStopped == "true")
                  return;
                scrollerball.style.transition = "left .25s linear";
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .5) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    StopAnimation();
                  }, 250);
                })
              }
              StopAnimation = function () {
                clearInterval(IntervalID);
                if (scrollerball.dataset.isStopped != "true") {
                  scrollerball.dataset.isStopped = "true";
                  scrollerball.style.transition = "";
                  window.requestAnimationFrame(() => {
                    scrollerball.style.left = scrollerball.style.left;
                  });
                }
              }
              document.getElementById("scrollablebody").addEventListener("scroll", () => {
                if (scrollerdiv.getBoundingClientRect().top < vh - baseelem.getBoundingClientRect().height * .75 && scrollerball.dataset.isStopped != "true" && scrollerball.dataset.isRunning != "true") {
                  GoLeft();
                }
              });
              //
              scrollerball.dataset.isHovered = "false";
              scrollerball.addEventListener("mouseenter", () => {
                scrollerball.dataset.isHovered = "true";
                StopAnimation();
              });
              scrollerball.addEventListener("mouseleave", () => {
                scrollerball.dataset.isHovered = "false";
              });

              leftdiv = document.createElement("div");
              leftdiv.style.position = "absolute";
              leftdiv.style.transform = "translate(0,-50%)";
              leftdiv.style.left = "0px";
              leftdiv.style.top = "55%";
              leftdiv.style.height = "90%";
              leftdiv.style.width = "100%";
              // leftdiv.style.backgroundColor = "red";
              leftdiv.style.overflow = "hidden";
              baseelem.append(leftdiv);

              rightdiv = document.createElement("div");
              rightdiv.style.position = "absolute";
              rightdiv.style.transform = "translate(0,-50%)";
              rightdiv.style.right = "0px";
              rightdiv.style.top = "55%";
              rightdiv.style.height = "90%";
              rightdiv.style.width = "100%";
              // rightdiv.style.backgroundColor = "blue";
              rightdiv.style.overflow = "hidden";
              baseelem.append(rightdiv);

              //Here we make leftcontentdiv. The purpose of this is to make the "masking" effect function properly. As it stands, all "module" content places relative to "left" of the viewport or parent element. "leftdiv" would function fine, but as it stands "rightdiv" would shift the content it's holding as the "mask" effect is created by physically moving the rightdiv to the right. By taking advantage of a separate child "contentdiv" we can attach the placement of the contentdiv relative to rightdiv's "right" (which maintains the "masking effect") while actually keeping the contentdiv full size and permanently in place holding all the content where it should be.
              leftcontentdiv = document.createElement("div");
              leftcontentdiv.id = "whoami-leftcontent";
              leftcontentdiv.style.position = "absolute";
              leftcontentdiv.style.transform = "translate(0,-50%)";
              leftcontentdiv.style.left = "0px";
              leftcontentdiv.style.top = "50%";
              leftcontentdiv.style.height = "0%"; //Set this in resize
              leftcontentdiv.style.width = "0%"; //Set this in resize
              leftcontentdiv.style.backgroundColor = "white";
              leftdiv.append(leftcontentdiv);

              rightcontentdiv = document.createElement("div");
              rightcontentdiv.id = "whoami-rightcontent";
              rightcontentdiv.style.position = "absolute";
              rightcontentdiv.style.transform = "translate(0,-50%)";
              rightcontentdiv.style.right = "0px";
              rightcontentdiv.style.top = "50%";
              rightcontentdiv.style.height = "0%"; //Set this in resize
              rightcontentdiv.style.width = "0%"; //Set this in resize
              rightcontentdiv.style.backgroundColor = "black";
              rightdiv.append(rightcontentdiv);

              let parentelemid = "`+ props.parentid + `" == "" ? "root" : "` + props.parentid + `";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let priorFrameDivWidth = parseInt(baseelem.style.width);
            
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);

              //Resize ball
              let ballMeasure = scrollerball.getBoundingClientRect();
              scrollerball.style.width = (ballMeasure.bottom-ballMeasure.top) + "px";
              //Now we must do hacky stuff. Ball starts at left = "50%". We need this in pixels. We convert here if that is the case because the div has properly been sized if the user is clicking the ball.
              if (scrollerball.style.left == "50%") {
                scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width / 2) + "px";
              } else {
                //If the "left" isn't 50% then we know it has been moved to a pixel value and we can now calculate the percentage of the total width it has been moved over relative to the previous frame, and update that to the new div width
                let newFrameDivWidth = parseInt(baseelem.style.width);
                scrollerball.style.left = (parseInt(scrollerball.style.left)/priorFrameDivWidth*newFrameDivWidth) + "px";
              }

              //Resize contentdivs
              let baseMeasure = baseelem.getBoundingClientRect();
              leftcontentdiv.style.width = baseMeasure.width + "px";
              leftcontentdiv.style.height = parseInt(baseMeasure.height * .9) + "px";
              rightcontentdiv.style.width = baseMeasure.width + "px";
              rightcontentdiv.style.height = parseInt(baseMeasure.height * .9) + "px";
              
              ResizeDivs();
            };
            ResizeDivs = function () {
              let ballMeasure = scrollerball.getBoundingClientRect();
              let cutX = parseInt((ballMeasure.left+ballMeasure.right)/2) - scrollerdiv.getBoundingClientRect().left;
              leftdiv.style.width = (cutX-0) + "px";
              rightdiv.style.width = (parseInt(baseelem.style.width) - cutX) + "px";
            }
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