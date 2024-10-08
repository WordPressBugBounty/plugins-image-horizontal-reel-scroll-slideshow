/**
 *     Image horizontal reel scroll slideshow
 *     Copyright (C) 2011 - 2023 www.gopiplus.com
 * 
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var copyspeed = IHRSS_SPEED;
IHRSS_SLIDESRARRAY='<nobr>'+IHRSS_SLIDESRARRAY.join(IHRSS_IMGGAP)+'</nobr>';
IHRSS_SLIDESRARRAY1='<nobr>'+IHRSS_SLIDESRARRAY1.join(IHRSS_IMGGAP)+'</nobr>';
var iedom = document.all||document.getElementById;
if (iedom)
document.write('<span id="temp" style="visibility:hidden;top:-100px;left:-9000px;width:98%;">'+IHRSS_SLIDESRARRAY1+'</span>');
var actualwidth = '';
var cross_slide, ns_slide;

function fillup() {
	if (iedom) {
		cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2;
		cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3;
		cross_slide.innerHTML=cross_slide2.innerHTML=IHRSS_SLIDESRARRAY;
		actualwidth = document.all ? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth;
		
		//Comment the below 3 line if any problem in the reel
		if( cross_slide.offsetWidth > actualwidth) {
			actualwidth = cross_slide.offsetWidth;
		}
		cross_slide2.style.left = actualwidth + IHRSS_PIXELGAP + "px";
	}
	else if (document.layers) {
		ns_slide=document.ns_slidemenu.document.ns_slidemenu2;
		ns_slide2=document.ns_slidemenu.document.ns_slidemenu3;
		ns_slide.document.write(IHRSS_SLIDESRARRAY);
		ns_slide.document.close();
		actualwidth=ns_slide.document.width;
		ns_slide2.left=actualwidth+IHRSS_PIXELGAP;
		ns_slide2.document.write(IHRSS_SLIDESRARRAY);
		ns_slide2.document.close();
	}
	lefttime=setInterval("slideleft()",30);
}
window.onload=fillup

function slideleft(){
	if (iedom){
		if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
			cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px";
		else
			cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+IHRSS_PIXELGAP+"px";
	
		if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
			cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px";
		else
			cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+IHRSS_PIXELGAP+"px";
	}
	else if (document.layers){
		if (ns_slide.left>(actualwidth*(-1)+8))
			ns_slide.left-=copyspeed;
		else
			ns_slide.left=ns_slide2.left+actualwidth+IHRSS_PIXELGAP;
	
		if (ns_slide2.left>(actualwidth*(-1)+8))
			ns_slide2.left-=copyspeed;
		else
			ns_slide2.left=ns_slide.left+actualwidth+IHRSS_PIXELGAP;
	}
}

if (iedom||document.layers) {
	with (document) {
		//document.write('<table border="0" cellspacing="0" cellpadding="0"><td>');
		if (iedom) {
			write('<div style="position:relative;width:'+IHRSS_WIDTH+';height:'+IHRSS_HEIGHT+';overflow:hidden">');
			write('<div style="position:absolute;width:'+IHRSS_WIDTH+';height:'+IHRSS_HEIGHT+';background-color:'+IHRSS_BGCOLOR+'" onMouseover="copyspeed=0" onMouseout="copyspeed=IHRSS_SPEED">');
			write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>');
			write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>');
			write('</div></div>')
		}
		else if (document.layers){
			write('<ilayer width='+IHRSS_WIDTH+' height='+IHRSS_HEIGHT+' name="ns_slidemenu" bgColor='+IHRSS_BGCOLOR+'>');
			write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=IHRSS_SPEED"></layer>');
			write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=IHRSS_SPEED"></layer>');
			write('</ilayer>');
		}
		//document.write('</td></table>');
	}
}