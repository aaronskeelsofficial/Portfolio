import { Helmet } from "react-helmet"

//Props Format
/*
const SearchBarProps = {
  id: "",
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

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.searchbar == "undefined")
              window.aaron.projects.searchbar = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, imgelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("searchbar");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.backgroundColor = "white";
              baseelem.style.boxShadow = "0px 0px 20px rgb(115, 204, 168)";
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

              imgelem = document.createElement("img");
              imgelem.style.position = "absolute";
              imgelem.style.transform = "translate(-50%,-50%)";
              imgelem.style.top = "50%";
              imgelem.src = "/src/img/searchmag.png";
              //Sizing handled in resize
              // imgelem.style.left = "%";
              // imgelem.style.width = "10%";
              // imgelem.style.height = "100%";
              baseelem.append(imgelem);

              pelem = document.createElement("input");
              pelem.type = "text";
              pelem.placeholder = "js, college, report, unreal engine, etc..."
              pelem.style.position = "absolute";
              pelem.style.transform = "translate(-50%,-50%)";
              pelem.style.top = "50%";
              pelem.style.borderStyle = "none";
              pelem.style.outline = "none";
              pelem.style.fontFamily = "'Josefin Sans', sans-serif";
              pelem.style.fontSize = "100%";
              pelem.style.backgroundColor = "none";
              pelem.style.padding = "0px";
              //Sizing handled in resize
              // imgelem.style.left = "%";
              // imgelem.style.width = "10%";
              // imgelem.style.height = "100%";
              baseelem.append(pelem);
              //
              pelem.addEventListener("input", () => {
                window.aaron.projects.projectbrowser.UpdateProjectsOnDisplay(pelem.value);
              });

              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);

              let baseMeasure = baseelem.getBoundingClientRect();
              //Set img dims
              imgelem.style.width = baseMeasure.height + "px";
              imgelem.style.height = baseMeasure.height + "px";
              imgelem.style.left = parseInt(baseMeasure.height/2) + "px";
              imgelem.style.color = "black";
              imgelem.style.fontSize = "100%";
              //Set p dims
              pelem.style.width = (baseMeasure.width - baseMeasure.height) + "px";
              pelem.style.height = parseInt(baseMeasure.height*.97) + "px";
              pelem.style.left = parseInt(parseInt(imgelem.style.height) + parseInt(pelem.style.width)/2) + "px";
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