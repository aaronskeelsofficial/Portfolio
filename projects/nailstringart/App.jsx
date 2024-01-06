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
  text: "Nail String Art",
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
  srcpc: "[\\\"https://i.imgur.com/7pzatRv.png\\\",\\\"https://i.imgur.com/wfWyFBr.png\\\",\\\"https://i.imgur.com/KC7QuHr.jpg\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/7pzatRv.png\\\",\\\"https://i.imgur.com/wfWyFBr.png\\\",\\\"https://i.imgur.com/KC7QuHr.jpg\\\"]"
}
const BlogVideoProps_Example = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/I-I0BOod0tg",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/I-I0BOod0tg"
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
  text: "A week and a half ago, I sat in my room and randomly the thought of nail string art popped into my head. If you're unaware or aren't sure what I mean, it's where nails are hammered into a board arranged in a circle shape and string is threaded through the nails to create pictures. I don't know why, but it just peaked my interest and I really wanted to make an art piece that way. I quickly remembered I am not artistically gifted unfortunately, and my dreams were shattered. While I'm not an artistic creative, I am a nerd however. I decided if *I* can't make the art myself, maybe I can make *my computer* make it for me and tell me the nail order. With absolutely no idea in mind as to how I would achieve these goals, I decided that I would 1. Create a program that \\\"makes string art\\\" for me (whatever that entails) 2. Not cheat and search for anybody else's approach online 3. Output a nail order and if the simulated image looks good enough, create the actually threaded image in real life.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_TechnicalWriteup = {
  id: "",
  text: "2. More Technical Writeup",
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
const BlogTextProps_TechnicalWriteup = {
  id: "",
  text: "This main post will simply show products surface level. For a more technical writeup on pseudocode functionality, iterations, and challenges overcame go <a href=\\\"/projects/nailstringart/technicalwriteup.html\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
const BlogHeaderProps_Process = {
  id: "",
  text: "3. Process",
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
const BlogTextProps_Process = {
  id: "",
  text: "The following are checkpoints along the progress (500 strings, 1000, 1500, 2000, 2500, 3000, 3500) using V1 of my program (I am saving V2 results for after so they are more shocking).",
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
const BlogImageProps_Process = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://i.imgur.com/LymOTa2.png\\\",\\\"https://i.imgur.com/Z4lNsCy.png\\\",\\\"https://i.imgur.com/8b7vxuv.png\\\",\\\"https://i.imgur.com/HqznAn7.png\\\",\\\"https://i.imgur.com/blCeEui.png\\\",\\\"https://i.imgur.com/ecRbZyI.png\\\",\\\"https://i.imgur.com/lFwpVx3.png\\\"]",
  //https://imgur.com/a/AQuN6m4
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/LymOTa2.png\\\",\\\"https://i.imgur.com/Z4lNsCy.png\\\",\\\"https://i.imgur.com/8b7vxuv.png\\\",\\\"https://i.imgur.com/HqznAn7.png\\\",\\\"https://i.imgur.com/blCeEui.png\\\",\\\"https://i.imgur.com/ecRbZyI.png\\\",\\\"https://i.imgur.com/lFwpVx3.png\\\"]"
}
const BlogHeaderProps_Results = {
  id: "",
  text: "4. Results",
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
const BlogTextProps_ResultsV1 = {
  id: "",
  text: "The following are the results of V1 of the program in JS.",
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
const BlogImageProps_ResultsV1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://i.imgur.com/Mq3T3Zl.png\\\",\\\"https://i.imgur.com/dLIAWL1.png\\\",\\\"https://i.imgur.com/kSzN1kW.png\\\",\\\"https://i.imgur.com/znjQTXb.png\\\",\\\"https://i.imgur.com/zPViZmu.png\\\",\\\"https://i.imgur.com/HJUBr5L.png\\\",\\\"https://i.imgur.com/p9W9pXc.png\\\",\\\"https://i.imgur.com/fED8hfO.png\\\",\\\"https://i.imgur.com/4oJhMwM.png\\\"]",
  //https://imgur.com/a/Aac0Qfk
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/Mq3T3Zl.png\\\",\\\"https://i.imgur.com/dLIAWL1.png\\\",\\\"https://i.imgur.com/kSzN1kW.png\\\",\\\"https://i.imgur.com/znjQTXb.png\\\",\\\"https://i.imgur.com/zPViZmu.png\\\",\\\"https://i.imgur.com/HJUBr5L.png\\\",\\\"https://i.imgur.com/p9W9pXc.png\\\",\\\"https://i.imgur.com/fED8hfO.png\\\",\\\"https://i.imgur.com/4oJhMwM.png\\\"]"
}
const BlogTextProps_ResultsV2 = {
  id: "",
  text: "The following are the results of V2 of the program in Java.",
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
const BlogImageProps_ResultsV2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://i.imgur.com/OsODYLV.png\\\",\\\"https://i.imgur.com/kIorb5Y.png\\\",\\\"https://i.imgur.com/9sc5crz.png\\\",\\\"https://i.imgur.com/7pzatRv.png\\\",\\\"https://i.imgur.com/WMg4UbJ.png\\\",\\\"https://i.imgur.com/krLrzi7.png\\\",\\\"https://i.imgur.com/pFrT9LD.png\\\",\\\"https://i.imgur.com/QA6Yq7q.png\\\",\\\"https://i.imgur.com/AtPdlMb.png\\\"]",
  //https://imgur.com/a/bXgfqks
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/OsODYLV.png\\\",\\\"https://i.imgur.com/kIorb5Y.png\\\",\\\"https://i.imgur.com/9sc5crz.png\\\",\\\"https://i.imgur.com/7pzatRv.png\\\",\\\"https://i.imgur.com/WMg4UbJ.png\\\",\\\"https://i.imgur.com/krLrzi7.png\\\",\\\"https://i.imgur.com/pFrT9LD.png\\\",\\\"https://i.imgur.com/QA6Yq7q.png\\\",\\\"https://i.imgur.com/AtPdlMb.png\\\"]"
}
const BlogTextProps_ResultsIRL = {
  id: "",
  text: "The following are the results of my IRL stringing.",
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
const BlogImageProps_ResultsIRL = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://i.imgur.com/VZ8Mg3t.jpg\\\",\\\"https://i.imgur.com/Gz3jtyI.jpg\\\",\\\"https://i.imgur.com/WbmrdzL.jpg\\\",\\\"https://i.imgur.com/MpneApp.jpg\\\",\\\"https://i.imgur.com/hqokOX4.jpg\\\",\\\"https://i.imgur.com/bvJzxKQ.jpg\\\",\\\"https://i.imgur.com/q88Yuyd.jpg\\\",\\\"https://i.imgur.com/eMqiFmh.jpg\\\",\\\"https://i.imgur.com/ypZErIG.jpg\\\"]",
  //https://imgur.com/a/bXgfqks
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/VZ8Mg3t.jpg\\\",\\\"https://i.imgur.com/Gz3jtyI.jpg\\\",\\\"https://i.imgur.com/WbmrdzL.jpg\\\",\\\"https://i.imgur.com/MpneApp.jpg\\\",\\\"https://i.imgur.com/hqokOX4.jpg\\\",\\\"https://i.imgur.com/bvJzxKQ.jpg\\\",\\\"https://i.imgur.com/q88Yuyd.jpg\\\",\\\"https://i.imgur.com/eMqiFmh.jpg\\\",\\\"https://i.imgur.com/ypZErIG.jpg\\\"]"
}
const BlogHeaderProps_Source = {
  id: "",
  text: "5. Source",
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
const BlogTextProps_Source = {
  id: "",
  text: "GitHub Repo: <a href=\\\"https://github.com/aaronskeelsofficial/NailStringArt\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogVideo {...BlogVideoProps_Example} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_TechnicalWriteup} />
      <BlogText {...BlogTextProps_TechnicalWriteup} />
      <BlogHeader {...BlogHeaderProps_Process} />
      <BlogText {...BlogTextProps_Process} />
      <BlogImage {...BlogImageProps_Process} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_ResultsV1} />
      <BlogImage {...BlogImageProps_ResultsV1} />
      <BlogText {...BlogTextProps_ResultsV2} />
      <BlogImage {...BlogImageProps_ResultsV2} />
      <BlogText {...BlogTextProps_ResultsIRL} />
      <BlogImage {...BlogImageProps_ResultsIRL} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
