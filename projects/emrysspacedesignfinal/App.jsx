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
  text: "Emrys Space Design Final",
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
  srcpc: "/src/img/projects/emrysspacedesignfinal/Example.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/emrysspacedesignfinal/Example.png"
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
  text: "For my last year attending Cal Poly Pomona, I took part in a senior design team called Emrys. Our job was to respond to an RFP with a fully fledged mission design proposal from the ground up. We chose to respond to the Caltech Space Challenge 2022's \\\"Titan Sample Return.\\\" The team voted and ultimately decided not to formally participate in the proposal competition, however a competitive nature was still abound as we were still to present our work to Caltech, Lockheed Martin, and JPL advisors in a final presentation and be judged comparatively to our peers' teams. My role was formally to be the sole electricity and thermal analysis engineer, however my responsibilities overflowed into assisting in most other teams' work. I also was the lead writeup editor as engineers notoriously can't write in technical capacities with any competence nor can they abide by formatting constants nor standards (slight hyperbole for humor but pretty serious too). There wasn't a technical ranking by the end of presentations to those in industry, but I would argue subjectively from the feedback retrieved that my team got 2nd place out of perhaps twelve teams. Other teams just had absolutely absurd ideas like \\\"retrieving the sample from the surface of Titan via a inflated balloon which will dock with the orbiter.\\\" So many problems. What are you filling the balloon with that will continue rising once the atmosphere is bleak and you're in outer space to *make it to the orbiter*, how are you filling this blimp sized balloon when your actual device is the size of a toaster, assuming you made it to the orbiter how are you accounting for the ~12,000 km/s velocity difference as your balloon rises straight up and the orbiter is a bullet orbiting Titan? The presentations frankly were riddled with absolutely ludicrous mission plans. I believe our team was shockingly competent and though surely there will be some flaw in our mission plan, it is no where near as blatant as the competition.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Details = {
  id: "",
  text: "2. Key Details",
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
const BlogTextProps_Details = {
  id: "",
  text: "Naturally, RFP's come about as it's simpler/cheaper/safer for companies to pay someone else to do the difficult work rather than invest in the liability ridden R&D themselves. So going into this RFP, there was clearly going to be a challenge. The challenge? Temperature and distance from the sun (which coincidentally were exactly the problems I was assigned to solve). Because the trip travels so far from the sun, the ambient temperature is cold and the electricity provided by the sun is mere crumbs. In short, the design ended up being fitted with a prototype 10 KW nuclear reactor called KRUSTY. KRUSTY outputs a *load* of electricity as well as heat, however the heat is radioactive and couldn't be taken advantage of for anything other than the fuel reserves. Those reserves were tucked right next to the electronics and sample, however, and both those are off limits from radioactivity. Therefore all heat was (saddeningly) simply vented to space and unused. The electricity output was instead ran through to patch heaters. There is significantly more information on the design and problems overcome/threats still to be faced within the document itself.",
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
const BlogHeaderProps_Download = {
  id: "",
  text: "3. Download",
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
const BlogTextProps_Download1 = {
  id: "",
  text: "Cal Tech RFP Prompt (Prompt being responded to): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/RFP - Titan Sample Return.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>PDR Presentation (Presentation given to industry): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/PDR.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Emrys Report (Actual report submitted): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/Final Report Version 2.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
const BlogImageProps_Download1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/emrysspacedesignfinal/Report Preview.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/emrysspacedesignfinal/Report Preview.png"
}
const BlogTextProps_Download2 = {
  id: "",
  text: "Entry Validation Outline (Back of napkin calcs for entry thermals/force load): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/Entry Validation Outline Work.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>General Vehicle Breakdown (Infographic to bring all members up to speed on design layout): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/General Vehicle Breakdown.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Power and Thermal (My power and thermal calculation workspace): <a href=\\\"/src/misc/projects/emrysspacedesignfinal/Power and Thermal Calcs.xlsx\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
const BlogImageProps_Download2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/emrysspacedesignfinal/Thermals.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/emrysspacedesignfinal/Thermals.png"
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
  text: "There were too many problems to list here. Refer to the presentation or report file.",
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
      <BlogHeader {...BlogHeaderProps_Details} />
      <BlogText {...BlogTextProps_Details} />
      <BlogHeader {...BlogHeaderProps_Download} />
      <BlogText {...BlogTextProps_Download1} />
      <BlogImage {...BlogImageProps_Download1} />
      <BlogText {...BlogTextProps_Download2} />
      <BlogImage {...BlogImageProps_Download2} />
      <BlogHeader {...BlogHeaderProps_Problems} />
      <BlogText {...BlogTextProps_Problems} />
      <BlogFooterGap />
    </>
  )
}
