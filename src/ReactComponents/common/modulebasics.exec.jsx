import { Helmet } from "react-helmet"

export default function() {
  return (
    <>
      <Helmet>
        <script>{`
          if (window.aaron.common.modulebasics.StartupFuncs) {
            for (let f of window.aaron.common.modulebasics.StartupFuncs)
              f();
          }
          if (window.aaron.common.modulebasics.AddElemsFuncs) {
            for (let f of window.aaron.common.modulebasics.AddElemsFuncs)
              f();
          }
          
          if (window.aaron.common.modulebasics.ActivateFuncs) {
            function HandleOnLoad () {
              if (deviceType == "pc" || deviceType == "tablet") {
                function onMouseMove () {
                  document.body.removeEventListener('mousemove', onMouseMove);
                  for (let f of window.aaron.common.modulebasics.ActivateFuncs)
                    f();
                }
                document.body.addEventListener('mousemove', onMouseMove);
              } else if (deviceType == "phone") {
                window.setTimeout(()=>{
                  for (let f of window.aaron.common.modulebasics.ActivateFuncs)
                    f();
                },1);
              }
            }
            window.addEventListener('load', HandleOnLoad);
          }
          if (window.aaron.common.modulebasics.ResizeFuncs) {
            for (let f of window.aaron.common.modulebasics.ResizeFuncs)
              window.aaron.common.sizing.resizeFunctions.push(f);
          }
        `}</script>
      </Helmet>
    </>
  )
};