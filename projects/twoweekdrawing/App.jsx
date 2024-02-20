import NavbarPC from '/src/ReactComponents/common/navbarpc'
import NavbarPhone from '/src/ReactComponents/common/navbarphone'
import ScrollingBackdrop from '/src/ReactComponents/common/scrollingbackdrop'
import ScrollableBackplate from '/src/ReactComponents/common/scrollablebackplate'
import ScrollableBody from '/src/ReactComponents/common/scrollablebody'
import ScrollablePage from '/src/ReactComponents/aboutme/scrollablepage'
import Scrollbar from '/src/ReactComponents/common/scrollbar'
import BlogHeaderGap from '../blogheadergap'
import BlogHeader from '../blogheader'
import BlogImage from '../blogimage'
import BlogText from '../blogtext'
import BlogFooterGap from '../blogfootergap'
import BlogVideo from '../blogvideo'

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
  text: "2 Week Drawing Progress",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Example = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/5Hs4prg.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/5Hs4prg.png"
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
  whitespacephone: ""
}
const BlogTextProps_Purpose = {
  id: "",
  text: "My whole life, I have always been terrible at drawing. This 'terribleness' isn't something that I saw as an undefeatable, innate flaw. I've always known it was simply due to never learning the techniques and due to missing knowledge. I've never been good at art so I could never confirm, though my suspicion is that art is not a field gatekept by technical prowess or practiced skill. To me, art is gatekept by knowledge of approaches, tricks, and techniques. Having gone through my two week metamorphosis, I can confirm that this is the case. To all reading this, if you also believe that you are bad then simply look at my beginning sketches. I am confident any 'bad drawers' who coincidentally also have zero knowledge like I did would perform around the same. You can become better, you must simply learn the tricks which are danced around to keep the passion gatekept (at least in an aesthetic, skillful sense). But you can find them if you search hard enough. Also, all this is not to say that I believe I am a pro now by any means! I have so much to learn in countless verticals. Though what I have learned so far should prove that with concentrated direction and effort, there is a comprehensive path towards improvement via knowledge intake with minimal practice at all.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/uY8wRlK.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/uY8wRlK.png"
}
const BlogImageProps_2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/4Rquhnh.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/4Rquhnh.png"
}
const BlogImageProps_3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/lX6msow.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/lX6msow.png"
}
const BlogImageProps_4 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/YGtm5Y1.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/YGtm5Y1.png"
}
const BlogImageProps_5 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/DpXSmHH.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/DpXSmHH.png"
}
const BlogImageProps_6 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/0YKxiRG.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/0YKxiRG.png"
}
const BlogImageProps_7 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/HhSwbML.png",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/HhSwbML.png"
}
const BlogHeaderProps_RawPages = {
  id: "",
  text: "2. Raw Progress Pages",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
  whitespacephone: ""
}
const BlogTextProps_RawPages = {
  id: "",
  text: "A raw album of each full page unedited can be found here: <a href=\\\"https://imgur.com/a/2aIH8b2\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">https://imgur.com/a/2aIH8b2</a>",
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
      <BlogImage {...BlogImageProps_Example} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogImage {...BlogImageProps_1} />
      <BlogImage {...BlogImageProps_2} />
      <BlogImage {...BlogImageProps_3} />
      <BlogImage {...BlogImageProps_4} />
      <BlogImage {...BlogImageProps_5} />
      <BlogImage {...BlogImageProps_6} />
      <BlogImage {...BlogImageProps_7} />
      <BlogHeader {...BlogHeaderProps_RawPages} />
      <BlogText {...BlogTextProps_RawPages} />
      <BlogFooterGap />
    </>
  )
}
