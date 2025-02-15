import { Helmet } from "react-helmet"

export default function() {
  return (
    <>
      <Helmet>
        <script>{`
          //This is the first half of instanciation. Execution is handled in the theme file.
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.modulebasics == "undefined")
              window.aaron.common.modulebasics = new Object();
        
            
            if (typeof window.aaron.common.modulebasics.StartupFuncs == "undefined")
              window.aaron.common.modulebasics.StartupFuncs = [];
            if (typeof window.aaron.common.modulebasics.AddElemsFuncs == "undefined")
              window.aaron.common.modulebasics.AddElemsFuncs = [];
            if (typeof window.aaron.common.modulebasics.ActivateFuncs == "undefined")
              window.aaron.common.modulebasics.ActivateFuncs = [];
            if (typeof window.aaron.common.modulebasics.ResizeFuncs == "undefined") {
              window.aaron.common.modulebasics.ResizeFuncs = [];
              let rootresize = function () {
                document.getElementById("root").style.width = vw + "px";
                document.getElementById("root").style.height = vh + "px";
              }
              rootresize();
              window.aaron.common.modulebasics.ResizeFuncs.push(rootresize);
            }
          })();
        
          //Cookie functions
          function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          }
          function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for(let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
        
          //Polyfill scrollTopMax and scrollLeftMax
          (function(elmProto){
            if ('scrollTopMax' in elmProto) {
                return;
            }
            Object.defineProperties(elmProto, {
                'scrollTopMax': {
                    get: function scrollTopMax() {
                      return this.scrollHeight - this.clientHeight;
                    }
                },
                'scrollLeftMax': {
                    get: function scrollLeftMax() {
                      return this.scrollWidth - this.clientWidth;
                    }
                }
            });
          })(Element.prototype);
        
          //UniversalSmoothScrolling - Necessary because Safari is f*****g stupid
          (function (){
            var script = document.createElement('script');
            script.id = "universalsmoothscrollscript";
            script.setAttribute('src', "/src/js/thirdparty/universalsmoothscroll-min.js");
            document.head.appendChild(script);
          })();
        `}</script>
      </Helmet>
    </>
  )
};