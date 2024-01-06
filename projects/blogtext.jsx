import { Helmet } from "react-helmet"

//Props Format
/*
const BlogTextProps = {
  id: "",
  text: "test",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
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
            if (typeof window.aaron.projects.blogtext == "undefined")
              window.aaron.projects.blogtext = new Object();
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
              baseelem.classList.add("blogtext");
              baseelem.style.textAlign = "center";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              //baseelem.style.backgroundColor = "orange";
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
              pelem.style.fontSize = "120%";
              pelem.style.margin = "0px";
              if (deviceType == "pc" || deviceType == "tablet") {
                pelem.style.maxWidth = "69%";
              } else {
                pelem.style.maxWidth = "95%";
              }
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
              let color = "`+ props.color + `";
              if (color != "")
                pelem.style.color = color;
              let textalign = "`+ props.textalign + `";
              if (textalign != "undefined" && textalign != "")
                pelem.style.textAlign = textalign;

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