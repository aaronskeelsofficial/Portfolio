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
  text: "Fourier Series Art",
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
  srcpc: "https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/FlyDCJets_Original.png",
  //
  enablephone: "true",
  srcphone: "https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/FlyDCJets_Original.png"
}
const BlogVideoProps_Example = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://youtube.com/embed/JrOHP0khMFA",
  //
  enablephone: "true",
  srcphone: "https://youtube.com/embed/JrOHP0khMFA"
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
const BlogTextProps_Purpose1 = {
  id: "",
  text: "The past few weeks my YouTube recommendations have been flooded with '#SoME3' videos, a competition and friendly event held intended to push creators to post interesting and eye-opening math videos. I continuously came across two areas of math which I have previously been exposed to, but hadn't done much of a *deep* dive of interest yielding complete comprehension yet. They were: Fourier/Laplace Transforms and Complex Numbers. While watching one video on the Fourier Series, they included <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fourier_series_square_wave_circles_animation.gif/224px-Fourier_series_square_wave_circles_animation.gif' target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">a visual of the decomposition of a square wave into constituent frequencies by drawing circles independently rotating and then superimposed.</a>",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogImageProps_Purpose1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fourier_series_square_wave_circles_animation.gif/224px-Fourier_series_square_wave_circles_animation.gif",
  //
  enablephone: "true",
  srcphone: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fourier_series_square_wave_circles_animation.gif/224px-Fourier_series_square_wave_circles_animation.gif"
}
const BlogTextProps_Purpose2 = {
  id: "",
  text: "That amazed me. Immediately I thought 'But what about input signals which are more... creative?' Not only that, but also 'What if we did this independently for an x and y axis, and merged them to get a recreated drawing of any input image?' I simply looked the idea up out of curiosity to see if anything has been posted on it, and unfortunately I am not the first human to have this idea. I AM, however, one of very shockingly few who have had the idea, pursued to implement it into software, and posted about it online. I found four other people who have uniquely done this. One is arguably <a href=\\\"https://www.youtube.com/watch?v=r6sGWTCMz2k\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">the largest mathematics YouTube channel in existence (3Blue1Brown)</a>, another is an equally <a href=\\\"https://www.youtube.com/watch?v=MY4luNgGfms&t=331s\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">A tier YouTube channel which does coding projects (The Coding Train)</a>, the third is just <a href=\\\"https://olgaritme.com/posts/drawing-with-the-fourier-series/index.html\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">a random person's *amazing* educational blog post (Olgaritme)</a>, and the fourth is a <a href=\\\"https://www.jezzamon.com/fourier/\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">separate person's equally *amazing* educational blog post (Jezzamon)</a>. There are a few many more posted online, but it is abundantly obvious who just stole the code from The Coding Train and posted it as their own without actually understanding the math or making it from scratch. An important note is I refused to look into how any of these other people performed the feat. I wanted to go in purely with the math I have learned from my random SoME3 YouTube videos, and figure out how to implement it myself as a means to better my knowledge of both Fourier Series and Complex Numbers. So yeah, that is the project. 'Can I draw a picture by reverse engineering the size, rotation, and frequency of spinning circles which will be stacked on one another and just allowed to go wild?' (Spoiler, yes... yes I can).",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_WhyUnique = {
  id: "",
  text: "2. Why My Creation Is Unique",
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
const BlogTextProps_WhyUnique = {
  id: "",
  text: "As I stated in the header, there are actually a decent number of these made online so what gives me the entitlement to call mine special and unique?<br><br><p class=\\\"blogtextlist\\\">- I did not steal a single line of code in any capacity, nor did I steal any other developer's approach in the creation of my software. I went into this with the intention of having an intimate thought experiment with fourier series and complex numbers, and that is what I did. 99% of the others I see who have done this online simply stole the code directly from The Coding Train, and you can tell by the unique visual style/implementation he chose (and the fact that many admit it transparently).</p><br><p class=\\\"blogtextlist\\\">- My version comes preconfigured with, and allows the configuration in the first place of, a lot of options which are visually very functional when creating graphical exports (more info on GitHub repo at bottom).</p><br><p class=\\\"blogtextlist\\\">- My version is open source in Java which is a much friendlier language yielding more export encoding/codec ease and freedom than those done in JS.</p><br><p class=\\\"blogtextlist\\\">- My version allows for straight image imports and runs computations on its end to pull out outlining contours (rather than requiring the user draw a 'path' themselves or import an SVG path).</p><br><br>Having done this all entirely independently from external inspiration allowed me to have better takes in places, but it also brought on shortcomings which I'll list now.<br><br><p class=\\\"blogtextlist\\\">- My project processes images using OpenCV's contour detection algorithm with absolutely no configuration. If your image works, it works. If it doesn't, then it doesn't. There is some pre-processing you can do manually to help the contour detection process, but ultimately it's not perfect and that becomes abundantly clear when trying pictures of humans oftentimes for example.</p><br><p class=\\\"blogtextlist\\\">- There are other drawbacks, but they are more technical and wouldn't be encountered by a typical end user.</p>",
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
const BlogHeaderProps_Process = {
  id: "",
  text: "3. Process",
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
const BlogTextProps_Process = {
  id: "",
  text: "The following are checkpoints along the progress. We start with the superposition of circles with frequency (-1,0,1) Hz aka 1's, then (-2,-1,0,1,2) aka 2's, then 3's, then 5's, 10's, 20's, 40's, 100's, and finally 300's (to learn the problem of over-accuracy instability).",
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
const BlogImageProps_Process = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_1%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_2%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_3%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_5%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_10%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_20%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_40%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_100%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_300%20Circles_Overlap.png\\\"]",
  //https://imgur.com/a/AQuN6m4
  //
  enablephone: "true",
  srcphone: "[\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_1%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_2%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_3%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_5%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_10%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_20%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_40%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_100%20Circles_Overlap.png\\\",\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt/raw/main/media/mickey_300%20Circles_Overlap.png\\\"]"
}
const BlogTextProps_Process2 = {
  id: "",
  text: "I don't know how clearly it can be seen, but try to notice how the accuracy peaked around circles to 40 Hz. After that, it's still decently accurate, but progressively gets more shaky and unstable. The smaller the contour path, and the more circles you include, the more unstable the drawing gets. This is because a level of accuracy is attempted to be reached which the computer simply can't handle. Lesson of this being: more is not always better! If you are trying to recreate your own images, keep in mind to refrain from cranking circle count hoping for more accuracy. In extreme cases, it can actually completely break the entire drawing.",
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
  text: "4. Results",
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
const BlogTextProps_ResultsV1 = {
  id: "",
  text: "The following are the results following the natural progression of me programming the software to allow for more and more complex imagery.",
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
const BlogVideoProps_ResultsV1 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "[\\\"https://www.youtube.com/embed/K2nnIA1M-8k\\\",\\\"https://www.youtube.com/embed/BNuywEUOWU0\\\",\\\"https://www.youtube.com/embed/lrAw6ASoqcA\\\",\\\"https://www.youtube.com/embed/qStOwcfLHBo\\\",\\\"https://www.youtube.com/embed/F2OKzzynvP8\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://www.youtube.com/embed/K2nnIA1M-8k\\\",\\\"https://www.youtube.com/embed/BNuywEUOWU0\\\",\\\"https://www.youtube.com/embed/lrAw6ASoqcA\\\",\\\"https://www.youtube.com/embed/qStOwcfLHBo\\\",\\\"https://www.youtube.com/embed/F2OKzzynvP8\\\"]"
}
const BlogHeaderProps_Source = {
  id: "",
  text: "5. Source",
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
  text: "GitHub Repo: <a href=\\\"https://github.com/aaronskeelsofficial/FourierSeriesArt\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogVideo {...BlogVideoProps_Example} />
      <BlogHeader {...BlogHeaderProps_Purpose} />
      <BlogText {...BlogTextProps_Purpose1} />
      <BlogImage {...BlogImageProps_Purpose1} />
      <BlogText {...BlogTextProps_Purpose2} />
      <BlogHeader {...BlogHeaderProps_WhyUnique} />
      <BlogText {...BlogTextProps_WhyUnique} />
      <BlogHeader {...BlogHeaderProps_Process} />
      <BlogText {...BlogTextProps_Process} />
      <BlogImage {...BlogImageProps_Process} />
      <BlogText {...BlogTextProps_Process2} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_ResultsV1} />
      <BlogVideo {...BlogVideoProps_ResultsV1} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
