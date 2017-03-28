// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22740__auto__ = [];
var len__22733__auto___33148 = arguments.length;
var i__22734__auto___33149 = (0);
while(true){
if((i__22734__auto___33149 < len__22733__auto___33148)){
args__22740__auto__.push((arguments[i__22734__auto___33149]));

var G__33150 = (i__22734__auto___33149 + (1));
i__22734__auto___33149 = G__33150;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33140_33151 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33141_33152 = null;
var count__33142_33153 = (0);
var i__33143_33154 = (0);
while(true){
if((i__33143_33154 < count__33142_33153)){
var k_33155 = cljs.core._nth.call(null,chunk__33141_33152,i__33143_33154);
e.setAttribute(cljs.core.name.call(null,k_33155),cljs.core.get.call(null,attrs,k_33155));

var G__33156 = seq__33140_33151;
var G__33157 = chunk__33141_33152;
var G__33158 = count__33142_33153;
var G__33159 = (i__33143_33154 + (1));
seq__33140_33151 = G__33156;
chunk__33141_33152 = G__33157;
count__33142_33153 = G__33158;
i__33143_33154 = G__33159;
continue;
} else {
var temp__4657__auto___33160 = cljs.core.seq.call(null,seq__33140_33151);
if(temp__4657__auto___33160){
var seq__33140_33161__$1 = temp__4657__auto___33160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33140_33161__$1)){
var c__22439__auto___33162 = cljs.core.chunk_first.call(null,seq__33140_33161__$1);
var G__33163 = cljs.core.chunk_rest.call(null,seq__33140_33161__$1);
var G__33164 = c__22439__auto___33162;
var G__33165 = cljs.core.count.call(null,c__22439__auto___33162);
var G__33166 = (0);
seq__33140_33151 = G__33163;
chunk__33141_33152 = G__33164;
count__33142_33153 = G__33165;
i__33143_33154 = G__33166;
continue;
} else {
var k_33167 = cljs.core.first.call(null,seq__33140_33161__$1);
e.setAttribute(cljs.core.name.call(null,k_33167),cljs.core.get.call(null,attrs,k_33167));

var G__33168 = cljs.core.next.call(null,seq__33140_33161__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__33140_33151 = G__33168;
chunk__33141_33152 = G__33169;
count__33142_33153 = G__33170;
i__33143_33154 = G__33171;
continue;
}
} else {
}
}
break;
}

var seq__33144_33172 = cljs.core.seq.call(null,children);
var chunk__33145_33173 = null;
var count__33146_33174 = (0);
var i__33147_33175 = (0);
while(true){
if((i__33147_33175 < count__33146_33174)){
var ch_33176 = cljs.core._nth.call(null,chunk__33145_33173,i__33147_33175);
e.appendChild(ch_33176);

var G__33177 = seq__33144_33172;
var G__33178 = chunk__33145_33173;
var G__33179 = count__33146_33174;
var G__33180 = (i__33147_33175 + (1));
seq__33144_33172 = G__33177;
chunk__33145_33173 = G__33178;
count__33146_33174 = G__33179;
i__33147_33175 = G__33180;
continue;
} else {
var temp__4657__auto___33181 = cljs.core.seq.call(null,seq__33144_33172);
if(temp__4657__auto___33181){
var seq__33144_33182__$1 = temp__4657__auto___33181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33144_33182__$1)){
var c__22439__auto___33183 = cljs.core.chunk_first.call(null,seq__33144_33182__$1);
var G__33184 = cljs.core.chunk_rest.call(null,seq__33144_33182__$1);
var G__33185 = c__22439__auto___33183;
var G__33186 = cljs.core.count.call(null,c__22439__auto___33183);
var G__33187 = (0);
seq__33144_33172 = G__33184;
chunk__33145_33173 = G__33185;
count__33146_33174 = G__33186;
i__33147_33175 = G__33187;
continue;
} else {
var ch_33188 = cljs.core.first.call(null,seq__33144_33182__$1);
e.appendChild(ch_33188);

var G__33189 = cljs.core.next.call(null,seq__33144_33182__$1);
var G__33190 = null;
var G__33191 = (0);
var G__33192 = (0);
seq__33144_33172 = G__33189;
chunk__33145_33173 = G__33190;
count__33146_33174 = G__33191;
i__33147_33175 = G__33192;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33137){
var G__33138 = cljs.core.first.call(null,seq33137);
var seq33137__$1 = cljs.core.next.call(null,seq33137);
var G__33139 = cljs.core.first.call(null,seq33137__$1);
var seq33137__$2 = cljs.core.next.call(null,seq33137__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__33138,G__33139,seq33137__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22557__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22553__auto__,prefer_table__22554__auto__,method_cache__22555__auto__,cached_hierarchy__22556__auto__,hierarchy__22557__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22553__auto__,prefer_table__22554__auto__,method_cache__22555__auto__,cached_hierarchy__22556__auto__,hierarchy__22557__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22557__auto__,method_table__22553__auto__,prefer_table__22554__auto__,method_cache__22555__auto__,cached_hierarchy__22556__auto__));
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
var el_33193 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33193.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33193.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_33193.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33193);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33194,st_map){
var map__33201 = p__33194;
var map__33201__$1 = ((((!((map__33201 == null)))?((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);
var container_el = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33201,map__33201__$1,container_el){
return (function (p__33203){
var vec__33204 = p__33203;
var k = cljs.core.nth.call(null,vec__33204,(0),null);
var v = cljs.core.nth.call(null,vec__33204,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33201,map__33201__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33207,dom_str){
var map__33210 = p__33207;
var map__33210__$1 = ((((!((map__33210 == null)))?((((map__33210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210):map__33210);
var c = map__33210__$1;
var content_area_el = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33212){
var map__33215 = p__33212;
var map__33215__$1 = ((((!((map__33215 == null)))?((((map__33215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33215):map__33215);
var content_area_el = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_33258){
var state_val_33259 = (state_33258[(1)]);
if((state_val_33259 === (1))){
var inst_33243 = (state_33258[(7)]);
var inst_33243__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33244 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33245 = ["10px","10px","100%","68px","1.0"];
var inst_33246 = cljs.core.PersistentHashMap.fromArrays(inst_33244,inst_33245);
var inst_33247 = cljs.core.merge.call(null,inst_33246,style);
var inst_33248 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33243__$1,inst_33247);
var inst_33249 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33243__$1,msg);
var inst_33250 = cljs.core.async.timeout.call(null,(300));
var state_33258__$1 = (function (){var statearr_33260 = state_33258;
(statearr_33260[(8)] = inst_33249);

(statearr_33260[(9)] = inst_33248);

(statearr_33260[(7)] = inst_33243__$1);

return statearr_33260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33258__$1,(2),inst_33250);
} else {
if((state_val_33259 === (2))){
var inst_33243 = (state_33258[(7)]);
var inst_33252 = (state_33258[(2)]);
var inst_33253 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33254 = ["auto"];
var inst_33255 = cljs.core.PersistentHashMap.fromArrays(inst_33253,inst_33254);
var inst_33256 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33243,inst_33255);
var state_33258__$1 = (function (){var statearr_33261 = state_33258;
(statearr_33261[(10)] = inst_33252);

return statearr_33261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33258__$1,inst_33256);
} else {
return null;
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____0 = (function (){
var statearr_33265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33265[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__);

(statearr_33265[(1)] = (1));

return statearr_33265;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____1 = (function (state_33258){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e33266){if((e33266 instanceof Object)){
var ex__27171__auto__ = e33266;
var statearr_33267_33269 = state_33258;
(statearr_33267_33269[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33270 = state_33258;
state_33258 = G__33270;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__ = function(state_33258){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____1.call(this,state_33258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_33268 = f__27280__auto__.call(null);
(statearr_33268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_33268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
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
var vec__33274 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__33274,(0),null);
var ln = cljs.core.nth.call(null,vec__33274,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33281 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33281,(0),null);
var file_line = cljs.core.nth.call(null,vec__33281,(1),null);
var file_column = cljs.core.nth.call(null,vec__33281,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33281,file_name,file_line,file_column){
return (function (p1__33277_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__33277_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__33281,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21625__auto__ = file_line;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
var and__21613__auto__ = cause;
if(cljs.core.truth_(and__21613__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21613__auto__;
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
var map__33286 = figwheel.client.heads_up.ensure_container.call(null);
var map__33286__$1 = ((((!((map__33286 == null)))?((((map__33286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);
var content_area_el = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_33334){
var state_val_33335 = (state_33334[(1)]);
if((state_val_33335 === (1))){
var inst_33317 = (state_33334[(7)]);
var inst_33317__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33318 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33319 = ["0.0"];
var inst_33320 = cljs.core.PersistentHashMap.fromArrays(inst_33318,inst_33319);
var inst_33321 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33317__$1,inst_33320);
var inst_33322 = cljs.core.async.timeout.call(null,(300));
var state_33334__$1 = (function (){var statearr_33336 = state_33334;
(statearr_33336[(7)] = inst_33317__$1);

(statearr_33336[(8)] = inst_33321);

return statearr_33336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33334__$1,(2),inst_33322);
} else {
if((state_val_33335 === (2))){
var inst_33317 = (state_33334[(7)]);
var inst_33324 = (state_33334[(2)]);
var inst_33325 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33326 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33327 = cljs.core.PersistentHashMap.fromArrays(inst_33325,inst_33326);
var inst_33328 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33317,inst_33327);
var inst_33329 = cljs.core.async.timeout.call(null,(200));
var state_33334__$1 = (function (){var statearr_33337 = state_33334;
(statearr_33337[(9)] = inst_33328);

(statearr_33337[(10)] = inst_33324);

return statearr_33337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33334__$1,(3),inst_33329);
} else {
if((state_val_33335 === (3))){
var inst_33317 = (state_33334[(7)]);
var inst_33331 = (state_33334[(2)]);
var inst_33332 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33317,"");
var state_33334__$1 = (function (){var statearr_33338 = state_33334;
(statearr_33338[(11)] = inst_33331);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33334__$1,inst_33332);
} else {
return null;
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__27168__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__27168__auto____0 = (function (){
var statearr_33342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33342[(0)] = figwheel$client$heads_up$clear_$_state_machine__27168__auto__);

(statearr_33342[(1)] = (1));

return statearr_33342;
});
var figwheel$client$heads_up$clear_$_state_machine__27168__auto____1 = (function (state_33334){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e33343){if((e33343 instanceof Object)){
var ex__27171__auto__ = e33343;
var statearr_33344_33346 = state_33334;
(statearr_33344_33346[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33347 = state_33334;
state_33334 = G__33347;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__27168__auto__ = function(state_33334){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__27168__auto____1.call(this,state_33334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__27168__auto____0;
figwheel$client$heads_up$clear_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__27168__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_33345 = f__27280__auto__.call(null);
(statearr_33345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_33345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_33379){
var state_val_33380 = (state_33379[(1)]);
if((state_val_33380 === (1))){
var inst_33369 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33379__$1 = state_33379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33379__$1,(2),inst_33369);
} else {
if((state_val_33380 === (2))){
var inst_33371 = (state_33379[(2)]);
var inst_33372 = cljs.core.async.timeout.call(null,(400));
var state_33379__$1 = (function (){var statearr_33381 = state_33379;
(statearr_33381[(7)] = inst_33371);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33379__$1,(3),inst_33372);
} else {
if((state_val_33380 === (3))){
var inst_33374 = (state_33379[(2)]);
var inst_33375 = figwheel.client.heads_up.clear.call(null);
var state_33379__$1 = (function (){var statearr_33382 = state_33379;
(statearr_33382[(8)] = inst_33374);

return statearr_33382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33379__$1,(4),inst_33375);
} else {
if((state_val_33380 === (4))){
var inst_33377 = (state_33379[(2)]);
var state_33379__$1 = state_33379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33379__$1,inst_33377);
} else {
return null;
}
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____1 = (function (state_33379){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__27171__auto__ = e33387;
var statearr_33388_33390 = state_33379;
(statearr_33388_33390[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33391 = state_33379;
state_33379 = G__33391;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__ = function(state_33379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____1.call(this,state_33379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_33389 = f__27280__auto__.call(null);
(statearr_33389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1490042961279