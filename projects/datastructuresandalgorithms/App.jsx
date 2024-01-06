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
import BlogDriveEmbed from '../blogdriveembed'

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
  text: "Data Structures & Algorithms",
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
  whitespacephone: ""
}
const BlogTextProps_Purpose = {
  id: "",
  text: "Largely teaching myself how to program in primarily non-academic settings, I have learned a lot in terms of commonly found 'templates of thought', general direction, language norms, syntactical instinct, and an overall sense of 'ability to make stuff *work*' (not necessarily perfectly). Aspiring to enter a professional career, however, I feel data structures and algorithms are a lynchpin topic which MUST be learned about and taken seriously. Not only will the knowledge REALISTICALLY come up in work at some point without doubt, but it will come up in technical interviews (warranted/effective or not). I've never had a scope of work which required optimizations the same way a corporate project might and as such, I've never taken the time to properly ingest this information under the understanding 'it would probably come intuitively if the time ever came'. Well, the time has come, and so I studied it. As presumed, it came very naturally and intuitively for about 95% of the material covered. I acknowledge what I learned didn't fully encompass every niche maximizing optimization to standard algorithms one can make, nor did it cover every data structure nor algorithm in existence, but I believe it was an important and very useful stepping stone for real life (actual work) and interviews (fake act untethered meaningfully from real world performance).",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Material = {
  id: "",
  text: "2. Material Covered",
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
const BlogTextProps_Material = {
  id: "",
  text: "The comprehensive/full material covered in the course is the following: array, array list, singly linked list, circular singly linked list, doubly linked list, circular doubly linked list, big o, stack, rotary queue (I made this name up for the most fundamental queue idea), linear queue, circular queue (GENIUS implementation), recursion vs iteration, binary tree & traversal methods, binary search tree, AVL Tree, max/min heap, trie, hashing, sorting/searching algos, graph, breadth/depth first search, Dijkstra/Bellman Ford, Floyd Warshall, Kruskal/Prim, and greedy vs divide and conquer vs dynamic programming.",
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
  whitespacephone: ""
}
const BlogTextProps_Results = {
  id: "",
  text: "So, I studied data structures and algorithms. What does 'studying' entail? How do I prove that? Where do I go from here? As far as what my 'studies' entail, what I mean when I say that is I watched 45 hours worth of lecture, I took notes of paraphrased explanations on the side, and I *wrote* code (NO COPY/PASTE) relating to every single topic covered. A majority of that code was done off the top of my head without 'copying' the course so that I could mentally fully understand, though I did reference the course code after to see if I did anything unoptimally and fixed my approach if that was the case. I found this 'attempting independently and then referencing course material to correct any wrong direction' to be extremely effective in understanding on an intuitive and complete level. These studies led to immediately actionable influence over my workflow and work in general. I feel much better equipped and deliberately knowledgeable on a topic I previously only had general gists about. As far as proving my teachings, I suppose under a time constraint I may think poorly and reflect my learnings in bad light in interviews. In hopes of proving the content covered, my comprehension, and my ability to put it in action, I will be providing embeds of my work along with a link to the full source folder of all my work on Google Drive. I have proven to myself the info has IMMEDIATELY made its mark and had impact/was useable by doing the Neetcode Leetcode roadmap problems and sometimes performing in the top 96% first try off the top of my head. As far as where I go from here, I suppose I practice more of the Neetcode Leetcode roadmap problems here and there, complete an informational/aesthetic/OCR functional resume and cover letter, and then apply like a mad man.",
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
const BlogHeaderProps_SummaryDoc = {
  id: "",
  text: "4. Summary Doc",
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
const BlogTextProps_SummaryDoc = {
  id: "",
  text: "Below will be an embed of the document I used to summarize the content learned in a compact enough way that it's actually memorizable for me (it's foolish to try to remember EVERY detail of EVERYTHING). Important sections in the document as a headnote reference are: general sections on the material, 'Things I Could Learn/Learn Better In The Future' where I discuss things I could learn better from the course and expand to in the future beyond the course, & 'Questions/Ideas Building Off Material' where I kind of log through my thought process as I come to terms with course content, prove it wrong, or have my own independent interesting thoughts building off of it.<br><span style='font-size: 70%'>(I know the embed is disgusting. I have tried EVERYTHING in my power, but due to CORS I can't access the CSS directly and Google offers no parameters that make it not look terrible. I'm SORRY. I had to FIGHT to make it centered.)</span>",
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
const BlogDriveEmbedProps_SummaryDoc = {
  id: "summarydocembed",
  src: "https://docs.google.com/document/d/e/2PACX-1vR8iepCE_guReyiRoHkNEnqdmFPnsQIggYmBJx6DEX6WRBxHV72T030X7AjfUrTdVGchApZJcx3Cp0u/pub",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_CourseErrors = {
  id: "",
  text: "5. Course Errors",
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
const BlogTextProps_CourseErrors = {
  id: "",
  text: "Below will be an embed of the document I used to summarize *some* of the course's MANY errors. I try to learn 'to teach', not because I actually intend on teaching but I believe the ability to teach is the only standard for which true comprehension is reached. In my pursuit of learning to that level, I realized this course made many errors. Maybe 50% were relatively minor, but some were so crucially and factually wrong regarding the Java language or techniques used that the instructor should feel embarrassed not correcting the course material (I reached out regarding some issues, never got a response, and the course has been released for years so it's clear the instructor has no intention of correcting their mistakes they just posted it as a one and done income stream).<br><span style='font-size: 70%'>(I know the embed is disgusting. I have tried EVERYTHING in my power, but due to CORS I can't access the CSS directly and Google offers no parameters that make it not look terrible. I'm SORRY. I had to FIGHT to make it centered.)</span>",
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
const BlogDriveEmbedProps_CourseErrors = {
  id: "summarydocembed",
  src: "https://docs.google.com/document/d/e/2PACX-1vQscj1_JVSC2ngaJCwUJsaDmiDCkp_HbiqQM-6AMaQNgFj8ZUNLR8PfX1g-UjPoojEpUExVxjzBqhsU/pub",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Source = {
  id: "",
  text: "6. Source",
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
  text: "Link To Google Drive Containing All Work: <a href=\\\"https://drive.google.com/drive/folders/1PQWopTzb68rilT2rVDTYNGMcf0ns8a8y?usp=sharing\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Link To Replit Where Code Was Done: <a href=\\\"https://replit.com/@AaronSkeels1/Data-Structures-And-Algorithms-Course-1\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Link To GitHub Where Repo Lives: <a href=\\\"https://github.com/aaronskeelsofficial/Data-Structures-And-Algorithms-Course-1\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_Material} />
      <BlogText {...BlogTextProps_Material} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_Results} />
      <BlogHeader {...BlogHeaderProps_SummaryDoc} />
      <BlogText {...BlogTextProps_SummaryDoc} />
      <BlogDriveEmbed {...BlogDriveEmbedProps_SummaryDoc} />
      <BlogHeader {...BlogHeaderProps_CourseErrors} />
      <BlogText {...BlogTextProps_CourseErrors} />
      <BlogDriveEmbed {...BlogDriveEmbedProps_CourseErrors} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
