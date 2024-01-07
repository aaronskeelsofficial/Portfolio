import Navbar from '../common/navbarpc'
import NavbarPhone from '../common/navbarphone'
import BasicText from '../common/basictext'
import BasicImage from '../common/basicimage'
import ScrollingBackdrop from '../common/scrollingbackdrop'
import ScrollingGeneralBackdrop from '../common/scrollinggeneralbackdrop'
import BouncingButton from './bouncingbutton'
import GlobeInit from './globe/globeInit'
import SpinnableCoin from './spinnablecoin'
import Overlay from '../index/overlay'

const NavbarProps = {
  id: "",
  pages: [{ text: "About Me", href: "/Portfolio/aboutme.html" },
  { text: "Projects", href: "/Portfolio/projects.html" },
  { text: "Contact", href: "/Portfolio/contact.html" }],
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
const NavbarPhoneProps = {
  id: "",
  pages: [{ text: "Home", href: "/Portfolio/?skipOverlay=true" },
  { text: "About Me", href: "/Portfolio/aboutme.html" },
  { text: "Projects", href: "/Portfolio/projects.html" },
  { text: "Contact", href: "/Portfolio/contact.html" }],
  activepage: 1,
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
  zindexphone: "100",
  anchorpointphone: "topleft",
  sizingmodephone: "explicit",
  widthphone: "100",
  heightphone: "6",
  xphone: "0",
  yphone: "0"
}
const BasicTextProps_NamePC = {
  id: "",
  text: "Aaron Skeels",
  fontfamily: "",
  fontsize: "4vw",
  fontweight: "100",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "12",
  //
  enablephone: "false",
}
const BasicTextProps_NamePhone = {
  id: "",
  text: "Aaron Skeels",
  fontfamily: "",
  fontsize: "15vw",
  fontweight: "100",
  color: "",
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "widthAutoHeight",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "15"
}
const BasicTextProps_ProfessionPC = {
  id: "",
  text: "Aerospace Engineer - Software Developer",
  fontfamily: "",
  fontsize: "1.5vw",
  fontweight: "700",
  color: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xpc: "50",
  ypc: "20",
  //
  enablephone: "false",
}
const BasicTextProps_ProfessionPhone = {
  id: "",
  text: "Aerospace Engineering - Computer Science",
  fontfamily: "",
  fontsize: "4vw",
  fontweight: "700",
  color: "",
  whitespace: "nowrap",
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "widthAutoHeight",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "26.5"
}
const BasicImageProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "0",
  anchorpointpc: "topleft",
  sizingmodepc: "explicit",
  widthpc: "100",
  heightpc: "60",
  xpc: "0",
  ypc: "3",
  srcpc: "/Portfolio/src/img/bg-blueovalheader_min.webp",
  //
  enablephone: "false"
}
const ScrollingBackdropProps_Stars = {
  id: "",
  src: "/Portfolio/src/img/bg-stars.png",
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
const ScrollingGeneralBackdropProps = {
  id: "",
  src: "/Portfolio/src/img/bg-constellationscrop_min.webp",
  naturalwidth: "4089",
  naturalheight: "1080",
  transition: "left linear 30s",
  timetoscroll: "30000",
  //
  enablepc: "true",
  zindexpc: "-1",
  //
  enablephone: "true",
  zindexphone: "-1",
}
const BouncingButtonProps_AboutMePC = {
  id: "",
  text: "About Me",
  href: "/Portfolio/aboutme.html",
  fontfamily: "",
  fontsize: "4vw",
  fontweight: "100",
  color: "",
  transition: "left 3s linear, top 3s linear",
  timetoscroll: "3000",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xcenterpc: "20",
  xradiuspc: "3",
  ycenterpc: "70",
  yradiuspc: "5",
  //
  enablephone: "false"
}
const BouncingButtonProps_AboutMePhone = {
  id: "",
  text: "About Me",
  href: "/Portfolio/aboutme.html",
  fontfamily: "",
  fontsize: "10vw",
  fontweight: "100",
  color: "",
  transition: "left 3s linear, top 3s linear",
  timetoscroll: "3000",
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "widthAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xcenterphone: "50",
  xradiusphone: "10",
  ycenterphone: "70",
  yradiusphone: "2"
}
const BouncingButtonProps_ProjectsPC = {
  id: "",
  text: "Projects",
  href: "/Portfolio/projects.html",
  fontfamily: "",
  fontsize: "4vw",
  fontweight: "100",
  color: "",
  transition: "left 3s linear, top 3s linear",
  timetoscroll: "3000",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "widthAutoHeight",
  widthpc: "50",
  heightpc: "50",
  xcenterpc: "80",
  xradiuspc: "3",
  ycenterpc: "70",
  yradiuspc: "5",
  //
  enablephone: "false"
}
const BouncingButtonProps_ProjectsPhone = {
  id: "",
  text: "Projects",
  href: "/Portfolio/projects.html",
  fontfamily: "",
  fontsize: "10vw",
  fontweight: "100",
  color: "",
  transition: "left 3s linear, top 3s linear",
  timetoscroll: "3000",
  //
  enablepc: "false",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "WidthAutoHeight",
  widthphone: "50",
  heightphone: "50",
  xcenterphone: "50",
  xradiusphone: "10",
  ycenterphone: "90",
  yradiusphone: "2"
}
const SpinnableCoinProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "heightAutoWidth",
  widthpc: "10",
  heightpc: "25",
  xpc: "50",
  ypc: "40",
  srcpc: "/Portfolio/src/img/mecartoonifypin256.png",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "widthAutoHeight",
  widthphone: "55",
  heightphone: "50",
  xphone: "50",
  yphone: "45",
  srcphone: "/Portfolio/src/img/mecartoonifypin256.png",
}
const OverlayProps = {
  id: "overlay",
  //
  enablepc: "true",
  zindexpc: "1000",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  widthpc: "100",
  heightpc: "100",
  xpc: "50",
  ypc: "50",
  // srcpc: "",
  srcpc: "/Portfolio/src/img/bg-darkgeometry_min.webp",
  //
  enablephone: "true",
  zindexphone: "1000",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "100",
  xphone: "50",
  yphone: "50",
  srcphone: "/Portfolio/src/img/bg-darkgeometry_min.webp",
}

export default function App() {
  return (
    <>
      <Navbar {...NavbarProps} />
      <NavbarPhone {...NavbarPhoneProps} />
      <BasicText {...BasicTextProps_NamePC} />
      <BasicText {...BasicTextProps_NamePhone} />
      <BasicText {...BasicTextProps_ProfessionPC} />
      <BasicText {...BasicTextProps_ProfessionPhone} />
      <BasicImage {...BasicImageProps} />
      <ScrollingBackdrop {...ScrollingBackdropProps_Stars} />
      <ScrollingGeneralBackdrop {...ScrollingGeneralBackdropProps} />
      <BouncingButton {...BouncingButtonProps_AboutMePC} />
      <BouncingButton {...BouncingButtonProps_AboutMePhone} />
      <BouncingButton {...BouncingButtonProps_ProjectsPC} />
      <BouncingButton {...BouncingButtonProps_ProjectsPhone} />
      <GlobeInit />
      <SpinnableCoin {...SpinnableCoinProps} />
      <Overlay {...OverlayProps} />
    </>
  )
}
