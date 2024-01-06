import { Helmet } from "react-helmet"

//Props Format
/*
const BlogHeaderProps = {
  id: "",
  text: "test",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "",
  color: "",
  //
  enablepc: "true",
  whitespacepc: "",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
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
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogheader == "undefined")
              window.aaron.projects.blogheader = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("blogheader");
              baseelem.style.textAlign = "center";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              if ((deviceType == "pc" || deviceType == "tablet") && "` + props.whitespacepc + `" != "undefined" && "` + props.whitespacepc + `" != "") {
                baseelem.style.whiteSpace = "` + props.whitespacepc + `";
              } else if (deviceType == "phone" && "` + props.whitespacephone + `" != "undefined" && "` + props.whitespacephone + `" != "") {
                baseelem.style.whiteSpace = "` + props.whitespacephone + `";
                baseelem.style.wordBreak = "break-all";
              } else {
                baseelem.style.wordBreak = "break-word";
              }
              //
              baseelem.dataset.id = "`+ props.id + `";
              baseelem.dataset.fontfamily = "`+ props.fontfamily + `";
              baseelem.dataset.fontsize = "`+ props.fontsize + `";
              baseelem.dataset.fontweight = "`+ props.fontweight + `";
              baseelem.dataset.color = "`+ props.color + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";

              pelem = document.createElement("p");
              pelem.style.fontFamily = "'Josefin Sans', sans-serif";
              if (deviceType == "pc" || deviceType == "tablet") {
                pelem.style.fontSize = "480%";
              } else {
                pelem.style.fontSize = "300%";
              }
              pelem.style.margin = "0px";
              if (deviceType == "pc" || deviceType == "tablet") {
                pelem.style.maxWidth = "69%";
              } else {
                pelem.style.maxWidth = "95%";
              }
              pelem.style.marginTop = "10px";
              pelem.style.marginBottom = "10px";
              pelem.innerHTML = "`+ props.text + `";
              baseelem.append(pelem);
              //
              let fontfamily = "`+ props.fontfamily + `";
              if (fontfamily != "") {
                pelem.style.fontFamily = fontfamily;
              }
              let fontsize = "`+ props.fontsize + `";
              if (fontsize != "")
                pelem.style.fontSize = fontsize;
              let fontweight = "`+ props.fontweight + `";
              if (fontweight != "")
                pelem.style.fontWeight = fontweight;
              let textalign = "`+ props.textalign + `";
              if (textalign != "undefined" && textalign != "")
                pelem.style.textAlign = textalign;
              let color = "`+ props.color + `";
              if (color != "")
                pelem.style.color = color;

              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.appendChild(baseelem);
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              //No Resize
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            //window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
    </>
  )
};