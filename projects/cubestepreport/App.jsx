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
  text: "CubeSTEP Report",
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
  whitespacephone: ""
}
const BlogTextProps_Purpose = {
  id: "",
  text: "I was a member of an extracurricular team at Cal Poly Pomona called CubeSTEP. We were hired by JPL to build the surrounding 6U cubesat to house their proprietary, NDA'd payload. Unlike all other subteams for the project, mine consisted of a single member: myself. I was singlehandedly to control all research, development, and testing of a thermal data acquisition system from the ground up for the satellite. My secondary duties were to lead and mentor a follow-up team to develop all logistical hardware backends as well as the flight software being executed. This report is solely regarding my work on the thermal data acquisition, however. It is essentially a tech deep dive comparing whether thermocouples or thermal imaging, both housed on a RaspberryPi running RaspbianOS and a custom fork of a few softwares where need be, would be a better fit for the mission at hand. NDA payloads have been redacted in PDF document as well as website body.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Download = {
  id: "",
  text: "Download",
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
const BlogTextProps_Download = {
  id: "",
  text: "Report Download: <a href=\\\"/src/misc/projects/cubestepreport/Critical Thinking Report Redacted - Aaron.pdf\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Explain = {
  id: "",
  text: "Plaintext",
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
const BlogTextProps_Explain = {
  id: "",
  text: "The following of this page will be the ugly, non-formatted plaintext version of this document for those too cautious to download the actual file.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P1 = {
  id: "",
  text: "1.0 Introduction",
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
const BlogHeaderProps_P11 = {
  id: "",
  text: "1.1 Purpose",
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
const BlogTextProps_P11 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">The aerospace industry has repeatedly and consistently sought methods to support ongoing, as well as future, missions at lower costs whilst also improving a wide breadth of technologies. That said, however, this prototypical development and maturation process is often costly even for downscaled spacecraft such as CubeSats. Such spacecraft strive to ultimately provide an allowance for industry and research communities alike to develop low-cost foundations to further innovate upon, yielding advancements in technology and space presence. The main barriers to achieving this goal are the complexities and long turnaround time intrinsically tied to building up the fundamentally low-level structures and operational backends which a CubeSat necessitates. In response to this our team, the CubeSat Technology Exploration Project (CubeSTEP), joined with NASA's Jet Propulsion Laboratory (JPL) and the US Air Force Research Laboratory (AFRL) in the development of a universal testbed CubeSat for technology development. With such a universal testbed the hurdle of low-level necessities which are costly in terms of both time and money are effectively bypassed, allowing countless future endeavors which previously would not have been possible.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P12 = {
  id: "",
  text: "1.2 Objective",
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
const BlogTextProps_P12 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">CubeSTEP's present objective hoping to satisfy the previously spoken of project purpose is to conduct a flight demonstration of a new JPL thermal technology while implementing additive manufacturing and topological optimization techniques. The usage of additive manufacturing and optimization software enables the team to customize the standard CubeSat structure as well as any sub-system component modules that are needed to support new technologies being tested onboard.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P13 = {
  id: "",
  text: "1.3 Scope of Work",
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
const BlogTextProps_P13 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">To achieve the objective spoken of in 1.2, the team must do two overarching tasks: design a full outer-atmosphere mission to prove flight capability (T1) and conduct thermal analysis of [REDACTED] (T2). Task T2 can further be broken down into several subtasks: downselect to and provide an adequate heat dissipation technique (T2.1), develop and prove testing/simulation environments prior to launch (T2.2), and synthesize a means to collect data providing valuable insight into dissipation effectiveness (T2.3). CubeSTEP was split into subteams, each with their own tasking to focus on and goals to achieve. Of the previously mentioned tasking, I was a member of the software team and held responsible for fulfilling task T2.3. As such, the scope of all work completed by me will predominantly be bounded to the confines of said task, except in few instances where cross-disciplinary information is necessary. Closing the frame of consideration in to that of the software team, task T2.3 is broken into a few central lines questions: what will the brains of the DAC system be (Q1) will it have its own controller separate from C&DH (Q1.1) and what controller will we use if so (Q1.2), what sensors will be utilized to collect the best thermal data (Q2), and finally via what means will the collected data be sent down to groundstations (Q3) what data rates/compression will be used (Q3.1) and what software will be used to communicate information between subsystems (Q3.2).</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P2 = {
  id: "",
  text: "2.0 Literature",
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
const BlogHeaderProps_P21 = {
  id: "",
  text: "2.1 Other Teammate Perspectives",
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
const BlogTextProps_P21 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">The position from the team in response to questions Q1-Q3 was quite unanimous. It should be noted those with opinions developed them primarily through anecdotal experience rather than in-depth research and investment (as such was not a duty of their subteam). The overwhelming response to Q1.1 and Q1.2 were the team will use the same controller for both C&DH and DAC and that we would use either the Raspberry Pi 4 or Arduino to do so. Q2 was a bit more split with some advocating for solely thermal imaging, and others disputing that thermocouples would be more advantageous. Members outside of the software subteam had no opinion on Q3, Q3.1, nor Q3.2 as they were simply not educated on the topic.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P22 = {
  id: "",
  text: "2.2 My Perspective",
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
const BlogTextProps_P22 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">Despite its location prior to section 2.3 of the report, it should be noted that section 2.2 was developed in tandem with it. In many ways testing knowledge present in section 3.0 (Results and Discussion) guided my opinion, however for a more holistic picture, proof of concepts and flight-validations from external projects spoken of in section 2.3 were also amalgamated into a conclusive opinion. For Q1.1 I believe that a hybrid C&DH/DAC system is the best case, as an SBC can easily multitask both of those functions and it saves from numerous otherwise necessary inter-subsystem comms links. The less inter-subsystem and (relatively) exposed wires the better for data retention and corruption prevention. For Q1.2, I believe the Raspberry Pi architecture is the way to go. Arduino is a step towards the utility we'd like to achieve for DAC, although severely lacking in flight software capabilities. Ultimately any of the Raspberry Pi models or even boards similar from third party vendors provide the functionality needed, however due to proof-of-flight and an easier development environment (direct keyboard/mouse input monitor output) the Raspberry Pi 4 specifically was chosen. Post development and most testing, just prior to launch, I suggest a different and smaller model be swapped to. Likely a DIY raspberry compute unit. As for Q2, I believe with the goal being to develop a comprehensive 3d map of thermals as well as locations of hot and coldspots that a thermal camera would provide immense value. My strongest recommendation would be to include thermocouples as well as a thermal imaging camera. Thermocouples would cover more than the slightly cropped (according to calculations) image the thermal camera would capture, however the fidelity jumps exponentially for regions the camera module can see. Thermocouples would necessitate substantially less data and less software development in general which is why other teammates would opt for this approach, however I disagree with such sole usage. In response to Q3.1 I would support the usage of maximum png compression for the camera module and a delta tolerance band detection for the thermocouples due to the results from section 3.0.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P23 = {
  id: "",
  text: "2.3 Other Professional Perspectives",
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
const BlogTextProps_P23 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">There are countless opinions to outsource, however only the most important leading to decision directions on the project will be touched on. Answering Q1.2 are the ESA's CryptIC, ESA's/ISA's The European Astro Pi Challenge, and Surrey Satellite Technology Ltd's Demonstration of Technology DoT-1 satellite missions (Cryptography, Astro, Dot-1). All these missions proved flight capability for the Raspberry Pi 4. They also answered Q2 by all using thermal cameras though their tasking was slightly different, so applicability is shaky</p><p><br></p><p style=\\\"text-indent: 20px; font-family: inherit\\\">Unlike Q1-Q2, Q3 can't be answered via previous missions but rather academic and personal studies. Minimal report space and greater significance existing for imaging considered, I will be speaking on thermal camera compression techniques and not thermocouples. At face value, there are three imaging formats which dominate the industry: BMP aka bitmap, PNG aka portable network graphics, and JPEG aka joint photographic experts group. All have unique pros and cons. As will be demonstrated in section 3.0, there is a wide range of uses for both. Best stated by Paula Aguilera in her ECE 533 Project Report, 'I have been working with very different types of images: true color, greyscale, scanned documents, and high resolution photographs... There are some formats that match some images better than others depending [on] what you are looking [to] obtain' (Aguilera). Given the unescapable context-dependent nature of image formats, to answer Q3 anecdotal testing using the system we'd have, and taking pictures of different scenarios which might be encountered, was the next step to answer the final question.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P3 = {
  id: "",
  text: "3.0 Results and Discussion",
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
const BlogHeaderProps_P31 = {
  id: "",
  text: "3.1 Data",
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
const BlogTextProps_P31 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">(Data can be found as images on page 5 of the document download and summarized at the bottom of this page.)</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P32 = {
  id: "",
  text: "3.2 Analysis of Data",
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
const BlogTextProps_P32 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">As can be seen via the data provided, the camera FOV is not wide enough to cover the entire interior of the CubeSat which doesn't void utility, but also isn't optimal. Another point of note is that due to the expected uniformity of temperatures the camera expects to see, JPEG compression reduces data sizes to nearly negligible amounts, however visually destroys any fidelity gain over thermocouples. JPEG appears to be suitable with no compression if we only wanted hot and coldspots, however we want a full high fidelity thermal map so PNG should be utilized at the cost of 27% more data.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_P4 = {
  id: "",
  text: "4.0 Summary",
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
const BlogTextProps_P4 = {
  id: "",
  text: "<p style=\\\"text-indent: 20px; font-family: inherit\\\">In conclusion, though the CubeSTEP project necessitates decision-making in many facets, with regards solely to software I suggest we use a Raspberry Pi 4 equipped with thermal imaging and thermocouples, running Raspbian executing a custom BrightAscension Flight Software fork, and recording data via a custom GroupMeets Thermal Imaging Interface fork. Data will be compressed via PNG standards and delta tolerance band detection.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Data = {
  id: "",
  text: "Data Pictures",
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
const BlogImageProps_Data = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/cubestepreport/Data.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/cubestepreport/Data.png"
}
const BlogHeaderProps_Ref = {
  id: "",
  text: "References",
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
const BlogTextProps_Ref = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">Aguilera, Paula. \\\"Comparison of different image compression formats.\\\" Wisconsin College of Engineering, ECE 533 (2006).</p><p><br></p><p class=\\\"blogtextlist\\\">Astro Pi, https://astro-pi.org/.</p><p><br></p><p class=\\\"blogtextlist\\\">\\\'Cryptography Ice Cube Experiment.\\\' ESA, 31 July 2019, http://www.esa.int/ESA_Multimedia/Images/2019/07/Cryptography_ICE_Cube_experiment.</p><p><br></p><p class=\\\"blogtextlist\\\">\\\'Dot-1: Launched 2019.\\\' SSTL, https://www.sstl.co.uk/space-portfolio/launched-missions/2010-2019/dot-1-launched-2019.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  textalign: "left",
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
      <BlogHeader {...BlogHeaderProps_Download} />
      <BlogText {...BlogTextProps_Download} />
      <BlogHeader {...BlogHeaderProps_Explain} />
      <BlogText {...BlogTextProps_Explain} />
      <BlogHeader {...BlogHeaderProps_P1} />
      <BlogHeader {...BlogHeaderProps_P11} />
      <BlogText {...BlogTextProps_P11} />
      <BlogHeader {...BlogHeaderProps_P12} />
      <BlogText {...BlogTextProps_P12} />
      <BlogHeader {...BlogHeaderProps_P13} />
      <BlogText {...BlogTextProps_P13} />
      <BlogHeader {...BlogHeaderProps_P2} />
      <BlogHeader {...BlogHeaderProps_P21} />
      <BlogText {...BlogTextProps_P21} />
      <BlogHeader {...BlogHeaderProps_P22} />
      <BlogText {...BlogTextProps_P22} />
      <BlogHeader {...BlogHeaderProps_P23} />
      <BlogText {...BlogTextProps_P23} />
      <BlogHeader {...BlogHeaderProps_P3} />
      <BlogHeader {...BlogHeaderProps_P31} />
      <BlogText {...BlogTextProps_P31} />
      <BlogHeader {...BlogHeaderProps_P32} />
      <BlogText {...BlogTextProps_P32} />
      <BlogHeader {...BlogHeaderProps_P4} />
      <BlogText {...BlogTextProps_P4} />
      <BlogHeader {...BlogHeaderProps_Data} />
      <BlogImage {...BlogImageProps_Data} />
      <BlogHeader {...BlogHeaderProps_Ref} />
      <BlogText {...BlogTextProps_Ref} />
      <BlogFooterGap />
    </>
  )
}
