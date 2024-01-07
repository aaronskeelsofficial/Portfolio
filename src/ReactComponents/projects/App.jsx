import NavbarPC from '../common/navbarpc'
import NavbarPhone from '../common/navbarphone'
import ScrollingBackdrop from '../common/scrollingbackdrop'
import ScrollableBackplate from '../common/scrollablebackplate'
import RectangularText from '../aboutme/rectangulartext'
import SearchBar from './searchbar'
import ProjectBrowser from './projectbrowser'
import Scrollbar from '../common/scrollbar'
import QueryURLHandler from './queryurlhandler'

const NavbarPCProps = {
  id: "",
  pages: [{ text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 2,
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
  enablephone: "false"
}
const NavbarPhoneProps = {
  id: "",
  pages: [{ text: "Home", href: "/?skipOverlay=true" },
  { text: "About Me", href: "/aboutme.html" },
  { text: "Projects", href: "/projects.html" },
  { text: "Contact", href: "/contact.html" }],
  activepage: 3,
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
  enablephone: "false",
  zindexphone: "-1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  widthphone: "100",
  heightphone: "100",
  xphone: "50",
  yphone: "50",
  srcphone: "/src/img/bg-blogwall.png"
}
const RectangularTextProps_Header = {
  id: "",
  parentid: "",
  text: "Note: I have done <span style=\\\"font-style: italic; color: rgb(115, 204, 168); font-family: inherit;\\\">countless</span> other projects, but these are the ones I still have leftover documentation/files for.",
  fontfamily: "'Josefin Sans', sans-serif",
  fontsize: "",
  fontweight: "",
  color: "rgb(115, 204, 168)",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "69",
  heightpc: "2.5",
  xpc: "50",
  ypc: "10",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "100",
  heightphone: "4",
  xphone: "50",
  yphone: "10"
}
const SearchBarProps = {
  id: "",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "50",
  heightpc: "4.5",
  xpc: "50",
  ypc: "17",
  //
  enablephone: "true",
  zindexphone: "1",
  anchorpointphone: "middlemiddle",
  sizingmodephone: "explicit",
  sizingunitphone: "viewport",
  widthphone: "95",
  heightphone: "4.5",
  xphone: "50",
  yphone: "17"
}
const ProjectBrowserProps = {
  id: "projectbrowser",
  //
  enablepc: "true",
  zindexpc: "1",
  anchorpointpc: "middlemiddle",
  sizingmodepc: "explicit",
  sizingunitpc: "viewport",
  widthpc: "65",
  heightpc: "75",
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
const ScrollbarProps = {
  id: "",
  targetid: "projectbrowser",
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
      <RectangularText {...RectangularTextProps_Header} />
      <SearchBar {...SearchBarProps} />
      <ProjectBrowser {...ProjectBrowserProps} />
      <Scrollbar {...ScrollbarProps} />
      <QueryURLHandler />
    </>
  )
}
