import { Helmet } from "react-helmet"

//Props Format
/*
const BlogVideoSpoilerProps = {
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
            if (typeof window.aaron.projects.blogvideospoiler == "undefined")
              window.aaron.projects.blogvideospoiler = new Object();
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
              baseelem.classList.add("blogvideospoiler");
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
                let videlem = document.createElement("video");
                videlem.style.maxWidth = "100%";
                videlem.style.maxHeight = "800px";
                // videlem.style.width = "888px";
                // videlem.style.height = "500px";
                videlem.muted = true;
                videlem.loop = true;
                videlem.autoplay = false;
                videlem.controls = true;
                videlem.style.visibility = "hidden";
                // baseelem.append(videlem);

                let srcelem = document.createElement("source");
                srcelem.src = src;
                srcelem.type = "video/mp4";
                videlem.append(srcelem);

                let btnelem = document.createElement("button");
                btnelem.innerText = "Load Video";
                btnelem.style.margin = "2px";
                btnelem.addEventListener("click", () => {
                  videlem.style.visibility = "visible";
                  videlem.play();
                  baseelem.insertBefore(videlem, btnelem);
                  btnelem.remove();
                });
                baseelem.append(btnelem);
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