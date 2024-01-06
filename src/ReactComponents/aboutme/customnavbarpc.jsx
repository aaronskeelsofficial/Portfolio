import { Helmet } from "react-helmet"

//Props Format
/*
const CustomNavbarProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 0,
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "topleft",
  sizingmodepc: "explicit",
  widthpc: "100",
  heightpc: "6",
  xpc: "0",
  ypc: "0",
  //
  enablephone: "false",
  zindexphone: "",
  anchorpointphone: "",
  sizingmodephone: "",
  widthphone: "",
  heightphone: "",
  xphone: "",
  yphone: ""
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
            if (typeof window.aaron.common.navbarpc == "undefined")
              window.aaron.common.navbarpc = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
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
              pages = JSON.parse(\``+ JSON.stringify(props.pages) + `\`);
              pagetextelements = [];
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("customnavbarpc");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,0)";
              baseelem.style.backgroundColor = "rgb(82, 94, 101)";
              baseelem.style.boxShadow = "black 0px 0px 10px 0px";
              baseelem.style.display = "flex";
              baseelem.style.justifyContent = "center";
              baseelem.style.columnGap = "1%";
              baseelem.style.alignItems = "center";

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
                if (`+ props.activepage + ` == 0) {
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
        `}</script>
      </Helmet>
    </>
  )
};