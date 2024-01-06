import{j as a,F as t,H as o}from"./faviconsetter-da5e80b9.js";function i(e){return a(t,{children:a(o,{children:a("script",{children:`
          window.snowflake = `+Math.random()+`; //This is necessary for reasons outlined in the site project page
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.aboutme == "undefined")
              window.aaron.aboutme = new Object();
            if (typeof window.aaron.aboutme.scrollablepage == "undefined")
              window.aaron.aboutme.scrollablepage = new Object();
            if (typeof window.aaron.aboutme.scrollablepage.beforePageResize == "undefined")
              window.aaron.aboutme.scrollablepage.beforePageResize = new Object(); // {pagenum: [array of resize functions]}
            if (typeof window.aaron.aboutme.scrollablepage.afterPageResize == "undefined")
              window.aaron.aboutme.scrollablepage.afterPageResize = new Object(); // {pagenum: [array of resize functions]}
            if (typeof window.aaron.aboutme.scrollablepage.pageResizeRefs == "undefined")
              window.aaron.aboutme.scrollablepage.pageResizeRefs = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pagenumber;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              pagenumber = document.getElementsByClassName("scrollablepage").length;
              window.aaron.aboutme.scrollablepage.beforePageResize[pagenumber] = [];
              window.aaron.aboutme.scrollablepage.afterPageResize[pagenumber] = [];
              window.aaron.aboutme.scrollablepage.pageResizeRefs[pagenumber] = Resize;
            
              baseelem = document.createElement("div");
              baseelem.id = "scrollablepage-" + pagenumber; //Children implementations depend on this. Don't change standard.
              baseelem.classList.add("scrollablepage");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,0)";
              baseelem.style.width = vw + "px";
              baseelem.style.height = baseelem.scrollTopMax + "px";
              //
              baseelem.dataset.enablepc = "`+e.enablepc+`";
              baseelem.dataset.zindexpc = "`+e.zindexpc+`";
              //
              baseelem.dataset.enablephone = "`+e.enablephone+`";
              baseelem.dataset.zindexphone = "`+e.zindexphone+`";
          
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.appendChild(baseelem);
          
              Resize();
              //The following is a hack meant to fix scrollablepages not resizing correctly when not fullscreen in conjunction with "aboutme/infocards.jsx".
              // setTimeout(Resize, 100);
              //Attempt 2 at fixing this late-loading issue breaking the layout
              // const observer = new MutationObserver((mutationsList) => {
              //   for (const mutation of mutationsList) {
              //     if (mutation.type === 'childList') {
              //       // Handle the child node addition here
              //       console.log('A child node has been added to the parent element.');
              //       setTimeout(Resize, 100);
              //       setTimeout(Resize, 200);
              //     }
              //   }
              // });
              // const observerConfig = { childList: true };
              // observer.observe(baseelem, observerConfig);
            };
            Activate = function () {
              //No Activate
            };
            Resize = function (doResizeFuturePages) {
              //doResizeFuturePages - Boolean used to indicate whether this is an after initialization resizing to better house content on pages.
              // If true, only resize the page and future pages.
              // If false (or not present), also resize the before and after content within the individual page
              console.log("aboutme/scrollablepage:: page " + pagenumber + " resizing");
              let calculateChildrenRequiredHeight = function (elem, recursive, recursiveTopY) {
                let topY = (typeof recursiveTopY != "undefined") ? recursiveTopY : elem.getBoundingClientRect().top;
                let lowestY = topY;
                for (let childelem of elem.childNodes) {
                  if (typeof childelem.getBoundingClientRect == "undefined")
                    continue;
                  if (childelem.getBoundingClientRect().bottom > lowestY) {
                    lowestY = childelem.getBoundingClientRect().bottom;
                  }
                  if (recursive) {
                    let childLowestY = calculateChildrenRequiredHeight(childelem, true, topY)+topY;
                    if (childLowestY > lowestY) {
                      lowestY = childLowestY;
                    }
                  }
                }
                return lowestY-topY;
              }
              let doStuff = function () {
                baseelem.style.width = vw + "px";
                baseelem.style.height = Math.max(calculateChildrenRequiredHeight(baseelem, true), vh) + "px";
                if (pagenumber == 0)
                  baseelem.style.top = "0px";
                else {
                  let heightSum = 0;
                  for (let i = 0;i < pagenumber;i++) {
                    let page = document.getElementById("scrollablepage-" + i);
                    let heightofpage = Math.max(calculateChildrenRequiredHeight(page, true), vh);
                    heightSum += heightofpage;
                  }
                  baseelem.style.top = (Math.max(heightSum,vh) + 1) + "px";
                }
                baseelem.style.left = parseInt(vw/2) + "px";
              }
              //Handle before/after resizing
              if (!doResizeFuturePages) {
                for (let f of window.aaron.aboutme.scrollablepage.beforePageResize[pagenumber]) {
                  f();
                }
              }
              doStuff();
              if (!doResizeFuturePages) {
                for (let f of window.aaron.aboutme.scrollablepage.afterPageResize[pagenumber]) {
                  f();
                }
              }
              //Resize next windows if they exist
              if (doResizeFuturePages) {
                if (typeof window.aaron.aboutme.scrollablepage.pageResizeRefs[pagenumber+1] != "undefined")
                  window.aaron.aboutme.scrollablepage.pageResizeRefs[parseInt(pagenumber+1)](true);
              }
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `})})})}export{i as S};
