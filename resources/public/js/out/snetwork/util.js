// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('goog.events.KeyCodes');
snetwork.util.p = (function snetwork$util$p(var_args){
var args__22740__auto__ = [];
var len__22733__auto___42912 = arguments.length;
var i__22734__auto___42913 = (0);
while(true){
if((i__22734__auto___42913 < len__22733__auto___42912)){
args__22740__auto__.push((arguments[i__22734__auto___42913]));

var G__42914 = (i__22734__auto___42913 + (1));
i__22734__auto___42913 = G__42914;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var seq__42908_42915 = cljs.core.seq.call(null,args);
var chunk__42909_42916 = null;
var count__42910_42917 = (0);
var i__42911_42918 = (0);
while(true){
if((i__42911_42918 < count__42910_42917)){
var a_42919 = cljs.core._nth.call(null,chunk__42909_42916,i__42911_42918);
var f_42920 = ((cljs.core.map_QMARK_.call(null,a_42919))?cljs.pprint.pprint:cljs.core.print);
f_42920.call(null,a_42919);

var G__42921 = seq__42908_42915;
var G__42922 = chunk__42909_42916;
var G__42923 = count__42910_42917;
var G__42924 = (i__42911_42918 + (1));
seq__42908_42915 = G__42921;
chunk__42909_42916 = G__42922;
count__42910_42917 = G__42923;
i__42911_42918 = G__42924;
continue;
} else {
var temp__4657__auto___42925 = cljs.core.seq.call(null,seq__42908_42915);
if(temp__4657__auto___42925){
var seq__42908_42926__$1 = temp__4657__auto___42925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42908_42926__$1)){
var c__22439__auto___42927 = cljs.core.chunk_first.call(null,seq__42908_42926__$1);
var G__42928 = cljs.core.chunk_rest.call(null,seq__42908_42926__$1);
var G__42929 = c__22439__auto___42927;
var G__42930 = cljs.core.count.call(null,c__22439__auto___42927);
var G__42931 = (0);
seq__42908_42915 = G__42928;
chunk__42909_42916 = G__42929;
count__42910_42917 = G__42930;
i__42911_42918 = G__42931;
continue;
} else {
var a_42932 = cljs.core.first.call(null,seq__42908_42926__$1);
var f_42934 = ((cljs.core.map_QMARK_.call(null,a_42932))?cljs.pprint.pprint:cljs.core.print);
f_42934.call(null,a_42932);

var G__42935 = cljs.core.next.call(null,seq__42908_42926__$1);
var G__42936 = null;
var G__42937 = (0);
var G__42938 = (0);
seq__42908_42915 = G__42935;
chunk__42909_42916 = G__42936;
count__42910_42917 = G__42937;
i__42911_42918 = G__42938;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null);

cljs.core.flush.call(null);

return cljs.core.last.call(null,args);
});

snetwork.util.p.cljs$lang$maxFixedArity = (0);

snetwork.util.p.cljs$lang$applyTo = (function (seq42907){
return snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42907));
});

snetwork.util.pcoll = (function snetwork$util$pcoll(items){
return cljs.core.doall.call(null,cljs.core.map.call(null,snetwork.util.p,items));
});
snetwork.util.prevent_default = (function snetwork$util$prevent_default(e){
var G__42940 = e;
G__42940.preventDefault();

G__42940.stopPropagation();

return G__42940;
});
snetwork.util.target_val = (function snetwork$util$target_val(e){
return e.target.value;
});
snetwork.util.on_key_down = (function snetwork$util$on_key_down(key_fns){
return (function (e){
var f = (function (){var pred__42945 = cljs.core._EQ__EQ_;
var expr__42946 = (e["keyCode"]);
if(cljs.core.truth_(pred__42945.call(null,goog.events.KeyCodes.ESC,expr__42946))){
return new cljs.core.Keyword("key","esc","key/esc",-1672046650).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
if(cljs.core.truth_(pred__42945.call(null,goog.events.KeyCodes.ENTER,expr__42946))){
return new cljs.core.Keyword("key","enter","key/enter",1792346545).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
return ((function (pred__42945,expr__42946){
return (function (p1__42941_SHARP_){
return p1__42941_SHARP_;
});
;})(pred__42945,expr__42946))
}
}
})();
return f.call(null,e);
});
});
snetwork.util.event_data = (function snetwork$util$event_data(e){
return (e.event_["data"]);
});
snetwork.util.apply_if = (function snetwork$util$apply_if(var_args){
var args__22740__auto__ = [];
var len__22733__auto___42953 = arguments.length;
var i__22734__auto___42954 = (0);
while(true){
if((i__22734__auto___42954 < len__22733__auto___42953)){
args__22740__auto__.push((arguments[i__22734__auto___42954]));

var G__42955 = (i__22734__auto___42954 + (1));
i__22734__auto___42954 = G__42955;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((3) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((3)),(0),null)):null);
return snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22741__auto__);
});

snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic = (function (pred,f,x,args){
if(cljs.core.not.call(null,pred.call(null,x))){
return cljs.core.apply.call(null,f,x,args);
} else {
return x;
}
});

snetwork.util.apply_if.cljs$lang$maxFixedArity = (3);

snetwork.util.apply_if.cljs$lang$applyTo = (function (seq42949){
var G__42950 = cljs.core.first.call(null,seq42949);
var seq42949__$1 = cljs.core.next.call(null,seq42949);
var G__42951 = cljs.core.first.call(null,seq42949__$1);
var seq42949__$2 = cljs.core.next.call(null,seq42949__$1);
var G__42952 = cljs.core.first.call(null,seq42949__$2);
var seq42949__$3 = cljs.core.next.call(null,seq42949__$2);
return snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic(G__42950,G__42951,G__42952,seq42949__$3);
});

snetwork.util.find_by_key = (function snetwork$util$find_by_key(k,v,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__42956_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,p1__42956_SHARP_,k));
}),coll));
});
snetwork.util.map_map = (function snetwork$util$map_map(f,m){

return cljs.core.reduce.call(null,(function (altered_map,p__42961){
var vec__42962 = p__42961;
var k = cljs.core.nth.call(null,vec__42962,(0),null);
var v = cljs.core.nth.call(null,vec__42962,(1),null);
return cljs.core.assoc.call(null,altered_map,k,f.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=util.js.map?rel=1490671760076