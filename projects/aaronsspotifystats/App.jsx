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
  text: "Aaron's Spotify Stats",
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
  srcpc: "[\\\"https://i.imgur.com/cLbCH9u.png\\\"]",
  //
  enablephone: "true",
  srcphone: "[\\\"https://i.imgur.com/cLbCH9u.png\\\"]"
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
  text: "Spotify has a complete monopoly on users' data and analytics, withholding it even from users themselves. Sure, they release a limited scope sneak peek once a year with wrapped, but I believe everyone deserves full, filterable, searchable, unrestricted access at all times. That is what this project aims to provide. Users make an account with my service, link their Spotify account, after which my service will regularly pull your spotify data and keep it in a database. Users can visit a website dashboard at any point to filter, search, and sort through their stats as they see fit. Anyone is free to run their own server of my service as well, so data privacy is prioritized as largely as one wishes.",
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
const BlogHeaderProps_WhatIsASSUser = {
  id: "",
  text: "2. What is Aaron's Spotify Stats as a User?",
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
const BlogTextProps_WhatIsASSUser = {
  id: "",
  text: "As a user, Aaron's Spotify Stats acts to provide you with instant and unrestricted access to your Spotify data and analytics. To use the platform first find someone hosting the service, sign up with an account, link your spotify account(s) by clicking the + in accounts, wait for the first scheduled data backup, and once your data is ingested you will have full access from '/dashboard'.",
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
const BlogHeaderProps_WhatIsASSHost = {
  id: "",
  text: "3. What is Aaron's Spotify Stats as a Host?",
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
const BlogTextProps_WhatIsASSHost = {
  id: "",
  text: `To host Aaron's Spotify Stats for yourself, friends, or strangers, do the following.<br><br><p class=\\\"blogtextlist\\\"> \
  1. Clone the repo to whatever machine will be running the server.</p><br><p class=\\\"blogtextlist\\\"> \
  2. Go to spotify's dev portal and login, then create a dev application.</p><br><p class=\\\"blogtextlist\\\"> \
  3. Inside the settings menu for the application you just made, add all the Spotify usernames and emails you intend to use your service to the whitelist.</p><br><p class=\\\"blogtextlist\\\"> \
  4. Get your external ip (perhaps from ipchicken.com) and add a redirect ip to the settings menu for the application you just made of 'http://EXTERNALIP:35565/authorizesuccess'.</p><br><p class=\\\"blogtextlist\\\"> \
  5. Port forward on your router. I can't explain how to do this because there is too many different menu standards for routers.</p><br><p class=\\\"blogtextlist\\\"> \
  6. Access the site via your external ip even if you are hosting locally as this is necessary for the spotify redirect to work properly. Everyone uses 'http://EXTERNALIP:35565'.</p><br><p class=\\\"blogtextlist\\\"> \
  7. Run 'cargo build --release' from a terminal in the root folder.</p><br><p class=\\\"blogtextlist\\\"> \
  8. Run the executable found in '/target/release' called 'aaronsspotifystats'.</p><br><p class=\\\"blogtextlist\\\"> \
  9. Manual data scrapes from spotify can be queued by visiting the '/testscrape' url endpoint.</p><br><p class=\\\"blogtextlist\\\"> \
  10. Congrats you're up and running!</p>`,
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
const BlogHeaderProps_WhatIsASSDev = {
  id: "",
  text: "4. What is Aaron's Spotify Stats as a Dev?",
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
const BlogTextProps_WhatIsASSDev = {
  id: "",
  text: `As a dev, there are a few key technologies and features that went into the development of this project.<br><br><p class=\\\"blogtextlist\\\">\
  - A pure list of the main technologies that go into this project are (Rust)/[JS]: (axum,pem,pkcs8,rsa,rusqlite,sha2,tokio)/[js-cookie,bcrypt,jsencrypt]</p><br><p class=\\\"blogtextlist\\\"> \
  - Account Credential Security. Due to hosts of this platform being likely to run on http rather than https, all network requests must be handled with utmost security due to plaintext transfers. An example of this is passwords are NEVER sent in plaintext at any point to the server. Clients will pre-salt and hash prior to submission for login or signup.</p><br><p class=\\\"blogtextlist\\\"> \
  - Counter-Man In The Middle Nonces. To counter repeat man in the middle attacks where an attacker duplicates the payload of a successful request to gain access themselves, each login is encrypted with a hidden one time use nonce. Even if a successful login is duplicated and sent again, it will no longer be valid the second time.</p><br><p class=\\\"blogtextlist\\\"> \
  - OAuth Minimal Scope. When a user links their Spotify account, deliberate consideration was made as to the allowed scope of the auth. Only the ability to get basic profile information (required by Spotify) and the ability to get recently played tracks are permitted. This is because auth tokens were not encrypted in the database for two reasons. One, I was lazy. Two, I used SQLite so there is no accessible database server. All manipulation is handled through hardcoded interactions with flatfile databases. There is little to no chance for an SLQ attack unless an attacker has full access to the server in which case you have bigger issues.</p><br><p class=\\\"blogtextlist\\\"> \
  - VERY Custom Searchability. I believe the focus of this project could have been on UI aesthetic, social features (comparing stats between friends), or functional stat searching. I chose to really lean into functional stat searching. I custom coded an expression parser allowing basic search dorking with parenthesis nesting, and (&), and or (|). So if a user wants to compare albums between taylor swift and beyonce, they can simply filter artist by 'taylor swift | beyonce' to get results from both. If they want to know how much they listened to albums in decreasing play count order from Kanye from May 2022 through June 2023, they can choose sort order by album play count and filter artist 'Kanye' and filter those start/end dates.</p><br><p class=\\\"blogtextlist\\\">`,
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
const BlogHeaderProps_Challenges = {
  id: "",
  text: "5. Challenges",
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
const BlogTextProps_Challenges = {
  id: "",
  text: "There were lots of developmental challenges overcame. The first was regarding the backend web host rust library. I tried probably 5 of them. Actix-Web and Axum were the only that functioned *at all*, but they had issues where requests would hang. After both having the same symptom, I decided to just call it a networking chain issue and not a software stack issue. Handling RSA encryption was a big pain as there are multiple standards of converting to encoded string format which no online sources really talk about at all, and which the js library I was using makes no mention of. So it took a lot of testing for my rust <-> js conversions to work properly. Crafting the signup/login processes from scratch for security with the insecure http protocol took a bit of time, but I believe I eventually got to an acceptably secure if not MORE secure than typical state. Spotify's OAuth was a pain because they force you to either formally apply for your dev app to be accepted officially to allow stranger's accounts to use your dev app, or you can manually add every user you want to be allowed to use it. They also deprecated a lot of cool API endpoints to stop AI from training on their data. They also have this weird interaction where some requests, your header needs to include a base64 encoded concatenation of your dev app id and secret. Why not just make them base64 character limit adhering when they give them to you? Why have the auth token passed raw, but randomly you need to concatenate these two strings AND base64 encode them? Weaving into and out of async functions through rust tokio was necessary because rusqlite is a synchronous library and I already started with it and didn't want to switch. I'm not hugely knowledgeable on tokio so this was a little rough with sketchy foundational knowledge of how it works behind the scenes. Making a UI once I've thought one up is very easy, but being creative and actually formulating what the UI should look like and do is difficult for me (but we got there). Handmaking the search/filter expression parser was decently difficult. I asked ChatGPT to do it because it felt so simple and dorking is a popular idea, but not matter what I said or how much I corrected the code it was simply nonfunctional. So I ended up making it myself from scratch. It took a few tries because nuanced stress testing kept revealing weird behavioral edge cases that simply were wrong. I believe the current iteration is bulletproof though.",
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
  text: `There are lots of potential improvements.<br><br><p class=\\\"blogtextlist\\\"> \
  - JSON Import. You can request *all* your data from Spotify and they send it over as a huge JSON file. This could be imported to include *all* your listening history to the database. This would be very simple and I would incorporate it, but like always dealing with imperfect humans is what ruins the fun. Should a user accidentally upload the wrong json file to their account, or the right json file to the wrongly linked spotify account (if they have multiple), that would absolutely corrupt the database. They would probably want to undo that, and developing the UI and backend which intuitively allows that is what prevented me from incorporating this at the time of writing.</p><br><p class=\\\"blogtextlist\\\"> \
  - Account Sharing. Users being able to share an already attached Spotify account 'link' and data with other users on my service without the need of actually logging into the Spotify account seems like an expected feature. I am just burnt out and lazy so I'm not adding it right now.</p><br><p class=\\\"blogtextlist\\\"> \
  - Compare Stats w/ Friends. Directly comparing stats with friends feels like a really powerful and useful feature, surpassing even Spotify itself. However making the UI experience for that seems like a total pain when I JUST finished making the original UI for the dashboard so I'm not doing that.</p><br><p class=\\\"blogtextlist\\\"> \
  - Improve UI. I will openly admit I am not a creative graphical designer. I am a code monkey. I make stuff function, not artistically make things look nice. Because of this, I know my UI isn't that great. To be honest, I also don't think it's all that bad by my standards either. But it's certainly not great.</p><br><p class=\\\"blogtextlist\\\"> \
  - Mobile Version. This project currently doesn't support mobile effortfully at all. I mean maybe you use the site in landscape mode and it looks eh, but there is no intention of mobile friendly experiences. This could definitely be improved upon. I am just burnt out and over the project.</p>`,
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
  text: "Source",
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
  text: "GitHub Repo: <a href=\\\"https://github.com/aaronskeelsofficial/SpotifyStats\\\" target=\\\"_blank\\\" style=\\\"color: rgb(115,204,168)\\\">Here</a>",
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
      <BlogHeader {...BlogHeaderProps_WhatIsASSUser} />
      <BlogText {...BlogTextProps_WhatIsASSUser} />
      <BlogHeader {...BlogHeaderProps_WhatIsASSHost} />
      <BlogText {...BlogTextProps_WhatIsASSHost} />
      <BlogHeader {...BlogHeaderProps_WhatIsASSDev} />
      <BlogText {...BlogTextProps_WhatIsASSDev} />
      <BlogHeader {...BlogHeaderProps_Challenges} />
      <BlogText {...BlogTextProps_Challenges} />
      <BlogHeader {...BlogHeaderProps_Improvements} />
      <BlogText {...BlogTextProps_Improvements} />
      <BlogHeader {...BlogHeaderProps_Source} />
      <BlogText {...BlogTextProps_Source} />
      <BlogFooterGap />
    </>
  )
}
