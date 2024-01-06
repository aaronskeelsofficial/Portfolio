import { Helmet } from "react-helmet"

export default function() {
  return (
    <>
      <Helmet>
        <script>{`       
          class globe {
              checkForRotation(){
                  let maxSpeed = -Math.PI / 180.0 * 2;
                  function handleRotation(c1, c2, r12){ //Coordinate 1, Coordinate 2, Rotation 1-2
                      return [c1*Math.cos(r12)-c2*Math.sin(r12), c1*Math.sin(r12)+c2*Math.cos(r12)];
                  }
  
                  var xFromCenter = this.lastCursorX - this.centerX;
                  var yFromCenter = this.lastCursorY - this.centerY;
                  var distance = Math.sqrt(Math.pow(xFromCenter, 2) + Math.pow(yFromCenter, 2));
                  var distanceScaler = 1 / (300);
                  var deltaXFactor = - Math.PI / 180 / 100;
                  var deltaYFactor = - Math.PI / 180 / 100;
                  if(!this.decelerate && distance <= this.radius) {
                      this.vXY += deltaXFactor;
                      this.vXZ += deltaYFactor;
                      this.vXY = this.vXY < maxSpeed ? maxSpeed : this.vXY;
                      this.vXZ = this.vXZ < maxSpeed ? maxSpeed : this.vXZ;
                      this.vXY = this.vXY > -maxSpeed ? -maxSpeed : this.vXY;
                      this.vXZ = this.vXZ > -maxSpeed ? -maxSpeed : this.vXZ;
                  }else if(this.autopilot){
                      xFromCenter = this.radius;
                      yFromCenter = this.radius;
                  }else{
                      this.vXY -= deltaXFactor;
                      this.vXZ -= deltaYFactor;
                      this.vXY = this.vXY > 0 ? 0 : this.vXY;
                      this.vXZ = this.vXZ > 0 ? 0 : this.vXZ;
                      if(this.decelerate && this.vXY == 0 && this.vXZ == 0)
                          clearInterval(this.interval);
                  }
  
                  var xAngleChange = (xFromCenter * distanceScaler) * this.vXY;
                  var yAngleChange = (yFromCenter * distanceScaler) * this.vXZ;
                  for(var i = 0;i < this.globeWordArray.length;i++){
                      var curGlobeWord = this.globeWordArray[i];
  
                      curGlobeWord.rXY = - xAngleChange;
                      curGlobeWord.rXZ = - yAngleChange;
                      [curGlobeWord.x,curGlobeWord.y] = handleRotation(curGlobeWord.x,curGlobeWord.y,curGlobeWord.rXY);
                      [curGlobeWord.x,curGlobeWord.z] = handleRotation(curGlobeWord.x,curGlobeWord.z,curGlobeWord.rXZ);
                      [curGlobeWord.y,curGlobeWord.z] = handleRotation(curGlobeWord.y,curGlobeWord.z,curGlobeWord.rYZ);
  
                      curGlobeWord.updateLocation(this.rotateText, curGlobeWord.useImageInsteadLink);
                  }
              }
  
              constructor(centerX, centerY, radius, vXY, vXZ, vYZ, divElement, rotateText) {
                  let temp = this;
                  this.prototypeWidth = vw;
                  this.prototypeHeight = vh;
                  this.prototypeCenterX = centerX;
                  this.prototypeCenterY = centerY;
                  this.prototypeRadius = radius;
                  this.centerX = centerX;
                  this.centerY = centerY;
                  this.radius = radius;
                  this.vXY = vXY;
                  this.vXZ = vXZ;
                  this.vYZ = vYZ;
                  this.minX = parseInt(centerX - radius);
                  this.minY = parseInt(centerY - radius);
                  this.globeWordArray = [];
                  this.divElement = divElement;
                  this.divElement.style.width = (radius * 2) + "px";
                  this.divElement.style.height = (radius * 2) + "px";
                  this.divElement.style.position = "absolute";
                  this.divElement.style.left = this.minX + "px";
                  this.divElement.style.top = this.minY + "px";
                  this.divElement.style.backgroundImage = "url('/src/img/globering.png')";
                  this.divElement.style.backgroundSize = "cover";
                  this.rotateText = rotateText;

                  let Resize = function () {
                    let resizeScaler = vw/temp.prototypeWidth;
                    temp.radius = temp.prototypeRadius * resizeScaler;
                    temp.centerX = temp.prototypeCenterX * resizeScaler;
                    temp.centerY = temp.prototypeCenterY * (vh/temp.prototypeHeight);
                    temp.divElement.style.width = (temp.radius * 2) + "px";
                    temp.divElement.style.height = (temp.radius * 2) + "px";
                    temp.divElement.style.left = parseInt(temp.centerX - temp.radius) + "px";
                    temp.divElement.style.top = parseInt(temp.centerY - temp.radius) + "px";
                    let vectorScaler = 1;
                    for(var i = 0;i < temp.globeWordArray.length;i++){
                        var curGlobeWord = temp.globeWordArray[i];
                        if (i == 0) {
                          let startingVectorMagnitude = Math.sqrt(Math.pow(curGlobeWord.x,2)+Math.pow(curGlobeWord.y,2)+Math.pow(curGlobeWord.z,2));
                          vectorScaler = temp.radius / startingVectorMagnitude;
                        }
                        curGlobeWord.x *= vectorScaler;
                        curGlobeWord.y *= vectorScaler;
                        curGlobeWord.z *= vectorScaler;
    
                        curGlobeWord.updateLocation(temp.rotateText, curGlobeWord.useImageInsteadLink);
                    }
                  }
                  window.aaron.common.modulebasics.ResizeFuncs.push(Resize);
                  Resize();
  
                  /*
                  * We initialize like this specifically so the globe can spin automatically upon creation.
                  * Then once a user hovers their mouse over it, it will become manually driven.
                  * Until that happens though, this initialization setup allows it to spin automatically at full power in
                  * the x or y direction depending on the globe constructor.
                   */
                      this.decelerate = false;
                      this.lastCursorX = 0;
                      this.lastCursorY = 0;
                      this.autopilot = true;
                      this.interval = setInterval(function(){temp.checkForRotation();},10);
                  /**/
  
                  this.divElement.onmousemove = function(event){
                      temp.lastCursorX = event.clientX;
                      temp.lastCursorY = event.clientY;
                  }
                  this.divElement.onmouseenter = function(event){
                      if(temp.interval != null)
                          clearInterval(temp.interval);
                      temp.interval = setInterval(function(){temp.checkForRotation();},10);
                      temp.decelerate = false;
                      temp.autopilot = false;
                  }
                  this.divElement.onmouseleave = function(event){
                      temp.decelerate = true;
                  }
              }
          }
          class globeWord {
              constructor(id, text, phi, theta, rXY, rXZ, rYZ, globe, useImageInsteadLink){
                  let temp = this;
                  this.id = id;
                  this.phi = phi;
                  this.theta = theta;
                  this.x = globe.radius * Math.sin(phi) * Math.cos(theta);
                  this.y = globe.radius * Math.sin(phi) * Math.sin(theta)
                  this.z = globe.radius * Math.cos(phi);
                  this.rXY = rXY;
                  this.rXZ = rXZ;
                  this.rYZ = rYZ;
                  this.globe = globe;
                  this.useImageInsteadLink = useImageInsteadLink;
                  if(!useImageInsteadLink){
                      this.globe.divElement.innerHTML += "<a><p "
                          + "id='" + id + "' "
                          + "style='position:absolute;"
                          + "white-space: nowrap;"
                          + "margin-top: 0px;"
                          + "margin-bottom: 0px;"
                          + "font-family: Lucida Console;"
                          + "pointer-events: none;"
                          + "color: #5b94ef;'>"
                          + text
                          + "</p></a>";
                  } else {
                      this.globe.divElement.innerHTML += "<a><img "
                          + "id='" + id + "' "
                          + "style='position:absolute;"
                          + "white-space: nowrap;"
                          + "margin-top: 0px;"
                          + "width: 65px;"
                          + "pointer-events: none;"
                          + "margin-bottom: 0px;' "
                          + "src='" + useImageInsteadLink + "'></a>"
                  }
                  this.globe.globeWordArray.push(this);
                  this.updateLocation(this.globe.rotateText, this.useImageInsteadLink);
              }
  
              getPageX(){
                  //var textWidth = $("#" + this.id).textWidth();
                  let textWidth = document.getElementById(this.id).getBoundingClientRect().width;
                  return parseInt(this.globe.radius + this.y - (textWidth / 2)); //This is relative to the top left corner of the div
              }
              getPageY(){
                  var textHeight = parseInt(window.getComputedStyle(document.getElementById(this.id)).fontSize, 10);
                  return parseInt(this.globe.radius + this.z - (textHeight / 2));
              }
  
              updateLocation(rotateText, useImageInsteadLink){
                  var element = document.getElementById(this.id);
  
                  element.style.left = this.getPageX() + "px";
                  element.style.top = this.getPageY() + "px";
                  if(rotateText){
                      var scaleX = this.y / this.globe.radius; //This gives -1 -> 1
                      scaleX *= Math.PI / 2; //This gives -PI/2 -> PI/2
                      scaleX = Math.cos(scaleX);
                      scaleX *= this.x < 0 ? -1 : 1;
                      var scaleY = Math.abs(this.z / this.globe.radius); //This gives 1 -> 0 -> 1
                      scaleY = 1 - scaleY; //This gives 0 -> 1 -> 0
                      scaleY /= 2; //This gives 0 -> .5 -> 0
                      scaleY += .5; //This gives .5 -> 1 -> .5
                      if(!useImageInsteadLink)
                          element.style.transform = "scale(" + scaleX + "," + scaleY + ")";
                      else
                          element.style.transform = "translate(-50%,-50%) scale(" + scaleX + "," + scaleY + ")";
                  }else{
                      let ratioBackwards = this.x / this.globe.radius; //-1 -> 0 -> 1
                      let scale = 1;
                      let opacity = 1;
                      let zIndex = 5;
                      if(ratioBackwards >= 0){
                          //Do nothing
                      }else{
                          ratioBackwards += 1; //From 1 -> 0 from straight down to back end
                          scale = .5 + .5*ratioBackwards;
                          opacity = .2 + .8*ratioBackwards;
                          zIndex = 4;
                      }
                      if(!useImageInsteadLink) {
                          element.style.transform = "scale(" + scale + "," + scale + ")";
                          element.style.opacity = opacity;
                          element.style.zIndex = zIndex;
                      } else {
                          //element.style.transform = "translate(-50%,-50%) scale(" + scale + "," + scale + ")";
                          element.style.transform = "scale(" + scale + "," + scale + ")";
                          element.style.opacity = opacity;
                          element.style.zIndex = zIndex;
                      }
                  }
              }
          }
          function degreeToRadian(degree){
              return degree * Math.PI / 180;
          }
          function radianToDegree(radian){
              return radian * 180 / Math.PI;
          }
      `}</script>
      </Helmet>
    </>
  )
}