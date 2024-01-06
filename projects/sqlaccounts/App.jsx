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
  text: "SQL Login Service",
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
  srcpc: "/src/img/projects/sqlaccounts/demo.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/sqlaccounts/demo.png"
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
  text: "I had heard infamous claims that MMO backends were among the most insane of them all to make as a full dev team, let alone a solo dev. I thought, eh, how far can I get? This project landing page won't talk about that project in it's entirety. This will focus solely on the login server subsystem as that was the first step to making a functioning MMO.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Overview = {
  id: "",
  text: "2. Overview",
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
const BlogTextProps_Overview = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- SQLite flatfile backend.</p><p class=\\\"blogtextlist\\\">- Table contains UUID, Username, Password Hash, Email, Displayname, Salt, and Session UUID.</p><p class=\\\"blogtextlist2\\\">- UUID is the constant lookup key, permanently identifying each account made.</p><p class=\\\"blogtextlist2\\\">- Username is case-insensitive and stored all lowercase. This is only used for login purposes and can be changed.</p><p class=\\\"blogtextlist2\\\">- Password Hash has been salted with the Salt and hashed using SHA256. It can be changed.</p><p class=\\\"blogtextlist2\\\">- Email can also be changed. Some people link account identity to email forcing email to be static. I think that's a terrible decision.</p><p class=\\\"blogtextlist2\\\">- Displayname is stored case-sensitive. It's important to have an independent login and displayname because nobody wants their login username to be case-sensitive.</p><p class=\\\"blogtextlist2\\\">- Salt is a randomly generated string so database breaches have minimal risk as far as obviously targetable account breaches.</p><p class=\\\"blogtextlist2\\\">- Session UUID is exactly what you'd think it is. It shouldn't have to be said but: dynamically generated with every login.</p><p class=\\\"blogtextlist\\\">- I specifically wanted everything excluding UUID and Salt to be changeable because it aggravates me when websites lock off stuff.</p><p class=\\\"blogtextlist\\\">- Session is stored as expiring cookie client side (still needs proper server side implementation).</p>",
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
const BlogHeaderProps_Outsource = {
  id: "",
  text: "Why Not Outsource?",
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
const BlogTextProps_Outsource = {
  id: "",
  text: "I had, in previous projects, already interfaced with Google's credentials API. At the time, that was an unnecessarily complicated and horribly documented experience. Maybe it's improved since, but OAth2.0 and the way it requires you to use Google's developer console to request access to specific modules of API and then within those modules request specific permissions from a user oh gosh the PTSD. Nothing worked the first time. Most things didn't work the fifth time. Documentation didn't help any so forum hopping was my only savior and even then, I had to improvise and patch together responses. Point being, sure outsourcing login authentication saves the need for a database, likely improves security significantly, and ultimately is the more trustworthy direction. All that said though, I think there is value in having the option and knowledge to implement an independent login system so I chose to look into it.",
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
const BlogHeaderProps_Details = {
  id: "",
  text: "Noteworthy Details",
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
  text: "Originally the project used a MySQL database because that database was meant to house numerous datum about the MMO game, not merely login concerning data. Since stripping and transitioning it to a standalone demo though, there was no purpose to have an entirely separate server running to host the database. SQLite allows for flatfile databases so I decided to go with that. Most of the functionality and syntax is similar, aside from the methodologies to prevent SQL injection. I didn't display any client entered information so XSS protection wasn't taken into consideration for this project. Overall the database structure holds a UUID key, Username (case-insensitive and changeable b/c I think that's important actually as a user of things myself), Password Hash (SHA256), Email (changeable), Displayname (changeable), Salt (auto-generated), and Session.",
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
  text: "Improvements",
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
  text: "<p class=\\\"blogtextlist\\\">- Ugly UX. The demo page isn't the most appealing. That doesn't really matter to me as utilitarian demo page, but looking pretty never hurts.</p><br><p class=\\\"blogtextlist\\\">- Server-sided hashing. SHA256 hashing is currently being done on server-side. That is a nono. My initial thought process was \\\"Oh I don't want to have people send the hash because that could be intercepted by a MITM\\\" but realistically if they're going to get their hash stolen, they can equally get their password stolen. Whatever one client sends, regardless of hash or password, a MITM could just steal and send the same thing so it wouldn't make a difference and the cost of doing it my current wrong way is computation time.</p><br><p class=\\\"blogtextlist\\\">- Cleartext POST passwords. A fear I entirely looked over when deciding to send passwords rather than hashes is, currently users send cleartext passwords in POST requests. For https connections SSL security would make cleartext passwords negligibly problematic, but should I home host for testing or anything of that nature cleartext passwords are pretty bad.</p><br><p class=\\\"blogtextlist\\\">- Lacking session continuation. Another improvement is some sort of session handling implementation. Right now I have the demo generating a session stored server and client sided, but I don't do anything with it and have no form of session clearing server side. It simply lives on forever while the cookie client side expires. I can at least say the session UUID changes every login though and isn't constant. I've seen some implementations make static session UUID's across every login which feels CRAZY (looking at you Google with your constant session phishing attacks).</p>",
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
  text: "Source/Demo",
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
  text: "Demo: <a href=\\\"/projects/sqlaccounts/demo.html\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>SQL Relay Server: <a href=\\\"https://replit.com/@AaronSkeels1/portfolioservices\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_Overview} />
      <BlogText {...BlogTextProps_Overview} />
      <BlogHeader {...BlogHeaderProps_Outsource} />
      <BlogText {...BlogTextProps_Outsource} />
      <BlogHeader {...BlogHeaderProps_Details} />
      <BlogText {...BlogTextProps_Details} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
