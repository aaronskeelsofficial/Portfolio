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
  text: "Portfolio Site",
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
  srcpc: "[\\\"/src/img/projects/portfoliosite/Example.png\\\",\\\"/src/img/projects/portfoliosite/ExampleMobile.png\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"/src/img/projects/portfoliosite/Example.png\\\",\\\"/src/img/projects/portfoliosite/ExampleMobile.png\\\"]"
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
  text: "As my gap year post college graduation comes to an end, I realized I needed a way to communicate my personality, my passion, and my history with curiosity/problem solving/innovation. I would need to begin the construction of my career, and I felt a portfolio site is an effective way at doing just that. Unfortunately, most of my passion projects go severely undocumented because they are spur of the moment and often not fleshed out holistically enough to be proud of. I managed to scrounge up some crumbs of past endeavors and throw them together though, hoping to give a glimpse into who I am and what I do. All I knew going into the project were two things: 1. I wanted 24/7 free hosting and 2. I wanted to use React in some way because the modern web is obsessed with the buzzword.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Proud = {
  id: "",
  text: "2. Points of Pride",
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
const BlogTextProps_Proud = {
  id: "",
  text: "I will certainly not sit here and pretend this website goes without pitfalls, that would be silly of me. That said, however, there are some concentrated effort points of pride that I stand behind ecstatically!<br><br><p class=\\\"blogtextlist\\\">- Fully Open Source. Although there are many drawbacks to using Replit as a free host, one of the main motivators in doing so is the ability to have it simultaneously be host and <a href=\\\"https://replit.com/@AaronSkeels1/portfolio\\\">code repo</a>.</p><br><p class=\\\"blogtextlist\\\">- Fully Custom Componentization Scaffolding. Yes, I utilize React which is fundamentally a component handling factory. However, going beyond React I created another handcrafted layer of componentization with JS. Essentially React handles repetitive injection of JS components, and then the JS initializes once embedded and handles the actual creation of the true component. This tip toes into the land of sacrilegious practices and things I'm not proud of, so I'll touch on it in those paragraph sections too. For the most part though, it works for the functionality *I needed* which is why I created it. For that, I am proud of its robustness and expansive nature.</p><br><p class=\\\"blogtextlist\\\">- Fully Custom Scrollbars. I absolutely can not believe there is not a standard for editing scrollbars in browsers. Each browser literally has its own scrollbar appearance and functionality, and that is absurd. I wanted a uniform and controlled experience, so one of the components I created was a fully custom scrollbar (visual and functional) that gives me absolute authority over the experience had interacting with the site. I got the mobile implementation perfectly replicating standard mobile scrolling as well and I'm especially proud of that.</p><br><p class=\\\"blogtextlist\\\">- Auto-Resizing Text Component. Much like custom scrollbars, I am bewildered by the fact this isn't already a standard in some way for the web. Essentially in this component, I set sizing bounds (whether in pixels or a % of the parent element or viewport), I give the text to display, and the text will *automatically resize itself* to fit the designated area. How is this not a core thing to web development already?!<br><br>EDIT: Future Aaron here. I have learned my personal integration of this has the capacity to be *very* laggy if I'm not careful sometimes. The lag can be subsided with conscious delicacy where necessary, but if I obliviously add 20 components of this magical text with minimal tuning the site will grind to a halt.</p><br><p class=\\\"blogtextlist\\\">- Decent Aesthetic. The site surely isn't the prettiest with parallax every scroll of the mouse wheel, elements popping in and out of existence, and visual blur and animations around every corner. BUT, for me being a code monkey and not a graphic designer, I believe it looks decent enough to not be repulsive.</p><br>",
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
const BlogHeaderProps_Sacrilegion = {
  id: "",
  text: "3. Sacrilegion",
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
const BlogTextProps_Sacrilegion = {
  id: "",
  text: "I often find that innovation among other cool ideas are held back due to fear of sacrilege regarding coding practices. While I'd never promote willy-nilly sacrilegiousness in a professional setting where teamwork is important, for personal passion projects I'd be lying if I said I didn't dabble in the darkness. Here are the ways in which this project would make any web dev in a professional setting's skin crawl.<br><br><p class=\\\"blogtextlist\\\">- FULL JS Componentization. The ENTIRE site is constructed from JS. Not a single element comes from raw HTML. I have no frame of reference of what a senior dev might say regarding this or how badly it would make them cry, but I'd imagine this is severely frowned upon in industry. While surely against countless core coding principles, I found no performance problems and I MUCH prefer having all aspects handled within the same scope (JS) so, yeah. JS components :)</p><br><p class=\\\"blogtextlist\\\">- React Dismissiveness. As I said previously, I prefer the scope of as much of my work to be in the same place. Because of this, I pretty much disregarded the purpose of React nearly entirely. React is meant to be the *component factory*, which is how I utilized it, but I kinda stepped directly on its toes by overstepping with my own JS component factory. The problem is React's variable and state handling is kinda gross, and its conditional rendering is also pretty gross, and using JS is just superior in so many intuitive ways (to me). At the end of the day I just ask 'what works best for me' and the answer is very blatantly JS.</p><br><p class=\\\"blogtextlist\\\">- Moving Buttons On Homepage. I know every UX and UI designer will cry themselves to sleep over this, but put frankly, I like the moving buttons. They're large enough I don't believe an 'evasive hitbox' issue exists, nor do I believe they move fast enough to make anyone sick.</p><br><p class=\\\"blogtextlist\\\">- Avoidance Of CSS Reactivity For JS. I know I know CSS performance is amazing and using the @media tag is great is perfect, but the thing is I don't like that. It's such an abrasive and limiting process to endure handling reactivity with CSS. So, my approach (using my JS component factory) was to allow completely separate component injections depending on if the user is on mobile or pc/tablet. It's not merely that the component looks different depending on the size of the screen, it's actually an entirely different component (and potential experience) from the ground up. Pitfalls of this are if users resize their screen from a PC <-> Phone size because the original size is what determines which component is initialized. However, phone can't upscale to pc sizes (except for new flip phones ugh) so that's not a concern there, and if you're on pc resizing to phone resolutions... why? For that sacrilege you can refresh the page (to fix the issue) as a cost for your sin.</p><br><p class=\\\"blogtextlist\\\">- LARGE JS Script Injection. None of my JS is bundled, none of my JS is minified, and even worse if I send unique components for pc/phone whichever isn't displayed (because the opposite device is recognized) is still loaded in full. I'm well aware of the obsession over minimizing the size of scripts, but I think it's pretty silly. When you're dealing with ~2KB scripts alongside a SINGLE static media image let alone a VIDEO, they are entirely negligible in terms of data transfer. Perhaps there is a non-negligible impact on parse/execution time, but I didn't observe it. According to all my profiling, the largest bottlenecks are actually loading the React and Vite scripts by a decent margin. My system works fine for the functionality desired in my opinion.</p><br><p class=\\\"blogtextlist\\\">- All Code Is Plaintext. Yes, you've read that right. Because of the hacky way I was forced to dynamically inject JS with React, all JS is handled as raw text strings inside Replit's IDE. That means no linting, no autocorrect, no suggestions, no spellcheck, etc. I have essentially been thrown back into the stone ages. This isn't an issue for me because I'm a prodigy programmer and don't need any of those things, but it's sacrilegious nonetheless.</p><br><p class=\\\"blogtextlist\\\">- Terrible Image Handling. I am well aware that I not only don't lazy load a single image, but I also don't put much effort into minimizing file sizes. I am embarrassed by this fact, but I'm also disinterested in fixing it because load times are fine on my (overpowered gaming) pc and top of the line phone so surely everyone else in the world has the same processing power and internet speeds (sarcasm, I'm sorry 😞).</p><br><p class=\\\"blogtextlist\\\">- No External CSS Reference. All of the individual project .html files have copy/paste of the general CSS layout instead of an externally referenced style sheet. This is so bad. I have no excuse for this one. Hopefully this sacrilege actually gets fixed because this even makes my own skin crawl.</p><br>",
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
const BlogHeaderProps_NotProud = {
  id: "",
  text: "4. Lacking Pride",
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
const BlogTextProps_NotProud = {
  id: "",
  text: "This site has some points of pride, some points of sacrilege, and let's not forget some points of embarrassment.<br><br><p class=\\\"blogtextlist\\\">- Gross URL. I'm a bit of a cheapskate because I have no source of income (I'm using this site to KICKSTART my career, remember), so I decided to go with a free host which I know a lil trickery to run 24/7 and go with a free DNS redirect. This means the initial entry URL is different than the live URL once on the site and that's pretty gross. It's overall a pretty poor experience.<br><br>EDIT: I have since splurged and purchased a domain! For the grand price of $8 I now appear much more professional. Cool.</p><br><p class=\\\"blogtextlist\\\">- Poor Phone Port. I initially came up with some interactive ideas for PC as far as how the site experience would flow and work, but then I remembered people use their phones to browse the internet too (unfortunately). So I had to come up with a makeshift experience translating what I could salvage of the pc experience to phone. Not everything translated well though, for example the 'about me' video at the top of the page. Luckily with my JS component scaffolding I could beyond easily integrate a completely custom and unique phone and pc experience should I choose to and find inspiration, I just am neither choosing to nor have inspiration.</p><br><p class=\\\"blogtextlist\\\">- Laggy Loading Sometimes. Sometimes pageloads are slow. This is not due to my sacrilegious coding practices, however. This is due to the free host lagging absurdly because the server is running off Vite. 'Why is the server running Vite if it lags the free host too much Aaron' you ask. Simple: because I'm too far invested and I didn't choose Vite intentionally (it came prepackaged with the React bundle on Replit server creation). I have hosted Node.js and even Next.js servers on Replit with less lag than this server with Vite, so I really should migrate, but I feel like closing the chapter on this project and likely won't be doing that. If it were up to me I would replace Vite with a basic Node.js + Nodemon + Express backend (which historically has performed astronomically better).</p><br>",
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
  text: "5. Specific Problems",
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
const BlogTextProps_Problems = {
  id: "",
  text: "In no particular order, here are problems I came across (some were overcame) and jotted down as I developed.<br><br><p class=\\\"blogtextlist\\\">1. Because this backend Replit server uses Vite, there is essentially no (reasonable) way to get rid of .html at the end of URLs or have custom routing in any capacity. This is meant to make server layout easier, but I think seeing '.html' at the end of URL addresses is disgusting and archaic.</p><br><p class=\\\"blogtextlist\\\">2. React is not a fan of dynamic *script* injection. It properly adds the JS script element to the DOM, however the code within the script is not actually executed. I worked around this issue by using a modular React plugin called 'React-Helmet' which allows the script to be run. A very odd side effect of this plugin will be spoken of in a further point.</p><br><p class=\\\"blogtextlist\\\">3. React is not a fan of device type detection so 'responsiveness' (via unique component usage) depends on external script injections. There are technically React plugins which offer this functionality, but they just looked gross to incorporate and ultimately having more of my workspace scope in one spot (JS) was better for numerous reasons.<br><br>Counterpoint: There is ONE third party React library which actually performs this exact functionality exceptionally well, however simply by my preference I prefer to keep such decisionmaking tied to javascript so it's not scoped and compartmentalized out of my view via javascript for whatever functionality reasons I may have to want access.</p><br><p class=\\\"blogtextlist\\\">4. I don't know React very well. I see it as a tool for modularizing initial instantiations and organizing, but it seems to want to be more of a live/all-encompassing state manager which I don't like. I believe my code actively works AGAINST the role React tries its absolute hardest to play. I only implemented it as a buzzword to impress business folks who don't particularly have competence in/knowledge of the technology.</p><br><p class=\\\"blogtextlist\\\">5. I used % based placement for a vast majority of components (as opposed to pixel). The tradeoff of controlling the experience in this way is that the visually impaired can essentially NOT zoom in to make any normal element or automagically-resizing text/font size larger. The only way to do that would be to physically make the window larger since sizings are fundamentally percentages of the window. I'm sure there are workarounds of some sort browsers could do by emulating larger viewports or something, but the primary functionality of 'zooming' the way practically every person understands it won't work properly. (Note: It *will* work on this page if you try zooming here because this text isn't auto-magically resized. This is the exception not the rule.)</p><br><p class=\\\"blogtextlist\\\">6. Essentially all payload injections are script based. I mentioned this in the sacrilegious section already, but aside from being a sin it's also functionally slightly deficient. Anyone who has JS disabled will see an entirely blank page. My response to that is the analogy: disabling JS for privacy is akin to cutting off your hands so you can't be fingerprinted. Sure, you've enhanced security, but you've also neutered monumental functionality capacity. If you disable JS from fear of XSS and CSRF of some kind, I guess then accept the repercussions. To each their own, however. Also React requires JS and everyone knows the industry loves React so disabling JS impacts a reach far exceeding my site alone.</p><br><p class=\\\"blogtextlist\\\">7. React-Helmet has an AWFUL bug. React-Helmet effectively works by updating the head tag via *state changes*. Here is what this means for me and why it is problematic. I inject code snippets via modules or capsules of code which then gets read by being placed in the header. The catch, given React-Helmet is what places them in the header in the first place in a state-based manner, is if I provide a module of code to be added to the head, but the javascript/text inside this module is identical character for character to another script I've injected, then it simply doesn't get injected again as React-Helmet believes it's 'already there'. This problem becomes present when I inject duplicate code which automates differences via javascript expressions rather than hardcoded differences.<br><br>Fix: This had to be fixed very severely. I tried my best to make React-Helmet simply *always add the new script to the header*, however, it didn't seem to want to budge and allow that behavior. So my fix was simple. Hack the text to be 'different' with a random character string injection in a location which doesn't actually alter the functionality of the code any, but which makes it not match character for character with any other scripts injected.</p><br><p class=\\\"blogtextlist\\\">8. Browser differences are a real pain. It's one thing to make the site 'responsive' to different sizings, but it's a whole different story trying to make that happen properly *across browsers*. As of my time writing this, there are no challenges which couldn't be hacked through for similar appearance, however performance-wise google chrome (the overwhelming market majority) stutters terrible on initial load and firefox runs great. Not much I've found that I can do about that. Even Edge runs great and that's made by Microsoft who make horrible software (Teams navigation is horrible and Onedrive corrupts coop files every 2 seconds).</p><br><p class=\\\"blogtextlist\\\">9. '/aboutme.html' page is messed up on mobile because like countless other times, porting from PC functionality to phone doesn't always go 1-to-1. If you take advantage of the fact that mobile doesn't scroll lock the top of the page, and you partially scroll so the navbar is barely visible, open the navbar menu, and then close the navbar menu, you can see the menu slide up before disappearing. That's not supposed to happen because the navbar is typically at the top of the page. I *could* fix it by locking it inside a NEW div with overflow hidden, but I'm lazy and it's not worth the pain at this moment. Another issue is the page's scrollbar is visible through the navbar and through the video on mobile.</p><br><p class=\\\"blogtextlist\\\">10. Background Gif Tearing. The reasons this happen are beyond me, but sometimes randomly the background scrolling stars will start tearing across the screen? It doesn't seem to be an actual css placement problem on my end. It's more like a behind the scenes browser problem possibly related to the deactivation/activation/caching mechanisms I have no control over.</p><br><p class=\\\"blogtextlist\\\">11. Random Reloads. I don't know why Vite loves to do this, but the site randomly reloads constantly. It's not like a hot-reload where I've changed stuff in the code either. It's just random as far as I can tell. I really don't like Vite.</p><br><p class=\\\"blogtextlist\\\">12. Scrolling System Malfunctions w/ IFrames. I have entirely overridden base HTML scrolling from the ground up across all devices. I believe I've achieved a decent experience in doing so. The one and only place this falls completely flat out of my control is with IFrames. Certain interactions, for example scrolling on phone requiring listening for taps, aren't conversed up the parental component heirarchy to my listener components. So when I have a YouTube embed on mobile for example which takes up 95% of the width of the screen, and a majority of the height if not *all the height*, the YouTube IFrame sucks all tap interactions into a black hole and the user can no longer scroll. I have found absolutely no workaround for this cleanly, so I am forced to minimize the width of the videos to around 60% (leaving some blank space on the sides for users to utilize for scrolling).",
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
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_Proud} />
      <BlogText {...BlogTextProps_Proud} />
      <BlogHeader {...BlogHeaderProps_Sacrilegion} />
      <BlogText {...BlogTextProps_Sacrilegion} />
      <BlogHeader {...BlogHeaderProps_NotProud} />
      <BlogText {...BlogTextProps_NotProud} />
      <BlogHeader {...BlogHeaderProps_Problems} />
      <BlogText {...BlogTextProps_Problems} />
      <BlogFooterGap />
    </>
  )
}
