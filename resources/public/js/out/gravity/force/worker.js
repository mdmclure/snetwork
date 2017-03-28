// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.force.worker');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clairvoyant.core');
/**
 * Post a message back
 */
gravity.force.worker.answer = (function gravity$force$worker$answer(var_args){
var args34829 = [];
var len__22733__auto___34832 = arguments.length;
var i__22734__auto___34833 = (0);
while(true){
if((i__22734__auto___34833 < len__22733__auto___34832)){
args34829.push((arguments[i__22734__auto___34833]));

var G__34834 = (i__22734__auto___34833 + (1));
i__22734__auto___34833 = G__34834;
continue;
} else {
}
break;
}

var G__34831 = args34829.length;
switch (G__34831) {
case 1:
return gravity.force.worker.answer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gravity.force.worker.answer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34829.length)].join('')));

}
});

gravity.force.worker.answer.cljs$core$IFn$_invoke$arity$1 = (function (message){
return self.postMessage(cljs.core.clj__GT_js.call(null,message));
});

gravity.force.worker.answer.cljs$core$IFn$_invoke$arity$2 = (function (message,data){
return self.postMessage(cljs.core.clj__GT_js.call(null,message),cljs.core.clj__GT_js.call(null,data));
});

gravity.force.worker.answer.cljs$lang$maxFixedArity = 2;

/**
 * Return the first arg or all the list as a js-obj
 */
gravity.force.worker.get_args = (function gravity$force$worker$get_args(coll){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1))){
return cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,coll));
} else {
return cljs.core.clj__GT_js.call(null,coll);
}
});
/**
 * Log in the console
 */
gravity.force.worker.log = (function gravity$force$worker$log(args){
return console.log("[force.worker/log]: ",gravity.force.worker.get_args.call(null,args));
});
/**
 * Warn in the console
 */
gravity.force.worker.warn = (function gravity$force$worker$warn(args){
return console.warn("[force.worker/warn]: ",gravity.force.worker.get_args.call(null,args));
});
gravity.force.worker.str = (function gravity$force$worker$str(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34837 = arguments.length;
var i__22734__auto___34838 = (0);
while(true){
if((i__22734__auto___34838 < len__22733__auto___34837)){
args__22740__auto__.push((arguments[i__22734__auto___34838]));

var G__34839 = (i__22734__auto___34838 + (1));
i__22734__auto___34838 = G__34839;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return gravity.force.worker.str.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

gravity.force.worker.str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var arr = cljs.core.clj__GT_js.call(null,args);
return arr.join("");
});

gravity.force.worker.str.cljs$lang$maxFixedArity = (0);

gravity.force.worker.str.cljs$lang$applyTo = (function (seq34836){
return gravity.force.worker.str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34836));
});

gravity.force.worker.eval = (function gravity$force$worker$eval(value){
return eval(value);
});
gravity.force.worker.force = cljs.core.atom.call(null,null);
gravity.force.worker.parameters = cljs.core.atom.call(null,null);
gravity.force.worker.id_index_map = cljs.core.atom.call(null,null);
gravity.force.worker.id__GT_index = (function gravity$force$worker$id__GT_index(id){
return cljs.core.get.call(null,cljs.core.deref.call(null,gravity.force.worker.id_index_map),id);
});
gravity.force.worker.index__GT_id = (function gravity$force$worker$index__GT_id(index){
return cljs.core.get.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,gravity.force.worker.id_index_map)),index);
});
gravity.force.worker.id__GT_force_node = (function gravity$force$worker$id__GT_force_node(id){
return (cljs.core.deref.call(null,gravity.force.worker.force).nodes()[gravity.force.worker.id__GT_index.call(null,id)]);
});
/**
 * Tick function for the force layout.
 *   MODIFIED: For each node, we also insert the id into
 *   the typed array being sent back to the 
 */
gravity.force.worker.tick = (function gravity$force$worker$tick(_){
var nodes = cljs.core.deref.call(null,gravity.force.worker.force).nodes();
var size = nodes.length;
if((size > (0))){
var arr = (new Float32Array((size * (4))));
var buffer = arr.buffer;
var i_34840 = (0);
while(true){
var j_34841 = (i_34840 * (4));
var node_34842 = (nodes[i_34840]);
(arr[j_34841] = gravity.force.worker.index__GT_id.call(null,i_34840));

(arr[(j_34841 + (1))] = node_34842.x);

(arr[(j_34841 + (2))] = node_34842.y);

if(cljs.core.truth_(isNaN(node_34842.z))){
(arr[(j_34841 + (3))] = (0));
} else {
(arr[(j_34841 + (3))] = node_34842.z);
}

if((i_34840 < (size - (1)))){
var G__34843 = (i_34840 + (1));
i_34840 = G__34843;
continue;
} else {
}
break;
}

return gravity.force.worker.answer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"nodes-positions",new cljs.core.Keyword(null,"data","data",-232669377),arr], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer], null));
} else {
return null;
}
});
/**
 * End function for the force layout
 */
gravity.force.worker.end = (function gravity$force$worker$end(_){
return gravity.force.worker.answer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"end"], null));
});
gravity.force.worker.init = (function gravity$force$worker$init(params){
var params__$1 = cljs.core.js__GT_clj.call(null,params,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.reset_BANG_.call(null,gravity.force.worker.parameters,params__$1);

gravity.force.worker.answer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ready","ready",1086465795)], null));

return null;
});
gravity.force.worker.make_force = (function gravity$force$worker$make_force(){
var params = cljs.core.deref.call(null,gravity.force.worker.parameters);
var force_instance = d3.layout.force3d().size(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(params))).linkStrength(new cljs.core.Keyword(null,"linkStrength","linkStrength",381000521).cljs$core$IFn$_invoke$arity$1(params)).friction(new cljs.core.Keyword(null,"friction","friction",-1603603910).cljs$core$IFn$_invoke$arity$1(params)).linkDistance(new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649).cljs$core$IFn$_invoke$arity$1(params)).charge(new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(params)).gravity(new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(params)).theta(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(params)).alpha(new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(params));
force_instance.on("tick",gravity.force.worker.tick);

force_instance.on("end",gravity.force.worker.end);

return force_instance;
});
/**
 * Add or remove the correct amount of nodes and keep their positions.  MODIFIED: Build the mapping from id->index for links
 */
gravity.force.worker.make_force_nodes = (function gravity$force$worker$make_force_nodes(nodes){
var size = nodes.length;
var force_nodes = [];
if((size > (0))){
cljs.core.reset_BANG_.call(null,gravity.force.worker.id_index_map);

var i_34844 = (0);
while(true){
var node_34845 = (nodes[i_34844]);
var id_34846 = node_34845.id;
cljs.core.swap_BANG_.call(null,gravity.force.worker.id_index_map,cljs.core.assoc,id_34846,i_34844);

if(cljs.core.truth_(node_34845.position)){
force_nodes.push(node_34845.position);
} else {
force_nodes.push(cljs.core.PersistentArrayMap.EMPTY);
}

if((i_34844 < (size - (1)))){
var G__34847 = (i_34844 + (1));
i_34844 = G__34847;
continue;
} else {
}
break;
}
} else {
}

return force_nodes;
});
gravity.force.worker.make_force_links = (function gravity$force$worker$make_force_links(links){
var size = links.length;
var force_links = [];
if((size > (0))){
var i_34848 = (0);
while(true){
var link_34849 = (links[i_34848]);
var source_id_34850 = link_34849.source;
var target_id_34851 = link_34849.target;
var sim_34852 = (link_34849["similarity"]);
var source_index_34853 = gravity.force.worker.id__GT_index.call(null,source_id_34850);
var target_index_34854 = gravity.force.worker.id__GT_index.call(null,target_id_34851);
force_links.push(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source_index_34853,new cljs.core.Keyword(null,"target","target",253001721),target_index_34854,new cljs.core.Keyword(null,"similarity","similarity",1871163855),sim_34852], null)));

if((i_34848 < (size - (1)))){
var G__34855 = (i_34848 + (1));
i_34848 = G__34855;
continue;
} else {
}
break;
}
} else {
}

return force_links;
});
/**
 * start the force
 */
gravity.force.worker.start = (function gravity$force$worker$start(){
if((cljs.core.deref.call(null,gravity.force.worker.force) == null)){
return null;
} else {
return cljs.core.deref.call(null,gravity.force.worker.force).start();
}
});
/**
 * Stop the force
 */
gravity.force.worker.stop = (function gravity$force$worker$stop(){
if((cljs.core.deref.call(null,gravity.force.worker.force) == null)){
return null;
} else {
return cljs.core.deref.call(null,gravity.force.worker.force).stop();
}
});
/**
 * Resume the force
 */
gravity.force.worker.resume = (function gravity$force$worker$resume(){
if((cljs.core.deref.call(null,gravity.force.worker.force) == null)){
return null;
} else {
return cljs.core.deref.call(null,gravity.force.worker.force).resume();
}
});
/**
 * Set the nodes list.  nodes should be a js array
 */
gravity.force.worker.set_nodes = (function gravity$force$worker$set_nodes(nodes){
gravity.force.worker.stop.call(null);

var new_force = gravity.force.worker.make_force.call(null);
var force_nodes = gravity.force.worker.make_force_nodes.call(null,nodes);
new_force.nodes(force_nodes);

cljs.core.reset_BANG_.call(null,gravity.force.worker.force,new_force);

return gravity.force.worker.start.call(null);
});
/**
 * Set the links list
 */
gravity.force.worker.set_links = (function gravity$force$worker$set_links(links){
gravity.force.worker.stop.call(null);

if((cljs.core.deref.call(null,gravity.force.worker.force) == null)){
return null;
} else {
var force_links = gravity.force.worker.make_force_links.call(null,links);
cljs.core.deref.call(null,gravity.force.worker.force).links(force_links);

return gravity.force.worker.start.call(null);
}
});
/**
 * Force the layout to precompute
 */
gravity.force.worker.precompute = (function gravity$force$worker$precompute(steps){
if(((steps < (0))) || ((steps == null))){
console.log("Precomputing layout with default value. Argument given was <0. Expected unsigned integer, Given:",steps);

return gravity.force.worker.precompute.call(null,(50));
} else {
var start = Date.now();
cljs.core.deref.call(null,gravity.force.worker.force).on("tick",null);

var n__22543__auto___34856 = steps;
var i_34857 = (0);
while(true){
if((i_34857 < n__22543__auto___34856)){
cljs.core.deref.call(null,gravity.force.worker.force).tick();

var G__34858 = (i_34857 + (1));
i_34857 = G__34858;
continue;
} else {
}
break;
}

cljs.core.deref.call(null,gravity.force.worker.force).on("tick",gravity.force.worker.tick);

return gravity.force.worker.log.call(null,gravity.force.worker.str.call(null,"Pre-computed in ",((Date.now() - start) / (1000)),"ms."));
}
});
/**
 * Set a node's position
 */
gravity.force.worker.set_position = (function gravity$force$worker$set_position(data){
var id = data.id;
var position = data.position;
var node = gravity.force.worker.id__GT_force_node.call(null,id);
var alpha = cljs.core.deref.call(null,gravity.force.worker.force).alpha();
gravity.force.worker.stop.call(null);

node.x = position.x;

node.y = position.y;

node.z = position.z;

node.px = position.x;

node.py = position.y;

node.pz = position.z;

return gravity.force.worker.tick.call(null,null);
});
/**
 * pin a node by id
 */
gravity.force.worker.pin = (function gravity$force$worker$pin(data){
var id = data.id;
var node = gravity.force.worker.id__GT_force_node.call(null,id);
return node.fixed = true;
});
/**
 * unpin a node by id
 */
gravity.force.worker.unpin = (function gravity$force$worker$unpin(data){
var id = data.id;
var node = gravity.force.worker.id__GT_force_node.call(null,id);
return node.fixed = false;
});
/**
 * Dispatch a message to the corresponding action (route).
 */
gravity.force.worker.dispatcher = (function gravity$force$worker$dispatcher(event){
var message = event.data;
var type = message.type;
var data = message.data;
var G__34860 = type;
switch (G__34860) {
case "init":
return gravity.force.worker.init.call(null,data);

break;
case "start":
return gravity.force.worker.start.call(null);

break;
case "stop":
return gravity.force.worker.stop.call(null);

break;
case "resume":
return gravity.force.worker.resume.call(null);

break;
case "tick":
return gravity.force.worker.tick.call(null,null);

break;
case "set-nodes":
return gravity.force.worker.set_nodes.call(null,data);

break;
case "set-links":
return gravity.force.worker.set_links.call(null,data);

break;
case "precompute":
return gravity.force.worker.precompute.call(null,data);

break;
case "set-position":
return gravity.force.worker.set_position.call(null,data);

break;
case "pin":
return gravity.force.worker.pin.call(null,data);

break;
case "unpin":
return gravity.force.worker.unpin.call(null,data);

break;
case "size":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.js__GT_clj.call(null,data));

break;
case "linkStrength":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"linkStrength","linkStrength",381000521),gravity.force.worker.eval.call(null,data));

break;
case "friction":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"friction","friction",-1603603910),data);

break;
case "linkDistance":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649),gravity.force.worker.eval.call(null,data));

break;
case "charge":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"charge","charge",426796560),gravity.force.worker.eval.call(null,data));

break;
case "gravity":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"gravity","gravity",-1815198225),data);

break;
case "theta":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"theta","theta",-427510258),data);

break;
case "alpha":
return cljs.core.swap_BANG_.call(null,gravity.force.worker.parameters,cljs.core.assoc,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),data);

break;
default:
return gravity.force.worker.warn.call(null,gravity.force.worker.str.call(null,"Unable to dispatch '",type,"'"));

}
});
/**
 * Main entry point
 */
gravity.force.worker.create = (function gravity$force$worker$create(){
return self.addEventListener("message",gravity.force.worker.dispatcher);
});
goog.exportSymbol('gravity.force.worker.create', gravity.force.worker.create);

//# sourceMappingURL=worker.js.map?rel=1490679226103