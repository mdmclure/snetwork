// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31348 = arguments.length;
var i__22734__auto___31349 = (0);
while(true){
if((i__22734__auto___31349 < len__22733__auto___31348)){
args__22740__auto__.push((arguments[i__22734__auto___31349]));

var G__31350 = (i__22734__auto___31349 + (1));
i__22734__auto___31349 = G__31350;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((4) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22741__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__31342){
var map__31343 = p__31342;
var map__31343__$1 = ((((!((map__31343 == null)))?((((map__31343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31343):map__31343);
var separator = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__31345 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__31346 = cljs.core.seq.call(null,vec__31345);
var first__31347 = cljs.core.first.call(null,seq__31346);
var seq__31346__$1 = cljs.core.next.call(null,seq__31346);
var first = first__31347;
var rest = seq__31346__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq31337){
var G__31338 = cljs.core.first.call(null,seq31337);
var seq31337__$1 = cljs.core.next.call(null,seq31337);
var G__31339 = cljs.core.first.call(null,seq31337__$1);
var seq31337__$2 = cljs.core.next.call(null,seq31337__$1);
var G__31340 = cljs.core.first.call(null,seq31337__$2);
var seq31337__$3 = cljs.core.next.call(null,seq31337__$2);
var G__31341 = cljs.core.first.call(null,seq31337__$3);
var seq31337__$4 = cljs.core.next.call(null,seq31337__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__31338,G__31339,G__31340,G__31341,seq31337__$4);
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

//# sourceMappingURL=misc.js.map?rel=1490042959652