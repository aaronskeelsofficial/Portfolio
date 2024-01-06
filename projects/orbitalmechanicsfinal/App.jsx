import NavbarPC from '/src/ReactComponents/common/navbarpc'
import NavbarPhone from '/src/ReactComponents/common/navbarphone'
import ScrollingBackdrop from '/src/ReactComponents/common/scrollingbackdrop'
import ScrollableBackplate from '/src/ReactComponents/common/scrollablebackplate'
import ScrollableBody from '/src/ReactComponents/common/scrollablebody'
import ScrollablePage from '/src/ReactComponents/aboutme/scrollablepage'
import Scrollbar from '/src/ReactComponents/common/scrollbar'
import BlogHeaderGap from '../blogheadergap'
import BlogHeader from '../blogheader'
import BlogText from '../blogtext'
import BlogVideo from '../blogvideo'
import BlogFooterGap from '../blogfootergap'

const NavbarPCProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: -1,
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
const NavbarPhoneProps = {
  id: "",
  pages: [{ text: "Home", href: "/?skipOverlay=true" },
  { text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: -1,
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
  zindexphone: "-1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  widthphone: "95",
  heightphone: "105",
  xphone: "50",
  yphone: "0",
  srcphone: "/src/img/bg-blogwall.png"
}
const ScrollablePageProps_0 = {
  enablepc: "true",
  zindexpc: "1",
  //
  enablephone: "true",
  zindexphone: "1",
}
const ScrollbarProps = {
  id: "",
  targetid: "scrollablebody",
  //
  enablepc: "true",
  zindexpc: "1",
  scrollstrengthpc: "100",
  minimumanimframespc: "4",
  pixelsperframepc: "20",
  widthmodepc: "px",
  widthvaluepc: "10",
  scrollbaroffsetpc: "0",
  //
  enablephone: "true",
  zindexphone: "1",
  scrollstrengthphone: "50",
  minimumanimframesphone: "5",
  pixelsperframephone: "5",
  widthmodephone: "px",
  widthvaluephone: "5",
  scrollbaroffsetphone: "0"
}
const BlogHeaderProps_Title = {
  id: "",
  text: "Orbital Mechanics Final",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Purpose = {
  id: "",
  text: "1. Purpose",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
}
const BlogTextProps_Purpose = {
  id: "",
  text: "For my orbital mechanics final, I was tasked to lead a team. We were to develop a round trip mission statement of a rocket traveling from Earth to Ceres and back to Earth. Considerations were made for efficacy of fuel type, dry/wet mass, impulsive/low thrust, and date of departures. The mission was ultimately split into multiple stages. For my contributions to the project, I used a software called FreeFlyer. FreeFlyer is an orbital mechanics IDE. You'll notice in stage 4 that I programmed my own animation/interpolation system into the software. It currently has no animation functionality and is intended to be used with static camera reference frames. It uses a language similar to C, however, so modifying variables with script during mission simulation runtime is possible. Taking advantage of that, I created an animated camera perspective.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Stage1 = {
  id: "",
  text: "Stage 1",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
}
const BlogTextProps_Stage1 = {
  id: "",
  text: "Stage 1 consisted of the rocket's departure from the surface of Earth and exit of Earth's SOI.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Stage1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/OLHFDwd9nnY",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/OLHFDwd9nnY"
}
const BlogHeaderProps_Stage2 = {
  id: "",
  text: "Stage 2",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
}
const BlogTextProps_Stage2 = {
  id: "",
  text: "Stage 2 consisted of the rocket's interplanetary Hohmann Transfer between Earth and Ceres.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Stage2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/UrLQl1MS8Yk",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/UrLQl1MS8Yk"
}
const BlogHeaderProps_Stage3 = {
  id: "",
  text: "Stage 3",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
}
const BlogTextProps_Stage3 = {
  id: "",
  text: "Stage 3 consisted of the rocket's arrival to Ceres' SOI and parking orbit capture.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Stage3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/_-cZTqXqFTQ",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/_-cZTqXqFTQ"
}
const BlogHeaderProps_Stage4 = {
  id: "",
  text: "Stage 4",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: "nowrap"
}
const BlogTextProps_Stage4 = {
  id: "",
  text: "Stage 4 consisted of the lander's separation from the rocket. It then \\\"collected a sample\\\" before waiting for the right time and departing, rendezvousing with the rocket. This is also the stage where I decided to implement animated camera motion into FreeFlyer because the static reference frames were very unaesthetic.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Stage4 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/wlmyzSHiqMI",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/wlmyzSHiqMI"
}
const BlogTextProps_Footer = {
  id: "",
  text: "There was a powerpoint, live presentation, and other stages involved in the totality of the project. They aren't present here, though, as THESE clips were solely MY material contribution to the group.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}

export default function App() {
  return (
    <>
      <NavbarPC {...NavbarPCProps} />
      <NavbarPhone {...NavbarPhoneProps} />
      <ScrollingBackdrop {...ScrollingBackdropProps_Stars} />
      <ScrollableBackplate {...ScrollableBackplateProps} />
      <ScrollableBody />
      <ScrollablePage {...ScrollablePageProps_0} />
      <Scrollbar {...ScrollbarProps} />
      <BlogHeaderGap />
      <BlogHeader {...BlogHeaderProps_Title} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_Stage1} />
      <BlogText {...BlogTextProps_Stage1} />
      <BlogVideo {...BlogVideoProps_Stage1} />
      <BlogHeader {...BlogHeaderProps_Stage2} />
      <BlogText {...BlogTextProps_Stage2} />
      <BlogVideo {...BlogVideoProps_Stage2} />
      <BlogHeader {...BlogHeaderProps_Stage3} />
      <BlogText {...BlogTextProps_Stage3} />
      <BlogVideo {...BlogVideoProps_Stage3} />
      <BlogHeader {...BlogHeaderProps_Stage4} />
      <BlogText {...BlogTextProps_Stage4} />
      <BlogVideo {...BlogVideoProps_Stage4} />
      <BlogText {...BlogTextProps_Footer} />
      <BlogFooterGap />
    </>
  )
}
