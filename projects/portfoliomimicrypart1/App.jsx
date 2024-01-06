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
  text: "Portfolio Mimicry Part 1",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Divider = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/bg-rocketdivider.png",
  //
  enablephone: "true",
  srcphone: "/src/img/bg-rocketdivider.png"
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
  text: "At this point I have made my portfolio site, but it's clear I'm more of a code monkey striving for function over aesthetic. So the purpose of this endeavor is to prove that I can clone the functionality of all these graphic designers even if I'm not artistic enough to creatively come up with the ideas myself. So let's look into what some others are doing and shamelessly see if I can rip it completely from scratch (no cheating with external libraries that already copy any functionality), shall we? Note: All these mimicries will be made swiftly and as such will NOT BE RESPONSIVE. If you are on a phone, I am sorry but the experience will not be tailored for you and possibly not work. I completely understand responsiveness is a big part of web design but it was not a part of *this project's* intentions or goals.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Idea1 = {
  id: "",
  text: "Idea 1: Rounded corner cardify EVERYTHING, then stagger load",
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
const BlogTextProps_Idea1 = {
  id: "",
  text: "Looking at <a href=\\\"https://www.poulos.co/\\\" style='color: rgb(115,204,168)'>poulos.co</a> among a majority of other portfolio sites, it's clear that to step up my graphics I need to cardify EVERYTHING. If it's not in a grid, then it doesn't belong on the page. The plan is simple. Step 1: Cardify. Step 2: Stagger load the cards. Step 3: Round the corners round the corners round the corners (because all contemporary design has rounded corners and revolves holistically around an obsession with circles of course).",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Improvements1 = {
  id: "",
  text: "<br>Improvements I'd personally make and things that stand out to me (functionally, because I'm a code monkey) about <a href=\\\"https://www.poulos.co/\\\" style='color: rgb(115,204,168)'>poulos.co</a> are the following.<br><br><p class=\\\"blogtextlist\\\">1. Elements Exist Before Rendered. The problem I see, is that all the cards are able to be interacted with and hovered over prior to visibily being anywhere near rendered on the screen. An example is you can click the twitter button in the second row before it even stagger loads onto screen, as well as the cards which replace the cursor still do so even if you haven't scrolled far enough to queue their rendering at all. This is because the creator depended on opacity merely to hide the cards. The simple fix is to instead leverage 'visibility: hidden' as that truly removes the element from user interactions rather than making it invisible.</p><br><p class=\\\"blogtextlist\\\">2. Manual Card Placements In Grid. The problem I see, is that the creator of the site has manually placed (and sized) each card within the grid. He specifies which row(s) and column(s) (and thus size) a card belongs to. A better system would incorporate the *magic of javascript* or perhaps some built in CSS functions to automagically define the row and column sizings with 'span #' rather than hardcoding placements. I won't be incorporating this just yet because it'll come later.</p><br><p class=\\\"blogtextlist\\\">3. Hyperlink Anchor Tags Overlay Text. This is merely a UX gripe (which is ironic given I'm a code monkey), but the issue I see here is that the creator of the site has made the most parent element of some cards an anchor tag for hyperlinks. The issue which arises here, is that now text within that card doesn't give a proper 'text select' cursor, nor is it selectable. This irritates my OCD and I'm sure plenty of others'. The fix is to have the *text overlay a child anchor tag* so text is still text, and only when not interacting with text do you hit the anchor redirect of the card itself. I will be incorporating this.</p><br><p class=\\\"blogtextlist\\\">4. This is more a meta commentary bit I suppose, but way too many portfolio sites have 'Hello 👋' in them. It looks so corny from the saturation. The fix is to avoid having this at all costs and will be implemented in my version.</p><br><p class=\\\"blogtextlist\\\">5. Blurry Image Asset From Resize. The creator of the site has stretched an image to fit the card in such a way that it appears MUCH blurrier than the original he's actually referencing and far blurrier than all other assets on the page. Given it's literally at the tippity top of the page, this stands out like a sore thumb and looks bad. I won't be fixing this because my graphics are hand drawn and also look terrible for sake of prototyping and copyright infringement.</p><br><p class=\\\"blogtextlist\\\">6. Custom Cursor Scrollers Funky. On the cards with custom horizontal scrolling functionality, the replaced cursor image is 1. originated from the topleft rather than any attempt of centering and thus off center 2. Not hidden by 'overflow: hidden' which leads to major bleed over cards if the mouse is in the right place. The fix is to center the custom cursor and to utilize overflow mechanics. I will implement this.</p><br><p class=\\\"blogtextlist\\\">7. Scrollable Content Doesn't Always Wrap. Who wants to scroll 5 slides to the right just to have to scroll 5 slides *back to the left* to get to the first slide? Nobody. I will fix this in my version.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Final1 = {
  id: "",
  text: "<br>Here is my finished version: <a href=\\\"https://portfolio.aaronskeels1.repl.co/projects/portfoliomimicrypart1/idea1.html\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a><br>Here is the original site: <a href=\\\"https://www.poulos.co/\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Shortcomings1 = {
  id: "",
  text: "<br>Although I did address some issues improving on the original, it feels unfair to not also acknowledge the shortcomings of my version.<br><br><p class=\\\"blogtextlist\\\">1. Macro-Animations. Although my site properly addresses the 'not actually on the page until it needs to be on the page' issue by using 'visibility: hidden', my approach isn't perfect. The original approach was aesthetic yet nonfunctional, likely as a byproduct of not having knowledge. My attempt is functional yet not aesthetic, likely as a byproduct of not having enough care to micromanage for aestheticism. The *perfect* approach, however, would use a bit of both ideologies. Ideally, the elements would be 'visibility: hidden' until just before the opacity fade in that way they are functionally hidden as well as aesthetically fading in.</p><br><p class=\\\"blogtextlist\\\">2. Micro-Animations. The original has animations even within the individual cards. If I was not determined enough to animate the cards themselves, I surely was not motivated enough to set animations on such a niche level as this project doesn't contain that within its scope. Excuses aside, however, it is still a shortcoming compared to the original and an improvement I could make moving forwards.</p><br><p class=\\\"blogtextlist\\\">3. Original Page Has Scrolling Pop-in. My mimicry doesn't contain all the content on the original page. This is for a very technical reason being that I didn't feel like it (it wasn't 'within scope' of the project). An improvement I could make moving forwards is copying the entire site's length and not just the top quarter or so.</p><br><p class=\\\"blogtextlist\\\">4. Anti-Responsiveness. I have shared my disdain for using the @media tag to handle CSS configurations in my 'Portfolio Project' project page. The original site used that to resize some things, and I did not. An improvement would be to actually resize things for mobile/tablet properly (but that was beyond the scope of the intention of this project).</p><br><p class=\\\"blogtextlist\\\">5. Scroller Mishap. Now that I've already completed the project, I see that I treated both scrolling cards as horizontal scrollers when in reality the quote scroller is more of a fade-out/fade-in sort of thing. I consider this problematic and a bit of a failure in my eyes, but the project is already finished so I'll take it to the chin and try not to do it again next time.</p><br><p class=\\\"blogtextlist\\\">6. Font Mismatch. I copied the font CSS line they used on their site, and in my firefox dev menu hovering it showed the correct preview so I assumed it was a standard font included in the browser. There is just something about my website that looks off, and like matching their font weights didn't actually match on my end. I'm sure I could have fixed this with a google font import or worst case a woff2 import, but it wasn't really all that important in the grand scheme of things. Just something to acknowledge.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Idea1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://imgur.com/94h6EiR.gif\\\",\\\"https://imgur.com/Zv6Z12s.gif\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://imgur.com/94h6EiR.gif\\\",\\\"https://imgur.com/Zv6Z12s.gif\\\"]"
}
const BlogHeaderProps_Idea2 = {
  id: "",
  text: "Idea 2: Automagically Resize Grid Content",
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
const BlogTextProps_Idea2 = {
  id: "",
  text: "Looking at <a href=\\\"https://www.carlhauser.com//\\\" style='color: rgb(115,204,168)'>carlhauser.com</a>, he has implemented one of the improvements I suggested to Poulos. Instead of hardcoding every of his grid content from column/row x -> y, Carl presumably has some sort of JS running in the background not only taking advantage of grid 'span' tags but also setting them in accordance to the total grid columns/rows (dependent on screen size). The plan is simple. Step 1: Create a grid. Step 2: Use the 'auto-fill' template tag to dynamically resize the grid in accordance to the screen size. Step 3: Use JS on all grid content to calculate how many panels we can span theoretically and maximally span, and then have them span that.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Improvements2 = {
  id: "",
  text: "<br>Improvements I'd make to this website are... pretty much nothing. I think this site not only is innovative beyond what was previously encountered in a similar vein, but doesn't cut corners to make it happen. I think it's really smart giving each drawing an ID as well so people can easily find them. If I had to nit-pick the few improvements that come to mind, they would be:<br><br><p class=\\\"blogtextlist\\\">1. Removing The 'Hello 👋'. I've already shared I think this header is grossly overused and oversaturated on portfolios. I will DEFINITELY be removing this in my version.</p><br><p class=\\\"blogtextlist\\\">2. The website owner could in SOME way make a separate page for each drawing, or least a # anchor added to the URL when you click an image that sharing would auto-scroll to the proper image. Right now, if you like a drawing there is absolutely no efficient way to share them with others aside from giving them the ID and forcing them to scroll through the entire page playing where's waldo because the grid fundamentally isn't perfectly consistent since some things span numerous columns/rows and others don't. I will not be incorporating this fix because it's beyond the scope of my imitation attempts, but still seems like a good idea for the real one.</p><br><p class=\\\"blogtextlist\\\">3. Incorrect Div Addition Order. I'm now noticing part of the where's waldo experience is because the divs are not added to the grid parent in the right order? Why are the divs, for example, added in order of image # 65, 63, 61, 64, 62? That makes absolutely no sense and was clearly intentionally done on the backend level and not automated by CSS or anything incorrectly it was just coded wrong. How odd. I will be fixing this in my version because this is such a crucial error.</p><br><p class=\\\"blogtextlist\\\">4. Overabundance Of CSS Vars. The creator of this site has tied SO much of the visuals to CSS variables. This is a personal take but if you're going to venture that far into dynamic interactions, just use JS. JS is your friend and capable of endless possibilities. Give in to the darkness Carl. It is not worth the effort and is out of scope for me to link every interaction the way he does, so I will not be incorporating this fix.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Final2 = {
  id: "",
  text: "<br>Here is my finished version: <a href=\\\"https://portfolio.aaronskeels1.repl.co/projects/portfoliomimicrypart1/idea2.html\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a><br>Here is the original site: <a href=\\\"https://www.carlhauser.com/\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Shortcomings2 = {
  id: "",
  text: "<br>Although I did address some issues improving on the original, it feels unfair to not also acknowledge the shortcomings of my version.<br><br><p class=\\\"blogtextlist\\\">1. Resize Niche Growth. Although my site properly addresses the 'grid automagically resizes depending on browser size and if the image is naturally oversized, shrink it to fit the new column limitations' feature of the original, there is a problem. On the original, the creator has used decimal resizing ratios to constantly make the image fit the grid areas allotted perfectly. My implementation falls short as the largest I ever allow the sketch to grow is the ORIGINAL size (I only shrink it if necessary). This was done intentionally because it feels right to me, however where I could have improved was handling the shrinking ratios with decimals of some sort so it's a smooth resizing and not an abrupt one out of nowhere.</p><br><p class=\\\"blogtextlist\\\">2. Imperfect On-Hover Replication. I didn't replicate all on-hover functionality. I easily could have done this, but the effort was simply not worth the negligible difference in contrast to the overall goal and scope of the project. I got the grid on-hover replicated and that's the most impactful (even though it was simply one line of CSS).</p><br><p class=\\\"blogtextlist\\\">3. Bad Header Resizing. I didn't nitpick the CSS of the header so it resizes properly to extremely small sizes (probably won't look good on mobile, haven't checked). The original also doesn't resize well though in my opinion. This is just a bad layout to have if you want it to carry over responsively from desktop to mobile.</p><br><p class=\\\"blogtextlist\\\">4. No Macro-Animation. My cards don't swoop in on initial load like his and similar to the original 'Idea 1' site. That would be too much effort as a proof of concept blocking out and is out of scope.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Idea2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://imgur.com/1DsUkqv.gif\\\",\\\"https://imgur.com/2ZI83O8.gif\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://imgur.com/1DsUkqv.gif\\\",\\\"https://imgur.com/2ZI83O8.gif\\\"]"
}
const BlogHeaderProps_Idea3 = {
  id: "",
  text: "Idea 3: Cursor Snail, Scroll Bend, Scroll Strikethrough",
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
const BlogTextProps_Idea3 = {
  id: "",
  text: "Looking at <a href=\\\"http://www.amandabraga.com/\\\" style='color: rgb(115,204,168)'>amandabraga.com</a>, I am STUNNED. This website was clearly made by someone with actual programming knowledge which they used to handcraft a unique experience. They have scrolling overridden and handled by 3d transforms (which is functionally weird but technically cool). They have numerous interactions that someone with surface level CSS wouldn't possibly know. There are a few that stand out and which I'll be copying. The plan is simple. Step 1: Have the header create a trail of images on cursor move. Step 2: Clone the cool effect on scroll where the bottom or top of the page warps depending on scroll direction. Step 3: Create nav buttons that swoop in letter by letter on hover. Bonus Step 4: Yes, I will recreate the silly custom cursor that follows the mouse because SO many websites use it.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Improvements3 = {
  id: "",
  text: "<br>Improvements I'd make to this website are to de-spaghettify the backend functionality. This website is highly representative of something I would make (though much more aesthetic). The frontend experience is fresh and cool, but the backend programming is horrifying and largely over the top/not the most straightforward.<br><br><p class=\\\"blogtextlist\\\">1. Navbar Invert Methodology. This website uses a custom circle cursor which inverts the navbar on hover. The way they achieved this is really ingenious and creative, but also super sacrilegious. They essentially hardcode a cloned navbar, meticulously replacing all the colors in CSS with the opposites, cut the entire navbar copy into a circle shape with 'border-radius' sizings, and then hide the navbar existing outside of the coincidental circle view window with 'overflow: hidden'. All that work could easily be replaced by a css '.navbar:hover + .cursor' definition utilizing 'mix-blend-mode' or 'filter: invert(1)'. I will be implementing this fix.</p><br><p class=\\\"blogtextlist\\\">2. Custom Scrolling Methodology. This website opted not to use traditional 'scrolling' functionality which is respectable (I do the same thing on my site), though they opted not to have a scrollbar which I think is kinda gross UX. They make up for it by having the navbar headers which scroll the page, but I don't believe that justifies removing the scrollbar. For some reason they overrode scrolling using the 'transform3d' css tag which is super unnecessary and in my opinion kinda strange given they presumably used javascript for other aspects of the site so they could have just used javascript to handle the literal scrolling utilized traditionally by browsers (while still hiding the scrollbar as they wish). I will be incorporating traditional web scrolling firstly to bring back the scrollbar and secondly because scrolling with 'transform3d' surely has unnecessary runoff effects.</p><br><p class=\\\"blogtextlist\\\">3. Text Highlighting Matches Background. I'm honestly not sure what methodology was used to handle the color changes on the site because this whole thing is spaghetti and the javascript is obfuscated/minified way too much, and this causes a few issues in my opinion. The most blatant and annoying/problematic being when you highlight text, often times the highlight background is the same color as the site's current background so you can't tell what text you have selected. I'm not sure of any realistic reason one would have to copy/paste any of the text on this site, but it still really bothers me in terms of UX. I will be 'incorporating a fix' for this, but in reality it will automatically fix itself because they only get the issue in the first place by whatever over-the-top way they programmed the site. It wouldn't have become an issue in the first place if not by their deliberately nontraditional decisionmaking.</p><br><p class=\\\"blogtextlist\\\">4. Mobile Navbar Implementation. This is more of a nitpick, but I am not a fan of having the navbar in a hamburger menu for mobile given that the buttons don't redirect to other pages but instead scroll the current one. That feel unintuitive and super clunky. I won't be incorporating a fix for this because I'm not caring about responsiveness or mobile experiences in these site mimicries.</p><br><p class=\\\"blogtextlist\\\">5. Paid For Fonts. This is a joke/sarcastic complaint, but this site uses commercial fonts that cost money which I can't steal with a single CSS line. Not epic. It's called 'Alphacal JNL'. I will be fixing this by using less appealing free fonts like a true artist.</p><br><p class=\\\"blogtextlist\\\">6. Image Spawning Lag. My image spawning methodology is clearly inferior. I think I do way too many 'setInterval' calls that run way too often and should take advantage of CSS more, but I've invested too much time into creating what I have when it's not meant to be a significant mimicked functionality.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Final3 = {
  id: "",
  text: "<br>Here is my finished version: <a href=\\\"https://portfolio.aaronskeels1.repl.co/projects/portfoliomimicrypart1/idea3.html\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a><br>Here is the original site: <a href=\\\"http://www.amandabraga.com/\\\" target=\\\"_blank\\\" style='color: rgb(115,204,168)'>--> HERE <--</a>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Lessons3 = {
  id: "",
  text: "<br>Now this, this was an interesting endeavor unlike the first two. I had to think, research, and learn in my pursuit of achieving the goals set out in idea 3 so I will discuss my learnings and the problems encountered now.<br><br><p class=\\\"blogtextlist\\\">- I learned about the CSS 'perspective', 'perspective-origin', and 'transform-origin' tags (I already knew a bit about 'transform'). I needed to learn this because apparently, it's the only way to manage... well... any modest level of transformation (which is necessary for skewing/distorting the top and bottom of the page on scroll). I learned how it functions, but the reality didn't really set in until I made a sort of code testing playground. Then I truly understood how perspective + 3d transforms worked, and I immediately saw the technological challenges in the way of creating the scroll distortion effect.</p><br><p class=\\\"blogtextlist\\\">- The first challenge being the distortion effects don't apply *through* layers so I can't simply have an overlay element taking up those sections of the screens applying the effects 'through them'.</p><br><p class=\\\"blogtextlist\\\">- The second challenge being that if you apply any of these 3d transforms to an element, it applies to the WHOLE element. You can not mask it to only apply to a portion, and this means I can't just 'apply the effects to the top and bottom areas of the body div' without it altering (completely messing up) the middle as well.</p><br><p class=\\\"blogtextlist\\\">- So I sat, and I thought long and hard about different approaches. The easiest I could think of if all I cared about was the distortion effect was to make EVERYTHING on a canvas element instead of normal DOM elements, but then the text wouldn't be selectable and all the stuff CSS automates easily would become way too big of a project. I physically couldn't think of any reasonable way to get this effect, but clearly the original site had it, so I eventually looked into the source code defeated and I was greeted with the most ingenious, nasty technique. The way they achieve numerous effects on the site is actually the same technique implemented in different fashions. They create the main body of the site, and then they *duplicate the ENTIRE body into clone elements with the desired modifications/alterations*, and then they crop it down to where they want the effect to show and hide the rest with 'overflow: hidden'. It's the most disgusting but genius thing.</p><br><p class=\\\"blogtextlist\\\">- This explains why they have no scrollbar because they have the ENTIRE body cloned twice into the top page distorted crop/view AND the bottom page distorted crop/view. If they utilized vanilla scrolling and *kept the scrollbar as I suggested*, the page would have 3 scrollbars because there are technically 3 entire bodies on the screen. The same thing happens with the nav menu to get the 'circle changing color on hover' effect. They just have an ENTIRE duplicate of the navbar with different colors that they crop into a circle shape to make you THINK it's the same cursor, but it's actually no cursor circle at all and an entire duplicate of the whole nav.</p><br><p class=\\\"blogtextlist\\\">- The side effect of these duplication techniques is changing anything is at minimum probably slightly annoying (thanks to the utility of React componentization helping) or depression onsettingly difficult. Not only do elements need to be duplicated, but all functionality needs to be replicated across all duplicates as well from scrolling to hover effects to picture spawning.</p><br><p class=\\\"blogtextlist\\\">- That was one thing which I was the MOST surprised about. When images spawn under your cursor at the top of the page, and then you scroll jiggle the page down and up (making the duplicate skewed views show up at the top and bottom of the page), the images which spawn are in the same exact locations with the same momentum with the exact CSS transition state in the original body and the duplicated bodies. I was VERY impressed by that level of dedication. I wonder if they have developed some ingenious replication system which automates it at all or if they tediously did each and every thing by hand.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Shortcomings3 = {
  id: "",
  text: "<br>Although I did address some issues improving on the original, it feels unfair to not also acknowledge the shortcomings of my version.<br><br><p class=\\\"blogtextlist\\\">1. No Top/Bottom Distortion. This was the biggest, most direct failure of them all. I thought adding an overlay of distortion on scroll would be exceptionally straightforward and easy. The more I learned, and the more I experimented, the more I came to realize this single piece of functionality is the driving force behind the original website handling so many things so strangely. I eventually gave up and looked at their source code, and I could replicate it with enough time, but not only would that be cheating and going against the original spirit of this endeavor, that would simply be overkill and I don't believe the time investment would be worth the point proven. At the end of the day, I learned very useful new things about CSS 3d transforms and perspectives I didn't know before and that's enough for me and the whole point of everything. For what it's worth, I did technically fail this goal of replication though so I'm including it as a shortcoming.</p><br><p class=\\\"blogtextlist\\\">2. Nav Menu Circle Color. Because of using a simpler technique of 'mix-blend-color' vs replicating my entire nav menu visually and functionally 1-to-1, when you hover the white circle cursor over the nav menu the circle becomes the opposite of the background (which is not always white) unlike the original site. I think the trade-off in engineering time vs aesthetic is fine, though again to be fair this is technically a failed point of mimicry.</p><br><p class=\\\"blogtextlist\\\">3. Font Choice. The name at the head of the original site uses a commercial font which I refuse to pay for. My free alternative is close, but not exact and also doesn't offer the 'font-weight' diversity of the paid one so my font looks a bit bolder.</p><br><p class=\\\"blogtextlist\\\">4. Page Content Missing. I didn't replicate all the content going down the length of the page, and as such my page is shorter just to prove the point and the background transitions are a bit more in your face because of it. 'Taking inspiration' from the whole page was simply out of scope for the project though.</p><br><p class=\\\"blogtextlist\\\">5. Nav Strikethrough Gross. The way I made the nav strikethrough has the line uncentered and it just looks aesthetically off while functionally doing the same thing. It's also not animated left to right and just shows up. To improve, I could animate an actual line that's separate but coincidentally the same color across and behind the text.</p><br><p class=\\\"blogtextlist\\\">6. Nav Cursor Growth Worse. My nav cursor grows on hover, but it doesn't overshoot and then shrink to the desired size. It's just a straight growth from original to target. I think the original site's animation of overshooting looks better.</p><br><p class=\\\"blogtextlist\\\">7. Initialization Animation. Much like idea 1 and 2, I did not overanimate the entire page on initialization as the scope of this project is merely blocking out specific functionality.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Idea3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://imgur.com/mzB2vjD.gif\\\",\\\"https://imgur.com/Rf7R338.gif\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://imgur.com/mzB2vjD.gif\\\",\\\"https://imgur.com/Rf7R338.gif\\\"]"
}
const BlogHeaderProps_Idea4 = {
  id: "",
  text: "Idea 4: //TODO",
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
const BlogTextProps_Idea4 = {
  id: "",
  text: "I will be ending this project here. I feel I have achieved a level of recreation I set out for upon starting it, and have invested like three days into it. It is time to move on. If I were to continue this endeavor though, I do have ideas!",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Idea4_1 = {
  id: "",
  text: "<br><p class=\\\"blogtextlist\\\">- <a href=\\\"https://neptunes.dora.run/\\\" style='color: rgb(115,204,168)'>ChatGPT, Midjourney, + Parallax</a>. I have seen an explosion in AI integration into workflows, and I saw one project which used ChatGPT to create the text prompts, Midjourney to create the graphics (which they used Photoshop to refine and combine into a cohesive scene, as well as crop out characters), and then parallax on scroll effects to create an INSANE looking storyboard site. That would be really cool to try to imitate. I was actually going to include it officially as being a finished part of this 'mimicry endeavor' but Midjourney now costs money and I'm cheap and the free alternatives gave... uh... utterly 'not good looking' graphics in comparison. So the whole idea was scrapped. Side Note: The original site was developed using Dora which automates a lot of interesting 'on scroll effects' with *no code*, but it's NOTORIOUS for having horrible responsiveness. If the url of it wasn't a good enough giveaway, you can also tell because the size is predefined specifically for a macbook instead of a normal desktop experience and I had to zoom in to make the gif look proper below. But the idea itself is still cool regardless of if the original was made by someone with no coding knowledge using a questionable tool!</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Idea4_2 = {
  id: "",
  text: "<br><p class=\\\"blogtextlist\\\">- <a href=\\\"https://albinotonnina.com/\\\" style='color: rgb(115,204,168)'>Scrolling 3D Storyboard</a>. I've seen a few people do this, and I know it's more a test of graphic design capabilities over code monkey integration, but I'd still enjoy trying to replicate the functionality! It being so dependent on graphic design skill, however, it was cut from the project's scope.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogTextProps_Idea4_3 = {
  id: "",
  text: "<br><p class=\\\"blogtextlist\\\">- <a href=\\\"https://lynnandtonic.com/\\\" style='color: rgb(115,204,168)'>Resizing Window Animation</a>. Like the last idea, this is also moreso a test of graphic design skill than code monkey integration so it was cut from the scope. Unlike the last idea, however, I have NEVER seen anybody aside from this single individual do this effect. This isn't popular, and to me that's what makes it so cool. EDIT FROM THE FUTURE: Apparently the website's creator has changed their site with no apparent way to easter egg the original design back into functionality :( Sad times.</p>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Idea4_1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/T0Dia0n.gif",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/T0Dia0n.gif"
}
const BlogImageProps_Idea4_2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/b3iXxC5.gif",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/b3iXxC5.gif"
}
const BlogImageProps_Idea4_3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://imgur.com/aa6PZo5.gif",
  //
  enablephone: "true",
  srcphone: "https://imgur.com/aa6PZo5.gif"
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
      <BlogImage {...BlogImageProps_Divider} />
      <BlogHeader {...BlogHeaderProps_Idea1} />
      <BlogText {...BlogTextProps_Idea1} />
      <BlogText {...BlogTextProps_Improvements1} />
      <BlogText {...BlogTextProps_Final1} />
      <BlogImage {...BlogImageProps_Idea1} />
      <BlogText {...BlogTextProps_Shortcomings1} />
      <BlogImage {...BlogImageProps_Divider} />
      <BlogHeader {...BlogHeaderProps_Idea2} />
      <BlogText {...BlogTextProps_Idea2} />
      <BlogText {...BlogTextProps_Improvements2} />
      <BlogText {...BlogTextProps_Final2} />
      <BlogImage {...BlogImageProps_Idea2} />
      <BlogText {...BlogTextProps_Shortcomings2} />
      <BlogImage {...BlogImageProps_Divider} />
      <BlogHeader {...BlogHeaderProps_Idea3} />
      <BlogText {...BlogTextProps_Idea3} />
      <BlogText {...BlogTextProps_Improvements3} />
      <BlogText {...BlogTextProps_Lessons3} />
      <BlogText {...BlogTextProps_Final3} />
      <BlogImage {...BlogImageProps_Idea3} />
      <BlogText {...BlogTextProps_Shortcomings3} />
      <BlogImage {...BlogImageProps_Divider} />
      <BlogHeader {...BlogHeaderProps_Idea4} />
      <BlogText {...BlogTextProps_Idea4} />
      <BlogText {...BlogTextProps_Idea4_1} />
      <BlogImage {...BlogImageProps_Idea4_1} />
      <BlogText {...BlogTextProps_Idea4_2} />
      <BlogImage {...BlogImageProps_Idea4_2} />
      <BlogText {...BlogTextProps_Idea4_3} />
      <BlogImage {...BlogImageProps_Idea4_3} />
      <BlogFooterGap />
    </>
  )
}
