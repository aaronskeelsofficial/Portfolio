import{j as t,F as i,H as a,a as s,S as d,c as r,R as c,b as m,M as p,d as h,e as b}from"./faviconsetter-da5e80b9.js";import{S as u,a as g}from"./scrollbar-85b404cc.js";import{S as l}from"./scrollablepage-a2dbc0aa.js";import{R as n}from"./rectangulartext-ae3bb6ff.js";function y(e){return t(i,{children:t(a,{children:t("script",{children:`
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
              baseelem.style.top = "50%";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.width = "100%";
              baseelem.style.height = "100%";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "scrollablebody";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              baseelem.dataset.anchorpointpc = "`+e.anchorpointpc+`";
              baseelem.dataset.sizingmodepc = "`+e.sizingmodepc+`";
              baseelem.dataset.widthpc = "`+e.widthpc+`";
              baseelem.dataset.heightpc = "`+e.heightpc+`";
              baseelem.dataset.xpc = "`+e.xpc+`";
              baseelem.dataset.ypc = "`+e.ypc+`";
              baseelem.dataset.srcpc = "`+e.srcpc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xphone = "`+e.xphone+`";
              baseelem.dataset.yphone = "`+e.yphone+`";
              baseelem.dataset.srcphone = "`+e.srcphone+`";
          
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
        `})})})}function f(e){return t(i,{children:t(a,{children:t("script",{children:`
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
            let Startup, AddElems, Activate, Resize, HandleScrollPlacement;
            //Hoist vars
            let baseelem, pages;

            HandleScrollPlacement = function () {
              let scrollablebody = document.getElementById("scrollablebody");
              let top = vh - scrollablebody.scrollTop;
              top = Math.max(0, top);
              baseelem.style.top = top + "px";
            }
            Startup = function () {
              pages = JSON.parse(\``+JSON.stringify(e.pages)+`\`);
              pagetextelements = [];
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("customnavbarpc");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,0)";
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
              //
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.addEventListener("scroll", HandleScrollPlacement);

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
              //Handle navbar baseelem
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, false); //Do normal stuff
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
              HandleScrollPlacement();
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function w(e){return t(i,{children:t(a,{children:t("script",{children:`
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

            HandleScrollPlacement = function () {
              let scrollablebody = document.getElementById("scrollablebody");
              let top = vh - scrollablebody.scrollTop;
              top = Math.max(0, top);
              baseelem.style.top = top + "px";
            }
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
              baseelem.style.transform = "translate(-50%,0)";
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
              //
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.addEventListener("scroll", HandleScrollPlacement);
            
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
              menudiv.style.visibility = "hidden"; //Custom navbar code only
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
              closebtn.style.visibility = "hidden"; //Custom navbar code only
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
                  openbtn.style.visibility = "hidden";
                  closebtn.style.top = "50%";
                  closebtn.style.opacity = "1";
                  closebtn.style.visibility = "visible";
                  menudiv.style.transform = "translate(0%, 0%)";
                  menudiv.style.visibility = "visible";
                  isMenuOpen = !isMenuOpen;
                } else {
                  openbtn.style.top = "50%"
                  openbtn.style.opacity = "1";
                  openbtn.style.visibility = "visible";
                  closebtn.style.top = "-151%";
                  closebtn.style.opacity = "0";
                  closebtn.style.visibility = "hidden";
                  menudiv.style.transform = "translate(0%, -101%)";
                  menudiv.style.visibility = "hidden";
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

              HandleScrollPlacement();
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function x(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.headervideo == "undefined")
              window.aaron.aboutme.headervideo = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, backelem, faceelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("headervideo");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.overflow = "hidden";
              baseelem.style.backgroundColor = "black";
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
              baseelem.dataset.srcpc = "`+e.srcpc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xphone = "`+e.xphone+`";
              baseelem.dataset.yphone = "`+e.yphone+`";
              baseelem.dataset.srcphone = "`+e.srcphone+`";

              let loadingelem = document.createElement("p");
              loadingelem.style.position = "absolute";
              loadingelem.style.left = "50%";
              loadingelem.style.top = "50%";
              loadingelem.style.transform = "translate(-50%, -50%)";
              loadingelem.innerText = "Loading...";
              baseelem.append(loadingelem);

              backelem = document.createElement("video");
              backelem.muted = "true";
              backelem.loop = "true";
              backelem.autoplay = "true";
              backelem.style.position = "absolute";
              backelem.style.transform = "translate(-50%,-50%)";
              backelem.style.left = "50%";
              backelem.style.top = "50%";
              backelem.style.userSelect = "none";
              backelem.style.zIndex = 0;
              //
              let source = document.createElement("source");
              // source.src = "https://i.imgur.com/tvzH8C7.mp4";
              setTimeout(() => {
                source.src = "https://i.imgur.com/qwKhg7N.mp4";
                backelem.load();
                backelem.play();
              }, 100);
              source.type = "video/mp4";
              backelem.append(source);

              faceelem = document.createElement("img");
              faceelem.style.position = "absolute";
              faceelem.style.transform = "translate(-50%,-50%)";
              faceelem.style.left = "50%";
              faceelem.style.top = "50%";
              faceelem.style.width = "100.5%";
              faceelem.style.height = "100.5%";
              faceelem.style.userSelect = "none";
              faceelem.style.zIndex = 1;
              faceelem.style.backgroundColor = "white";
              faceelem.style.opacity = "1";
              faceelem.style.transition = "background-color 2.5s ease-in, opacity 2.5s ease-in";
              //
              faceelem.src = "/src/img/overlay-nameplate.png";
              faceelem.ondragstart = () => {
                return false;
              };
              window.requestAnimationFrame(() => {
                faceelem.style.backgroundColor = "rgb(84,84,84)";
                faceelem.style.opacity = ".8";
                setTimeout(() => {
                  faceelem.style.transition = "background-color 1s linear";
                  faceelem.style.backgroundColor = "rgba(84,84,84,0)"
                }, 2500);
              });
          
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.appendChild(baseelem);
              baseelem.append(backelem);
              baseelem.append(faceelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              if (vw/1920 > vh/1080) { //If width stretch is more than height
                backelem.style.width = "100%"; //Then scale off width
                backelem.style.height = "";
              } else { //If height stretch is more than width
                backelem.style.height = "100%"; //Then scale off height
                backelem.style.width = "";
              }
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function v(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.headerscroller == "undefined")
              window.aaron.aboutme.headerscroller = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, bigelem, medelem, smallelem, IntervalID;

            let clamp = function (a, min = 0, max = 1) {
              return Math.min(max, Math.max(min, a));
            }
            let evaluateLinear = function (xValue, xArray, yArray) {
              //Find which two x points to interpolate between
              //Assume xArray is assorted ascending
              //Assume xArray length = yArray length
              let x1, x2, y1, y2;
              if (xValue < xArray[0]) {
                x1 = xArray[0];
                x2 = xArray[1];
                y1 = yArray[0];
                y2 = yArray[1];
              } else if (xValue > xArray[xArray.length-1]) {
                x1 = xArray[xArray.length-2];
                x2 = xArray[xArray.length-1];
                y1 = yArray[yArray.length-2];
                y2 = yArray[yArray.length-1];
              } else {
                for (let i = 0;i < xArray.length-1;i++) {
                  if (xValue >= xArray[i] && xValue <= xArray[i+1]) {
                    x1 = xArray[i];
                    x2 = xArray[i+1];
                    y1 = yArray[i];
                    y2 = yArray[i+1];
                    i = xArray.length; //End loop
                  }
                }
              }
              return y1 + ((xValue-x1)*(y2-y1)/(x2-x1));
            }
            let evaluateParametric = function (xValue, xArray, yArray) {
              //Find which two x points to interpolate between
              //Assume xArray is assorted ascending
              //Assume xArray length = yArray length
              let x1, x2, y1, y2;
              if (xValue < xArray[0]) {
                x1 = xArray[0];
                x2 = xArray[1];
                y1 = yArray[0];
                y2 = yArray[1];
              } else if (xValue > xArray[xArray.length-1]) {
                x1 = xArray[xArray.length-2];
                x2 = xArray[xArray.length-1];
                y1 = yArray[yArray.length-2];
                y2 = yArray[yArray.length-1];
              } else {
                for (let i = 0;i < xArray.length-1;i++) {
                  if (xValue >= xArray[i] && xValue <= xArray[i+1]) {
                    x1 = xArray[i];
                    x2 = xArray[i+1];
                    y1 = yArray[i];
                    y2 = yArray[i+1];
                    i = xArray.length; //End loop
                  }
                }
              }
              let t = (xValue-xArray[0])/(xArray[1]-xArray[0]);
              let sqt = t * t;
              let output = sqt / (2 * (sqt - t) + 1);
              return yArray[0] + output*(yArray[1]-yArray[0]);
            }
            let queueScrollDown = function () {
              let xValues = [0,800];
              let yValues; //We set this after the setTimeout delay for a smooth experience
              let startingTime; //We set this after the setTimeout delay for a smooth experience
              let scrollablebody = document.getElementById("scrollablebody");
              //Disable scrolling until finished
              scrollablebody.dataset.disableScroll = "true";
              let SetScroll = function () {
                let deltaTime = Date.now() - startingTime;
                let scrollValue = evaluateParametric(deltaTime, xValues, yValues);
                scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(scrollValue*vh));
                scrollablebody.dataset.targetScrollPos = parseInt(scrollValue*vh);
                if (deltaTime > xValues[1]) {
                  scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(vh));
                  delete scrollablebody.dataset.disableScroll;
                  clearInterval(IntervalID);
                }
              }
              clearInterval(IntervalID);
              setTimeout(() => {
                startingTime = Date.now()
                yValues = [(scrollablebody.scrollTop/vh), 1];
                IntervalID = setInterval(SetScroll, 10);
              }, 50);
            }
            let queueScrollUp = function () {
              let xValues = [0,800];
              let yValues; //We set this after the setTimeout delay for a smooth experience
              let startingTime; //We set this after the setTimeout delay for a smooth experience
              let scrollablebody = document.getElementById("scrollablebody");
              //Disable scrolling until finished
              scrollablebody.dataset.disableScroll = "true";
              let SetScroll = function () {
                let deltaTime = Date.now() - startingTime;
                let scrollValue = evaluateParametric(deltaTime, xValues, yValues);
                scrollablebody.scroll(scrollablebody.scrollLeft, parseInt(scrollValue*vh));
                scrollablebody.dataset.targetScrollPos = parseInt(scrollValue*vh);
                if (deltaTime > xValues[1]) {
                  scrollablebody.scroll(scrollablebody.scrollLeft, 0);
                  delete scrollablebody.dataset.disableScroll;
                  clearInterval(IntervalID);
                }
              }
              clearInterval(IntervalID);
              setTimeout(() => {
                startingTime = Date.now()
                yValues = [(scrollablebody.scrollTop/vh), 0];
                IntervalID = setInterval(SetScroll, 10);
              }, 50);
            }
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("headerscroller");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.cursor = "pointer";
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
              //
              baseelem.addEventListener("click", () => {
                queueScrollDown();
              });

              let interval = 1;
              let offsetInterval = 50;
              let topMax = "75";
              let topMin = "25";
              let MoveUp = function () {
                setTimeout(() => {
                  bigelem.style.top = topMin + "px";
                }, offsetInterval*0);
                setTimeout(() => {
                  medelem.style.top = topMin + "px";
                }, offsetInterval*1);
                setTimeout(() => {
                  smallelem.style.top = topMin + "px";
                }, offsetInterval*2);
                setTimeout(() => {
                  MoveDown();
                }, interval*1000);
              }
              let MoveDown = function () {
                setTimeout(() => {
                  bigelem.style.top = topMax + "px";
                }, offsetInterval*0);
                setTimeout(() => {
                  medelem.style.top = topMax + "px";
                }, offsetInterval*1);
                setTimeout(() => {
                  smallelem.style.top = topMax + "px";
                }, offsetInterval*2);
                setTimeout(() => {
                  MoveUp();
                }, interval*1000);
              }

              bigelem = document.createElement("img");
              bigelem.src = "/src/img/jigglearrow-big-g.png";
              bigelem.style.position = "absolute";
              bigelem.style.top = topMax + "%";
              bigelem.style.left = "50%";
              bigelem.style.width = "100%";
              bigelem.style.height = "100%";
              bigelem.style.transform = "translate(-50%,-50%)";
              bigelem.style.transition = "top " + interval + "s linear";
              bigelem.ondragstart = () => {
                return false;
              };

              medelem = document.createElement("img");
              medelem.src = "/src/img/jigglearrow-med-g.png";
              medelem.style.position = "absolute";
              medelem.style.top = topMax + "%";
              medelem.style.left = "50%";
              medelem.style.width = "100%";
              medelem.style.height = "100%";
              medelem.style.transform = "translate(-50%,-50%)";
              medelem.style.transition = "top " + interval + "s linear";
              medelem.ondragstart = () => {
                return false;
              };

              smallelem = document.createElement("img");
              smallelem.src = "/src/img/jigglearrow-sma-g.png";
              smallelem.style.position = "absolute";
              smallelem.style.top = topMax + "%";
              smallelem.style.left = "50%";
              smallelem.style.width = "100%";
              smallelem.style.height = "100%";
              smallelem.style.transform = "translate(-50%,-50%)";
              smallelem.style.transition = "top " + interval + "s linear";
              smallelem.ondragstart = () => {
                return false;
              };
          
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.appendChild(baseelem);
              baseelem.append(bigelem);
              baseelem.append(medelem);
              baseelem.append(smallelem);
              //
              scrollablebody.addEventListener("wheel", (e) => {
                if (scrollablebody.dataset.disableScroll == "true")
                  return;

                //Do specific checks to see if should automate top page scrolling
                if (scrollablebody.scrollTop >= 0 && scrollablebody.scrollTop < vh/2 && e.deltaY > 0)
                  queueScrollDown();
                else if (scrollablebody.scrollTop > vh/2 && scrollablebody.scrollTop <= vh && e.deltaY < 0)
                  queueScrollUp();

                else {
                  //Do general check to see if should cap targetscrollpos
                  setTimeout(() => {
                    //This condition will only be met if we scroll upwards from a point past the navbar through a point where the navbar is no longer at top of screen
                    if (scrollablebody.dataset.targetScrollPos > 0 && scrollablebody.dataset.targetScrollPos < vh) {
                      //Stop autoscroll animation from scrollbar
                      uss.stopScrollingAll();
                      //Reset values
                      scrollablebody.dataset.targetScrollPos = vh;
                      scrollablebody.scroll(0, vh);
                    }
                  }, 1);
                }
              });
          
              Resize();
              MoveUp();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function z(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.infocards == "undefined")
              window.aaron.aboutme.infocards = new Object();
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
              baseelem.classList.add("infocards");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.flexFlow = "row wrap";
              baseelem.style.justifyContent = "space-evenly";
              baseelem.style.alignItems = "center";
              baseelem.style.alignContent = "space-between";
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

              let elems = [];
              for (let i = 0;i < 5;i++) {
                let elem = document.createElement("div");
                elem.id = "card" + i;
                elem.style.minWidth = "300px";
                elem.style.maxWidth = "340px";
                elem.style.boxShadow = "0px 0px 10px 0px black";
                elem.style.position = "relative";
                elem.style.marginBottom = "10px";
                if (deviceType == "phone")
                  elem.style.backgroundColor = "#222733";
                let img = document.createElement("img");
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.filter = "blur(2px)";
                img.style.opacity = ".2";
                elem.append(img);
                baseelem.append(elem);
                elems.push(elem);
              }
              elems[0].childNodes[0].src = "/src/img/aboutme/bg-degrees_min.webp";
              elems[1].childNodes[0].src = "/src/img/aboutme/bg-graduate_min.webp";
              elems[2].childNodes[0].src = "/src/img/aboutme/bg-jobs_min.webp";
              elems[3].childNodes[0].src = "/src/img/aboutme/bg-clubs_min.webp";
              elems[4].childNodes[0].src = "/src/img/aboutme/bg-awards_min.webp";

              let parentelemid = "`+e.parentid+`";
              parentelemid = (parentelemid == "undefined" || parentelemid == "") ? "root" : "`+e.parentid+`";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
              // baseelem.style.minHeight = baseelem.style.height;
              // baseelem.style.height = "";
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function S(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.scrollablepageimage == "undefined")
              window.aaron.aboutme.scrollablepageimage = new Object();
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
              baseelem = document.createElement("img");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("scrollablepageimage");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.userSelect = "none";
              baseelem.style.visibility = "hidden";
              //
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.src = "`+e.srcpc+`";
              } else {
                baseelem.src = "`+e.srcphone+`";
              }
              baseelem.ondragstart = () => {
                return false;
              };
              //
              baseelem.dataset.id = "`+e.id+`";
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
              baseelem.dataset.srcpc = "`+e.srcpc+`";
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
              baseelem.dataset.srcphone = "`+e.srcphone+`";
          
              let parentelemid = "`+e.parentid+`";
              parentelemid = (parentelemid == "undefined" || parentelemid == "") ? "root" : "`+e.parentid+`";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
              let loadpagenum = "`+e.loadpagenum+`";
              if ("`+e.loadtype+`" == "before") {
                if (typeof window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum].push(Resize);
              } else {
                if (typeof window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum].push(Resize);
              }
          
              // baseelem.addEventListener("load", Resize);
              baseelem.addEventListener("load", () => {
                console.log("aboutme/scrollablepageimage:: image loaded");
                Resize();
                window.aaron.aboutme.scrollablepage.pageResizeRefs[parseInt(loadpagenum)](true);
              });
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              console.log("aboutme/scrollablepageimage:: image resizing");
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function A(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.scrollablerectangulartext == "undefined")
              window.aaron.aboutme.scrollablerectangulartext = new Object();
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
              baseelem.classList.add("scrollablerectangulartext");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.alignItems = "center";
              baseelem.style.textAlign = "center";
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

              let parentelemid = "`+e.parentid+`";
              parentelemid = (parentelemid == "undefined" || parentelemid == "") ? "root" : "`+e.parentid+`";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
              let loadpagenum = "`+e.loadpagenum+`";
              if ("`+e.loadtype+`" == "before") {
                if (typeof window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.beforePageResize[loadpagenum].push(Resize);
              } else {
                if (typeof window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] == "undefined")
                  window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum] = [];
                window.aaron.aboutme.scrollablepage.afterPageResize[loadpagenum].push(Resize);
              }
          
              Resize();
              //The following is required because for infocards the div isn't properly resized until the image loads so if we resize here immediately, it bases the "parent" sizing unit off an inappropriately sized div.
              if (parentelemid.includes("card")) {
                parentelem.childNodes[0].addEventListener("load", () => {
                  Resize();
                });
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
              let targetFontSize = boundingHeight;
              pelem.style.fontSize = targetFontSize + "px";
              let liveWidth = pelem.getBoundingClientRect().width;
              let liveHeight = pelem.getBoundingClientRect().height;
              while ((liveWidth > boundingWidth || liveHeight > boundingHeight) && targetFontSize > 1) {
                // console.log("aboutme/rectangulartext: doesn't fit " + (liveWidth > boundingWidth) + "" + (liveHeight > boundingHeight) + "" + targetFontSize);
                targetFontSize -= 1;
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
        `})})})}function R(e){return t(i,{children:t(a,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.whoami == "undefined")
              window.aaron.aboutme.whoami = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize, ResizeDivs;
            //Hoist vars
            let baseelem, scrollerdiv, scrollerrail, scrollerball, leftdiv, rightdiv, leftcontentdiv, rightcontentdiv;
            //Hoist misc vars
            let IntervalID;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("whoami");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              //
              baseelem.dataset.id = "`+e.id+`";
              baseelem.dataset.text = "`+e.text+`";
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

              scrollerdiv = document.createElement("div");
              scrollerdiv.style.position = "absolute";
              scrollerdiv.style.transform = "translate(-50%,-50%)";
              scrollerdiv.style.left = "50%";
              scrollerdiv.style.top = "5%";
              scrollerdiv.style.height = "10%";
              scrollerdiv.style.width = "100%";
              baseelem.append(scrollerdiv);
              //
              document.body.addEventListener("mousedown", (e) => {
                if (scrollerball.dataset.isHovered == "true") {
                  scrollerdiv.dataset.mouseorigin = e.screenX;
                  scrollerdiv.dataset.ballorigin = parseInt(scrollerball.style.left);
                  scrollerdiv.dataset.mousedown = "true";
                }
                e.preventDefault();
              });
              document.body.addEventListener("mouseup", () => {
                scrollerdiv.dataset.mousedown = "false";
                scrollerdiv.dataset.mouseorigin = "";
                ResizeDivs();
              });
              document.body.addEventListener("mousemove", (e) => {
                if (scrollerdiv.dataset.mousedown == "true") {
                  let mouseDelta = e.screenX - scrollerdiv.dataset.mouseorigin;
                  let targetLeft = parseInt(scrollerdiv.dataset.ballorigin) + mouseDelta;
                  //Clamp values to rail
                  let divMeasure = scrollerdiv.getBoundingClientRect();
                  let ballMeasure = scrollerball.getBoundingClientRect();
                  targetLeft = Math.min(targetLeft, Math.floor(divMeasure.width)); //This floor call is important because the width may be decimal and that breaks ResizeDivs();
                  targetLeft = Math.max(targetLeft, 0);
                  scrollerball.style.left = targetLeft + "px";
                  ResizeDivs();
                }
              });
              scrollerdiv.addEventListener("touchstart", (e) => {
                if (parseInt(scrollerball.style.left) == 0) {
                  let divMeasure = scrollerdiv.getBoundingClientRect();
                  scrollerball.style.left = divMeasure.width + "px";
                  ResizeDivs();
                } else {
                  scrollerball.style.left = "0px";
                  ResizeDivs();
                }
              });

              scrollerrail = document.createElement("img");
              scrollerrail.style.position = "absolute";
              scrollerrail.style.transform = "translate(-50%,-50%)";
              scrollerrail.style.left = "50%";
              scrollerrail.style.top = "50%";
              scrollerrail.style.height = "100%";
              scrollerrail.style.width = "100%";
              scrollerrail.src = "/src/img/aboutme-slider-rail.png";
              scrollerdiv.append(scrollerrail);

              scrollerball = document.createElement("div");
              scrollerball.style.position = "absolute";
              scrollerball.style.transform = "translate(-50%,-50%)";
              scrollerball.style.left = "50%";
              scrollerball.style.top = "50%";
              scrollerball.style.height = "100%";
              scrollerball.style.width = "0px"; //Constantly updated in resize function
              scrollerball.style.borderRadius = "50%";
              scrollerball.style.backgroundColor = "#73cca8";
              scrollerball.style.cursor = "pointer";
              scrollerdiv.append(scrollerball);
              //
              let GoLeft, GoRight, GoMid, StopAnimation;
              // let deltaX = scroller
              GoLeft = function () {
                scrollerball.dataset.isRunning = "true";
                scrollerball.style.transition = "left .25s linear";
                IntervalID = setInterval(() => {
                  ResizeDivs();
                }, 10);
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .25) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    GoRight();
                  }, 250);
                })
              }
              GoRight = function () {
                if (scrollerball.dataset.isStopped == "true")
                  return;
                scrollerball.style.transition = "left .25s linear";
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .75) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    GoMid();
                  }, 250);
                })
              }
              GoMid = function () {
                if (scrollerball.dataset.isStopped == "true")
                  return;
                scrollerball.style.transition = "left .25s linear";
                window.requestAnimationFrame(() => {
                  scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width * .5) + "px";
                  setTimeout(() => {
                    ResizeDivs();
                    StopAnimation();
                  }, 250);
                })
              }
              StopAnimation = function () {
                clearInterval(IntervalID);
                if (scrollerball.dataset.isStopped != "true") {
                  scrollerball.dataset.isStopped = "true";
                  scrollerball.style.transition = "";
                  window.requestAnimationFrame(() => {
                    scrollerball.style.left = scrollerball.style.left;
                  });
                }
              }
              document.getElementById("scrollablebody").addEventListener("scroll", () => {
                if (scrollerdiv.getBoundingClientRect().top < vh - baseelem.getBoundingClientRect().height * .75 && scrollerball.dataset.isStopped != "true" && scrollerball.dataset.isRunning != "true") {
                  GoLeft();
                }
              });
              //
              scrollerball.dataset.isHovered = "false";
              scrollerball.addEventListener("mouseenter", () => {
                scrollerball.dataset.isHovered = "true";
                StopAnimation();
              });
              scrollerball.addEventListener("mouseleave", () => {
                scrollerball.dataset.isHovered = "false";
              });

              leftdiv = document.createElement("div");
              leftdiv.style.position = "absolute";
              leftdiv.style.transform = "translate(0,-50%)";
              leftdiv.style.left = "0px";
              leftdiv.style.top = "55%";
              leftdiv.style.height = "90%";
              leftdiv.style.width = "100%";
              // leftdiv.style.backgroundColor = "red";
              leftdiv.style.overflow = "hidden";
              baseelem.append(leftdiv);

              rightdiv = document.createElement("div");
              rightdiv.style.position = "absolute";
              rightdiv.style.transform = "translate(0,-50%)";
              rightdiv.style.right = "0px";
              rightdiv.style.top = "55%";
              rightdiv.style.height = "90%";
              rightdiv.style.width = "100%";
              // rightdiv.style.backgroundColor = "blue";
              rightdiv.style.overflow = "hidden";
              baseelem.append(rightdiv);

              //Here we make leftcontentdiv. The purpose of this is to make the "masking" effect function properly. As it stands, all "module" content places relative to "left" of the viewport or parent element. "leftdiv" would function fine, but as it stands "rightdiv" would shift the content it's holding as the "mask" effect is created by physically moving the rightdiv to the right. By taking advantage of a separate child "contentdiv" we can attach the placement of the contentdiv relative to rightdiv's "right" (which maintains the "masking effect") while actually keeping the contentdiv full size and permanently in place holding all the content where it should be.
              leftcontentdiv = document.createElement("div");
              leftcontentdiv.id = "whoami-leftcontent";
              leftcontentdiv.style.position = "absolute";
              leftcontentdiv.style.transform = "translate(0,-50%)";
              leftcontentdiv.style.left = "0px";
              leftcontentdiv.style.top = "50%";
              leftcontentdiv.style.height = "0%"; //Set this in resize
              leftcontentdiv.style.width = "0%"; //Set this in resize
              leftcontentdiv.style.backgroundColor = "white";
              leftdiv.append(leftcontentdiv);

              rightcontentdiv = document.createElement("div");
              rightcontentdiv.id = "whoami-rightcontent";
              rightcontentdiv.style.position = "absolute";
              rightcontentdiv.style.transform = "translate(0,-50%)";
              rightcontentdiv.style.right = "0px";
              rightcontentdiv.style.top = "50%";
              rightcontentdiv.style.height = "0%"; //Set this in resize
              rightcontentdiv.style.width = "0%"; //Set this in resize
              rightcontentdiv.style.backgroundColor = "black";
              rightdiv.append(rightcontentdiv);

              let parentelemid = "`+e.parentid+'" == "" ? "root" : "'+e.parentid+`";
              let parentelem = document.getElementById(parentelemid);
              parentelem.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let priorFrameDivWidth = parseInt(baseelem.style.width);
            
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);

              //Resize ball
              let ballMeasure = scrollerball.getBoundingClientRect();
              scrollerball.style.width = (ballMeasure.bottom-ballMeasure.top) + "px";
              //Now we must do hacky stuff. Ball starts at left = "50%". We need this in pixels. We convert here if that is the case because the div has properly been sized if the user is clicking the ball.
              if (scrollerball.style.left == "50%") {
                scrollerball.style.left = parseInt(scrollerdiv.getBoundingClientRect().width / 2) + "px";
              } else {
                //If the "left" isn't 50% then we know it has been moved to a pixel value and we can now calculate the percentage of the total width it has been moved over relative to the previous frame, and update that to the new div width
                let newFrameDivWidth = parseInt(baseelem.style.width);
                scrollerball.style.left = (parseInt(scrollerball.style.left)/priorFrameDivWidth*newFrameDivWidth) + "px";
              }

              //Resize contentdivs
              let baseMeasure = baseelem.getBoundingClientRect();
              leftcontentdiv.style.width = baseMeasure.width + "px";
              leftcontentdiv.style.height = parseInt(baseMeasure.height * .9) + "px";
              rightcontentdiv.style.width = baseMeasure.width + "px";
              rightcontentdiv.style.height = parseInt(baseMeasure.height * .9) + "px";
              
              ResizeDivs();
            };
            ResizeDivs = function () {
              let ballMeasure = scrollerball.getBoundingClientRect();
              let cutX = parseInt((ballMeasure.left+ballMeasure.right)/2) - scrollerdiv.getBoundingClientRect().left;
              leftdiv.style.width = (cutX-0) + "px";
              rightdiv.style.width = (parseInt(baseelem.style.width) - cutX) + "px";
            }
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}const E={id:"",src:"/src/img/bg-stars.png",naturalwidth:"1920",naturalheight:"1080",transition:"left linear 60s",timetoscroll:"60000",enablepc:"true",zindexpc:"-2",enablephone:"true",zindexphone:"-2"},k={id:"",enablepc:"true",zindexpc:"-1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"70",heightpc:"105",xpc:"50",ypc:"0",srcpc:"/src/img/bg-blogwall.png",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"heightAutoWidth",widthphone:"50",heightphone:"50",xphone:"50",yphone:"50",srcphone:""},I={id:"",pages:[{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:1,enablepc:"true",zindexpc:"1",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"6",xpc:"0",ypc:"100",enablephone:"false"},T={id:"",pages:[{text:"Home",href:"/?skipOverlay=true"},{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:2,enablepc:"false",enablephone:"true",zindexphone:"100",anchorpointphone:"topleft",sizingmodephone:"explicit",widthphone:"100",heightphone:"6",xphone:"0",yphone:"0"},C={id:"",enablepc:"true",zindexpc:"5",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"100",heightpc:"100",xpc:"50",ypc:"50",enablephone:"true",zindexphone:"1",anchorpointphone:"topmiddle",sizingmodephone:"explicit",widthphone:"100",heightphone:"50",xphone:"50",yphone:"0"},P={id:"",parentid:"scrollablebody",text:`<span style=\\"background-color: rgba(255, 227, 0, 0.21)\\">I ported PC functionality to phone and am aware this looks bad. The obvious solution is to have a custom video for phone, but I've since lost the source files for the PC video. So as of now, fixing this poor appearance is on the #TODO list until I find inspiration.</span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"false",enablephone:"true",zindexphone:"1",anchorpointphone:"topmiddle",sizingmodephone:"explicit",sizingunitphone:"viewport",widthphone:"100",heightphone:"15",xphone:"50",yphone:"51"},D={id:"",enablepc:"true",zindexpc:"6",anchorpointpc:"middlemiddle",sizingmodepc:"widthAutoHeight",widthpc:"5",heightpc:"50",xpc:"50",ypc:"75",enablephone:"true",zindexphone:"1",anchorpointphone:"bottommiddle",sizingmodephone:"widthAutoHeight",widthphone:"50",heightphone:"50",xphone:"50",yphone:"100"},o={enablepc:"true",zindexpc:"1",enablephone:"true",zindexphone:"1"},H={id:"",parentid:"scrollablepage-1",text:`^<br style=\\"display: block; margin-bottom: -8%; content: ''\\"><span style='text-decoration: underline; white-space: nowrap; font-family: inherit'>Also See Projects</span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"viewport",widthpc:"50",heightpc:"3",xpc:"50",ypc:"8",enablephone:"false"},L={id:"",parentid:"scrollablepage-1",text:"<span style='white-space: nowrap; font-family: inherit'>WHAT HAVE I DONE</span>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"viewport",widthpc:"40",heightpc:"10",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"viewport",widthphone:"93",heightphone:"10",xphone:"50",yphone:"16"},M={id:"",targetid:"scrollablebody",enablepc:"true",zindexpc:"1",scrollstrengthpc:"75",minimumanimframespc:"5",pixelsperframepc:"13",widthmodepc:"px",widthvaluepc:"10",scrollbaroffsetpc:"0",enablephone:"true",zindexphone:"1",scrollstrengthphone:"50",minimumanimframesphone:"5",pixelsperframephone:"13",widthmodephone:"px",widthvaluephone:"5",scrollbaroffsetphone:"0"},F={id:"",parentid:"scrollablepage-1",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"69",heightpc:"76",xpc:"50",ypc:"59",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"heightAutoWidth",widthphone:"50",heightphone:"50",xphone:"50",yphone:"50"},_={id:"",parentid:"card0",text:"Degrees",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"24",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"10",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"10"},j={id:"",parentid:"card0",text:"<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"16"},B={id:"",parentid:"card0",text:"BS Aerospace Engineering<br>Emphasis Astronautics<br>(Summa Cum Laude)<br><br>AS Pre-Engineering<br><br>AST Math<br><br>AST Physics<br><br>IGETC<br><br>CSUGE",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"20",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"78",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"78",xphone:"50",yphone:"60"},O={id:"",parentid:"card1",text:"Educational History",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"24",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"10",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"10"},N={id:"",parentid:"card1",text:"<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"50",heightphone:"7",xphone:"50",yphone:"16"},J={id:"",parentid:"card1",text:`<span style='white-space: nowrap; font-family: inherit'>Cal Poly Pomona - Aerospace Engineering<br>Summa Cum Laude<br>3.82 GPA (2019 - 2022)<br style=\\"margin-bottom:25px; content: ''; display: block;\\">Citrus College - Pre-Engineering<br>President's List<br>3.8 GPA (2017 - 2018)<br style=\\"margin-bottom:25px; content: ''; display: block;\\">Claremont High School<br>4.3 GPA (2014 - 2017)<br></span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"20",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"78",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"78",xphone:"50",yphone:"60"},W={id:"",parentid:"card2",text:"Work Experience",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"24",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"10",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"10"},V={id:"",parentid:"card2",text:"<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"16"},G={id:"",parentid:"card2",text:`<span style='white-space: nowrap; font-family: inherit'>Freelance Software Developer (<a href='https://www.spigotmc.org/resources/authors/thetealviper.116592/' style='font-family: inherit'>Spigot</a>)<br>2012 - Present<br style=\\"margin-bottom: 25px; content: ''; display: block;\\">Tech & Printing (<a href='https://www.officedepot.com/' style='font-family: inherit'>Office Depot</a>)<br>2019 - 2020<br style=\\"margin-bottom: 25px; content: ''; display: block;\\">Fast Food (<a href='https://littlecaesars.com/' style='font-family: inherit'>Little Caesars</a>)<br>2018-2019<br style=\\"margin-bottom: 25px; content: ''; display: block;\\">Engineering Intern (<a href='https://www.the-pilot-group.com/' style='font-family: inherit'>The Pilot Group</a>)<br>2016-2016</span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"20",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"78",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"78",xphone:"50",yphone:"60"},q={id:"",parentid:"card3",text:"Clubs / Teams / Orgs",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"24",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"10",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"10"},U={id:"",parentid:"card3",text:"<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"16"},X={id:"",parentid:"card3",text:`<span style='white-space: nowrap; font-family: inherit'>Emrys - Space Vehicle Design (2021-2022)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">CubeSTEP Sat - Thermal Imaging (2019)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">IEEE-PES - Member (2019)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Youth Rocketry Outreach (2017-2018)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Rocketry and Robotics - Head (2017-2018)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Rocket Owls - Software Aid (2017-2018)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Phi Theta Kappa - VP of IT (2017-2018)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Honors Program - Member (2017-2018)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Comp Sci Club - Head (2017)<br style=\\"margin-bottom: 3%; content: ''; display: block;\\">Physics Club - Member (2017)</span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"17",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"78",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"78",xphone:"50",yphone:"60"},Y={id:"",parentid:"card4",text:"Awards / Honors",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"24",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"10",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"10"},K={id:"",parentid:"card4",text:"<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"7",xpc:"50",ypc:"16",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"7",xphone:"50",yphone:"16"},Q={id:"",parentid:"card4",text:`<span style='white-space: nowrap; font-family: inherit'>All-California Academic Team<br>2019<br style=\\"margin-bottom: 4%; content: ''; display: block;\\">Phi Theta Kappa Inductance<br>2017<br style=\\"margin-bottom: 4%; content: ''; display: block;\\">AP Scholar with Distinction<br>2017<br style=\\"margin-bottom: 4%; content: ''; display: block;\\">University Club of Claremont Scholarship<br>2017<br style=\\"margin-bottom: 4%; content: ''; display: block;\\">Most Inspirational (CHS)<br>2016</span>`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"19",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"100",heightpc:"78",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"100",heightphone:"78",xphone:"50",yphone:"60"},Z={id:"",parentid:"scrollablepage-2",loadtype:"after",loadpagenum:"1",enablepc:"true",zindexpc:"1",anchorpointpc:"topmiddle",sizingmodepc:"widthAutoHeight",sizingunitpc:"parent",widthpc:"70",heightpc:"50",xpc:"50",ypc:"0",srcpc:"/src/img/bg-rocketdivider.png",enablephone:"true",zindexphone:"1",anchorpointphone:"topmiddle",sizingmodephone:"widthAutoHeight",sizingunitphone:"parent",widthphone:"100",heightphone:"50",xphone:"50",yphone:"5",srcphone:"/src/img/bg-rocketdivider.png"},$={id:"",parentid:"scrollablepage-2",loadtype:"before",loadpagenum:"2",text:"<span style='white-space: nowrap; font-family: inherit'>WHO AM I</span>",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"viewport",widthpc:"40",heightpc:"10",xpc:"50",ypc:"20",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"viewport",widthphone:"100",heightphone:"10",xphone:"50",yphone:"20"},ee={id:"",parentid:"scrollablepage-2",loadtype:"before",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"viewport",widthpc:"69",heightpc:"70",xpc:"50",ypc:"60",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"viewport",widthphone:"100",heightphone:"75",xphone:"50",yphone:"60"},te={id:"",parentid:"whoami-leftcontent",text:"Formal",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"95",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"40",heightpc:"15",xpc:"25",ypc:"12",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"40",heightphone:"15",xphone:"25",yphone:"12"},ne={id:"",parentid:"whoami-leftcontent",text:"Hard Skills",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"63",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"25",heightpc:"10",xpc:"16.5",ypc:"30",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"25",heightphone:"10",xphone:"16.5",yphone:"30"},ie={id:"",parentid:"whoami-leftcontent",text:"Calculus | Differentials | Linear Algebra<br>4.7/5 | 4.3/5 | 4.6/5<br><br>Physics E&M | Thermo | Nuclear<br>4.4/5 | 4.4/5 | 4/5<br><br>Technical Writing<br>4/5<br><br>Java | C++ | JS | MatLab<br>4.2/5 | 4/5 | 4/5 | 3.8/5<br><br>Solidworks<br>3.7/5<br><br>Photoshop<br>3.6/5",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"21",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"30",heightpc:"60",xpc:"16.5",ypc:"67.5",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"30",heightphone:"60",xphone:"16.5",yphone:"67.5"},ae={id:"",parentid:"whoami-leftcontent",text:"Soft Skills",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"63",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"25",heightpc:"10",xpc:"50",ypc:"30",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"25",heightphone:"10",xphone:"50",yphone:"30"},le={id:"",parentid:"whoami-leftcontent",text:"Independent Learning<br>4.8/5<br><br>Creative Problem Solving<br>4.5/5<br><br>Curiosity<br>4/5<br><br>Ambition<br>4/5<br><br>Capable During Friction<br>4.7/5",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"27",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"30",heightpc:"60",xpc:"50",ypc:"67.5",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"30",heightphone:"60",xphone:"50",yphone:"67.5"},oe={id:"",parentid:"whoami-leftcontent",text:"Biases",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"63",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"25",heightpc:"10",xpc:"83.5",ypc:"30",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"25",heightphone:"10",xphone:"83.5",yphone:"30"},se={id:"",parentid:"whoami-leftcontent",text:'Functional > Aesthetic<br><br>Hacky > \\"Not Possible\\"<br><br>Obsession > Sporadic Effort<br><br>Innovative Curiosity > Tradition<br><br>Competence > Effort<br><span style=\\"opacity: 0\\"></span>',fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"rgb(127, 127, 127)",rszestimatedfontsize:"33",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"30",heightpc:"60",xpc:"83.5",ypc:"67.5",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"30",heightphone:"60",xphone:"83.5",yphone:"67.5"},de={id:"",parentid:"whoami-rightcontent",text:"Informal",fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"95",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"40",heightpc:"15",xpc:"75",ypc:"12",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"40",heightphone:"15",xphone:"75",yphone:"12"},re={id:"",parentid:"whoami-rightcontent",text:`Hi. My name is Aaron :) I believe I, among others, would describe myself as funny, intelligent, kind hearted, effortful, and extremely competent. My hobbies are currently playing video games, making music, working out, watching YouTube/Netflix, and working on passion projects. My projects typically include programming in some capacity, though not always. I just like to *do things* to test my abilities, or perhaps develop them if I have none. Programming is often just a useful multitool to achieve many things, and happens to be the medium through which I direct my efforts. I've taken a few formal jabs at learning whether from collegiate classes or online classes, though most of my ability was developed independently. I'd say my largest weakness in programming is not particularly knowing impeccable detail about any one language, though I'd also claim that's a direct trade-off to it also leading to my greatest strength: \\"Just figuring anything out\\". Do I remember the syntax to every language and inner workings of Java's garbage collecter or random minute bugs which pop up sporadically in Javascript with photographic memory as I rapidly hot-swap between them project to project? Absolutely not, but in my opinion that keeps me flexible and proves my ability to gather information swiftly and proficiently when necessary. If a problem arises, I fix it. I believe innovation contrained to perfection in the form of 100% optimization and only utilizing systems for which one is knowledgeable front to back is paradoxical as those constraints prevent innovation from occurring. Moving past programming in particular, I'd say I'm more of an introvert by preference but effortfully a social butterfly should a situation demand that energy. If this paragraph comes off as slightly awkward, that should be seen as a testament to one of my greatest career related pitfalls: I am simply terrible at selling myself. I don't like it from a comfort standpoint, I don't like it from a moral standpoint, and I don't like feeling pressure to lie to appear better than competition. I simply like knowing that I'm better and showing it objectively with actions rather than convincing others of it with words. In a similar vein, I'd imagine I'm bad at interviews where the interviewer and the interviewee both are aware the experience is primarily a game where \\"What is your greatest weakness\\" ABSOLUTELY does not mean you respond with your greatest weakness. I prefer transparency, frankness, and above all raw/actual competence. I will gladly own up to what I don't know while having unwavering confidence in my ability to learn. Ultimately, at the end of the day I just aim to live a happy life having made others around me happy as well. My motivation for doing cool things is merely for the fact that they're cool. My passion is pure.`,fontfamily:"'Josefin Sans', sans-serif",fontsize:"",fontweight:"",color:"",rszestimatedfontsize:"21",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"parent",widthpc:"95",heightpc:"70",xpc:"50",ypc:"59",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"95",heightphone:"70",xphone:"50",yphone:"59"};function ce(){return s(i,{children:[t(y,{}),t(u,{...k}),t(d,{...E}),t(f,{...I}),t(w,{...T}),t(x,{...C}),t(n,{...P}),t(v,{...D}),t(l,{...o}),t(l,{...o}),t(n,{...H}),t(n,{...L}),t(g,{...M}),t(z,{...F}),t(n,{..._}),t(n,{...j}),t(n,{...B}),t(n,{...O}),t(n,{...N}),t(n,{...J}),t(n,{...W}),t(n,{...V}),t(n,{...G}),t(n,{...q}),t(n,{...U}),t(n,{...X}),t(n,{...Y}),t(n,{...K}),t(n,{...Q}),t(l,{...o}),t(S,{...Z}),t(A,{...$}),t(R,{...ee}),t(n,{...te}),t(n,{...ne}),t(n,{...ie}),t(n,{...ae}),t(n,{...le}),t(n,{...oe}),t(n,{...se}),t(n,{...de}),t(n,{...re})]})}r.createRoot(document.getElementById("root")).render(s(c.StrictMode,{children:[t(m,{}),t(p,{}),t(h,{}),t(ce,{}),t(b,{})]}));
