// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39374){
var map__39399 = p__39374;
var map__39399__$1 = ((((!((map__39399 == null)))?((((map__39399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39399):map__39399);
var m = map__39399__$1;
var n = cljs.core.get.call(null,map__39399__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39401_39423 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39402_39424 = null;
var count__39403_39425 = (0);
var i__39404_39426 = (0);
while(true){
if((i__39404_39426 < count__39403_39425)){
var f_39427 = cljs.core._nth.call(null,chunk__39402_39424,i__39404_39426);
cljs.core.println.call(null,"  ",f_39427);

var G__39428 = seq__39401_39423;
var G__39429 = chunk__39402_39424;
var G__39430 = count__39403_39425;
var G__39431 = (i__39404_39426 + (1));
seq__39401_39423 = G__39428;
chunk__39402_39424 = G__39429;
count__39403_39425 = G__39430;
i__39404_39426 = G__39431;
continue;
} else {
var temp__4657__auto___39432 = cljs.core.seq.call(null,seq__39401_39423);
if(temp__4657__auto___39432){
var seq__39401_39433__$1 = temp__4657__auto___39432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39401_39433__$1)){
var c__22439__auto___39434 = cljs.core.chunk_first.call(null,seq__39401_39433__$1);
var G__39435 = cljs.core.chunk_rest.call(null,seq__39401_39433__$1);
var G__39436 = c__22439__auto___39434;
var G__39437 = cljs.core.count.call(null,c__22439__auto___39434);
var G__39438 = (0);
seq__39401_39423 = G__39435;
chunk__39402_39424 = G__39436;
count__39403_39425 = G__39437;
i__39404_39426 = G__39438;
continue;
} else {
var f_39439 = cljs.core.first.call(null,seq__39401_39433__$1);
cljs.core.println.call(null,"  ",f_39439);

var G__39440 = cljs.core.next.call(null,seq__39401_39433__$1);
var G__39441 = null;
var G__39442 = (0);
var G__39443 = (0);
seq__39401_39423 = G__39440;
chunk__39402_39424 = G__39441;
count__39403_39425 = G__39442;
i__39404_39426 = G__39443;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39444 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21625__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39444);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39444)))?cljs.core.second.call(null,arglists_39444):arglists_39444));
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
var seq__39405_39445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39406_39446 = null;
var count__39407_39447 = (0);
var i__39408_39448 = (0);
while(true){
if((i__39408_39448 < count__39407_39447)){
var vec__39409_39449 = cljs.core._nth.call(null,chunk__39406_39446,i__39408_39448);
var name_39450 = cljs.core.nth.call(null,vec__39409_39449,(0),null);
var map__39412_39451 = cljs.core.nth.call(null,vec__39409_39449,(1),null);
var map__39412_39452__$1 = ((((!((map__39412_39451 == null)))?((((map__39412_39451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39412_39451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39412_39451):map__39412_39451);
var doc_39453 = cljs.core.get.call(null,map__39412_39452__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39454 = cljs.core.get.call(null,map__39412_39452__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39450);

cljs.core.println.call(null," ",arglists_39454);

if(cljs.core.truth_(doc_39453)){
cljs.core.println.call(null," ",doc_39453);
} else {
}

var G__39455 = seq__39405_39445;
var G__39456 = chunk__39406_39446;
var G__39457 = count__39407_39447;
var G__39458 = (i__39408_39448 + (1));
seq__39405_39445 = G__39455;
chunk__39406_39446 = G__39456;
count__39407_39447 = G__39457;
i__39408_39448 = G__39458;
continue;
} else {
var temp__4657__auto___39459 = cljs.core.seq.call(null,seq__39405_39445);
if(temp__4657__auto___39459){
var seq__39405_39460__$1 = temp__4657__auto___39459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39405_39460__$1)){
var c__22439__auto___39461 = cljs.core.chunk_first.call(null,seq__39405_39460__$1);
var G__39462 = cljs.core.chunk_rest.call(null,seq__39405_39460__$1);
var G__39463 = c__22439__auto___39461;
var G__39464 = cljs.core.count.call(null,c__22439__auto___39461);
var G__39465 = (0);
seq__39405_39445 = G__39462;
chunk__39406_39446 = G__39463;
count__39407_39447 = G__39464;
i__39408_39448 = G__39465;
continue;
} else {
var vec__39414_39466 = cljs.core.first.call(null,seq__39405_39460__$1);
var name_39467 = cljs.core.nth.call(null,vec__39414_39466,(0),null);
var map__39417_39468 = cljs.core.nth.call(null,vec__39414_39466,(1),null);
var map__39417_39469__$1 = ((((!((map__39417_39468 == null)))?((((map__39417_39468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39417_39468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39417_39468):map__39417_39468);
var doc_39470 = cljs.core.get.call(null,map__39417_39469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39471 = cljs.core.get.call(null,map__39417_39469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39467);

cljs.core.println.call(null," ",arglists_39471);

if(cljs.core.truth_(doc_39470)){
cljs.core.println.call(null," ",doc_39470);
} else {
}

var G__39472 = cljs.core.next.call(null,seq__39405_39460__$1);
var G__39473 = null;
var G__39474 = (0);
var G__39475 = (0);
seq__39405_39445 = G__39472;
chunk__39406_39446 = G__39473;
count__39407_39447 = G__39474;
i__39408_39448 = G__39475;
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

var seq__39419 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39420 = null;
var count__39421 = (0);
var i__39422 = (0);
while(true){
if((i__39422 < count__39421)){
var role = cljs.core._nth.call(null,chunk__39420,i__39422);
var temp__4657__auto___39476__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39476__$1)){
var spec_39477 = temp__4657__auto___39476__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39477));
} else {
}

var G__39478 = seq__39419;
var G__39479 = chunk__39420;
var G__39480 = count__39421;
var G__39481 = (i__39422 + (1));
seq__39419 = G__39478;
chunk__39420 = G__39479;
count__39421 = G__39480;
i__39422 = G__39481;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39419);
if(temp__4657__auto____$1){
var seq__39419__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39419__$1)){
var c__22439__auto__ = cljs.core.chunk_first.call(null,seq__39419__$1);
var G__39482 = cljs.core.chunk_rest.call(null,seq__39419__$1);
var G__39483 = c__22439__auto__;
var G__39484 = cljs.core.count.call(null,c__22439__auto__);
var G__39485 = (0);
seq__39419 = G__39482;
chunk__39420 = G__39483;
count__39421 = G__39484;
i__39422 = G__39485;
continue;
} else {
var role = cljs.core.first.call(null,seq__39419__$1);
var temp__4657__auto___39486__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39486__$2)){
var spec_39487 = temp__4657__auto___39486__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39487));
} else {
}

var G__39488 = cljs.core.next.call(null,seq__39419__$1);
var G__39489 = null;
var G__39490 = (0);
var G__39491 = (0);
seq__39419 = G__39488;
chunk__39420 = G__39489;
count__39421 = G__39490;
i__39422 = G__39491;
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

//# sourceMappingURL=repl.js.map?rel=1490992951243