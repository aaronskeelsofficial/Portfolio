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
import BlogVideo from '../blogvideo'

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
  text: "Plane Glide Contour",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Example = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Comparison.png",
  //
  enablephone: "true",
  srcphone: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Comparison.png"
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
  text: "One of my friends primarily jokingly suggested 'Hey Aaron, your next project should be something like this,' as he provided me with the video below this text segment. I was not originally going to take on the endeavor, however I found myself bored and sometimes jokingly investing effort to 'test the waters' turns into actual projects. In short, the video was of a commercial product which calculates and displays the area in which an aircraft can safely glide to for presumably emergency landings. The software offers many more features beyond just that, but my project initiative was to see how closely I could mimic their glide contour technology with relatively minimal effort. I didn't want this to be a huge project (and it wasn't). I just wanted to dip my toes and see where I could get. Also, this post will be slightly more technical than most as there isn't much utility nor 'artistic value' to speak of to a general audience. It is primarily a proof of concept, incompletely furnished tech demo. Overall, this project took three days to make start to finish (each 'stage' taking about a day).",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogVideoProps_Purpose = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://www.youtube.com/embed/xzzxEeDoS54",
  //
  enablephone: "true",
  srcphone: "https://www.youtube.com/embed/xzzxEeDoS54"
}
const BlogHeaderProps_Stage1 = {
  id: "",
  text: "2. Stage 1: Glide Sim",
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
const BlogTextProps_Stage1 = {
  id: "",
  text: "Stage 1 of the project was developing a working glide till landfall simulation. This has *significant* levels of variance in complexity depending on your simplifications, assumptions, and necessary simulation speed. The easiest (and fastest to compute) approach would have been to assume constant forward velocity, constant drop rate, immediate bank angle transitions, and all land is flat at sea level. All these simplifications have varying levels of observable effect on the output, however the most profoundly problematic is assuming that all land is flat at sea level. I feel this assumption would make the software functionally inept and ethically immoral to even consider releasing. For my sim I decided to assume constant forward velocity, constant glide ratio, immediate bank angle transitions, but implemented a functional heightmap integration. I tested implementing a shifting glide velocity and ratio in accordance to an approximation based off bank angle that I found in a textbook, but it had a fairly negligible impact on final contour and took more computation time than I thought it was worth (along with shifting my final contour away from the commercial shape).",
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
const BlogImageProps_Stage1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/BankAngleVariance.png",
  //
  enablephone: "true",
  srcphone: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/BankAngleVariance.png"
}
const BlogHeaderProps_Stage2 = {
  id: "",
  text: "3. Stage 2: Rotation Fixes",
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
const BlogTextProps_Stage2 = {
  id: "",
  text: "Stage 2 was a refinement stage. In stage 1, I strove for optimizations by avoiding actual coordinate space transformations for rotations and instead depending on basic implementations of trig where I thought necessary. Unfortunately, my glide simulation would require more in-depth calculations if the airplane was flying any direction other than... straight up. Whoops. So stage 2 was the rework incorporating proper mathematics for the functionality needed. Now the sim could function regardless of direction the plane was flying. A side note, the third picture below has a circle. This is because my eyes were lulled into an optical illusion that the plane flight paths were a farther radius when turning than if the plane simply flew straight (which is impossible neglecting wind influence). So this was proving to myself that my simulation is not blatantly faulty.",
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
const BlogImageProps_Stage2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B0.0%2C1.0%5D.png\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B1.0%2C0.0%5D.png\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B1.0%2C0.0%5D_ring.png\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B0.0%2C1.0%5D.png\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B1.0%2C0.0%5D.png\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/Glide_5.0_%5B1.0%2C0.0%5D_ring.png\\\"]"
}
const BlogHeaderProps_Stage3 = {
  id: "",
  text: "4. Stage 3: Heightmap Integration",
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
const BlogTextProps_Stage3 = {
  id: "",
  text: "Stage 3 was integrating heightmap data into the sim. I thought I had incorporated this in a minorly functional capacity from the beginning, however I was wrong as my integration was pretty buggy. I imagined by the end product, heightmaps would be acquired from SOME source as a grid of data points spread apart some delta technically in terms of longitude and latitude but I would turn them into x-y. Unsure of the delta, or the actual mapped point layout, I had to decide on a data structure which allowed me to easily interpolate between existing points effectively and optimally. I decided on using a KD Tree which I had never heard of previously, but having discovered it for this project realized how extremely useful it is. In short, I would find the two nearest neighbors to my sample point (using KD Tree) and then interpolate using an inverse distance weighted linear approach. The example image below shows a 'mountain'-esque cone and completely unrealistic flat plane of increased height where brightness of white pixel indicates larger height.",
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
const BlogImageProps_Stage3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/HeightmapSample.png",
  //
  enablephone: "true",
  srcphone: "https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/HeightmapSample.png"
}
const BlogHeaderProps_Results = {
  id: "",
  text: "5. Results/Comparison",
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
  text: "Below are quickly 'animated' versions of my simulations. The animation isn't the highest quality, but it also wasn't the point. The point was simply to show how many frames/simulations can be completed per second to compare against the original's performance.",
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
const BlogImageProps_Results = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/PlaneGlideContour%20-%20No%20Heightmap.gif\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/PlaneGlideContour%20-%20Heightmap%20Considered.gif\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/PlaneGlideContour%20-%20No%20Heightmap.gif\\\",\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour/raw/main/Media/PlaneGlideContour%20-%20Heightmap%20Considered.gif\\\"]"
}
const BlogTextProps_Results2 = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Simulation Hz: Looking at the original video, with heightmap considerations turned off they get an update cycle of ~3.5-5 Hz (it is variable). The original, with heightmap taken into account in calculations, has an update cycle of ~1.5-2.6 Hz. In comparison, my program gets ~52 Hz and ~6 Hz without and with heightmap considerations respectively. Note: In my visualization above of simulation without heightmap consideration, it shows 26 Hz but that is simulating both halves of the contour when in reality one only needs to simulate a single side and mirror it across the plane's front-to-back line of symmetry. Also of note: My higher Hz may be a byproduct of running this software on a modest-end gaming computer rather than an iPad like the original.</p><br><p class=\\\"blogtextlist\\\">- Contour Comparison: The ultimate question of this whole endeavor is 'How well can I mimic this commercial software?' One thing to analyze is the result of our actual glide simulations via comparing contours. I immediately notice the tail end of the contours match nearly identically without heightmap consideration (raw simulation output w/o heightmap influence). However, something that stands out like a sore thumb is the nose end of the contour. The original's seems to come to a very slight point at the front. I sat and tried to think of what simulation assumptions they are making that would POSSIBLY yield such a set of trajectories. I couldn't think of anything. The one assumption that I made intentionally for sake of compute time vs accuracy was in a real bank, the optimal glide speed is raised. When I simulated with this accuracy implemented, even then I didn't get a pointed front. It was always round. Whether my simulation is wrong or theirs is (likely mine if we're being real), I don't have the education to tell, but there is clearly a difference. Comparing our heightmap considered contours, you can't really do a one to one. They have accurate heightmap data, and I have a 100% artificially simulated mountain and plane with no volatility.</p><br><p class=\\\"blogtextlist\\\">- Contour Wind Shift: One arguably important missing piece of functionality the original claims which I didn't recreate is 'wind shift'. There is a very important reason why. I don't have the original software on hand to experiment and figure out how it actually functions, but I believe it's a complete facade of competence that actually puts people at risk. When wind shift is enabled in the youtube video, the resulting contour has the same update cycle Hz as when it's off. It also looks immensely similar to when wind shift was off. I suspect rather than *genuinely incorporating live wind readings into their full glide simulation step by step until landfall*, they are just simply and literally shifting the contour curve to the side. This is dangerous because it doesn't take new heightmap data into account. What if the contour 'simply shifts' *into the side of a mountain*? I didn't recreate this functionality because I don't believe they're truly having wind influence their simulation, and if my suspicions are right incorporating what they have is actually more dangerous than not offering it at all as that implementation gives misinformation rather than lacking information.</p><br><p class=\\\"blogtextlist\\\">- Glide Buffer: Another feature which they have and I didn't emulate is a buffer for increasing factor of safety. They basically intentionally gimp the total possible flight range. I could have implemented this very easily, and to be honest just didn't think of it before wrapping up the project.</p><br><p class=\\\"blogtextlist\\\">- Heightmap Resolution Density: I don't know the traditional density of actual landmass heightmaps, but in my simulation I used a density of 1 cubic set of data points per 7.7 m^2 (25 ft^2).</p><br><p class=\\\"blogtextlist\\\">- Heightmap Interpolation Data Structure: For my heightmap interpolation, I shared that I used a KD Tree. I should also share that I simply swooped someone else's implementation found online rather than coding my own (which is a LARGE part of all the projects I work on). I decided not to program my own because a significant focal point of this project was the direct comparison in performance to the original commercial software. I could have programmed a textbook KD Tree myself, though with performance being of concern, I decided to go with one of the HIGHLY optimized versions others have spent their sweat and tears constructing before me. When looking at comparison benchmarks, the performance spikes from using ignorantly made implementations to using expertly crafted and insanely complex implementations can't be understated or ignored.</p><br><p class=\\\"blogtextlist\\\">- Simulation Assumptions Used: For sake of transparency and setting the scene, the assumptions I use in my simulations are the following. Simulation timestep = 1s (I feel this can be increased DRASTICALLY to skyrocket performance as the total glide time is like ~900 seconds, descent is linear, and touchdown interpolation is linear as well). Flying Altitude: 20k ft. Glide Ratio: 40 (I have since been made aware this is too large for commercial planes, however the only thing this would change is the radius of the contour relative to land which I scale to fit in the window anyway. No visible difference would be made with my implementation). Glide Speed: 486 knots. Bank Angle: ~20° (varies per test). Time Spent In Glide: 976s (~16 min).</p><br><p class=\\\"blogtextlist\\\">- Contour Crafting: Technically the data points I have are flight paths given varying time of bank (until the midline is crossed). The target output is a contour of the last points, however. I invested time into learning about splines, as I believed they would be a perfect fit to my problem (as experience with the pen tool in Photoshop would suggest). However, when looking into Apache Commons implementations you can only generate splines for strictly increasing/unique functions? I know for a fact you can make splines that do loopty loops. I could have looked into other spline generation libraries, or perhaps delved into making my own (which includes researching how to generate proper control points which felt like a sizeably large challenge), but instead I decided both of those were far beyond the scope of my project as simply connecting lines between the crash data points was enough for a smooth contour.",
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
  text: "6. Improvements",
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
  text: "<p class=\\\"blogtextlist\\\">- Glide Buffer: I honestly forgot to include this, but I'm sure it wouldn't be too difficult since I already have the data points for the full flight paths across varying bank times.</p><br><p class=\\\"blogtextlist\\\">- Dynamic Glide Speed: I could and in a commercial setting probably *should* have integrated glide speed being a function of bank angle. I actually tried a simplified approach given in a textbook where speed is increased 2% per degree of bank, but that didn't change the output much, and if anything made it less like the commercial software I was mimicking. There is a more advanced version which takes all the traditional specs of a plane in flight into account (such as wingspan, wing surface area, coefficient of drag, etc). I simply don't casually have access to that in my small scale tech demo so I didn't incorporate it here.</p><br><p class=\\\"blogtextlist\\\">- Live Heightmap/Satellite Footage: A true release of this software would very likely want at the very minimum live heightmap colors displayed if not a live satellite footage of the ground below. Ideally weather patterns would also be toggleable.</p><br><p class=\\\"blogtextlist\\\">- UX Implementations: Right now the software state is a tech demo of the simulation phase. State information is input, and a glide contour is output. There really is no semblance of user experience or proper user inputs. A true release would definitely need that.</p>",
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
  text: "7. Source",
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
  text: "GitHub Repo: <a href=\\\"https://github.com/aaronskeelsofficial/PlaneGlideContour\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogImage {...BlogImageProps_Example} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose} />
      <BlogVideo {...BlogVideoProps_Purpose} />
      <BlogHeader {...BlogHeaderProps_Stage1} />
      <BlogText {...BlogTextProps_Stage1} />
      <BlogImage {...BlogImageProps_Stage1} />
      <BlogHeader {...BlogHeaderProps_Stage2} />
      <BlogText {...BlogTextProps_Stage2} />
      <BlogImage {...BlogImageProps_Stage2} />
      <BlogHeader {...BlogHeaderProps_Stage3} />
      <BlogText {...BlogTextProps_Stage3} />
      <BlogImage {...BlogImageProps_Stage3} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_Results} />
      <BlogImage {...BlogImageProps_Results} />
      <BlogText {...BlogTextProps_Results2} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
