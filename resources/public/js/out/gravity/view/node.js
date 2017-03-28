// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.view.node');
goog.require('cljs.core');
goog.require('gravity.tools');
/**
 * Give a color for a given node
 */
gravity.view.node.get_color = (function gravity$view$node$get_color(group,classifier){
var key = group;
return (new THREE.Color(classifier.call(null,key)));
});
gravity.view.node.get_unique_color = cljs.core.memoize.call(null,gravity.view.node.get_color);
/**
 * Give a random position between -extent and +extent
 */
gravity.view.node.get_rand_pos = (function gravity$view$node$get_rand_pos(extent){
return (cljs.core.rand.call(null,((2) * extent)) - extent);
});
/**
 * Generate a generic geometry
 */
gravity.view.node.generate_cube_geometry = (function gravity$view$node$generate_cube_geometry(){
return (new THREE.BoxGeometry((1),(1),(1)));
});
/**
 * Generate a generic geometry
 */
gravity.view.node.generate_geometry = (function gravity$view$node$generate_geometry(){
return (new THREE.SphereGeometry((1),(10),(10)));
});
gravity.view.node.get_unique_cube_geometry = cljs.core.memoize.call(null,gravity.view.node.generate_cube_geometry);
gravity.view.node.get_unique_geometry = cljs.core.memoize.call(null,gravity.view.node.generate_geometry);
/**
 * Generate a generic material
 */
gravity.view.node.generate_material = (function gravity$view$node$generate_material(color_key){
return (new THREE.MeshLambertMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(new THREE.Color(color_key)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"wireframe","wireframe",1009957322),false], null))));
});
gravity.view.node.get_unique_material = cljs.core.memoize.call(null,gravity.view.node.generate_material);
/**
 * create and return a new node mesh used for collisions
 */
gravity.view.node.generate_collider = (function gravity$view$node$generate_collider(node,classifier){
var geometry = gravity.view.node.get_unique_geometry.call(null);
var material = gravity.view.node.get_unique_material.call(null,gravity.view.node.get_unique_color.call(null,node.group,classifier));
var sphere = (new THREE.Mesh(geometry,material));
sphere.scale.set(1.0,1.0,1.0);

return sphere;
});
/**
 * Return a cloned node with a random position and a collider object
 */
gravity.view.node.create = (function gravity$view$node$create(node,classifier){
var ext = (100);
var node__$1 = goog.object.clone(node);
var collider = gravity.view.node.generate_collider.call(null,node__$1,classifier);
var position = (new THREE.Vector3(gravity.view.node.get_rand_pos.call(null,ext),gravity.view.node.get_rand_pos.call(null,ext),gravity.view.node.get_rand_pos.call(null,ext)));
if(cljs.core.not.call(null,node__$1.id)){
gravity.tools.err.call(null,"Node must have id slot! ",node__$1);
} else {
node__$1.position = position;

node__$1.mesh = collider;

collider.castShadow = true;

collider.node = node__$1;

node__$1.selected = false;
}

return node__$1;
});
/**
 * create and return a new node mesh used for collisions
 */
gravity.view.node.generate_coord_mesh = (function gravity$view$node$generate_coord_mesh(coord){
var geometry = gravity.view.node.get_unique_cube_geometry.call(null);
var material = gravity.view.node.get_unique_material.call(null,[cljs.core.str(new cljs.core.Symbol(null,"black","black",-1360156122,null))].join(''));
var sphere = (new THREE.Mesh(geometry,material));
sphere.scale.set(0.1,0.1,0.1);

sphere.position.set(cljs.core.nth.call(null,coord,(0)),cljs.core.nth.call(null,coord,(1)),cljs.core.nth.call(null,coord,(2)));

return sphere;
});
gravity.view.node.create_field_pt = (function gravity$view$node$create_field_pt(coord){
var field_mesh = gravity.view.node.generate_coord_mesh.call(null,coord);
var field_pt = cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY);
field_pt.coordinate = cljs.core.clj__GT_js.call(null,coord);

field_pt.mesh = field_mesh;

field_mesh.castShadow = false;

field_mesh.fieldpt = field_pt;

return field_pt;
});

//# sourceMappingURL=node.js.map?rel=1490676081652