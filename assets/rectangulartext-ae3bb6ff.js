import{j as t,F as n,H as i}from"./faviconsetter-da5e80b9.js";function l(e){return t(n,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.rectangulartext == "undefined")
              window.aaron.aboutme.rectangulartext = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("rectangulartext");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              //baseelem.style.backgroundColor = "orange";
              //
              baseelem.dataset.id = "`+e.id+`";
              baseelem.dataset.fontfamily = "`+e.fontfamily+`";
              baseelem.dataset.fontsize = "`+e.fontsize+`";
              baseelem.dataset.fontweight = "`+e.fontweight+`";
              baseelem.dataset.color = "`+e.color+`";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              baseelem.dataset.anchorpointpc = "`+e.anchorpointpc+`";
              baseelem.dataset.sizingmodepc = "`+e.sizingmodepc+`";
              baseelem.dataset.sizingunitpc = "`+e.sizingunitpc+`";
              baseelem.dataset.widthpc = "`+e.widthpc+`";
              baseelem.dataset.heightpc = "`+e.heightpc+`";
              baseelem.dataset.xpc = "`+e.xpc+`";
              baseelem.dataset.ypc = "`+e.ypc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.sizingunitphone = "`+e.sizingunitphone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xphone = "`+e.xphone+`";
              baseelem.dataset.yphone = "`+e.yphone+`";

              pelem = document.createElement("p");
              pelem.innerHTML = "`+e.text+`";
              baseelem.append(pelem);
              //
              let fontfamily = "`+e.fontfamily+`";
              if (fontfamily != "") {
                pelem.style.fontFamily = fontfamily;
              }
              let fontsize = "`+e.fontsize+`";
              if (fontsize != "")
                pelem.style.fontSize = fontsize;
              let fontweight = "`+e.fontweight+`";
              if (fontweight != "")
                pelem.style.fontWeight = fontweight;
              let color = "`+e.color+`";
              if (color != "")
                pelem.style.color = color;

              let parentelemid = "`+e.parentid+'" == "" ? "root" : "'+e.parentid+`";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              //The following is required because for infocards the div isn't properly resized until the image loads so if we resize here immediately, it bases the "parent" sizing unit off an inappropriately sized div.
              if (parentelemid.includes("card")) {
                parentelem.childNodes[0].addEventListener("load", () => {
                  Resize();
                });
              } else {
                Resize();
              }
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              //Calculate proper font size to fit within rectangle maxing either height or width
              let boundingWidth = parseInt(baseelem.style.width);
              let boundingHeight = parseInt(baseelem.style.height);
              let targetFontSize = ("`+e.rszestimatedfontsize+'" != "undefined") ? '+e.rszestimatedfontsize+` : boundingHeight;
              pelem.style.fontSize = targetFontSize + "px";
              let liveWidth = pelem.getBoundingClientRect().width;
              let liveHeight = pelem.getBoundingClientRect().height;
              while ((Math.floor(liveWidth) > boundingWidth || Math.floor(liveHeight) > boundingHeight) && targetFontSize > 1) {
                targetFontSize -= ("`+e.rszdeltafontsize+'" != "undefined") ? '+e.rszdeltafontsize+` : 1;
                pelem.style.fontSize = targetFontSize + "px";
                liveWidth = pelem.getBoundingClientRect().width;
                liveHeight = pelem.getBoundingClientRect().height;
              }
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}export{l as R};
