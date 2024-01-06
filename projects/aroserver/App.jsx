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
  text: "ARO Server",
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
  srcpc: "/src/img/projects/aroserver/1.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/1.png"
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
  text: "At the time of this project's creation, I was enrolled at Cal Poly Pomona for Aerospace Engineering and classes had all gone online for Covid. Every semester, random kids would make Discord servers for each individual class. They were incompetent at running them, moderating them, upkeeping them, AND there was just insanity trying to organize every class server for every semester. So I decided to make my own server with a twist. My server would be a hub which is fully autonomously administrated. The system would be a direct democracy where users within the server vote on important topics (such as adding/removing classes or kicking/banning malicious actors) and the autonomous backend robot is actually the entity with sovereignty to conduct the actions in the way the people vote. Voting integrity would be upheld by requiring phone verified accounts to join the server (you can make new accounts but they can't relink with the same phone number). When a vote were to be called, ALL participants of the server would be required to participate as a community endeavor (with all votes allowing yes/no/a third option basically stating \\\"this vote doesn't concern me\\\"). This *requirement* would be forced by removing access to all server channels for an individual until a vote participation has taken place, or after a vote's time had elapsed and the vote concluded, after which their access will be restored.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
const BlogHeaderProps_Features = {
  id: "",
  text: "2. Features",
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
const BlogTextProps_Features = {
  id: "",
  text: "<p class=\\\"blogtextlist\\\">- Forced rule reading upon initial join.</p><br><p class=\\\"blogtextlist\\\">- Server access locked behind direct invites. Users within the server must invite other members. The purpose of this is all members have a traceable list of connections. If one member continuously invites malicious actors, ban the source at the top of the list.</p><br><p class=\\\"blogtextlist\\\">- Server access locked behind phone verified accounts (not actually implemented atm). The purpose of this is when a malicious actor is banned, it simply permabans them on a much deeper level.</p><br><p class=\\\"blogtextlist\\\">- Fully autonomous administration functions. Almost all functionality is locked behind bot interaction or a vote which a bot executes. No actual human has any sovereignty on the server. I don't care to be responsible and I wanted the server to have the capacity to exist long beyond my existence at the school (though I never actually released it ironically).</p><br><p class=\\\"blogtextlist\\\">- Anti-cheating measures. There is a \\\"Test Mode\\\" the server can be voted into during which access to channels is temporarily stripped until the test mode has been voted out of. This is primarily intended for midterms and finals where students who follow honesty policy will vote the server into a state where no access to prior conversations or material is allowed. There is also a vote for \\\"End of Semester Wipe\\\". This is a one time event which is not able to be undone and wipes all class channels. Public, general channels permanently existing on the server maintain their general purpose content, but channels made specifically for classes are wiped.</p><br><p class=\\\"blogtextlist\\\">- The entire project was made through Replit which is an open source, free host. The purpose of this is ANYBODY can go in, fork the code, and make their own customized version of my server changing any aspects they disagree with.</p><br><p class=\\\"blogtextlist\\\">- A full list of features can be seen by reading the text in the example picture at the top of this page, as well as with the \\\"typical server experience\\\" example process I will show below.</p>",
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
  text: "Source: <a href=\\\"https://replit.com/@AaronSkeels/CPP-ARO-Master-Bot\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
const BlogHeaderProps_Walkthrough = {
  id: "",
  text: "Walkthrough",
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
const BlogImageProps_2 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/2.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/2.png"
}
const BlogTextProps_2 = {
  id: "",
  text: "Above, you can see the important first step a person does on the server. They read the rules and react with a 👍 emoji, earning them access into the #bot-commands channel.",
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
const BlogImageProps_3 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/3.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/3.png"
}
const BlogTextProps_3 = {
  id: "",
  text: "The next step is for an existing member of the server (this is my alt account) to generate an invite token. All membership into the server is logged publicly to give accountability and traceability to bad actors, and to give a means to ban the source.",
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
const BlogImageProps_4 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/4.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/4.png"
}
const BlogTextProps_4 = {
  id: "",
  text: "It should be noted that this message in response to my command, along with many other responses, are shown only to the user who typed the message. Public stuff remains public, but not at the expense of reasonable privacy.",
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
const BlogImageProps_5 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/5.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/5.png"
}
const BlogTextProps_5 = {
  id: "",
  text: "Now we switch back to the fresh account and submit the invite code.",
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
const BlogImageProps_6 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/6.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/6.png"
}
const BlogTextProps_6 = {
  id: "",
  text: "Successfully having joined with a proper, one-time use code, the server now logs the membership chain for transparancy and accountability. Another thing to note is all the new channels on the sidebar the user has access to. Having a successful code entered, they are now proper members of the server. There are many more channels a user can join, but one core tenant of the project was \\\"cleanliness\\\" and \\\"not having 1000 things thrown in users' faces\\\". Many features and areas are opt-in centered.",
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
const BlogImageProps_7 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/7.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/7.png"
}
const BlogImageProps_8 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/8.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/8.png"
}
const BlogTextProps_8 = {
  id: "",
  text: "Above is the opt-in channel. Here you react with the specified emoji to the message to gain access to those channels. Removing your reaction removes access and helps keep the UI clean.",
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
const BlogImageProps_9 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/9.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/9.png"
}
const BlogTextProps_9 = {
  id: "",
  text: "As an example of the functionality, here I opted into the #class-management channel and as such you can see the effects appear live on screen (indicated by arrows).",
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
const BlogImageProps_10 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/10.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/10.png"
}
const BlogTextProps_10 = {
  id: "",
  text: "Class management is a core part of the server. Adding channels for dynamic, per-semester classes is important. Having the entire experience be one ran democratically instead of by an incompetent server host requires a bit of explanation, so that's what this channel gives. The following pics will be showing off the class adding/joining process.",
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
const BlogImageProps_11 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/11.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/11.png"
}
const BlogImageProps_12 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/12.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/12.png"
}
const BlogTextProps_12 = {
  id: "",
  text: "This is the first example of a vote!",
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
const BlogImageProps_13 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/13.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/13.png"
}
const BlogTextProps_13 = {
  id: "",
  text: "As you can see, during a vote ALL users remove their access to ALL channels except for the vote channel and are pinged to participate. Once an individual has participated in the vote (intended to be a community driven process so participation is required/heavily demanded) they, as an individual, will receive their channel priviliges back. Once the vote ends and no simultaneous votes are running, all users are given their channel priviliges back.",
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
const BlogImageProps_14 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/14.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/14.png"
}
const BlogImageProps_15 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/15.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/15.png"
}
const BlogImageProps_16 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/16.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/16.png"
}
const BlogTextProps_16 = {
  id: "",
  text: "Once a class has been made, a user still needs to join it. I could have auto-enrolled them, but like I said a core tenant is keeping stuff organized and I didn't want to force decisions on people. Perhaps they're adding a class channel for a friend who isn't tech savvy, and the vote caller doesn't *actually* want to be enrolled in that channel.",
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
const BlogImageProps_17 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/17.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/17.png"
}
const BlogImageProps_18 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/18.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/18.png"
}
const BlogImageProps_19 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/19.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/19.png"
}
const BlogTextProps_19 = {
  id: "",
  text: "Once a general purpose \\\"class\\\" has been made with general purpose channels, users can then make specific one-off channels (within the same \\\"class\\\" folder) for their section or professor. This is useful since often times not every session even of the same class covers the same material.",
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
const BlogImageProps_20 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/20.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/20.png"
}
const BlogImageProps_21 = {
  id: "",
  //
  enablepc: "true",
  srcpc: "/src/img/projects/aroserver/21.png",
  //
  enablephone: "true",
  srcphone: "/src/img/projects/aroserver/21.png"
}
const BlogTextProps_21 = {
  id: "",
  text: "At the end of semesters, a wipe can be conducted if the people so choose. This will wipe all class channels entirely off the server but keep all general purpose channels in tact. This prevents cheating.",
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
const BlogHeaderProps_ClosingNotes = {
  id: "",
  text: "4. Closing Notes",
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
const BlogTextProps_ClosingNotes = {
  id: "",
  text: "I never actually released this project whether from intimidation of it potentially being taken in formally by the school and used campus wide, or from feature creep where I wanted to just keep adding things and never felt it was done. One feature I came up with was 'Opt-In Channels' to only show channels which a user had opted into seeing to prevent clutter. Recently, after all these years, Discord formally rolled out an update with that feature. But for the record, I implemented it first ✊😔 I don't think they'll add publicly traceable direct invite chaining because it's a 'security concern' but I think that would be monumentally helpful in negating bad actors.",
  fontfamily: "",
  fontsize: "",
  fontweight: "",
  color: "",
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
      <BlogHeader {...BlogHeaderProps_Features} />
      <BlogText {...BlogTextProps_Features} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogHeader {...BlogHeaderProps_Walkthrough} />
      <BlogImage {...BlogImageProps_2} />
      <BlogText {...BlogTextProps_2} />
      <BlogImage {...BlogImageProps_3} />
      <BlogText {...BlogTextProps_3} />
      <BlogImage {...BlogImageProps_4} />
      <BlogText {...BlogTextProps_4} />
      <BlogImage {...BlogImageProps_5} />
      <BlogText {...BlogTextProps_5} />
      <BlogImage {...BlogImageProps_6} />
      <BlogText {...BlogTextProps_6} />
      <BlogImage {...BlogImageProps_7} />
      <BlogImage {...BlogImageProps_8} />
      <BlogText {...BlogTextProps_8} />
      <BlogImage {...BlogImageProps_9} />
      <BlogText {...BlogTextProps_9} />
      <BlogImage {...BlogImageProps_10} />
      <BlogText {...BlogTextProps_10} />
      <BlogImage {...BlogImageProps_11} />
      <BlogImage {...BlogImageProps_12} />
      <BlogText {...BlogTextProps_12} />
      <BlogImage {...BlogImageProps_13} />
      <BlogText {...BlogTextProps_13} />
      <BlogImage {...BlogImageProps_14} />
      <BlogImage {...BlogImageProps_15} />
      <BlogImage {...BlogImageProps_16} />
      <BlogText {...BlogTextProps_16} />
      <BlogImage {...BlogImageProps_17} />
      <BlogImage {...BlogImageProps_18} />
      <BlogImage {...BlogImageProps_19} />
      <BlogText {...BlogTextProps_19} />
      <BlogImage {...BlogImageProps_20} />
      <BlogImage {...BlogImageProps_21} />
      <BlogText {...BlogTextProps_21} />
      <BlogHeader {...BlogHeaderProps_ClosingNotes} />
      <BlogText {...BlogTextProps_ClosingNotes} />
      <BlogFooterGap />
    </>
  )
}
