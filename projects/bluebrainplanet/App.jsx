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
  text: "<span style=\\\"font-size: 80%\\\">BlueBrainPlanet.com</span>",
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
  whitespacephone: "nowrap"
}
const BlogTextProps_Purpose = {
  id: "",
  text: "My friend has a clothing brand called BlueBrainPlanet. He had a website setup, but it was beyond basic and lacking countless modern features (such as resizing in any capacity). I decided to take on this endeavor voluntarily simply to help my friend, but secondarily as a means to test my competency in a commercial environment. I was confident I could pull it together and produce something of decent value and minimal confusion/clutter with respect to non-tech users interfacing and integrating, but I had never particularly *done that* and been held to external human's incorporatory standards. This was my attempt to do exactly that.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Briefing = {
  id: "",
  text: "2. Plan Briefing",
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
  text: "The site would be housed on Shopify. The site would also need to be programmed by me, but configurable by those in the business (NOT developers). Of course there are Shopify themes which allow for configuration, but they are severely limited in terms of *creation*. That's where I stepped in. Sure, the other business partners don't know how to code and can't create from the ground up as I can, but they're also not incompetent. If I made a pseudo programming stage, a sort of hyperfocused and optionally straight forward lego-esque pieces that they could learn to use freely and layer upon each other to fulfill their vision, then I considered that my mission and that my terms of success. I asked for their mockups for what the site should look like in their visions and got to work. I decided the foundational \\\"legos\\\" that would allow them to produce their site were: images, textboxes (which can auto-resize and be tied to pixel locations of images), redirect buttons, toggle buttons (for toggling several animations as an example), and then less ambiguous and more pinpointed functionality required a globe of spinning products, a scrollable grid of products, and some others. Another sidenote handcrafted feature they desired I feel is worth mentioning is the entire site uses fully custom scrollbars. They didn't like how every browser has a different aesthetic, different functionality, and is overall nonhomogenous. So I offered to custom make the scrollbars to ensure uniformity across browsers and allow them to further control the user experience to fit their creative vision.",
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
  text: "GitHub Source (As of Nov 22, 2022): <a href=\\\"https://github.com/aaronskeelsofficial/BlueBrainPlanet\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
  text: "<p class=\\\"blogtextlist\\\">- New Language. Shopify uses a fully custom scripting language called Liquid which is kinda their in-house take on React and JSX. It isn't too hard to pick up the syntax, however learning each individual functionality available and how to properly use it took a bit of time.</p><br><p class=\\\"blogtextlist\\\">- Limited API. Through Liquid, one can access items available to the store, items in cart, coupons/discounts, etc. The catch is that the availability of these things is restricted in three primary ways. 1. Localized access. To access the products available in the shop for example, you *must* be on a page of the site pertaining to items. To access the cart, the user must be currently accessing the cart page. This is highly restrictive and doesn't allow for customization (for example having a popup integer on the cart indicating how many items are in it while on the product page). 2. Scoped access. Shopify tries their absolute hardest to ensure that backend information accessed through Liquid *stays in liquid*. They don't want you exporting the data on items in the shop to JavaScript for example. They want you to have all integrations run through Liquid, but that doesn't work for me. I eventually found a way to hack in information from Liquid into JavaScript (my preferred scope of all work being done), though Shopify made it abundantly clear they did not want that happening. 3. Dripfed access. To prevent unnecessary bandwidth usage, Shopify limits how many information pulls you can do of backend data to 50. That means, if you're selling 100 items in your shop, you can only pull information for and therefore present information on 50 at a time. There are hacky workarounds for this, because of course I thought of them and found them. Though the fact they intentionally force hacky workarounds for reasonable functionality to fight off those with malicious intent felt extremely silly to me.</p><br><p class=\\\"blogtextlist\\\">- Shopify Backend Data Persistence Glitches. Shopify never actually deletes files (or something along those lines perhaps caching). This became evident when I'd have information on a file, delete the file, and then at some point recreate a file with the same name. It would auto-populate with the data from the old file which I deleted. I don't recall exact instances where this became problematic, but I know these phantom files caused issues numerous times throughout development.</p>",
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
const BlogHeaderProps_Features = {
  id: "",
  text: "Interesting Top of Head Features",
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
const BlogTextProps_Features = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Products hotswap URL without reloading upon changing colorway or size (makes sharing link to friends more seamless)</p><br><p class=\\\"blogtextlist\\\">- For optimization, large pages entities don't load until a user has moved their mouse over the page indicating their presence</p><br><p class=\\\"blogtextlist\\\">- Adequate responsiveness. Transitions between resizes with two distinct design considerations: pc and mobile. Future plans for tablet if necessary.</p><br><p class=\\\"blogtextlist\\\">- Fully custom scroll functionality. Custom scrollbars, custom mouse wheel listener, custom mobile touch listener, and custom bar click and drag handling.</p><br><p class=\\\"blogtextlist\\\">- Welcoming audio clip plays on click-to-enter homescreen overlay interaction</p>",
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
const BlogHeaderProps_PC = {
  id: "",
  text: "PC Images",
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
const BlogImageProps_PC1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Countdown.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Countdown.png"
}
const BlogImageProps_PC2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/CTE.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/CTE.png"
}
const BlogImageProps_PC3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Home.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Home.png"
}
const BlogImageProps_PC4 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Products.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Products.png"
}
const BlogImageProps_PC5 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Product.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Product.png"
}
const BlogImageProps_PC6 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Cart.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Cart.png"
}
const BlogHeaderProps_Mobile = {
  id: "",
  text: "Mobile Images (Major WIP)",
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
const BlogImageProps_Mobile1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/bluebrainplanet/Mobile.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/bluebrainplanet/Mobile.png"
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
      <BlogHeader {...BlogHeaderProps_Briefing} />
      <BlogText {...BlogTextProps_Briefing} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogHeader {...BlogHeaderProps_Problems} />
      <BlogText {...BlogTextProps_Problems} />
      <BlogHeader {...BlogHeaderProps_Features} />
      <BlogText {...BlogTextProps_Features} />
      <BlogHeader {...BlogHeaderProps_PC} />
      <BlogImage {...BlogImageProps_PC1} />
      <BlogImage {...BlogImageProps_PC2} />
      <BlogImage {...BlogImageProps_PC3} />
      <BlogImage {...BlogImageProps_PC4} />
      <BlogImage {...BlogImageProps_PC5} />
      <BlogImage {...BlogImageProps_PC6} />
      <BlogHeader {...BlogHeaderProps_Mobile} />
      <BlogImage {...BlogImageProps_Mobile1} />
      <BlogFooterGap />
    </>
  )
}
