import { Helmet } from "react-helmet"

//Props Format
/*
const ScrollingGeneralBackdropProps = {
  id: "",
  src: "",
  naturalwidth: "",
  naturalheight: "",
  transition: "left linear 30s",
  timetoscroll: "30000",
  //
  enablepc: "true",
  zindexpc: "1",
  //
  enablephone: "true",
  zindexphone: "1",
}
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
            if (typeof window.aaron.common.scrollingbackdrop == "undefined")
              window.aaron.common.scrollingbackdrop = new Object();
          })();

          function flushCss(element) {
            // By reading the offsetHeight property, we are forcing
            // the browser to flush the pending CSS changes (which it
            // does to ensure the value obtained is accurate).
            element.offsetHeight;
          }

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, animelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("scrollingbackdrop");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.left = "50%";
              baseelem.style.top = "50%";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "`+ props.id + `";
              baseelem.dataset.src = "`+ props.src + `";
              baseelem.dataset.naturalwidth = "`+ props.naturalwidth + `";
              baseelem.dataset.naturalheight = "`+ props.naturalheight + `";
              baseelem.dataset.transition = "`+ props.transition + `";
              baseelem.dataset.timetoscroll = "`+ props.timetoscroll + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
            
              animelem = document.createElement("div");
              animelem.style.position = "absolute";
              animelem.style.transform = "translate(-50%,-50%)";
              animelem.style.left = "0px";
              animelem.style.top = "50%";
              //
              let moveelemfunc;
              moveelemfunc = function () {
                animelem.style.transition = "none";
                let widthCache = parseInt(baseelem.dataset.naturalwidth) * (vh/parseInt(baseelem.dataset.naturalheight));
                animelem.style.left = parseInt(widthCache/2) + "px";
                // animelem.style.left = parseInt(vw/2) + "px";
                flushCss(baseelem);
                //Flushing the css is necessary to immediately effect the element without merging css style changes within the render frame
                animelem.style.transition = baseelem.dataset.transition;
                animelem.style.left = parseInt(-widthCache/2) + "px";
                // animelem.style.left = parseInt(-vw/2) + "px";
                setTimeout(() => {
                  moveelemfunc()
                }, parseInt(baseelem.dataset.timetoscroll));
              }
              setTimeout(moveelemfunc, 5);
              //It is important be initialize this process after a delay because the window render system merges css style changes which messes up everything

              let star1 = document.createElement("img");
              star1.src = baseelem.dataset.src;
              star1.style.userSelect = "none";
              star1.style.position = "absolute";
              star1.style.left = "0px";
              star1.style.top = "0px";
              star1.style.height = "100%";
              //
              star1.ondragstart = () => {
                return false;
              };
              //

              let star2 = document.createElement("img");
              star2.src = baseelem.dataset.src;
              star2.style.userSelect = "none";
              star2.style.position = "absolute";
              star2.style.left = "100%";
              star2.style.top = "0px";
              star2.style.height = "100%";
              //
              star2.ondragstart = () => {
                return false;
              };
              //
          
              let root = document.getElementById("root");
              root.append(baseelem);
              baseelem.append(animelem);
              animelem.append(star1);
              animelem.append(star2);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let doStuff = function () {
                baseelem.style.zIndex = (deviceType == "pc" || deviceType == "tablet") ? baseelem.dataset.zindexpc : baseelem.dataset.zindexphone;
                baseelem.style.width = vw + "px";
                baseelem.style.height = vh + "px";
                let originalRatio = parseInt(baseelem.dataset.naturalwidth)/parseInt(baseelem.dataset.naturalheight);
                let width = vh*originalRatio, height = vh;
                animelem.style.width = width + "px";
                animelem.style.height = height + "px";
                // animelem.style.width = vw + "px";
                // animelem.style.height = vh + "px";
                animelem.style.left = parseInt(width/2) + "px";
                animelem.style.top = parseInt(vh/2) + "px";
              }
              doStuff();
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