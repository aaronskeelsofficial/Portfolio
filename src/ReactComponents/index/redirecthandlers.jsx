import { Helmet } from "react-helmet"

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (window.location.pathname === "/spigot") {
              window.open('https://www.spigotmc.org/resources/authors/thetealviper.116592/', '_blank');
              window.aaron.common.urltool.UpdateURL("https://aaronskeels.work/projects.html?search=spigot", true);
            }
            if (window.location.pathname === "/projects") {
              window.aaron.common.urltool.UpdateURL("https://aaronskeels.work/projects.html", true);
            }
          })();
        `}</script>
      </Helmet>
    </>
  )
};