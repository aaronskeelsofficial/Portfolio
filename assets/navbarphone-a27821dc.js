import{j as t,F as l,H as n}from"./faviconsetter-da5e80b9.js";function i(e){return t(l,{children:t(n,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.navbarpc == "undefined")
              window.aaron.common.navbarpc = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pages;
            
            Startup = function () {
              pages = JSON.parse(\``+JSON.stringify(e.pages)+`\`);
              pagetextelements = [];
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("navbar");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.backgroundColor = "rgb(82, 94, 101)";
              baseelem.style.boxShadow = "black 0px 0px 10px 0px";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.columnGap = "1%";
              baseelem.style.alignItems = "center";

              baseelem.dataset.id = "`+e.id+`";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              baseelem.dataset.anchorpointpc = "`+e.anchorpointpc+`";
              baseelem.dataset.sizingmodepc = "`+e.sizingmodepc+`";
              baseelem.dataset.widthpc = "`+e.widthpc+`";
              baseelem.dataset.heightpc = "`+e.heightpc+`";
              baseelem.dataset.xpc = "`+e.xpc+`";
              baseelem.dataset.ypc = "`+e.ypc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xphone = "`+e.xphone+`";
              baseelem.dataset.yphone = "`+e.yphone+`";

              //Add home button
              let homeAddColorChangeListener = function (imgelem) {
                imgelem.addEventListener("mouseenter", () => {
                  imgelem.src = "/src/img/nav-homehover.png";
                  imgelem.style.border = "solid 1px rgb(115, 204, 168)";
                });
                imgelem.addEventListener("mouseleave", () => {
                  imgelem.src = "/src/img/nav-home.png";
                  imgelem.style.border = "solid 1px rgb(37, 42, 56)";
                });
              }
              if (true) {
                let homeelem = document.createElement("a");
                homeelem.href = "/?skipOverlay=true";
                homeelem.style.height = "85%";
                homeelem.style.position = "absolute";
                homeelem.style.left = "5px";
                homeelem.style.top = "50%";
                homeelem.style.transform = "translate(0,-50%)";
                setTimeout(() => {
                  homeelem.style.width = homeelem.getBoundingClientRect().height + "px";
                },10);
                //
                let imgelem = document.createElement("img");
                imgelem.style.width = "100%";
                imgelem.style.height = "100%";
                imgelem.style.position = "absolute";
                imgelem.style.top = "50%";
                imgelem.style.left = "50%";
                imgelem.style.transform = "translate(-50%,-50%)";
                imgelem.style.borderRadius = "5px";
                //
                if (`+e.activepage+` == 0) {
                  imgelem.src = "/src/img/nav-homehover.png";
                  imgelem.style.border = "solid 1px rgb(115, 204, 168)";
                } else {
                  imgelem.src = "/src/img/nav-home.png";
                  imgelem.style.border = "solid 1px rgb(37, 42, 56)";
                  homeAddColorChangeListener(imgelem);
                  //Preload hover
                  (new Image()).src = "/src/img/nav-homehover.png";
                }
                //
                homeelem.append(imgelem);
                baseelem.append(homeelem);
              }

              //Add pages
              let pageAddColorChangeListener = function (aelem, textelem) {
                aelem.addEventListener("mouseenter", () => {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  textelem.style.color = "rgb(115, 204, 168)";
                });
                aelem.addEventListener("mouseleave", () => {
                  aelem.style.border = "solid 1px rgb(37, 42, 56)";
                  textelem.style.color = "rgb(211, 211, 211)";
                });
              }
              let pageIndex = 0;
              for (let page of pages) {
                pageIndex++;
                //
                let aelem = document.createElement("a");
                aelem.href = page.href;
                aelem.style.minWidth = "10%";
                aelem.style.height = "85%";
                aelem.style.textDecoration = "none";
                aelem.style.borderRadius = "15px";
                //
                let divelem = document.createElement("div");
                divelem.style.width = "100%";
                divelem.style.height = "100%";
                divelem.style.display = "flex";
                divelem.style.justifyContent = "center";
                divelem.style.alignItems = "center";
                //
                let textelem = document.createElement("span");
                textelem.innerText = page.text;
                textelem.style.paddingLeft = "5px";
                textelem.style.paddingRight = "5px";
                //
                if (`+e.activepage+` == pageIndex) {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  textelem.style.color = "rgb(115, 204, 168)";
                } else {
                  aelem.style.border = "solid 1px rgb(37, 42, 56)";
                  textelem.style.color = "rgb(211, 211, 211)";
                  pageAddColorChangeListener(aelem, textelem);
                }
                //
                divelem.append(textelem);
                aelem.append(divelem);
                baseelem.append(aelem);
              }

              //Add resume button
              if (true) {
                let aelem = document.createElement("a");
                aelem.href = "src/misc/Resume%20-%20Aaron%20Skeels%20-%20Compressed.pdf";
                aelem.style.height = "85%";
                aelem.style.textDecoration = "none";
                aelem.style.borderRadius = "15px";
                aelem.style.position = "absolute";
                aelem.style.right = "5px";
                aelem.style.top = "50%";
                aelem.style.transform = "translate(0,-50%)";
                aelem.style.paddingLeft = "5px";
                aelem.style.paddingRight = "5px";
                //
                let divelem = document.createElement("div");
                divelem.style.width = "100%";
                divelem.style.height = "100%";
                divelem.style.display = "flex";
                divelem.style.justifyContent = "center";
                divelem.style.alignItems = "center";
                //
                let textelem = document.createElement("span");
                textelem.innerText = "📄Resume";
                textelem.style.paddingLeft = "5px";
                textelem.style.paddingRight = "5px";
                //
                aelem.style.border = "solid 1px rgb(37, 42, 56)";
                textelem.style.color = "rgb(211, 211, 211)";
                pageAddColorChangeListener(aelem, textelem);
                //
                divelem.append(textelem);
                aelem.append(divelem);
                baseelem.append(aelem);
              }
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, false);
              //Handle home
              if (true) {
                let homeaelem = baseelem.childNodes[0];
                setTimeout(() => {
                  homeaelem.style.width = homeaelem.getBoundingClientRect().height + "px";
                },10);
              }
              //Handle pages
              for (let baseelemchildindex = 1; baseelemchildindex < baseelem.childNodes.length; baseelemchildindex++) {
                let pageaelem = baseelem.childNodes[baseelemchildindex];
                let pagedivelem = pageaelem.childNodes[0];
                let pagetextelem = pagedivelem.childNodes[0];
                pagetextelem.style.fontSize = (pagedivelem.getBoundingClientRect().height*.5) + "px";
              }
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function s(e){return t(l,{children:t(n,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.navbarphone == "undefined")
              window.aaron.common.navbarphone = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, menudiv, bardiv, visualbtndiv, openbtn, closebtn, clickablebtndiv, clickablebtn, pages;
            let animTime = 1;
            
            Startup = function () {
              pages = JSON.parse(\``+JSON.stringify(e.pages)+`\`);
              //This next line is an amendmend after the fact to add a "resume" button. This is BAD. But I have too much tech debt at this point so hacky it is.
              pages.push({ text: "📄Resume", href: "src/misc/Resume%20-%20Aaron%20Skeels%20-%20Compressed.pdf" });
              pagetextelements = [];
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("navbar");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.overflow = "visible";
              baseelem.style.borderBottom = "black 2px solid";
              baseelem.style.backgroundColor = "rgb(82, 94, 101)";
              //
              baseelem.dataset.id = "`+e.id+`";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              baseelem.dataset.anchorpointpc = "`+e.anchorpointpc+`";
              baseelem.dataset.sizingmodepc = "`+e.sizingmodepc+`";
              baseelem.dataset.widthpc = "`+e.widthpc+`";
              baseelem.dataset.heightpc = "`+e.heightpc+`";
              baseelem.dataset.xpc = "`+e.xpc+`";
              baseelem.dataset.ypc = "`+e.ypc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xphone = "`+e.xphone+`";
              baseelem.dataset.yphone = "`+e.yphone+`";
            
              menudiv = document.createElement("div");
              menudiv.id = "`+e.id+`";
              menudiv.style.position = "absolute";
              menudiv.style.left = "0px";
              menudiv.style.top = "0px";
              menudiv.style.backgroundColor = "rgb(82, 94, 101)";
              menudiv.style.boxShadow = "black 0px 0px 10px 0px";
              menudiv.style.display = "flex";
              menudiv.style.flexDirection = "column";
              menudiv.style.justifyContent = "center";
              menudiv.style.rowGap = "5%";
              menudiv.style.alignItems = "center";
              menudiv.style.zIndex = 0;
              menudiv.style.transform = "translate(0%, -101%)";
              menudiv.style.transition = animTime + "s";
              baseelem.append(menudiv);
              
              //visual buttons
              bardiv = document.createElement("div");
              bardiv.style.position = "absolute";
              bardiv.style.left = "0px";
              bardiv.style.top = "0px";
              bardiv.style.width = "100%";
              bardiv.style.height = "100%";
              baseelem.append(bardiv);
              //
              visualbtndiv = document.createElement("div");
              visualbtndiv.style.position = "absolute";
              visualbtndiv.style.left = "0px";
              visualbtndiv.style.top = "0px";
              bardiv.append(visualbtndiv);
              //
              openbtn = document.createElement("span");
              openbtn.innerText = "≡";
              openbtn.style.position = "absolute";
              openbtn.style.transform = "translate(-50%,-50%)";
              openbtn.style.left = "50%";
              openbtn.style.top = "50%";
              openbtn.style.width = "fit-content";
              openbtn.style.height = "fit-content";
              openbtn.style.userSelect = "none";
              openbtn.style.transition = (animTime*.5) + "s linear";
              visualbtndiv.append(openbtn);
              //
              closebtn = document.createElement("span");
              closebtn.innerText = "X";
              closebtn.style.position = "absolute";
              closebtn.style.transform = "translate(-50%,-50%)";
              closebtn.style.left = "50%";
              closebtn.style.top = "-151%";
              closebtn.style.width = "fit-content";
              closebtn.style.height = "fit-content";
              closebtn.style.userSelect = "none";
              closebtn.style.transition = (animTime*.5) + "s linear";
              visualbtndiv.append(closebtn);

              //clickable buttons
              clickablebtndiv = document.createElement("div");
              clickablebtndiv.style.position = "absolute";
              clickablebtndiv.style.left = "0px";
              clickablebtndiv.style.top = "0px";
              bardiv.append(clickablebtndiv);
              //
              clickablebtn = document.createElement("div");
              clickablebtn.style.position = "absolute";
              clickablebtn.style.left = "0px";
              clickablebtn.style.top = "0px";
              clickablebtn.style.width = "100%";
              clickablebtn.style.height = "100%";
              clickablebtn.style.cursor = "pointer";
              closebtn.style.userSelect = "none";
              clickablebtndiv.append(clickablebtn);
              //
              let isMenuOpen = false;
              clickablebtndiv.addEventListener("touchstart", () => {
                if (!isMenuOpen) {
                  openbtn.style.top = "-151%"
                  openbtn.style.opacity = "0";
                  closebtn.style.top = "50%";
                  closebtn.style.opacity = "1";
                  menudiv.style.transform = "translate(0%, 0%)";
                  isMenuOpen = !isMenuOpen;
                } else {
                  openbtn.style.top = "50%"
                  openbtn.style.opacity = "1";
                  closebtn.style.top = "-151%";
                  closebtn.style.opacity = "0";
                  menudiv.style.transform = "translate(0%, -101%)";
                  isMenuOpen = !isMenuOpen;
                }
              });

              //Add pages
              let pageAddColorChangeListener = function (aelem, textelem) {
                let enter = function () {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  textelem.style.color = "rgb(115, 204, 168)";
                }
                let leave = function () {
                  aelem.style.border = "solid 1px rgb(37, 42, 56)";
                  textelem.style.color = "rgb(211, 211, 211)";
                }
                aelem.addEventListener("mouseenter", enter);
                aelem.addEventListener("touchstart", enter);
                aelem.addEventListener("mouseleave", leave);
                aelem.addEventListener("touchend", leave);
              }
              let pageIndex = 0;
              for (let page of pages) {
                pageIndex++;
                //
                let aelem = document.createElement("a");
                aelem.href = page.href;
                aelem.style.minWidth = "10%";
                aelem.style.width = "80%";
                aelem.style.height = "auto";
                aelem.style.textDecoration = "none";
                aelem.style.filter = "drop-shadow(3px 3px 6px white)";
                aelem.style.borderRadius = "15px";
                aelem.style.backgroundColor = "rgb(82, 94, 101)";
                //
                let divelem = document.createElement("div");
                divelem.style.width = "100%";
                divelem.style.height = "100%";
                divelem.style.display = "flex";
                divelem.style.justifyContent = "center";
                divelem.style.alignItems = "center";
                //
                let textelem = document.createElement("span");
                textelem.style.fontSize = "300%";
                textelem.innerText = page.text;
                //
                if (`+e.activepage+` == pageIndex) {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  textelem.style.color = "rgb(115, 204, 168)";
                } else {
                  aelem.style.border = "solid 1px rgb(37, 42, 56)";
                  textelem.style.color = "rgb(211, 211, 211)";
                  pageAddColorChangeListener(aelem, textelem);
                }
                //
                divelem.append(textelem);
                aelem.append(divelem);
                menudiv.append(aelem);
              }
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              //Resize baseelem (coincidentally size of bardiv)
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, false);

              //Resize fullscreen dropdown menu
              menudiv.style.width = vw + "px";
              menudiv.style.height = vh + "px";

              //Resize visualbtndiv
              let bardivMeasure = bardiv.getBoundingClientRect();
              visualbtndiv.style.width = bardivMeasure.height + "px";
              visualbtndiv.style.height = visualbtndiv.style.width;
              //Resize button text
              visualbtndiv.style.fontSize = bardivMeasure.height + "px";

              //Resize clickablebtndiv
              clickablebtndiv.style.width = bardivMeasure.height + "px";
              clickablebtndiv.style.height = clickablebtndiv.style.width;
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}export{i as N,s as a};
