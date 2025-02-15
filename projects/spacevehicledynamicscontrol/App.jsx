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
  text: "Space Vehicle Dynamics and Control Final",
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
  srcpc: "/src/img/projects/spacevehicledynamicscontrol/Assignment Prompt.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/spacevehicledynamicscontrol/Assignment Prompt.png"
}
const BlogHeaderProps_Briefing = {
  id: "",
  text: "1. Briefing Info",
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
const BlogTextProps_Briefing = {
  id: "",
  text: "For my \\\"ARO 4090: Space Vehicle Dynamics and Control\\\" course students were given this project as our final. Students were instructed to form teams of three. I, along with the other star pupil in our graduating class, teamed up. We were originally going to only be a team of two, but took ultimately on a third who needed a team. The other star pupil and I ended up doing the totality of the work, however. We completed the project and though I don't recall our exact score, our submission would allegedly become the sample final the professor gave to his graders to compare against for the (at minimum) next year and a half. This project was notorious throughout the entire major as being the most difficult of them all, and admittedly it was quite difficult. It took weeks straight of MatLab/Simulink development and countless restarts from the ground up at points of complete brickwalling. Most students could only attempt the first few question fractions before getting landlocked and being unable to move further. My partner and I completed the entire assignment, however, and believe we got 100%.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_NDA = {
  id: "",
  text: "2. NDA Transparency",
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
const BlogTextProps_NDA = {
  id: "",
  text: "As with all finals, there was an agreement formed that the source material would not be shared. Though this blog post is a blatant voiding of that agreement, I believe it's important to acknowledge the purpose of the agreement in the first place and the relation I have with the professor. The purpose of the agreement is to prevent students from sharing the work with other students for the sole purpose of cheating. I don't talk to any of my peers from that class, nor would I ever direct them to this website if I did. The secrecy is not meant to uphold copyright/proprietary value in the content, as the problem set can be found amongst countless problems online, in textbooks, on chegg, and in misc blog posts. As for the relation with the professor, I believe we are close enough and he trusts my good will/intentions enough to permit this post. As an extended effort to upkeep the secrecy of the original content, however, I have obfuscated all specific numbers in the prompt, all axes values, and am only sharing incomplete snippets of the results with no scale frame of reference.",
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
const BlogHeaderProps_Results = {
  id: "",
  text: "3. Results",
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
const BlogTextProps_Results = {
  id: "",
  text: "Reiterating what was shared in the header briefing, we never got a direct number score back. This is due in part to two things. The first is as the assignment was an end-of-semester final, we had lost access to our digital classroom and were simply given an end-of-semester holistic grade for the class. On top of this, we didn't venture further to find out as curves would ultimately detach our final score from our raw score. Given no single other student could make it past question #1 and we finished the entirety of the assignment, and given we became the sample answer key for years to follow, there is negligible doubt that we headed the curve and would have ended up with 100%. For transparency sake, however, I don't know the true grade received.",
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
const BlogImageProps_Results1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/spacevehicledynamicscontrol/Results.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/spacevehicledynamicscontrol/Results.png"
}
const BlogImageProps_Results2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/spacevehicledynamicscontrol/1c Simulink.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/spacevehicledynamicscontrol/1c Simulink.png"
}
const BlogImageProps_Results3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/spacevehicledynamicscontrol/2b simulink.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/spacevehicledynamicscontrol/2b simulink.png"
}
const BlogHeaderProps_MatLab = {
  id: "",
  text: "4. MatLab Code",
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
const BlogTextProps_MatLab = {
  id: "",
  text: "I considered including some snippets of code here as proof of work, however it felt too along the lines of permitting cheating and invalidating the sanctity of the final. Hopefully the images serve as enough proof of work.",
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
const BlogHeaderProps_Improvements = {
  id: "",
  text: "5. Improvements",
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
const BlogTextProps_Improvements = {
  id: "",
  text: "Throughout the entirety of the project, only one single flaw reared its head time and time again. It was designing the Simulink model in an unoptimal pathing. There is something buggy/funky with Simulink (unsurprisingly because MatLab and Simulink are fundamentally flawed softwares in many ways from a programming standpoint) where pathing through their *included* blocks introduces severe stepping into the data. No matter what settings (which should never need be touched) were tinkered with, and no matter how many forums we searched through to finally find someone asking such a niche question, using certain built in blocks introduced stair-stepping. I'm not going to say which blocks elicit this bug as that voids the obfuscation a bit. The only fix was to rewire the entire loop in an absolutely nonsensical and unnecessary way to get proper data outputs. In some instances this stair-stepping was merely visual, but in others it significantly changed the output of further analyses. Overall, the project was a genuinely challenging yet feasible project for someone knowledgeable and dedicated enough to put in the work. Aside from unfairly needing to go above and beyond to knowledgeably sidestep the bugs of Simulink, I don't believe any improvements are in order.",
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
      <BlogHeader {...BlogHeaderProps_Briefing} />
      <BlogText {...BlogTextProps_Briefing} />
      <BlogHeader {...BlogHeaderProps_NDA} />
      <BlogText {...BlogTextProps_NDA} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_Results} />
      <BlogImage {...BlogImageProps_Results1} />
      <BlogImage {...BlogImageProps_Results2} />
      <BlogImage {...BlogImageProps_Results3} />
      <BlogHeader {...BlogHeaderProps_MatLab} />
      <BlogText {...BlogTextProps_MatLab} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogFooterGap />
    </>
  )
}
