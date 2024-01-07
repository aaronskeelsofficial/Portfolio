import { Helmet } from "react-helmet"

//Props Format
/*
const InfoCardsProps = {
  id: "",
  parentid: "",
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
            if (typeof window.aaron.aboutme.infocards == "undefined")
              window.aaron.aboutme.infocards = new Object();
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
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("infocards");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.flexFlow = "row wrap";
              baseelem.style.justifyContent = "space-evenly";
              baseelem.style.alignItems = "center";
              baseelem.style.alignContent = "space-between";
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

              let elems = [];
              for (let i = 0;i < 5;i++) {
                let elem = document.createElement("div");
                elem.id = "card" + i;
                elem.style.minWidth = "300px";
                elem.style.maxWidth = "340px";
                elem.style.boxShadow = "0px 0px 10px 0px black";
                elem.style.position = "relative";
                elem.style.marginBottom = "10px";
                if (deviceType == "phone")
                  elem.style.backgroundColor = "#222733";
                let img = document.createElement("img");
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.filter = "blur(2px)";
                img.style.opacity = ".2";
                elem.append(img);
                baseelem.append(elem);
                elems.push(elem);
              }
              elems[0].childNodes[0].src = "/src/img/aboutme/bg-degrees_min.webp";
              elems[1].childNodes[0].src = "/src/img/aboutme/bg-graduate_min.webp";
              elems[2].childNodes[0].src = "/src/img/aboutme/bg-jobs_min.webp";
              elems[3].childNodes[0].src = "/src/img/aboutme/bg-clubs_min.webp";
              elems[4].childNodes[0].src = "/src/img/aboutme/bg-awards_min.webp";

              let parentelemid = "`+props.parentid+`";
              parentelemid = (parentelemid == "undefined" || parentelemid == "") ? "root" : "` + props.parentid + `";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
              // baseelem.style.minHeight = baseelem.style.height;
              // baseelem.style.height = "";
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