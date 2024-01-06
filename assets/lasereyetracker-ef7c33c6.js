import{j as e,F as i,H as s,a as r,S as l,c,R as p,b as d,M as h,d as m,e as u}from"./faviconsetter-da5e80b9.js";import{N as f,a as b}from"./navbarphone-a27821dc.js";import{S as g,a as w}from"./scrollbar-85b404cc.js";import{S as y,B as v,a as t,b as o,c as x}from"./blogfootergap-4b4a74a4.js";import{S as k}from"./scrollablepage-a2dbc0aa.js";function a(n){return e(i,{children:e(s,{children:e("script",{children:`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogvideospoiler == "undefined")
              window.aaron.projects.blogvideospoiler = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+n.enablepc+` == true)
              || (deviceType == "phone" && `+n.enablephone+` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+n.id+`";
              baseelem.classList.add("blogvideospoiler");
              if (deviceType == "pc" || deviceType == "tablet") {
                baseelem.style.maxWidth = "60%";
              } else {
                baseelem.style.maxWidth = "90%";
              }
              baseelem.style.marginLeft = "auto";
              baseelem.style.marginRight = "auto";

              let propsrc;
              if (deviceType == "pc" || deviceType == "tablet") {
                propsrc = "`+n.srcpc+`";
              } else {
                propsrc = "`+n.srcphone+`";
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
                videlem.autoplay = false;
                videlem.controls = true;
                videlem.style.visibility = "hidden";
                // baseelem.append(videlem);

                let srcelem = document.createElement("source");
                srcelem.src = src;
                srcelem.type = "video/mp4";
                videlem.append(srcelem);

                let btnelem = document.createElement("button");
                btnelem.innerText = "Load Video";
                btnelem.style.margin = "2px";
                btnelem.addEventListener("click", () => {
                  videlem.style.visibility = "visible";
                  videlem.play();
                  baseelem.insertBefore(videlem, btnelem);
                  btnelem.remove();
                });
                baseelem.append(btnelem);
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
        `})})})}const z={id:"",pages:[{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:-1,enablepc:"true",zindexpc:"1",anchorpointpc:"topleft",sizingmodepc:"explicit",widthpc:"100",heightpc:"6",xpc:"0",ypc:"0",enablephone:"false",zindexphone:"",anchorpointphone:"",sizingmodephone:"",widthphone:"",heightphone:"",xphone:"",yphone:""},B={id:"",pages:[{text:"Home",href:"/?skipOverlay=true"},{text:"About Me",href:"/aboutme.html"},{text:"Projects",href:"/projects.html"},{text:"Contact",href:"/contact.html"}],activepage:-1,enablepc:"false",enablephone:"true",zindexphone:"100",anchorpointphone:"topleft",sizingmodephone:"explicit",widthphone:"100",heightphone:"6",xphone:"0",yphone:"0"},P={id:"",src:"/src/img/bg-stars.png",naturalwidth:"1920",naturalheight:"1080",transition:"left linear 60s",timetoscroll:"60000",enablepc:"true",zindexpc:"-2",enablephone:"true",zindexphone:"-2"},T={id:"",enablepc:"true",zindexpc:"-1",anchorpointpc:"middlemiddle",sizingmodepc:"explicit",widthpc:"70",heightpc:"105",xpc:"50",ypc:"0",srcpc:"/src/img/bg-blogwall.png",enablephone:"true",zindexphone:"-1",anchorpointphone:"middlemiddle",sizingmodephone:"explicit",widthphone:"95",heightphone:"105",xphone:"50",yphone:"0",srcphone:"/src/img/bg-blogwall.png"},S={enablepc:"true",zindexpc:"1",enablephone:"true",zindexphone:"1"},I={id:"",targetid:"scrollablebody",enablepc:"true",zindexpc:"1",scrollstrengthpc:"100",minimumanimframespc:"4",pixelsperframepc:"20",widthmodepc:"px",widthvaluepc:"10",scrollbaroffsetpc:"0",enablephone:"true",zindexphone:"1",scrollstrengthphone:"50",minimumanimframesphone:"5",pixelsperframephone:"5",widthmodephone:"px",widthvaluephone:"5",scrollbaroffsetphone:"0"},A={id:"",text:"Laser Eye Tracker",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},j={id:"",text:"1. Purpose",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},M={id:"",text:"For one of my Physics classes I took (misinformedly RETOOK) in community college, we were allowed to make some sort of Arduino interface as our final instead of answering a typical final question. Of course I jumped at this opportunity. The plan was simple: Make something fun, make something unintuitive, and make something challenging. So what did that *something* become? A robot which tracks and shines a laser pointer in the user's eye.",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},_={id:"",text:"2. Briefing",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},H={id:"",text:`The build would utilize an arduino, two positional servo motors attached to one another (one X-Y plane one X-Z plane), an arduino laser module, my laptop (and its built in webcam), and custom software running on BOTH the arduino and my laptop separately. My laptop would run a Java applet which handles facial recognition, eye tracking, location parsing, translating the delta from laser-to-eye into polar coordinates (modified interpretation of \\"radius\\" from standard model) into rotational values for the servos. The laptop was chosen to do ALL processing because it's a laptop and not a rinky dink Arduino and it evidently didn't throttle, requiring any multitasking across devices. The computed target angle deltas were then sent over serial from the laptop to the Arduino. I worked within the space of deltas rather than precise angles because my attachment process of the servos to one another was a proprietary technique which didn't yield the best results I called \\"duct tape them together leveraging the largest shaft extensions I have in my possession and hope for the best\\". So precise controls were not of use as they didn't allow for (SIGNIFICANT) tolerancing required for the \\"duct tape wiggle\\" in operation with high torsion. Simply considering the deltas accounted for this. Look at me effectively inventing proportional controllers before even taking controls in university call me Einstein (this is sarcasm).`,fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},E={id:"",text:"3. Results",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:"nowrap"},F={id:"",text:"The final results are: it worked. Stipulations being the laser was too weak to easily be noticed in bright light against a white wall while the facial recognition (eye tracking) didn't work in the dark, so a brown cardboard backplate was necessary behind the subject begging to be blinded. Unfortunately, past Aaron didn't find it important to document functional products nor had he ever heard of GitHub so his work was lost to a reformatting of his laptop to pursue Linux :)",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},N={id:"",text:"Face Trackerboi Mk. 1",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:""},R={id:"",enablepc:"true",srcpc:"/src/vid/projects/lasereyetracker/mk1.mp4",enablephone:"true",srcphone:"/src/vid/projects/lasereyetracker/mk1.mp4"},L={id:"",text:'Face Trackerboi Mk. 1 was quite the disappointment. At this stage, I was testing simple face detection (not even eye tracking yet). While it technically \\"workeddddddd\\"... it was very laggy and quite frankly unusable. Nobody would be blinded by this disappointment.',fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},O={id:"",text:"Face Trackerboi Mk. 2",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:""},C={id:"",enablepc:"true",srcpc:"/src/vid/projects/lasereyetracker/mk2.mp4",enablephone:"true",srcphone:"/src/vid/projects/lasereyetracker/mk2.mp4"},W={id:"",text:`Face Trackerboi Mk. 2 was a huge improvement. I believe I swapped to not only a new training set used to identify/track the face, but also an entirely new library altogether. With workable framerates, I could expand into throwing in calculations for eye tracking. Everything ended up working nicely. Next step was to think of a way to track the laser because up to this point all \\"tracking\\" was done via pretrained datasets utilizing libraries I didn't have experience with, and believe it or not nobody had pretrained a dataset for a laser against cardboard.`,fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},q={id:"",text:"Face Trackerboi Mk. 2.5",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:""},G={id:"",enablepc:"true",srcpc:"/src/vid/projects/lasereyetracker/colortracking.mp4",enablephone:"true",srcphone:"/src/vid/projects/lasereyetracker/colortracking.mp4"},V={id:"",text:`Face Trackerboi Mk. 2.5 was the final revision of the laptop half of the software. With the laser visible on cam, the user clicked it with the mouse caching the expected bundling of pixel colors. Then each frame of webcam feed, similarities with some tolerance x to the cached color bundle would all be marked. An average of all occurrences of this color would be used to conclude where the \\"center\\" of the laser is. In the video above I used an orange as it's far simpler to work with for demonstration purposes.`,fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"},J={id:"",text:"Improvements & Challenges",fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true",whitespacephone:""},X={id:"",text:`For starters, past Aaron needed to learn to backup code to the cloud. I suppose you could say running numerous software doing independent things communicating over serial was a \\"challenge\\" but it really wasn't. It was very straightforward even using two different languages. Optimizing the face recognition software wasn't a challenge because it simply ran off pretrained data. There was not really any influence I could have there aside from using a different dataset. Another challenge (but not really because it couldn't be overcome) was low power lasers aren't visible against white walls in bright lighting. A possible improvement would be not relying on pretrained datasets or external libraries which I don't understand the underworkings of at ALL. Granted this was done for a final so I didn't exactly have time to do either of those things. I'm just saying in an ideal world. Another improvement would have been not using the least stable attachment style I could possibly devise holding the servos together. They were my only two servos and I didn't want to permanently attach them.`,fontfamily:"",fontsize:"",fontweight:"",color:"",enablepc:"true",enablephone:"true"};function K(){return r(i,{children:[e(f,{...z}),e(b,{...B}),e(l,{...P}),e(g,{...T}),e(y,{}),e(k,{...S}),e(w,{...I}),e(v,{}),e(t,{...A}),e(t,{...j}),e(o,{...M}),e(t,{..._}),e(o,{...H}),e(t,{...E}),e(o,{...F}),e(t,{...N}),e(a,{...R}),e(o,{...L}),e(t,{...O}),e(a,{...C}),e(o,{...W}),e(t,{...q}),e(a,{...G}),e(o,{...V}),e(t,{...J}),e(o,{...X}),e(x,{})]})}c.createRoot(document.getElementById("root")).render(r(p.StrictMode,{children:[e(d,{}),e(h,{}),e(m,{}),e(K,{}),e(u,{})]}));
