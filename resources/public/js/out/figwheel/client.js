// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__33394 = cljs.core._EQ_;
var expr__33395 = (function (){var or__21625__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e33398){if((e33398 instanceof Error)){
var e = e33398;
return false;
} else {
throw e33398;

}
}})();
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__33394.call(null,"true",expr__33395))){
return true;
} else {
if(cljs.core.truth_(pred__33394.call(null,"false",expr__33395))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33395)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e33400){if((e33400 instanceof Error)){
var e = e33400;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e33400;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__22740__auto__ = [];
var len__22733__auto___33402 = arguments.length;
var i__22734__auto___33403 = (0);
while(true){
if((i__22734__auto___33403 < len__22733__auto___33402)){
args__22740__auto__.push((arguments[i__22734__auto___33403]));

var G__33404 = (i__22734__auto___33403 + (1));
i__22734__auto___33403 = G__33404;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq33401){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33401));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33405){
var map__33408 = p__33405;
var map__33408__$1 = ((((!((map__33408 == null)))?((((map__33408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33408):map__33408);
var message = cljs.core.get.call(null,map__33408__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33408__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21625__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21613__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21613__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21613__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27279__auto___33570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___33570,ch){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___33570,ch){
return (function (state_33539){
var state_val_33540 = (state_33539[(1)]);
if((state_val_33540 === (7))){
var inst_33535 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33541_33571 = state_33539__$1;
(statearr_33541_33571[(2)] = inst_33535);

(statearr_33541_33571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (1))){
var state_33539__$1 = state_33539;
var statearr_33542_33572 = state_33539__$1;
(statearr_33542_33572[(2)] = null);

(statearr_33542_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (4))){
var inst_33492 = (state_33539[(7)]);
var inst_33492__$1 = (state_33539[(2)]);
var state_33539__$1 = (function (){var statearr_33543 = state_33539;
(statearr_33543[(7)] = inst_33492__$1);

return statearr_33543;
})();
if(cljs.core.truth_(inst_33492__$1)){
var statearr_33544_33573 = state_33539__$1;
(statearr_33544_33573[(1)] = (5));

} else {
var statearr_33545_33574 = state_33539__$1;
(statearr_33545_33574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (15))){
var inst_33499 = (state_33539[(8)]);
var inst_33514 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33499);
var inst_33515 = cljs.core.first.call(null,inst_33514);
var inst_33516 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33515);
var inst_33517 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33516)].join('');
var inst_33518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33517);
var state_33539__$1 = state_33539;
var statearr_33546_33575 = state_33539__$1;
(statearr_33546_33575[(2)] = inst_33518);

(statearr_33546_33575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (13))){
var inst_33523 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33547_33576 = state_33539__$1;
(statearr_33547_33576[(2)] = inst_33523);

(statearr_33547_33576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (6))){
var state_33539__$1 = state_33539;
var statearr_33548_33577 = state_33539__$1;
(statearr_33548_33577[(2)] = null);

(statearr_33548_33577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (17))){
var inst_33521 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33549_33578 = state_33539__$1;
(statearr_33549_33578[(2)] = inst_33521);

(statearr_33549_33578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (3))){
var inst_33537 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33539__$1,inst_33537);
} else {
if((state_val_33540 === (12))){
var inst_33498 = (state_33539[(9)]);
var inst_33512 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33498,opts);
var state_33539__$1 = state_33539;
if(cljs.core.truth_(inst_33512)){
var statearr_33550_33579 = state_33539__$1;
(statearr_33550_33579[(1)] = (15));

} else {
var statearr_33551_33580 = state_33539__$1;
(statearr_33551_33580[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (2))){
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33539__$1,(4),ch);
} else {
if((state_val_33540 === (11))){
var inst_33499 = (state_33539[(8)]);
var inst_33504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33505 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33499);
var inst_33506 = cljs.core.async.timeout.call(null,(1000));
var inst_33507 = [inst_33505,inst_33506];
var inst_33508 = (new cljs.core.PersistentVector(null,2,(5),inst_33504,inst_33507,null));
var state_33539__$1 = state_33539;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33539__$1,(14),inst_33508);
} else {
if((state_val_33540 === (9))){
var inst_33499 = (state_33539[(8)]);
var inst_33525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33526 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33499);
var inst_33527 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33526);
var inst_33528 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33527)].join('');
var inst_33529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33528);
var state_33539__$1 = (function (){var statearr_33552 = state_33539;
(statearr_33552[(10)] = inst_33525);

return statearr_33552;
})();
var statearr_33553_33581 = state_33539__$1;
(statearr_33553_33581[(2)] = inst_33529);

(statearr_33553_33581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (5))){
var inst_33492 = (state_33539[(7)]);
var inst_33494 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33495 = (new cljs.core.PersistentArrayMap(null,2,inst_33494,null));
var inst_33496 = (new cljs.core.PersistentHashSet(null,inst_33495,null));
var inst_33497 = figwheel.client.focus_msgs.call(null,inst_33496,inst_33492);
var inst_33498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33497);
var inst_33499 = cljs.core.first.call(null,inst_33497);
var inst_33500 = figwheel.client.autoload_QMARK_.call(null);
var state_33539__$1 = (function (){var statearr_33554 = state_33539;
(statearr_33554[(8)] = inst_33499);

(statearr_33554[(9)] = inst_33498);

return statearr_33554;
})();
if(cljs.core.truth_(inst_33500)){
var statearr_33555_33582 = state_33539__$1;
(statearr_33555_33582[(1)] = (8));

} else {
var statearr_33556_33583 = state_33539__$1;
(statearr_33556_33583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (14))){
var inst_33510 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33557_33584 = state_33539__$1;
(statearr_33557_33584[(2)] = inst_33510);

(statearr_33557_33584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (16))){
var state_33539__$1 = state_33539;
var statearr_33558_33585 = state_33539__$1;
(statearr_33558_33585[(2)] = null);

(statearr_33558_33585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (10))){
var inst_33531 = (state_33539[(2)]);
var state_33539__$1 = (function (){var statearr_33559 = state_33539;
(statearr_33559[(11)] = inst_33531);

return statearr_33559;
})();
var statearr_33560_33586 = state_33539__$1;
(statearr_33560_33586[(2)] = null);

(statearr_33560_33586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (8))){
var inst_33498 = (state_33539[(9)]);
var inst_33502 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33498,opts);
var state_33539__$1 = state_33539;
if(cljs.core.truth_(inst_33502)){
var statearr_33561_33587 = state_33539__$1;
(statearr_33561_33587[(1)] = (11));

} else {
var statearr_33562_33588 = state_33539__$1;
(statearr_33562_33588[(1)] = (12));

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
});})(c__27279__auto___33570,ch))
;
return ((function (switch__27167__auto__,c__27279__auto___33570,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____0 = (function (){
var statearr_33566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33566[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__);

(statearr_33566[(1)] = (1));

return statearr_33566;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____1 = (function (state_33539){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object)){
var ex__27171__auto__ = e33567;
var statearr_33568_33589 = state_33539;
(statearr_33568_33589[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33590 = state_33539;
state_33539 = G__33590;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__ = function(state_33539){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____1.call(this,state_33539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27168__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___33570,ch))
})();
var state__27281__auto__ = (function (){var statearr_33569 = f__27280__auto__.call(null);
(statearr_33569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___33570);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___33570,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33591_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33591_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33598 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33598){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33596 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33597 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33597;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33596;
}}catch (e33595){if((e33595 instanceof Error)){
var e = e33595;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33598], null));
} else {
var e = e33595;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33598))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33599){
var map__33608 = p__33599;
var map__33608__$1 = ((((!((map__33608 == null)))?((((map__33608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33608):map__33608);
var opts = map__33608__$1;
var build_id = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33608,map__33608__$1,opts,build_id){
return (function (p__33610){
var vec__33611 = p__33610;
var seq__33612 = cljs.core.seq.call(null,vec__33611);
var first__33613 = cljs.core.first.call(null,seq__33612);
var seq__33612__$1 = cljs.core.next.call(null,seq__33612);
var map__33614 = first__33613;
var map__33614__$1 = ((((!((map__33614 == null)))?((((map__33614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33614):map__33614);
var msg = map__33614__$1;
var msg_name = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33612__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33611,seq__33612,first__33613,seq__33612__$1,map__33614,map__33614__$1,msg,msg_name,_,map__33608,map__33608__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33611,seq__33612,first__33613,seq__33612__$1,map__33614,map__33614__$1,msg,msg_name,_,map__33608,map__33608__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33608,map__33608__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33622){
var vec__33623 = p__33622;
var seq__33624 = cljs.core.seq.call(null,vec__33623);
var first__33625 = cljs.core.first.call(null,seq__33624);
var seq__33624__$1 = cljs.core.next.call(null,seq__33624);
var map__33626 = first__33625;
var map__33626__$1 = ((((!((map__33626 == null)))?((((map__33626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33626):map__33626);
var msg = map__33626__$1;
var msg_name = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33624__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33628){
var map__33640 = p__33628;
var map__33640__$1 = ((((!((map__33640 == null)))?((((map__33640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33640):map__33640);
var on_compile_warning = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33640,map__33640__$1,on_compile_warning,on_compile_fail){
return (function (p__33642){
var vec__33643 = p__33642;
var seq__33644 = cljs.core.seq.call(null,vec__33643);
var first__33645 = cljs.core.first.call(null,seq__33644);
var seq__33644__$1 = cljs.core.next.call(null,seq__33644);
var map__33646 = first__33645;
var map__33646__$1 = ((((!((map__33646 == null)))?((((map__33646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33646):map__33646);
var msg = map__33646__$1;
var msg_name = cljs.core.get.call(null,map__33646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33644__$1;
var pred__33648 = cljs.core._EQ_;
var expr__33649 = msg_name;
if(cljs.core.truth_(pred__33648.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33649))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33648.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33649))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33640,map__33640__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__,msg_hist,msg_names,msg){
return (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (7))){
var inst_33789 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33789)){
var statearr_33867_33913 = state_33865__$1;
(statearr_33867_33913[(1)] = (8));

} else {
var statearr_33868_33914 = state_33865__$1;
(statearr_33868_33914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (20))){
var inst_33859 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33869_33915 = state_33865__$1;
(statearr_33869_33915[(2)] = inst_33859);

(statearr_33869_33915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (27))){
var inst_33855 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33870_33916 = state_33865__$1;
(statearr_33870_33916[(2)] = inst_33855);

(statearr_33870_33916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (1))){
var inst_33782 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33782)){
var statearr_33871_33917 = state_33865__$1;
(statearr_33871_33917[(1)] = (2));

} else {
var statearr_33872_33918 = state_33865__$1;
(statearr_33872_33918[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (24))){
var inst_33857 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33873_33919 = state_33865__$1;
(statearr_33873_33919[(2)] = inst_33857);

(statearr_33873_33919[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (4))){
var inst_33863 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33865__$1,inst_33863);
} else {
if((state_val_33866 === (15))){
var inst_33861 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33874_33920 = state_33865__$1;
(statearr_33874_33920[(2)] = inst_33861);

(statearr_33874_33920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (21))){
var inst_33820 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33875_33921 = state_33865__$1;
(statearr_33875_33921[(2)] = inst_33820);

(statearr_33875_33921[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (31))){
var inst_33844 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33844)){
var statearr_33876_33922 = state_33865__$1;
(statearr_33876_33922[(1)] = (34));

} else {
var statearr_33877_33923 = state_33865__$1;
(statearr_33877_33923[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (32))){
var inst_33853 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33878_33924 = state_33865__$1;
(statearr_33878_33924[(2)] = inst_33853);

(statearr_33878_33924[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (33))){
var inst_33842 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33879_33925 = state_33865__$1;
(statearr_33879_33925[(2)] = inst_33842);

(statearr_33879_33925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (13))){
var inst_33803 = figwheel.client.heads_up.clear.call(null);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(16),inst_33803);
} else {
if((state_val_33866 === (22))){
var inst_33824 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33825 = figwheel.client.heads_up.append_message.call(null,inst_33824);
var state_33865__$1 = state_33865;
var statearr_33880_33926 = state_33865__$1;
(statearr_33880_33926[(2)] = inst_33825);

(statearr_33880_33926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (36))){
var inst_33851 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33881_33927 = state_33865__$1;
(statearr_33881_33927[(2)] = inst_33851);

(statearr_33881_33927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (29))){
var inst_33835 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33882_33928 = state_33865__$1;
(statearr_33882_33928[(2)] = inst_33835);

(statearr_33882_33928[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (6))){
var inst_33784 = (state_33865[(7)]);
var state_33865__$1 = state_33865;
var statearr_33883_33929 = state_33865__$1;
(statearr_33883_33929[(2)] = inst_33784);

(statearr_33883_33929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (28))){
var inst_33831 = (state_33865[(2)]);
var inst_33832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33833 = figwheel.client.heads_up.display_warning.call(null,inst_33832);
var state_33865__$1 = (function (){var statearr_33884 = state_33865;
(statearr_33884[(8)] = inst_33831);

return statearr_33884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(29),inst_33833);
} else {
if((state_val_33866 === (25))){
var inst_33829 = figwheel.client.heads_up.clear.call(null);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(28),inst_33829);
} else {
if((state_val_33866 === (34))){
var inst_33846 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(37),inst_33846);
} else {
if((state_val_33866 === (17))){
var inst_33811 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33885_33930 = state_33865__$1;
(statearr_33885_33930[(2)] = inst_33811);

(statearr_33885_33930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (3))){
var inst_33801 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33801)){
var statearr_33886_33931 = state_33865__$1;
(statearr_33886_33931[(1)] = (13));

} else {
var statearr_33887_33932 = state_33865__$1;
(statearr_33887_33932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (12))){
var inst_33797 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33888_33933 = state_33865__$1;
(statearr_33888_33933[(2)] = inst_33797);

(statearr_33888_33933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (2))){
var inst_33784 = (state_33865[(7)]);
var inst_33784__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33865__$1 = (function (){var statearr_33889 = state_33865;
(statearr_33889[(7)] = inst_33784__$1);

return statearr_33889;
})();
if(cljs.core.truth_(inst_33784__$1)){
var statearr_33890_33934 = state_33865__$1;
(statearr_33890_33934[(1)] = (5));

} else {
var statearr_33891_33935 = state_33865__$1;
(statearr_33891_33935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (23))){
var inst_33827 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33827)){
var statearr_33892_33936 = state_33865__$1;
(statearr_33892_33936[(1)] = (25));

} else {
var statearr_33893_33937 = state_33865__$1;
(statearr_33893_33937[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (35))){
var state_33865__$1 = state_33865;
var statearr_33894_33938 = state_33865__$1;
(statearr_33894_33938[(2)] = null);

(statearr_33894_33938[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (19))){
var inst_33822 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33822)){
var statearr_33895_33939 = state_33865__$1;
(statearr_33895_33939[(1)] = (22));

} else {
var statearr_33896_33940 = state_33865__$1;
(statearr_33896_33940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (11))){
var inst_33793 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33897_33941 = state_33865__$1;
(statearr_33897_33941[(2)] = inst_33793);

(statearr_33897_33941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (9))){
var inst_33795 = figwheel.client.heads_up.clear.call(null);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(12),inst_33795);
} else {
if((state_val_33866 === (5))){
var inst_33786 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33865__$1 = state_33865;
var statearr_33898_33942 = state_33865__$1;
(statearr_33898_33942[(2)] = inst_33786);

(statearr_33898_33942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (14))){
var inst_33813 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33813)){
var statearr_33899_33943 = state_33865__$1;
(statearr_33899_33943[(1)] = (18));

} else {
var statearr_33900_33944 = state_33865__$1;
(statearr_33900_33944[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (26))){
var inst_33837 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33837)){
var statearr_33901_33945 = state_33865__$1;
(statearr_33901_33945[(1)] = (30));

} else {
var statearr_33902_33946 = state_33865__$1;
(statearr_33902_33946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (16))){
var inst_33805 = (state_33865[(2)]);
var inst_33806 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33807 = figwheel.client.format_messages.call(null,inst_33806);
var inst_33808 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33809 = figwheel.client.heads_up.display_error.call(null,inst_33807,inst_33808);
var state_33865__$1 = (function (){var statearr_33903 = state_33865;
(statearr_33903[(9)] = inst_33805);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(17),inst_33809);
} else {
if((state_val_33866 === (30))){
var inst_33839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33840 = figwheel.client.heads_up.display_warning.call(null,inst_33839);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(33),inst_33840);
} else {
if((state_val_33866 === (10))){
var inst_33799 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33904_33947 = state_33865__$1;
(statearr_33904_33947[(2)] = inst_33799);

(statearr_33904_33947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (18))){
var inst_33815 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33816 = figwheel.client.format_messages.call(null,inst_33815);
var inst_33817 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33818 = figwheel.client.heads_up.display_error.call(null,inst_33816,inst_33817);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(21),inst_33818);
} else {
if((state_val_33866 === (37))){
var inst_33848 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33905_33948 = state_33865__$1;
(statearr_33905_33948[(2)] = inst_33848);

(statearr_33905_33948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (8))){
var inst_33791 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(11),inst_33791);
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
});})(c__27279__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27167__auto__,c__27279__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____0 = (function (){
var statearr_33909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33909[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__);

(statearr_33909[(1)] = (1));

return statearr_33909;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____1 = (function (state_33865){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e33910){if((e33910 instanceof Object)){
var ex__27171__auto__ = e33910;
var statearr_33911_33949 = state_33865;
(statearr_33911_33949[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33950 = state_33865;
state_33865 = G__33950;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__,msg_hist,msg_names,msg))
})();
var state__27281__auto__ = (function (){var statearr_33912 = f__27280__auto__.call(null);
(statearr_33912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_33912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__,msg_hist,msg_names,msg))
);

return c__27279__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27279__auto___34013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___34013,ch){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___34013,ch){
return (function (state_33996){
var state_val_33997 = (state_33996[(1)]);
if((state_val_33997 === (1))){
var state_33996__$1 = state_33996;
var statearr_33998_34014 = state_33996__$1;
(statearr_33998_34014[(2)] = null);

(statearr_33998_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (2))){
var state_33996__$1 = state_33996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33996__$1,(4),ch);
} else {
if((state_val_33997 === (3))){
var inst_33994 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33996__$1,inst_33994);
} else {
if((state_val_33997 === (4))){
var inst_33984 = (state_33996[(7)]);
var inst_33984__$1 = (state_33996[(2)]);
var state_33996__$1 = (function (){var statearr_33999 = state_33996;
(statearr_33999[(7)] = inst_33984__$1);

return statearr_33999;
})();
if(cljs.core.truth_(inst_33984__$1)){
var statearr_34000_34015 = state_33996__$1;
(statearr_34000_34015[(1)] = (5));

} else {
var statearr_34001_34016 = state_33996__$1;
(statearr_34001_34016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (5))){
var inst_33984 = (state_33996[(7)]);
var inst_33986 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33984);
var state_33996__$1 = state_33996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33996__$1,(8),inst_33986);
} else {
if((state_val_33997 === (6))){
var state_33996__$1 = state_33996;
var statearr_34002_34017 = state_33996__$1;
(statearr_34002_34017[(2)] = null);

(statearr_34002_34017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (7))){
var inst_33992 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
var statearr_34003_34018 = state_33996__$1;
(statearr_34003_34018[(2)] = inst_33992);

(statearr_34003_34018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (8))){
var inst_33988 = (state_33996[(2)]);
var state_33996__$1 = (function (){var statearr_34004 = state_33996;
(statearr_34004[(8)] = inst_33988);

return statearr_34004;
})();
var statearr_34005_34019 = state_33996__$1;
(statearr_34005_34019[(2)] = null);

(statearr_34005_34019[(1)] = (2));


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
});})(c__27279__auto___34013,ch))
;
return ((function (switch__27167__auto__,c__27279__auto___34013,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27168__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27168__auto____0 = (function (){
var statearr_34009 = [null,null,null,null,null,null,null,null,null];
(statearr_34009[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27168__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var figwheel$client$heads_up_plugin_$_state_machine__27168__auto____1 = (function (state_33996){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_33996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e34010){if((e34010 instanceof Object)){
var ex__27171__auto__ = e34010;
var statearr_34011_34020 = state_33996;
(statearr_34011_34020[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_33996;
state_33996 = G__34021;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27168__auto__ = function(state_33996){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27168__auto____1.call(this,state_33996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27168__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27168__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___34013,ch))
})();
var state__27281__auto__ = (function (){var statearr_34012 = f__27280__auto__.call(null);
(statearr_34012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___34013);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___34013,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_34042){
var state_val_34043 = (state_34042[(1)]);
if((state_val_34043 === (1))){
var inst_34037 = cljs.core.async.timeout.call(null,(3000));
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34042__$1,(2),inst_34037);
} else {
if((state_val_34043 === (2))){
var inst_34039 = (state_34042[(2)]);
var inst_34040 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34042__$1 = (function (){var statearr_34044 = state_34042;
(statearr_34044[(7)] = inst_34039);

return statearr_34044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34042__$1,inst_34040);
} else {
return null;
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____0 = (function (){
var statearr_34048 = [null,null,null,null,null,null,null,null];
(statearr_34048[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__);

(statearr_34048[(1)] = (1));

return statearr_34048;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____1 = (function (state_34042){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_34042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e34049){if((e34049 instanceof Object)){
var ex__27171__auto__ = e34049;
var statearr_34050_34052 = state_34042;
(statearr_34050_34052[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34053 = state_34042;
state_34042 = G__34053;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__ = function(state_34042){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____1.call(this,state_34042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27168__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_34051 = f__27280__auto__.call(null);
(statearr_34051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_34051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34054){
var map__34061 = p__34054;
var map__34061__$1 = ((((!((map__34061 == null)))?((((map__34061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34061):map__34061);
var ed = map__34061__$1;
var formatted_exception = cljs.core.get.call(null,map__34061__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34061__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34061__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34063_34067 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34064_34068 = null;
var count__34065_34069 = (0);
var i__34066_34070 = (0);
while(true){
if((i__34066_34070 < count__34065_34069)){
var msg_34071 = cljs.core._nth.call(null,chunk__34064_34068,i__34066_34070);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34071);

var G__34072 = seq__34063_34067;
var G__34073 = chunk__34064_34068;
var G__34074 = count__34065_34069;
var G__34075 = (i__34066_34070 + (1));
seq__34063_34067 = G__34072;
chunk__34064_34068 = G__34073;
count__34065_34069 = G__34074;
i__34066_34070 = G__34075;
continue;
} else {
var temp__4657__auto___34076 = cljs.core.seq.call(null,seq__34063_34067);
if(temp__4657__auto___34076){
var seq__34063_34077__$1 = temp__4657__auto___34076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34063_34077__$1)){
var c__22439__auto___34078 = cljs.core.chunk_first.call(null,seq__34063_34077__$1);
var G__34079 = cljs.core.chunk_rest.call(null,seq__34063_34077__$1);
var G__34080 = c__22439__auto___34078;
var G__34081 = cljs.core.count.call(null,c__22439__auto___34078);
var G__34082 = (0);
seq__34063_34067 = G__34079;
chunk__34064_34068 = G__34080;
count__34065_34069 = G__34081;
i__34066_34070 = G__34082;
continue;
} else {
var msg_34083 = cljs.core.first.call(null,seq__34063_34077__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34083);

var G__34084 = cljs.core.next.call(null,seq__34063_34077__$1);
var G__34085 = null;
var G__34086 = (0);
var G__34087 = (0);
seq__34063_34067 = G__34084;
chunk__34064_34068 = G__34085;
count__34065_34069 = G__34086;
i__34066_34070 = G__34087;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34088){
var map__34091 = p__34088;
var map__34091__$1 = ((((!((map__34091 == null)))?((((map__34091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34091):map__34091);
var w = map__34091__$1;
var message = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21613__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21613__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21613__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34103 = cljs.core.seq.call(null,plugins);
var chunk__34104 = null;
var count__34105 = (0);
var i__34106 = (0);
while(true){
if((i__34106 < count__34105)){
var vec__34107 = cljs.core._nth.call(null,chunk__34104,i__34106);
var k = cljs.core.nth.call(null,vec__34107,(0),null);
var plugin = cljs.core.nth.call(null,vec__34107,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34113 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34103,chunk__34104,count__34105,i__34106,pl_34113,vec__34107,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34113.call(null,msg_hist);
});})(seq__34103,chunk__34104,count__34105,i__34106,pl_34113,vec__34107,k,plugin))
);
} else {
}

var G__34114 = seq__34103;
var G__34115 = chunk__34104;
var G__34116 = count__34105;
var G__34117 = (i__34106 + (1));
seq__34103 = G__34114;
chunk__34104 = G__34115;
count__34105 = G__34116;
i__34106 = G__34117;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34103);
if(temp__4657__auto__){
var seq__34103__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34103__$1)){
var c__22439__auto__ = cljs.core.chunk_first.call(null,seq__34103__$1);
var G__34118 = cljs.core.chunk_rest.call(null,seq__34103__$1);
var G__34119 = c__22439__auto__;
var G__34120 = cljs.core.count.call(null,c__22439__auto__);
var G__34121 = (0);
seq__34103 = G__34118;
chunk__34104 = G__34119;
count__34105 = G__34120;
i__34106 = G__34121;
continue;
} else {
var vec__34110 = cljs.core.first.call(null,seq__34103__$1);
var k = cljs.core.nth.call(null,vec__34110,(0),null);
var plugin = cljs.core.nth.call(null,vec__34110,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34122 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34103,chunk__34104,count__34105,i__34106,pl_34122,vec__34110,k,plugin,seq__34103__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34122.call(null,msg_hist);
});})(seq__34103,chunk__34104,count__34105,i__34106,pl_34122,vec__34110,k,plugin,seq__34103__$1,temp__4657__auto__))
);
} else {
}

var G__34123 = cljs.core.next.call(null,seq__34103__$1);
var G__34124 = null;
var G__34125 = (0);
var G__34126 = (0);
seq__34103 = G__34123;
chunk__34104 = G__34124;
count__34105 = G__34125;
i__34106 = G__34126;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args34127 = [];
var len__22733__auto___34130 = arguments.length;
var i__22734__auto___34131 = (0);
while(true){
if((i__22734__auto___34131 < len__22733__auto___34130)){
args34127.push((arguments[i__22734__auto___34131]));

var G__34132 = (i__22734__auto___34131 + (1));
i__22734__auto___34131 = G__34132;
continue;
} else {
}
break;
}

var G__34129 = args34127.length;
switch (G__34129) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34127.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34138 = arguments.length;
var i__22734__auto___34139 = (0);
while(true){
if((i__22734__auto___34139 < len__22733__auto___34138)){
args__22740__auto__.push((arguments[i__22734__auto___34139]));

var G__34140 = (i__22734__auto___34139 + (1));
i__22734__auto___34139 = G__34140;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34135){
var map__34136 = p__34135;
var map__34136__$1 = ((((!((map__34136 == null)))?((((map__34136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34136):map__34136);
var opts = map__34136__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34134){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34134));
});


//# sourceMappingURL=client.js.map?rel=1490042961557