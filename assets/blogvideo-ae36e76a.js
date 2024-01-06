import{j as t,F as a,H as r}from"./faviconsetter-da5e80b9.js";function l(e){return t(a,{children:t(r,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogvideo == "undefined")
              window.aaron.projects.blogvideo = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("blogvideo");
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.style.maxWidth = "60%";
              } else {
                baseelem.style.maxWidth = "60%";
              }
              baseelem.style.marginLeft = "auto";
              baseelem.style.marginRight = "auto";

              let propsrc;
              if (deviceType == "pc" || deviceType == "tablet") {
                propsrc = "`+e.srcpc+`";
              } else {
                propsrc = "`+e.srcphone+`";
              }
              if (propsrc.startsWith("[")) {
                propsrc = JSON.parse(propsrc);
              } else {
                propsrc = [propsrc];
              }
              for (let src of propsrc) {
                let frameelem = document.createElement("iframe");
                frameelem.style.maxWidth = "100%";
                frameelem.style.maxHeight = "800px";
                frameelem.style.width = "888px";
                frameelem.style.height = "500px";
                frameelem.src = src;
                frameelem.frameBorder = 0;
                frameelem.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                frameelem.allowFullscreen = true;
                frameelem.volume = 0;
                baseelem.append(frameelem);
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
        `})})})}export{l as B};
