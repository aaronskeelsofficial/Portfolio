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
  text: "Fall Guys Clone",
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
  text: "Purpose",
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
  text: "Out of boredom I decided to dedicate 3 days max to developing a Fall Guys clone just to see how far I could get. This includes modeling, rigging, animations, material textures, level design, and all underlying game logic from scratch.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Day1 = {
  id: "",
  text: "Day 1",
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
const BlogTextProps_Day11 = {
  id: "",
  text: "Day 1 was spent actually modeling the character. I'm not the most experienced with Blender nor modeling but decided to try my hand. This was my first attempt at modeling the bean.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Day11 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/fallguysclone/v1.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/fallguysclone/v1.png"
}
const BlogTextProps_Day12 = {
  id: "",
  text: "This result was a terrible start. Are you seeing the shape of this monstrosity. Such came attempt 2. Attempt 2 came out better with arms and a better shape. I colored it to get a feel of it in game.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Day12 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"/src/img/projects/fallguysclone/v2presub.png\\\",\\\"/src/img/projects/fallguysclone/v2postsub.png\\\",\\\"/src/img/projects/fallguysclone/v2final.png\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"/src/img/projects/fallguysclone/v2presub.png\\\",\\\"/src/img/projects/fallguysclone/v2postsub.png\\\",\\\"/src/img/projects/fallguysclone/v2final.png\\\"]"
}
const BlogTextProps_Day13 = {
  id: "",
  text: "Ultimately, I just didn't FEEL like it looked correct. I ended up running out of time and outsourcing to the internet for a model instead for sake of the 3-day project's timeline.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Day13 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/fallguysclone/v3.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/fallguysclone/v3.png"
}
const BlogHeaderProps_Day2 = {
  id: "",
  text: "Day 2",
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
const BlogTextProps_Day21 = {
  id: "",
  text: "Day 2 was dedicated to rigging and animating. Rigging was easy enough since it was from scratch, so I could make the bone structure that Unreal Engine likes.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Day21 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/fallguysclone/rig.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/fallguysclone/rig.png"
}
const BlogVideoGifProps_Day21 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/vid/projects/fallguysclone/wavingfallguy.mp4",
  //
  enablephone: "true",
  srcphone: "/src/vid/projects/fallguysclone/wavingfallguy.mp4"
}
const BlogTextProps_Day22 = {
  id: "",
  text: "Next up was animation. I animated a quick idle, walking, dive, and getup animation. The dive and getup animation can't be displayed because they use Unreal Engine rigging code to function and aren't hardcoded. This is because they lead into the animation from whatever state the rig is currently in (ragdolled). If you hardcoded the animation it wouldn't appear fluid from every possible starting state.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoGifProps_Day22 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"/src/vid/projects/fallguysclone/walk.mp4\\\",\\\"/src/vid/projects/fallguysclone/idle.mp4\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"/src/vid/projects/fallguysclone/walk.mp4\\\",\\\"/src/vid/projects/fallguysclone/idle.mp4\\\"]"
}
const BlogHeaderProps_Day3 = {
  id: "",
  text: "Day 3",
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
const BlogTextProps_Day3 = {
  id: "",
  text: "Although I had technically already started working on in-engine logic to get the character animated and moving, day 3 was intended to be solely focused on game logic. I made two of the maps from the original game. One where there are two hammers which spin around a podium at different speeds and one where the players have to find out which of the tiles on the level are solid and which aren't even though they all look the same. This sounds bad, but somehow when I open this project now, there are two malfunctioning features. The dive doesn't appear to work at all anymore. Ragdolling doesn't work anymore (despite me having a functioning DYNAMIC ragdoll system). The spinning hammers no longer HIT the character away and throw them into the ragdoll state. I don't know what the heck I did when I last touched this but I swear I had it working at one point you gotta believe me you just gotta.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoGifProps_Day3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"/src/vid/projects/fallguysclone/level1.mp4\\\",\\\"/src/vid/projects/fallguysclone/level2.mp4\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"/src/vid/projects/fallguysclone/level1.mp4\\\",\\\"/src/vid/projects/fallguysclone/level2.mp4\\\"]"
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
      <BlogHeader {...BlogHeaderProps_Day1} />
      <BlogText {...BlogTextProps_Day11} />
      <BlogImage {...BlogImageProps_Day11} />
      <BlogText {...BlogTextProps_Day12} />
      <BlogImage {...BlogImageProps_Day12} />
      <BlogText {...BlogTextProps_Day13} />
      <BlogImage {...BlogImageProps_Day13} />
      <BlogHeader {...BlogHeaderProps_Day2} />
      <BlogText {...BlogTextProps_Day21} />
      <BlogImage {...BlogImageProps_Day21} />
      <BlogVideoGif {...BlogVideoGifProps_Day21} />
      <BlogText {...BlogTextProps_Day22} />
      <BlogVideoGif {...BlogVideoGifProps_Day22} />
      <BlogHeader {...BlogHeaderProps_Day3} />
      <BlogText {...BlogTextProps_Day3} />
      <BlogVideoGif {...BlogVideoGifProps_Day3} />
      <BlogFooterGap />
    </>
  )
}
