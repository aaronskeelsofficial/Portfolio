import { Helmet } from "react-helmet"

/*
* There really is no NEED for this to be a common component.
* I just made it a common component because I feel it will be used
* so often the naming/ID convention use should be considered
* standardized similar to "root".
*/

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.scrollablebody == "undefined")
              window.aaron.common.scrollablebody = new Object();
          })();

          if (true) {
            //Hoist funcs
            let Startup, AddElems, Activate, Resize;
            //Hoist vars
            let baseelem;
            
            Startup = function () {
              // No Startup
            };
            AddElems = function () {
              baseelem = document.createElement("div");
              baseelem.id = "scrollablebody";
              baseelem.style.position = "absolute";
              baseelem.style.left = "50%";
              baseelem.style.top = "6%";
              baseelem.style.transform = "translate(-50%,0px)";
              baseelem.style.width = "100%";
              baseelem.style.height = "94%";
              baseelem.style.overflow = "hidden";
              //
              baseelem.dataset.id = "scrollablebody";
          
              let root = document.getElementById("root");
              root.appendChild(baseelem);

              //Account for possible late-loading scrollbar
              if(window?.aaron?.common?.scrollbar?.pending[baseelem.id]) {
                window.aaron.common.scrollbar.pending[baseelem.id]();
                window.aaron.common.scrollbar.resizefuncs[baseelem.id]();
              }
            };
            Activate = function () {
              //No Activate
            };
            Resize = function () {
              //No resize
            };
            //window.aaron.common.modulebasics.StartupFuncs.push(Startup);
            window.aaron.common.modulebasics.AddElemsFuncs.push(AddElems);
            // window.aaron.common.modulebasics.ActivateFuncs.push(Activate);
            //window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
          }
        `}</script>
      </Helmet>
    </>
  )
};