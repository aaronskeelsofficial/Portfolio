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
  text: "Half Tone",
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
  srcpc: "[\\\"https://i.imgur.com/k9Tn5P6.jpeg\\\",\\\"https://i.imgur.com/XAslsSE.jpeg\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/k9Tn5P6.jpeg\\\",\\\"https://i.imgur.com/XAslsSE.jpeg\\\"]"
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
  text: "My friend sent me a <a href=\\\"https://www.instagram.com/p/CwapMK6gOUB/\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">video</a> someone on Instagram posted of their 'halftone software which is better than Photoshop'. I'm not very involved in the image processing or graphic design world so I didn't formally know exactly what the terminology meant, or what was happening behind the scenes. Intuitively, however, I felt like I could recreate what he was doing not only easily but *better* within a single night. So this is my attempt to do that. I had already just finished my 'nail string art' project so I could leverage the foundations of that for this. My version is better than the Instagram user's because mine allows for colorization, pattern size 'fuzz', pattern location 'fuzz', and pattern rotation randomization.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_ConfigurableVariables = {
  id: "",
  text: "2. Configurable Variables",
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
const BlogTextProps_ConfigurableVariables = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Pattern Size % Upper/Lower Bound (uses linear interpolation bc other interpolation functions looked terrible)</p><br><p class=\\\"blogtextlist\\\">- Pattern Size Randomized Tolerance [px]</p><br><p class=\\\"blogtextlist\\\">- Image Sample Grid X/Y Delta [px]</p><br><p class=\\\"blogtextlist\\\">- Pattern Location Randomized Tolerance [px]</p><br><p class=\\\"blogtextlist\\\">- Pattern Randomized Rotation</p><br><p class=\\\"blogtextlist\\\">- Colorize Pattern</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  textalign: "left",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Improvements = {
  id: "",
  text: "3. Improvements",
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
const BlogTextProps_Improvements = {
  id: "",
  text: "As far as what I've already done so far, there were practically no challenges involved that I had trouble overcoming. The ONLY thing that hung me up a bit was I accidentally introduced integers into a string of double calculations at one point so the sample points/resized patterns were bundled rather than a constantly smooth transition. Although there were no challenges I couldn't overcome, there is an idea for an improvement which could be made that I didn't think of at the time. For the colorized version, currently the pattern implementation concept is 'tint the pattern pixels the color of the sample pixel and make the pattern slightly opaque to blend overlaps'. I think opacity looks bad when it comes to patterns smaller than the space between samplings (no overlap leads to nearly invisible output images). In the future, an improvement to be made is implementing some manual color blending more advanced than the built in alphacomposites. I'd want the sample color to TINT the pattern image (so pattern details aren't lost to a solid color fill), and I'd want the output pattern to have full opacity (no transparency) so when no overlap occurs the picture doesn't feel empty. I think whatever blend I used to color the pattern I'd have to use when placing the pattern to the output image as well because if they overlap, I want all the colors to blend between patterns.",
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
const BlogHeaderProps_Source = {
  id: "",
  text: "4. Source",
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
  text: "GitHub Repo: <a href=\\\"https://github.com/aaronskeelsofficial/HalfTone\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_ConfigurableVariables} />
      <BlogText {...BlogTextProps_ConfigurableVariables} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
