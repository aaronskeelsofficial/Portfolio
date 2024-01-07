import NavbarPC from '../common/navbarpc'
import NavbarPhone from '../common/navbarphone'
import ScrollingBackdrop from '../common/scrollingbackdrop'
import ScrollableBackplate from '../common/scrollablebackplate'
import ContactBrowser from './contactbrowser'
import Scrollbar from '../common/scrollbar'

const NavbarPCProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 3,
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
  activepage: 4,
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
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "heightAutoWidth",
  widthphone: "50",
  heightphone: "50",
  xphone: "50",
  yphone: "50",
  srcphone: ""
}
const ContactBrowserProps = {
  id: "contactbrowser",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "65",
  heightpc: "80",
  xpc: "50",
  ypc: "53",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "parent",
  widthphone: "98",
  heightphone: "80",
  xphone: "50",
  yphone: "53"
}
const ScrollbarProps = {
  id: "",
  targetid: "contactbrowser",
  //
  enablepc: "true",
  zindexpc: "1",
  scrollstrengthpc: "50",
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
  pixelsperframephone: "5",
  widthmodephone: "px",
  widthvaluephone: "5",
  scrollbaroffsetphone: "0"
}

export default function App() {
  return (
    <>
      <NavbarPC {...NavbarPCProps} />
      <NavbarPhone {...NavbarPhoneProps} />
      <ScrollingBackdrop {...ScrollingBackdropProps_Stars} />
      <ScrollableBackplate {...ScrollableBackplateProps} />
      <ContactBrowser {...ContactBrowserProps} />
      <Scrollbar {...ScrollbarProps} />
    </>
  )
}
