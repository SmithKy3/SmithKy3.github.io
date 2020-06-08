(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("547f4032",content,!0,{sourceMap:!1})},191:function(t,e){function n(t,e){return Math.round(Math.random()*(e-t)+t)}function o(canvas){let t,e,o,r,l;const c=canvas.getContext("2d");function h(){t=.5*canvas.clientWidth,e=.5*canvas.clientWidth,o=n(-t,t),r=n(-e,e),l=n(.5*t,t)}return h(),{draw(){c.save(),c.beginPath();const e=t/l,n=o*e,h=r*e,d=.5*e;if(c.arc(n,h,d,0,2*Math.PI),c.fill(),l>.1*t){const e=t/(l+20),m=function(t,e,n,o,r,l){const c=n-t,h=o-e,d=Math.atan2(c,h),path=new Path2D;return path.arc(t,e,r/2,d,d+Math.PI),path.arc(n,o,l/2,d+Math.PI,d),path.closePath(),path}(n,h,o*e,r*e,d,d/10);c.fill(m)}c.closePath(),c.restore()},updatePosition(t){l-=t,l<=1&&h()}}}e.WarpSpeed=function(t=300,e="#c7e7ff",n=3){let r,l=t,c=e,h=n;const d=[],canvas=document.createElement("canvas");function m(){const{clientWidth:t,clientHeight:e}=canvas;canvas.width=t,canvas.height=e;const n=canvas.getContext("2d");n.setTransform(1,0,0,1,0,0);const o=canvas.width/2,r=canvas.height/2;n.translate(o,r)}function f(){d.length=0;for(let i=l;i>0;i--)d.push(o(canvas))}function w(){const t=canvas.getContext("2d");t.fillStyle=c,t.strokeStyle=c;const e=()=>{const{width:n,height:o}=canvas;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n,o),t.translate(n/2,o/2),d.forEach(t=>{t.draw(),t.updatePosition(h)}),r=window.requestAnimationFrame(e)};r=window.requestAnimationFrame(e)}return canvas.id="warpSpeedCanvas",canvas.setAttribute("style","background-color:black; width:100%; height:100%;"),window.addEventListener("resize",()=>{window.cancelAnimationFrame(r),m(),f(),w()}),f(),{mountCanvasTo(t){t.appendChild(canvas),m()},setNumberOfStars(t){l=t,f()},setStarColor(t){c=t},setStarVelocities(t){h=t},render:w}}},192:function(t,e,n){"use strict";var o=n(183);n.n(o).a},193:function(t,e,n){(e=n(8)(!1)).push([t.i,"#canvasWrapper{display:block;margin:5vh 0;width:100%;height:20%}",""]),t.exports=e},201:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(191),l=o.a.extend({layout:"portfolio",data:function(){return{title:"WarpSpeed",gitUrl:"https://www.github.com/smithky3/warp-speed",body:'So, this was more an experiment to get to grips with publishing to NPM more than anything. But, basically, the idea\ncame to me while working on my <a href="/work/space-thing">"space simulator"</a>. It\'s a simple pacakge that returns you an object\nthat can be used to mount a canvas playing a continous star warsy animation, and control said animation, if you please. While it\nposes no great use, I\'m fairly happy with the result (I want to make it a bit more performant at some point, things get a little\nlaggy with large numbers of stars) and it helped take my brain off the space-thing for a day. If you want to skip the ins and\nouts, scroll straight to the bottom for a little demo.\n<br />\n<br/>\n\nIn terms of the code, it\'s a pretty simple algorithm:\n<ul>\n  <li>Generate a random point in 3D space. X and Y page width and height as maximums, respectively. Z can be random but I chose to use page width again.</li>\n  <li>Decrease Z every frame</li>\n  <li>Draw the point on the canvas every frame but multiply X and Y points by (width/Z) to make them move outwards as Z gets closer to 1</li>\n  <li>Repeat for the number of stars you want</li>\n  <li>Profit</li>\n</ul>\n<br />\n\nSeeing as this little project was already a bit of a guinea pig, I decided to take it further as well and wrote it in the style of Douglas Crockford\'s\n"thisless classless" ideology. It aims to remove the nuisance of the new and this keywords that come with JS/TS and I quite like it. You can have a good\nread about it <a href="https://gist.github.com/mpj/17d8d73275bca303e8d2" target="_blank">here</a>.'}},mounted:function(){var t=Object(r.WarpSpeed)(),e=document.querySelector("#canvasWrapper");e?(t.mountCanvasTo(e),t.setNumberOfStars(500),t.setStarColor("skyBlue"),t.render()):console.log("Kye, ya dun goofed. Now there's no demo of your lil warp speed thing. God damnit.")}}),c=(n(192),n(3)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("portfolio-page",{attrs:{gitUrl:this.gitUrl,title:this.title,body:this.body}}),this._v(" "),e("div",{attrs:{id:"canvasWrapper"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);