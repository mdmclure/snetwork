// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38323){
var map__38348 = p__38323;
var map__38348__$1 = ((((!((map__38348 == null)))?((((map__38348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38348):map__38348);
var m = map__38348__$1;
var n = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38350_38372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38351_38373 = null;
var count__38352_38374 = (0);
var i__38353_38375 = (0);
while(true){
if((i__38353_38375 < count__38352_38374)){
var f_38376 = cljs.core._nth.call(null,chunk__38351_38373,i__38353_38375);
cljs.core.println.call(null,"  ",f_38376);

var G__38377 = seq__38350_38372;
var G__38378 = chunk__38351_38373;
var G__38379 = count__38352_38374;
var G__38380 = (i__38353_38375 + (1));
seq__38350_38372 = G__38377;
chunk__38351_38373 = G__38378;
count__38352_38374 = G__38379;
i__38353_38375 = G__38380;
continue;
} else {
var temp__4657__auto___38381 = cljs.core.seq.call(null,seq__38350_38372);
if(temp__4657__auto___38381){
var seq__38350_38382__$1 = temp__4657__auto___38381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38350_38382__$1)){
var c__19690__auto___38383 = cljs.core.chunk_first.call(null,seq__38350_38382__$1);
var G__38384 = cljs.core.chunk_rest.call(null,seq__38350_38382__$1);
var G__38385 = c__19690__auto___38383;
var G__38386 = cljs.core.count.call(null,c__19690__auto___38383);
var G__38387 = (0);
seq__38350_38372 = G__38384;
chunk__38351_38373 = G__38385;
count__38352_38374 = G__38386;
i__38353_38375 = G__38387;
continue;
} else {
var f_38388 = cljs.core.first.call(null,seq__38350_38382__$1);
cljs.core.println.call(null,"  ",f_38388);

var G__38389 = cljs.core.next.call(null,seq__38350_38382__$1);
var G__38390 = null;
var G__38391 = (0);
var G__38392 = (0);
seq__38350_38372 = G__38389;
chunk__38351_38373 = G__38390;
count__38352_38374 = G__38391;
i__38353_38375 = G__38392;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38393 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18876__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38393);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38393)))?cljs.core.second.call(null,arglists_38393):arglists_38393));
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
var seq__38354_38394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38355_38395 = null;
var count__38356_38396 = (0);
var i__38357_38397 = (0);
while(true){
if((i__38357_38397 < count__38356_38396)){
var vec__38358_38398 = cljs.core._nth.call(null,chunk__38355_38395,i__38357_38397);
var name_38399 = cljs.core.nth.call(null,vec__38358_38398,(0),null);
var map__38361_38400 = cljs.core.nth.call(null,vec__38358_38398,(1),null);
var map__38361_38401__$1 = ((((!((map__38361_38400 == null)))?((((map__38361_38400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38361_38400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38361_38400):map__38361_38400);
var doc_38402 = cljs.core.get.call(null,map__38361_38401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38403 = cljs.core.get.call(null,map__38361_38401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38399);

cljs.core.println.call(null," ",arglists_38403);

if(cljs.core.truth_(doc_38402)){
cljs.core.println.call(null," ",doc_38402);
} else {
}

var G__38404 = seq__38354_38394;
var G__38405 = chunk__38355_38395;
var G__38406 = count__38356_38396;
var G__38407 = (i__38357_38397 + (1));
seq__38354_38394 = G__38404;
chunk__38355_38395 = G__38405;
count__38356_38396 = G__38406;
i__38357_38397 = G__38407;
continue;
} else {
var temp__4657__auto___38408 = cljs.core.seq.call(null,seq__38354_38394);
if(temp__4657__auto___38408){
var seq__38354_38409__$1 = temp__4657__auto___38408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38354_38409__$1)){
var c__19690__auto___38410 = cljs.core.chunk_first.call(null,seq__38354_38409__$1);
var G__38411 = cljs.core.chunk_rest.call(null,seq__38354_38409__$1);
var G__38412 = c__19690__auto___38410;
var G__38413 = cljs.core.count.call(null,c__19690__auto___38410);
var G__38414 = (0);
seq__38354_38394 = G__38411;
chunk__38355_38395 = G__38412;
count__38356_38396 = G__38413;
i__38357_38397 = G__38414;
continue;
} else {
var vec__38363_38415 = cljs.core.first.call(null,seq__38354_38409__$1);
var name_38416 = cljs.core.nth.call(null,vec__38363_38415,(0),null);
var map__38366_38417 = cljs.core.nth.call(null,vec__38363_38415,(1),null);
var map__38366_38418__$1 = ((((!((map__38366_38417 == null)))?((((map__38366_38417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38366_38417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38366_38417):map__38366_38417);
var doc_38419 = cljs.core.get.call(null,map__38366_38418__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38420 = cljs.core.get.call(null,map__38366_38418__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38416);

cljs.core.println.call(null," ",arglists_38420);

if(cljs.core.truth_(doc_38419)){
cljs.core.println.call(null," ",doc_38419);
} else {
}

var G__38421 = cljs.core.next.call(null,seq__38354_38409__$1);
var G__38422 = null;
var G__38423 = (0);
var G__38424 = (0);
seq__38354_38394 = G__38421;
chunk__38355_38395 = G__38422;
count__38356_38396 = G__38423;
i__38357_38397 = G__38424;
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

var seq__38368 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38369 = null;
var count__38370 = (0);
var i__38371 = (0);
while(true){
if((i__38371 < count__38370)){
var role = cljs.core._nth.call(null,chunk__38369,i__38371);
var temp__4657__auto___38425__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38425__$1)){
var spec_38426 = temp__4657__auto___38425__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38426));
} else {
}

var G__38427 = seq__38368;
var G__38428 = chunk__38369;
var G__38429 = count__38370;
var G__38430 = (i__38371 + (1));
seq__38368 = G__38427;
chunk__38369 = G__38428;
count__38370 = G__38429;
i__38371 = G__38430;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38368);
if(temp__4657__auto____$1){
var seq__38368__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38368__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__38368__$1);
var G__38431 = cljs.core.chunk_rest.call(null,seq__38368__$1);
var G__38432 = c__19690__auto__;
var G__38433 = cljs.core.count.call(null,c__19690__auto__);
var G__38434 = (0);
seq__38368 = G__38431;
chunk__38369 = G__38432;
count__38370 = G__38433;
i__38371 = G__38434;
continue;
} else {
var role = cljs.core.first.call(null,seq__38368__$1);
var temp__4657__auto___38435__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38435__$2)){
var spec_38436 = temp__4657__auto___38435__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38436));
} else {
}

var G__38437 = cljs.core.next.call(null,seq__38368__$1);
var G__38438 = null;
var G__38439 = (0);
var G__38440 = (0);
seq__38368 = G__38437;
chunk__38369 = G__38438;
count__38370 = G__38439;
i__38371 = G__38440;
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

//# sourceMappingURL=repl.js.map