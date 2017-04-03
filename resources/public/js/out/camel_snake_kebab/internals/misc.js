// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26325 = arguments.length;
var i__22734__auto___26326 = (0);
while(true){
if((i__22734__auto___26326 < len__22733__auto___26325)){
args__22740__auto__.push((arguments[i__22734__auto___26326]));

var G__26327 = (i__22734__auto___26326 + (1));
i__22734__auto___26326 = G__26327;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((4) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22741__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26319){
var map__26320 = p__26319;
var map__26320__$1 = ((((!((map__26320 == null)))?((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var separator = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__26322 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__26323 = cljs.core.seq.call(null,vec__26322);
var first__26324 = cljs.core.first.call(null,seq__26323);
var seq__26323__$1 = cljs.core.next.call(null,seq__26323);
var first = first__26324;
var rest = seq__26323__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26314){
var G__26315 = cljs.core.first.call(null,seq26314);
var seq26314__$1 = cljs.core.next.call(null,seq26314);
var G__26316 = cljs.core.first.call(null,seq26314__$1);
var seq26314__$2 = cljs.core.next.call(null,seq26314__$1);
var G__26317 = cljs.core.first.call(null,seq26314__$2);
var seq26314__$3 = cljs.core.next.call(null,seq26314__$2);
var G__26318 = cljs.core.first.call(null,seq26314__$3);
var seq26314__$4 = cljs.core.next.call(null,seq26314__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26315,G__26316,G__26317,G__26318,seq26314__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__21625__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1490992941810