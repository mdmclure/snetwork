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
var or__18876__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18876__auto__){
return or__18876__auto__;
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
var or__18876__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36042_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36042_SHARP_));
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
var seq__36047 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36048 = null;
var count__36049 = (0);
var i__36050 = (0);
while(true){
if((i__36050 < count__36049)){
var n = cljs.core._nth.call(null,chunk__36048,i__36050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36051 = seq__36047;
var G__36052 = chunk__36048;
var G__36053 = count__36049;
var G__36054 = (i__36050 + (1));
seq__36047 = G__36051;
chunk__36048 = G__36052;
count__36049 = G__36053;
i__36050 = G__36054;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36047);
if(temp__4657__auto__){
var seq__36047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36047__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__36047__$1);
var G__36055 = cljs.core.chunk_rest.call(null,seq__36047__$1);
var G__36056 = c__19690__auto__;
var G__36057 = cljs.core.count.call(null,c__19690__auto__);
var G__36058 = (0);
seq__36047 = G__36055;
chunk__36048 = G__36056;
count__36049 = G__36057;
i__36050 = G__36058;
continue;
} else {
var n = cljs.core.first.call(null,seq__36047__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36059 = cljs.core.next.call(null,seq__36047__$1);
var G__36060 = null;
var G__36061 = (0);
var G__36062 = (0);
seq__36047 = G__36059;
chunk__36048 = G__36060;
count__36049 = G__36061;
i__36050 = G__36062;
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

var seq__36113_36124 = cljs.core.seq.call(null,deps);
var chunk__36114_36125 = null;
var count__36115_36126 = (0);
var i__36116_36127 = (0);
while(true){
if((i__36116_36127 < count__36115_36126)){
var dep_36128 = cljs.core._nth.call(null,chunk__36114_36125,i__36116_36127);
topo_sort_helper_STAR_.call(null,dep_36128,(depth + (1)),state);

var G__36129 = seq__36113_36124;
var G__36130 = chunk__36114_36125;
var G__36131 = count__36115_36126;
var G__36132 = (i__36116_36127 + (1));
seq__36113_36124 = G__36129;
chunk__36114_36125 = G__36130;
count__36115_36126 = G__36131;
i__36116_36127 = G__36132;
continue;
} else {
var temp__4657__auto___36133 = cljs.core.seq.call(null,seq__36113_36124);
if(temp__4657__auto___36133){
var seq__36113_36134__$1 = temp__4657__auto___36133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36113_36134__$1)){
var c__19690__auto___36135 = cljs.core.chunk_first.call(null,seq__36113_36134__$1);
var G__36136 = cljs.core.chunk_rest.call(null,seq__36113_36134__$1);
var G__36137 = c__19690__auto___36135;
var G__36138 = cljs.core.count.call(null,c__19690__auto___36135);
var G__36139 = (0);
seq__36113_36124 = G__36136;
chunk__36114_36125 = G__36137;
count__36115_36126 = G__36138;
i__36116_36127 = G__36139;
continue;
} else {
var dep_36140 = cljs.core.first.call(null,seq__36113_36134__$1);
topo_sort_helper_STAR_.call(null,dep_36140,(depth + (1)),state);

var G__36141 = cljs.core.next.call(null,seq__36113_36134__$1);
var G__36142 = null;
var G__36143 = (0);
var G__36144 = (0);
seq__36113_36124 = G__36141;
chunk__36114_36125 = G__36142;
count__36115_36126 = G__36143;
i__36116_36127 = G__36144;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36117){
var vec__36121 = p__36117;
var seq__36122 = cljs.core.seq.call(null,vec__36121);
var first__36123 = cljs.core.first.call(null,seq__36122);
var seq__36122__$1 = cljs.core.next.call(null,seq__36122);
var x = first__36123;
var xs = seq__36122__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36121,seq__36122,first__36123,seq__36122__$1,x,xs,get_deps__$1){
return (function (p1__36063_SHARP_){
return clojure.set.difference.call(null,p1__36063_SHARP_,x);
});})(vec__36121,seq__36122,first__36123,seq__36122__$1,x,xs,get_deps__$1))
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
var seq__36157 = cljs.core.seq.call(null,provides);
var chunk__36158 = null;
var count__36159 = (0);
var i__36160 = (0);
while(true){
if((i__36160 < count__36159)){
var prov = cljs.core._nth.call(null,chunk__36158,i__36160);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36161_36169 = cljs.core.seq.call(null,requires);
var chunk__36162_36170 = null;
var count__36163_36171 = (0);
var i__36164_36172 = (0);
while(true){
if((i__36164_36172 < count__36163_36171)){
var req_36173 = cljs.core._nth.call(null,chunk__36162_36170,i__36164_36172);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36173,prov);

var G__36174 = seq__36161_36169;
var G__36175 = chunk__36162_36170;
var G__36176 = count__36163_36171;
var G__36177 = (i__36164_36172 + (1));
seq__36161_36169 = G__36174;
chunk__36162_36170 = G__36175;
count__36163_36171 = G__36176;
i__36164_36172 = G__36177;
continue;
} else {
var temp__4657__auto___36178 = cljs.core.seq.call(null,seq__36161_36169);
if(temp__4657__auto___36178){
var seq__36161_36179__$1 = temp__4657__auto___36178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36161_36179__$1)){
var c__19690__auto___36180 = cljs.core.chunk_first.call(null,seq__36161_36179__$1);
var G__36181 = cljs.core.chunk_rest.call(null,seq__36161_36179__$1);
var G__36182 = c__19690__auto___36180;
var G__36183 = cljs.core.count.call(null,c__19690__auto___36180);
var G__36184 = (0);
seq__36161_36169 = G__36181;
chunk__36162_36170 = G__36182;
count__36163_36171 = G__36183;
i__36164_36172 = G__36184;
continue;
} else {
var req_36185 = cljs.core.first.call(null,seq__36161_36179__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36185,prov);

var G__36186 = cljs.core.next.call(null,seq__36161_36179__$1);
var G__36187 = null;
var G__36188 = (0);
var G__36189 = (0);
seq__36161_36169 = G__36186;
chunk__36162_36170 = G__36187;
count__36163_36171 = G__36188;
i__36164_36172 = G__36189;
continue;
}
} else {
}
}
break;
}

var G__36190 = seq__36157;
var G__36191 = chunk__36158;
var G__36192 = count__36159;
var G__36193 = (i__36160 + (1));
seq__36157 = G__36190;
chunk__36158 = G__36191;
count__36159 = G__36192;
i__36160 = G__36193;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36157);
if(temp__4657__auto__){
var seq__36157__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36157__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__36157__$1);
var G__36194 = cljs.core.chunk_rest.call(null,seq__36157__$1);
var G__36195 = c__19690__auto__;
var G__36196 = cljs.core.count.call(null,c__19690__auto__);
var G__36197 = (0);
seq__36157 = G__36194;
chunk__36158 = G__36195;
count__36159 = G__36196;
i__36160 = G__36197;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36157__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36165_36198 = cljs.core.seq.call(null,requires);
var chunk__36166_36199 = null;
var count__36167_36200 = (0);
var i__36168_36201 = (0);
while(true){
if((i__36168_36201 < count__36167_36200)){
var req_36202 = cljs.core._nth.call(null,chunk__36166_36199,i__36168_36201);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36202,prov);

var G__36203 = seq__36165_36198;
var G__36204 = chunk__36166_36199;
var G__36205 = count__36167_36200;
var G__36206 = (i__36168_36201 + (1));
seq__36165_36198 = G__36203;
chunk__36166_36199 = G__36204;
count__36167_36200 = G__36205;
i__36168_36201 = G__36206;
continue;
} else {
var temp__4657__auto___36207__$1 = cljs.core.seq.call(null,seq__36165_36198);
if(temp__4657__auto___36207__$1){
var seq__36165_36208__$1 = temp__4657__auto___36207__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36165_36208__$1)){
var c__19690__auto___36209 = cljs.core.chunk_first.call(null,seq__36165_36208__$1);
var G__36210 = cljs.core.chunk_rest.call(null,seq__36165_36208__$1);
var G__36211 = c__19690__auto___36209;
var G__36212 = cljs.core.count.call(null,c__19690__auto___36209);
var G__36213 = (0);
seq__36165_36198 = G__36210;
chunk__36166_36199 = G__36211;
count__36167_36200 = G__36212;
i__36168_36201 = G__36213;
continue;
} else {
var req_36214 = cljs.core.first.call(null,seq__36165_36208__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36214,prov);

var G__36215 = cljs.core.next.call(null,seq__36165_36208__$1);
var G__36216 = null;
var G__36217 = (0);
var G__36218 = (0);
seq__36165_36198 = G__36215;
chunk__36166_36199 = G__36216;
count__36167_36200 = G__36217;
i__36168_36201 = G__36218;
continue;
}
} else {
}
}
break;
}

var G__36219 = cljs.core.next.call(null,seq__36157__$1);
var G__36220 = null;
var G__36221 = (0);
var G__36222 = (0);
seq__36157 = G__36219;
chunk__36158 = G__36220;
count__36159 = G__36221;
i__36160 = G__36222;
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
var seq__36227_36231 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36228_36232 = null;
var count__36229_36233 = (0);
var i__36230_36234 = (0);
while(true){
if((i__36230_36234 < count__36229_36233)){
var ns_36235 = cljs.core._nth.call(null,chunk__36228_36232,i__36230_36234);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36235);

var G__36236 = seq__36227_36231;
var G__36237 = chunk__36228_36232;
var G__36238 = count__36229_36233;
var G__36239 = (i__36230_36234 + (1));
seq__36227_36231 = G__36236;
chunk__36228_36232 = G__36237;
count__36229_36233 = G__36238;
i__36230_36234 = G__36239;
continue;
} else {
var temp__4657__auto___36240 = cljs.core.seq.call(null,seq__36227_36231);
if(temp__4657__auto___36240){
var seq__36227_36241__$1 = temp__4657__auto___36240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36227_36241__$1)){
var c__19690__auto___36242 = cljs.core.chunk_first.call(null,seq__36227_36241__$1);
var G__36243 = cljs.core.chunk_rest.call(null,seq__36227_36241__$1);
var G__36244 = c__19690__auto___36242;
var G__36245 = cljs.core.count.call(null,c__19690__auto___36242);
var G__36246 = (0);
seq__36227_36231 = G__36243;
chunk__36228_36232 = G__36244;
count__36229_36233 = G__36245;
i__36230_36234 = G__36246;
continue;
} else {
var ns_36247 = cljs.core.first.call(null,seq__36227_36241__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36247);

var G__36248 = cljs.core.next.call(null,seq__36227_36241__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__36227_36231 = G__36248;
chunk__36228_36232 = G__36249;
count__36229_36233 = G__36250;
i__36230_36234 = G__36251;
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
goog.require_figwheel_backup_ = (function (){var or__18876__auto__ = goog.require__;
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
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
var G__36252__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36253__i = 0, G__36253__a = new Array(arguments.length -  0);
while (G__36253__i < G__36253__a.length) {G__36253__a[G__36253__i] = arguments[G__36253__i + 0]; ++G__36253__i;}
  args = new cljs.core.IndexedSeq(G__36253__a,0);
} 
return G__36252__delegate.call(this,args);};
G__36252.cljs$lang$maxFixedArity = 0;
G__36252.cljs$lang$applyTo = (function (arglist__36254){
var args = cljs.core.seq(arglist__36254);
return G__36252__delegate(args);
});
G__36252.cljs$core$IFn$_invoke$arity$variadic = G__36252__delegate;
return G__36252;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36256 = cljs.core._EQ_;
var expr__36257 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36256.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36257))){
var path_parts = ((function (pred__36256,expr__36257){
return (function (p1__36255_SHARP_){
return clojure.string.split.call(null,p1__36255_SHARP_,/[\/\\]/);
});})(pred__36256,expr__36257))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36256,expr__36257){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36259){if((e36259 instanceof Error)){
var e = e36259;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36259;

}
}})());
});
;})(path_parts,sep,root,pred__36256,expr__36257))
} else {
if(cljs.core.truth_(pred__36256.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36257))){
return ((function (pred__36256,expr__36257){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__36256,expr__36257){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36256,expr__36257))
);

return deferred.addErrback(((function (deferred,pred__36256,expr__36257){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36256,expr__36257))
);
});
;})(pred__36256,expr__36257))
} else {
return ((function (pred__36256,expr__36257){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36256,expr__36257))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36260,callback){
var map__36263 = p__36260;
var map__36263__$1 = ((((!((map__36263 == null)))?((((map__36263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36263):map__36263);
var file_msg = map__36263__$1;
var request_url = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36263,map__36263__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36263,map__36263__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_36287){
var state_val_36288 = (state_36287[(1)]);
if((state_val_36288 === (7))){
var inst_36283 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36289_36309 = state_36287__$1;
(statearr_36289_36309[(2)] = inst_36283);

(statearr_36289_36309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (1))){
var state_36287__$1 = state_36287;
var statearr_36290_36310 = state_36287__$1;
(statearr_36290_36310[(2)] = null);

(statearr_36290_36310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (4))){
var inst_36267 = (state_36287[(7)]);
var inst_36267__$1 = (state_36287[(2)]);
var state_36287__$1 = (function (){var statearr_36291 = state_36287;
(statearr_36291[(7)] = inst_36267__$1);

return statearr_36291;
})();
if(cljs.core.truth_(inst_36267__$1)){
var statearr_36292_36311 = state_36287__$1;
(statearr_36292_36311[(1)] = (5));

} else {
var statearr_36293_36312 = state_36287__$1;
(statearr_36293_36312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (6))){
var state_36287__$1 = state_36287;
var statearr_36294_36313 = state_36287__$1;
(statearr_36294_36313[(2)] = null);

(statearr_36294_36313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (3))){
var inst_36285 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36287__$1,inst_36285);
} else {
if((state_val_36288 === (2))){
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36287__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36288 === (11))){
var inst_36279 = (state_36287[(2)]);
var state_36287__$1 = (function (){var statearr_36295 = state_36287;
(statearr_36295[(8)] = inst_36279);

return statearr_36295;
})();
var statearr_36296_36314 = state_36287__$1;
(statearr_36296_36314[(2)] = null);

(statearr_36296_36314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (9))){
var inst_36271 = (state_36287[(9)]);
var inst_36273 = (state_36287[(10)]);
var inst_36275 = inst_36273.call(null,inst_36271);
var state_36287__$1 = state_36287;
var statearr_36297_36315 = state_36287__$1;
(statearr_36297_36315[(2)] = inst_36275);

(statearr_36297_36315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (5))){
var inst_36267 = (state_36287[(7)]);
var inst_36269 = figwheel.client.file_reloading.blocking_load.call(null,inst_36267);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36287__$1,(8),inst_36269);
} else {
if((state_val_36288 === (10))){
var inst_36271 = (state_36287[(9)]);
var inst_36277 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36271);
var state_36287__$1 = state_36287;
var statearr_36298_36316 = state_36287__$1;
(statearr_36298_36316[(2)] = inst_36277);

(statearr_36298_36316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (8))){
var inst_36267 = (state_36287[(7)]);
var inst_36273 = (state_36287[(10)]);
var inst_36271 = (state_36287[(2)]);
var inst_36272 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36273__$1 = cljs.core.get.call(null,inst_36272,inst_36267);
var state_36287__$1 = (function (){var statearr_36299 = state_36287;
(statearr_36299[(9)] = inst_36271);

(statearr_36299[(10)] = inst_36273__$1);

return statearr_36299;
})();
if(cljs.core.truth_(inst_36273__$1)){
var statearr_36300_36317 = state_36287__$1;
(statearr_36300_36317[(1)] = (9));

} else {
var statearr_36301_36318 = state_36287__$1;
(statearr_36301_36318[(1)] = (10));

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
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25418__auto__ = null;
var figwheel$client$file_reloading$state_machine__25418__auto____0 = (function (){
var statearr_36305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36305[(0)] = figwheel$client$file_reloading$state_machine__25418__auto__);

(statearr_36305[(1)] = (1));

return statearr_36305;
});
var figwheel$client$file_reloading$state_machine__25418__auto____1 = (function (state_36287){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_36287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e36306){if((e36306 instanceof Object)){
var ex__25421__auto__ = e36306;
var statearr_36307_36319 = state_36287;
(statearr_36307_36319[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36320 = state_36287;
state_36287 = G__36320;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25418__auto__ = function(state_36287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25418__auto____1.call(this,state_36287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25418__auto____0;
figwheel$client$file_reloading$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25418__auto____1;
return figwheel$client$file_reloading$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_36308 = f__25483__auto__.call(null);
(statearr_36308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_36308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36321,callback){
var map__36324 = p__36321;
var map__36324__$1 = ((((!((map__36324 == null)))?((((map__36324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36324):map__36324);
var file_msg = map__36324__$1;
var namespace = cljs.core.get.call(null,map__36324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36324,map__36324__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36324,map__36324__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36326){
var map__36329 = p__36326;
var map__36329__$1 = ((((!((map__36329 == null)))?((((map__36329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36329):map__36329);
var file_msg = map__36329__$1;
var namespace = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18864__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18864__auto__){
var or__18876__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
var or__18876__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18876__auto____$1)){
return or__18876__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18864__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36331,callback){
var map__36334 = p__36331;
var map__36334__$1 = ((((!((map__36334 == null)))?((((map__36334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36334):map__36334);
var file_msg = map__36334__$1;
var request_url = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25482__auto___36438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___36438,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___36438,out){
return (function (state_36420){
var state_val_36421 = (state_36420[(1)]);
if((state_val_36421 === (1))){
var inst_36394 = cljs.core.seq.call(null,files);
var inst_36395 = cljs.core.first.call(null,inst_36394);
var inst_36396 = cljs.core.next.call(null,inst_36394);
var inst_36397 = files;
var state_36420__$1 = (function (){var statearr_36422 = state_36420;
(statearr_36422[(7)] = inst_36396);

(statearr_36422[(8)] = inst_36395);

(statearr_36422[(9)] = inst_36397);

return statearr_36422;
})();
var statearr_36423_36439 = state_36420__$1;
(statearr_36423_36439[(2)] = null);

(statearr_36423_36439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (2))){
var inst_36403 = (state_36420[(10)]);
var inst_36397 = (state_36420[(9)]);
var inst_36402 = cljs.core.seq.call(null,inst_36397);
var inst_36403__$1 = cljs.core.first.call(null,inst_36402);
var inst_36404 = cljs.core.next.call(null,inst_36402);
var inst_36405 = (inst_36403__$1 == null);
var inst_36406 = cljs.core.not.call(null,inst_36405);
var state_36420__$1 = (function (){var statearr_36424 = state_36420;
(statearr_36424[(10)] = inst_36403__$1);

(statearr_36424[(11)] = inst_36404);

return statearr_36424;
})();
if(inst_36406){
var statearr_36425_36440 = state_36420__$1;
(statearr_36425_36440[(1)] = (4));

} else {
var statearr_36426_36441 = state_36420__$1;
(statearr_36426_36441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (3))){
var inst_36418 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36420__$1,inst_36418);
} else {
if((state_val_36421 === (4))){
var inst_36403 = (state_36420[(10)]);
var inst_36408 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36403);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36420__$1,(7),inst_36408);
} else {
if((state_val_36421 === (5))){
var inst_36414 = cljs.core.async.close_BANG_.call(null,out);
var state_36420__$1 = state_36420;
var statearr_36427_36442 = state_36420__$1;
(statearr_36427_36442[(2)] = inst_36414);

(statearr_36427_36442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (6))){
var inst_36416 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36428_36443 = state_36420__$1;
(statearr_36428_36443[(2)] = inst_36416);

(statearr_36428_36443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (7))){
var inst_36404 = (state_36420[(11)]);
var inst_36410 = (state_36420[(2)]);
var inst_36411 = cljs.core.async.put_BANG_.call(null,out,inst_36410);
var inst_36397 = inst_36404;
var state_36420__$1 = (function (){var statearr_36429 = state_36420;
(statearr_36429[(12)] = inst_36411);

(statearr_36429[(9)] = inst_36397);

return statearr_36429;
})();
var statearr_36430_36444 = state_36420__$1;
(statearr_36430_36444[(2)] = null);

(statearr_36430_36444[(1)] = (2));


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
});})(c__25482__auto___36438,out))
;
return ((function (switch__25417__auto__,c__25482__auto___36438,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____0 = (function (){
var statearr_36434 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36434[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__);

(statearr_36434[(1)] = (1));

return statearr_36434;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____1 = (function (state_36420){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_36420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e36435){if((e36435 instanceof Object)){
var ex__25421__auto__ = e36435;
var statearr_36436_36445 = state_36420;
(statearr_36436_36445[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36446 = state_36420;
state_36420 = G__36446;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__ = function(state_36420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____1.call(this,state_36420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___36438,out))
})();
var state__25484__auto__ = (function (){var statearr_36437 = f__25483__auto__.call(null);
(statearr_36437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___36438);

return statearr_36437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___36438,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36447,opts){
var map__36451 = p__36447;
var map__36451__$1 = ((((!((map__36451 == null)))?((((map__36451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36451):map__36451);
var eval_body = cljs.core.get.call(null,map__36451__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18864__auto__ = eval_body;
if(cljs.core.truth_(and__18864__auto__)){
return typeof eval_body === 'string';
} else {
return and__18864__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36453){var e = e36453;
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
return (function (p1__36454_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36454_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36463){
var vec__36464 = p__36463;
var k = cljs.core.nth.call(null,vec__36464,(0),null);
var v = cljs.core.nth.call(null,vec__36464,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36467){
var vec__36468 = p__36467;
var k = cljs.core.nth.call(null,vec__36468,(0),null);
var v = cljs.core.nth.call(null,vec__36468,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36474,p__36475){
var map__36723 = p__36474;
var map__36723__$1 = ((((!((map__36723 == null)))?((((map__36723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36723):map__36723);
var opts = map__36723__$1;
var before_jsload = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36724 = p__36475;
var map__36724__$1 = ((((!((map__36724 == null)))?((((map__36724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36724):map__36724);
var msg = map__36724__$1;
var files = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36878){
var state_val_36879 = (state_36878[(1)]);
if((state_val_36879 === (7))){
var inst_36740 = (state_36878[(7)]);
var inst_36738 = (state_36878[(8)]);
var inst_36741 = (state_36878[(9)]);
var inst_36739 = (state_36878[(10)]);
var inst_36746 = cljs.core._nth.call(null,inst_36739,inst_36741);
var inst_36747 = figwheel.client.file_reloading.eval_body.call(null,inst_36746,opts);
var inst_36748 = (inst_36741 + (1));
var tmp36880 = inst_36740;
var tmp36881 = inst_36738;
var tmp36882 = inst_36739;
var inst_36738__$1 = tmp36881;
var inst_36739__$1 = tmp36882;
var inst_36740__$1 = tmp36880;
var inst_36741__$1 = inst_36748;
var state_36878__$1 = (function (){var statearr_36883 = state_36878;
(statearr_36883[(7)] = inst_36740__$1);

(statearr_36883[(11)] = inst_36747);

(statearr_36883[(8)] = inst_36738__$1);

(statearr_36883[(9)] = inst_36741__$1);

(statearr_36883[(10)] = inst_36739__$1);

return statearr_36883;
})();
var statearr_36884_36970 = state_36878__$1;
(statearr_36884_36970[(2)] = null);

(statearr_36884_36970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (20))){
var inst_36781 = (state_36878[(12)]);
var inst_36789 = figwheel.client.file_reloading.sort_files.call(null,inst_36781);
var state_36878__$1 = state_36878;
var statearr_36885_36971 = state_36878__$1;
(statearr_36885_36971[(2)] = inst_36789);

(statearr_36885_36971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (27))){
var state_36878__$1 = state_36878;
var statearr_36886_36972 = state_36878__$1;
(statearr_36886_36972[(2)] = null);

(statearr_36886_36972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (1))){
var inst_36730 = (state_36878[(13)]);
var inst_36727 = before_jsload.call(null,files);
var inst_36728 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36729 = (function (){return ((function (inst_36730,inst_36727,inst_36728,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36471_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36471_SHARP_);
});
;})(inst_36730,inst_36727,inst_36728,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36730__$1 = cljs.core.filter.call(null,inst_36729,files);
var inst_36731 = cljs.core.not_empty.call(null,inst_36730__$1);
var state_36878__$1 = (function (){var statearr_36887 = state_36878;
(statearr_36887[(13)] = inst_36730__$1);

(statearr_36887[(14)] = inst_36727);

(statearr_36887[(15)] = inst_36728);

return statearr_36887;
})();
if(cljs.core.truth_(inst_36731)){
var statearr_36888_36973 = state_36878__$1;
(statearr_36888_36973[(1)] = (2));

} else {
var statearr_36889_36974 = state_36878__$1;
(statearr_36889_36974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (24))){
var state_36878__$1 = state_36878;
var statearr_36890_36975 = state_36878__$1;
(statearr_36890_36975[(2)] = null);

(statearr_36890_36975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (39))){
var inst_36831 = (state_36878[(16)]);
var state_36878__$1 = state_36878;
var statearr_36891_36976 = state_36878__$1;
(statearr_36891_36976[(2)] = inst_36831);

(statearr_36891_36976[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (46))){
var inst_36873 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36892_36977 = state_36878__$1;
(statearr_36892_36977[(2)] = inst_36873);

(statearr_36892_36977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (4))){
var inst_36775 = (state_36878[(2)]);
var inst_36776 = cljs.core.List.EMPTY;
var inst_36777 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36776);
var inst_36778 = (function (){return ((function (inst_36775,inst_36776,inst_36777,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36472_SHARP_){
var and__18864__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36472_SHARP_);
if(cljs.core.truth_(and__18864__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36472_SHARP_));
} else {
return and__18864__auto__;
}
});
;})(inst_36775,inst_36776,inst_36777,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36779 = cljs.core.filter.call(null,inst_36778,files);
var inst_36780 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36781 = cljs.core.concat.call(null,inst_36779,inst_36780);
var state_36878__$1 = (function (){var statearr_36893 = state_36878;
(statearr_36893[(17)] = inst_36777);

(statearr_36893[(18)] = inst_36775);

(statearr_36893[(12)] = inst_36781);

return statearr_36893;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36894_36978 = state_36878__$1;
(statearr_36894_36978[(1)] = (16));

} else {
var statearr_36895_36979 = state_36878__$1;
(statearr_36895_36979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (15))){
var inst_36765 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36896_36980 = state_36878__$1;
(statearr_36896_36980[(2)] = inst_36765);

(statearr_36896_36980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (21))){
var inst_36791 = (state_36878[(19)]);
var inst_36791__$1 = (state_36878[(2)]);
var inst_36792 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36791__$1);
var state_36878__$1 = (function (){var statearr_36897 = state_36878;
(statearr_36897[(19)] = inst_36791__$1);

return statearr_36897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36878__$1,(22),inst_36792);
} else {
if((state_val_36879 === (31))){
var inst_36876 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36878__$1,inst_36876);
} else {
if((state_val_36879 === (32))){
var inst_36831 = (state_36878[(16)]);
var inst_36836 = inst_36831.cljs$lang$protocol_mask$partition0$;
var inst_36837 = (inst_36836 & (64));
var inst_36838 = inst_36831.cljs$core$ISeq$;
var inst_36839 = (cljs.core.PROTOCOL_SENTINEL === inst_36838);
var inst_36840 = (inst_36837) || (inst_36839);
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36840)){
var statearr_36898_36981 = state_36878__$1;
(statearr_36898_36981[(1)] = (35));

} else {
var statearr_36899_36982 = state_36878__$1;
(statearr_36899_36982[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (40))){
var inst_36853 = (state_36878[(20)]);
var inst_36852 = (state_36878[(2)]);
var inst_36853__$1 = cljs.core.get.call(null,inst_36852,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36854 = cljs.core.get.call(null,inst_36852,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36855 = cljs.core.not_empty.call(null,inst_36853__$1);
var state_36878__$1 = (function (){var statearr_36900 = state_36878;
(statearr_36900[(20)] = inst_36853__$1);

(statearr_36900[(21)] = inst_36854);

return statearr_36900;
})();
if(cljs.core.truth_(inst_36855)){
var statearr_36901_36983 = state_36878__$1;
(statearr_36901_36983[(1)] = (41));

} else {
var statearr_36902_36984 = state_36878__$1;
(statearr_36902_36984[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (33))){
var state_36878__$1 = state_36878;
var statearr_36903_36985 = state_36878__$1;
(statearr_36903_36985[(2)] = false);

(statearr_36903_36985[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (13))){
var inst_36751 = (state_36878[(22)]);
var inst_36755 = cljs.core.chunk_first.call(null,inst_36751);
var inst_36756 = cljs.core.chunk_rest.call(null,inst_36751);
var inst_36757 = cljs.core.count.call(null,inst_36755);
var inst_36738 = inst_36756;
var inst_36739 = inst_36755;
var inst_36740 = inst_36757;
var inst_36741 = (0);
var state_36878__$1 = (function (){var statearr_36904 = state_36878;
(statearr_36904[(7)] = inst_36740);

(statearr_36904[(8)] = inst_36738);

(statearr_36904[(9)] = inst_36741);

(statearr_36904[(10)] = inst_36739);

return statearr_36904;
})();
var statearr_36905_36986 = state_36878__$1;
(statearr_36905_36986[(2)] = null);

(statearr_36905_36986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (22))){
var inst_36791 = (state_36878[(19)]);
var inst_36794 = (state_36878[(23)]);
var inst_36799 = (state_36878[(24)]);
var inst_36795 = (state_36878[(25)]);
var inst_36794__$1 = (state_36878[(2)]);
var inst_36795__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36794__$1);
var inst_36796 = (function (){var all_files = inst_36791;
var res_SINGLEQUOTE_ = inst_36794__$1;
var res = inst_36795__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36791,inst_36794,inst_36799,inst_36795,inst_36794__$1,inst_36795__$1,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36473_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36473_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36791,inst_36794,inst_36799,inst_36795,inst_36794__$1,inst_36795__$1,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36797 = cljs.core.filter.call(null,inst_36796,inst_36794__$1);
var inst_36798 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36799__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36798);
var inst_36800 = cljs.core.not_empty.call(null,inst_36799__$1);
var state_36878__$1 = (function (){var statearr_36906 = state_36878;
(statearr_36906[(23)] = inst_36794__$1);

(statearr_36906[(26)] = inst_36797);

(statearr_36906[(24)] = inst_36799__$1);

(statearr_36906[(25)] = inst_36795__$1);

return statearr_36906;
})();
if(cljs.core.truth_(inst_36800)){
var statearr_36907_36987 = state_36878__$1;
(statearr_36907_36987[(1)] = (23));

} else {
var statearr_36908_36988 = state_36878__$1;
(statearr_36908_36988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (36))){
var state_36878__$1 = state_36878;
var statearr_36909_36989 = state_36878__$1;
(statearr_36909_36989[(2)] = false);

(statearr_36909_36989[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (41))){
var inst_36853 = (state_36878[(20)]);
var inst_36857 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36858 = cljs.core.map.call(null,inst_36857,inst_36853);
var inst_36859 = cljs.core.pr_str.call(null,inst_36858);
var inst_36860 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36859)].join('');
var inst_36861 = figwheel.client.utils.log.call(null,inst_36860);
var state_36878__$1 = state_36878;
var statearr_36910_36990 = state_36878__$1;
(statearr_36910_36990[(2)] = inst_36861);

(statearr_36910_36990[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (43))){
var inst_36854 = (state_36878[(21)]);
var inst_36864 = (state_36878[(2)]);
var inst_36865 = cljs.core.not_empty.call(null,inst_36854);
var state_36878__$1 = (function (){var statearr_36911 = state_36878;
(statearr_36911[(27)] = inst_36864);

return statearr_36911;
})();
if(cljs.core.truth_(inst_36865)){
var statearr_36912_36991 = state_36878__$1;
(statearr_36912_36991[(1)] = (44));

} else {
var statearr_36913_36992 = state_36878__$1;
(statearr_36913_36992[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (29))){
var inst_36791 = (state_36878[(19)]);
var inst_36794 = (state_36878[(23)]);
var inst_36797 = (state_36878[(26)]);
var inst_36799 = (state_36878[(24)]);
var inst_36795 = (state_36878[(25)]);
var inst_36831 = (state_36878[(16)]);
var inst_36827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36830 = (function (){var all_files = inst_36791;
var res_SINGLEQUOTE_ = inst_36794;
var res = inst_36795;
var files_not_loaded = inst_36797;
var dependencies_that_loaded = inst_36799;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36831,inst_36827,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36829){
var map__36914 = p__36829;
var map__36914__$1 = ((((!((map__36914 == null)))?((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36914):map__36914);
var namespace = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36831,inst_36827,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36831__$1 = cljs.core.group_by.call(null,inst_36830,inst_36797);
var inst_36833 = (inst_36831__$1 == null);
var inst_36834 = cljs.core.not.call(null,inst_36833);
var state_36878__$1 = (function (){var statearr_36916 = state_36878;
(statearr_36916[(28)] = inst_36827);

(statearr_36916[(16)] = inst_36831__$1);

return statearr_36916;
})();
if(inst_36834){
var statearr_36917_36993 = state_36878__$1;
(statearr_36917_36993[(1)] = (32));

} else {
var statearr_36918_36994 = state_36878__$1;
(statearr_36918_36994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (44))){
var inst_36854 = (state_36878[(21)]);
var inst_36867 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36854);
var inst_36868 = cljs.core.pr_str.call(null,inst_36867);
var inst_36869 = [cljs.core.str("not required: "),cljs.core.str(inst_36868)].join('');
var inst_36870 = figwheel.client.utils.log.call(null,inst_36869);
var state_36878__$1 = state_36878;
var statearr_36919_36995 = state_36878__$1;
(statearr_36919_36995[(2)] = inst_36870);

(statearr_36919_36995[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (6))){
var inst_36772 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36920_36996 = state_36878__$1;
(statearr_36920_36996[(2)] = inst_36772);

(statearr_36920_36996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (28))){
var inst_36797 = (state_36878[(26)]);
var inst_36824 = (state_36878[(2)]);
var inst_36825 = cljs.core.not_empty.call(null,inst_36797);
var state_36878__$1 = (function (){var statearr_36921 = state_36878;
(statearr_36921[(29)] = inst_36824);

return statearr_36921;
})();
if(cljs.core.truth_(inst_36825)){
var statearr_36922_36997 = state_36878__$1;
(statearr_36922_36997[(1)] = (29));

} else {
var statearr_36923_36998 = state_36878__$1;
(statearr_36923_36998[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (25))){
var inst_36795 = (state_36878[(25)]);
var inst_36811 = (state_36878[(2)]);
var inst_36812 = cljs.core.not_empty.call(null,inst_36795);
var state_36878__$1 = (function (){var statearr_36924 = state_36878;
(statearr_36924[(30)] = inst_36811);

return statearr_36924;
})();
if(cljs.core.truth_(inst_36812)){
var statearr_36925_36999 = state_36878__$1;
(statearr_36925_36999[(1)] = (26));

} else {
var statearr_36926_37000 = state_36878__$1;
(statearr_36926_37000[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (34))){
var inst_36847 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36847)){
var statearr_36927_37001 = state_36878__$1;
(statearr_36927_37001[(1)] = (38));

} else {
var statearr_36928_37002 = state_36878__$1;
(statearr_36928_37002[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (17))){
var state_36878__$1 = state_36878;
var statearr_36929_37003 = state_36878__$1;
(statearr_36929_37003[(2)] = recompile_dependents);

(statearr_36929_37003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (3))){
var state_36878__$1 = state_36878;
var statearr_36930_37004 = state_36878__$1;
(statearr_36930_37004[(2)] = null);

(statearr_36930_37004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (12))){
var inst_36768 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36931_37005 = state_36878__$1;
(statearr_36931_37005[(2)] = inst_36768);

(statearr_36931_37005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (2))){
var inst_36730 = (state_36878[(13)]);
var inst_36737 = cljs.core.seq.call(null,inst_36730);
var inst_36738 = inst_36737;
var inst_36739 = null;
var inst_36740 = (0);
var inst_36741 = (0);
var state_36878__$1 = (function (){var statearr_36932 = state_36878;
(statearr_36932[(7)] = inst_36740);

(statearr_36932[(8)] = inst_36738);

(statearr_36932[(9)] = inst_36741);

(statearr_36932[(10)] = inst_36739);

return statearr_36932;
})();
var statearr_36933_37006 = state_36878__$1;
(statearr_36933_37006[(2)] = null);

(statearr_36933_37006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (23))){
var inst_36791 = (state_36878[(19)]);
var inst_36794 = (state_36878[(23)]);
var inst_36797 = (state_36878[(26)]);
var inst_36799 = (state_36878[(24)]);
var inst_36795 = (state_36878[(25)]);
var inst_36802 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36804 = (function (){var all_files = inst_36791;
var res_SINGLEQUOTE_ = inst_36794;
var res = inst_36795;
var files_not_loaded = inst_36797;
var dependencies_that_loaded = inst_36799;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36802,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36803){
var map__36934 = p__36803;
var map__36934__$1 = ((((!((map__36934 == null)))?((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36934):map__36934);
var request_url = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36802,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36805 = cljs.core.reverse.call(null,inst_36799);
var inst_36806 = cljs.core.map.call(null,inst_36804,inst_36805);
var inst_36807 = cljs.core.pr_str.call(null,inst_36806);
var inst_36808 = figwheel.client.utils.log.call(null,inst_36807);
var state_36878__$1 = (function (){var statearr_36936 = state_36878;
(statearr_36936[(31)] = inst_36802);

return statearr_36936;
})();
var statearr_36937_37007 = state_36878__$1;
(statearr_36937_37007[(2)] = inst_36808);

(statearr_36937_37007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (35))){
var state_36878__$1 = state_36878;
var statearr_36938_37008 = state_36878__$1;
(statearr_36938_37008[(2)] = true);

(statearr_36938_37008[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (19))){
var inst_36781 = (state_36878[(12)]);
var inst_36787 = figwheel.client.file_reloading.expand_files.call(null,inst_36781);
var state_36878__$1 = state_36878;
var statearr_36939_37009 = state_36878__$1;
(statearr_36939_37009[(2)] = inst_36787);

(statearr_36939_37009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (11))){
var state_36878__$1 = state_36878;
var statearr_36940_37010 = state_36878__$1;
(statearr_36940_37010[(2)] = null);

(statearr_36940_37010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (9))){
var inst_36770 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36941_37011 = state_36878__$1;
(statearr_36941_37011[(2)] = inst_36770);

(statearr_36941_37011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (5))){
var inst_36740 = (state_36878[(7)]);
var inst_36741 = (state_36878[(9)]);
var inst_36743 = (inst_36741 < inst_36740);
var inst_36744 = inst_36743;
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36744)){
var statearr_36942_37012 = state_36878__$1;
(statearr_36942_37012[(1)] = (7));

} else {
var statearr_36943_37013 = state_36878__$1;
(statearr_36943_37013[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (14))){
var inst_36751 = (state_36878[(22)]);
var inst_36760 = cljs.core.first.call(null,inst_36751);
var inst_36761 = figwheel.client.file_reloading.eval_body.call(null,inst_36760,opts);
var inst_36762 = cljs.core.next.call(null,inst_36751);
var inst_36738 = inst_36762;
var inst_36739 = null;
var inst_36740 = (0);
var inst_36741 = (0);
var state_36878__$1 = (function (){var statearr_36944 = state_36878;
(statearr_36944[(7)] = inst_36740);

(statearr_36944[(32)] = inst_36761);

(statearr_36944[(8)] = inst_36738);

(statearr_36944[(9)] = inst_36741);

(statearr_36944[(10)] = inst_36739);

return statearr_36944;
})();
var statearr_36945_37014 = state_36878__$1;
(statearr_36945_37014[(2)] = null);

(statearr_36945_37014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (45))){
var state_36878__$1 = state_36878;
var statearr_36946_37015 = state_36878__$1;
(statearr_36946_37015[(2)] = null);

(statearr_36946_37015[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (26))){
var inst_36791 = (state_36878[(19)]);
var inst_36794 = (state_36878[(23)]);
var inst_36797 = (state_36878[(26)]);
var inst_36799 = (state_36878[(24)]);
var inst_36795 = (state_36878[(25)]);
var inst_36814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36816 = (function (){var all_files = inst_36791;
var res_SINGLEQUOTE_ = inst_36794;
var res = inst_36795;
var files_not_loaded = inst_36797;
var dependencies_that_loaded = inst_36799;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36814,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36815){
var map__36947 = p__36815;
var map__36947__$1 = ((((!((map__36947 == null)))?((((map__36947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36947):map__36947);
var namespace = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36814,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36817 = cljs.core.map.call(null,inst_36816,inst_36795);
var inst_36818 = cljs.core.pr_str.call(null,inst_36817);
var inst_36819 = figwheel.client.utils.log.call(null,inst_36818);
var inst_36820 = (function (){var all_files = inst_36791;
var res_SINGLEQUOTE_ = inst_36794;
var res = inst_36795;
var files_not_loaded = inst_36797;
var dependencies_that_loaded = inst_36799;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36814,inst_36816,inst_36817,inst_36818,inst_36819,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36791,inst_36794,inst_36797,inst_36799,inst_36795,inst_36814,inst_36816,inst_36817,inst_36818,inst_36819,state_val_36879,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36821 = setTimeout(inst_36820,(10));
var state_36878__$1 = (function (){var statearr_36949 = state_36878;
(statearr_36949[(33)] = inst_36814);

(statearr_36949[(34)] = inst_36819);

return statearr_36949;
})();
var statearr_36950_37016 = state_36878__$1;
(statearr_36950_37016[(2)] = inst_36821);

(statearr_36950_37016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (16))){
var state_36878__$1 = state_36878;
var statearr_36951_37017 = state_36878__$1;
(statearr_36951_37017[(2)] = reload_dependents);

(statearr_36951_37017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (38))){
var inst_36831 = (state_36878[(16)]);
var inst_36849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36831);
var state_36878__$1 = state_36878;
var statearr_36952_37018 = state_36878__$1;
(statearr_36952_37018[(2)] = inst_36849);

(statearr_36952_37018[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (30))){
var state_36878__$1 = state_36878;
var statearr_36953_37019 = state_36878__$1;
(statearr_36953_37019[(2)] = null);

(statearr_36953_37019[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (10))){
var inst_36751 = (state_36878[(22)]);
var inst_36753 = cljs.core.chunked_seq_QMARK_.call(null,inst_36751);
var state_36878__$1 = state_36878;
if(inst_36753){
var statearr_36954_37020 = state_36878__$1;
(statearr_36954_37020[(1)] = (13));

} else {
var statearr_36955_37021 = state_36878__$1;
(statearr_36955_37021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (18))){
var inst_36785 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36785)){
var statearr_36956_37022 = state_36878__$1;
(statearr_36956_37022[(1)] = (19));

} else {
var statearr_36957_37023 = state_36878__$1;
(statearr_36957_37023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (42))){
var state_36878__$1 = state_36878;
var statearr_36958_37024 = state_36878__$1;
(statearr_36958_37024[(2)] = null);

(statearr_36958_37024[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (37))){
var inst_36844 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36959_37025 = state_36878__$1;
(statearr_36959_37025[(2)] = inst_36844);

(statearr_36959_37025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (8))){
var inst_36751 = (state_36878[(22)]);
var inst_36738 = (state_36878[(8)]);
var inst_36751__$1 = cljs.core.seq.call(null,inst_36738);
var state_36878__$1 = (function (){var statearr_36960 = state_36878;
(statearr_36960[(22)] = inst_36751__$1);

return statearr_36960;
})();
if(inst_36751__$1){
var statearr_36961_37026 = state_36878__$1;
(statearr_36961_37026[(1)] = (10));

} else {
var statearr_36962_37027 = state_36878__$1;
(statearr_36962_37027[(1)] = (11));

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
});})(c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25417__auto__,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____0 = (function (){
var statearr_36966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36966[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__);

(statearr_36966[(1)] = (1));

return statearr_36966;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____1 = (function (state_36878){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_36878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e36967){if((e36967 instanceof Object)){
var ex__25421__auto__ = e36967;
var statearr_36968_37028 = state_36878;
(statearr_36968_37028[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37029 = state_36878;
state_36878 = G__37029;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__ = function(state_36878){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____1.call(this,state_36878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25484__auto__ = (function (){var statearr_36969 = f__25483__auto__.call(null);
(statearr_36969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_36969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__,map__36723,map__36723__$1,opts,before_jsload,on_jsload,reload_dependents,map__36724,map__36724__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25482__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37032,link){
var map__37035 = p__37032;
var map__37035__$1 = ((((!((map__37035 == null)))?((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37035):map__37035);
var file = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37035,map__37035__$1,file){
return (function (p1__37030_SHARP_,p2__37031_SHARP_){
if(cljs.core._EQ_.call(null,p1__37030_SHARP_,p2__37031_SHARP_)){
return p1__37030_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37035,map__37035__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37041){
var map__37042 = p__37041;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var match_length = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37037_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37037_SHARP_);
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
var args37044 = [];
var len__19984__auto___37047 = arguments.length;
var i__19985__auto___37048 = (0);
while(true){
if((i__19985__auto___37048 < len__19984__auto___37047)){
args37044.push((arguments[i__19985__auto___37048]));

var G__37049 = (i__19985__auto___37048 + (1));
i__19985__auto___37048 = G__37049;
continue;
} else {
}
break;
}

var G__37046 = args37044.length;
switch (G__37046) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37044.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37051_SHARP_,p2__37052_SHARP_){
return cljs.core.assoc.call(null,p1__37051_SHARP_,cljs.core.get.call(null,p2__37052_SHARP_,key),p2__37052_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37053){
var map__37056 = p__37053;
var map__37056__$1 = ((((!((map__37056 == null)))?((((map__37056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37056):map__37056);
var f_data = map__37056__$1;
var file = cljs.core.get.call(null,map__37056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37058,files_msg){
var map__37065 = p__37058;
var map__37065__$1 = ((((!((map__37065 == null)))?((((map__37065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37065):map__37065);
var opts = map__37065__$1;
var on_cssload = cljs.core.get.call(null,map__37065__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37067_37071 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37068_37072 = null;
var count__37069_37073 = (0);
var i__37070_37074 = (0);
while(true){
if((i__37070_37074 < count__37069_37073)){
var f_37075 = cljs.core._nth.call(null,chunk__37068_37072,i__37070_37074);
figwheel.client.file_reloading.reload_css_file.call(null,f_37075);

var G__37076 = seq__37067_37071;
var G__37077 = chunk__37068_37072;
var G__37078 = count__37069_37073;
var G__37079 = (i__37070_37074 + (1));
seq__37067_37071 = G__37076;
chunk__37068_37072 = G__37077;
count__37069_37073 = G__37078;
i__37070_37074 = G__37079;
continue;
} else {
var temp__4657__auto___37080 = cljs.core.seq.call(null,seq__37067_37071);
if(temp__4657__auto___37080){
var seq__37067_37081__$1 = temp__4657__auto___37080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37067_37081__$1)){
var c__19690__auto___37082 = cljs.core.chunk_first.call(null,seq__37067_37081__$1);
var G__37083 = cljs.core.chunk_rest.call(null,seq__37067_37081__$1);
var G__37084 = c__19690__auto___37082;
var G__37085 = cljs.core.count.call(null,c__19690__auto___37082);
var G__37086 = (0);
seq__37067_37071 = G__37083;
chunk__37068_37072 = G__37084;
count__37069_37073 = G__37085;
i__37070_37074 = G__37086;
continue;
} else {
var f_37087 = cljs.core.first.call(null,seq__37067_37081__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37087);

var G__37088 = cljs.core.next.call(null,seq__37067_37081__$1);
var G__37089 = null;
var G__37090 = (0);
var G__37091 = (0);
seq__37067_37071 = G__37088;
chunk__37068_37072 = G__37089;
count__37069_37073 = G__37090;
i__37070_37074 = G__37091;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37065,map__37065__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37065,map__37065__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map