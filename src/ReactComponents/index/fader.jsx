import { Helmet } from "react-helmet"

//Props Format
/*
const FaderProps = {
  id: "",
  targetid: "",
  timekeyframes: "",
  opacitykeyframes: "",
  //
  enablepc: "true",
  //
  enablephone: "true",
}
*/

//AnchorPoint Enums
/*
* topleft,topmiddle,topright,middleleft,middlemiddle,middleright,bottomleft,bottommiddle
* bottomright
*/

//SizingMode Enums
/*
* widthAutoHeight
* heightAutoWidth
* explicit
*/

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          (function () {
            if (typeof window.aaron == "undefined")
              window.aaron = new Object();
            if (typeof window.aaron.index == "undefined")
              window.aaron.index = new Object();
            if (typeof window.aaron.index.fader == "undefined")
              window.aaron.index.fader = new Object();
            if (typeof window.aaron.index.fader.ActivateFuncs == "undefined")
              window.aaron.index.fader.ActivateFuncs = [];
          })();

          if (((deviceType == "pc" || deviceType == "tablet") && `+ props.enablepc + ` == true)
              || (deviceType == "phone" && `+ props.enablephone + ` == true)) {
            //Hoist funcs
            let Activate;

            let clamp = function (a, min = 0, max = 1) {
              return Math.min(max, Math.max(min, a));
            }
            let evaluateLinear = function (xValue, xArray, yArray) {
              //Find which two x points to interpolate between
              //Assume xArray is assorted ascending
              //Assume xArray length = yArray length
              let x1, x2, y1, y2;
              if (xValue < xArray[0]) {
                x1 = xArray[0];
                x2 = xArray[1];
                y1 = yArray[0];
                y2 = yArray[1];
              } else if (xValue > xArray[xArray.length-1]) {
                x1 = xArray[xArray.length-2];
                x2 = xArray[xArray.length-1];
                y1 = yArray[yArray.length-2];
                y2 = yArray[yArray.length-1];
              } else {
                for (let i = 0;i < xArray.length-1;i++) {
                  if (xValue >= xArray[i] && xValue <= xArray[i+1]) {
                    x1 = xArray[i];
                    x2 = xArray[i+1];
                    y1 = yArray[i];
                    y2 = yArray[i+1];
                    i = xArray.length; //End loop
                  }
                }
              }
              return y1 + ((xValue-x1)*(y2-y1)/(x2-x1));
            }
            Activate = function () {
              let timeKeyframes = `+ props.timekeyframes + `;
              let opacityKeyframes = `+ props.opacitykeyframes + `;
              let elem = document.getElementById("`+ props.targetid + `");
              let startingTime = Date.now();
              let ID_Interval = -1;

              let keyframe = function () {
                let deltaTime = Date.now() - startingTime;
                //
                let interpOpac = clamp(evaluateLinear(deltaTime, timeKeyframes, opacityKeyframes), 0, 1);
                elem.style.opacity = interpOpac;
                //
                if (deltaTime > timeKeyframes[timeKeyframes.length - 1]) {
                  elem.remove();
                  clearInterval(ID_Interval);
                }
              }

              ID_Interval = setInterval(keyframe, 10);
            };
            window.aaron.index.fader.ActivateFuncs.push(Activate);
          }
        `}</script>
      </Helmet>
    </>
  )
};