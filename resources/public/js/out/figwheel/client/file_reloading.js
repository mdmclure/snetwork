// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21625__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21625__auto__){
return or__21625__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21625__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30260_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30260_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30265 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30266 = null;
var count__30267 = (0);
var i__30268 = (0);
while(true){
if((i__30268 < count__30267)){
var n = cljs.core._nth.call(null,chunk__30266,i__30268);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30269 = seq__30265;
var G__30270 = chunk__30266;
var G__30271 = count__30267;
var G__30272 = (i__30268 + (1));
seq__30265 = G__30269;
chunk__30266 = G__30270;
count__30267 = G__30271;
i__30268 = G__30272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30265);
if(temp__4657__auto__){
var seq__30265__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30265__$1)){
var c__22439__auto__ = cljs.core.chunk_first.call(null,seq__30265__$1);
var G__30273 = cljs.core.chunk_rest.call(null,seq__30265__$1);
var G__30274 = c__22439__auto__;
var G__30275 = cljs.core.count.call(null,c__22439__auto__);
var G__30276 = (0);
seq__30265 = G__30273;
chunk__30266 = G__30274;
count__30267 = G__30275;
i__30268 = G__30276;
continue;
} else {
var n = cljs.core.first.call(null,seq__30265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30277 = cljs.core.next.call(null,seq__30265__$1);
var G__30278 = null;
var G__30279 = (0);
var G__30280 = (0);
seq__30265 = G__30277;
chunk__30266 = G__30278;
count__30267 = G__30279;
i__30268 = G__30280;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30331_30342 = cljs.core.seq.call(null,deps);
var chunk__30332_30343 = null;
var count__30333_30344 = (0);
var i__30334_30345 = (0);
while(true){
if((i__30334_30345 < count__30333_30344)){
var dep_30346 = cljs.core._nth.call(null,chunk__30332_30343,i__30334_30345);
topo_sort_helper_STAR_.call(null,dep_30346,(depth + (1)),state);

var G__30347 = seq__30331_30342;
var G__30348 = chunk__30332_30343;
var G__30349 = count__30333_30344;
var G__30350 = (i__30334_30345 + (1));
seq__30331_30342 = G__30347;
chunk__30332_30343 = G__30348;
count__30333_30344 = G__30349;
i__30334_30345 = G__30350;
continue;
} else {
var temp__4657__auto___30351 = cljs.core.seq.call(null,seq__30331_30342);
if(temp__4657__auto___30351){
var seq__30331_30352__$1 = temp__4657__auto___30351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30331_30352__$1)){
var c__22439__auto___30353 = cljs.core.chunk_first.call(null,seq__30331_30352__$1);
var G__30354 = cljs.core.chunk_rest.call(null,seq__30331_30352__$1);
var G__30355 = c__22439__auto___30353;
var G__30356 = cljs.core.count.call(null,c__22439__auto___30353);
var G__30357 = (0);
seq__30331_30342 = G__30354;
chunk__30332_30343 = G__30355;
count__30333_30344 = G__30356;
i__30334_30345 = G__30357;
continue;
} else {
var dep_30358 = cljs.core.first.call(null,seq__30331_30352__$1);
topo_sort_helper_STAR_.call(null,dep_30358,(depth + (1)),state);

var G__30359 = cljs.core.next.call(null,seq__30331_30352__$1);
var G__30360 = null;
var G__30361 = (0);
var G__30362 = (0);
seq__30331_30342 = G__30359;
chunk__30332_30343 = G__30360;
count__30333_30344 = G__30361;
i__30334_30345 = G__30362;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30335){
var vec__30339 = p__30335;
var seq__30340 = cljs.core.seq.call(null,vec__30339);
var first__30341 = cljs.core.first.call(null,seq__30340);
var seq__30340__$1 = cljs.core.next.call(null,seq__30340);
var x = first__30341;
var xs = seq__30340__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30339,seq__30340,first__30341,seq__30340__$1,x,xs,get_deps__$1){
return (function (p1__30281_SHARP_){
return clojure.set.difference.call(null,p1__30281_SHARP_,x);
});})(vec__30339,seq__30340,first__30341,seq__30340__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30375 = cljs.core.seq.call(null,provides);
var chunk__30376 = null;
var count__30377 = (0);
var i__30378 = (0);
while(true){
if((i__30378 < count__30377)){
var prov = cljs.core._nth.call(null,chunk__30376,i__30378);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30379_30387 = cljs.core.seq.call(null,requires);
var chunk__30380_30388 = null;
var count__30381_30389 = (0);
var i__30382_30390 = (0);
while(true){
if((i__30382_30390 < count__30381_30389)){
var req_30391 = cljs.core._nth.call(null,chunk__30380_30388,i__30382_30390);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30391,prov);

var G__30392 = seq__30379_30387;
var G__30393 = chunk__30380_30388;
var G__30394 = count__30381_30389;
var G__30395 = (i__30382_30390 + (1));
seq__30379_30387 = G__30392;
chunk__30380_30388 = G__30393;
count__30381_30389 = G__30394;
i__30382_30390 = G__30395;
continue;
} else {
var temp__4657__auto___30396 = cljs.core.seq.call(null,seq__30379_30387);
if(temp__4657__auto___30396){
var seq__30379_30397__$1 = temp__4657__auto___30396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30379_30397__$1)){
var c__22439__auto___30398 = cljs.core.chunk_first.call(null,seq__30379_30397__$1);
var G__30399 = cljs.core.chunk_rest.call(null,seq__30379_30397__$1);
var G__30400 = c__22439__auto___30398;
var G__30401 = cljs.core.count.call(null,c__22439__auto___30398);
var G__30402 = (0);
seq__30379_30387 = G__30399;
chunk__30380_30388 = G__30400;
count__30381_30389 = G__30401;
i__30382_30390 = G__30402;
continue;
} else {
var req_30403 = cljs.core.first.call(null,seq__30379_30397__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30403,prov);

var G__30404 = cljs.core.next.call(null,seq__30379_30397__$1);
var G__30405 = null;
var G__30406 = (0);
var G__30407 = (0);
seq__30379_30387 = G__30404;
chunk__30380_30388 = G__30405;
count__30381_30389 = G__30406;
i__30382_30390 = G__30407;
continue;
}
} else {
}
}
break;
}

var G__30408 = seq__30375;
var G__30409 = chunk__30376;
var G__30410 = count__30377;
var G__30411 = (i__30378 + (1));
seq__30375 = G__30408;
chunk__30376 = G__30409;
count__30377 = G__30410;
i__30378 = G__30411;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30375);
if(temp__4657__auto__){
var seq__30375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30375__$1)){
var c__22439__auto__ = cljs.core.chunk_first.call(null,seq__30375__$1);
var G__30412 = cljs.core.chunk_rest.call(null,seq__30375__$1);
var G__30413 = c__22439__auto__;
var G__30414 = cljs.core.count.call(null,c__22439__auto__);
var G__30415 = (0);
seq__30375 = G__30412;
chunk__30376 = G__30413;
count__30377 = G__30414;
i__30378 = G__30415;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30375__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30383_30416 = cljs.core.seq.call(null,requires);
var chunk__30384_30417 = null;
var count__30385_30418 = (0);
var i__30386_30419 = (0);
while(true){
if((i__30386_30419 < count__30385_30418)){
var req_30420 = cljs.core._nth.call(null,chunk__30384_30417,i__30386_30419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30420,prov);

var G__30421 = seq__30383_30416;
var G__30422 = chunk__30384_30417;
var G__30423 = count__30385_30418;
var G__30424 = (i__30386_30419 + (1));
seq__30383_30416 = G__30421;
chunk__30384_30417 = G__30422;
count__30385_30418 = G__30423;
i__30386_30419 = G__30424;
continue;
} else {
var temp__4657__auto___30425__$1 = cljs.core.seq.call(null,seq__30383_30416);
if(temp__4657__auto___30425__$1){
var seq__30383_30426__$1 = temp__4657__auto___30425__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30383_30426__$1)){
var c__22439__auto___30427 = cljs.core.chunk_first.call(null,seq__30383_30426__$1);
var G__30428 = cljs.core.chunk_rest.call(null,seq__30383_30426__$1);
var G__30429 = c__22439__auto___30427;
var G__30430 = cljs.core.count.call(null,c__22439__auto___30427);
var G__30431 = (0);
seq__30383_30416 = G__30428;
chunk__30384_30417 = G__30429;
count__30385_30418 = G__30430;
i__30386_30419 = G__30431;
continue;
} else {
var req_30432 = cljs.core.first.call(null,seq__30383_30426__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30432,prov);

var G__30433 = cljs.core.next.call(null,seq__30383_30426__$1);
var G__30434 = null;
var G__30435 = (0);
var G__30436 = (0);
seq__30383_30416 = G__30433;
chunk__30384_30417 = G__30434;
count__30385_30418 = G__30435;
i__30386_30419 = G__30436;
continue;
}
} else {
}
}
break;
}

var G__30437 = cljs.core.next.call(null,seq__30375__$1);
var G__30438 = null;
var G__30439 = (0);
var G__30440 = (0);
seq__30375 = G__30437;
chunk__30376 = G__30438;
count__30377 = G__30439;
i__30378 = G__30440;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30445_30449 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30446_30450 = null;
var count__30447_30451 = (0);
var i__30448_30452 = (0);
while(true){
if((i__30448_30452 < count__30447_30451)){
var ns_30453 = cljs.core._nth.call(null,chunk__30446_30450,i__30448_30452);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30453);

var G__30454 = seq__30445_30449;
var G__30455 = chunk__30446_30450;
var G__30456 = count__30447_30451;
var G__30457 = (i__30448_30452 + (1));
seq__30445_30449 = G__30454;
chunk__30446_30450 = G__30455;
count__30447_30451 = G__30456;
i__30448_30452 = G__30457;
continue;
} else {
var temp__4657__auto___30458 = cljs.core.seq.call(null,seq__30445_30449);
if(temp__4657__auto___30458){
var seq__30445_30459__$1 = temp__4657__auto___30458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30445_30459__$1)){
var c__22439__auto___30460 = cljs.core.chunk_first.call(null,seq__30445_30459__$1);
var G__30461 = cljs.core.chunk_rest.call(null,seq__30445_30459__$1);
var G__30462 = c__22439__auto___30460;
var G__30463 = cljs.core.count.call(null,c__22439__auto___30460);
var G__30464 = (0);
seq__30445_30449 = G__30461;
chunk__30446_30450 = G__30462;
count__30447_30451 = G__30463;
i__30448_30452 = G__30464;
continue;
} else {
var ns_30465 = cljs.core.first.call(null,seq__30445_30459__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30465);

var G__30466 = cljs.core.next.call(null,seq__30445_30459__$1);
var G__30467 = null;
var G__30468 = (0);
var G__30469 = (0);
seq__30445_30449 = G__30466;
chunk__30446_30450 = G__30467;
count__30447_30451 = G__30468;
i__30448_30452 = G__30469;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21625__auto__ = goog.require__;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30470__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30471__i = 0, G__30471__a = new Array(arguments.length -  0);
while (G__30471__i < G__30471__a.length) {G__30471__a[G__30471__i] = arguments[G__30471__i + 0]; ++G__30471__i;}
  args = new cljs.core.IndexedSeq(G__30471__a,0);
} 
return G__30470__delegate.call(this,args);};
G__30470.cljs$lang$maxFixedArity = 0;
G__30470.cljs$lang$applyTo = (function (arglist__30472){
var args = cljs.core.seq(arglist__30472);
return G__30470__delegate(args);
});
G__30470.cljs$core$IFn$_invoke$arity$variadic = G__30470__delegate;
return G__30470;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30474 = cljs.core._EQ_;
var expr__30475 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30474.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30475))){
var path_parts = ((function (pred__30474,expr__30475){
return (function (p1__30473_SHARP_){
return clojure.string.split.call(null,p1__30473_SHARP_,/[\/\\]/);
});})(pred__30474,expr__30475))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30474,expr__30475){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30477){if((e30477 instanceof Error)){
var e = e30477;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30477;

}
}})());
});
;})(path_parts,sep,root,pred__30474,expr__30475))
} else {
if(cljs.core.truth_(pred__30474.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30475))){
return ((function (pred__30474,expr__30475){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30474,expr__30475){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30474,expr__30475))
);

return deferred.addErrback(((function (deferred,pred__30474,expr__30475){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30474,expr__30475))
);
});
;})(pred__30474,expr__30475))
} else {
return ((function (pred__30474,expr__30475){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30474,expr__30475))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30478,callback){
var map__30481 = p__30478;
var map__30481__$1 = ((((!((map__30481 == null)))?((((map__30481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30481):map__30481);
var file_msg = map__30481__$1;
var request_url = cljs.core.get.call(null,map__30481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30481,map__30481__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30481,map__30481__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_30505){
var state_val_30506 = (state_30505[(1)]);
if((state_val_30506 === (7))){
var inst_30501 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30507_30527 = state_30505__$1;
(statearr_30507_30527[(2)] = inst_30501);

(statearr_30507_30527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (1))){
var state_30505__$1 = state_30505;
var statearr_30508_30528 = state_30505__$1;
(statearr_30508_30528[(2)] = null);

(statearr_30508_30528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (4))){
var inst_30485 = (state_30505[(7)]);
var inst_30485__$1 = (state_30505[(2)]);
var state_30505__$1 = (function (){var statearr_30509 = state_30505;
(statearr_30509[(7)] = inst_30485__$1);

return statearr_30509;
})();
if(cljs.core.truth_(inst_30485__$1)){
var statearr_30510_30529 = state_30505__$1;
(statearr_30510_30529[(1)] = (5));

} else {
var statearr_30511_30530 = state_30505__$1;
(statearr_30511_30530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (6))){
var state_30505__$1 = state_30505;
var statearr_30512_30531 = state_30505__$1;
(statearr_30512_30531[(2)] = null);

(statearr_30512_30531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (3))){
var inst_30503 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30505__$1,inst_30503);
} else {
if((state_val_30506 === (2))){
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30505__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30506 === (11))){
var inst_30497 = (state_30505[(2)]);
var state_30505__$1 = (function (){var statearr_30513 = state_30505;
(statearr_30513[(8)] = inst_30497);

return statearr_30513;
})();
var statearr_30514_30532 = state_30505__$1;
(statearr_30514_30532[(2)] = null);

(statearr_30514_30532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (9))){
var inst_30489 = (state_30505[(9)]);
var inst_30491 = (state_30505[(10)]);
var inst_30493 = inst_30491.call(null,inst_30489);
var state_30505__$1 = state_30505;
var statearr_30515_30533 = state_30505__$1;
(statearr_30515_30533[(2)] = inst_30493);

(statearr_30515_30533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (5))){
var inst_30485 = (state_30505[(7)]);
var inst_30487 = figwheel.client.file_reloading.blocking_load.call(null,inst_30485);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30505__$1,(8),inst_30487);
} else {
if((state_val_30506 === (10))){
var inst_30489 = (state_30505[(9)]);
var inst_30495 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30489);
var state_30505__$1 = state_30505;
var statearr_30516_30534 = state_30505__$1;
(statearr_30516_30534[(2)] = inst_30495);

(statearr_30516_30534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (8))){
var inst_30485 = (state_30505[(7)]);
var inst_30491 = (state_30505[(10)]);
var inst_30489 = (state_30505[(2)]);
var inst_30490 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30491__$1 = cljs.core.get.call(null,inst_30490,inst_30485);
var state_30505__$1 = (function (){var statearr_30517 = state_30505;
(statearr_30517[(9)] = inst_30489);

(statearr_30517[(10)] = inst_30491__$1);

return statearr_30517;
})();
if(cljs.core.truth_(inst_30491__$1)){
var statearr_30518_30535 = state_30505__$1;
(statearr_30518_30535[(1)] = (9));

} else {
var statearr_30519_30536 = state_30505__$1;
(statearr_30519_30536[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27168__auto__ = null;
var figwheel$client$file_reloading$state_machine__27168__auto____0 = (function (){
var statearr_30523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30523[(0)] = figwheel$client$file_reloading$state_machine__27168__auto__);

(statearr_30523[(1)] = (1));

return statearr_30523;
});
var figwheel$client$file_reloading$state_machine__27168__auto____1 = (function (state_30505){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_30505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e30524){if((e30524 instanceof Object)){
var ex__27171__auto__ = e30524;
var statearr_30525_30537 = state_30505;
(statearr_30525_30537[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30538 = state_30505;
state_30505 = G__30538;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27168__auto__ = function(state_30505){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27168__auto____1.call(this,state_30505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27168__auto____0;
figwheel$client$file_reloading$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27168__auto____1;
return figwheel$client$file_reloading$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_30526 = f__27280__auto__.call(null);
(statearr_30526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30539,callback){
var map__30542 = p__30539;
var map__30542__$1 = ((((!((map__30542 == null)))?((((map__30542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30542):map__30542);
var file_msg = map__30542__$1;
var namespace = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30542,map__30542__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30542,map__30542__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30544){
var map__30547 = p__30544;
var map__30547__$1 = ((((!((map__30547 == null)))?((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var file_msg = map__30547__$1;
var namespace = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21613__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21613__auto__){
var or__21625__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
var or__21625__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21625__auto____$1)){
return or__21625__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21613__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30549,callback){
var map__30552 = p__30549;
var map__30552__$1 = ((((!((map__30552 == null)))?((((map__30552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30552):map__30552);
var file_msg = map__30552__$1;
var request_url = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27279__auto___30656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___30656,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___30656,out){
return (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (1))){
var inst_30612 = cljs.core.seq.call(null,files);
var inst_30613 = cljs.core.first.call(null,inst_30612);
var inst_30614 = cljs.core.next.call(null,inst_30612);
var inst_30615 = files;
var state_30638__$1 = (function (){var statearr_30640 = state_30638;
(statearr_30640[(7)] = inst_30614);

(statearr_30640[(8)] = inst_30613);

(statearr_30640[(9)] = inst_30615);

return statearr_30640;
})();
var statearr_30641_30657 = state_30638__$1;
(statearr_30641_30657[(2)] = null);

(statearr_30641_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (2))){
var inst_30615 = (state_30638[(9)]);
var inst_30621 = (state_30638[(10)]);
var inst_30620 = cljs.core.seq.call(null,inst_30615);
var inst_30621__$1 = cljs.core.first.call(null,inst_30620);
var inst_30622 = cljs.core.next.call(null,inst_30620);
var inst_30623 = (inst_30621__$1 == null);
var inst_30624 = cljs.core.not.call(null,inst_30623);
var state_30638__$1 = (function (){var statearr_30642 = state_30638;
(statearr_30642[(10)] = inst_30621__$1);

(statearr_30642[(11)] = inst_30622);

return statearr_30642;
})();
if(inst_30624){
var statearr_30643_30658 = state_30638__$1;
(statearr_30643_30658[(1)] = (4));

} else {
var statearr_30644_30659 = state_30638__$1;
(statearr_30644_30659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (3))){
var inst_30636 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30638__$1,inst_30636);
} else {
if((state_val_30639 === (4))){
var inst_30621 = (state_30638[(10)]);
var inst_30626 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30621);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30638__$1,(7),inst_30626);
} else {
if((state_val_30639 === (5))){
var inst_30632 = cljs.core.async.close_BANG_.call(null,out);
var state_30638__$1 = state_30638;
var statearr_30645_30660 = state_30638__$1;
(statearr_30645_30660[(2)] = inst_30632);

(statearr_30645_30660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (6))){
var inst_30634 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30646_30661 = state_30638__$1;
(statearr_30646_30661[(2)] = inst_30634);

(statearr_30646_30661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (7))){
var inst_30622 = (state_30638[(11)]);
var inst_30628 = (state_30638[(2)]);
var inst_30629 = cljs.core.async.put_BANG_.call(null,out,inst_30628);
var inst_30615 = inst_30622;
var state_30638__$1 = (function (){var statearr_30647 = state_30638;
(statearr_30647[(9)] = inst_30615);

(statearr_30647[(12)] = inst_30629);

return statearr_30647;
})();
var statearr_30648_30662 = state_30638__$1;
(statearr_30648_30662[(2)] = null);

(statearr_30648_30662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27279__auto___30656,out))
;
return ((function (switch__27167__auto__,c__27279__auto___30656,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____0 = (function (){
var statearr_30652 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30652[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__);

(statearr_30652[(1)] = (1));

return statearr_30652;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____1 = (function (state_30638){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_30638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e30653){if((e30653 instanceof Object)){
var ex__27171__auto__ = e30653;
var statearr_30654_30663 = state_30638;
(statearr_30654_30663[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30664 = state_30638;
state_30638 = G__30664;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___30656,out))
})();
var state__27281__auto__ = (function (){var statearr_30655 = f__27280__auto__.call(null);
(statearr_30655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___30656);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___30656,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30665,opts){
var map__30669 = p__30665;
var map__30669__$1 = ((((!((map__30669 == null)))?((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var eval_body = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21613__auto__ = eval_body;
if(cljs.core.truth_(and__21613__auto__)){
return typeof eval_body === 'string';
} else {
return and__21613__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30671){var e = e30671;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30672_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30672_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30681){
var vec__30682 = p__30681;
var k = cljs.core.nth.call(null,vec__30682,(0),null);
var v = cljs.core.nth.call(null,vec__30682,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30685){
var vec__30686 = p__30685;
var k = cljs.core.nth.call(null,vec__30686,(0),null);
var v = cljs.core.nth.call(null,vec__30686,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30692,p__30693){
var map__30941 = p__30692;
var map__30941__$1 = ((((!((map__30941 == null)))?((((map__30941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30941):map__30941);
var opts = map__30941__$1;
var before_jsload = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30942 = p__30693;
var map__30942__$1 = ((((!((map__30942 == null)))?((((map__30942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30942):map__30942);
var msg = map__30942__$1;
var files = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31096){
var state_val_31097 = (state_31096[(1)]);
if((state_val_31097 === (7))){
var inst_30957 = (state_31096[(7)]);
var inst_30956 = (state_31096[(8)]);
var inst_30958 = (state_31096[(9)]);
var inst_30959 = (state_31096[(10)]);
var inst_30964 = cljs.core._nth.call(null,inst_30957,inst_30959);
var inst_30965 = figwheel.client.file_reloading.eval_body.call(null,inst_30964,opts);
var inst_30966 = (inst_30959 + (1));
var tmp31098 = inst_30957;
var tmp31099 = inst_30956;
var tmp31100 = inst_30958;
var inst_30956__$1 = tmp31099;
var inst_30957__$1 = tmp31098;
var inst_30958__$1 = tmp31100;
var inst_30959__$1 = inst_30966;
var state_31096__$1 = (function (){var statearr_31101 = state_31096;
(statearr_31101[(11)] = inst_30965);

(statearr_31101[(7)] = inst_30957__$1);

(statearr_31101[(8)] = inst_30956__$1);

(statearr_31101[(9)] = inst_30958__$1);

(statearr_31101[(10)] = inst_30959__$1);

return statearr_31101;
})();
var statearr_31102_31188 = state_31096__$1;
(statearr_31102_31188[(2)] = null);

(statearr_31102_31188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (20))){
var inst_30999 = (state_31096[(12)]);
var inst_31007 = figwheel.client.file_reloading.sort_files.call(null,inst_30999);
var state_31096__$1 = state_31096;
var statearr_31103_31189 = state_31096__$1;
(statearr_31103_31189[(2)] = inst_31007);

(statearr_31103_31189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (27))){
var state_31096__$1 = state_31096;
var statearr_31104_31190 = state_31096__$1;
(statearr_31104_31190[(2)] = null);

(statearr_31104_31190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (1))){
var inst_30948 = (state_31096[(13)]);
var inst_30945 = before_jsload.call(null,files);
var inst_30946 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30947 = (function (){return ((function (inst_30948,inst_30945,inst_30946,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30689_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30689_SHARP_);
});
;})(inst_30948,inst_30945,inst_30946,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30948__$1 = cljs.core.filter.call(null,inst_30947,files);
var inst_30949 = cljs.core.not_empty.call(null,inst_30948__$1);
var state_31096__$1 = (function (){var statearr_31105 = state_31096;
(statearr_31105[(14)] = inst_30945);

(statearr_31105[(13)] = inst_30948__$1);

(statearr_31105[(15)] = inst_30946);

return statearr_31105;
})();
if(cljs.core.truth_(inst_30949)){
var statearr_31106_31191 = state_31096__$1;
(statearr_31106_31191[(1)] = (2));

} else {
var statearr_31107_31192 = state_31096__$1;
(statearr_31107_31192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (24))){
var state_31096__$1 = state_31096;
var statearr_31108_31193 = state_31096__$1;
(statearr_31108_31193[(2)] = null);

(statearr_31108_31193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (39))){
var inst_31049 = (state_31096[(16)]);
var state_31096__$1 = state_31096;
var statearr_31109_31194 = state_31096__$1;
(statearr_31109_31194[(2)] = inst_31049);

(statearr_31109_31194[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (46))){
var inst_31091 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31110_31195 = state_31096__$1;
(statearr_31110_31195[(2)] = inst_31091);

(statearr_31110_31195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (4))){
var inst_30993 = (state_31096[(2)]);
var inst_30994 = cljs.core.List.EMPTY;
var inst_30995 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30994);
var inst_30996 = (function (){return ((function (inst_30993,inst_30994,inst_30995,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30690_SHARP_){
var and__21613__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30690_SHARP_);
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30690_SHARP_));
} else {
return and__21613__auto__;
}
});
;})(inst_30993,inst_30994,inst_30995,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30997 = cljs.core.filter.call(null,inst_30996,files);
var inst_30998 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30999 = cljs.core.concat.call(null,inst_30997,inst_30998);
var state_31096__$1 = (function (){var statearr_31111 = state_31096;
(statearr_31111[(17)] = inst_30995);

(statearr_31111[(18)] = inst_30993);

(statearr_31111[(12)] = inst_30999);

return statearr_31111;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31112_31196 = state_31096__$1;
(statearr_31112_31196[(1)] = (16));

} else {
var statearr_31113_31197 = state_31096__$1;
(statearr_31113_31197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (15))){
var inst_30983 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31114_31198 = state_31096__$1;
(statearr_31114_31198[(2)] = inst_30983);

(statearr_31114_31198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (21))){
var inst_31009 = (state_31096[(19)]);
var inst_31009__$1 = (state_31096[(2)]);
var inst_31010 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31009__$1);
var state_31096__$1 = (function (){var statearr_31115 = state_31096;
(statearr_31115[(19)] = inst_31009__$1);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31096__$1,(22),inst_31010);
} else {
if((state_val_31097 === (31))){
var inst_31094 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31096__$1,inst_31094);
} else {
if((state_val_31097 === (32))){
var inst_31049 = (state_31096[(16)]);
var inst_31054 = inst_31049.cljs$lang$protocol_mask$partition0$;
var inst_31055 = (inst_31054 & (64));
var inst_31056 = inst_31049.cljs$core$ISeq$;
var inst_31057 = (cljs.core.PROTOCOL_SENTINEL === inst_31056);
var inst_31058 = (inst_31055) || (inst_31057);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31058)){
var statearr_31116_31199 = state_31096__$1;
(statearr_31116_31199[(1)] = (35));

} else {
var statearr_31117_31200 = state_31096__$1;
(statearr_31117_31200[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (40))){
var inst_31071 = (state_31096[(20)]);
var inst_31070 = (state_31096[(2)]);
var inst_31071__$1 = cljs.core.get.call(null,inst_31070,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31072 = cljs.core.get.call(null,inst_31070,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31073 = cljs.core.not_empty.call(null,inst_31071__$1);
var state_31096__$1 = (function (){var statearr_31118 = state_31096;
(statearr_31118[(21)] = inst_31072);

(statearr_31118[(20)] = inst_31071__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31119_31201 = state_31096__$1;
(statearr_31119_31201[(1)] = (41));

} else {
var statearr_31120_31202 = state_31096__$1;
(statearr_31120_31202[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (33))){
var state_31096__$1 = state_31096;
var statearr_31121_31203 = state_31096__$1;
(statearr_31121_31203[(2)] = false);

(statearr_31121_31203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (13))){
var inst_30969 = (state_31096[(22)]);
var inst_30973 = cljs.core.chunk_first.call(null,inst_30969);
var inst_30974 = cljs.core.chunk_rest.call(null,inst_30969);
var inst_30975 = cljs.core.count.call(null,inst_30973);
var inst_30956 = inst_30974;
var inst_30957 = inst_30973;
var inst_30958 = inst_30975;
var inst_30959 = (0);
var state_31096__$1 = (function (){var statearr_31122 = state_31096;
(statearr_31122[(7)] = inst_30957);

(statearr_31122[(8)] = inst_30956);

(statearr_31122[(9)] = inst_30958);

(statearr_31122[(10)] = inst_30959);

return statearr_31122;
})();
var statearr_31123_31204 = state_31096__$1;
(statearr_31123_31204[(2)] = null);

(statearr_31123_31204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (22))){
var inst_31017 = (state_31096[(23)]);
var inst_31013 = (state_31096[(24)]);
var inst_31012 = (state_31096[(25)]);
var inst_31009 = (state_31096[(19)]);
var inst_31012__$1 = (state_31096[(2)]);
var inst_31013__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31012__$1);
var inst_31014 = (function (){var all_files = inst_31009;
var res_SINGLEQUOTE_ = inst_31012__$1;
var res = inst_31013__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31017,inst_31013,inst_31012,inst_31009,inst_31012__$1,inst_31013__$1,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30691_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30691_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31017,inst_31013,inst_31012,inst_31009,inst_31012__$1,inst_31013__$1,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31015 = cljs.core.filter.call(null,inst_31014,inst_31012__$1);
var inst_31016 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31017__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31016);
var inst_31018 = cljs.core.not_empty.call(null,inst_31017__$1);
var state_31096__$1 = (function (){var statearr_31124 = state_31096;
(statearr_31124[(23)] = inst_31017__$1);

(statearr_31124[(24)] = inst_31013__$1);

(statearr_31124[(26)] = inst_31015);

(statearr_31124[(25)] = inst_31012__$1);

return statearr_31124;
})();
if(cljs.core.truth_(inst_31018)){
var statearr_31125_31205 = state_31096__$1;
(statearr_31125_31205[(1)] = (23));

} else {
var statearr_31126_31206 = state_31096__$1;
(statearr_31126_31206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (36))){
var state_31096__$1 = state_31096;
var statearr_31127_31207 = state_31096__$1;
(statearr_31127_31207[(2)] = false);

(statearr_31127_31207[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (41))){
var inst_31071 = (state_31096[(20)]);
var inst_31075 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31076 = cljs.core.map.call(null,inst_31075,inst_31071);
var inst_31077 = cljs.core.pr_str.call(null,inst_31076);
var inst_31078 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31077)].join('');
var inst_31079 = figwheel.client.utils.log.call(null,inst_31078);
var state_31096__$1 = state_31096;
var statearr_31128_31208 = state_31096__$1;
(statearr_31128_31208[(2)] = inst_31079);

(statearr_31128_31208[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (43))){
var inst_31072 = (state_31096[(21)]);
var inst_31082 = (state_31096[(2)]);
var inst_31083 = cljs.core.not_empty.call(null,inst_31072);
var state_31096__$1 = (function (){var statearr_31129 = state_31096;
(statearr_31129[(27)] = inst_31082);

return statearr_31129;
})();
if(cljs.core.truth_(inst_31083)){
var statearr_31130_31209 = state_31096__$1;
(statearr_31130_31209[(1)] = (44));

} else {
var statearr_31131_31210 = state_31096__$1;
(statearr_31131_31210[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (29))){
var inst_31017 = (state_31096[(23)]);
var inst_31013 = (state_31096[(24)]);
var inst_31015 = (state_31096[(26)]);
var inst_31049 = (state_31096[(16)]);
var inst_31012 = (state_31096[(25)]);
var inst_31009 = (state_31096[(19)]);
var inst_31045 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31048 = (function (){var all_files = inst_31009;
var res_SINGLEQUOTE_ = inst_31012;
var res = inst_31013;
var files_not_loaded = inst_31015;
var dependencies_that_loaded = inst_31017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31049,inst_31012,inst_31009,inst_31045,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31047){
var map__31132 = p__31047;
var map__31132__$1 = ((((!((map__31132 == null)))?((((map__31132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31132):map__31132);
var namespace = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31049,inst_31012,inst_31009,inst_31045,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31049__$1 = cljs.core.group_by.call(null,inst_31048,inst_31015);
var inst_31051 = (inst_31049__$1 == null);
var inst_31052 = cljs.core.not.call(null,inst_31051);
var state_31096__$1 = (function (){var statearr_31134 = state_31096;
(statearr_31134[(28)] = inst_31045);

(statearr_31134[(16)] = inst_31049__$1);

return statearr_31134;
})();
if(inst_31052){
var statearr_31135_31211 = state_31096__$1;
(statearr_31135_31211[(1)] = (32));

} else {
var statearr_31136_31212 = state_31096__$1;
(statearr_31136_31212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (44))){
var inst_31072 = (state_31096[(21)]);
var inst_31085 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31072);
var inst_31086 = cljs.core.pr_str.call(null,inst_31085);
var inst_31087 = [cljs.core.str("not required: "),cljs.core.str(inst_31086)].join('');
var inst_31088 = figwheel.client.utils.log.call(null,inst_31087);
var state_31096__$1 = state_31096;
var statearr_31137_31213 = state_31096__$1;
(statearr_31137_31213[(2)] = inst_31088);

(statearr_31137_31213[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (6))){
var inst_30990 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31138_31214 = state_31096__$1;
(statearr_31138_31214[(2)] = inst_30990);

(statearr_31138_31214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (28))){
var inst_31015 = (state_31096[(26)]);
var inst_31042 = (state_31096[(2)]);
var inst_31043 = cljs.core.not_empty.call(null,inst_31015);
var state_31096__$1 = (function (){var statearr_31139 = state_31096;
(statearr_31139[(29)] = inst_31042);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31043)){
var statearr_31140_31215 = state_31096__$1;
(statearr_31140_31215[(1)] = (29));

} else {
var statearr_31141_31216 = state_31096__$1;
(statearr_31141_31216[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (25))){
var inst_31013 = (state_31096[(24)]);
var inst_31029 = (state_31096[(2)]);
var inst_31030 = cljs.core.not_empty.call(null,inst_31013);
var state_31096__$1 = (function (){var statearr_31142 = state_31096;
(statearr_31142[(30)] = inst_31029);

return statearr_31142;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31143_31217 = state_31096__$1;
(statearr_31143_31217[(1)] = (26));

} else {
var statearr_31144_31218 = state_31096__$1;
(statearr_31144_31218[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (34))){
var inst_31065 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31065)){
var statearr_31145_31219 = state_31096__$1;
(statearr_31145_31219[(1)] = (38));

} else {
var statearr_31146_31220 = state_31096__$1;
(statearr_31146_31220[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (17))){
var state_31096__$1 = state_31096;
var statearr_31147_31221 = state_31096__$1;
(statearr_31147_31221[(2)] = recompile_dependents);

(statearr_31147_31221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (3))){
var state_31096__$1 = state_31096;
var statearr_31148_31222 = state_31096__$1;
(statearr_31148_31222[(2)] = null);

(statearr_31148_31222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (12))){
var inst_30986 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31149_31223 = state_31096__$1;
(statearr_31149_31223[(2)] = inst_30986);

(statearr_31149_31223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (2))){
var inst_30948 = (state_31096[(13)]);
var inst_30955 = cljs.core.seq.call(null,inst_30948);
var inst_30956 = inst_30955;
var inst_30957 = null;
var inst_30958 = (0);
var inst_30959 = (0);
var state_31096__$1 = (function (){var statearr_31150 = state_31096;
(statearr_31150[(7)] = inst_30957);

(statearr_31150[(8)] = inst_30956);

(statearr_31150[(9)] = inst_30958);

(statearr_31150[(10)] = inst_30959);

return statearr_31150;
})();
var statearr_31151_31224 = state_31096__$1;
(statearr_31151_31224[(2)] = null);

(statearr_31151_31224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (23))){
var inst_31017 = (state_31096[(23)]);
var inst_31013 = (state_31096[(24)]);
var inst_31015 = (state_31096[(26)]);
var inst_31012 = (state_31096[(25)]);
var inst_31009 = (state_31096[(19)]);
var inst_31020 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31022 = (function (){var all_files = inst_31009;
var res_SINGLEQUOTE_ = inst_31012;
var res = inst_31013;
var files_not_loaded = inst_31015;
var dependencies_that_loaded = inst_31017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31020,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31021){
var map__31152 = p__31021;
var map__31152__$1 = ((((!((map__31152 == null)))?((((map__31152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31152):map__31152);
var request_url = cljs.core.get.call(null,map__31152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31020,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31023 = cljs.core.reverse.call(null,inst_31017);
var inst_31024 = cljs.core.map.call(null,inst_31022,inst_31023);
var inst_31025 = cljs.core.pr_str.call(null,inst_31024);
var inst_31026 = figwheel.client.utils.log.call(null,inst_31025);
var state_31096__$1 = (function (){var statearr_31154 = state_31096;
(statearr_31154[(31)] = inst_31020);

return statearr_31154;
})();
var statearr_31155_31225 = state_31096__$1;
(statearr_31155_31225[(2)] = inst_31026);

(statearr_31155_31225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (35))){
var state_31096__$1 = state_31096;
var statearr_31156_31226 = state_31096__$1;
(statearr_31156_31226[(2)] = true);

(statearr_31156_31226[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (19))){
var inst_30999 = (state_31096[(12)]);
var inst_31005 = figwheel.client.file_reloading.expand_files.call(null,inst_30999);
var state_31096__$1 = state_31096;
var statearr_31157_31227 = state_31096__$1;
(statearr_31157_31227[(2)] = inst_31005);

(statearr_31157_31227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (11))){
var state_31096__$1 = state_31096;
var statearr_31158_31228 = state_31096__$1;
(statearr_31158_31228[(2)] = null);

(statearr_31158_31228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (9))){
var inst_30988 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31159_31229 = state_31096__$1;
(statearr_31159_31229[(2)] = inst_30988);

(statearr_31159_31229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (5))){
var inst_30958 = (state_31096[(9)]);
var inst_30959 = (state_31096[(10)]);
var inst_30961 = (inst_30959 < inst_30958);
var inst_30962 = inst_30961;
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_30962)){
var statearr_31160_31230 = state_31096__$1;
(statearr_31160_31230[(1)] = (7));

} else {
var statearr_31161_31231 = state_31096__$1;
(statearr_31161_31231[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (14))){
var inst_30969 = (state_31096[(22)]);
var inst_30978 = cljs.core.first.call(null,inst_30969);
var inst_30979 = figwheel.client.file_reloading.eval_body.call(null,inst_30978,opts);
var inst_30980 = cljs.core.next.call(null,inst_30969);
var inst_30956 = inst_30980;
var inst_30957 = null;
var inst_30958 = (0);
var inst_30959 = (0);
var state_31096__$1 = (function (){var statearr_31162 = state_31096;
(statearr_31162[(7)] = inst_30957);

(statearr_31162[(8)] = inst_30956);

(statearr_31162[(32)] = inst_30979);

(statearr_31162[(9)] = inst_30958);

(statearr_31162[(10)] = inst_30959);

return statearr_31162;
})();
var statearr_31163_31232 = state_31096__$1;
(statearr_31163_31232[(2)] = null);

(statearr_31163_31232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (45))){
var state_31096__$1 = state_31096;
var statearr_31164_31233 = state_31096__$1;
(statearr_31164_31233[(2)] = null);

(statearr_31164_31233[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (26))){
var inst_31017 = (state_31096[(23)]);
var inst_31013 = (state_31096[(24)]);
var inst_31015 = (state_31096[(26)]);
var inst_31012 = (state_31096[(25)]);
var inst_31009 = (state_31096[(19)]);
var inst_31032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31034 = (function (){var all_files = inst_31009;
var res_SINGLEQUOTE_ = inst_31012;
var res = inst_31013;
var files_not_loaded = inst_31015;
var dependencies_that_loaded = inst_31017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31032,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31033){
var map__31165 = p__31033;
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var namespace = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31032,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31035 = cljs.core.map.call(null,inst_31034,inst_31013);
var inst_31036 = cljs.core.pr_str.call(null,inst_31035);
var inst_31037 = figwheel.client.utils.log.call(null,inst_31036);
var inst_31038 = (function (){var all_files = inst_31009;
var res_SINGLEQUOTE_ = inst_31012;
var res = inst_31013;
var files_not_loaded = inst_31015;
var dependencies_that_loaded = inst_31017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31032,inst_31034,inst_31035,inst_31036,inst_31037,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31017,inst_31013,inst_31015,inst_31012,inst_31009,inst_31032,inst_31034,inst_31035,inst_31036,inst_31037,state_val_31097,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31039 = setTimeout(inst_31038,(10));
var state_31096__$1 = (function (){var statearr_31167 = state_31096;
(statearr_31167[(33)] = inst_31032);

(statearr_31167[(34)] = inst_31037);

return statearr_31167;
})();
var statearr_31168_31234 = state_31096__$1;
(statearr_31168_31234[(2)] = inst_31039);

(statearr_31168_31234[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (16))){
var state_31096__$1 = state_31096;
var statearr_31169_31235 = state_31096__$1;
(statearr_31169_31235[(2)] = reload_dependents);

(statearr_31169_31235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (38))){
var inst_31049 = (state_31096[(16)]);
var inst_31067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31049);
var state_31096__$1 = state_31096;
var statearr_31170_31236 = state_31096__$1;
(statearr_31170_31236[(2)] = inst_31067);

(statearr_31170_31236[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (30))){
var state_31096__$1 = state_31096;
var statearr_31171_31237 = state_31096__$1;
(statearr_31171_31237[(2)] = null);

(statearr_31171_31237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (10))){
var inst_30969 = (state_31096[(22)]);
var inst_30971 = cljs.core.chunked_seq_QMARK_.call(null,inst_30969);
var state_31096__$1 = state_31096;
if(inst_30971){
var statearr_31172_31238 = state_31096__$1;
(statearr_31172_31238[(1)] = (13));

} else {
var statearr_31173_31239 = state_31096__$1;
(statearr_31173_31239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (18))){
var inst_31003 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31003)){
var statearr_31174_31240 = state_31096__$1;
(statearr_31174_31240[(1)] = (19));

} else {
var statearr_31175_31241 = state_31096__$1;
(statearr_31175_31241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (42))){
var state_31096__$1 = state_31096;
var statearr_31176_31242 = state_31096__$1;
(statearr_31176_31242[(2)] = null);

(statearr_31176_31242[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (37))){
var inst_31062 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31177_31243 = state_31096__$1;
(statearr_31177_31243[(2)] = inst_31062);

(statearr_31177_31243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (8))){
var inst_30956 = (state_31096[(8)]);
var inst_30969 = (state_31096[(22)]);
var inst_30969__$1 = cljs.core.seq.call(null,inst_30956);
var state_31096__$1 = (function (){var statearr_31178 = state_31096;
(statearr_31178[(22)] = inst_30969__$1);

return statearr_31178;
})();
if(inst_30969__$1){
var statearr_31179_31244 = state_31096__$1;
(statearr_31179_31244[(1)] = (10));

} else {
var statearr_31180_31245 = state_31096__$1;
(statearr_31180_31245[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27167__auto__,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____0 = (function (){
var statearr_31184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31184[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__);

(statearr_31184[(1)] = (1));

return statearr_31184;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____1 = (function (state_31096){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_31096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e31185){if((e31185 instanceof Object)){
var ex__27171__auto__ = e31185;
var statearr_31186_31246 = state_31096;
(statearr_31186_31246[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31247 = state_31096;
state_31096 = G__31247;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27281__auto__ = (function (){var statearr_31187 = f__27280__auto__.call(null);
(statearr_31187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__,map__30941,map__30941__$1,opts,before_jsload,on_jsload,reload_dependents,map__30942,map__30942__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27279__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31250,link){
var map__31253 = p__31250;
var map__31253__$1 = ((((!((map__31253 == null)))?((((map__31253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);
var file = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31253,map__31253__$1,file){
return (function (p1__31248_SHARP_,p2__31249_SHARP_){
if(cljs.core._EQ_.call(null,p1__31248_SHARP_,p2__31249_SHARP_)){
return p1__31248_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31253,map__31253__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31259){
var map__31260 = p__31259;
var map__31260__$1 = ((((!((map__31260 == null)))?((((map__31260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);
var match_length = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31255_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31255_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31262 = [];
var len__22733__auto___31265 = arguments.length;
var i__22734__auto___31266 = (0);
while(true){
if((i__22734__auto___31266 < len__22733__auto___31265)){
args31262.push((arguments[i__22734__auto___31266]));

var G__31267 = (i__22734__auto___31266 + (1));
i__22734__auto___31266 = G__31267;
continue;
} else {
}
break;
}

var G__31264 = args31262.length;
switch (G__31264) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31262.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31269_SHARP_,p2__31270_SHARP_){
return cljs.core.assoc.call(null,p1__31269_SHARP_,cljs.core.get.call(null,p2__31270_SHARP_,key),p2__31270_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31271){
var map__31274 = p__31271;
var map__31274__$1 = ((((!((map__31274 == null)))?((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);
var f_data = map__31274__$1;
var file = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31276,files_msg){
var map__31283 = p__31276;
var map__31283__$1 = ((((!((map__31283 == null)))?((((map__31283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31283):map__31283);
var opts = map__31283__$1;
var on_cssload = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31285_31289 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31286_31290 = null;
var count__31287_31291 = (0);
var i__31288_31292 = (0);
while(true){
if((i__31288_31292 < count__31287_31291)){
var f_31293 = cljs.core._nth.call(null,chunk__31286_31290,i__31288_31292);
figwheel.client.file_reloading.reload_css_file.call(null,f_31293);

var G__31294 = seq__31285_31289;
var G__31295 = chunk__31286_31290;
var G__31296 = count__31287_31291;
var G__31297 = (i__31288_31292 + (1));
seq__31285_31289 = G__31294;
chunk__31286_31290 = G__31295;
count__31287_31291 = G__31296;
i__31288_31292 = G__31297;
continue;
} else {
var temp__4657__auto___31298 = cljs.core.seq.call(null,seq__31285_31289);
if(temp__4657__auto___31298){
var seq__31285_31299__$1 = temp__4657__auto___31298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31285_31299__$1)){
var c__22439__auto___31300 = cljs.core.chunk_first.call(null,seq__31285_31299__$1);
var G__31301 = cljs.core.chunk_rest.call(null,seq__31285_31299__$1);
var G__31302 = c__22439__auto___31300;
var G__31303 = cljs.core.count.call(null,c__22439__auto___31300);
var G__31304 = (0);
seq__31285_31289 = G__31301;
chunk__31286_31290 = G__31302;
count__31287_31291 = G__31303;
i__31288_31292 = G__31304;
continue;
} else {
var f_31305 = cljs.core.first.call(null,seq__31285_31299__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31305);

var G__31306 = cljs.core.next.call(null,seq__31285_31299__$1);
var G__31307 = null;
var G__31308 = (0);
var G__31309 = (0);
seq__31285_31289 = G__31306;
chunk__31286_31290 = G__31307;
count__31287_31291 = G__31308;
i__31288_31292 = G__31309;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31283,map__31283__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31283,map__31283__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490042959570