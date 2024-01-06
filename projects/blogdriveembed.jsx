import { Helmet } from "react-helmet"

//Props Format
/*
const BlogDriveEmbedProps = {
  id: "",
  src: "",
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
            if (typeof window.aaron.projects.blogdriveembed == "undefined")
              window.aaron.projects.blogdriveembed = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, elem;
            
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

              if (deviceType == "pc" || deviceType == "tablet") {
                elem = document.createElement("iframe");
                elem.width = "69%";
                elem.height = "800px";
                elem.src = "`+ props.src + `";
              } else {
                elem = document.createElement("span");
                elem.innerText = "EMBED DISABLED FOR MOBILE. THIS IS OUT OF MY CONTROL. GOOGLE EMBEDS HAVE NO CUSTOMIZING PARAMETERS AND IT EMBEDS WAY TOO BIG.";
                elem.style.color = "black";
                elem.style.backgroundColor = "yellow";
                elem.style.width = "69%";
              }
              baseelem.append(elem);

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