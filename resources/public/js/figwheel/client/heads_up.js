// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19991__auto__ = [];
var len__19984__auto___38463 = arguments.length;
var i__19985__auto___38464 = (0);
while(true){
if((i__19985__auto___38464 < len__19984__auto___38463)){
args__19991__auto__.push((arguments[i__19985__auto___38464]));

var G__38465 = (i__19985__auto___38464 + (1));
i__19985__auto___38464 = G__38465;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((2) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19992__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38455_38466 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38456_38467 = null;
var count__38457_38468 = (0);
var i__38458_38469 = (0);
while(true){
if((i__38458_38469 < count__38457_38468)){
var k_38470 = cljs.core._nth.call(null,chunk__38456_38467,i__38458_38469);
e.setAttribute(cljs.core.name.call(null,k_38470),cljs.core.get.call(null,attrs,k_38470));

var G__38471 = seq__38455_38466;
var G__38472 = chunk__38456_38467;
var G__38473 = count__38457_38468;
var G__38474 = (i__38458_38469 + (1));
seq__38455_38466 = G__38471;
chunk__38456_38467 = G__38472;
count__38457_38468 = G__38473;
i__38458_38469 = G__38474;
continue;
} else {
var temp__4657__auto___38475 = cljs.core.seq.call(null,seq__38455_38466);
if(temp__4657__auto___38475){
var seq__38455_38476__$1 = temp__4657__auto___38475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38455_38476__$1)){
var c__19690__auto___38477 = cljs.core.chunk_first.call(null,seq__38455_38476__$1);
var G__38478 = cljs.core.chunk_rest.call(null,seq__38455_38476__$1);
var G__38479 = c__19690__auto___38477;
var G__38480 = cljs.core.count.call(null,c__19690__auto___38477);
var G__38481 = (0);
seq__38455_38466 = G__38478;
chunk__38456_38467 = G__38479;
count__38457_38468 = G__38480;
i__38458_38469 = G__38481;
continue;
} else {
var k_38482 = cljs.core.first.call(null,seq__38455_38476__$1);
e.setAttribute(cljs.core.name.call(null,k_38482),cljs.core.get.call(null,attrs,k_38482));

var G__38483 = cljs.core.next.call(null,seq__38455_38476__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__38455_38466 = G__38483;
chunk__38456_38467 = G__38484;
count__38457_38468 = G__38485;
i__38458_38469 = G__38486;
continue;
}
} else {
}
}
break;
}

var seq__38459_38487 = cljs.core.seq.call(null,children);
var chunk__38460_38488 = null;
var count__38461_38489 = (0);
var i__38462_38490 = (0);
while(true){
if((i__38462_38490 < count__38461_38489)){
var ch_38491 = cljs.core._nth.call(null,chunk__38460_38488,i__38462_38490);
e.appendChild(ch_38491);

var G__38492 = seq__38459_38487;
var G__38493 = chunk__38460_38488;
var G__38494 = count__38461_38489;
var G__38495 = (i__38462_38490 + (1));
seq__38459_38487 = G__38492;
chunk__38460_38488 = G__38493;
count__38461_38489 = G__38494;
i__38462_38490 = G__38495;
continue;
} else {
var temp__4657__auto___38496 = cljs.core.seq.call(null,seq__38459_38487);
if(temp__4657__auto___38496){
var seq__38459_38497__$1 = temp__4657__auto___38496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38459_38497__$1)){
var c__19690__auto___38498 = cljs.core.chunk_first.call(null,seq__38459_38497__$1);
var G__38499 = cljs.core.chunk_rest.call(null,seq__38459_38497__$1);
var G__38500 = c__19690__auto___38498;
var G__38501 = cljs.core.count.call(null,c__19690__auto___38498);
var G__38502 = (0);
seq__38459_38487 = G__38499;
chunk__38460_38488 = G__38500;
count__38461_38489 = G__38501;
i__38462_38490 = G__38502;
continue;
} else {
var ch_38503 = cljs.core.first.call(null,seq__38459_38497__$1);
e.appendChild(ch_38503);

var G__38504 = cljs.core.next.call(null,seq__38459_38497__$1);
var G__38505 = null;
var G__38506 = (0);
var G__38507 = (0);
seq__38459_38487 = G__38504;
chunk__38460_38488 = G__38505;
count__38461_38489 = G__38506;
i__38462_38490 = G__38507;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38452){
var G__38453 = cljs.core.first.call(null,seq38452);
var seq38452__$1 = cljs.core.next.call(null,seq38452);
var G__38454 = cljs.core.first.call(null,seq38452__$1);
var seq38452__$2 = cljs.core.next.call(null,seq38452__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38453,G__38454,seq38452__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19804__auto__,prefer_table__19805__auto__,method_cache__19806__auto__,cached_hierarchy__19807__auto__,hierarchy__19808__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19804__auto__,prefer_table__19805__auto__,method_cache__19806__auto__,cached_hierarchy__19807__auto__,hierarchy__19808__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19808__auto__,method_table__19804__auto__,prefer_table__19805__auto__,method_cache__19806__auto__,cached_hierarchy__19807__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_38508 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_38508.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38508.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_38508.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38508);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38509,st_map){
var map__38516 = p__38509;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38516):map__38516);
var container_el = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38516,map__38516__$1,container_el){
return (function (p__38518){
var vec__38519 = p__38518;
var k = cljs.core.nth.call(null,vec__38519,(0),null);
var v = cljs.core.nth.call(null,vec__38519,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38516,map__38516__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38522,dom_str){
var map__38525 = p__38522;
var map__38525__$1 = ((((!((map__38525 == null)))?((((map__38525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38525):map__38525);
var c = map__38525__$1;
var content_area_el = cljs.core.get.call(null,map__38525__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38527){
var map__38530 = p__38527;
var map__38530__$1 = ((((!((map__38530 == null)))?((((map__38530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38530):map__38530);
var content_area_el = cljs.core.get.call(null,map__38530__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_38573){
var state_val_38574 = (state_38573[(1)]);
if((state_val_38574 === (1))){
var inst_38558 = (state_38573[(7)]);
var inst_38558__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38559 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38560 = ["10px","10px","100%","68px","1.0"];
var inst_38561 = cljs.core.PersistentHashMap.fromArrays(inst_38559,inst_38560);
var inst_38562 = cljs.core.merge.call(null,inst_38561,style);
var inst_38563 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38558__$1,inst_38562);
var inst_38564 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38558__$1,msg);
var inst_38565 = cljs.core.async.timeout.call(null,(300));
var state_38573__$1 = (function (){var statearr_38575 = state_38573;
(statearr_38575[(8)] = inst_38564);

(statearr_38575[(7)] = inst_38558__$1);

(statearr_38575[(9)] = inst_38563);

return statearr_38575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38573__$1,(2),inst_38565);
} else {
if((state_val_38574 === (2))){
var inst_38558 = (state_38573[(7)]);
var inst_38567 = (state_38573[(2)]);
var inst_38568 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38569 = ["auto"];
var inst_38570 = cljs.core.PersistentHashMap.fromArrays(inst_38568,inst_38569);
var inst_38571 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38558,inst_38570);
var state_38573__$1 = (function (){var statearr_38576 = state_38573;
(statearr_38576[(10)] = inst_38567);

return statearr_38576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38573__$1,inst_38571);
} else {
return null;
}
}
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____0 = (function (){
var statearr_38580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38580[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__);

(statearr_38580[(1)] = (1));

return statearr_38580;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____1 = (function (state_38573){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_38573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e38581){if((e38581 instanceof Object)){
var ex__25421__auto__ = e38581;
var statearr_38582_38584 = state_38573;
(statearr_38582_38584[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38585 = state_38573;
state_38573 = G__38585;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__ = function(state_38573){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____1.call(this,state_38573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_38583 = f__25483__auto__.call(null);
(statearr_38583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_38583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__38589 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__38589,(0),null);
var ln = cljs.core.nth.call(null,vec__38589,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__38596 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__38596,(0),null);
var file_line = cljs.core.nth.call(null,vec__38596,(1),null);
var file_column = cljs.core.nth.call(null,vec__38596,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38596,file_name,file_line,file_column){
return (function (p1__38592_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__38592_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__38596,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18876__auto__ = file_line;
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
var and__18864__auto__ = cause;
if(cljs.core.truth_(and__18864__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18864__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__38601 = figwheel.client.heads_up.ensure_container.call(null);
var map__38601__$1 = ((((!((map__38601 == null)))?((((map__38601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38601):map__38601);
var content_area_el = cljs.core.get.call(null,map__38601__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_38649){
var state_val_38650 = (state_38649[(1)]);
if((state_val_38650 === (1))){
var inst_38632 = (state_38649[(7)]);
var inst_38632__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38633 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38634 = ["0.0"];
var inst_38635 = cljs.core.PersistentHashMap.fromArrays(inst_38633,inst_38634);
var inst_38636 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38632__$1,inst_38635);
var inst_38637 = cljs.core.async.timeout.call(null,(300));
var state_38649__$1 = (function (){var statearr_38651 = state_38649;
(statearr_38651[(7)] = inst_38632__$1);

(statearr_38651[(8)] = inst_38636);

return statearr_38651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(2),inst_38637);
} else {
if((state_val_38650 === (2))){
var inst_38632 = (state_38649[(7)]);
var inst_38639 = (state_38649[(2)]);
var inst_38640 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38641 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38642 = cljs.core.PersistentHashMap.fromArrays(inst_38640,inst_38641);
var inst_38643 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38632,inst_38642);
var inst_38644 = cljs.core.async.timeout.call(null,(200));
var state_38649__$1 = (function (){var statearr_38652 = state_38649;
(statearr_38652[(9)] = inst_38639);

(statearr_38652[(10)] = inst_38643);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(3),inst_38644);
} else {
if((state_val_38650 === (3))){
var inst_38632 = (state_38649[(7)]);
var inst_38646 = (state_38649[(2)]);
var inst_38647 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38632,"");
var state_38649__$1 = (function (){var statearr_38653 = state_38649;
(statearr_38653[(11)] = inst_38646);

return statearr_38653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38649__$1,inst_38647);
} else {
return null;
}
}
}
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25418__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25418__auto____0 = (function (){
var statearr_38657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38657[(0)] = figwheel$client$heads_up$clear_$_state_machine__25418__auto__);

(statearr_38657[(1)] = (1));

return statearr_38657;
});
var figwheel$client$heads_up$clear_$_state_machine__25418__auto____1 = (function (state_38649){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_38649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e38658){if((e38658 instanceof Object)){
var ex__25421__auto__ = e38658;
var statearr_38659_38661 = state_38649;
(statearr_38659_38661[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38662 = state_38649;
state_38649 = G__38662;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25418__auto__ = function(state_38649){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25418__auto____1.call(this,state_38649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25418__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25418__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_38660 = f__25483__auto__.call(null);
(statearr_38660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_38660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_38694){
var state_val_38695 = (state_38694[(1)]);
if((state_val_38695 === (1))){
var inst_38684 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38694__$1 = state_38694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38694__$1,(2),inst_38684);
} else {
if((state_val_38695 === (2))){
var inst_38686 = (state_38694[(2)]);
var inst_38687 = cljs.core.async.timeout.call(null,(400));
var state_38694__$1 = (function (){var statearr_38696 = state_38694;
(statearr_38696[(7)] = inst_38686);

return statearr_38696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38694__$1,(3),inst_38687);
} else {
if((state_val_38695 === (3))){
var inst_38689 = (state_38694[(2)]);
var inst_38690 = figwheel.client.heads_up.clear.call(null);
var state_38694__$1 = (function (){var statearr_38697 = state_38694;
(statearr_38697[(8)] = inst_38689);

return statearr_38697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38694__$1,(4),inst_38690);
} else {
if((state_val_38695 === (4))){
var inst_38692 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38694__$1,inst_38692);
} else {
return null;
}
}
}
}
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____0 = (function (){
var statearr_38701 = [null,null,null,null,null,null,null,null,null];
(statearr_38701[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__);

(statearr_38701[(1)] = (1));

return statearr_38701;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____1 = (function (state_38694){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_38694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e38702){if((e38702 instanceof Object)){
var ex__25421__auto__ = e38702;
var statearr_38703_38705 = state_38694;
(statearr_38703_38705[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38706 = state_38694;
state_38694 = G__38706;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__ = function(state_38694){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____1.call(this,state_38694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_38704 = f__25483__auto__.call(null);
(statearr_38704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_38704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map