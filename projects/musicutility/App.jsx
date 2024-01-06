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
  text: "Music Utility",
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
  srcpc: "/src/img/projects/musicutility/Example.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/musicutility/Example.png"
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
  text: "I, at the time, was studying music theory. I was dabbling by playing guitar and piano in person, but often found myself having to take a lot of mental energy to remember the different musical scale types. So I got to thinking, what if I had a utility where I put in the scale I wanted and the root note, and it simply spit the full scale of notes out for me? So that's exactly what I made as phase 1. I was using this utility but going back and forth between my keyboard (synthesizer) and my keyboard (pun intended hehe) simply not functional enough. What if I could just play a piano on my PC where I already had the notes in front of me? So that's exactly what I made as phase 2. I turned my computer keyboard into an input device which actually played the notes in line with the scale generated. Finally, the library I was using responded unreasonably laggily and sounded terrible with a pure sine wave just at the frequency of the note at hand. I put some research hours into finding a library which didn't have insane delay, sounded proper, and could easily be expanded from a single sample up through a lot of frequencies. I ended up working with ToneJS. This allowed me to expand the instrument choice beyond simply just a piano as well.",
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
  text: "<p class=\\\"blogtextlist\\\">- Input root note and scale type to choose a key</p><br><p class=\\\"blogtextlist\\\">- Visual response informing of generated key</p><br><p class=\\\"blogtextlist\\\">- 1-7 = +2 Octave Scale Notes from set key and root</p><br><p class=\\\"blogtextlist\\\">- q-u = +1 Octave Scale Notes from set key and root</p><br><p class=\\\"blogtextlist\\\">- a-j = Base Octave Scale Notes from set key and root</p><br><p class=\\\"blogtextlist\\\">- z-m = -1 Octave Scale Notes from set key and root</p><br><p class=\\\"blogtextlist\\\">- '[' and ']' shift octave from set root note</p><br><p class=\\\"blogtextlist\\\">- Choose which instrument played audio uses as sample</p><br><p class=\\\"blogtextlist\\\">- Log which produces key played from keyboard. New lines suggest time lapse, same line suggests quick succession",
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
  text: "Source: <a href=\\\"https://replit.com/@AaronSkeels1/MusicUtility-Instruments\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Demo: <a href=\\\"https://MusicUtility-Instruments.aaronskeels1.repl.co\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
  text: "<p class=\\\"blogtextlist\\\">- Input delay. Playing audio from a keyboard had unique issues, especially depending on the library being used to play the music. One issue which was consistent across libraries was a sense of input delay. I was never sure if it was from some rising lerp on the volume of the audio played which took too long, or if the library literally just took a nonsensical amount of time to initialize whatever it had to in order to play the audio.</p><br><p class=\\\"blogtextlist\\\">- Poor sound. I'm updating this blog post after the fact and don't remember the original library, but the original library I was using to produce audio sounded terrible. There were no overtones of any sort as it just played a pure sine wave and pianos do not sound like pure sine waves.</p>",
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
