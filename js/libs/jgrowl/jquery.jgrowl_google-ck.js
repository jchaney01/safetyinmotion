(function(a){a.jGrowl=function(b,c){a("#jGrowl").size()==0&&a('<div id="jGrowl"></div>').addClass(c&&c.position?c.position:a.jGrowl.defaults.position).appendTo("body");a("#jGrowl").jGrowl(b,c)};a.fn.jGrowl=function(b,c){if(a.isFunction(this.each)){var d=arguments;return this.each(function(){if(a(this).data("jGrowl.instance")==undefined){a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl,{notifications:[],element:null,interval:null}));a(this).data("jGrowl.instance").startup(this)}a.isFunction(a(this).data("jGrowl.instance")[b])?a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"),a.makeArray(d).slice(1)):a(this).data("jGrowl.instance").create(b,c)})}};a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:!1,position:"top-right",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3e3,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:!0,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(){},beforeOpen:function(){},afterOpen:function(){},open:function(){},beforeClose:function(){},close:function(){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(b,c){c=a.extend({},this.defaults,c);if(typeof c.speed!="undefined"){c.openDuration=c.speed;c.closeDuration=c.speed}this.notifications.push({message:b,options:c});c.log.apply(this.element,[this.element,b,c])},render:function(b){var c=this,d=b.message,e=b.options;b=a('<div class="jGrowl-notification '+e.themeState+" ui-corner-all"+(e.group!=undefined&&e.group!=""?" "+e.group:"")+'"><div class="jGrowl-close">'+e.closeTemplate+'</div><div class="jGrowl-header">'+e.header+'</div><div class="jGrowl-message">'+d+"</div></div>").data("jGrowl",e).addClass(e.theme).children("div.jGrowl-close").bind("click.jGrowl",function(){a(this).parent().trigger("jGrowl.close")}).parent();a(b).bind("mouseover.jGrowl",function(){a("div.jGrowl-notification",c.element).data("jGrowl.pause",!0)}).bind("mouseout.jGrowl",function(){a("div.jGrowl-notification",c.element).data("jGrowl.pause",!1)}).bind("jGrowl.beforeOpen",function(){e.beforeOpen.apply(b,[b,d,e,c.element])!=0&&a(this).trigger("jGrowl.open")}).bind("jGrowl.open",function(){if(e.open.apply(b,[b,d,e,c.element])!=0){e.glue=="after"?a("div.jGrowl-notification:last",c.element).after(b):a("div.jGrowl-notification:first",c.element).before(b);a(this).animate(e.animateOpen,e.openDuration,e.easing,function(){a.browser.msie&&(parseInt(a(this).css("opacity"),10)===1||parseInt(a(this).css("opacity"),10)===0)&&this.style.removeAttribute("filter");a(this).data("jGrowl").created=new Date;a(this).trigger("jGrowl.afterOpen")})}}).bind("jGrowl.afterOpen",function(){e.afterOpen.apply(b,[b,d,e,c.element])}).bind("jGrowl.beforeClose",function(){e.beforeClose.apply(b,[b,d,e,c.element])!=0&&a(this).trigger("jGrowl.close")}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",!0);a(this).animate(e.animateClose,e.closeDuration,e.easing,function(){a(this).remove();var f=e.close.apply(b,[b,d,e,c.element]);a.isFunction(f)&&f.apply(b,[b,d,e,c.element])})}).trigger("jGrowl.beforeOpen");e.corners!=""&&a.fn.corner!=undefined&&a(b).corner(e.corners);a("div.jGrowl-notification:parent",c.element).size()>1&&a("div.jGrowl-closer",c.element).size()==0&&this.defaults.closer!=0&&a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(c.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose");a.isFunction(c.defaults.closer)&&c.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])})},update:function(){a(this.element).find("div.jGrowl-notification:parent").each(function(){a(this).data("jGrowl")!=undefined&&a(this).data("jGrowl").created!=undefined&&a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life)<(new Date).getTime()&&a(this).data("jGrowl").sticky!=1&&(a(this).data("jGrowl.pause")==undefined||a(this).data("jGrowl.pause")!=1)&&a(this).trigger("jGrowl.beforeClose")});this.notifications.length>0&&(this.defaults.pool==0||a(this.element).find("div.jGrowl-notification:parent").size()<this.defaults.pool)&&this.render(this.notifications.shift());a(this.element).find("div.jGrowl-notification:parent").size()<2&&a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})},startup:function(b){this.element=a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){a(b).data("jGrowl.instance").update()},parseInt(this.defaults.check));a.browser.msie&&parseInt(a.browser.version)<7&&!window.XMLHttpRequest&&a(this.element).addClass("ie6")},shutdown:function(){a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();clearInterval(this.interval)},close:function(){a(this.element).find("div.jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}});a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults})(jQuery);