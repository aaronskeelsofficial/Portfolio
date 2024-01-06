import { Helmet } from "react-helmet"

//Props Format
/*
const NavbarPhoneProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 0,
  //
  enablepc: "false",
  zindexpc: "",
  anchorpointpc: "",
  sizingmodepc: "",
  widthpc: "",
  heightpc: "",
  xpc: "",
  ypc: "",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "topleft",
  sizingmodephone: "explicit",
  widthphone: "100",
  heightphone: "6",
  xphone: "0",
  yphone: "0"
}
*/

//ActivePage Explanation
/*
* Index of 0 means home page
* Any other index progresses through pages object list
*/

//AnchorPoint Enums
/*
* topleft,topmiddle,topright,middleleft,middlemiddle,middleright,bottomleft,bottommiddle
* bottomright
*/

//SizingMode Enums
/*
* widthAutoHeight
* heightAutoWidth
* explicit
*/

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.navbarphone == "undefined")
              window.aaron.common.navbarphone = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
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
              pages = JSON.parse(\``+ JSON.stringify(props.pages) + `\`);
              //This next line is an amendmend after the fact to add a "resume" button. This is BAD. But I have too much tech debt at this point so hacky it is.
              pages.push({ text: "📄Resume", href: "src/misc/Resume%20-%20Aaron%20Skeels%20-%20Compressed.pdf" });
              pagetextelements = [];
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("navbar");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,0)";
              baseelem.style.overflow = "visible";
              baseelem.style.borderBottom = "black 2px solid";
              baseelem.style.backgroundColor = "rgb(82, 94, 101)";
              //
              baseelem.dataset.id = "`+ props.id + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              baseelem.dataset.anchorpointpc = "`+ props.anchorpointpc + `";
              baseelem.dataset.sizingmodepc = "`+ props.sizingmodepc + `";
              baseelem.dataset.widthpc = "`+ props.widthpc + `";
              baseelem.dataset.heightpc = "`+ props.heightpc + `";
              baseelem.dataset.xpc = "`+ props.xpc + `";
              baseelem.dataset.ypc = "`+ props.ypc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";
              //
              let scrollablebody = document.getElementById("scrollablebody");
              scrollablebody.addEventListener("scroll", HandleScrollPlacement);
            
              menudiv = document.createElement("div");
              menudiv.id = "`+ props.id + `";
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
                if (`+ props.activepage + ` == pageIndex) {
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
        `}</script>
      </Helmet>
    </>
  )
};