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
import BlogVideoGif from '../blogvideogif'
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
  text: "Knight Platformer",
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
  text: "I had recently seen Celeste blow into popularity and enjoyed the mechanics. I wanted to see how close I could get to making a platformer kinda like it. For this project I would have to get a bit more experience with Unity, and this would be my first introduction into animation sprites and logic. As such, I broke the project into two parts: logic and animation sprites.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Logic = {
  id: "",
  text: "2. Logic Sample",
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
const BlogTextProps_Logic = {
  id: "",
  text: "I started the project by first developing the game logic in Unity. I immediately ran into issues with Unity's 2d physics system. Every wall became made of super glue. Although the floors and roofs behaved properly, hit detection with walls was simply not behaving properly with vanilla physics so I ended up making my own physics system. This leads to the one issue you'll see in the video below. The block kinda jiggles in place as it likely is being teleported up too far upon intersecting the inside of colliders. It's probably not too hard to fix, but I for some reason didn't fix it back in 2019. The functionality I got done was stationary platforms, disappearing platforms, slippery platforms, sticky platforms, grabbable walls, one way walls, dashing with visual effects, coins for dash \\\"charges\\\" like in Celeste, checkpoints, respawning, and a springboard (why the springboard? No clue). I used basic colors for all of these as this was a simple level blocking stage. Actual graphics were intended to have been put in their place if I continued the project to later stages (I did not, whoops).",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Logic = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/KlEsiZcBMC4",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/KlEsiZcBMC4"
}
const BlogHeaderProps_Animation = {
  id: "",
  text: "3. Animation Sample",
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
const BlogTextProps_Animation = {
  id: "",
  text: "I tried getting into actually designing the pixel graphics myself but that came out so bad I don't even have copies of what I had made on my PC anymore. I ended up using a sprite pack I found for free online. Using the sprites provided, I learned about animation states (something which I would find out is the FOUNDATION of Unreal Engine some time into the future) and state-based programming. I learned about interpolation and some other goodies. I just made a quick lil demo using all the stuff I was learning.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Animation = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/E2PFZZWG4-g",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/E2PFZZWG4-g"
}
const BlogHeaderProps_Improvements = {
  id: "",
  text: "Improvements & Challenges",
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
  text: "The largest challenge of this project was programming the custom physics interactions I wanted in the 'Logic Sample'. Working through state changes, getting stuck in walls, falling through floors, and things of that nature definitely took the most time and concentrated effort to address. An improvement would be the most obvious step of combining the gameplay found in the 'Logic Sample' and animation/UX found in the 'Animation Sample'. Aside from that, I am happy with the outcome.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
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
      <BlogHeader {...BlogHeaderProps_Logic} />
      <BlogText {...BlogTextProps_Logic} />
      <BlogVideo {...BlogVideoProps_Logic} />
      <BlogHeader {...BlogHeaderProps_Animation} />
      <BlogText {...BlogTextProps_Animation} />
      <BlogVideo {...BlogVideoProps_Animation} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogFooterGap />
    </>
  )
}
