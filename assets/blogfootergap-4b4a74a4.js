import{j as t,F as n,H as a}from"./faviconsetter-da5e80b9.js";function l(e){return t(n,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.scrollablebody == "undefined")
              window.aaron.common.scrollablebody = new Object();
          })();

          if (true) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "scrollablebody";
              baseelem.style.position = "absolute";
              baseelem.style.left = "50%";
              baseelem.style.top = "6%";
              baseelem.style.transform = "translate(-50%,0px)";
              baseelem.style.width = "100%";
              baseelem.style.height = "94%";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "scrollablebody";
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);

              //Account for possible late-loading scrollbar
              if(window?.aaron?.common?.scrollbar?.pending[baseelem.id]) {
                window.aaron.common.scrollbar.pending[baseelem.id]();
                window.aaron.common.scrollbar.resizefuncs[baseelem.id]();
              }
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              //No resize
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            //window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function i(e){return t(n,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogheadergap == "undefined")
              window.aaron.projects.blogheadergap = new Object();
          })();

          if (true) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.classList.add("blogheadergap");

              //Sizing clones navbar in resize
              // baseelem.style.width = "100%";
              // baseelem.style.height = "6%";

              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.appendChild(baseelem);

              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let navbar = document.getElementsByClassName("navbar")[0];
              baseelem.style.width = navbar.style.width;
              baseelem.style.height = navbar.style.height;
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function s(e){return t(n,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogheader == "undefined")
              window.aaron.projects.blogheader = new Object();
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
              baseelem.classList.add("blogheader");
              baseelem.style.textAlign = "center";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              if ((deviceType == "pc" || deviceType == "tablet") && "`+e.whitespacepc+'" != "undefined" && "'+e.whitespacepc+`" != "") {
                baseelem.style.whiteSpace = "`+e.whitespacepc+`";
              } else if (deviceType == "phone" && "`+e.whitespacephone+'" != "undefined" && "'+e.whitespacephone+`" != "") {
                baseelem.style.whiteSpace = "`+e.whitespacephone+`";
                baseelem.style.wordBreak = "break-all";
              } else {
                baseelem.style.wordBreak = "break-word";
              }
              //
              baseelem.dataset.id = "`+e.id+`";
              baseelem.dataset.fontfamily = "`+e.fontfamily+`";
              baseelem.dataset.fontsize = "`+e.fontsize+`";
              baseelem.dataset.fontweight = "`+e.fontweight+`";
              baseelem.dataset.color = "`+e.color+`";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";

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
              let textalign = "`+e.textalign+`";
              if (textalign != "undefined" && textalign != "")
                pelem.style.textAlign = textalign;
              let color = "`+e.color+`";
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
        `})})})}function d(e){return t(n,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogtext == "undefined")
              window.aaron.projects.blogtext = new Object();
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
              baseelem.classList.add("blogtext");
              baseelem.style.textAlign = "center";
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
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";

              pelem = document.createElement("p");
              pelem.style.fontFamily = "'Josefin Sans', sans-serif";
              pelem.style.fontSize = "120%";
              pelem.style.margin = "0px";
              if (deviceType == "pc" || deviceType == "tablet") {
                pelem.style.maxWidth = "69%";
              } else {
                pelem.style.maxWidth = "95%";
              }
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
              let textalign = "`+e.textalign+`";
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
        `})})})}function c(e){return t(n,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogfootergap == "undefined")
              window.aaron.projects.blogfootergap = new Object();
          })();

          if (true) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.classList.add("blogfootergap");

              baseelem.style.width = "100%";
              baseelem.style.height = "20px";

              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.appendChild(baseelem);

              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              //No resize
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            //window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}export{i as B,l as S,s as a,d as b,c};
