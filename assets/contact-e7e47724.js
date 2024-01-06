import{j as t,F as n,H as c,a,S as o,c as i,R as s,b as l,M as d,d as r,e as p}from"./faviconsetter-da5e80b9.js";import{U as m}from"./urltool-1b72bd7e.js";import{N as h,a as b}from"./navbarphone-a27821dc.js";import{S as u,a as g}from"./scrollbar-85b404cc.js";function y(e){return t(n,{children:t(c,{children:t("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.contact == "undefined")
              window.aaron.contact = new Object();
            if (typeof window.aaron.contact.contactbrowser == "undefined")
              window.aaron.contact.contactbrowser = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+e.enablepc+` == true)
              || (deviceType == "phone" && `+e.enablephone+` == true)) {
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
              baseelem.id = "`+e.id+`";
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
        `})})})}const w={id:"",pages:[{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:3,enablepc:"true",zindexpc:"1",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"6",xpc:"0",ypc:"0",enablephone:"false",zindexphone:"",anchorpointphone:"",sizingmodephone:"",widthphone:"",heightphone:"",xphone:"",yphone:""},x={id:"",pages:[{text:"Home",href:"/?skipOverlay=true"},{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:4,enablepc:"false",enablephone:"true",zindexphone:"100",anchorpointphone:"topleft",sizingmodephone:"explicit",widthphone:"100",heightphone:"6",xphone:"0",yphone:"0"},f={id:"",src:"/src/img/bg-stars.png",naturalwidth:"1920",naturalheight:"1080",transition:"left linear 60s",timetoscroll:"60000",enablepc:"true",zindexpc:"-2",enablephone:"true",zindexphone:"-2"},z={id:"",enablepc:"true",zindexpc:"-1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"70",heightpc:"105",xpc:"50",ypc:"0",srcpc:"/src/img/bg-blogwall.png",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"heightAutoWidth",widthphone:"50",heightphone:"50",xphone:"50",yphone:"50",srcphone:""},v={id:"contactbrowser",enablepc:"true",zindexpc:"1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",sizingunitpc:"viewport",widthpc:"65",heightpc:"80",xpc:"50",ypc:"53",enablephone:"true",zindexphone:"1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",sizingunitphone:"parent",widthphone:"98",heightphone:"80",xphone:"50",yphone:"53"},D={id:"",targetid:"contactbrowser",enablepc:"true",zindexpc:"1",scrollstrengthpc:"50",minimumanimframespc:"5",pixelsperframepc:"13",widthmodepc:"px",widthvaluepc:"10",scrollbaroffsetpc:"0",enablephone:"true",zindexphone:"1",scrollstrengthphone:"50",minimumanimframesphone:"5",pixelsperframephone:"5",widthmodephone:"px",widthvaluephone:"5",scrollbaroffsetphone:"0"};function S(){return a(n,{children:[t(h,{...w}),t(b,{...x}),t(o,{...f}),t(u,{...z}),t(y,{...v}),t(g,{...D})]})}i.createRoot(document.getElementById("root")).render(a(s.StrictMode,{children:[t(l,{}),t(d,{}),t(r,{}),t(m,{}),t(S,{}),t(p,{})]}));
