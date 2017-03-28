// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gravity.tools');
/**
 * Return a simple chan
 *   - avoiding a :require into core
 *   - centralizing the creation
 */
gravity.events.create_chan = (function gravity$events$create_chan(){
return cljs.core.async.chan.call(null,(512));
});
/**
 * Create an atom and two closures ':on' and ':get-callbacks'.
 *   - Use :on to store a callback
 *   - Use :get-callbacks to retrive a deref of the callbacks atom map.
 *   Warning : the keys are transformed to keywords.
 */
gravity.events.create_store = (function gravity$events$create_store(){
var callbacks_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on","on",173873944),((function (callbacks_map){
return (function (cb_key,callback){
return cljs.core.swap_BANG_.call(null,callbacks_map,cljs.core.assoc,cljs.core.keyword.call(null,cb_key),callback);
});})(callbacks_map))
,new cljs.core.Keyword(null,"off","off",606440789),((function (callbacks_map){
return (function() {
var G__48329 = null;
var G__48329__0 = (function (){
return cljs.core.reset_BANG_.call(null,callbacks_map,cljs.core.PersistentArrayMap.EMPTY);
});
var G__48329__1 = (function (cb_key){
return cljs.core.swap_BANG_.call(null,callbacks_map,cljs.core.assoc,cljs.core.keyword.call(null,cb_key),null);
});
G__48329 = function(cb_key){
switch(arguments.length){
case 0:
return G__48329__0.call(this);
case 1:
return G__48329__1.call(this,cb_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48329.cljs$core$IFn$_invoke$arity$0 = G__48329__0;
G__48329.cljs$core$IFn$_invoke$arity$1 = G__48329__1;
return G__48329;
})()
;})(callbacks_map))
,new cljs.core.Keyword(null,"get-callbacks","get-callbacks",2086013225),((function (callbacks_map){
return (function (){
return cljs.core.deref.call(null,callbacks_map);
});})(callbacks_map))
], null);
});
/**
 * Extract and execute the :get-callbacks closure from the store
 */
gravity.events.get_callbacks = (function gravity$events$get_callbacks(store){
var deref_callbacks = new cljs.core.Keyword(null,"get-callbacks","get-callbacks",2086013225).cljs$core$IFn$_invoke$arity$1(store);
return deref_callbacks.call(null);
});
gravity.events.call = (function gravity$events$call(var_args){
var args__22740__auto__ = [];
var len__22733__auto___48332 = arguments.length;
var i__22734__auto___48333 = (0);
while(true){
if((i__22734__auto___48333 < len__22733__auto___48332)){
args__22740__auto__.push((arguments[i__22734__auto___48333]));

var G__48334 = (i__22734__auto___48333 + (1));
i__22734__auto___48333 = G__48334;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return gravity.events.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

gravity.events.call.cljs$core$IFn$_invoke$arity$variadic = (function (callback,args){
if((callback == null)){
return null;
} else {
return cljs.core.apply.call(null,callback,args);
}
});

gravity.events.call.cljs$lang$maxFixedArity = (1);

gravity.events.call.cljs$lang$applyTo = (function (seq48330){
var G__48331 = cljs.core.first.call(null,seq48330);
var seq48330__$1 = cljs.core.next.call(null,seq48330);
return gravity.events.call.cljs$core$IFn$_invoke$arity$variadic(G__48331,seq48330__$1);
});

/**
 * Trigger an event taking no arguments
 */
gravity.events.trigger = (function gravity$events$trigger(var_args){
var args48335 = [];
var len__22733__auto___48338 = arguments.length;
var i__22734__auto___48339 = (0);
while(true){
if((i__22734__auto___48339 < len__22733__auto___48338)){
args48335.push((arguments[i__22734__auto___48339]));

var G__48340 = (i__22734__auto___48339 + (1));
i__22734__auto___48339 = G__48340;
continue;
} else {
}
break;
}

var G__48337 = args48335.length;
switch (G__48337) {
case 2:
return gravity.events.trigger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gravity.events.trigger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gravity.events.trigger.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48335.length)].join('')));

}
});

gravity.events.trigger.cljs$core$IFn$_invoke$arity$2 = (function (callback_key,store){
return gravity.events.trigger.call(null,callback_key,store,null,null);
});

gravity.events.trigger.cljs$core$IFn$_invoke$arity$3 = (function (callback_key,store,object_to_pass){
return gravity.events.trigger.call(null,callback_key,store,object_to_pass,null);
});

gravity.events.trigger.cljs$core$IFn$_invoke$arity$4 = (function (callback_key,store,object_to_pass,original_event){
var store__$1 = gravity.events.get_callbacks.call(null,store);
var callback = callback_key.call(null,store__$1);
return gravity.events.call.call(null,callback,object_to_pass,original_event);
});

gravity.events.trigger.cljs$lang$maxFixedArity = 4;

/**
 * Listen to an output chan and trigger the appropriate callbacks if found in the events-store.
 */
gravity.events.listen_outgoing_events = (function gravity$events$listen_outgoing_events(chan_out,store){
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null));
var c__23746__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23746__auto__,state){
return (function (){
var f__23747__auto__ = (function (){var switch__23681__auto__ = ((function (c__23746__auto__,state){
return (function (state_48465){
var state_val_48466 = (state_48465[(1)]);
if((state_val_48466 === (7))){
var inst_48428 = (state_48465[(2)]);
var inst_48429 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(inst_48428);
var inst_48430 = new cljs.core.Keyword(null,"original-event","original-event",2121330403).cljs$core$IFn$_invoke$arity$1(inst_48428);
var inst_48455 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_48428);
var state_48465__$1 = (function (){var statearr_48467 = state_48465;
(statearr_48467[(7)] = inst_48430);

(statearr_48467[(8)] = inst_48429);

return statearr_48467;
})();
var G__48468_48508 = (((inst_48455 instanceof cljs.core.Keyword))?inst_48455.fqn:null);
switch (G__48468_48508) {
case "node-click":
var statearr_48469_48510 = state_48465__$1;
(statearr_48469_48510[(1)] = (14));


break;
case "ready":
var statearr_48470_48511 = state_48465__$1;
(statearr_48470_48511[(1)] = (9));


break;
case "drag-end":
var statearr_48471_48512 = state_48465__$1;
(statearr_48471_48512[(1)] = (18));


break;
case "void-click":
var statearr_48472_48513 = state_48465__$1;
(statearr_48472_48513[(1)] = (16));


break;
case "stable":
var statearr_48473_48514 = state_48465__$1;
(statearr_48473_48514[(1)] = (10));


break;
case "node-dbl-click":
var statearr_48474_48515 = state_48465__$1;
(statearr_48474_48515[(1)] = (15));


break;
case "node-select":
var statearr_48475_48516 = state_48465__$1;
(statearr_48475_48516[(1)] = (13));


break;
case "node-blur":
var statearr_48476_48517 = state_48465__$1;
(statearr_48476_48517[(1)] = (12));


break;
case "drag-start":
var statearr_48477_48518 = state_48465__$1;
(statearr_48477_48518[(1)] = (17));


break;
case "node-over":
var statearr_48478_48519 = state_48465__$1;
(statearr_48478_48519[(1)] = (11));


break;
default:
var statearr_48479_48520 = state_48465__$1;
(statearr_48479_48520[(1)] = (19));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (1))){
var state_48465__$1 = state_48465;
var statearr_48480_48521 = state_48465__$1;
(statearr_48480_48521[(2)] = null);

(statearr_48480_48521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (4))){
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48465__$1,(7),chan_out);
} else {
if((state_val_48466 === (15))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48446 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"node-dbl-click","node-dbl-click",-1070495764),store,inst_48429,inst_48430);
var state_48465__$1 = state_48465;
var statearr_48481_48522 = state_48465__$1;
(statearr_48481_48522[(2)] = inst_48446);

(statearr_48481_48522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (13))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48441 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),inst_48429);
var inst_48442 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"node-select","node-select",-1853167377),store,inst_48429,inst_48430);
var state_48465__$1 = (function (){var statearr_48482 = state_48465;
(statearr_48482[(9)] = inst_48441);

return statearr_48482;
})();
var statearr_48483_48523 = state_48465__$1;
(statearr_48483_48523[(2)] = inst_48442);

(statearr_48483_48523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (6))){
var inst_48461 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48484_48524 = state_48465__$1;
(statearr_48484_48524[(2)] = inst_48461);

(statearr_48484_48524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (17))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48450 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),store,inst_48429,inst_48430);
var state_48465__$1 = state_48465;
var statearr_48485_48525 = state_48465__$1;
(statearr_48485_48525[(2)] = inst_48450);

(statearr_48485_48525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (3))){
var inst_48463 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48465__$1,inst_48463);
} else {
if((state_val_48466 === (12))){
var inst_48430 = (state_48465[(7)]);
var inst_48438 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),null);
var inst_48439 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"node-blur","node-blur",107426287),store,inst_48430);
var state_48465__$1 = (function (){var statearr_48486 = state_48465;
(statearr_48486[(10)] = inst_48438);

return statearr_48486;
})();
var statearr_48487_48526 = state_48465__$1;
(statearr_48487_48526[(2)] = inst_48439);

(statearr_48487_48526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (2))){
var state_48465__$1 = state_48465;
var statearr_48488_48527 = state_48465__$1;
(statearr_48488_48527[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (19))){
var state_48465__$1 = state_48465;
var statearr_48490_48528 = state_48465__$1;
(statearr_48490_48528[(2)] = null);

(statearr_48490_48528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (11))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48435 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),inst_48429);
var inst_48436 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"node-over","node-over",-1709950593),store,inst_48429,inst_48430);
var state_48465__$1 = (function (){var statearr_48491 = state_48465;
(statearr_48491[(11)] = inst_48435);

return statearr_48491;
})();
var statearr_48492_48529 = state_48465__$1;
(statearr_48492_48529[(2)] = inst_48436);

(statearr_48492_48529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (9))){
var inst_48431 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),store);
var state_48465__$1 = state_48465;
var statearr_48493_48530 = state_48465__$1;
(statearr_48493_48530[(2)] = inst_48431);

(statearr_48493_48530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (5))){
var state_48465__$1 = state_48465;
var statearr_48494_48531 = state_48465__$1;
(statearr_48494_48531[(2)] = null);

(statearr_48494_48531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (14))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48444 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"node-click","node-click",-737057440),store,inst_48429,inst_48430);
var state_48465__$1 = state_48465;
var statearr_48495_48532 = state_48465__$1;
(statearr_48495_48532[(2)] = inst_48444);

(statearr_48495_48532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (16))){
var inst_48430 = (state_48465[(7)]);
var inst_48448 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"void-click","void-click",-172459765),store,inst_48430);
var state_48465__$1 = state_48465;
var statearr_48496_48533 = state_48465__$1;
(statearr_48496_48533[(2)] = inst_48448);

(statearr_48496_48533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (10))){
var inst_48429 = (state_48465[(8)]);
var inst_48433 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"stable","stable",-508724660),store,inst_48429);
var state_48465__$1 = state_48465;
var statearr_48497_48534 = state_48465__$1;
(statearr_48497_48534[(2)] = inst_48433);

(statearr_48497_48534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (18))){
var inst_48430 = (state_48465[(7)]);
var inst_48429 = (state_48465[(8)]);
var inst_48452 = gravity.events.trigger.call(null,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),store,inst_48429,inst_48430);
var state_48465__$1 = state_48465;
var statearr_48498_48535 = state_48465__$1;
(statearr_48498_48535[(2)] = inst_48452);

(statearr_48498_48535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (8))){
var inst_48457 = (state_48465[(2)]);
var state_48465__$1 = (function (){var statearr_48499 = state_48465;
(statearr_48499[(12)] = inst_48457);

return statearr_48499;
})();
var statearr_48500_48536 = state_48465__$1;
(statearr_48500_48536[(2)] = null);

(statearr_48500_48536[(1)] = (2));


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
}
}
});})(c__23746__auto__,state))
;
return ((function (switch__23681__auto__,c__23746__auto__,state){
return (function() {
var gravity$events$listen_outgoing_events_$_state_machine__23682__auto__ = null;
var gravity$events$listen_outgoing_events_$_state_machine__23682__auto____0 = (function (){
var statearr_48504 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48504[(0)] = gravity$events$listen_outgoing_events_$_state_machine__23682__auto__);

(statearr_48504[(1)] = (1));

return statearr_48504;
});
var gravity$events$listen_outgoing_events_$_state_machine__23682__auto____1 = (function (state_48465){
while(true){
var ret_value__23683__auto__ = (function (){try{while(true){
var result__23684__auto__ = switch__23681__auto__.call(null,state_48465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23684__auto__;
}
break;
}
}catch (e48505){if((e48505 instanceof Object)){
var ex__23685__auto__ = e48505;
var statearr_48506_48537 = state_48465;
(statearr_48506_48537[(5)] = ex__23685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48538 = state_48465;
state_48465 = G__48538;
continue;
} else {
return ret_value__23683__auto__;
}
break;
}
});
gravity$events$listen_outgoing_events_$_state_machine__23682__auto__ = function(state_48465){
switch(arguments.length){
case 0:
return gravity$events$listen_outgoing_events_$_state_machine__23682__auto____0.call(this);
case 1:
return gravity$events$listen_outgoing_events_$_state_machine__23682__auto____1.call(this,state_48465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gravity$events$listen_outgoing_events_$_state_machine__23682__auto__.cljs$core$IFn$_invoke$arity$0 = gravity$events$listen_outgoing_events_$_state_machine__23682__auto____0;
gravity$events$listen_outgoing_events_$_state_machine__23682__auto__.cljs$core$IFn$_invoke$arity$1 = gravity$events$listen_outgoing_events_$_state_machine__23682__auto____1;
return gravity$events$listen_outgoing_events_$_state_machine__23682__auto__;
})()
;})(switch__23681__auto__,c__23746__auto__,state))
})();
var state__23748__auto__ = (function (){var statearr_48507 = f__23747__auto__.call(null);
(statearr_48507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23746__auto__);

return statearr_48507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23748__auto__);
});})(c__23746__auto__,state))
);

return c__23746__auto__;
});

//# sourceMappingURL=events.js.map?rel=1490585330237