import { Helmet } from "react-helmet"

//Props Format
/*
const ScrollablePageImageProps = {
  id: "",
  parentid: "",
  loadtype: "before",
  loadpagenum: "0",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  sizingunitpc: "viewport",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "50",
  srcpc: "",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  sizingunitphone: "viewport",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50",
  srcphone: "",
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
            if (typeof window.aaron.aboutme.scrollablepageimage == "undefined")
              window.aaron.aboutme.scrollablepageimage = new Object();
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
              baseelem.classList.add("scrollablepageimage");
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
              baseelem.dataset.sizingunitpc = "`+ props.sizingunitpc + `";
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
              baseelem.dataset.sizingunitphone = "`+ props.sizingunitphone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";
              baseelem.dataset.srcphone = "`+ props.srcphone + `";
          
              let parentelemid = "`+ props.parentid + `";
              parentelemid = (parentelemid == "undefined" || parentelemid == "") ? "root" : "` + props.parentid + `";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
              let loadpagenum = "` + props.loadpagenum + `";
              if ("`+ props.loadtype + `" == "before") {
                if (typeof window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum].push(Resize);
              } else {
                if (typeof window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum].push(Resize);
              }
          
              // baseelem.addEventListener("load", Resize);
              baseelem.addEventListener("load", () => {
                console.log("aboutme/scrollablepageimage:: image loaded");
                Resize();
                window.aaron.aboutme.scrollablepage.pageResizeRefs[parseInt(loadpagenum)](true);
              });
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              console.log("aboutme/scrollablepageimage:: image resizing");
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