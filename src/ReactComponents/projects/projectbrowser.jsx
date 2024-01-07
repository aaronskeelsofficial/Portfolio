import { Helmet } from "react-helmet"

//Props Format
/*
const ProjectBrowserProps = {
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
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.projectbrowser == "undefined")
              window.aaron.projects.projectbrowser = new Object();
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize, InitializeDatabase, UpdateProjectsOnDisplay;
            //Hoist vars
            let baseelem, imgelem, pelem;
            //Hoise misc vars
            let projectDatabase;
            
            Startup = function () {
              projectDatabase = [];
              InitializeDatabase();
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "`+ props.id + `";
              baseelem.classList.add("projectbrowser");
              baseelem.style.position = "absolute";
              baseelem.style.transform = "translate(-50%,-50%)";
              baseelem.style.display = "flex";
              baseelem.style.flexFlow = "row wrap";
              baseelem.style.justifyContent = "space-evenly";
              baseelem.style.alignItems = "center";
              baseelem.style.alignContent = "space-between";
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

              UpdateProjectsOnDisplay();

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

            UpdateProjectsOnDisplay = function (query) {
              let GenerateCard = function (projectInfo, index) {
                //MAIN CARD
                let a = document.createElement("a");
                a.href = projectDatabase[index].redirect;
                let elem = document.createElement("div");
                elem.id = "card" + index;
                elem.style.width = "350px";
                elem.style.height = "350px";
                // elem.style.minWidth = "250px";
                // elem.style.maxWidth = "340px";
                if (!projectInfo.pinned) {
                  elem.style.boxShadow = "0px 0px 10px 0px rgb(115, 204, 168)";
                  elem.addEventListener("mouseover", (e) => {
                    elem.style.boxShadow = "0px 0px 30px 0px rgb(115, 204, 168)";
                  });
                  elem.addEventListener("mouseout", (e) => {
                    elem.style.boxShadow = "0px 0px 10px 0px rgb(115, 204, 168)";
                  });
                }
                elem.style.position = "relative";
                elem.style.marginTop = "10px";
                elem.style.marginBottom = "10px";
                elem.style.overflow = "hidden";
                if (deviceType == "phone")
                  elem.style.backgroundColor = "#222733";
                a.append(elem);
                
                //TECH IMG
                let img = document.createElement("img");
                img.style.width = "13%";
                img.style.height = "auto";
                img.src = projectDatabase[index].icon;
                elem.append(img);

                //PINNED IMG
                if (projectInfo.pinned) {
                  elem.style.boxShadow = "0px 0px 10px 0px #ecfa18";
                  elem.addEventListener("mouseover", (e) => {
                    elem.style.boxShadow = "0px 0px 30px 0px #ecfa18";
                  });
                  elem.addEventListener("mouseout", (e) => {
                    elem.style.boxShadow = "0px 0px 10px 0px #ecfa18";
                  });
                  let pinned = document.createElement("img");
                  pinned.src = "/src/img/projects/thumbtack.png";
                  pinned.title = "This is a project I'm especially proud of or think is important!";
                  pinned.style.position = "absolute";
                  pinned.style.left = "50%";
                  pinned.style.top = "10px";
                  pinned.style.transform = "translate(-50%,-50%)";
                  pinned.style.height = "4%";
                  pinned.style.cursor = "help";
                  pinned.style.paddingLeft = "7px";
                  pinned.style.paddingRight = "7px";
                  elem.append(pinned);
                }

                //DATE TEXT
                let date = document.createElement("span");
                date.style.position = "absolute";
                date.style.right = "0px";
                date.style.top = "0px";
                let dateStrArr = projectDatabase[index].date.split("/");
                date.innerText = dateStrArr[1] + "/" + dateStrArr[2] + "/" + dateStrArr[0].substring(2);
                elem.append(date);

                //NAME TEXT
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
                name.innerText = projectDatabase[index].name;
                elem.append(name);

                //DIVIDER
                let divider = document.createElement("hr");
                divider.width = "80%";
                divider.size = "8";
                divider.style.borderStyle = "solid none none none";
                divider.style.borderColor = "#D3D3D3";
                divider.style.position = "absolute";
                divider.style.left = "50%";
                divider.style.top = "20%";
                divider.style.transform = "translate(-50%,0)";
                elem.append(divider);

                //DESCRIPTION
                let desc = document.createElement("p");
                desc.style.position = "absolute";
                desc.style.width = "95%";
                desc.style.top = "25%";
                desc.style.left = "50%";
                desc.style.transform = "translate(-50%,0)";
                desc.style.textAlign = "center";
                desc.style.fontFamily = "'Josefin Sans', sans-serif";
                desc.style.fontSize = "100%";
                desc.style.textDecoration = "none";
                desc.style.maxHeight = "55%";
                desc.style.overflowY = "auto";
                desc.style.margin = "0px";
                desc.innerText = projectDatabase[index].description;
                elem.append(desc);

                //HOVER IMAGE
                if (projectInfo.previewmedia) {
                  //Setup text
                  desc.style.opacity = 1;
                  desc.style.transition = "opacity .25s";
                  elem.addEventListener("mouseover", (e) => {
                    desc.style.opacity = 0;
                  });
                  elem.addEventListener("mouseout", (e) => {
                    desc.style.opacity = 1;
                  });
                  //Setup img
                  let prev = document.createElement("img");
                  prev.src = projectInfo.previewmedia;
                  prev.style.position = "absolute";
                  prev.style.maxWidth = "95%";
                  prev.style.top = "55%";
                  prev.style.left = "50%";
                  prev.style.transform = "translate(-50%,-50%)";
                  prev.style.maxHeight = "55%";
                  prev.style.overflow = "hidden";
                  prev.style.margin = "0px";
                  prev.style.opacity = 0;
                  prev.style.transition = "opacity .5s";
                  elem.addEventListener("mouseover", (e) => {
                    prev.style.opacity = 1;
                  });
                  elem.addEventListener("mouseout", (e) => {
                    prev.style.opacity = 0;
                  });
                  elem.append(prev);
                }

                //SKILLS
                if (projectDatabase[index].skills) {
                  let skills = document.createElement("p");
                  skills.style.position = "absolute";
                  skills.style.width = "100%";
                  skills.style.bottom = "0px";
                  skills.style.left = "50%";
                  skills.style.transform = "translate(-50%,0)";
                  skills.style.textAlign = "left";
                  skills.style.fontFamily = "'Josefin Sans', sans-serif";
                  skills.style.fontSize = "100%";
                  skills.style.textDecoration = "none";
                  skills.style.backgroundColor = "rgb(82, 94, 101)";
                  skills.style.maxHeight = "20%";
                  skills.style.overflowY = "auto";
                  skills.style.margin = "0px";
                  let skillsText = "";
                  for (let skill of projectDatabase[index].skills)
                    skillsText = skillsText + skill + ", ";
                  skillsText = skillsText.substring(0, skillsText.length-2);
                  skills.innerText = "Skills: " + skillsText;
                  elem.append(skills);
                }
                return a;
              }

              //Wipe existing children
              while (baseelem.hasChildNodes())
                baseelem.removeChild(baseelem.childNodes[0]);
            
              if (typeof query == "undefined" || query == "") {
                //Identify all pinned projects
                let pinnedIndexDatabase = [];
                for (let i = projectDatabase.length-1;i >= 0;i--) {
                  if (projectDatabase[i].pinned) {
                    pinnedIndexDatabase.push(i);
                  }
                }
                //Add all pinned project
                for (let i = 0;i < pinnedIndexDatabase.length;i++) {
                  let projectIndex = pinnedIndexDatabase[i];
                  baseelem.append(GenerateCard(projectDatabase[projectIndex], projectIndex));
                }
                //Add rest of project
                for(let i = projectDatabase.length-1;i >= 0;i--) {
                  if (!pinnedIndexDatabase.includes(i))
                    baseelem.append(GenerateCard(projectDatabase[i], i));
                }
                //Add filler cards if necessary
                window.requestAnimationFrame(() => {
                  let baseMeasure = baseelem.getBoundingClientRect();
                  let cardsPerRow = Math.floor(baseMeasure.width / 350);
                  let cardsFound = baseelem.childNodes.length % cardsPerRow;
                  let cardsNecessary = cardsPerRow - cardsFound;
                  cardsNecessary = (cardsNecessary == cardsPerRow ? 0 : cardsNecessary);
                  for (let i = 0;i < cardsNecessary;i++) {
                    let filler = document.createElement("div");
                    filler.style.width = "350px";
                    filler.style.height = "350px";
                    baseelem.append(filler);
                  }
                })
                return;
              }

              //Now we compute how significantly each project matches the query
              let computationDatabase = [];
              let nlower = "";
              let klower = "";
              let dlower = "";
              let qlower = "";
              for(let i = 0;i < projectDatabase.length;i++) {
                let projectInfo = projectDatabase[i];
                nlower = projectInfo.name.toLowerCase();
                klower = "";
                projectInfo.keywords.forEach((e) => {klower = klower.concat(e.toLowerCase() + " ")});
                dlower = projectInfo.description.toLowerCase();
                qlower = query.toLowerCase();
                if(nlower == qlower || nlower.startsWith(qlower + " ") || nlower.endsWith(" " + qlower) || nlower.includes((" " + qlower + " "))){
                    computationDatabase[i] = 6;
                }else if(klower == qlower || klower.startsWith(qlower + " ") || klower.endsWith(" " + qlower) || klower.includes(" " + qlower + " ")){
                    computationDatabase[i] = 5;
                }else if(dlower == qlower || dlower.startsWith(qlower + " ") || dlower.endsWith(" " + qlower) || dlower.includes(" " + qlower + " ")){
                    computationDatabase[i] = 4;
                }else if(nlower.includes(qlower)){
                    computationDatabase[i] = 3;
                }else if(klower.includes(qlower)){
                    computationDatabase[i] = 2;
                }else if(dlower.includes(qlower)){
                    computationDatabase[i] = 1;
                }else{
                    computationDatabase[i] = 0;
                }
              }

              //Now we add each element in order of significance
              for (let significance = 6;significance > 0;significance--) {
                for(let i = projectDatabase.length-1;i >= 0;i--) {
                  if(computationDatabase[i] == significance)
                    baseelem.append(GenerateCard(projectDatabase[i], i));
                }
              }

              //Add filler cards if necessary
              window.requestAnimationFrame(() => {
                let baseMeasure = baseelem.getBoundingClientRect();
                let cardsPerRow = Math.floor(baseMeasure.width / 350);
                let cardsFound = baseelem.childNodes.length % cardsPerRow;
                let cardsNecessary = cardsPerRow - cardsFound;
                cardsNecessary = (cardsNecessary == cardsPerRow ? 0 : cardsNecessary);
                for (let i = 0;i < cardsNecessary;i++) {
                  let filler = document.createElement("div");
                  filler.style.width = "350px";
                  filler.style.height = "350px";
                  baseelem.append(filler);
                }
              })
            }
            window.aaron.projects.projectbrowser.UpdateProjectsOnDisplay = UpdateProjectsOnDisplay;
            
            InitializeDatabase = function(){
              let project1 = new Object();
              project1.name = "Neopets Profile Page";
              project1.description = "This was my first introduction to HTML. I didn't know what it was or how it really worked, but I knew I could copy, paste, and edit code I found online to change what my Neopets page looked like. There was another page with far more custom code, but they unfortunately deleted it with time.";
              project1.skills = ["Html/JS/CSS", "Childhood Innocence"];
              project1.keywords = ["html","css","kid"];
              project1.date = "2009/12/21";
              project1.icon = "/src/img/projects/web_min.webp";
              project1.redirect = "http://www.neopets.com/~dahaux";
              projectDatabase.push(project1);
  
              let project2 = new Object();
              project2.name = "Spigot Plugins";
              project2.description = "~300k+ downloads. I made 50+ small-tier plugins not worth their own standalone filing. Find them all here. Spigot is basically a framework making modifying multiplayer Minecraft servers significantly easier given Minecraft heavily obfuscates its packet transactions and processing. I've 'changed the game' with new tech others end up copying at least 3 times.";
              project2.skills = ["Java", "Eclipse", "Creativity", "Community Building", "Tech Support (Questions/Bug Fixes/Updates)"];
              project2.keywords = ["minecraft","java","kid","spigot","plugin","mod"];
              project2.date = "2015/10/24";
              project2.icon = "/src/img/projects/spigot_min.webp";
              project2.redirect = "https://www.spigotmc.org/resources/authors/thetealviper.116592";
              project2.pinned = true;
              project2.previewmedia = "https://githubdynamicgettexttoimage.aaronskeels2.repl.co/generate-image?spigotuserid=116592&width=350&height=60&fontsize=30"
              projectDatabase.push(project2);
  
              let project3 = new Object();
              project3.name = "PinPlease";
              project3.description = "12k+ Downloads. At the time of me making this plugin, the tech standard in minecraft was to lock doors/chests/etc you had to either physically place a sign block in the world with special text which all players could see, or you could type in chat. Forcing a physical unaesthetic block is janky and typing in chat didn't flow with the gameplay properly. Taking inspiration from Rust, I added a GUI keypad where you could simply click buttons as if you were really pressing a password. Many clones were made of this plugin through the minecraft versions since I didn't maintain it.";
              project3.skills = ["Java", "Eclipse", "Creativity", "Innovation"];
              project3.keywords = ["minecraft","java","spigot","plugin","mod","password"];
              project3.date = "2017/06/24";
              project3.icon = "/src/img/projects/spigot_min.webp";
              project3.redirect = "https://www.spigotmc.org/resources/pinplease.14011/";
              projectDatabase.push(project3);
  
              let project4 = new Object();
              project4.name = "FactionsShop";
              project4.description = "130k+ Downloads. A popular type of server on Minecraft was one called 'Factions.' In this server, players claim land, earn resources to become the strongest faction, and wage war to gain resources and express their dominance. An important functionality of this gameplay is the server shop where players can exchange materials for money for other materials. Servers had a hard time building up the shops let alone balancing the pricing. This mod/plugin automated all of that.";
              project4.skills = ["Java", "Eclipse", "Creativity"];
              project4.keywords = ["minecraft","java","spigot","faction","shop","plugin","mod"];
              project4.date = "2017/06/24";
              project4.icon = "/src/img/projects/spigot_min.webp";
              project4.redirect = "https://www.spigotmc.org/resources/factionsshop-1-14-drag-n-drop.42752/";
              projectDatabase.push(project4);
  
              let project4a = new Object();
              project4a.name = "Laser Eye Tracker";
              project4a.description = "Arduino + Java + Facial Recognition + Eye Tracking + Laptop + Webcam + Calculation Outsourcing + Serial Comms + Laser + Blind Participant (not really). Final physics project in community college.";
              project4a.skills = ["Arduino", "Java", "Critical Thinking", "Cross Device Communication", "Image Recognition (External Library)"];
              project4a.keywords = ["arduino","java","laser","laptop","facial recognition","track","serial","project","citrus","college","final","physics"];
              project4a.date = "2018/06/05";
              project4a.icon = "/src/img/projects/arduino_min.webp";
              project4a.redirect = "/projects/lasereyetracker.html";
              project4a.previewmedia = "https://i.imgur.com/7Zq71Mg.png";
              projectDatabase.push(project4a);
  
              let project5 = new Object();
              project5.name = "Soundcloud Music";
              project5.description = "With an already present interest to look into music production and a recently broken heart, I started messing with FL Studio 12, audio processing plugins, and learning the process from lyrics on paper to a fully mixed track. I have some actual tracks among meme tracks meant purely for fun. This is NOT mean to make me appear professional and should not be criticised under a professional lense.";
              project5.skills = ["FL Studio", "Vocal Production", "Instrumental Synthesis"];
              project5.keywords = ["soundcloud","fl","studio","12","song"];
              project5.date = "2018/08/23";
              project5.icon = "/src/img/projects/soundcloud_min.webp";
              project5.redirect = "https://soundcloud.com/aaron-skeels/tracks";
              projectDatabase.push(project5);
  
              let project6 = new Object();
              project6.name = "Intro to Blender Models";
              project6.description = "I've dabbled in Blender probably like 7 separate times on and off. Unfortunately, I've lost many of the source and rendered files of my work. Here is an album of two of my very first projects. Other, in use, examples can be found in my Unreal Engine and Unity game projects. These two models aren't that good. I'm not the best at Blender but I'm probably better than these two showcase haha.";
              project6.skills = ["Blender", "Maintaining Dignity Through Embarrassment"];
              project6.keywords = ["knife","crate","model"];
              project6.date = "2019/08/31";
              project6.icon = "/src/img/projects/blender_min.webp";
              project6.redirect = "https://imgur.com/a/tZz5Vfd";
              project6.previewmedia = "https://i.imgur.com/3WVudEP.png";
              projectDatabase.push(project6);
  
              let project7 = new Object();
              project7.name = "Knight Platformer";
              project7.description = "I had recently seen Celeste blow into popularity and enjoyed the mechanics. I wanted to see how close I could get to making a platformer kinda like it. For this project I would have to get a bit more experience with Unity, and this would be my first introduction into animation sprites and logic.";
              project7.skills = ["Unity", "Animation/State Management", "Game Logic"];
              project7.keywords = ["video game","unity","knight","slide","state","animate","animation","2d","platformer"];
              project7.date = "2019/12/28";
              project7.icon = "/src/img/projects/unity_min.webp";
              project7.redirect = "/projects/knightplatformer.html";
              project7.previewmedia = "https://i.imgur.com/uuAaeEN.gif";
              projectDatabase.push(project7);
  
              let project8 = new Object();
              project8.name = "Avionics Readout";
              project8.description = "For my introduction to avionics class, I was tasked to display an arduino sensors' readings in MatLab's Simulink. Instead of reading straight from Simulink I though it would be more interesting to run software on the Arduino for all data processing and simply output processed info into Simulink via the serial port. I unfortunately lost the MatLab visual file.";
              project8.skills = ["Arduino", "Simulink", "Per-Bit Accuracy/Tolerance"];
              project8.keywords = ["avionics","cpp","assignment","college","arduino","matlab","simulink","schematic"];
              project8.date = "2020/04/29";
              project8.icon = "/src/img/projects/arduino_min.webp";
              project8.redirect = "/projects/avionicsreadout.html";
              project8.previewmedia = "/src/img/projects/avionicsreadout/schematic.png";
              projectDatabase.push(project8);
  
              let project9 = new Object();
              project9.name = "Fall Guys Clone";
              project9.description = "Out of boredom I decided to dedicate 3 days max to developing a Fall Guys clone just to see how far I could get. This includes modeling, rigging, animations, material textures, level design, and all underlying game logic from scratch.";
              project9.skills = ["Unreal Engine", "Blender", "C++", "Animation/Rigging", "Game Logic"];
              project9.keywords = ["video game","unreal engine","bean","model","blender","animate","animation","rig","texture","level design","logic","c++"];
              project9.date = "2020/09/25";
              project9.icon = "/src/img/projects/unrealengine_min.webp";
              project9.redirect = "/projects/fallguysclone.html";
              project9.pinned = true;
              project9.previewmedia = "/src/img/projects/fallguysclone/rig.png";
              projectDatabase.push(project9);
  
              let project10 = new Object();
              project10.name = "Sensitivity Analysis";
              project10.description = "For my controls class I was assigned to develop a theoretical model of a physical actuator system via a mix of sensitivity analysis, brute force guesses, and calculations.";
              project10.skills = ["Leadership", "MatLab", "SimuLink", "Moderate Controls Comprehension", "Cooperation"];
              project10.keywords = ["control","cpp","assignment","college","matlab","simulink","simulation"];
              project10.date = "2020/11/01";
              project10.icon = "/src/img/projects/matlab_min.webp";
              project10.redirect = "/projects/sensitivityanalysis.html";
              project10.previewmedia = "/src/img/projects/sensitivityanalysis/model.png";
              projectDatabase.push(project10);
  
              let project11 = new Object();
              project11.name = "Drag Simulation";
              project11.description = "For my fluid mechanics class I was assigned to develop a drag simulation utilizing the Source Panel Method in MatLab across a range of angles of attack for a given airfoil.";
              project11.skills = ["MatLab", "Basic Linear Algebra Comprehension", "Critical Thought"];
              project11.keywords = ["fluid","cpp","assignment","college","final","matlab","simulation","linear algebra"];
              project11.date = "2020/11/23";
              project11.icon = "/src/img/projects/matlab_min.webp";
              project11.redirect = "/projects/sourcepanelmethod.html";
              project11.previewmedia = "/src/img/projects/sourcepanelmethod/data1.png";
              projectDatabase.push(project11);
  
              let project12 = new Object();
              project12.name = "Earth -> Ceres -> Earth";
              project12.description = "For my orbital mechanics final, I was tasked to lead a team. We were to develop a round trip mission statement of a rocket traveling from Earth to Ceres and back to Earth. Considerations were made for efficacy of fuel type, dry/wet mass, impulsive/low thrust, and date of departures.";
              project12.skills = ["Leadership", "Freeflyer", "Basic Orbital Mechanics Comprehension", "Creativity"];
              project12.keywords = ["freeflyer","earth","ceres","rocket","mission"];
              project12.date = "2020/12/04";
              project12.icon = "/src/img/projects/freeflyer_min.webp";
              project12.redirect = "/projects/orbitalmechanicsfinal.html";
              project12.previewmedia = "https://i.imgur.com/Y3gA3eo.png";
              projectDatabase.push(project12);
  
              let project13 = new Object();
              project13.name = "Structures Calculations";
              project13.description = "I created an excel document containing fairly automated calculations for all material covered in Structures 2 at Cal Poly Pomona.";
              project13.skills = ["Excel", "Basic Algebra", "LOTS of 'Approximations'"];
              project13.keywords = ["structure","cpp","assignment","college","excel"];
              project13.date = "2020/12/06";
              project13.icon = "/src/img/projects/excel_min.webp";
              project13.redirect = "https://docs.google.com/spreadsheets/d/1R5sVkujBHot5rgoI2Wo0gz4RW5Jw-Th_CP4TXXG_d5c/edit?usp=sharing";
              projectDatabase.push(project13);
  
              let project14 = new Object();
              project14.name = "Prolate Oblate Simulation";
              project14.description = "Unreal Engine based simulation visually exemplifying angular momentum vectors for prolate/oblate objects.";
              project14.skills = ["Unreal Engine", "Modest Linear Algebra Comprehension", "Basic Orbital Mechanics Comprehension"];
              project14.keywords = ["ue4","unreal engine","simulation","orbital mechanics","linear algebra","c++"];
              project14.date = "2021/03/17";
              project14.icon = "/src/img/projects/unrealengine_min.webp";
              project14.redirect = "/projects/prolateoblatesimulation.html";
              project14.previewmedia = "/src/img/projects/prolateoblatesimulation/Sample1.png";
              projectDatabase.push(project14);

              let project15a = new Object();
              project15a.name = "Space Vehicle Dynamics/Control Final";
              project15a.description = "I got 100% on my Dynamics/Control final and became the sole sample project for future classes.";
              project15a.skills = ["MatLab", "SimuLink", "Advanced Linear Algebra Comprehension", "Moderate Dynamics Comprehension", "Collaboration"];
              project15a.keywords = ["dynamics","control","cpp","assignment","final","college","matlab","simulink","linear algebra","team"];
              project15a.date = "2021/05/21";
              project15a.icon = "/src/img/projects/matlab_min.webp";
              project15a.redirect = "/projects/spacevehicledynamicscontrol.html";
              projectDatabase.push(project15a);

              let project15b = new Object();
              project15b.name = "Autonomous College Discord Server";
              project15b.description = "Fully autonomously administrated, direct democracy ran general purpose Discord server for ARO majors.";
              project15b.skills = ["Discord.js", "JS", "Replit", "Critical Thinking"];
              project15b.keywords = ["aro","cal poly","cpp","discord","server","bot","college","management","backend"];
              project15b.date = "2021/07/24";
              project15b.icon = "/src/img/projects/discord_min.webp";
              project15b.redirect = "/projects/aroserver.html";
              project15b.previewmedia = "/src/img/projects/aroserver/1.png";
              projectDatabase.push(project15b);
  
              let project15 = new Object();
              project15.name = "SQLite Login Service";
              project15.description = "I created a login backend for an MMO project.";
              project15.skills = ["Html/JS/CSS", "Node.js", "SQLite", "SHA-256"];
              project15.keywords = ["node.js","mmo","html","sql","sqlite","login","sha256","hash","password"];
              project15.date = "2021/07/29";
              project15.icon = "/src/img/projects/web_min.webp";
              project15.redirect = "/projects/sqlaccounts.html";
              project15.previewmedia = "/src/img/projects/sqlaccounts/demo.png";
              projectDatabase.push(project15);
  
              let project16 = new Object();
              project16.name = "End to End Encryption Chat";
              project16.description = "I created an ECDH AES-256 chat.";
              project16.skills = ["Html/JS/CSS", "Node.js", "AES-256", "ECDH", "Browserify", "Crypto.js"];
              project16.keywords = ["html","js","javascript","node.js","aes256","aes-256","chat","encryption","cipher","ecdh","elliptic","curve","diffie","hellman","browserify","crypto","crypto-js"];
              project16.date = "2021/07/31";
              project16.icon = "/src/img/projects/js_min.webp";
              project16.redirect = "/projects/diffiehellmanchat.html";
              project16.previewmedia = "/src/img/projects/diffiehellmanchat/demo.png";
              projectDatabase.push(project16);
  
              let project18 = new Object();
              project18.name = "JPL CubeSTEP Technical Report";
              project18.description = "Sole authored Critical Thinking Report for JPL on 'The Development, Manufacturing, and Testing of the CubeSTEP Satellite' as part of being contracted to design, manufacture, and produce a functional cubesat for their NDA payload. Proprietary info and tech redacted.";
              project18.skills = ["Leadership", "Technical Writing", "Critical Thinking", "Raspberry Pi", "C++", "Repo Forking"];
              project18.keywords = ["jpl","jet propulsion laboratory","team","cpp","college","cubestep","satellite","project","report"];
              project18.date = "2022/05/09";
              project18.icon = "/src/img/projects/word_min.webp";
              project18.redirect = "/projects/cubestepreport.html";
              project18.pinned = true;
              project18.previewmedia = "https://i.imgur.com/LIxbHIE.png";
              projectDatabase.push(project18);
  
              let project19 = new Object();
              project19.name = "Deadman's Switch";
              project19.description = "Made my desktop ping a deadman's switch that will release a message with passwords/goodbyes when I die.";
              project19.skills = ["Html/JS/CSS", "Node.js", "Replit", "UptimeRobot", "Windows Scheduler", "Batch/CURL"];
              project19.keywords = ["dead","deadman","switch","ping","replit","uptimerobot","html","node","js"];
              project19.date = "2022/05/15";
              project19.icon = "/src/img/projects/replit_min.webp";
              project19.redirect = "/projects/deadmansswitch.html";
              projectDatabase.push(project19);
  
              let project20 = new Object();
              project20.name = "Emrys Space Design Final";
              project20.description = "Final presentation for senior project at Cal Poly Pomona. Consists of an in-detail RFP for Caltech's Titan Challenge. Presented and judged by industry professionals at Lockheed Martin, JPL, among other aerospace companies. My role was to lead and essentially independently assess thermal and electric loads, analysis, and simulations among helping other subteams on the side. We performed 2nd best of all.";
              project20.skills = ["Leadership", "Technical Writing", "Deep Thermal Load Anlys. & Sim.", "Basic Electrical Load Anlys", "Critical Thinking"];
              project20.keywords = ["college","cpp","final","assignment","team","emrys","presentation","powerpoint","space"];
              project20.date = "2022/05/18";
              project20.icon = "/src/img/projects/rocket_min.webp";
              project20.redirect = "/projects/emrysspacedesignfinal.html";
              project20.pinned = true;
              project20.previewmedia = "/src/img/projects/emrysspacedesignfinal/Example.png";
              projectDatabase.push(project20);
  
              let project21 = new Object();
              project21.name = "Music Utility";
              project21.description = "NodeJS and ToneJS based Replit server to intelligently assist in scale identification as well as music playing via PC keyboard.";
              project21.skills = ["Html/JS/CSS", "Node.js", "External Library Incorporation", "Music Theory"];
              project21.keywords = ["html","js","javascript","css","replit","tonejs","piano","music","violin","guitar","nodejs"];
              project21.date = "2022/08/18";
              project21.icon = "/src/img/projects/replit_min.webp";
              project21.redirect = "/projects/musicutility.html";
              project21.previewmedia = "/src/img/projects/musicutility/Example.png";
              projectDatabase.push(project21);
  
              let project22 = new Object();
              project22.name = "Light Alert";
              project22.description = "NodeJS based RaspberryPi web server firing preconfigured messages to packet-sniffed, reverse engineered LED protocol. I despised using the terrible app that came with my wireless LED lights and wanted the capacity to control them from my computer. Turned into a project for my friends to get my attention.";
              project22.skills = ["Html/JS/CSS", "Raspberry Pi", "Node.js", "Express", "SSH", "Packet Sniffing", "Protocol Reverse Engineering"];
              project22.keywords = ["html","js","javascript","css","raspberrypi","nodejs","server","packet","sniff","reverse engineer","led"];
              project22.date = "2022/08/18";
              project22.icon = "/src/img/projects/rpi_min.webp";
              project22.redirect = "/projects/lightalert.html";
              project22.previewmedia = "/src/img/projects/lightalert/Example.png";
              projectDatabase.push(project22);
  
              let project23 = new Object();
              project23.name = "Blackjack Simulator";
              project23.description = "I was curious about Blackjack statistics and didn't trust singlehanded stats. I wanted full simulation outcomes.";
              project23.skills = ["Html/JS/CSS", "Mathematical Analysis", "Critical Thinking"];
              project23.keywords = ["html","js","javascript","css","blackjack","statistics","simulation"];
              project23.date = "2022/10/11";
              project23.icon = "/src/img/projects/js_min.webp";
              project23.redirect = "/projects/blackjacksimulator.html";
              project23.previewmedia = "/src/img/projects/blackjacksimulator/Example.png";
              projectDatabase.push(project23);
  
              let project24 = new Object();
              project24.name = "BlueBrainPlanet.com";
              project24.description = "Voluntarily assisted friend with clothing brand to make his concept for a website a functional Shopify reality from scratch.";
              project24.skills = ["Html/JS/CSS", "Shopify Liquid", "Photoshop", "Collaboration"];
              project24.keywords = ["html","js","javascript","css","shopify","clothing","brand","design","bluebrainplanet","blue"];
              project24.date = "2022/11/16";
              project24.icon = "/src/img/projects/shopify_min.webp";
              project24.redirect = "/projects/bluebrainplanet.html";
              project24.previewmedia = "/src/img/projects/bluebrainplanet/Home.png";
              projectDatabase.push(project24);
  
              let project25 = new Object();
              project25.name = "YouTube Analysis Script";
              project25.description = "Get some statistics on YouTube watch behavior. Utilizes a localhosted .html file, Google Takeout, and API calls.";
              project25.skills = ["Html/JS/CSS", "Google Takeout", "YouTube API", "Basic Analysis"];
              project25.keywords = ["html","js","javascript","css","youtube","google","takeout","analysis"];
              project25.date = "2022/12/31";
              project25.icon = "/src/img/projects/youtube_min.webp";
              project25.redirect = "/projects/youtubeanalyzer.html";
              project25.previewmedia = "/src/img/projects/youtubeanalyzer/2.png";
              projectDatabase.push(project25);

              let project26 = new Object();
              project26.name = "Portfolio Site";
              project26.description = "Create a portfolio site to demonstrate my history, my personality, and the projects I've pursued in my past. Uses GitHub Actions/Pages, Node.js, React, and Vite.";
              project26.skills = ["Html/JS/CSS","Replit","Node.js","React","Vite","GitHub Actions","GitHub Pages"];
              project26.keywords = ["html","js","javascript","css","portfolio","replit", "node", "react", "vite", "projects", "passion", "education", "school", "degree"];
              project26.date = "2023/05/12";
              project26.icon = "/src/img/projects/web_min.webp";
              project26.redirect = "/projects/portfoliosite.html";
              project26.pinned = true;
              project26.previewmedia = "/src/img/projects/portfoliosite/Example.png";
              projectDatabase.push(project26);

              let project27 = new Object();
              project27.name = "Portfolio Mimicry Pt. 1";
              project27.description = "My portfolio site feels a bit bland so I explored other exceptional portfolios, aiming to recreate their unique functionalities from scratch from a coding perspective.";
              project27.skills = ["Html/JS/CSS"];
              project27.keywords = ["html","js","javascript","css","portfolio","mimic", "recreate"];
              project27.date = "2023/05/22";
              project27.icon = "/src/img/projects/web_min.webp";
              project27.redirect = "/projects/portfoliomimicrypart1.html";
              project27.previewmedia = "https://imgur.com/mzB2vjD.gif";
              projectDatabase.push(project27);

              let project28 = new Object();
              project28.name = "GitHub Profiles";
              project28.description = "Info about my personal and gaming GitHub repos.";
              project28.skills = ["Git"];
              project28.keywords = ["repo", "source", "spigot"];
              project28.date = "2023/05/26";
              project28.icon = "/src/img/projects/github_min.webp";
              project28.redirect = "/projects/github.html";
              projectDatabase.push(project28);

              let project29 = new Object();
              project29.name = "Java Data Structures & Algorithms";
              project29.description = "Took a ~45 hour long (video lecture length) Java Data Structures and Algorithms masterclass to more formally dip my toes into topics I coincidentally have crossed time to time. Course covered: arrays, linked lists, stack, queues, recursion vs iteration, trees, heaps, tries, hashing, graphs, and sorting/searching algos for all the above. Full content list on project page. Hand programmed implementations for all the above.";
              project29.skills = ["Java, Data Structures, Search/Sort/Modify Algorithms"];
              project29.keywords = ["java", "data structure", "algorithm", "array","linked list", "big o", "stack", "queue", "recursion", "iteration", "binary tree", "binary search tree", "bst","avl","heap","trie","hash","sort","search","graph","bfs","dfs","dijkstra","bellman ford","floyd warshall","kruskal","prim","greedy","divide and conquer","dynamic programming","class","course","udemy"];
              project29.date = "2023/06/26";
              project29.icon = "/src/img/projects/java2_min.webp";
              project29.redirect = "/projects/datastructuresandalgorithms.html";
              project29.pinned = true;
              projectDatabase.push(project29);

              let project30a = new Object();
              project30a.name = "Dynamic GET TextToImage";
              project30a.description = "Developed service which dynamically generates a text-filled image for GitHub embeds based off GET request parameters. For some reason this doesn't already exist?";
              project30a.skills = ["JS, Node.js, Express (NPM), Sync-Fetch (NPM), Canvas (NPM), Replit"];
              project30a.keywords = ["js", "node", "node.js", "get", "texttoimage", "dynamic", "generate", "github", "express", "sync", "fetch", "canvas"];
              project30a.date = "2023/07/26";
              project30a.icon = "/src/img/projects/nodejs_min.webp";
              project30a.redirect = "/projects/dynamicgettexttoimage.html";
              project30a.previewmedia = "https://githubdynamicgettexttoimage.aaronskeels2.repl.co/generate-image?text=THIS%20IS%20DYNAMICALLY%20GENERATED:%20" + parseInt(Math.random()*100) +"!&width=800&height=100&fontsize=30";
              projectDatabase.push(project30a);

              let project30 = new Object();
              project30.name = "Nail String Art";
              project30.description = "Developed software that calculates how best to thread string between a circle of nails to recreate an input image. Then created an actual threaded piece in real life to see how it came out. Input: image, nail count, and compute space resolution. Output: simulated threading image and nail order to recreate image in real life.";
              project30.skills = ["Java, JS, Algorithm Weight Calibration, Image Processing"];
              project30.keywords = ["java", "js", "algorithm", "nail", "string", "art", "calibrate", "image processing"];
              project30.date = "2023/08/06";
              project30.icon = "/src/img/projects/java2_min.webp";
              project30.redirect = "/projects/nailstringart.html";
              project30.pinned = true;
              project30.previewmedia = "https://i.imgur.com/7pzatRv.png";
              projectDatabase.push(project30);

              let project31 = new Object();
              project31.name = "Half Tone";
              project31.description = "Developed halftone software overnight which incorporates bonus features like colorization and random tolerances for pattern position, size, and rotation.";
              project31.skills = ["Java, Image Processing"];
              project31.keywords = ["java", "js", "algorithm", "nail", "string", "art", "calibrate", "image processing"];
              project31.date = "2023/08/28";
              project31.icon = "/src/img/projects/java2_min.webp";
              project31.redirect = "/projects/halftone.html";
              project31.previewmedia = "https://i.imgur.com/k9Tn5P6.jpeg";
              projectDatabase.push(project31);

              let project32 = new Object();
              project32.name = "Leetcode Analysis";
              project32.description = "Excel spreadsheet showing the results of my (ongoing) independent pursuits off the top of my head towards Leetcode problems.";
              project32.skills = ["Java, Data Structures & Algorithms, Competitive Programming"];
              project32.keywords = ["java", "data", "structure", "algorithm", "competitive", "programming", "excel"];
              project32.date = "2023/08/28";
              project32.icon = "/src/img/projects/excel_min.webp";
              project32.redirect = "https://docs.google.com/spreadsheets/d/16KtrBOkrGPu5jQbJEf2QLSBkkt0DNeuQNb1xxzq1gjA/edit?usp=sharing";
              project32.previewmedia = "https://imgur.com/yHePAph.png";
              projectDatabase.push(project32);

              let project33 = new Object();
              project33.name = "Fourier Series Art";
              project33.description = "Recreate images using Fourier Series decomposition and chains of spinning circles.";
              project33.skills = ["Java, OpenCV, Fourier Analysis, Complex Numbers, Graphic Rendering"];
              project33.keywords = ["java", "image processing", "art", "fourier", "series", "complex number", "animation", "opencv", "contour", "graphic", "render", "mp4"];
              project33.date = "2023/09/18";
              project33.icon = "/src/img/projects/java2_min.webp";
              project33.redirect = "/projects/fourierseriesart.html";
              project33.previewmedia = "https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/FlyDCJets_CircleTrail.gif";
              projectDatabase.push(project33);

              let project34 = new Object();
              project34.name = "Plane Glide Contour";
              project34.description = "Mimic a commercial software which generates a fully simulated visual GPS contour indicating the safe glide range of an aircraft performing an emergency landing. Made in 3 days.";
              project34.skills = ["Java, Simulation, Graphic Rendering"];
              project34.keywords = ["java", "animation", "contour", "graphic"];
              project34.date = "2023/09/27";
              project34.icon = "/src/img/projects/java2_min.webp";
              project34.redirect = "/projects/planeglidecontour.html";
              project34.previewmedia = "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/PlaneGlideContour%20-%20Heightmap%20Considered.gif";
              projectDatabase.push(project34);

              let project35 = new Object();
              project35.name = "Java Knowledge Demos";
              project35.description = "Proof-of-competence and source of notes for myself regarding industry typical Java knowledge. Covers Java concepts, JDBC, JUnit, Maven, Spring, and SQL.";
              project35.skills = ["Java Concepts, HikariCP, JDBC, JUnit, Maven, Spring, SQL"];
              project35.keywords = ["java", "hikaricp", "jdbc", "junit", "maven", "spring", "mvc", "sql", "collections", "exception", "generics", "iostream", "multithread", "oop"];
              project35.date = "2024/01/6";
              project35.icon = "/src/img/projects/java2_min.webp";
              project35.redirect = "https://github.com/aaronskeelsofficial/JavaKnowledgeDemos";
              projectDatabase.push(project35);
            }
          }
        `}</script>
      </Helmet>
    </>
  )
};