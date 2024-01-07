import { Helmet } from "react-helmet"

//Props Format
/*
const ContactBrowserProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  sizingunitpc: "parent",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "50",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  sizingunitphone: "parent",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50"
}
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

//SizingUnit Enums
/*
* viewport
* parent
* pixel
*/

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.contact == "undefined")
              window.aaron.contact = new Object();
            if (typeof window.aaron.contact.contactbrowser == "undefined")
              window.aaron.contact.contactbrowser = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize, InitializeDatabase, UpdateContactsOnDisplay;
            //Hoist vars
            let baseelem, imgelem, pelem;
            //Hoise misc vars
            let contactDatabase;
            
            Startup = function () {
              contactDatabase = [];
              InitializeDatabase();
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("contactbrowser");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.flexFlow = "row wrap";
              baseelem.style.justifyContent = "space-evenly";
              baseelem.style.alignItems = "center";
              // baseelem.style.alignContent = "space-evenly";
              // baseelem.style.backgroundColor = "orange";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "`+ props.id + `";
              baseelem.dataset.text = "`+ props.text + `";
              baseelem.dataset.fontfamily = "`+ props.fontfamily + `";
              baseelem.dataset.fontsize = "`+ props.fontsize + `";
              baseelem.dataset.fontweight = "`+ props.fontweight + `";
              baseelem.dataset.color = "`+ props.color + `";
              //
              baseelem.dataset.enablepc = "`+ props.enablepc + `";
              baseelem.dataset.zindexpc = "`+ props.zindexpc + `";
              baseelem.dataset.anchorpointpc = "`+ props.anchorpointpc + `";
              baseelem.dataset.sizingmodepc = "`+ props.sizingmodepc + `";
              baseelem.dataset.sizingunitpc = "`+ props.sizingunitpc + `";
              baseelem.dataset.widthpc = "`+ props.widthpc + `";
              baseelem.dataset.heightpc = "`+ props.heightpc + `";
              baseelem.dataset.xpc = "`+ props.xpc + `";
              baseelem.dataset.ypc = "`+ props.ypc + `";
              //
              baseelem.dataset.enablephone = "`+ props.enablephone + `";
              baseelem.dataset.zindexphone = "`+ props.zindexphone + `";
              baseelem.dataset.anchorpointphone = "`+ props.anchorpointphone + `";
              baseelem.dataset.sizingmodephone = "`+ props.sizingmodephone + `";
              baseelem.dataset.sizingunitphone = "`+ props.sizingunitphone + `";
              baseelem.dataset.widthphone = "`+ props.widthphone + `";
              baseelem.dataset.heightphone = "`+ props.heightphone + `";
              baseelem.dataset.xphone = "`+ props.xphone + `";
              baseelem.dataset.yphone = "`+ props.yphone + `";

              UpdateContactsOnDisplay();

              let root = document.getElementById("root");
              root.appendChild(baseelem);
          
              Resize();

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
              window.aaron.common.sizing.DefaultSetSize(baseelem, null, true);
            };
            window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);

            UpdateContactsOnDisplay = function (query) {
              let GenerateCard = function (contactInfo, index) {
                let a = document.createElement("a");
                a.target = "_blank";
                a.href = contactDatabase[index].redirect;
                a.style.width = "350px";
                a.style.height = "150px";
                let elem = document.createElement("div");
                elem.id = "card" + index;
                elem.style.width = "350px";
                elem.style.height = "150px";
                // elem.style.minWidth = "250px";
                // elem.style.maxWidth = "340px";
                elem.style.boxShadow = "0px 0px 10px 0px rgb(115, 204, 168)";
                elem.addEventListener("mouseover", (e) => {
                  elem.style.boxShadow = "0px 0px 30px 0px rgb(115, 204, 168)";
                });
                elem.addEventListener("mouseout", (e) => {
                  elem.style.boxShadow = "0px 0px 10px 0px rgb(115, 204, 168)";
                });
                elem.style.position = "relative";
                elem.style.marginTop = "10px";
                elem.style.marginBottom = "10px";
                elem.style.overflow = "hidden";
                if (deviceType == "phone")
                  elem.style.backgroundColor = "#222733";
                a.append(elem);
                let img = document.createElement("img");
                img.style.width = "13%";
                img.style.height = "auto";
                img.src = contactDatabase[index].icon;
                elem.append(img);
                let ctype = document.createElement("span");
                ctype.style.position = "absolute";
                ctype.style.right = "0px";
                ctype.style.top = "0px";
                ctype.innerText = contactDatabase[index].ctype;
                elem.append(ctype);
                let name = document.createElement("p");
                name.style.position = "absolute";
                name.style.width = "65%";
                name.style.top = "0px";
                name.style.left = "50%";
                name.style.transform = "translate(-50%,0)";
                name.style.textAlign = "center";
                name.style.fontFamily = "'Josefin Sans', sans-serif";
                name.style.fontSize = "140%";
                name.style.textDecoration = "none";
                name.innerText = contactDatabase[index].name;
                elem.append(name);
                let divider = document.createElement("hr");
                divider.width = "80%";
                divider.size = "8";
                divider.style.borderStyle = "solid none none none";
                divider.style.borderColor = "#D3D3D3";
                divider.style.position = "absolute";
                divider.style.left = "50%";
                divider.style.top = "50%";
                divider.style.transform = "translate(-50%,-50%)";
                elem.append(divider);
                let desc = document.createElement("p");
                desc.style.position = "absolute";
                desc.style.width = "95%";
                desc.style.top = "75%";
                desc.style.left = "50%";
                desc.style.transform = "translate(-50%,-50%)";
                desc.style.margin = "0px";
                desc.style.textAlign = "center";
                desc.style.fontFamily = "'Josefin Sans', sans-serif";
                desc.style.fontSize = "110%";
                desc.style.textDecoration = "none";
                desc.innerText = contactDatabase[index].description;
                elem.append(desc);
                return a;
              }

              //Wipe existing children
              while (baseelem.hasChildNodes())
                baseelem.removeChild(baseelem.childNodes[0]);
            
              for(let i = 0;i < contactDatabase.length;i++) {
                baseelem.append(GenerateCard(contactDatabase[i], i));
              }
            }
            window.aaron.contact.contactbrowser.UpdateContactsOnDisplay = UpdateContactsOnDisplay;
            
            InitializeDatabase = function(){
              let contact1 = new Object();
              contact1.name = "Phone";
              contact1.icon = "/src/img/contact/phone.png";
              contact1.ctype = "Reach Me";
              contact1.redirect = "tel:+19513553820";
              contact1.description = "(951)355-3820";
              contactDatabase.push(contact1);

              let contact2 = new Object();
              contact2.name = "Email";
              contact2.icon = "/src/img/contact/email.png";
              contact2.ctype = "Reach Me";
              contact2.redirect = "mailto:aaronskeelsofficial@gmail.com";
              contact2.description = "aaronskeelsofficial@gmail.com";
              contactDatabase.push(contact2);

              let contact2a = new Object();
              contact2a.name = "GitHub (Gaming)";
              contact2a.icon = "/src/img/projects/github_min.webp";
              contact2a.ctype = "Know Me";
              contact2a.redirect = "https://github.com/thetealviper";
              contact2a.description = "@TheTealViper";
              contactDatabase.push(contact2a);

              let contact2b = new Object();
              contact2b.name = "GitHub (Personal)";
              contact2b.icon = "/src/img/projects/github_min.webp";
              contact2b.ctype = "Know Me";
              contact2b.redirect = "https://github.com/aaronskeelsofficial";
              contact2b.description = "@AaronSkeelsOfficial";
              contactDatabase.push(contact2b);

              let contact3 = new Object();
              contact3.name = "LinkedIn";
              contact3.icon = "/src/img/contact/linkedin.png";
              contact3.ctype = "Know Me";
              contact3.redirect = "https://www.linkedin.com/in/aaronskeels";
              contact3.description = "@AaronSkeels";
              contactDatabase.push(contact3);

              let contact4 = new Object();
              contact4.name = "Instagram";
              contact4.icon = "/src/img/contact/ig.png";
              contact4.ctype = "Know Me";
              contact4.redirect = "https://www.instagram.com/aaronskeels/";
              contact4.description = "@AaronSkeels";
              contactDatabase.push(contact4);

              let contact5 = new Object();
              contact5.name = "Discord";
              contact5.icon = "/src/img/contact/discord.png";
              contact5.ctype = "Befriend Me";
              contact5.redirect = "https://www.discordapp.com/users/142418013394698240";
              contact5.description = "@TheTealViper";
              contactDatabase.push(contact5);

              let contact6 = new Object();
              contact6.name = "Twitter";
              contact6.icon = "/src/img/contact/twitter.png";
              contact6.ctype = "Befriend Me";
              contact6.redirect = "https://twitter.com/Aaron_Skeels";
              contact6.description = "@Aaron_Skeels";
              contactDatabase.push(contact6);
            }
          }
        `}</script>
      </Helmet>
    </>
  )
};