import CustomScrollableBody from './customscrollablebody'
import ScrollableBackplate from '../common/scrollablebackplate'
import ScrollingBackdrop from '../common/scrollingbackdrop'
import CustomNavbarPC from './customnavbarpc'
import CustomNavbarPhone from './customnavbarphone'
import HeaderVideo from './headervideo'
import HeaderScroller from './headerscroller'
import ScrollablePage from './scrollablepage'
import RectangularText from './rectangulartext'
import Scrollbar from '../common/scrollbar'
import InfoCards from './infocards'
import ScrollablePageImage from './scrollablepageimage'
import ScrollableRectangularText from './scrollablerectangulartext'
import WhoAmI from './whoami'

const ScrollingBackdropProps_Stars = {
  id: "",
  src: "/src/img/bg-stars.png",
  naturalwidth: "1920",
  naturalheight: "1080",
  transition: "left linear 60s",
  timetoscroll: "60000",
  //
  enablepc: "true",
  zindexpc: "-2",
  //
  enablephone: "true",
  zindexphone: "-2",
}
const ScrollableBackplateProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "-1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  widthpc: "70",
  heightpc: "105",
  xpc: "50",
  ypc: "0",
  srcpc: "/src/img/bg-blogwall.png",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50",
  srcphone: ""
}
const CustomNavbarPCProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 1,
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "topleft",
  sizingmodepc: "explicit",
  widthpc: "100",
  heightpc: "6",
  xpc: "0",
  ypc: "100",
  //
  enablephone: "false",
}
const CustomNavbarPhoneProps = {
  id: "",
  pages: [{ text: "Home", href: "/?skipOverlay=true" },
  { text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 2,
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "100",
  anchorpointphone: "topleft",
  sizingmodephone: "explicit",
  widthphone: "100",
  heightphone: "6",
  xphone: "0",
  yphone: "0"
}
const HeaderVideoProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "5",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  widthpc: "100",
  heightpc: "100",
  xpc: "50",
  ypc: "50",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "topmiddle",
  sizingmodephone: "explicit",
  widthphone: "100",
  heightphone: "50",
  xphone: "50",
  yphone: "0"
}
const RectangularTextProps_Page0_TODOPhonePort = {
  id: "",
  parentid: "scrollablebody",
  text: "<span style=\\\"background-color: rgba(255, 227, 0, 0.21)\\\">I ported PC functionality to phone and am aware this looks bad. The obvious solution is to have a custom video for phone, but I've since lost the source files for the PC video. So as of now, fixing this poor appearance is on the #TODO list until I find inspiration.</span>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "topmiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "100",
  heightphone: "15",
  xphone: "50",
  yphone: "51",
}
const HeaderScrollerProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "6",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "5",
  heightpc: "50",
  xpc: "50",
  ypc: "75",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "bottommiddle",
  sizingmodephone: "widthAutoHeight",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "100"
}
const ScrollablePageProps = {
  enablepc: "true",
  zindexpc: "1",
  //
  enablephone: "true",
  zindexphone: "1",
}
const RectangularTextProps_Page1_SeeProjects = {
  id: "",
  parentid: "scrollablepage-1",
  text: "^<br style=\\\"display: block; margin-bottom: -8%; content: ''\\\"><span style='text-decoration: underline; white-space: nowrap; font-family: inherit'>Also See Projects</span>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "50",
  heightpc: "3",
  xpc: "50",
  ypc: "8",
  //
  enablephone: "false"
}
const RectangularTextProps_Page1_WhatHaveIDone = {
  id: "",
  parentid: "scrollablepage-1",
  text: "<span style='white-space: nowrap; font-family: inherit'>WHAT HAVE I DONE</span>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "40",
  heightpc: "10",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "93",
  heightphone: "10",
  xphone: "50",
  yphone: "16"
}
const ScrollbarProps = {
  id: "",
  targetid: "scrollablebody",
  //
  enablepc: "true",
  zindexpc: "1",
  scrollstrengthpc: "75",
  minimumanimframespc: "5",
  pixelsperframepc: "13",
  widthmodepc: "px",
  widthvaluepc: "10",
  scrollbaroffsetpc: "0",
  //
  enablephone: "true",
  zindexphone: "1",
  scrollstrengthphone: "50",
  minimumanimframesphone: "5",
  pixelsperframephone: "13",
  widthmodephone: "px",
  widthvaluephone: "5",
  scrollbaroffsetphone: "0"
}
const InfoCardsProps = {
  id: "",
  parentid: "scrollablepage-1",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  widthpc: "69",
  heightpc: "76",
  xpc: "50",
  ypc: "59",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50"
}
const RectangularTextProps_Degrees_Header = {
  id: "",
  parentid: "card0",
  text: "Degrees",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "24",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "10"
}
const RectangularTextProps_Degrees_Divider = {
  id: "",
  parentid: "card0",
  text: "<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "16"
}
const RectangularTextProps_Degrees_Text = {
  id: "",
  parentid: "card0",
  text: "BS Aerospace Engineering<br>Emphasis Astronautics<br>(Summa Cum Laude)<br><br>AS Pre-Engineering<br><br>AST Math<br><br>AST Physics<br><br>IGETC<br><br>CSUGE",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "20",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "78",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "78",
  xphone: "50",
  yphone: "60"
}
const RectangularTextProps_Edu_Header = {
  id: "",
  parentid: "card1",
  text: "Educational History",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "24",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "10"
}
const RectangularTextProps_Edu_Divider = {
  id: "",
  parentid: "card1",
  text: "<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "50",
  heightphone: "7",
  xphone: "50",
  yphone: "16"
}
const RectangularTextProps_Edu_Text = {
  id: "",
  parentid: "card1",
  text: `<span style='white-space: nowrap; font-family: inherit'>Cal Poly Pomona - Aerospace Engineering<br>Summa Cum Laude<br>3.82 GPA (2019 - 2022)<br style=\\\"margin-bottom:25px; content: ''; display: block;\\\">Citrus College - Pre-Engineering<br>President's List<br>3.8 GPA (2017 - 2018)<br style=\\\"margin-bottom:25px; content: ''; display: block;\\\">Claremont High School<br>4.3 GPA (2014 - 2017)<br></span>`,
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "20",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "78",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "78",
  xphone: "50",
  yphone: "60"
}
const RectangularTextProps_Work_Header = {
  id: "",
  parentid: "card2",
  text: "Work Experience",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "24",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "10"
}
const RectangularTextProps_Work_Divider = {
  id: "",
  parentid: "card2",
  text: "<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "16"
}
const RectangularTextProps_Work_Text = {
  id: "",
  parentid: "card2",
  text: `<span style='white-space: nowrap; font-family: inherit'>Freelance Software Developer (<a href='https://www.spigotmc.org/resources/authors/thetealviper.116592/' style='font-family: inherit'>Spigot</a>)<br>2012 - Present<br style=\\\"margin-bottom: 25px; content: ''; display: block;\\\">Tech & Printing (<a href='https://www.officedepot.com/' style='font-family: inherit'>Office Depot</a>)<br>2019 - 2020<br style=\\\"margin-bottom: 25px; content: ''; display: block;\\\">Fast Food (<a href='https://littlecaesars.com/' style='font-family: inherit'>Little Caesars</a>)<br>2018-2019<br style=\\\"margin-bottom: 25px; content: ''; display: block;\\\">Engineering Intern (<a href='https://www.the-pilot-group.com/' style='font-family: inherit'>The Pilot Group</a>)<br>2016-2016</span>`,
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "20",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "78",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "78",
  xphone: "50",
  yphone: "60"
}
const RectangularTextProps_Clubs_Header = {
  id: "",
  parentid: "card3",
  text: "Clubs / Teams / Orgs",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "24",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "10"
}
const RectangularTextProps_Clubs_Divider = {
  id: "",
  parentid: "card3",
  text: "<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "16"
}
const RectangularTextProps_Clubs_Text = {
  id: "",
  parentid: "card3",
  text: `<span style='white-space: nowrap; font-family: inherit'>Emrys - Space Vehicle Design (2021-2022)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">CubeSTEP Sat - Thermal Imaging (2019)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">IEEE-PES - Member (2019)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Youth Rocketry Outreach (2017-2018)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Rocketry and Robotics - Head (2017-2018)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Rocket Owls - Software Aid (2017-2018)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Phi Theta Kappa - VP of IT (2017-2018)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Honors Program - Member (2017-2018)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Comp Sci Club - Head (2017)<br style=\\\"margin-bottom: 3%; content: ''; display: block;\\\">Physics Club - Member (2017)</span>`,
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "17",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "78",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "78",
  xphone: "50",
  yphone: "60"
}
const RectangularTextProps_Awards_Header = {
  id: "",
  parentid: "card4",
  text: "Awards / Honors",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "24",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "10"
}
const RectangularTextProps_Awards_Divider = {
  id: "",
  parentid: "card4",
  text: "<hr style='border-style: solid none none none; border-color: #D3D3D3' width='220px' size='8' align='center'>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "7",
  xpc: "50",
  ypc: "16",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "7",
  xphone: "50",
  yphone: "16"
}
const RectangularTextProps_Awards_Text = {
  id: "",
  parentid: "card4",
  text: `<span style='white-space: nowrap; font-family: inherit'>All-California Academic Team<br>2019<br style=\\\"margin-bottom: 4%; content: ''; display: block;\\\">Phi Theta Kappa Inductance<br>2017<br style=\\\"margin-bottom: 4%; content: ''; display: block;\\\">AP Scholar with Distinction<br>2017<br style=\\\"margin-bottom: 4%; content: ''; display: block;\\\">University Club of Claremont Scholarship<br>2017<br style=\\\"margin-bottom: 4%; content: ''; display: block;\\\">Most Inspirational (CHS)<br>2016</span>`,
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "19",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "100",
  heightpc: "78",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "78",
  xphone: "50",
  yphone: "60"
}
const ScrollablePageImageProps_Div1 = {
  id: "",
  parentid: "scrollablepage-2",
  loadtype: "after",
  loadpagenum: "1",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "topmiddle",
  sizingmodepc: "widthAutoHeight",
  sizingunitpc: "parent",
  widthpc: "70",
  heightpc: "50",
  xpc: "50",
  ypc: "0",
  srcpc: "/src/img/bg-rocketdivider.png",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "topmiddle",
  sizingmodephone: "widthAutoHeight",
  sizingunitphone: "parent",
  widthphone: "100",
  heightphone: "50",
  xphone: "50",
  yphone: "5",
  srcphone: "/src/img/bg-rocketdivider.png",
}
const ScrollableRectangularTextProps_Page2_WhoAmI = {
  id: "",
  parentid: "scrollablepage-2",
  loadtype: "before",
  loadpagenum: "2",
  text: "<span style='white-space: nowrap; font-family: inherit'>WHO AM I</span>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "40",
  heightpc: "10",
  xpc: "50",
  ypc: "20",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "100",
  heightphone: "10",
  xphone: "50",
  yphone: "20"
}
const WhoamiProps = {
  id: "",
  parentid: "scrollablepage-2",
  loadtype: "before",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "69",
  heightpc: "70",
  xpc: "50",
  ypc: "60",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "100",
  heightphone: "75",
  xphone: "50",
  yphone: "60"
}
const RectangularTextProps_LeftContent_Title = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Formal",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "95",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "40",
  heightpc: "15",
  xpc: "25",
  ypc: "12",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "40",
  heightphone: "15",
  xphone: "25",
  yphone: "12"
}
const RectangularTextProps_LeftContent_HardSkills = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Hard Skills",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "63",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "25",
  heightpc: "10",
  xpc: "16.5",
  ypc: "30",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "25",
  heightphone: "10",
  xphone: "16.5",
  yphone: "30"
}
const RectangularTextProps_LeftContent_HardSkills2 = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Calculus | Differentials | Linear Algebra<br>4.7/5 | 4.3/5 | 4.6/5<br><br>Physics E&M | Thermo | Nuclear<br>4.4/5 | 4.4/5 | 4/5<br><br>Technical Writing<br>4/5<br><br>Java | C++ | JS | MatLab<br>4.2/5 | 4/5 | 4/5 | 3.8/5<br><br>Solidworks<br>3.7/5<br><br>Photoshop<br>3.6/5",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "21",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "30",
  heightpc: "60",
  xpc: "16.5",
  ypc: "67.5",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "30",
  heightphone: "60",
  xphone: "16.5",
  yphone: "67.5"
}
const RectangularTextProps_LeftContent_SoftSkills = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Soft Skills",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "63",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "25",
  heightpc: "10",
  xpc: "50",
  ypc: "30",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "25",
  heightphone: "10",
  xphone: "50",
  yphone: "30"
}
const RectangularTextProps_LeftContent_SoftSkills2 = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Independent Learning<br>4.8/5<br><br>Creative Problem Solving<br>4.5/5<br><br>Curiosity<br>4/5<br><br>Ambition<br>4/5<br><br>Capable During Friction<br>4.7/5",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "27",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "30",
  heightpc: "60",
  xpc: "50",
  ypc: "67.5",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "30",
  heightphone: "60",
  xphone: "50",
  yphone: "67.5"
}
const RectangularTextProps_LeftContent_Biases = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Biases",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "63",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "25",
  heightpc: "10",
  xpc: "83.5",
  ypc: "30",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "25",
  heightphone: "10",
  xphone: "83.5",
  yphone: "30"
}
const RectangularTextProps_LeftContent_Biases2 = {
  id: "",
  parentid: "whoami-leftcontent",
  text: "Functional > Aesthetic<br><br>Hacky > \\\"Not Possible\\\"<br><br>Obsession > Sporadic Effort<br><br>Innovative Curiosity > Tradition<br><br>Competence > Effort<br><span style=\\\"opacity: 0\\\"></span>",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(127, 127, 127)",
  rszestimatedfontsize: "33",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "30",
  heightpc: "60",
  xpc: "83.5",
  ypc: "67.5",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "30",
  heightphone: "60",
  xphone: "83.5",
  yphone: "67.5"
}
const RectangularTextProps_RightContent_Title = {
  id: "",
  parentid: "whoami-rightcontent",
  text: "Informal",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "95",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "40",
  heightpc: "15",
  xpc: "75",
  ypc: "12",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "40",
  heightphone: "15",
  xphone: "75",
  yphone: "12"
}
const RectangularTextProps_RightContent_Paragraph = {
  id: "",
  parentid: "whoami-rightcontent",
  text: "Hi. My name is Aaron :) I believe I, among others, would describe myself as funny, intelligent, kind hearted, effortful, and extremely competent. My hobbies are currently playing video games, making music, working out, watching YouTube/Netflix, and working on passion projects. My projects typically include programming in some capacity, though not always. I just like to *do things* to test my abilities, or perhaps develop them if I have none. Programming is often just a useful multitool to achieve many things, and happens to be the medium through which I direct my efforts. I've taken a few formal jabs at learning whether from collegiate classes or online classes, though most of my ability was developed independently. I'd say my largest weakness in programming is not particularly knowing impeccable detail about any one language, though I'd also claim that's a direct trade-off to it also leading to my greatest strength: \\\"Just figuring anything out\\\". Do I remember the syntax to every language and inner workings of Java's garbage collecter or random minute bugs which pop up sporadically in Javascript with photographic memory as I rapidly hot-swap between them project to project? Absolutely not, but in my opinion that keeps me flexible and proves my ability to gather information swiftly and proficiently when necessary. If a problem arises, I fix it. I believe innovation contrained to perfection in the form of 100% optimization and only utilizing systems for which one is knowledgeable front to back is paradoxical as those constraints prevent innovation from occurring. Moving past programming in particular, I'd say I'm more of an introvert by preference but effortfully a social butterfly should a situation demand that energy. If this paragraph comes off as slightly awkward, that should be seen as a testament to one of my greatest career related pitfalls: I am simply terrible at selling myself. I don't like it from a comfort standpoint, I don't like it from a moral standpoint, and I don't like feeling pressure to lie to appear better than competition. I simply like knowing that I'm better and showing it objectively with actions rather than convincing others of it with words. In a similar vein, I'd imagine I'm bad at interviews where the interviewer and the interviewee both are aware the experience is primarily a game where \\\"What is your greatest weakness\\\" ABSOLUTELY does not mean you respond with your greatest weakness. I prefer transparency, frankness, and above all raw/actual competence. I will gladly own up to what I don't know while having unwavering confidence in my ability to learn. Ultimately, at the end of the day I just aim to live a happy life having made others around me happy as well. My motivation for doing cool things is merely for the fact that they're cool. My passion is pure.",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "",
  rszestimatedfontsize: "21",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "parent",
  widthpc: "95",
  heightpc: "70",
  xpc: "50",
  ypc: "59",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "95",
  heightphone: "70",
  xphone: "50",
  yphone: "59"
}

export default function App() {
  return (
    <>
      <CustomScrollableBody />
      <ScrollableBackplate {...ScrollableBackplateProps} />
      <ScrollingBackdrop {...ScrollingBackdropProps_Stars} />
      <CustomNavbarPC {...CustomNavbarPCProps} />
      <CustomNavbarPhone {...CustomNavbarPhoneProps} />
      <HeaderVideo {...HeaderVideoProps} />
      <RectangularText {...RectangularTextProps_Page0_TODOPhonePort} />
      <HeaderScroller {...HeaderScrollerProps} />
      <ScrollablePage {...ScrollablePageProps} />
      <ScrollablePage {...ScrollablePageProps} />
      <RectangularText {...RectangularTextProps_Page1_SeeProjects} />
      <RectangularText {...RectangularTextProps_Page1_WhatHaveIDone} />
      <Scrollbar {...ScrollbarProps} />
      <InfoCards {...InfoCardsProps} />
      <RectangularText {...RectangularTextProps_Degrees_Header} />
      <RectangularText {...RectangularTextProps_Degrees_Divider} />
      <RectangularText {...RectangularTextProps_Degrees_Text} />
      <RectangularText {...RectangularTextProps_Edu_Header} />
      <RectangularText {...RectangularTextProps_Edu_Divider} />
      <RectangularText {...RectangularTextProps_Edu_Text} />
      <RectangularText {...RectangularTextProps_Work_Header} />
      <RectangularText {...RectangularTextProps_Work_Divider} />
      <RectangularText {...RectangularTextProps_Work_Text} />
      <RectangularText {...RectangularTextProps_Clubs_Header} />
      <RectangularText {...RectangularTextProps_Clubs_Divider} />
      <RectangularText {...RectangularTextProps_Clubs_Text} />
      <RectangularText {...RectangularTextProps_Awards_Header} />
      <RectangularText {...RectangularTextProps_Awards_Divider} />
      <RectangularText {...RectangularTextProps_Awards_Text} />
      <ScrollablePage {...ScrollablePageProps} />
      <ScrollablePageImage {...ScrollablePageImageProps_Div1} />
      <ScrollableRectangularText {...ScrollableRectangularTextProps_Page2_WhoAmI} />
      <WhoAmI {...WhoamiProps} />
      <RectangularText {...RectangularTextProps_LeftContent_Title} />
      <RectangularText {...RectangularTextProps_LeftContent_HardSkills} />
      <RectangularText {...RectangularTextProps_LeftContent_HardSkills2} />
      <RectangularText {...RectangularTextProps_LeftContent_SoftSkills} />
      <RectangularText {...RectangularTextProps_LeftContent_SoftSkills2} />
      <RectangularText {...RectangularTextProps_LeftContent_Biases} />
      <RectangularText {...RectangularTextProps_LeftContent_Biases2} />
      <RectangularText {...RectangularTextProps_RightContent_Title} />
      <RectangularText {...RectangularTextProps_RightContent_Paragraph} />
    </>
  )
}
