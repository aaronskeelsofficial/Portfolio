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
  text: "Light Alert",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Title = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/lightalert/Example.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/lightalert/Example.png"
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
  text: "I purchased wireless LEDs and the native app that came with them functions like piping hot garbage. I was curious how difficult it would be to control them myself by reverse engineering sniffed packets from my phone to them (via the app) across my local network. I also wanted to be able to control them from my PC instead of being hardlocked to my phone. I'm sure there is a library somewhere of someone who already reverse engineered the protocol, or perhaps there's not and it uses a nonstandard custom Chinese protocol (I bought them quite cheaply from China which isn't known to adhere to standards). Either way, I simply wanted to reverse the protocol myself for fun. On top of that, I had friends that I talked to at the time who would text me and my phone wasn't giving me notifications. I decided this project was a good way to give them irrevocable access to my attention, no longer limited to the shotty functionality of my phone. I would host a web server (pictured above) with buttons which they could press on the site and which would have a direct effect on the LEDs in my room. Genius. So I did just that, and it worked!.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Features = {
  id: "",
  text: "2. Features",
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
const BlogTextProps_Features = {
  id: "",
  text: "- Web based frontend. No downloads, no waiting, no complications required to interface. My friends simply could go to my web server and push a button for my attention.",
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
const BlogHeaderProps_Source = {
  id: "",
  text: "3. Source/Demo",
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
const BlogTextProps_Source = {
  id: "",
  text: "GitHub Source (as of Aug 12, 2022): <a href=\\\"https://github.com/aaronskeelsofficial/LightAlert\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
const BlogHeaderProps_Problems = {
  id: "",
  text: "4. Problems",
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
const BlogTextProps_Problems = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Lackluster identification. I gave numerous friends access to this lighting system meant to pull my attention, however I implemented no way to know who was flashing the lights. I could log IPs, but that doesn't help much if they swap devices or their public IP simply changes.</p><br><p class=\\\"blogtextlist\\\">- Terrible protocol. Put generally, the protocol and hardware on the LEDs was so bad it was near nonfunctional. I always thought the shotty functionality was from bugs in the app, but actually deep diving into the packet interpretations/reception/acknowledgement of the lights I learned that the lights themselves were made terribly (unsurprising from the price and origin).</p><br><p class=\\\"blogtextlist\\\">- Arbitrary response packets. Some packets when received by the lights would fire off an acknowledgement/response packet back. Some don't. My attempt to bypass an entirely lacking response in any way was to add delay, however this didn't fully function as the delay necessary despite repeating the same operation over and over would vary anywhere from ~10ms to upwards of 3 seconds. I can't account for worst case every time when animating the lights because being restricted to 3 second pauses between animation states is useless. However if you spammed two packets before the LEDs were ready to receive again, it froze the whole system requiring a full power cycle.</p><br><p class=\\\"blogtextlist\\\">- Random downtime. I learned about the consequences of attempting to double stack packets before the LEDs were ready, however sometimes even sending a single packet would throw them into a state of confusion for around 15 seconds. This odd behavior couldn't be worked around either as it wasn't consistently a problem in any way. It was entirely random when and for how long the hiccups occurred which was horrendously annoying.</p>",
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
      <BlogImage {...BlogImageProps_Title} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_Features} />
      <BlogText {...BlogTextProps_Features} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogHeader {...BlogHeaderProps_Problems} />
      <BlogText {...BlogTextProps_Problems} />
      <BlogFooterGap />
    </>
  )
}
