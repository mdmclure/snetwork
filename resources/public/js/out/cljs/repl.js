// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33008){
var map__33033 = p__33008;
var map__33033__$1 = ((((!((map__33033 == null)))?((((map__33033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33033):map__33033);
var m = map__33033__$1;
var n = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33035_33057 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33036_33058 = null;
var count__33037_33059 = (0);
var i__33038_33060 = (0);
while(true){
if((i__33038_33060 < count__33037_33059)){
var f_33061 = cljs.core._nth.call(null,chunk__33036_33058,i__33038_33060);
cljs.core.println.call(null,"  ",f_33061);

var G__33062 = seq__33035_33057;
var G__33063 = chunk__33036_33058;
var G__33064 = count__33037_33059;
var G__33065 = (i__33038_33060 + (1));
seq__33035_33057 = G__33062;
chunk__33036_33058 = G__33063;
count__33037_33059 = G__33064;
i__33038_33060 = G__33065;
continue;
} else {
var temp__4657__auto___33066 = cljs.core.seq.call(null,seq__33035_33057);
if(temp__4657__auto___33066){
var seq__33035_33067__$1 = temp__4657__auto___33066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33035_33067__$1)){
var c__22439__auto___33068 = cljs.core.chunk_first.call(null,seq__33035_33067__$1);
var G__33069 = cljs.core.chunk_rest.call(null,seq__33035_33067__$1);
var G__33070 = c__22439__auto___33068;
var G__33071 = cljs.core.count.call(null,c__22439__auto___33068);
var G__33072 = (0);
seq__33035_33057 = G__33069;
chunk__33036_33058 = G__33070;
count__33037_33059 = G__33071;
i__33038_33060 = G__33072;
continue;
} else {
var f_33073 = cljs.core.first.call(null,seq__33035_33067__$1);
cljs.core.println.call(null,"  ",f_33073);

var G__33074 = cljs.core.next.call(null,seq__33035_33067__$1);
var G__33075 = null;
var G__33076 = (0);
var G__33077 = (0);
seq__33035_33057 = G__33074;
chunk__33036_33058 = G__33075;
count__33037_33059 = G__33076;
i__33038_33060 = G__33077;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33078 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21625__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33078);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33078)))?cljs.core.second.call(null,arglists_33078):arglists_33078));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33039_33079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33040_33080 = null;
var count__33041_33081 = (0);
var i__33042_33082 = (0);
while(true){
if((i__33042_33082 < count__33041_33081)){
var vec__33043_33083 = cljs.core._nth.call(null,chunk__33040_33080,i__33042_33082);
var name_33084 = cljs.core.nth.call(null,vec__33043_33083,(0),null);
var map__33046_33085 = cljs.core.nth.call(null,vec__33043_33083,(1),null);
var map__33046_33086__$1 = ((((!((map__33046_33085 == null)))?((((map__33046_33085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33046_33085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33046_33085):map__33046_33085);
var doc_33087 = cljs.core.get.call(null,map__33046_33086__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33088 = cljs.core.get.call(null,map__33046_33086__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33084);

cljs.core.println.call(null," ",arglists_33088);

if(cljs.core.truth_(doc_33087)){
cljs.core.println.call(null," ",doc_33087);
} else {
}

var G__33089 = seq__33039_33079;
var G__33090 = chunk__33040_33080;
var G__33091 = count__33041_33081;
var G__33092 = (i__33042_33082 + (1));
seq__33039_33079 = G__33089;
chunk__33040_33080 = G__33090;
count__33041_33081 = G__33091;
i__33042_33082 = G__33092;
continue;
} else {
var temp__4657__auto___33093 = cljs.core.seq.call(null,seq__33039_33079);
if(temp__4657__auto___33093){
var seq__33039_33094__$1 = temp__4657__auto___33093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33039_33094__$1)){
var c__22439__auto___33095 = cljs.core.chunk_first.call(null,seq__33039_33094__$1);
var G__33096 = cljs.core.chunk_rest.call(null,seq__33039_33094__$1);
var G__33097 = c__22439__auto___33095;
var G__33098 = cljs.core.count.call(null,c__22439__auto___33095);
var G__33099 = (0);
seq__33039_33079 = G__33096;
chunk__33040_33080 = G__33097;
count__33041_33081 = G__33098;
i__33042_33082 = G__33099;
continue;
} else {
var vec__33048_33100 = cljs.core.first.call(null,seq__33039_33094__$1);
var name_33101 = cljs.core.nth.call(null,vec__33048_33100,(0),null);
var map__33051_33102 = cljs.core.nth.call(null,vec__33048_33100,(1),null);
var map__33051_33103__$1 = ((((!((map__33051_33102 == null)))?((((map__33051_33102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33051_33102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33051_33102):map__33051_33102);
var doc_33104 = cljs.core.get.call(null,map__33051_33103__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33105 = cljs.core.get.call(null,map__33051_33103__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33101);

cljs.core.println.call(null," ",arglists_33105);

if(cljs.core.truth_(doc_33104)){
cljs.core.println.call(null," ",doc_33104);
} else {
}

var G__33106 = cljs.core.next.call(null,seq__33039_33094__$1);
var G__33107 = null;
var G__33108 = (0);
var G__33109 = (0);
seq__33039_33079 = G__33106;
chunk__33040_33080 = G__33107;
count__33041_33081 = G__33108;
i__33042_33082 = G__33109;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33053 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33054 = null;
var count__33055 = (0);
var i__33056 = (0);
while(true){
if((i__33056 < count__33055)){
var role = cljs.core._nth.call(null,chunk__33054,i__33056);
var temp__4657__auto___33110__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33110__$1)){
var spec_33111 = temp__4657__auto___33110__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33111));
} else {
}

var G__33112 = seq__33053;
var G__33113 = chunk__33054;
var G__33114 = count__33055;
var G__33115 = (i__33056 + (1));
seq__33053 = G__33112;
chunk__33054 = G__33113;
count__33055 = G__33114;
i__33056 = G__33115;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33053);
if(temp__4657__auto____$1){
var seq__33053__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33053__$1)){
var c__22439__auto__ = cljs.core.chunk_first.call(null,seq__33053__$1);
var G__33116 = cljs.core.chunk_rest.call(null,seq__33053__$1);
var G__33117 = c__22439__auto__;
var G__33118 = cljs.core.count.call(null,c__22439__auto__);
var G__33119 = (0);
seq__33053 = G__33116;
chunk__33054 = G__33117;
count__33055 = G__33118;
i__33056 = G__33119;
continue;
} else {
var role = cljs.core.first.call(null,seq__33053__$1);
var temp__4657__auto___33120__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33120__$2)){
var spec_33121 = temp__4657__auto___33120__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33121));
} else {
}

var G__33122 = cljs.core.next.call(null,seq__33053__$1);
var G__33123 = null;
var G__33124 = (0);
var G__33125 = (0);
seq__33053 = G__33122;
chunk__33054 = G__33123;
count__33055 = G__33124;
i__33056 = G__33125;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1490042961130