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
  text: "YouTube Analysis Script",
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
  srcpc: "/src/img/projects/youtubeanalyzer/1.png",
  //
  enablephone: "true",
  srcphone: ""
}
const BlogImageProps_2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/youtubeanalyzer/2.png",
  //
  enablephone: "true",
  srcphone: ""
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
  text: "As a random off the cuff comment my friend said \\\"I wonder how many hours of scary stories I've listened to on YouTube.\\\" I didn't have a project at the time, and was curious about my own YouTube statistics because I'm an addict to an unhealthy degree. I also listen to music on the platform and was curious which song I had listened to the most. I decided to whip something together that was relatively easily made (didn't take longer than a day) and relatively easily accessible/usable (didn't require third party software installation to run). I knew one option was opting for some sort of OAuth approach but I despise that integration as I've dabbled with it in the past and it was an absolutely impossible pain attempting to run on a localhost, raw html file rather than a certified node/apache server. I also knew making all those API requests would probably end up costing money in some way. So my final decision was to do a one-time Google Takeout data request of all YouTube watch history. That saves half the API requests looking up the video ID's watched leaving only the half of looking up the video info from the ID's.",
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
  text: "- Fully detailed step-by-step instructional walkthrough of how to use application present in .zip file. Short-form instructions also present straight from .html file.<br>- General purpose as well as filterable results.<br>- Total Watchtime<br>- Most Watched Video<br>- Oldest Video On Record<br>- Random Video Watched<br>- Longest Title Video<br>- Longest Length Video",
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
  text: "Download: <a href=\\\"/src/zip/projects/youtubeanalyzer/AaronsYoutubeAnalyzer.zip\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
  text: "<p class=\\\"blogtextlist\\\">- Missing data. Google Takeout blatantly does not give all the data they have on file. If I go on YouTube, my watch history shows videos far exceeding what I retrieved from my Takeout request so I know they have it on file. They simply do not give it to me. Takeout also doesn't have an intentionally/consistently imposed data set limit as the number of videos included in my request was arbitary and my friends got different numbers. Google Support has had tickets about this issue spanning back over half a decade which despite being very straight forward of an issue, only got redirected and sidestepped responses at best from staff. They know this issue exists and they simply don't care to fix it.</p><br><p class=\\\"blogtextlist\\\">- API calls. Google only allows so many API calls for free. Their API backend also doesn't respond properly in too many ways to count for localhosted raw .html file executions. No JS interactions function. I turned to using CURL requests (still through JS but technically not using their JS library). To get information on the video ID's compiled from the Google data download, I'd run out of free API calls. So through reverse engineering by looking at the request structure of other means of call (not CURL), I was able to compile 50 videos into each request effectively making the amount of requests necessary 1/50th of what would be needed. For some reason they cap CURL request acknowledgement at 50 videos per request though.</p><br><p class=\\\"blogtextlist\\\">- Ease of use. This whole project was made for my friend who is not very embedded in tech. They don't have python installed so that was out. They would also probably feel suspicious executing any standalone program through Java or C. The only way to provide them comfort was to run something in browser I was sure, so I was limited to browser based (JS) functionality.</p>",
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
      <BlogImage {...BlogImageProps_1} />
      <BlogImage {...BlogImageProps_2} />
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
