// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37130 = arguments.length;
var i__19985__auto___37131 = (0);
while(true){
if((i__19985__auto___37131 < len__19984__auto___37130)){
args__19991__auto__.push((arguments[i__19985__auto___37131]));

var G__37132 = (i__19985__auto___37131 + (1));
i__19985__auto___37131 = G__37132;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((4) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19992__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__37124){
var map__37125 = p__37124;
var map__37125__$1 = ((((!((map__37125 == null)))?((((map__37125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37125):map__37125);
var separator = cljs.core.get.call(null,map__37125__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__37127 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__37128 = cljs.core.seq.call(null,vec__37127);
var first__37129 = cljs.core.first.call(null,seq__37128);
var seq__37128__$1 = cljs.core.next.call(null,seq__37128);
var first = first__37129;
var rest = seq__37128__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq37119){
var G__37120 = cljs.core.first.call(null,seq37119);
var seq37119__$1 = cljs.core.next.call(null,seq37119);
var G__37121 = cljs.core.first.call(null,seq37119__$1);
var seq37119__$2 = cljs.core.next.call(null,seq37119__$1);
var G__37122 = cljs.core.first.call(null,seq37119__$2);
var seq37119__$3 = cljs.core.next.call(null,seq37119__$2);
var G__37123 = cljs.core.first.call(null,seq37119__$3);
var seq37119__$4 = cljs.core.next.call(null,seq37119__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__37120,G__37121,G__37122,G__37123,seq37119__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__18876__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map