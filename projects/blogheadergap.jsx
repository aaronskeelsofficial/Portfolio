import { Helmet } from "react-helmet"

//Props Format
/*
const BlogHeaderGapProps = {
}
*/

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.projects == "undefined")
              window.aaron.projects = new Object();
            if (typeof window.aaron.projects.blogheadergap == "undefined")
              window.aaron.projects.blogheadergap = new Object();
          })();

          if (true) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem, pelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.classList.add("blogheadergap");

              //Sizing clones navbar in resize
              // baseelem.style.width = "100%";
              // baseelem.style.height = "6%";

              let parentelem = document.getElementById("scrollablepage-0");
              parentelem.appendChild(baseelem);

              Resize();
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              let navbar = document.getElementsByClassName("navbar")[0];
              baseelem.style.width = navbar.style.width;
              baseelem.style.height = navbar.style.height;
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
    </>
  )
};