import{j as e,F as r,H as s,a as i,S as c,c as p,R as d,b as h,M as m,d as g,e as u}from"./faviconsetter-da5e80b9.js";import{N as f,a as b}from"./navbarphone-a27821dc.js";import{S as y,a as w}from"./scrollbar-85b404cc.js";import{S as v,B as x,a as n,b as t,c as j}from"./blogfootergap-4b4a74a4.js";import{S as B}from"./scrollablepage-a2dbc0aa.js";import{B as a}from"./blogimage-1e0f1d97.js";function l(o){return e(r,{children:e(s,{children:e("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogvideogif == "undefined")
              window.aaron.projects.blogvideogif = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+o.enablepc+` == true)
              || (deviceType == "phone" && `+o.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+o.id+`";
              baseelem.classList.add("blogvideogif");
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.style.maxWidth = "60%";
              } else {
                baseelem.style.maxWidth = "90%";
              }
              baseelem.style.marginLeft = "auto";
              baseelem.style.marginRight = "auto";

              let propsrc;
              if (deviceType == "pc" || deviceType == "tablet") {
                propsrc = "`+o.srcpc+`";
              } else {
                propsrc = "`+o.srcphone+`";
              }
              if (propsrc.startsWith("[")) {
                propsrc = JSON.parse(propsrc);
              } else {
                propsrc = [propsrc];
              }
              for (let src of propsrc) {
                let videlem = document.createElement("video");
                videlem.style.maxWidth = "100%";
                videlem.style.maxHeight = "800px";
                // videlem.style.width = "888px";
                // videlem.style.height = "500px";
                videlem.muted = true;
                videlem.loop = true;
                videlem.autoplay = true;
                baseelem.append(videlem);

                let srcelem = document.createElement("source");
                srcelem.src = src;
                srcelem.type = "video/mp4";
                videlem.append(srcelem);
              }
          
              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.style.textAlign = "center";
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
        `})})})}const P={id:"",pages:[{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:-1,enablepc:"true",zindexpc:"1",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"6",xpc:"0",ypc:"0",enablephone:"false",zindexphone:"",anchorpointphone:"",sizingmodephone:"",widthphone:"",heightphone:"",xphone:"",yphone:""},z={id:"",pages:[{text:"Home",href:"/?skipOverlay=true"},{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:-1,enablepc:"false",enablephone:"true",zindexphone:"100",anchorpointphone:"topleft",sizingmodephone:"explicit",widthphone:"100",heightphone:"6",xphone:"0",yphone:"0"},I={id:"",src:"/src/img/bg-stars.png",naturalwidth:"1920",naturalheight:"1080",transition:"left linear 60s",timetoscroll:"60000",enablepc:"true",zindexpc:"-2",enablephone:"true",zindexphone:"-2"},T={id:"",enablepc:"true",zindexpc:"-1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"70",heightpc:"105",xpc:"50",ypc:"0",srcpc:"/src/img/bg-blogwall.png",enablephone:"true",zindexphone:"-1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",widthphone:"95",heightphone:"105",xphone:"50",yphone:"0",srcphone:"/src/img/bg-blogwall.png"},S={enablepc:"true",zindexpc:"1",enablephone:"true",zindexphone:"1"},D={id:"",targetid:"scrollablebody",enablepc:"true",zindexpc:"1",scrollstrengthpc:"100",minimumanimframespc:"4",pixelsperframepc:"20",widthmodepc:"px",widthvaluepc:"10",scrollbaroffsetpc:"0",enablephone:"true",zindexphone:"1",scrollstrengthphone:"50",minimumanimframesphone:"5",pixelsperframephone:"5",widthmodephone:"px",widthvaluephone:"5",scrollbaroffsetphone:"0"},k={id:"",text:"Fall Guys Clone",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},_={id:"",text:"Purpose",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},A={id:"",text:"Out of boredom I decided to dedicate 3 days max to developing a Fall Guys clone just to see how far I could get. This includes modeling, rigging, animations, material textures, level design, and all underlying game logic from scratch.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},E={id:"",text:"Day 1",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},H={id:"",text:"Day 1 was spent actually modeling the character. I'm not the most experienced with Blender nor modeling but decided to try my hand. This was my first attempt at modeling the bean.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},F={id:"",enablepc:"true",srcpc:"/src/img/projects/fallguysclone/v1.png",enablephone:"true",srcphone:"/src/img/projects/fallguysclone/v1.png"},N={id:"",text:"This result was a terrible start. Are you seeing the shape of this monstrosity. Such came attempt 2. Attempt 2 came out better with arms and a better shape. I colored it to get a feel of it in game.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},R={id:"",enablepc:"true",srcpc:'[\\"/src/img/projects/fallguysclone/v2presub.png\\",\\"/src/img/projects/fallguysclone/v2postsub.png\\",\\"/src/img/projects/fallguysclone/v2final.png\\"]',enablephone:"true",srcphone:'[\\"/src/img/projects/fallguysclone/v2presub.png\\",\\"/src/img/projects/fallguysclone/v2postsub.png\\",\\"/src/img/projects/fallguysclone/v2final.png\\"]'},G={id:"",text:"Ultimately, I just didn't FEEL like it looked correct. I ended up running out of time and outsourcing to the internet for a model instead for sake of the 3-day project's timeline.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},C={id:"",enablepc:"true",srcpc:"/src/img/projects/fallguysclone/v3.png",enablephone:"true",srcphone:"/src/img/projects/fallguysclone/v3.png"},M={id:"",text:"Day 2",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},O={id:"",text:"Day 2 was dedicated to rigging and animating. Rigging was easy enough since it was from scratch, so I could make the bone structure that Unreal Engine likes.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},V={id:"",enablepc:"true",srcpc:"/src/img/projects/fallguysclone/rig.png",enablephone:"true",srcphone:"/src/img/projects/fallguysclone/rig.png"},W={id:"",enablepc:"true",srcpc:"/src/vid/projects/fallguysclone/wavingfallguy.mp4",enablephone:"true",srcphone:"/src/vid/projects/fallguysclone/wavingfallguy.mp4"},L={id:"",text:"Next up was animation. I animated a quick idle, walking, dive, and getup animation. The dive and getup animation can't be displayed because they use Unreal Engine rigging code to function and aren't hardcoded. This is because they lead into the animation from whatever state the rig is currently in (ragdolled). If you hardcoded the animation it wouldn't appear fluid from every possible starting state.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},U={id:"",enablepc:"true",srcpc:'[\\"/src/vid/projects/fallguysclone/walk.mp4\\",\\"/src/vid/projects/fallguysclone/idle.mp4\\"]',enablephone:"true",srcphone:'[\\"/src/vid/projects/fallguysclone/walk.mp4\\",\\"/src/vid/projects/fallguysclone/idle.mp4\\"]'},q={id:"",text:"Day 3",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},J={id:"",text:"Although I had technically already started working on in-engine logic to get the character animated and moving, day 3 was intended to be solely focused on game logic. I made two of the maps from the original game. One where there are two hammers which spin around a podium at different speeds and one where the players have to find out which of the tiles on the level are solid and which aren't even though they all look the same. This sounds bad, but somehow when I open this project now, there are two malfunctioning features. The dive doesn't appear to work at all anymore. Ragdolling doesn't work anymore (despite me having a functioning DYNAMIC ragdoll system). The spinning hammers no longer HIT the character away and throw them into the ragdoll state. I don't know what the heck I did when I last touched this but I swear I had it working at one point you gotta believe me you just gotta.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},Y={id:"",enablepc:"true",srcpc:'[\\"/src/vid/projects/fallguysclone/level1.mp4\\",\\"/src/vid/projects/fallguysclone/level2.mp4\\"]',enablephone:"true",srcphone:'[\\"/src/vid/projects/fallguysclone/level1.mp4\\",\\"/src/vid/projects/fallguysclone/level2.mp4\\"]'};function K(){return i(r,{children:[e(f,{...P}),e(b,{...z}),e(c,{...I}),e(y,{...T}),e(v,{}),e(B,{...S}),e(w,{...D}),e(x,{}),e(n,{...k}),e(n,{..._}),e(t,{...A}),e(n,{...E}),e(t,{...H}),e(a,{...F}),e(t,{...N}),e(a,{...R}),e(t,{...G}),e(a,{...C}),e(n,{...M}),e(t,{...O}),e(a,{...V}),e(l,{...W}),e(t,{...L}),e(l,{...U}),e(n,{...q}),e(t,{...J}),e(l,{...Y}),e(j,{})]})}p.createRoot(document.getElementById("root")).render(i(d.StrictMode,{children:[e(h,{}),e(m,{}),e(g,{}),e(K,{}),e(u,{})]}));
