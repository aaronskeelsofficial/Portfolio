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
  text: "Blackjack Simulator",
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
  srcpc: "/src/img/projects/blackjacksimulator/Example.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/blackjacksimulator/Example.png"
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
  text: "I had just gone to a Casino for my first time in Vegas with my family. I was fiending more of those dopamine hits. I, however, am also very financially responsible. So instead of losing all my money on an unhealthy addiction, I turned it into a passion project! I looked up statistics online, and I certainly found them... but none of the sources explained the process they underwent to *get* those strategic decisions. What are the assumptions? Are they assuming a single hand play with a full deck? Would there possibly be some change in chance if the entire undertaking of playing an actual game was followed through with? If I simulated the entire game, hand by hand, start to finish, initial buy in to bankrupt/profit how does that change things? Do their statistics take into consideration how bankrupting affects play? What if you oscillate into a win most of the time, but the oscillation is so extreme that you bankrupt very few hands in? Ultimately, I felt only a true simulation through and through would please my brain because I would know the assumptions and the process used to obtain the data.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Assumptions = {
  id: "",
  text: "2. Assumptions Made",
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
const BlogTextProps_Assumptions = {
  id: "",
  text: "I spoke my heart out about caring for what the assumptions were and what the process was, so what was *my* process and what were *my* assumptions? My cookie cutter foundations for a process were to have X amount of decks generated and shuffled into each other to be used through games (until empty in which case they are regenerated and reshuffled), an initial balance, a formula for buy in (which takes previous win/loss status, previous win/loss streak, and current balance as inputs), follow the known and loved rules of Blackjack (no insurance or side bets but splitting/doubling/hitting/standing allowed), and bankrupting freezes that simulation run. Basically, to find the best strategy rather than theorycrafting with mathematics without considerations for all the complexities of true gameplay states and balance traversals, I would just brute force *every* strategy and record the stats. I would run X simulations for X hands starting with X balance betting *insert formula here* per hand using *insert formula here* as strategy. Then the stats I recorded were varied. How many games were won vs lost? How much did the winning hands' average balances offset the losing hands' average balances, or vice versa. If you win less often, but the times you do win your average earnings are insane (volatility), that's significant. I also recorded the bankrupt percentage and the average hand at which bankruptcy happened. Typically, I'd be running around 10,000,000 full data points across all simulations and all hands played. Many hands being played on a single simulation instance doesn't matter because if you bankrupt early you get no data. Many simulations playing a single hand doesn't matter because that tells you nothing of how the game actually plays out (with especially a consideration to the interference of oscillations bypassing the bankruptcy point). So I tried to balance enough hands across enough simulations to get meaningful data. Long story short, the final stat was for each hand as the game played, I recorded the number of wins for each play option that was available (hit, split, double) per hand configuration. So for example, if player had a value of hard 12 and the house had a 6 showing I would run the code instructing the simulation to try hitting, run the simulation to try staying, and if they were two 6's creating the 12 then run the simulation attempting to split. An interesting note of my strategy building system, rather than staying simply \\\"I have 12 do I hit or stay\\\", I actually programmed it to run preconfigured moves in a row so I tested from \\\"I have 4 try hitting then reconsider next move off next result\\\" all the way to \\\"I have 4 try hitting 4 times in a row and then stay regardless of what results come up\\\". I thought it was more interesting to know the entire game's best strat based simply off your starting hand rather than reconsidering at each stage of hitting. It's definitely not *optimal* for winning the most, and I did get stats at each hand as well, but coincidentally the results overlapped. Both methodologies are what ended up giving the results spoken of in the next section.",
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
  whitespacephone: "nowrap"
}
const BlogTextProps_Results = {
  id: "",
  text: "I genuinely don't know how this is possible because I am quite confident they didn't arrive to results the same way I did, but I got the *exact* same results as <a href=\\\"https://wizardofodds.com/games/blackjack/strategy/calculator/\\\" style=\\\"color: rgb(115, 204, 168)\\\">WizardOfOdds</a> did. It made me happy because clearly there was significant backing to the validity of my methodology and it gave me a trust that my simulations were accurate/bug free (I fixed many bugs throughout the development cycle practically on accident which were hard to spot because testing every case possible manually was proving difficult). It made me upset though, because the entire movement was started by a distrust of these very statistics I was simply supporting. I still don't understand how their theorycrafting based off a first hand of a single deck translates so perfectly to 10,000 hands across 10,000 simulations across 10 decks which can all bankrupt through their oscillations.",
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
  srcpc: "/src/img/projects/blackjacksimulator/Odds.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/blackjacksimulator/Odds.png"
}
const BlogHeaderProps_Source = {
  id: "",
  text: "4. Source/Demo",
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
  text: "GitHub Source (As of Nov 16, 2022): <a href=\\\"https://github.com/aaronskeelsofficial/BlackjackSimulator\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
  text: "5. Problems",
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
  text: "<p class=\\\"blogtextlist\\\">- Many bugs. Programming 10,000 simulations that play 10,000 hands tends to produce... a considerable amount of data. A quick glance at this data makes it quite difficult to observe/notice bugs in the logic of the automated playing of Blackjack. Several times I had to manually run individual hands to test the outcome for what I knew it should be to ensure the logic was correct. Several times the smallest of bugs in the logic completely shifted the results of the simulations. Ultimately by the end I believe all bugs were either snuffed out or effectively negligible because my results lined up with the expected results, however.</p><br><p class=\\\"blogtextlist\\\">- No progress visual. This was moreso my user error rather than an issue inherent to the project, but because so much was happening I opted to go without a visual for progress through the simulations in any way. This left me simply watching the console waiting for output, hoping there were no recursive loops happening behind the scenes (there was *once* unfortunately).</p><br><p class=\\\"blogtextlist\\\">- Poor documentation. This project was guided moreso by immediate curiosity than reproducibility so perfection/comprehension of the source is likely extremely questionable even for myself.</p>",
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
const BlogHeaderProps_Closing = {
  id: "",
  text: "Closing Notes For Competent Devs",
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
const BlogTextProps_Closing = {
  id: "",
  text: "I am well aware I will get flak for the usage of \\\"0 == 1 ? true : false\\\" present in the image source at the top. So here are my arguments. Despite 0 implicitly equaling false and 1 implicitly equaling true, I don't like implicit typing. It makes me feel dirty. On top of that, I don't want to create the variables as simply blablabla = true because typing true takes four characters whereas typing 1 only takes one. So it's quick to change the setting on the fly, and it avoids implicit typing. Don't bully me too much.",
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
      <BlogHeader {...BlogHeaderProps_Assumptions} />
      <BlogText {...BlogTextProps_Assumptions} />
      <BlogHeader {...BlogHeaderProps_Results} />
      <BlogText {...BlogTextProps_Results} />
      <BlogImage {...BlogImageProps_Results} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogHeader {...BlogHeaderProps_Problems} />
      <BlogText {...BlogTextProps_Problems} />
      <BlogHeader {...BlogHeaderProps_Closing} />
      <BlogText {...BlogTextProps_Closing} />

      <BlogFooterGap />
    </>
  )
}
