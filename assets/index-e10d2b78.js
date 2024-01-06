import{j as t,F as a,H as i,a as l,S as r,c as d,R as c,b as h,M as m,d as p,e as g}from"./faviconsetter-da5e80b9.js";import{U as b}from"./urltool-1b72bd7e.js";import{N as u,a as f}from"./navbarphone-a27821dc.js";function o(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.basictext == "undefined")
              window.aaron.common.basictext = new Object();
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
              baseelem = document.createElement("span");
              baseelem.id = "`+e.id+`";
              baseelem.innerText = "`+e.text+`";
              baseelem.classList.add("basictext");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              //
              let fontfamily = "`+e.fontfamily+`";
              if (fontfamily != "")
                baseelem.style.fontFamily = fontfamily;
              let fontsize = "`+e.fontsize+`";
              if (fontsize != "")
                baseelem.style.fontSize = fontsize;
              let fontweight = "`+e.fontweight+`";
              if (fontweight != "")
                baseelem.style.fontWeight = fontweight;
              let color = "`+e.color+`";
              if (color != "")
                baseelem.style.color = color;
              let whitespace = "`+e.whitespace+`";
              if (whitespace != "")
                baseelem.style.whiteSpace = whitespace;

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
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let doStuff = function (elem, imgElemForOriginalRatio, setVisible) {
                /*
                * elem - The element to be resized
                * imgElemForOriginalRatio - The (assumed) img element defining the aspect ratio for auto scaling
                * setVisible - Self explanatory
                */
                if (setVisible) {
                  elem.style.visibility = "visible";
                }
                elem.style.zIndex = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.zindexpc : elem.dataset.zindexphone;
                let originalRatio = imgElemForOriginalRatio ? imgElemForOriginalRatio.naturalWidth / imgElemForOriginalRatio.naturalHeight : 1;
                let width, height, x, y;
                if (deviceType == "pc" || deviceType == "tablet") {
                  let widthPercentSetting = elem.dataset.widthpc/100;
                  let heightPercentSetting = elem.dataset.heightpc/100;
                  switch (elem.dataset.sizingmodepc) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = elem.dataset.xpc;
                  y = elem.dataset.ypc;
                } else if (deviceType == "phone") {
                  widthPercentSetting = elem.dataset.widthphone/100;
                  heightPercentSetting = elem.dataset.heightphone/100;
                  switch (elem.dataset.sizingmodephone) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = elem.dataset.xphone;
                  y = elem.dataset.yphone;
                }
                //Handle anchor offsets
                let anchor = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.anchorpointpc : elem.dataset.anchorpointphone;
                let offsetX = 0, offsetY = 0;
                switch (anchor) {
                  case "topleft":
                    offsetX += width / 2;
                    offsetY += height / 2;
                    break;
                  case "topmiddle":
                    offsetY += height / 2;
                    break;
                  case "topright":
                    offsetX -= width / 2;
                    offsetY += height / 2;
                    break;
                  case "middleleft":
                    offsetX += width / 2;
                    break;
                  case "middlemiddle":
                    break;
                  case "middleright":
                    offsetX -= width / 2;
                    break;
                  case "bottomleft":
                    offsetX += width / 2;
                    offsetY -= height / 2;
                    break;
                  case "bottommiddle":
                    offsetY -= height / 2;
                    break;
                  case "bottomright":
                    offsetX -= width / 2;
                    offsetY -= height / 2;
                    break;
                }
                elem.style.left = ((vw * (x/100)) + offsetX) + "px";
                elem.style.top = ((vh * (y/100)) + offsetY) + "px";
              }
              doStuff(baseelem, null, false);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function y(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.basicimage == "undefined")
              window.aaron.common.basicimage = new Object();
            let snowflake = `+Math.random()+`;
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
              baseelem.classList.add("basicimage");
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
          
              baseelem.addEventListener("load", Resize);
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function w(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.scrollingbackdrop == "undefined")
              window.aaron.common.scrollingbackdrop = new Object();
          })();

          function flushCss(element) {
            // By reading the offsetHeight property, we are forcing
            // the browser to flush the pending CSS changes (which it
            // does to ensure the value obtained is accurate).
            element.offsetHeight;
          }

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, animelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("scrollingbackdrop");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.left = "50%";
              baseelem.style.top = "50%";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "`+e.id+`";
              baseelem.dataset.src = "`+e.src+`";
              baseelem.dataset.naturalwidth = "`+e.naturalwidth+`";
              baseelem.dataset.naturalheight = "`+e.naturalheight+`";
              baseelem.dataset.transition = "`+e.transition+`";
              baseelem.dataset.timetoscroll = "`+e.timetoscroll+`";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
            
              animelem = document.createElement("div");
              animelem.style.position = "absolute";
              animelem.style.transform = "translate(-50%,-50%)";
              animelem.style.left = "0px";
              animelem.style.top = "50%";
              //
              let moveelemfunc;
              moveelemfunc = function () {
                animelem.style.transition = "none";
                let widthCache = parseInt(baseelem.dataset.naturalwidth) * (vh/parseInt(baseelem.dataset.naturalheight));
                animelem.style.left = parseInt(widthCache/2) + "px";
                // animelem.style.left = parseInt(vw/2) + "px";
                flushCss(baseelem);
                //Flushing the css is necessary to immediately effect the element without merging css style changes within the render frame
                animelem.style.transition = baseelem.dataset.transition;
                animelem.style.left = parseInt(-widthCache/2) + "px";
                // animelem.style.left = parseInt(-vw/2) + "px";
                setTimeout(() => {
                  moveelemfunc()
                }, parseInt(baseelem.dataset.timetoscroll));
              }
              setTimeout(moveelemfunc, 5);
              //It is important be initialize this process after a delay because the window render system merges css style changes which messes up everything

              let star1 = document.createElement("img");
              star1.src = baseelem.dataset.src;
              star1.style.userSelect = "none";
              star1.style.position = "absolute";
              star1.style.left = "0px";
              star1.style.top = "0px";
              star1.style.height = "100%";
              //
              star1.ondragstart = () => {
                return false;
              };
              //

              let star2 = document.createElement("img");
              star2.src = baseelem.dataset.src;
              star2.style.userSelect = "none";
              star2.style.position = "absolute";
              star2.style.left = "100%";
              star2.style.top = "0px";
              star2.style.height = "100%";
              //
              star2.ondragstart = () => {
                return false;
              };
              //
          
              let root = document.getElementById("root");
              root.append(baseelem);
              baseelem.append(animelem);
              animelem.append(star1);
              animelem.append(star2);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let doStuff = function () {
                baseelem.style.zIndex = (deviceType == "pc" || deviceType == "tablet") ? baseelem.dataset.zindexpc : baseelem.dataset.zindexphone;
                baseelem.style.width = vw + "px";
                baseelem.style.height = vh + "px";
                let originalRatio = parseInt(baseelem.dataset.naturalwidth)/parseInt(baseelem.dataset.naturalheight);
                let width = vh*originalRatio, height = vh;
                animelem.style.width = width + "px";
                animelem.style.height = height + "px";
                // animelem.style.width = vw + "px";
                // animelem.style.height = vh + "px";
                animelem.style.left = parseInt(width/2) + "px";
                animelem.style.top = parseInt(vh/2) + "px";
              }
              doStuff();
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function s(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.bouncingbutton == "undefined")
              window.aaron.common.bouncingbutton = new Object();
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
              baseelem = document.createElement("a");
              baseelem.id = "`+e.id+`";
              baseelem.href = "`+e.href+`";
              baseelem.innerText = "`+e.text+`";
              baseelem.classList.add("bouncingbutton");
              baseelem.style.position = "absolute";
              baseelem.style.textAlign = "center";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.transition = "`+e.transition+`";
              baseelem.style.textDecoration = "none";
              baseelem.style.whiteSpace = "nowrap";
              baseelem.style.backgroundColor = "rgba(46, 52, 69, 0.5)";
              //
              let fontfamily = "`+e.fontfamily+`";
              if (fontfamily != "")
                baseelem.style.fontFamily = fontfamily;
              let fontsize = "`+e.fontsize+`";
              if (fontsize != "")
                baseelem.style.fontSize = fontsize;
              let fontweight = "`+e.fontweight+`";
              if (fontweight != "")
                baseelem.style.fontWeight = fontweight;
              let color = "`+e.color+`";
              if (color != "")
                baseelem.style.color = color;

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
              baseelem.dataset.widthpc = "`+e.widthpc+`";
              baseelem.dataset.heightpc = "`+e.heightpc+`";
              baseelem.dataset.xcenterpc = "`+e.xcenterpc+`";
              baseelem.dataset.xradiuspc = "`+e.xradiuspc+`";
              baseelem.dataset.ycenterpc = "`+e.ycenterpc+`";
              baseelem.dataset.yradiuspc = "`+e.yradiuspc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
              baseelem.dataset.anchorpointphone = "`+e.anchorpointphone+`";
              baseelem.dataset.sizingmodephone = "`+e.sizingmodephone+`";
              baseelem.dataset.widthphone = "`+e.widthphone+`";
              baseelem.dataset.heightphone = "`+e.heightphone+`";
              baseelem.dataset.xcenterphone = "`+e.xcenterphone+`";
              baseelem.dataset.xradiusphone = "`+e.xradiusphone+`";
              baseelem.dataset.ycenterphone = "`+e.ycenterphone+`";
              baseelem.dataset.yradiusphone = "`+e.yradiusphone+`";

              let addColorChangeListener = function (aelem) {
                aelem.addEventListener("mouseenter", () => {
                  aelem.style.border = "solid 1px rgb(115, 204, 168)";
                  aelem.style.color = "rgb(115, 204, 168)";
                });
                aelem.addEventListener("mouseleave", () => {
                  aelem.style.border = "none";
                  aelem.style.color = "rgb(211, 211, 211)";
                });
              }
              addColorChangeListener(baseelem);
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);

              Resize(); //First we manually resize to set an initial location
              setTimeout(Resize, 10); //Then we resize quickly after negligible delay to begin movement
              setInterval(Resize, 3000); //Then we start the repeated task to change target loc
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let doStuff = function (elem, imgElemForOriginalRatio, setVisible) {
                /*
                * elem - The element to be resized
                * imgElemForOriginalRatio - The (assumed) img element defining the aspect ratio for auto scaling
                * setVisible - Self explanatory
                */
                if (setVisible) {
                  elem.style.visibility = "visible";
                }
                elem.style.zIndex = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.zindexpc : elem.dataset.zindexphone;
                let originalRatio = imgElemForOriginalRatio ? imgElemForOriginalRatio.naturalWidth / imgElemForOriginalRatio.naturalHeight : 1;
                let width, height, x, y;
                if (deviceType == "pc" || deviceType == "tablet") {
                  let widthPercentSetting = elem.dataset.widthpc/100;
                  let heightPercentSetting = elem.dataset.heightpc/100;
                  switch (elem.dataset.sizingmodepc) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = parseInt(elem.dataset.xcenterpc);
                  let xRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  x += parseInt(elem.dataset.xradiuspc) * xRNG;
                  y = parseInt(elem.dataset.ycenterpc);
                  let yRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  y += parseInt(elem.dataset.yradiuspc) * yRNG;
                } else if (deviceType == "phone") {
                  widthPercentSetting = elem.dataset.widthphone/100;
                  heightPercentSetting = elem.dataset.heightphone/100;
                  switch (elem.dataset.sizingmodephone) {
                    case "widthAutoHeight":
                      width = vw * widthPercentSetting;
                      height = width / originalRatio;
                      break;
                    case "heightAutoWidth":
                      height = vh * heightPercentSetting;
                      width = height * originalRatio;
                      break;
                    case "explicit":
                      width = vw * widthPercentSetting;
                      height = vh * heightPercentSetting;
                      break;
                  }
                  x = parseInt(elem.dataset.xcenterphone);
                  let xRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  x += parseInt(elem.dataset.xradiusphone) * xRNG;
                  y = parseInt(elem.dataset.ycenterphone);
                  let yRNG = (Math.random()*2)-1; // Spans -1 -> +1
                  y += parseInt(elem.dataset.yradiusphone) * yRNG;
                }
                //Handle anchor offsets
                let anchor = (deviceType == "pc" || deviceType == "tablet") ? elem.dataset.anchorpointpc : elem.dataset.anchorpointphone;
                let offsetX = 0, offsetY = 0;
                switch (anchor) {
                  case "topleft":
                    offsetX += width / 2;
                    offsetY += height / 2;
                    break;
                  case "topmiddle":
                    offsetY += height / 2;
                    break;
                  case "topright":
                    offsetX -= width / 2;
                    offsetY += height / 2;
                    break;
                  case "middleleft":
                    offsetX += width / 2;
                    break;
                  case "middlemiddle":
                    break;
                  case "middleright":
                    offsetX -= width / 2;
                    break;
                  case "bottomleft":
                    offsetX += width / 2;
                    offsetY -= height / 2;
                    break;
                  case "bottommiddle":
                    offsetY -= height / 2;
                    break;
                  case "bottomright":
                    offsetX -= width / 2;
                    offsetY -= height / 2;
                    break;
                }
                elem.style.left = ((vw * (x/100)) + offsetX) + "px";
                elem.style.top = ((vh * (y/100)) + offsetY) + "px";

                //Pad around text so doesn't clip into border
                let paddingIntTop = (elem.style.paddingTop == "") ? 0 : parseFloat(elem.style.paddingTop);
                let vertPad = parseInt((elem.getBoundingClientRect().height - 2*paddingIntTop) * .6) + "px";
                elem.style.paddingTop = vertPad;
                elem.style.paddingBottom = vertPad;
                let paddingIntLeft = (elem.style.paddingLeft == "") ? 0 : parseFloat(elem.style.paddingLeft);
                let horizPad = parseInt((elem.getBoundingClientRect().width - 2*paddingIntLeft) * .4) + "px";
                elem.style.paddingLeft = horizPad;
                elem.style.paddingRight = horizPad;
                //Resize border radius in accordance to measured height
                elem.style.borderRadius = (elem.getBoundingClientRect().height) + "px";
              }
              doStuff(baseelem, null, false);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function v(){return t(a,{children:t(i,{children:t("script",{children:`       
          class globe {
              checkForRotation(){
                  let maxSpeed = -Math.PI / 180.0 * 2;
                  function handleRotation(c1, c2, r12){ //Coordinate 1, Coordinate 2, Rotation 1-2
                      return [c1*Math.cos(r12)-c2*Math.sin(r12), c1*Math.sin(r12)+c2*Math.cos(r12)];
                  }
  
                  var xFromCenter = this.lastCursorX - this.centerX;
                  var yFromCenter = this.lastCursorY - this.centerY;
                  var distance = Math.sqrt(Math.pow(xFromCenter, 2) + Math.pow(yFromCenter, 2));
                  var distanceScaler = 1 / (300);
                  var deltaXFactor = - Math.PI / 180 / 100;
                  var deltaYFactor = - Math.PI / 180 / 100;
                  if(!this.decelerate && distance <= this.radius) {
                      this.vXY += deltaXFactor;
                      this.vXZ += deltaYFactor;
                      this.vXY = this.vXY < maxSpeed ? maxSpeed : this.vXY;
                      this.vXZ = this.vXZ < maxSpeed ? maxSpeed : this.vXZ;
                      this.vXY = this.vXY > -maxSpeed ? -maxSpeed : this.vXY;
                      this.vXZ = this.vXZ > -maxSpeed ? -maxSpeed : this.vXZ;
                  }else if(this.autopilot){
                      xFromCenter = this.radius;
                      yFromCenter = this.radius;
                  }else{
                      this.vXY -= deltaXFactor;
                      this.vXZ -= deltaYFactor;
                      this.vXY = this.vXY > 0 ? 0 : this.vXY;
                      this.vXZ = this.vXZ > 0 ? 0 : this.vXZ;
                      if(this.decelerate && this.vXY == 0 && this.vXZ == 0)
                          clearInterval(this.interval);
                  }
  
                  var xAngleChange = (xFromCenter * distanceScaler) * this.vXY;
                  var yAngleChange = (yFromCenter * distanceScaler) * this.vXZ;
                  for(var i = 0;i < this.globeWordArray.length;i++){
                      var curGlobeWord = this.globeWordArray[i];
  
                      curGlobeWord.rXY = - xAngleChange;
                      curGlobeWord.rXZ = - yAngleChange;
                      [curGlobeWord.x,curGlobeWord.y] = handleRotation(curGlobeWord.x,curGlobeWord.y,curGlobeWord.rXY);
                      [curGlobeWord.x,curGlobeWord.z] = handleRotation(curGlobeWord.x,curGlobeWord.z,curGlobeWord.rXZ);
                      [curGlobeWord.y,curGlobeWord.z] = handleRotation(curGlobeWord.y,curGlobeWord.z,curGlobeWord.rYZ);
  
                      curGlobeWord.updateLocation(this.rotateText, curGlobeWord.useImageInsteadLink);
                  }
              }
  
              constructor(centerX, centerY, radius, vXY, vXZ, vYZ, divElement, rotateText) {
                  let temp = this;
                  this.prototypeWidth = vw;
                  this.prototypeHeight = vh;
                  this.prototypeCenterX = centerX;
                  this.prototypeCenterY = centerY;
                  this.prototypeRadius = radius;
                  this.centerX = centerX;
                  this.centerY = centerY;
                  this.radius = radius;
                  this.vXY = vXY;
                  this.vXZ = vXZ;
                  this.vYZ = vYZ;
                  this.minX = parseInt(centerX - radius);
                  this.minY = parseInt(centerY - radius);
                  this.globeWordArray = [];
                  this.divElement = divElement;
                  this.divElement.style.width = (radius * 2) + "px";
                  this.divElement.style.height = (radius * 2) + "px";
                  this.divElement.style.position = "absolute";
                  this.divElement.style.left = this.minX + "px";
                  this.divElement.style.top = this.minY + "px";
                  this.divElement.style.backgroundImage = "url('/src/img/globering.png')";
                  this.divElement.style.backgroundSize = "cover";
                  this.rotateText = rotateText;

                  let Resize = function () {
                    let resizeScaler = vw/temp.prototypeWidth;
                    temp.radius = temp.prototypeRadius * resizeScaler;
                    temp.centerX = temp.prototypeCenterX * resizeScaler;
                    temp.centerY = temp.prototypeCenterY * (vh/temp.prototypeHeight);
                    temp.divElement.style.width = (temp.radius * 2) + "px";
                    temp.divElement.style.height = (temp.radius * 2) + "px";
                    temp.divElement.style.left = parseInt(temp.centerX - temp.radius) + "px";
                    temp.divElement.style.top = parseInt(temp.centerY - temp.radius) + "px";
                    let vectorScaler = 1;
                    for(var i = 0;i < temp.globeWordArray.length;i++){
                        var curGlobeWord = temp.globeWordArray[i];
                        if (i == 0) {
                          let startingVectorMagnitude = Math.sqrt(Math.pow(curGlobeWord.x,2)+Math.pow(curGlobeWord.y,2)+Math.pow(curGlobeWord.z,2));
                          vectorScaler = temp.radius / startingVectorMagnitude;
                        }
                        curGlobeWord.x *= vectorScaler;
                        curGlobeWord.y *= vectorScaler;
                        curGlobeWord.z *= vectorScaler;
    
                        curGlobeWord.updateLocation(temp.rotateText, curGlobeWord.useImageInsteadLink);
                    }
                  }
                  window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
                  Resize();
  
                  /*
                  * We initialize like this specifically so the globe can spin automatically upon creation.
                  * Then once a user hovers their mouse over it, it will become manually driven.
                  * Until that happens though, this initialization setup allows it to spin automatically at full power in
                  * the x or y direction depending on the globe constructor.
                   */
                      this.decelerate = false;
                      this.lastCursorX = 0;
                      this.lastCursorY = 0;
                      this.autopilot = true;
                      this.interval = setInterval(function(){temp.checkForRotation();},10);
                  /**/
  
                  this.divElement.onmousemove = function(event){
                      temp.lastCursorX = event.clientX;
                      temp.lastCursorY = event.clientY;
                  }
                  this.divElement.onmouseenter = function(event){
                      if(temp.interval != null)
                          clearInterval(temp.interval);
                      temp.interval = setInterval(function(){temp.checkForRotation();},10);
                      temp.decelerate = false;
                      temp.autopilot = false;
                  }
                  this.divElement.onmouseleave = function(event){
                      temp.decelerate = true;
                  }
              }
          }
          class globeWord {
              constructor(id, text, phi, theta, rXY, rXZ, rYZ, globe, useImageInsteadLink){
                  let temp = this;
                  this.id = id;
                  this.phi = phi;
                  this.theta = theta;
                  this.x = globe.radius * Math.sin(phi) * Math.cos(theta);
                  this.y = globe.radius * Math.sin(phi) * Math.sin(theta)
                  this.z = globe.radius * Math.cos(phi);
                  this.rXY = rXY;
                  this.rXZ = rXZ;
                  this.rYZ = rYZ;
                  this.globe = globe;
                  this.useImageInsteadLink = useImageInsteadLink;
                  if(!useImageInsteadLink){
                      this.globe.divElement.innerHTML += "<a><p "
                          + "id='" + id + "' "
                          + "style='position:absolute;"
                          + "white-space: nowrap;"
                          + "margin-top: 0px;"
                          + "margin-bottom: 0px;"
                          + "font-family: Lucida Console;"
                          + "pointer-events: none;"
                          + "color: #5b94ef;'>"
                          + text
                          + "</p></a>";
                  } else {
                      this.globe.divElement.innerHTML += "<a><img "
                          + "id='" + id + "' "
                          + "style='position:absolute;"
                          + "white-space: nowrap;"
                          + "margin-top: 0px;"
                          + "width: 65px;"
                          + "pointer-events: none;"
                          + "margin-bottom: 0px;' "
                          + "src='" + useImageInsteadLink + "'></a>"
                  }
                  this.globe.globeWordArray.push(this);
                  this.updateLocation(this.globe.rotateText, this.useImageInsteadLink);
              }
  
              getPageX(){
                  //var textWidth = $("#" + this.id).textWidth();
                  let textWidth = document.getElementById(this.id).getBoundingClientRect().width;
                  return parseInt(this.globe.radius + this.y - (textWidth / 2)); //This is relative to the top left corner of the div
              }
              getPageY(){
                  var textHeight = parseInt(window.getComputedStyle(document.getElementById(this.id)).fontSize, 10);
                  return parseInt(this.globe.radius + this.z - (textHeight / 2));
              }
  
              updateLocation(rotateText, useImageInsteadLink){
                  var element = document.getElementById(this.id);
  
                  element.style.left = this.getPageX() + "px";
                  element.style.top = this.getPageY() + "px";
                  if(rotateText){
                      var scaleX = this.y / this.globe.radius; //This gives -1 -> 1
                      scaleX *= Math.PI / 2; //This gives -PI/2 -> PI/2
                      scaleX = Math.cos(scaleX);
                      scaleX *= this.x < 0 ? -1 : 1;
                      var scaleY = Math.abs(this.z / this.globe.radius); //This gives 1 -> 0 -> 1
                      scaleY = 1 - scaleY; //This gives 0 -> 1 -> 0
                      scaleY /= 2; //This gives 0 -> .5 -> 0
                      scaleY += .5; //This gives .5 -> 1 -> .5
                      if(!useImageInsteadLink)
                          element.style.transform = "scale(" + scaleX + "," + scaleY + ")";
                      else
                          element.style.transform = "translate(-50%,-50%) scale(" + scaleX + "," + scaleY + ")";
                  }else{
                      let ratioBackwards = this.x / this.globe.radius; //-1 -> 0 -> 1
                      let scale = 1;
                      let opacity = 1;
                      let zIndex = 5;
                      if(ratioBackwards >= 0){
                          //Do nothing
                      }else{
                          ratioBackwards += 1; //From 1 -> 0 from straight down to back end
                          scale = .5 + .5*ratioBackwards;
                          opacity = .2 + .8*ratioBackwards;
                          zIndex = 4;
                      }
                      if(!useImageInsteadLink) {
                          element.style.transform = "scale(" + scale + "," + scale + ")";
                          element.style.opacity = opacity;
                          element.style.zIndex = zIndex;
                      } else {
                          //element.style.transform = "translate(-50%,-50%) scale(" + scale + "," + scale + ")";
                          element.style.transform = "scale(" + scale + "," + scale + ")";
                          element.style.opacity = opacity;
                          element.style.zIndex = zIndex;
                      }
                  }
              }
          }
          function degreeToRadian(degree){
              return degree * Math.PI / 180;
          }
          function radianToDegree(radian){
              return radian * 180 / Math.PI;
          }
      `})})})}function x(){return l(a,{children:[t(v,{}),t("div",{className:"globeOverflowWrapper",style:{overflow:"hidden",position:"absolute",left:"0px",top:"0px"},children:t("div",{id:"globeDiv",style:{zIndex:999}})}),t(i,{children:t("script",{children:`
          if (deviceType != "phone") {
            if (true) {
              let Resize = function () {
                document.getElementsByClassName("globeOverflowWrapper")[0].style.width = vw + "px";
                document.getElementsByClassName("globeOverflowWrapper")[0].style.height = vh + "px";
              }
              window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
              Resize();
            }
            var globe1 = new globe(vw / 2, 3*vh / 4, vw/12, -Math.PI / 180.0 * .25, -Math.PI / 180.0 * .25, 0, document.getElementById("globeDiv"), false);
            new globeWord('g1', 'I am Aaron Skeels', degreeToRadian(90), degreeToRadian(0), 0, 0, 0, globe1);
            new globeWord('g2', 'MatLab', degreeToRadian(90), degreeToRadian(180), 0, 0, 0, globe1, "/src/img/projects/matlab_min.webp");
            new globeWord('g3', 'Java', degreeToRadian(90), degreeToRadian(90), 0, 0, 0, globe1, "/src/img/projects/java_min.webp");
            new globeWord('g4', 'MySQL', degreeToRadian(90), degreeToRadian(-90), 0, 0, 0, globe1, "/src/img/projects/mysql_min.webp");
            new globeWord('g5', 'Node.js', degreeToRadian(135), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/nodejs_min.webp");
            new globeWord('g6', 'Photoshop', degreeToRadian(135), degreeToRadian(120), 0, 0, 0, globe1, "/src/img/projects/photoshop_min.webp");
            new globeWord('g11', 'RaspberryPi', degreeToRadian(135), degreeToRadian(-120), 0, 0, 0, globe1, "/src/img/projects/rpi_min.webp");
            new globeWord('g7', 'Javascript', degreeToRadian(180), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/js_min.webp");
            new globeWord('g8', 'Unreal Engine', degreeToRadian(45), degreeToRadian(45), 0, 0, 0, globe1, "/src/img/projects/unrealengine_min.webp");
            new globeWord('g9', 'C++', degreeToRadian(45), degreeToRadian(165), 0, 0, 0, globe1, "/src/img/projects/cpp_min.webp");
            new globeWord('g12', 'Arduino', degreeToRadian(45), degreeToRadian(-75), 0, 0, 0, globe1, "/src/img/projects/arduino_min.webp");
            new globeWord('g10', 'Blender', degreeToRadian(0), degreeToRadian(0), 0, 0, 0, globe1, "/src/img/projects/blender_min.webp");
          }
        `})})]})}function z(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.spinnablecoin == "undefined")
              window.aaron.index.spinnablecoin = new Object();
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
              baseelem.classList.add("spinnablecoin");
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
          
              baseelem.addEventListener("load", Resize);

              //Handle spins
              let spinDegree = 0;
              let spinVelocity = 0;
              let spinDrag = .025;
              let spinTrigger = 0;
              baseelem.style.scale = "1";
              let ID_SpinInterval = setInterval(() => {
                if(spinVelocity >= 20){
                  spinTrigger = 1;
                }
                if(spinTrigger){
                  baseelem.style.scale = parseFloat(baseelem.style.scale) + .1;
                  window.location.href = "/wordsphere";
                }
                spinDegree += spinVelocity;
                spinDegree = spinDegree > 360 ? spinDegree - 360 : spinDegree;
                spinVelocity -= spinDrag;
                spinVelocity = spinVelocity < 0 ? 0 : spinVelocity;
                baseelem.style.transform = "translateX(-50%) translateY(-50%) rotateY(" + Math.round(spinDegree) + "deg)";
              }, 10)
              baseelem.addEventListener("mousedown", (e) => {
                if(spinVelocity == 0)
                  spinVelocity += 2;
                spinVelocity += 1;
              });
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, baseelem, true);
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}function n(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.fader == "undefined")
              window.aaron.index.fader = new Object();
            if (typeof window.aaron.index.fader.ActivateFuncs == "undefined")
              window.aaron.index.fader.ActivateFuncs = [];
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Activate;

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
            Activate = function () {
              let timeKeyframes = `+e.timekeyframes+`;
              let opacityKeyframes = `+e.opacitykeyframes+`;
              let elem = document.getElementById("`+e.targetid+`");
              let startingTime = Date.now();
              let ID_Interval = -1;

              let keyframe = function () {
                let deltaTime = Date.now() - startingTime;
                //
                let interpOpac = clamp(evaluateLinear(deltaTime, timeKeyframes, opacityKeyframes), 0, 1);
                elem.style.opacity = interpOpac;
                //
                if (deltaTime > timeKeyframes[timeKeyframes.length - 1]) {
                  elem.remove();
                  clearInterval(ID_Interval);
                }
              }

              ID_Interval = setInterval(keyframe, 10);
            };
            window.aaron.index.fader.ActivateFuncs.push(Activate);
          }
        `})})})}const A={id:"",targetid:"overlay-img",timekeyframes:"[0,1000]",opacitykeyframes:"[1,0]",enablepc:"true",enablephone:"true"},S={id:"",targetid:"overlay-p1",timekeyframes:"[0,2000,3000]",opacitykeyframes:"[1,1,0]",enablepc:"true",enablephone:"true"},R={id:"",targetid:"overlay-p2",timekeyframes:"[0,2000,3000]",opacitykeyframes:"[1,1,0]",enablepc:"true",enablephone:"true"},T={id:"",targetid:"overlay-p3",timekeyframes:"[0,2000,3000]",opacitykeyframes:"[0,0,0]",enablepc:"true",enablephone:"true"},I={id:"",targetid:"overlay",timekeyframes:"[0,3000,4000]",opacitykeyframes:"[1,1,0]",enablepc:"true",enablephone:"true"};function k(e){return l(a,{children:[t(i,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.overlay == "undefined")
              window.aaron.index.overlay = new Object();
          })();

          let skipOverlayURL = false;
          let URLQueries = window.aaron.common.urltool.GetQueries();
          if (typeof URLQueries.skipOverlay != "undefined" && URLQueries.skipOverlay == "true") {
            skipOverlayURL = true;
            window.aaron.common.urltool.UpdateURL(window.location.origin, false);
          }
          if ((((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true))
              && !skipOverlayURL) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, p1, p2;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+e.id+`";
              baseelem.classList.add("overlay");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.backgroundColor = "black"; //This is to hide png texture popping
              //We can't just hide the entire element or the background elements show.
              baseelem.style.overflow = "hidden";
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
              //
              let onClick = function () {
              
              }
              baseelem.addEventListener("click", () => {
                console.log("click");
                baseelem.style.backgroundColor = "white";
                if (typeof window.aaron.index.fader.ActivateFuncs != "undefined") {
                  for (let f of window.aaron.index.fader.ActivateFuncs) {
                    f();
                  }
                }
              });

              imgelem = document.createElement("img");
              imgelem.id = "overlay-img";
              imgelem.style.position = "absolute";
              imgelem.style.transform = "translate(-50%,-50%)";
              imgelem.style.userSelect = "none";
              imgelem.style.left = "50%";
              imgelem.style.top = "50%";
              imgelem.style.width = "101%";
              imgelem.style.height = "101%";
              imgelem.style.backgroundColor = "black";
              imgelem.style.opacity = "0";
              imgelem.style.transition = "opacity .5s";
              //
              if (deviceType == "pc" || deviceType == "tablet") {
                imgelem.src = "`+e.srcpc+`";
              } else {
                imgelem.src = "`+e.srcphone+`";
              }
              imgelem.ondragstart = () => {
                return false;
              };
              imgelem.addEventListener("load", () => {
                imgelem.style.opacity = "1";
                setTimeout(() => {
                  imgelem.style.transition = "";
                }, 500);
              });

              p1 = document.createElement("span");
              p1.id = "overlay-p1";
              p1.innerText = "I Am";
              p1.style.fontWeight = "100";
              p1.style.position = "absolute";
              p1.style.transform = "translate(-50%,-50%)";
              p1.style.left = "50%";
              p1.style.top = "47%";

              p2 = document.createElement("span");
              p2.id = "overlay-p2";
              p2.innerText = "Aaron Skeels";
              p2.style.position = "absolute";
              p2.style.transform = "translate(-50%,-50%)";
              p2.style.left = "50%";
              p2.style.top = "53%";

              let p3 = document.createElement("span");
              p3.id = "overlay-p3";
              p3.innerText = "(Click to Enter)";
              p3.style.position = "absolute";
              p3.style.transform = "translate(-50%,-50%)";
              p3.style.left = "50%";
              p3.style.top = "75%";
              p3.style.opacity = ".3";
              p3.style.fontSize = "200%";
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);
              baseelem.append(imgelem);
              baseelem.append(p1);
              baseelem.append(p2);
              baseelem.append(p3);
          
              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
              window.requestAnimationFrame(() => {
                let fontSize = parseInt(baseelem.getBoundingClientRect().height*.06) + "px";
                // let p1 = baseelem.childNodes[1];
                p1.style.fontSize = fontSize;
                // let p2 = baseelem.childNodes[2];
                p2.style.fontSize = fontSize;
              });
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})}),t(n,{...A}),t(n,{...S}),t(n,{...R}),t(n,{...T}),t(n,{...I})]})}const E={id:"",pages:[{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:0,enablepc:"true",zindexpc:"1",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"6",xpc:"0",ypc:"0",enablephone:"false",zindexphone:"",anchorpointphone:"",sizingmodephone:"",widthphone:"",heightphone:"",xphone:"",yphone:""},P={id:"",pages:[{text:"Home",href:"/?skipOverlay=true"},{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:1,enablepc:"false",zindexpc:"",anchorpointpc:"",sizingmodepc:"",widthpc:"",heightpc:"",xpc:"",ypc:"",enablephone:"true",zindexphone:"100",anchorpointphone:"topleft",sizingmodephone:"explicit",widthphone:"100",heightphone:"6",xphone:"0",yphone:"0"},X={id:"",text:"Aaron Skeels",fontfamily:"",fontsize:"4vw",fontweight:"100",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"widthAutoHeight",widthpc:"50",heightpc:"50",xpc:"50",ypc:"12",enablephone:"false"},F={id:"",text:"Aaron Skeels",fontfamily:"",fontsize:"15vw",fontweight:"100",color:"",enablepc:"false",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"widthAutoHeight",widthphone:"50",heightphone:"50",xphone:"50",yphone:"15"},Y={id:"",text:"Aerospace Engineer - Software Developer",fontfamily:"",fontsize:"1.5vw",fontweight:"700",color:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"widthAutoHeight",widthpc:"50",heightpc:"50",xpc:"50",ypc:"20",enablephone:"false"},W={id:"",text:"Aerospace Engineering - Computer Science",fontfamily:"",fontsize:"4vw",fontweight:"700",color:"",whitespace:"nowrap",enablepc:"false",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"widthAutoHeight",widthphone:"50",heightphone:"50",xphone:"50",yphone:"26.5"},C={id:"",enablepc:"true",zindexpc:"0",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"60",xpc:"0",ypc:"3",srcpc:"/src/img/bg-blueovalheader_min.webp",enablephone:"false"},j={id:"",src:"/src/img/bg-stars.png",naturalwidth:"1920",naturalheight:"1080",transition:"left linear 60s",timetoscroll:"60000",enablepc:"true",zindexpc:"-2",enablephone:"true",zindexphone:"-2"},L={id:"",src:"/src/img/bg-constellationscrop_min.webp",naturalwidth:"4089",naturalheight:"1080",transition:"left linear 30s",timetoscroll:"30000",enablepc:"true",zindexpc:"-1",enablephone:"true",zindexphone:"-1"},B={id:"",text:"About Me",href:"/aboutme.html",fontfamily:"",fontsize:"4vw",fontweight:"100",color:"",transition:"left 3s linear, top 3s linear",timetoscroll:"3000",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"widthAutoHeight",widthpc:"50",heightpc:"50",xcenterpc:"20",xradiuspc:"3",ycenterpc:"70",yradiuspc:"5",enablephone:"false"},M={id:"",text:"About Me",href:"/aboutme.html",fontfamily:"",fontsize:"10vw",fontweight:"100",color:"",transition:"left 3s linear, top 3s linear",timetoscroll:"3000",enablepc:"false",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"widthAutoWidth",widthphone:"50",heightphone:"50",xcenterphone:"50",xradiusphone:"10",ycenterphone:"70",yradiusphone:"2"},O={id:"",text:"Projects",href:"/projects.html",fontfamily:"",fontsize:"4vw",fontweight:"100",color:"",transition:"left 3s linear, top 3s linear",timetoscroll:"3000",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"widthAutoHeight",widthpc:"50",heightpc:"50",xcenterpc:"80",xradiuspc:"3",ycenterpc:"70",yradiuspc:"5",enablephone:"false"},G={id:"",text:"Projects",href:"/projects.html",fontfamily:"",fontsize:"10vw",fontweight:"100",color:"",transition:"left 3s linear, top 3s linear",timetoscroll:"3000",enablepc:"false",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"WidthAutoHeight",widthphone:"50",heightphone:"50",xcenterphone:"50",xradiusphone:"10",ycenterphone:"90",yradiusphone:"2"},H={id:"",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"heightAutoWidth",widthpc:"10",heightpc:"25",xpc:"50",ypc:"40",srcpc:"/src/img/mecartoonifypin256.png",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"widthAutoHeight",widthphone:"55",heightphone:"50",xphone:"50",yphone:"45",srcphone:"/src/img/mecartoonifypin256.png"},_={id:"overlay",enablepc:"true",zindexpc:"1000",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"100",heightpc:"100",xpc:"50",ypc:"50",srcpc:"/src/img/bg-darkgeometry_min.webp",enablephone:"true",zindexphone:"1000",anchorpointphone:"middlemiddle",sizingmodephone:"heightAutoWidth",widthphone:"50",heightphone:"100",xphone:"50",yphone:"50",srcphone:"/src/img/bg-darkgeometry_min.webp"};function N(){return l(a,{children:[t(u,{...E}),t(f,{...P}),t(o,{...X}),t(o,{...F}),t(o,{...Y}),t(o,{...W}),t(y,{...C}),t(r,{...j}),t(w,{...L}),t(s,{...B}),t(s,{...M}),t(s,{...O}),t(s,{...G}),t(x,{}),t(z,{...H}),t(k,{..._})]})}function Z(e){return t(a,{children:t(i,{children:t("script",{children:`
          (function () {
            if (window.location.pathname === "/spigot") {
              window.open('https://www.spigotmc.org/resources/authors/thetealviper.116592/', '_blank');
              window.aaron.common.urltool.UpdateURL("https://aaronskeels.work/projects.html?search=spigot", true);
            }
            if (window.location.pathname === "/projects") {
              window.aaron.common.urltool.UpdateURL("https://aaronskeels.work/projects.html", true);
            }
          })();
        `})})})}d.createRoot(document.getElementById("root")).render(l(c.StrictMode,{children:[t(b,{}),t(Z,{}),t(h,{}),t(m,{}),t(p,{}),t(N,{}),t(g,{})]}));
