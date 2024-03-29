import { Helmet } from "react-helmet"

export default function() {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.common == "undefined")
              window.aaron.common = new Object();
            if (typeof window.aaron.common.urltool == "undefined")
              window.aaron.common.urltool = new Object();
          })();
          
          window.aaron.common.urltool.UpdateURL = function (href, reloadPage) {
            if (!reloadPage) {
              window.history.pushState("","",href);
            } else {
              window.location = href;
            }
          };
        
          window.aaron.common.urltool.GetQueries = function () {
            // let search = decodeURIComponent(window.location.search.substring(1));
            let search = window.location.search.substring(1);
            if (search == "")
              return new Object();
            let args = search.split("&");
            let queryMap = new Object();
            for (let arg of args) {
              let dummy = arg.split("=");
              queryMap[dummy[0]] = dummy[1];
            }
            return queryMap;
          };
        
          window.aaron.common.urltool.UpdateQueries = function (queryMap, reloadPage) {
            let baseURL = window.location.href.replace(window.location.search, "");
            let updatedSearch = "";
            let keys = Object.keys(queryMap);
            for (let i = 0;i < keys.length;i++) {
              let key = keys[i];
              if (i == 0)
                updatedSearch = updatedSearch + "?" + key + "=" + queryMap[key];
              else
                updatedSearch = updatedSearch + "&" + key + "=" + queryMap[key];
            }
            // updatedSearch = encodeURIComponent(updatedSearch);
            window.aaron.common.urltool.UpdateURL(baseURL + updatedSearch, reloadPage);
          };
        `}</script>
      </Helmet>
    </>
  )
};