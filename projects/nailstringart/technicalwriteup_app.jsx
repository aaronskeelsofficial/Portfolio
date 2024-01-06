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
  text: "Nail String Art Writeup",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_V1Iterations = {
  id: "",
  text: "1. V1 Iterations",
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
const BlogTextProps_V1Iterations = {
  id: "",
  text: "The V1 philosophy was simple: \\\"I have no clue if this is going to work and am only pursuing it kinda as a joke, so let's make the joke even bigger (and keep UI simple) and make the program in JavaScript :)\\\". So that's where the story begins.<br><br>The pseudo-flow of the program would be the following. We have an input image. We convert that to grayscale by averaging RGB values. We then use built-in JS functionality to draw it (resized if necessary) to a target canvas of resolution x by x. This x resolution is important, as this resolution represents the resolution at which all our computations are done at. Increasing it exponentially increases compute time as well as storage necessary. The user will input a nail number n which will create n equally spaced nails along the circumference of the circle. The program then uses a greedy algorithmic logic to constantly pick the best \\\"next\\\" string from the last nail arrived at. This algorithm's functionality was initially undecided in terms of specifics so this was in the air. The specific which was initially mapped out was that the algorithm would use a precomputed set of all 'deltas' every unique string combination could yield, essentially a group of n images all representing which pixels drawing a certain string would affect and how much. So if you have 250 nails, that makes (250 choose 2) unique strings times the compute space x by x arrays of 'influence' and you got a lot of data cookin.<br><br>So Mk. 1 of V1 worked (if I remember correctly), but not very well and every aspect of it was gruesomely slow.<br><br>Mk 2. I believe I made some data structure alterations for comprehension and utility. This version had a 'scoring' algorithm which tended to overdraw greatly.<br><br>Mk. 3 is when the precomputed influence map was sped up greatly by implementing a 'bounding box' method where when calculating the distance from any pixel (point) to a line (string), I would simply ignore the calculation entirely if the pixel wasn't even in the bounding box of the string. This update's whole goal was speed improvements, so I'm sure the code was filled with tons of pre-allocations and buffers and all that good stuff. At this point, I was pushing the limits of what JS could do in terms of space (2 GB maximum file parsing and object allocation). Instead of precomputing the 'string influence map' EVERY time I wanted to draw anything, I wanted to save and load the map to a flatfile. I quickly hit the 2 GB limit and worked around it by breaking it apart into numerous 2 GB files, but parsing through them with JSON not only was excruciatingly slow but also took more than 2 GB to do. If I wanted to save and load to files it would need to be in batches of 1 GB and that simply was ridiculous given my approach to all the influence maps being entire images of 'score deltas'. Here is when I decided to move to Java. Also, JavaScript has a bug in its canvas drawer. Drawing lines of width 1 does NOT actually have width 1 because of diagonals. It seems to use a 'distance from point to line' approach, and a width of 1 actually checks for distance of .707 or whatever, but JS does not know this so it colors in every diagonal yielding lines that are 2 px sometimes 3 px wide when you specify a width of 1 px. This bug tainted all calculations fundamentally and permanently and could not possibly have been overcome in JS.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_V2Iterations = {
  id: "",
  text: "2. V2 Iterations",
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
const BlogTextProps_V2Iterations = {
  id: "",
  text: "Mk. 1 V2 was approached much more knowledgeably having already faced the errors and lessons in JavaScript. I initially went simple and basically ported exactly what I had in JS over to Java, though using more efficient Java data structures where possible. My main goal in porting to Java was unlocking a larger compute space resolution by bypassing object storage limitations. My computer has 32 GB of ram after all, let me use it. My JS program I believe was capped at 100x100 resolution if I'm not mistaken. I found an online GitHub nail string project which seems to be what everyone else uses so it became what I compared my own work to. Looking at its source code, it handled a 500x500 compute resolution. I wanted 1000x1000 to really shove it in their face. I ran quick math and concluded that I should only need ~3 GB to store all the precomputed influence data for that, so I configured my project, hit go, and boom heap allocation error. Run it again, error. What the heck? Run it again, error. I check how much ram it's using, and it's maxing out at ~8 GB. Stupid Java why aren't you using all the ram I've allocated to you? And why is it using 8 GB it should only need 3? I rerun my calculations... I was off by a multiple of 10. It requires THIRTY TWO gigabytes of ram for all that precompute. Whoops.<br><br>Thus came Mk. 2. I needed an entirely new approach to how I handled precompute data if I was going to possibly work with resolutions above garbage. I decided on a HashMap of the following structure: 'Map[String, Map[Integer, Byte]]' aka '[String Identifier, [Pixel Number, Influence Amount]]'. Using this data structure, I would only store entries in this map of pixels that actually HAD nonzero influence. This worked wonders. I could cram 250 nails (250 choose 2) worth of 1000x1000 compute resolution data into ~1 GB (much less than 32 GB for those of you bad at math). Not only that, but speed became comparable to JS.<br><br>'Speed became comparable' I last said, however the speed was still disgustingly slow. There is no way I could process 500 strings in reasonable time let alone 1000 or numerous thousands. With this compute resolution, the required strings for a proper image skyrocketed, and at this pacing I'd need the program to run for days for any output. I tried to pre-allocate and buffer every variable I possibly could to no avail until I found the issue.<br><br>Mk. 3 was born when I discovered that every single time I was calculating the 'score' of each string when deciding the overall best 'next' string, I was RELOADING the current compute space's values into their buffer along with the target values. These buffers only had to be loaded once for each 'next best string' iteration, yet they were being reloaded across every string considered. Changing these two lines shot performance through the ROOF and I could now compute ~14k stringed pieces at 250 nails 1000x1000 compute space resolution in around 5 minutes. I was expecting to find performance improvement, but never on this scale. This was absurd. With this, I could practically live tune the variables in my 'string scoring' algorithm.<br><br>And thus we approach Mk. 4. Mk. 4 was intended to address algorithmic customization. The more images I ran through my algorithms, the more I realized it is not a one and done sort of deal. Some pictures don't draw enough, some overdraw, some draw completely wrong, etc even with the same algorithm. To draw a good nails string art picture, you need an algorithm that suits the individual case by case images input. So I updated my program to allow the following configurable weights:<br>1. Transition Underdrawn Score: This represents the score encountered upon which the deltaValue leads to a transition to/beyond targetValue (character fill)<br>2. Transition Overdrawn Score: This represents the score encountered upon which the deltaValue supercedes the targetValue during a transition (character fill)<br>3. Overdrawing Pitch Black Score: This represents the score of the pitch black pixels influenced (background)<br>4. Complete Overdrawing Score: This represents the score drawing where we have already surpassed targetValue from the beginning (overdrawn character)<br>5. Avoid Encountered Score: This represents the score of how many \\\"avoid\\\" pixels are encountered (assumed grayscale value = 20)<br>6. Raw Positive Influence Score: This represents the entire amount of influence still missing. This is good for prioritizing painting where larger gaps in delta exist<br>7. Raw Negative Influence Score: This represents the entire amount of influence abundance. This is good for prioritizing avoiding painting where larger gaps in delta exist",
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
const BlogHeaderProps_IRLIterations = {
  id: "",
  text: "3. IRL Iterations",
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
const BlogTextProps_IRLIterations = {
  id: "",
  text: "I have a rich history with software, and programming allows you to (relatively) easily and swiftly deroot functionalities and alter them significantly. I knew going into IRL threading that I would be at a severe disadvantage as I know very little and every mistake will likely cost me considerable amounts of money, sanity, and time. I tried to consider as many problems as I could prior to facing them and account for them ahead of time, but I ran into issues anyway. The initial plan was to buy a 12\\\" wooden ring from Michaels as my calculations converting the simulated pixel space to real life physical space suggested it should be ~8 inches with the string I was considering (which I swapped last second). I also chose 2\\\" nails not from any calculating, but simply due to the fact I didn't know how much length I'd need to hold all the string layer by layer. Finally, I precomputed how much string I'd need and came out to a little over 2000 yards for 14k strings of the image I chose. I initially wanted a really large like 25k yard spool from downtown Los Angeles, but I couldn't wait to start working on the project so I rushed to Walmart and bought the ONLY polyester cone spool (3k yards) I could find in a 15 mile radius.<br><br>Before even purchasing the materials, my inexperience shone through like a beacon out to sea. At Home Depot I thought I would just purchase nails, but because I am self aware of my ignorance I asked a worker what he thought I should do as an approach to put nails in the ring. He taught me that wood splinters (I should have known this from the past, yet it just didn't cross my mind). He suggested buying certain nails, and said something about buying screws that I would pretap into the wood to prime the nail hole to avoid splintering. So I went and picked out nails AND screws after asking ChatGPT about the diameter suggestions of screws to prime the hole for the nail. I asked a different employee, and he explained to me that what I interpreted as screws were ACTUALLY drill bits and not screws at all. So now I had nails, screws, and drill bits. In a last second thought, I was like \\\"well I don't need BOTH the screws and the nails so I'll just put one back. The screws will probably stay in the wood surdier so I'll use them.\\\" This last second thought would be damning because what I wasn't considering was the diameter of the screw threads and the even LARGER diameter of the screw head. So I got home, spent a day and night straight in two passes drilling progressively larger holes (my wooden ring was really cheap and I was fearful of splintering now). I put the screws in and immediately realize it's not going to work. The density and cramming was way too insane. Not only was the wood splintering, but I factually even leaning the screws misaligned could not fit them all in the spacing necessary for 250 nails around a 12 inch ring. So last minute, I realized toothpicks happen to fit the predrilled holes perfectly. I worried nails wouldn't stay in the holes friction fit, but toothpicks allow me to use wood on wood glue for adhesion. I didn't want to waste toothpicks so I cut them in half to prevent waste (bad idea). Put them in. Applied wood glue.<br><br>This decision would grow to haunt me for numerous reasons. Firstly, the toothpicks grew to not be long enough and the strings continuously pulled over the tip with tension. Secondly, the toothpicks are literally shaped incentivizing the strings to slip off their top. They are angled as such and have no 'head' like a screw or nail. Thirdly, they are too flexible and the more strings, the more tension, the more they leaned and further incentivized strings to slip off. Fourthly, they splinter far too easily and when trying to ride the string down the shaft they would regularly get caught requiring tweezer intervention to overcome the frictional spot. This, among many other problems, came up.",
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
  text: "4. Improvements For Future Endeavors",
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
  text: "I don't intend on ever doing this again, but in case anyone else does or I change my mind, here is what I would do differently:<br><br><p class=\\\"blogtextlist\\\">- Use a larger radius ring. 12 inches lined up according to my calculations, but everything would have been so much cleaner with a larger ring. Maybe 18 inch. The larger the ring, the exponentially more string is required, but it's still necessary in my opinion.</p><br><p class=\\\"blogtextlist\\\">- Use a sturdy material for your ring. Do not use flimsy corky wood. It splintered, it flexed, and it ultimately bent slightly from the LIGHT tension of the strings on the toothpics (it had to be light tension or the toothpicks would flex, but preferrably higher tension is better for alignment).</p><br><p class=\\\"blogtextlist\\\">- Use decently long bodied nails if not heavy duty brackets. Screw threads will catch the nails preventing easy sliding down their shaft, and toothpicks are just bad in so many ways.</p><br><p class=\\\"blogtextlist\\\">- I'm still not sure the ideal fix for this, but a problem which arose which I didn't anticipate (sillily) was as the strings begin to cover the face of the circle, they block light from entering and reflecting off the backplate which is meant to act as the 'white' in the image. Looking at shadows through the strings yields a black on black image. For a good visual one MUST think of some sort of well lit backplate setup (or opt to consider the 'hidden picture' a feature instead of a bug, and have it only show itself when you hold the piece up to a window or light source).</p><br><p class=\\\"blogtextlist\\\">- Luckily I thought of this accidentally before starting, but ensure your numbering system for your nails/pegs is along the OUTSIDE of the ring. I initially marked the inside because 'people wouldn't be able to see that when it is done', but what I overlooked with that plan was that *I* would not be able to see the markings while I was making it either. Mark the outside.</p>",
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
      <BlogHeader {...BlogHeaderProps_V1Iterations} />
      <BlogText {...BlogTextProps_V1Iterations} />
      <BlogHeader {...BlogHeaderProps_V2Iterations} />
      <BlogText {...BlogTextProps_V2Iterations} />
      <BlogHeader {...BlogHeaderProps_IRLIterations} />
      <BlogText {...BlogTextProps_IRLIterations} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogFooterGap />
    </>
  )
}
