!function(a){"use strict";a(document).ready(function(){a(".videos .video__poster").each(function(){var i=a(this).find(".video__poster--image");if(void 0!==i.data("gallery-images")){var t=i.attr("data-gallery-images"),r=JSON.parse(t),e=i.attr("src"),n=i.attr("srcset"),s=!1;a(this).on("mouseenter",function(){s=!0,function n(){0<r.length&&a.each(r,function(t,e){setTimeout(function(){if(!s)return!1;i.attr("src",e),i.attr("srcset",e),r.length==t+1&&setTimeout(function(){n()},800)},800*t)})}()}),a(this).on("mouseleave",function(){s=!1,i.attr("src",e),i.attr("srcset",n)})}})})}(jQuery,window);