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
var pred__38709 = cljs.core._EQ_;
var expr__38710 = (function (){var or__18876__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e38713){if((e38713 instanceof Error)){
var e = e38713;
return false;
} else {
throw e38713;

}
}})();
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38709.call(null,"true",expr__38710))){
return true;
} else {
if(cljs.core.truth_(pred__38709.call(null,"false",expr__38710))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38710)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38715){if((e38715 instanceof Error)){
var e = e38715;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38715;

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
var args__19991__auto__ = [];
var len__19984__auto___38717 = arguments.length;
var i__19985__auto___38718 = (0);
while(true){
if((i__19985__auto___38718 < len__19984__auto___38717)){
args__19991__auto__.push((arguments[i__19985__auto___38718]));

var G__38719 = (i__19985__auto___38718 + (1));
i__19985__auto___38718 = G__38719;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq38716){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38716));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38720){
var map__38723 = p__38720;
var map__38723__$1 = ((((!((map__38723 == null)))?((((map__38723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38723):map__38723);
var message = cljs.core.get.call(null,map__38723__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38723__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18876__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18864__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18864__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18864__auto__;
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
var c__25482__auto___38885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___38885,ch){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___38885,ch){
return (function (state_38854){
var state_val_38855 = (state_38854[(1)]);
if((state_val_38855 === (7))){
var inst_38850 = (state_38854[(2)]);
var state_38854__$1 = state_38854;
var statearr_38856_38886 = state_38854__$1;
(statearr_38856_38886[(2)] = inst_38850);

(statearr_38856_38886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (1))){
var state_38854__$1 = state_38854;
var statearr_38857_38887 = state_38854__$1;
(statearr_38857_38887[(2)] = null);

(statearr_38857_38887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (4))){
var inst_38807 = (state_38854[(7)]);
var inst_38807__$1 = (state_38854[(2)]);
var state_38854__$1 = (function (){var statearr_38858 = state_38854;
(statearr_38858[(7)] = inst_38807__$1);

return statearr_38858;
})();
if(cljs.core.truth_(inst_38807__$1)){
var statearr_38859_38888 = state_38854__$1;
(statearr_38859_38888[(1)] = (5));

} else {
var statearr_38860_38889 = state_38854__$1;
(statearr_38860_38889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (15))){
var inst_38814 = (state_38854[(8)]);
var inst_38829 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38814);
var inst_38830 = cljs.core.first.call(null,inst_38829);
var inst_38831 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38830);
var inst_38832 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38831)].join('');
var inst_38833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38832);
var state_38854__$1 = state_38854;
var statearr_38861_38890 = state_38854__$1;
(statearr_38861_38890[(2)] = inst_38833);

(statearr_38861_38890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (13))){
var inst_38838 = (state_38854[(2)]);
var state_38854__$1 = state_38854;
var statearr_38862_38891 = state_38854__$1;
(statearr_38862_38891[(2)] = inst_38838);

(statearr_38862_38891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (6))){
var state_38854__$1 = state_38854;
var statearr_38863_38892 = state_38854__$1;
(statearr_38863_38892[(2)] = null);

(statearr_38863_38892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (17))){
var inst_38836 = (state_38854[(2)]);
var state_38854__$1 = state_38854;
var statearr_38864_38893 = state_38854__$1;
(statearr_38864_38893[(2)] = inst_38836);

(statearr_38864_38893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (3))){
var inst_38852 = (state_38854[(2)]);
var state_38854__$1 = state_38854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38854__$1,inst_38852);
} else {
if((state_val_38855 === (12))){
var inst_38813 = (state_38854[(9)]);
var inst_38827 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38813,opts);
var state_38854__$1 = state_38854;
if(cljs.core.truth_(inst_38827)){
var statearr_38865_38894 = state_38854__$1;
(statearr_38865_38894[(1)] = (15));

} else {
var statearr_38866_38895 = state_38854__$1;
(statearr_38866_38895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (2))){
var state_38854__$1 = state_38854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38854__$1,(4),ch);
} else {
if((state_val_38855 === (11))){
var inst_38814 = (state_38854[(8)]);
var inst_38819 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38820 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38814);
var inst_38821 = cljs.core.async.timeout.call(null,(1000));
var inst_38822 = [inst_38820,inst_38821];
var inst_38823 = (new cljs.core.PersistentVector(null,2,(5),inst_38819,inst_38822,null));
var state_38854__$1 = state_38854;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38854__$1,(14),inst_38823);
} else {
if((state_val_38855 === (9))){
var inst_38814 = (state_38854[(8)]);
var inst_38840 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38841 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38814);
var inst_38842 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38841);
var inst_38843 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38842)].join('');
var inst_38844 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38843);
var state_38854__$1 = (function (){var statearr_38867 = state_38854;
(statearr_38867[(10)] = inst_38840);

return statearr_38867;
})();
var statearr_38868_38896 = state_38854__$1;
(statearr_38868_38896[(2)] = inst_38844);

(statearr_38868_38896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (5))){
var inst_38807 = (state_38854[(7)]);
var inst_38809 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38810 = (new cljs.core.PersistentArrayMap(null,2,inst_38809,null));
var inst_38811 = (new cljs.core.PersistentHashSet(null,inst_38810,null));
var inst_38812 = figwheel.client.focus_msgs.call(null,inst_38811,inst_38807);
var inst_38813 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38812);
var inst_38814 = cljs.core.first.call(null,inst_38812);
var inst_38815 = figwheel.client.autoload_QMARK_.call(null);
var state_38854__$1 = (function (){var statearr_38869 = state_38854;
(statearr_38869[(9)] = inst_38813);

(statearr_38869[(8)] = inst_38814);

return statearr_38869;
})();
if(cljs.core.truth_(inst_38815)){
var statearr_38870_38897 = state_38854__$1;
(statearr_38870_38897[(1)] = (8));

} else {
var statearr_38871_38898 = state_38854__$1;
(statearr_38871_38898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (14))){
var inst_38825 = (state_38854[(2)]);
var state_38854__$1 = state_38854;
var statearr_38872_38899 = state_38854__$1;
(statearr_38872_38899[(2)] = inst_38825);

(statearr_38872_38899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (16))){
var state_38854__$1 = state_38854;
var statearr_38873_38900 = state_38854__$1;
(statearr_38873_38900[(2)] = null);

(statearr_38873_38900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (10))){
var inst_38846 = (state_38854[(2)]);
var state_38854__$1 = (function (){var statearr_38874 = state_38854;
(statearr_38874[(11)] = inst_38846);

return statearr_38874;
})();
var statearr_38875_38901 = state_38854__$1;
(statearr_38875_38901[(2)] = null);

(statearr_38875_38901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38855 === (8))){
var inst_38813 = (state_38854[(9)]);
var inst_38817 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38813,opts);
var state_38854__$1 = state_38854;
if(cljs.core.truth_(inst_38817)){
var statearr_38876_38902 = state_38854__$1;
(statearr_38876_38902[(1)] = (11));

} else {
var statearr_38877_38903 = state_38854__$1;
(statearr_38877_38903[(1)] = (12));

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
});})(c__25482__auto___38885,ch))
;
return ((function (switch__25417__auto__,c__25482__auto___38885,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____0 = (function (){
var statearr_38881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38881[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__);

(statearr_38881[(1)] = (1));

return statearr_38881;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____1 = (function (state_38854){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_38854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e38882){if((e38882 instanceof Object)){
var ex__25421__auto__ = e38882;
var statearr_38883_38904 = state_38854;
(statearr_38883_38904[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38905 = state_38854;
state_38854 = G__38905;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__ = function(state_38854){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____1.call(this,state_38854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25418__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___38885,ch))
})();
var state__25484__auto__ = (function (){var statearr_38884 = f__25483__auto__.call(null);
(statearr_38884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___38885);

return statearr_38884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___38885,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38906_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38906_SHARP_));
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
var base_path_38913 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38913){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38911 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38912 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38912;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38911;
}}catch (e38910){if((e38910 instanceof Error)){
var e = e38910;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38913], null));
} else {
var e = e38910;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38913))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38914){
var map__38923 = p__38914;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var opts = map__38923__$1;
var build_id = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38923,map__38923__$1,opts,build_id){
return (function (p__38925){
var vec__38926 = p__38925;
var seq__38927 = cljs.core.seq.call(null,vec__38926);
var first__38928 = cljs.core.first.call(null,seq__38927);
var seq__38927__$1 = cljs.core.next.call(null,seq__38927);
var map__38929 = first__38928;
var map__38929__$1 = ((((!((map__38929 == null)))?((((map__38929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38929):map__38929);
var msg = map__38929__$1;
var msg_name = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38927__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38926,seq__38927,first__38928,seq__38927__$1,map__38929,map__38929__$1,msg,msg_name,_,map__38923,map__38923__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38926,seq__38927,first__38928,seq__38927__$1,map__38929,map__38929__$1,msg,msg_name,_,map__38923,map__38923__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38923,map__38923__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38937){
var vec__38938 = p__38937;
var seq__38939 = cljs.core.seq.call(null,vec__38938);
var first__38940 = cljs.core.first.call(null,seq__38939);
var seq__38939__$1 = cljs.core.next.call(null,seq__38939);
var map__38941 = first__38940;
var map__38941__$1 = ((((!((map__38941 == null)))?((((map__38941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38941):map__38941);
var msg = map__38941__$1;
var msg_name = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38939__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38943){
var map__38955 = p__38943;
var map__38955__$1 = ((((!((map__38955 == null)))?((((map__38955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38955):map__38955);
var on_compile_warning = cljs.core.get.call(null,map__38955__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38955__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38955,map__38955__$1,on_compile_warning,on_compile_fail){
return (function (p__38957){
var vec__38958 = p__38957;
var seq__38959 = cljs.core.seq.call(null,vec__38958);
var first__38960 = cljs.core.first.call(null,seq__38959);
var seq__38959__$1 = cljs.core.next.call(null,seq__38959);
var map__38961 = first__38960;
var map__38961__$1 = ((((!((map__38961 == null)))?((((map__38961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38961):map__38961);
var msg = map__38961__$1;
var msg_name = cljs.core.get.call(null,map__38961__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38959__$1;
var pred__38963 = cljs.core._EQ_;
var expr__38964 = msg_name;
if(cljs.core.truth_(pred__38963.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38964))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38963.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38964))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38955,map__38955__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__,msg_hist,msg_names,msg){
return (function (state_39180){
var state_val_39181 = (state_39180[(1)]);
if((state_val_39181 === (7))){
var inst_39104 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39104)){
var statearr_39182_39228 = state_39180__$1;
(statearr_39182_39228[(1)] = (8));

} else {
var statearr_39183_39229 = state_39180__$1;
(statearr_39183_39229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (20))){
var inst_39174 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39184_39230 = state_39180__$1;
(statearr_39184_39230[(2)] = inst_39174);

(statearr_39184_39230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (27))){
var inst_39170 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39185_39231 = state_39180__$1;
(statearr_39185_39231[(2)] = inst_39170);

(statearr_39185_39231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (1))){
var inst_39097 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39097)){
var statearr_39186_39232 = state_39180__$1;
(statearr_39186_39232[(1)] = (2));

} else {
var statearr_39187_39233 = state_39180__$1;
(statearr_39187_39233[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (24))){
var inst_39172 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39188_39234 = state_39180__$1;
(statearr_39188_39234[(2)] = inst_39172);

(statearr_39188_39234[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (4))){
var inst_39178 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39180__$1,inst_39178);
} else {
if((state_val_39181 === (15))){
var inst_39176 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39189_39235 = state_39180__$1;
(statearr_39189_39235[(2)] = inst_39176);

(statearr_39189_39235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (21))){
var inst_39135 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39190_39236 = state_39180__$1;
(statearr_39190_39236[(2)] = inst_39135);

(statearr_39190_39236[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (31))){
var inst_39159 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39159)){
var statearr_39191_39237 = state_39180__$1;
(statearr_39191_39237[(1)] = (34));

} else {
var statearr_39192_39238 = state_39180__$1;
(statearr_39192_39238[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (32))){
var inst_39168 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39193_39239 = state_39180__$1;
(statearr_39193_39239[(2)] = inst_39168);

(statearr_39193_39239[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (33))){
var inst_39157 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39194_39240 = state_39180__$1;
(statearr_39194_39240[(2)] = inst_39157);

(statearr_39194_39240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (13))){
var inst_39118 = figwheel.client.heads_up.clear.call(null);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(16),inst_39118);
} else {
if((state_val_39181 === (22))){
var inst_39139 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39140 = figwheel.client.heads_up.append_message.call(null,inst_39139);
var state_39180__$1 = state_39180;
var statearr_39195_39241 = state_39180__$1;
(statearr_39195_39241[(2)] = inst_39140);

(statearr_39195_39241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (36))){
var inst_39166 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39196_39242 = state_39180__$1;
(statearr_39196_39242[(2)] = inst_39166);

(statearr_39196_39242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (29))){
var inst_39150 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39197_39243 = state_39180__$1;
(statearr_39197_39243[(2)] = inst_39150);

(statearr_39197_39243[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (6))){
var inst_39099 = (state_39180[(7)]);
var state_39180__$1 = state_39180;
var statearr_39198_39244 = state_39180__$1;
(statearr_39198_39244[(2)] = inst_39099);

(statearr_39198_39244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (28))){
var inst_39146 = (state_39180[(2)]);
var inst_39147 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39148 = figwheel.client.heads_up.display_warning.call(null,inst_39147);
var state_39180__$1 = (function (){var statearr_39199 = state_39180;
(statearr_39199[(8)] = inst_39146);

return statearr_39199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(29),inst_39148);
} else {
if((state_val_39181 === (25))){
var inst_39144 = figwheel.client.heads_up.clear.call(null);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(28),inst_39144);
} else {
if((state_val_39181 === (34))){
var inst_39161 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(37),inst_39161);
} else {
if((state_val_39181 === (17))){
var inst_39126 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39200_39245 = state_39180__$1;
(statearr_39200_39245[(2)] = inst_39126);

(statearr_39200_39245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (3))){
var inst_39116 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39116)){
var statearr_39201_39246 = state_39180__$1;
(statearr_39201_39246[(1)] = (13));

} else {
var statearr_39202_39247 = state_39180__$1;
(statearr_39202_39247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (12))){
var inst_39112 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39203_39248 = state_39180__$1;
(statearr_39203_39248[(2)] = inst_39112);

(statearr_39203_39248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (2))){
var inst_39099 = (state_39180[(7)]);
var inst_39099__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39180__$1 = (function (){var statearr_39204 = state_39180;
(statearr_39204[(7)] = inst_39099__$1);

return statearr_39204;
})();
if(cljs.core.truth_(inst_39099__$1)){
var statearr_39205_39249 = state_39180__$1;
(statearr_39205_39249[(1)] = (5));

} else {
var statearr_39206_39250 = state_39180__$1;
(statearr_39206_39250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (23))){
var inst_39142 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39142)){
var statearr_39207_39251 = state_39180__$1;
(statearr_39207_39251[(1)] = (25));

} else {
var statearr_39208_39252 = state_39180__$1;
(statearr_39208_39252[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (35))){
var state_39180__$1 = state_39180;
var statearr_39209_39253 = state_39180__$1;
(statearr_39209_39253[(2)] = null);

(statearr_39209_39253[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (19))){
var inst_39137 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39137)){
var statearr_39210_39254 = state_39180__$1;
(statearr_39210_39254[(1)] = (22));

} else {
var statearr_39211_39255 = state_39180__$1;
(statearr_39211_39255[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (11))){
var inst_39108 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39212_39256 = state_39180__$1;
(statearr_39212_39256[(2)] = inst_39108);

(statearr_39212_39256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (9))){
var inst_39110 = figwheel.client.heads_up.clear.call(null);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(12),inst_39110);
} else {
if((state_val_39181 === (5))){
var inst_39101 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39180__$1 = state_39180;
var statearr_39213_39257 = state_39180__$1;
(statearr_39213_39257[(2)] = inst_39101);

(statearr_39213_39257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (14))){
var inst_39128 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39128)){
var statearr_39214_39258 = state_39180__$1;
(statearr_39214_39258[(1)] = (18));

} else {
var statearr_39215_39259 = state_39180__$1;
(statearr_39215_39259[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (26))){
var inst_39152 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39180__$1 = state_39180;
if(cljs.core.truth_(inst_39152)){
var statearr_39216_39260 = state_39180__$1;
(statearr_39216_39260[(1)] = (30));

} else {
var statearr_39217_39261 = state_39180__$1;
(statearr_39217_39261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (16))){
var inst_39120 = (state_39180[(2)]);
var inst_39121 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39122 = figwheel.client.format_messages.call(null,inst_39121);
var inst_39123 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39124 = figwheel.client.heads_up.display_error.call(null,inst_39122,inst_39123);
var state_39180__$1 = (function (){var statearr_39218 = state_39180;
(statearr_39218[(9)] = inst_39120);

return statearr_39218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(17),inst_39124);
} else {
if((state_val_39181 === (30))){
var inst_39154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39155 = figwheel.client.heads_up.display_warning.call(null,inst_39154);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(33),inst_39155);
} else {
if((state_val_39181 === (10))){
var inst_39114 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39219_39262 = state_39180__$1;
(statearr_39219_39262[(2)] = inst_39114);

(statearr_39219_39262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (18))){
var inst_39130 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39131 = figwheel.client.format_messages.call(null,inst_39130);
var inst_39132 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39133 = figwheel.client.heads_up.display_error.call(null,inst_39131,inst_39132);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(21),inst_39133);
} else {
if((state_val_39181 === (37))){
var inst_39163 = (state_39180[(2)]);
var state_39180__$1 = state_39180;
var statearr_39220_39263 = state_39180__$1;
(statearr_39220_39263[(2)] = inst_39163);

(statearr_39220_39263[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39181 === (8))){
var inst_39106 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39180__$1 = state_39180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39180__$1,(11),inst_39106);
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
});})(c__25482__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25417__auto__,c__25482__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____0 = (function (){
var statearr_39224 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39224[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__);

(statearr_39224[(1)] = (1));

return statearr_39224;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____1 = (function (state_39180){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_39180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e39225){if((e39225 instanceof Object)){
var ex__25421__auto__ = e39225;
var statearr_39226_39264 = state_39180;
(statearr_39226_39264[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39265 = state_39180;
state_39180 = G__39265;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__ = function(state_39180){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____1.call(this,state_39180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__,msg_hist,msg_names,msg))
})();
var state__25484__auto__ = (function (){var statearr_39227 = f__25483__auto__.call(null);
(statearr_39227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_39227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__,msg_hist,msg_names,msg))
);

return c__25482__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25482__auto___39328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___39328,ch){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___39328,ch){
return (function (state_39311){
var state_val_39312 = (state_39311[(1)]);
if((state_val_39312 === (1))){
var state_39311__$1 = state_39311;
var statearr_39313_39329 = state_39311__$1;
(statearr_39313_39329[(2)] = null);

(statearr_39313_39329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (2))){
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39311__$1,(4),ch);
} else {
if((state_val_39312 === (3))){
var inst_39309 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39311__$1,inst_39309);
} else {
if((state_val_39312 === (4))){
var inst_39299 = (state_39311[(7)]);
var inst_39299__$1 = (state_39311[(2)]);
var state_39311__$1 = (function (){var statearr_39314 = state_39311;
(statearr_39314[(7)] = inst_39299__$1);

return statearr_39314;
})();
if(cljs.core.truth_(inst_39299__$1)){
var statearr_39315_39330 = state_39311__$1;
(statearr_39315_39330[(1)] = (5));

} else {
var statearr_39316_39331 = state_39311__$1;
(statearr_39316_39331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (5))){
var inst_39299 = (state_39311[(7)]);
var inst_39301 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39299);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39311__$1,(8),inst_39301);
} else {
if((state_val_39312 === (6))){
var state_39311__$1 = state_39311;
var statearr_39317_39332 = state_39311__$1;
(statearr_39317_39332[(2)] = null);

(statearr_39317_39332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (7))){
var inst_39307 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39318_39333 = state_39311__$1;
(statearr_39318_39333[(2)] = inst_39307);

(statearr_39318_39333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (8))){
var inst_39303 = (state_39311[(2)]);
var state_39311__$1 = (function (){var statearr_39319 = state_39311;
(statearr_39319[(8)] = inst_39303);

return statearr_39319;
})();
var statearr_39320_39334 = state_39311__$1;
(statearr_39320_39334[(2)] = null);

(statearr_39320_39334[(1)] = (2));


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
});})(c__25482__auto___39328,ch))
;
return ((function (switch__25417__auto__,c__25482__auto___39328,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25418__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25418__auto____0 = (function (){
var statearr_39324 = [null,null,null,null,null,null,null,null,null];
(statearr_39324[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25418__auto__);

(statearr_39324[(1)] = (1));

return statearr_39324;
});
var figwheel$client$heads_up_plugin_$_state_machine__25418__auto____1 = (function (state_39311){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_39311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e39325){if((e39325 instanceof Object)){
var ex__25421__auto__ = e39325;
var statearr_39326_39335 = state_39311;
(statearr_39326_39335[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39336 = state_39311;
state_39311 = G__39336;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25418__auto__ = function(state_39311){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25418__auto____1.call(this,state_39311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25418__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25418__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___39328,ch))
})();
var state__25484__auto__ = (function (){var statearr_39327 = f__25483__auto__.call(null);
(statearr_39327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___39328);

return statearr_39327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___39328,ch))
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
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_39357){
var state_val_39358 = (state_39357[(1)]);
if((state_val_39358 === (1))){
var inst_39352 = cljs.core.async.timeout.call(null,(3000));
var state_39357__$1 = state_39357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39357__$1,(2),inst_39352);
} else {
if((state_val_39358 === (2))){
var inst_39354 = (state_39357[(2)]);
var inst_39355 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39357__$1 = (function (){var statearr_39359 = state_39357;
(statearr_39359[(7)] = inst_39354);

return statearr_39359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39357__$1,inst_39355);
} else {
return null;
}
}
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____0 = (function (){
var statearr_39363 = [null,null,null,null,null,null,null,null];
(statearr_39363[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__);

(statearr_39363[(1)] = (1));

return statearr_39363;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____1 = (function (state_39357){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_39357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e39364){if((e39364 instanceof Object)){
var ex__25421__auto__ = e39364;
var statearr_39365_39367 = state_39357;
(statearr_39365_39367[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39368 = state_39357;
state_39357 = G__39368;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__ = function(state_39357){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____1.call(this,state_39357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25418__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_39366 = f__25483__auto__.call(null);
(statearr_39366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_39366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39369){
var map__39376 = p__39369;
var map__39376__$1 = ((((!((map__39376 == null)))?((((map__39376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39376):map__39376);
var ed = map__39376__$1;
var formatted_exception = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39378_39382 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39379_39383 = null;
var count__39380_39384 = (0);
var i__39381_39385 = (0);
while(true){
if((i__39381_39385 < count__39380_39384)){
var msg_39386 = cljs.core._nth.call(null,chunk__39379_39383,i__39381_39385);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39386);

var G__39387 = seq__39378_39382;
var G__39388 = chunk__39379_39383;
var G__39389 = count__39380_39384;
var G__39390 = (i__39381_39385 + (1));
seq__39378_39382 = G__39387;
chunk__39379_39383 = G__39388;
count__39380_39384 = G__39389;
i__39381_39385 = G__39390;
continue;
} else {
var temp__4657__auto___39391 = cljs.core.seq.call(null,seq__39378_39382);
if(temp__4657__auto___39391){
var seq__39378_39392__$1 = temp__4657__auto___39391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39378_39392__$1)){
var c__19690__auto___39393 = cljs.core.chunk_first.call(null,seq__39378_39392__$1);
var G__39394 = cljs.core.chunk_rest.call(null,seq__39378_39392__$1);
var G__39395 = c__19690__auto___39393;
var G__39396 = cljs.core.count.call(null,c__19690__auto___39393);
var G__39397 = (0);
seq__39378_39382 = G__39394;
chunk__39379_39383 = G__39395;
count__39380_39384 = G__39396;
i__39381_39385 = G__39397;
continue;
} else {
var msg_39398 = cljs.core.first.call(null,seq__39378_39392__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39398);

var G__39399 = cljs.core.next.call(null,seq__39378_39392__$1);
var G__39400 = null;
var G__39401 = (0);
var G__39402 = (0);
seq__39378_39382 = G__39399;
chunk__39379_39383 = G__39400;
count__39380_39384 = G__39401;
i__39381_39385 = G__39402;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39403){
var map__39406 = p__39403;
var map__39406__$1 = ((((!((map__39406 == null)))?((((map__39406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39406):map__39406);
var w = map__39406__$1;
var message = cljs.core.get.call(null,map__39406__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18864__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18864__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18864__auto__;
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
var seq__39418 = cljs.core.seq.call(null,plugins);
var chunk__39419 = null;
var count__39420 = (0);
var i__39421 = (0);
while(true){
if((i__39421 < count__39420)){
var vec__39422 = cljs.core._nth.call(null,chunk__39419,i__39421);
var k = cljs.core.nth.call(null,vec__39422,(0),null);
var plugin = cljs.core.nth.call(null,vec__39422,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39428 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39418,chunk__39419,count__39420,i__39421,pl_39428,vec__39422,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39428.call(null,msg_hist);
});})(seq__39418,chunk__39419,count__39420,i__39421,pl_39428,vec__39422,k,plugin))
);
} else {
}

var G__39429 = seq__39418;
var G__39430 = chunk__39419;
var G__39431 = count__39420;
var G__39432 = (i__39421 + (1));
seq__39418 = G__39429;
chunk__39419 = G__39430;
count__39420 = G__39431;
i__39421 = G__39432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39418);
if(temp__4657__auto__){
var seq__39418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39418__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__39418__$1);
var G__39433 = cljs.core.chunk_rest.call(null,seq__39418__$1);
var G__39434 = c__19690__auto__;
var G__39435 = cljs.core.count.call(null,c__19690__auto__);
var G__39436 = (0);
seq__39418 = G__39433;
chunk__39419 = G__39434;
count__39420 = G__39435;
i__39421 = G__39436;
continue;
} else {
var vec__39425 = cljs.core.first.call(null,seq__39418__$1);
var k = cljs.core.nth.call(null,vec__39425,(0),null);
var plugin = cljs.core.nth.call(null,vec__39425,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39437 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39418,chunk__39419,count__39420,i__39421,pl_39437,vec__39425,k,plugin,seq__39418__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39437.call(null,msg_hist);
});})(seq__39418,chunk__39419,count__39420,i__39421,pl_39437,vec__39425,k,plugin,seq__39418__$1,temp__4657__auto__))
);
} else {
}

var G__39438 = cljs.core.next.call(null,seq__39418__$1);
var G__39439 = null;
var G__39440 = (0);
var G__39441 = (0);
seq__39418 = G__39438;
chunk__39419 = G__39439;
count__39420 = G__39440;
i__39421 = G__39441;
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
var args39442 = [];
var len__19984__auto___39445 = arguments.length;
var i__19985__auto___39446 = (0);
while(true){
if((i__19985__auto___39446 < len__19984__auto___39445)){
args39442.push((arguments[i__19985__auto___39446]));

var G__39447 = (i__19985__auto___39446 + (1));
i__19985__auto___39446 = G__39447;
continue;
} else {
}
break;
}

var G__39444 = args39442.length;
switch (G__39444) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39442.length)].join('')));

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
var args__19991__auto__ = [];
var len__19984__auto___39453 = arguments.length;
var i__19985__auto___39454 = (0);
while(true){
if((i__19985__auto___39454 < len__19984__auto___39453)){
args__19991__auto__.push((arguments[i__19985__auto___39454]));

var G__39455 = (i__19985__auto___39454 + (1));
i__19985__auto___39454 = G__39455;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39450){
var map__39451 = p__39450;
var map__39451__$1 = ((((!((map__39451 == null)))?((((map__39451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39451):map__39451);
var opts = map__39451__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39449){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39449));
});


//# sourceMappingURL=client.js.map