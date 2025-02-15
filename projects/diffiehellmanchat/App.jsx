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
  text: "End to End Encryption Chat",
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
  srcpc: "/src/img/projects/diffiehellmanchat/demo.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/diffiehellmanchat/demo.png"
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
  text: "I had just programmed the MMO account backend which involved hashing and salting passwords. That got me interested in encryption. I decided to make an end to end encryption chat service. Signal, Telegram, and WhatsApp have monopolies over the availability so I was simply curious how hard it was to implement if I ever couldn't trust them.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Tech = {
  id: "",
  text: "2. Tech at Play",
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
  text: "I will admit with no prior knowledge on different stages or even types of encryption, the journey was confusing at times. Ultimately, what I ended up crafting was a system which uses Socket.io for realtime comms with the server, the Node.js module 'crypto' for keygens, Elliptic-Curve Diffie-Hellman for key exchange (everything I saw online suggested it was better than standard DH), and the node module 'crypto-js' with AES-256 as the cipher algorithm. I also run a separate Replit instance for handling Socket.io communication since the one running my portfolio uses Vite (for no reason in particular) and as such, can't multitask roles.",
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
const BlogHeaderProps_Issues = {
  id: "",
  text: "3. Issues Overcome",
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
const BlogTextProps_Issues = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Keygenning. I couldn't find any intuitive, well documented libraries for browser JS. The only straight forward and easy to find ones were for Node. My first thought was to sort of invalidate the whole \\\"end to end encryption\\\" claim by forcing users to make a post request to my own server (different url hopefully conveying \\\"detached\\\" process) which keygens and sends it back to the user. Ultimately, that felt like cheating though, so my hunt continued for libraries for browser JS. I literally couldn't find anything and hail mary'd a search for sending node modules to browser. I came across Snowpack, Webpack, and Browserify.</p><br><p class=\\\"blogtextlist\\\">- JS bundling. Every forum post and resource I came across said Snowpack and Webpack were superior in every way in comparison to Browserify being outdated tech. Well, I tried Snowpack and Webpack. The experience was very poor. Snowpack forces you to use an index.html and app.js file structure and I'm not too keen on adhering to that, so it was off the table. Webpack just didn't work at all. Browserify allowed me to properly build node modules into a referencable .js file for web which is the only functionality I needed, and as such was what I used.</p><br><p class=\\\"blogtextlist\\\">- Secret key ciphering. The next issue I had which just came from a lack of knowledge was finding a way to utilize the secret key. I had done the public key exchange and had a shared secret key, but none of the cipher options in the 'crypto' module were working properly. I got so fed up I installed another entire crypto library called 'crypto-js' purely for ciphering and deciphering through AES. It's best practice to try to build the least amount of node modules with Browserify to be included in the browser, but I couldn't get the first library to work so two were utilized.</p>",
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
  text: "4. Possible Improvements",
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
  text: "<p class=\\\"blogtextlist\\\">- Ugly webpage. As it stands, the webpage is ugly and clunky. The interface is very bare bones (if a room is full you must reload the entire page for example). I think in this instance though, that's okay. The less developed and more barebones the site looks, the more effectively I believe it conveys that the server doesn't care about the users' data. Its role is quite literally to be an ugly middleman and that's it.</p><br><p class=\\\"blogtextlist\\\">- XSS attacks. One glaring issue is I don't encode/cleanse messages upon displaying them in the chatbox. Now yes, I could implement it easily and it would skyrocket security, but it also enforces limits equally as much. I think having the freedom to send literally whatever you want to be loaded on the other client's browser is sick. Send images. Send videos. Change the whole theme of the website. *cough* Send a bitcoin mining script *cough*. Send whatever you want! That's 100% a bug turned feature. In a professional implementation you probably (VERY LIKELY) wouldn't want to do that though.</p><br><p class=\\\"blogtextlist\\\">- Lacking notifications. I never wipe the room codes or tell when one party leaves the chat. Although these things seem like lacking features, another bug turned feature is right in front of us. If a user wants end to end encryption, then they want the least information known about them. If I tell when the room has been cleared, then someone else knows they left. If I announce in chat when they leave, now someone else knows they left. The less information I provide, the better.</p><br><p class=\\\"blogtextlist\\\">- Asking for memory leaks/vulnerability. Users technically have the potential, as the current implementation stands, to spam join every possible room code. I have no single room protections, or really any protections at all which would require taking into account and tracking the identity of a user. Because of this, they could take advantage of the backend in likely countless ways, but that's the price of privacy.</p><br>",
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
  text: "5. Source/Demo",
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
  text: "Demo: <a href=\\\"/projects/diffiehellmanchat/demo.html\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a><br>Socket.io Relay Server: <a href=\\\"https://github.com/aaronskeelsofficial/PortfolioServices\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_Tech} />
      <BlogText {...BlogTextProps_Tech} />
      <BlogHeader {...BlogHeaderProps_Issues} />
      <BlogText {...BlogTextProps_Issues} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
