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
  text: "Dynamic GET TextToImage",
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
  srcpc: "https://dynamicgettexttoimage.adaptable.app/generate-image?text=THIS IS DYNAMICALLY GENERATED: " + parseInt(Math.random()*100) + "!&width=800&height=100&fontsize=30",
  //
  enablephone: "true",
  srcphone: "https://dynamicgettexttoimage.adaptable.app/generate-image?text=THIS IS DYNAMICALLY GENERATED: " + parseInt(Math.random()*100) + "!&width=800&height=100&fontsize=30"
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
  text: "All programmers know that the more swag they have on their GitHub ReadMe, the better the coder they are. Well mine was empty and I decided to change that. I added all the usual 'badges of honor' like a boyscout/programmer hybrid, but realized that I really wanted to produce more personalized content than static font/image buttons. I wanted to display my total Spigot downloads for example. These downloads are a dynamically, constantly changing number though. First I programmed a backend which pulled from the Spigot API to compute my download count (Spigot does not offer this natively). GitHub only allows dynamic embeds of images, not text, so I now needed to turn this download count string into a picture somehow. My plan was to 'find some GET service online which allowed URL params to yield a dynamically generated image'. This felt like a very fundamental and expected service there would be endless options for, however, the only in existence seem to be services which dynamically RESOURCE actual images from google images based off search queries. They do not turn text into image form. I thought this was so absolutely ridiculous that I simply had to make my own TextToImage generator. How is it even possible nobody else has this publicly made and available?",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Functionality = {
  id: "",
  text: "2. Functionality",
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
const BlogTextProps_Functionality = {
  id: "",
  text: "I wasn't trying to make a crazily general function filled utility and moreso was just making something basic which fit the niche needs of myself at the moment. So it's not crazy capable, but it does what I needed it to do to advertise my Spigot downloads on my GitHub with a dynamic image embed and is open source so if people need more then they can just add it. To use the service, the base URL path is: 'https://dynamicgettexttoimage.adaptable.app/generate-image'. From here, the following parameters can be specified:<br><br><p class=\\\"blogtextlist\\\">- text: HTML encoded string representing the text to be displayed</p><br><p class=\\\"blogtextlist\\\">- spigotuserid: Niche functionality tied to showing a Spigot user's total downloads as text</p><br><p class=\\\"blogtextlist\\\">- width: width of the image in pixels</p><br><p class=\\\"blogtextlist\\\">- height: height of the image in pixels</p><br><p class=\\\"blogtextlist\\\">- fontsize: font size of the text in pixels</p>",
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
  text: "3. Source",
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
  text: "Replit Repo: <a href=\\\"https://replit.com/@AaronSkeels2/GithubDynamicGetTextToImage\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_Functionality} />
      <BlogText {...BlogTextProps_Functionality} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
