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
  text: "Deadman's Switch",
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
  srcpc: "/src/img/projects/deadmansswitch/Example.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/deadmansswitch/Example.png"
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
  text: "I am big on not being lost to time. My existence in the physical is limited to my health and ultimately will end at some point. My existence in the digital, however, has the capacity to be carried on long after my life ends. I have a huge digital footprint. Snapchat has videos/pictures documenting my life, Google Photos has videos/pictures documenting my life, Google Drive has daily logs I've filled out since 16 years old, among all my other digital presence documenting my projects, current hobbies, friends, conversations, and basically entire past. So I made a deadman's switch, a \\\"trigger\\\" of sorts which goes off once I'm dead, to email/text out a message containing goodbyes and all my passwords and explanations of how to access all my digital life.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Methodology = {
  id: "",
  text: "2. Methodology",
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
const BlogTextProps_Methodology = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- The very first thing which enters the mind for the best way to handle such confidential information is to home host a server on my personal desktop. That simply won't work though because I power my PC off at night and when I'm not using it which is at MINIMUM 8 hours a day. I can't risk a third of my day not being covered that is insanity. So I was forced to host the server remotely. Costs would surely accrue with time so that was a concern. I researched ways to remotely host a node.js server 24/7 for free, and came across a sneaky methodology using Replit.com. They offer a 24/7 package for a charge, *however* their free package has a trick. If you have the free package and host a web server on it and ping the web server, it wakes the whole server instance up from hibernation. So the trick is to host a free Replit instance, host a web server, and constantly ping it with an uptime health checker like \\\"UptimeRobot\\\". Easy free 24/7 server.</p><br><p class=\\\"blogtextlist\\\">- The next hurdle was security. Replits instance source code is viewable by all unless you pay to make them private. I can't have the contact information of everyone I'm sending my message to, let alone the content of the message saved as cleartext. It contains information on how to access my entire life which believe it or not I don't want the whole world knowing. I learned that you can store \\\"secret\\\" system environment variables which don't autotransfer into forks of the Replit so went with that for contact info and the message to send.</p><br><p class=\\\"blogtextlist\\\">- So I have achieved a free live 24/7 web server which can confidentially save the info I need, but how do I actually handle 1. knowing if I'm dead and 2. firing off the messages. To handle if I know that I'm dead, I figured the most realistic automatic \\\"health check\\\" would be whether or not my PC has turned on. So on my PC I set the system scheduler to run a .bat file posting the web server with a secret key to prove I'm still alive every hour my PC is on. If the web server hasn't received my ping in 3 months straight, then it fires off the messages technically only through email (but you can send emails to mobile numbers if you know the carrier) using Zoho.</p><br><p class=\\\"blogtextlist\\\">- Now one more challenge stood in my way, troubleshooting to prevent an early firing. The spookiest prospect of them all. I can't explain the due diligence I used to stress test the system exactly because there was a lot and it's probably boring, but the safety features I can share is I set the system to fire three warning messages only to me at different partial time intervals basically saying \\\"Hey you haven't pinged on your PC is something wrong or are you dead?!?!\\\". My last failsafe was I left a hard copy hidden deeply on google docs among other hundreds of documents shared with a trusted friend. The chain is only as strong as the weakest link and I'd say Replit getting breached and my secure environment variables leaked and/or a malicious actor within the company are threat one (though it would be obvious if I was still alive and they used this to access my bank and other stuff because this is threat one), and my Google getting accessed and the bad actor somehow managing to go through those hundreds of files to coincidentally come across the hidden file is threat two. I suppose someone accessing my PC to get the key stored in the .bat and infinitely keeping my deadman's switch pinged is a threat but what do they get out of that?</p><br>",
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
const BlogHeaderProps_Tech = {
  id: "",
  text: "3. Tech Used",
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
const BlogTextProps_Tech = {
  id: "",
  text: "Replit: <a href=\\\"https://replit.com/@AaronSkeels1/DeadmansSwitch\\\" style=\\\"color: rgb(115,204,168)\\\">Repository</a> - Used to host free 24/7 web server. Listens to pings and redirects email API calls.<br>UptimeRobot: <a href=\\\"https://uptimerobot.com/\\\" style=\\\"color: rgb(115,204,168)\\\">Website</a> - Used to continuously ping Replit web socket to trick the free tier to stay live 24/7.<br>Zoho: <a href=\\\"https://www.zoho.com/\\\" style=\\\"color: rgb(115,204,168)\\\">Website</a> - Free email service provider granting access to *simple* API calls without horrendously tedious OAuth2.0 hurdles. They do have strong anti-spam features though which is annoying because what I'm doing flags as spam sometimes in testing despite not being spam.<br>Windows Task Scheduler: <a href=\\\"https://learn.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page\\\" style=\\\"color: rgb(115,204,168)\\\">Info</a> - Used to run post request with secret key in background every hour (to prove I'm alive).",
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
      <BlogHeader {...BlogHeaderProps_Methodology} />
      <BlogText {...BlogTextProps_Methodology} />
      <BlogHeader {...BlogHeaderProps_Tech} />
      <BlogText {...BlogTextProps_Tech} />
      <BlogFooterGap />
    </>
  )
}
