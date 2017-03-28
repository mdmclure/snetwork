// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.view.graph_tools');
goog.require('cljs.core');
goog.require('gravity.tools');
/**
 * Resize a canvas to make it fill the window
 */
gravity.view.graph_tools.fill_window_BANG_ = (function gravity$view$graph_tools$fill_window_BANG_(canvas){
console.log("fill window");

canvas.style.width = "100%";

canvas.style.height = "100%";

var width_34819 = canvas.offsetWidth;
var height_34820 = canvas.offsetHeight;
canvas.width = width_34819;

canvas.height = height_34820;

return null;
});
/**
 * Create a stat view to monitor performances
 */
gravity.view.graph_tools.make_stats = (function gravity$view$graph_tools$make_stats(){
var stats = (new Stats());
var style = stats.domElement.style;
style.position = "absolute";

style.left = "0px";

style.top = "0px";

return stats;
});
/**
 * Create a fake object that will be returned in place of stats
 * 	Used in prod mode
 */
gravity.view.graph_tools.make_fake_stats = (function gravity$view$graph_tools$make_fake_stats(){
return ({"domElement": null});
});
/**
 * Generate a gray sphere as a background
 */
gravity.view.graph_tools.get_background = (function gravity$view$graph_tools$get_background(){
var material = (new THREE.MeshLambertMaterial(({"color": (16777215), "side": (1)})));
var geometry = (new THREE.SphereGeometry((20),(20),(20)));
var background = (new THREE.Mesh(geometry,material));
background.scale.set((100),(100),(100));

background.receiveShadow = true;

return background;
});
/**
 * Generate an ambient light
 */
gravity.view.graph_tools.get_flat_light = (function gravity$view$graph_tools$get_flat_light(){
return (new THREE.AmbientLight((16777215)));
});
gravity.view.graph_tools.get_spot_lights = (function gravity$view$graph_tools$get_spot_lights(){
var color = (new THREE.Color((16777215)));
var strength = 0.8;
var shadow_map = (2048);
var positions = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),(1000),(1000)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000),(1000)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),(-1000),(1000)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(-1000),(1000)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000),(-1000)], null)], null);
var lights = cljs.core.map.call(null,((function (color,strength,shadow_map,positions){
return (function (pos){
var light = (new THREE.SpotLight(color,strength));
var vec__34824 = pos;
var x = cljs.core.nth.call(null,vec__34824,(0),null);
var y = cljs.core.nth.call(null,vec__34824,(1),null);
var z = cljs.core.nth.call(null,vec__34824,(2),null);
light.position.set(x,y,z);

light.shadowCameraFar = (4000);

return light;
});})(color,strength,shadow_map,positions))
,positions);
var main_light_34827 = cljs.core.first.call(null,lights);
main_light_34827.castShadow = true;

main_light_34827.shadowCameraVisible = false;

return lights;
});
/**
 * Make light(s) for the scene. If spots is true, generate directional lights
 */
gravity.view.graph_tools.get_lights = (function gravity$view$graph_tools$get_lights(spots){
if(cljs.core.not.call(null,spots)){
return cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,gravity.view.graph_tools.get_flat_light.call(null));
} else {
return gravity.view.graph_tools.get_spot_lights.call(null);
}
});
/**
 * Return a circle meant to be placed and animated on a node.
 */
gravity.view.graph_tools.get_circle = (function gravity$view$graph_tools$get_circle(var_args){
var args34828 = [];
var len__22733__auto___34835 = arguments.length;
var i__22734__auto___34836 = (0);
while(true){
if((i__22734__auto___34836 < len__22733__auto___34835)){
args34828.push((arguments[i__22734__auto___34836]));

var G__34837 = (i__22734__auto___34836 + (1));
i__22734__auto___34836 = G__34837;
continue;
} else {
}
break;
}

var G__34830 = args34828.length;
switch (G__34830) {
case 0:
return gravity.view.graph_tools.get_circle.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return gravity.view.graph_tools.get_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34828.length)].join('')));

}
});

gravity.view.graph_tools.get_circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return gravity.view.graph_tools.get_circle.call(null,(32),(15));
});

gravity.view.graph_tools.get_circle.cljs$core$IFn$_invoke$arity$2 = (function (nb_segments,radius){
var material = (new THREE.LineBasicMaterial(({"color": (16711680)})));
var geometry = (new THREE.Geometry());
var seq__34831_34839 = cljs.core.seq.call(null,cljs.core.range.call(null,nb_segments));
var chunk__34832_34840 = null;
var count__34833_34841 = (0);
var i__34834_34842 = (0);
while(true){
if((i__34834_34842 < count__34833_34841)){
var i_34843 = cljs.core._nth.call(null,chunk__34832_34840,i__34834_34842);
var theta_34844 = (((i_34843 / nb_segments) * Math.PI) * (2));
var cos_34845 = (Math.cos(theta_34844) * radius);
var sin_34846 = (Math.sin(theta_34844) * radius);
var vect_34847 = (new THREE.Vector3(cos_34845,sin_34846,(0)));
geometry.vertices.push(vect_34847);

var G__34848 = seq__34831_34839;
var G__34849 = chunk__34832_34840;
var G__34850 = count__34833_34841;
var G__34851 = (i__34834_34842 + (1));
seq__34831_34839 = G__34848;
chunk__34832_34840 = G__34849;
count__34833_34841 = G__34850;
i__34834_34842 = G__34851;
continue;
} else {
var temp__4657__auto___34852 = cljs.core.seq.call(null,seq__34831_34839);
if(temp__4657__auto___34852){
var seq__34831_34853__$1 = temp__4657__auto___34852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34831_34853__$1)){
var c__22439__auto___34854 = cljs.core.chunk_first.call(null,seq__34831_34853__$1);
var G__34855 = cljs.core.chunk_rest.call(null,seq__34831_34853__$1);
var G__34856 = c__22439__auto___34854;
var G__34857 = cljs.core.count.call(null,c__22439__auto___34854);
var G__34858 = (0);
seq__34831_34839 = G__34855;
chunk__34832_34840 = G__34856;
count__34833_34841 = G__34857;
i__34834_34842 = G__34858;
continue;
} else {
var i_34859 = cljs.core.first.call(null,seq__34831_34853__$1);
var theta_34860 = (((i_34859 / nb_segments) * Math.PI) * (2));
var cos_34861 = (Math.cos(theta_34860) * radius);
var sin_34862 = (Math.sin(theta_34860) * radius);
var vect_34863 = (new THREE.Vector3(cos_34861,sin_34862,(0)));
geometry.vertices.push(vect_34863);

var G__34864 = cljs.core.next.call(null,seq__34831_34853__$1);
var G__34865 = null;
var G__34866 = (0);
var G__34867 = (0);
seq__34831_34839 = G__34864;
chunk__34832_34840 = G__34865;
count__34833_34841 = G__34866;
i__34834_34842 = G__34867;
continue;
}
} else {
}
}
break;
}

geometry.vertices.push((geometry.vertices[(0)]));

return (new THREE.Line(geometry,material));
});

gravity.view.graph_tools.get_circle.cljs$lang$maxFixedArity = 2;

/**
 * Return a big plane filling the sphere. Used to drag nodes
 */
gravity.view.graph_tools.get_intersect_plane = (function gravity$view$graph_tools$get_intersect_plane(){
var side = (4000);
var material = (new THREE.MeshBasicMaterial(({"wireframe": true, "visible": false})));
var geometry = (new THREE.PlaneGeometry(side,side,(1),(1)));
var mesh = (new THREE.Mesh(geometry,material));
return mesh;
});
gravity.view.graph_tools.remove_children = (function gravity$view$graph_tools$remove_children(object3D){
var len_34868 = (object3D.children.length - (1));
var i_34869 = cljs.core.range.call(null,(0),len_34868);
while(true){
object3D.remove((object3D.children[(0)]));

if((i_34869 < len_34868)){
var G__34870 = len_34868;
var G__34871 = (i_34869 + (1));
len_34868 = G__34870;
i_34869 = G__34871;
continue;
} else {
}
break;
}

return null;
});

//# sourceMappingURL=graph_tools.js.map?rel=1490628856278