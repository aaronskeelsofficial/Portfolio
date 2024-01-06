import { Helmet } from "react-helmet"

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            setTimeout(() => {
              let queries = window.aaron.common.urltool.GetQueries();
              if (Object.keys(queries).includes("search")) {
                //Update visible URL
                window.aaron.common.urltool.UpdateURL("https://aaronskeels.work/projects.html", false);
                //Update search bar value
                let pelem = document.getElementsByClassName("searchbar")[0].childNodes[1];
                pelem.value = queries["search"];
                pelem.innerText = queries["search"];
                //Update visible projects
                window.aaron.projects.projectbrowser.UpdateProjectsOnDisplay(pelem.value);
              }
            }, 100);
          })();
        `}</script>
      </Helmet>
    </>
  )
};