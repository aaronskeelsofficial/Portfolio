import { Helmet } from "react-helmet"

//Props Format
/*
const BlogImageProps = {
  id: "",
  //
  enablepc: "true",
  srcpc: "",
  //
  enablephone: "true",
  srcphone: ""
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
            if (typeof window.aaron.projects.blogimage == "undefined")
              window.aaron.projects.blogimage = new Object();
            let snowflake = ` + Math.random() + `;
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
              baseelem.classList.add("blogimage");
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.style.maxWidth = "60%";
              } else {
                baseelem.style.maxWidth = "90%";
              }
              baseelem.style.marginLeft = "auto";
              baseelem.style.marginRight = "auto";

              let propsrc;
              if (deviceType == "pc" || deviceType == "tablet") {
                propsrc = "`+ props.srcpc + `";
              } else {
                propsrc = "`+ props.srcphone + `";
              }
              if (propsrc.startsWith("[")) {
                propsrc = JSON.parse(propsrc);
              } else {
                propsrc = [propsrc];
              }
              for (let src of propsrc) {
                aelem = document.createElement("a");
                aelem.href = src;
                aelem.target = "_blank";
                aelem.rel = "noreferrer noopener";
                baseelem.append(aelem);
              
                imgelem = document.createElement("img");
                imgelem.style.maxWidth = "100%";
                imgelem.style.maxHeight = "800px";
                imgelem.src = src;
                aelem.append(imgelem);
              }
          
              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.style.textAlign = "center";
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