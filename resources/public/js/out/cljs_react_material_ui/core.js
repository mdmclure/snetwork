// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args26743 = [];
var len__22733__auto___26746 = arguments.length;
var i__22734__auto___26747 = (0);
while(true){
if((i__22734__auto___26747 < len__22733__auto___26746)){
args26743.push((arguments[i__22734__auto___26747]));

var G__26748 = (i__22734__auto___26747 + (1));
i__22734__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var G__26745 = args26743.length;
switch (G__26745) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26743.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args26750 = [];
var len__22733__auto___26753 = arguments.length;
var i__22734__auto___26754 = (0);
while(true){
if((i__22734__auto___26754 < len__22733__auto___26753)){
args26750.push((arguments[i__22734__auto___26754]));

var G__26755 = (i__22734__auto___26754 + (1));
i__22734__auto___26754 = G__26755;
continue;
} else {
}
break;
}

var G__26752 = args26750.length;
switch (G__26752) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26750.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26758 = arguments.length;
var i__22734__auto___26759 = (0);
while(true){
if((i__22734__auto___26759 < len__22733__auto___26758)){
args__22740__auto__.push((arguments[i__22734__auto___26759]));

var G__26760 = (i__22734__auto___26759 + (1));
i__22734__auto___26759 = G__26760;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq26757){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26757));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26762 = arguments.length;
var i__22734__auto___26763 = (0);
while(true){
if((i__22734__auto___26763 < len__22733__auto___26762)){
args__22740__auto__.push((arguments[i__22734__auto___26763]));

var G__26764 = (i__22734__auto___26763 + (1));
i__22734__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq26761){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26761));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26766 = arguments.length;
var i__22734__auto___26767 = (0);
while(true){
if((i__22734__auto___26767 < len__22733__auto___26766)){
args__22740__auto__.push((arguments[i__22734__auto___26767]));

var G__26768 = (i__22734__auto___26767 + (1));
i__22734__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq26765){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26765));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26770 = arguments.length;
var i__22734__auto___26771 = (0);
while(true){
if((i__22734__auto___26771 < len__22733__auto___26770)){
args__22740__auto__.push((arguments[i__22734__auto___26771]));

var G__26772 = (i__22734__auto___26771 + (1));
i__22734__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq26769){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26769));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26774 = arguments.length;
var i__22734__auto___26775 = (0);
while(true){
if((i__22734__auto___26775 < len__22733__auto___26774)){
args__22740__auto__.push((arguments[i__22734__auto___26775]));

var G__26776 = (i__22734__auto___26775 + (1));
i__22734__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq26773){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26773));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26778 = arguments.length;
var i__22734__auto___26779 = (0);
while(true){
if((i__22734__auto___26779 < len__22733__auto___26778)){
args__22740__auto__.push((arguments[i__22734__auto___26779]));

var G__26780 = (i__22734__auto___26779 + (1));
i__22734__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq26777){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26777));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26782 = arguments.length;
var i__22734__auto___26783 = (0);
while(true){
if((i__22734__auto___26783 < len__22733__auto___26782)){
args__22740__auto__.push((arguments[i__22734__auto___26783]));

var G__26784 = (i__22734__auto___26783 + (1));
i__22734__auto___26783 = G__26784;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq26781){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26781));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26786 = arguments.length;
var i__22734__auto___26787 = (0);
while(true){
if((i__22734__auto___26787 < len__22733__auto___26786)){
args__22740__auto__.push((arguments[i__22734__auto___26787]));

var G__26788 = (i__22734__auto___26787 + (1));
i__22734__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq26785){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26785));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26790 = arguments.length;
var i__22734__auto___26791 = (0);
while(true){
if((i__22734__auto___26791 < len__22733__auto___26790)){
args__22740__auto__.push((arguments[i__22734__auto___26791]));

var G__26792 = (i__22734__auto___26791 + (1));
i__22734__auto___26791 = G__26792;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq26789){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26789));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26794 = arguments.length;
var i__22734__auto___26795 = (0);
while(true){
if((i__22734__auto___26795 < len__22733__auto___26794)){
args__22740__auto__.push((arguments[i__22734__auto___26795]));

var G__26796 = (i__22734__auto___26795 + (1));
i__22734__auto___26795 = G__26796;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq26793){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26793));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26798 = arguments.length;
var i__22734__auto___26799 = (0);
while(true){
if((i__22734__auto___26799 < len__22733__auto___26798)){
args__22740__auto__.push((arguments[i__22734__auto___26799]));

var G__26800 = (i__22734__auto___26799 + (1));
i__22734__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq26797){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26797));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26802 = arguments.length;
var i__22734__auto___26803 = (0);
while(true){
if((i__22734__auto___26803 < len__22733__auto___26802)){
args__22740__auto__.push((arguments[i__22734__auto___26803]));

var G__26804 = (i__22734__auto___26803 + (1));
i__22734__auto___26803 = G__26804;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq26801){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26801));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26806 = arguments.length;
var i__22734__auto___26807 = (0);
while(true){
if((i__22734__auto___26807 < len__22733__auto___26806)){
args__22740__auto__.push((arguments[i__22734__auto___26807]));

var G__26808 = (i__22734__auto___26807 + (1));
i__22734__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq26805){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26805));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26810 = arguments.length;
var i__22734__auto___26811 = (0);
while(true){
if((i__22734__auto___26811 < len__22733__auto___26810)){
args__22740__auto__.push((arguments[i__22734__auto___26811]));

var G__26812 = (i__22734__auto___26811 + (1));
i__22734__auto___26811 = G__26812;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq26809){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26809));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26814 = arguments.length;
var i__22734__auto___26815 = (0);
while(true){
if((i__22734__auto___26815 < len__22733__auto___26814)){
args__22740__auto__.push((arguments[i__22734__auto___26815]));

var G__26816 = (i__22734__auto___26815 + (1));
i__22734__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq26813){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26813));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26818 = arguments.length;
var i__22734__auto___26819 = (0);
while(true){
if((i__22734__auto___26819 < len__22733__auto___26818)){
args__22740__auto__.push((arguments[i__22734__auto___26819]));

var G__26820 = (i__22734__auto___26819 + (1));
i__22734__auto___26819 = G__26820;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq26817){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26817));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26822 = arguments.length;
var i__22734__auto___26823 = (0);
while(true){
if((i__22734__auto___26823 < len__22733__auto___26822)){
args__22740__auto__.push((arguments[i__22734__auto___26823]));

var G__26824 = (i__22734__auto___26823 + (1));
i__22734__auto___26823 = G__26824;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq26821){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26821));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26826 = arguments.length;
var i__22734__auto___26827 = (0);
while(true){
if((i__22734__auto___26827 < len__22733__auto___26826)){
args__22740__auto__.push((arguments[i__22734__auto___26827]));

var G__26828 = (i__22734__auto___26827 + (1));
i__22734__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq26825){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26825));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26830 = arguments.length;
var i__22734__auto___26831 = (0);
while(true){
if((i__22734__auto___26831 < len__22733__auto___26830)){
args__22740__auto__.push((arguments[i__22734__auto___26831]));

var G__26832 = (i__22734__auto___26831 + (1));
i__22734__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq26829){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26829));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26834 = arguments.length;
var i__22734__auto___26835 = (0);
while(true){
if((i__22734__auto___26835 < len__22733__auto___26834)){
args__22740__auto__.push((arguments[i__22734__auto___26835]));

var G__26836 = (i__22734__auto___26835 + (1));
i__22734__auto___26835 = G__26836;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq26833){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26833));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26838 = arguments.length;
var i__22734__auto___26839 = (0);
while(true){
if((i__22734__auto___26839 < len__22733__auto___26838)){
args__22740__auto__.push((arguments[i__22734__auto___26839]));

var G__26840 = (i__22734__auto___26839 + (1));
i__22734__auto___26839 = G__26840;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq26837){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26837));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26842 = arguments.length;
var i__22734__auto___26843 = (0);
while(true){
if((i__22734__auto___26843 < len__22733__auto___26842)){
args__22740__auto__.push((arguments[i__22734__auto___26843]));

var G__26844 = (i__22734__auto___26843 + (1));
i__22734__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq26841){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26841));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26846 = arguments.length;
var i__22734__auto___26847 = (0);
while(true){
if((i__22734__auto___26847 < len__22733__auto___26846)){
args__22740__auto__.push((arguments[i__22734__auto___26847]));

var G__26848 = (i__22734__auto___26847 + (1));
i__22734__auto___26847 = G__26848;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq26845){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26845));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26850 = arguments.length;
var i__22734__auto___26851 = (0);
while(true){
if((i__22734__auto___26851 < len__22733__auto___26850)){
args__22740__auto__.push((arguments[i__22734__auto___26851]));

var G__26852 = (i__22734__auto___26851 + (1));
i__22734__auto___26851 = G__26852;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq26849){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26849));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26854 = arguments.length;
var i__22734__auto___26855 = (0);
while(true){
if((i__22734__auto___26855 < len__22733__auto___26854)){
args__22740__auto__.push((arguments[i__22734__auto___26855]));

var G__26856 = (i__22734__auto___26855 + (1));
i__22734__auto___26855 = G__26856;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq26853){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26853));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26858 = arguments.length;
var i__22734__auto___26859 = (0);
while(true){
if((i__22734__auto___26859 < len__22733__auto___26858)){
args__22740__auto__.push((arguments[i__22734__auto___26859]));

var G__26860 = (i__22734__auto___26859 + (1));
i__22734__auto___26859 = G__26860;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq26857){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26857));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26862 = arguments.length;
var i__22734__auto___26863 = (0);
while(true){
if((i__22734__auto___26863 < len__22733__auto___26862)){
args__22740__auto__.push((arguments[i__22734__auto___26863]));

var G__26864 = (i__22734__auto___26863 + (1));
i__22734__auto___26863 = G__26864;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq26861){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26861));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26866 = arguments.length;
var i__22734__auto___26867 = (0);
while(true){
if((i__22734__auto___26867 < len__22733__auto___26866)){
args__22740__auto__.push((arguments[i__22734__auto___26867]));

var G__26868 = (i__22734__auto___26867 + (1));
i__22734__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq26865){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26865));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26870 = arguments.length;
var i__22734__auto___26871 = (0);
while(true){
if((i__22734__auto___26871 < len__22733__auto___26870)){
args__22740__auto__.push((arguments[i__22734__auto___26871]));

var G__26872 = (i__22734__auto___26871 + (1));
i__22734__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq26869){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26869));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26874 = arguments.length;
var i__22734__auto___26875 = (0);
while(true){
if((i__22734__auto___26875 < len__22733__auto___26874)){
args__22740__auto__.push((arguments[i__22734__auto___26875]));

var G__26876 = (i__22734__auto___26875 + (1));
i__22734__auto___26875 = G__26876;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq26873){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26873));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26878 = arguments.length;
var i__22734__auto___26879 = (0);
while(true){
if((i__22734__auto___26879 < len__22733__auto___26878)){
args__22740__auto__.push((arguments[i__22734__auto___26879]));

var G__26880 = (i__22734__auto___26879 + (1));
i__22734__auto___26879 = G__26880;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq26877){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26877));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26882 = arguments.length;
var i__22734__auto___26883 = (0);
while(true){
if((i__22734__auto___26883 < len__22733__auto___26882)){
args__22740__auto__.push((arguments[i__22734__auto___26883]));

var G__26884 = (i__22734__auto___26883 + (1));
i__22734__auto___26883 = G__26884;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq26881){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26881));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26886 = arguments.length;
var i__22734__auto___26887 = (0);
while(true){
if((i__22734__auto___26887 < len__22733__auto___26886)){
args__22740__auto__.push((arguments[i__22734__auto___26887]));

var G__26888 = (i__22734__auto___26887 + (1));
i__22734__auto___26887 = G__26888;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq26885){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26885));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26890 = arguments.length;
var i__22734__auto___26891 = (0);
while(true){
if((i__22734__auto___26891 < len__22733__auto___26890)){
args__22740__auto__.push((arguments[i__22734__auto___26891]));

var G__26892 = (i__22734__auto___26891 + (1));
i__22734__auto___26891 = G__26892;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq26889){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26889));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26894 = arguments.length;
var i__22734__auto___26895 = (0);
while(true){
if((i__22734__auto___26895 < len__22733__auto___26894)){
args__22740__auto__.push((arguments[i__22734__auto___26895]));

var G__26896 = (i__22734__auto___26895 + (1));
i__22734__auto___26895 = G__26896;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq26893){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26893));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26898 = arguments.length;
var i__22734__auto___26899 = (0);
while(true){
if((i__22734__auto___26899 < len__22733__auto___26898)){
args__22740__auto__.push((arguments[i__22734__auto___26899]));

var G__26900 = (i__22734__auto___26899 + (1));
i__22734__auto___26899 = G__26900;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq26897){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26897));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26902 = arguments.length;
var i__22734__auto___26903 = (0);
while(true){
if((i__22734__auto___26903 < len__22733__auto___26902)){
args__22740__auto__.push((arguments[i__22734__auto___26903]));

var G__26904 = (i__22734__auto___26903 + (1));
i__22734__auto___26903 = G__26904;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq26901){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26901));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26906 = arguments.length;
var i__22734__auto___26907 = (0);
while(true){
if((i__22734__auto___26907 < len__22733__auto___26906)){
args__22740__auto__.push((arguments[i__22734__auto___26907]));

var G__26908 = (i__22734__auto___26907 + (1));
i__22734__auto___26907 = G__26908;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq26905){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26905));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26910 = arguments.length;
var i__22734__auto___26911 = (0);
while(true){
if((i__22734__auto___26911 < len__22733__auto___26910)){
args__22740__auto__.push((arguments[i__22734__auto___26911]));

var G__26912 = (i__22734__auto___26911 + (1));
i__22734__auto___26911 = G__26912;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq26909){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26909));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26914 = arguments.length;
var i__22734__auto___26915 = (0);
while(true){
if((i__22734__auto___26915 < len__22733__auto___26914)){
args__22740__auto__.push((arguments[i__22734__auto___26915]));

var G__26916 = (i__22734__auto___26915 + (1));
i__22734__auto___26915 = G__26916;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq26913){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26913));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26918 = arguments.length;
var i__22734__auto___26919 = (0);
while(true){
if((i__22734__auto___26919 < len__22733__auto___26918)){
args__22740__auto__.push((arguments[i__22734__auto___26919]));

var G__26920 = (i__22734__auto___26919 + (1));
i__22734__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq26917){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26917));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26922 = arguments.length;
var i__22734__auto___26923 = (0);
while(true){
if((i__22734__auto___26923 < len__22733__auto___26922)){
args__22740__auto__.push((arguments[i__22734__auto___26923]));

var G__26924 = (i__22734__auto___26923 + (1));
i__22734__auto___26923 = G__26924;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq26921){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26921));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26926 = arguments.length;
var i__22734__auto___26927 = (0);
while(true){
if((i__22734__auto___26927 < len__22733__auto___26926)){
args__22740__auto__.push((arguments[i__22734__auto___26927]));

var G__26928 = (i__22734__auto___26927 + (1));
i__22734__auto___26927 = G__26928;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq26925){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26925));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26930 = arguments.length;
var i__22734__auto___26931 = (0);
while(true){
if((i__22734__auto___26931 < len__22733__auto___26930)){
args__22740__auto__.push((arguments[i__22734__auto___26931]));

var G__26932 = (i__22734__auto___26931 + (1));
i__22734__auto___26931 = G__26932;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq26929){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26929));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26934 = arguments.length;
var i__22734__auto___26935 = (0);
while(true){
if((i__22734__auto___26935 < len__22733__auto___26934)){
args__22740__auto__.push((arguments[i__22734__auto___26935]));

var G__26936 = (i__22734__auto___26935 + (1));
i__22734__auto___26935 = G__26936;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq26933){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26933));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26938 = arguments.length;
var i__22734__auto___26939 = (0);
while(true){
if((i__22734__auto___26939 < len__22733__auto___26938)){
args__22740__auto__.push((arguments[i__22734__auto___26939]));

var G__26940 = (i__22734__auto___26939 + (1));
i__22734__auto___26939 = G__26940;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq26937){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26937));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26942 = arguments.length;
var i__22734__auto___26943 = (0);
while(true){
if((i__22734__auto___26943 < len__22733__auto___26942)){
args__22740__auto__.push((arguments[i__22734__auto___26943]));

var G__26944 = (i__22734__auto___26943 + (1));
i__22734__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq26941){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26941));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26946 = arguments.length;
var i__22734__auto___26947 = (0);
while(true){
if((i__22734__auto___26947 < len__22733__auto___26946)){
args__22740__auto__.push((arguments[i__22734__auto___26947]));

var G__26948 = (i__22734__auto___26947 + (1));
i__22734__auto___26947 = G__26948;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq26945){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26945));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26950 = arguments.length;
var i__22734__auto___26951 = (0);
while(true){
if((i__22734__auto___26951 < len__22733__auto___26950)){
args__22740__auto__.push((arguments[i__22734__auto___26951]));

var G__26952 = (i__22734__auto___26951 + (1));
i__22734__auto___26951 = G__26952;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq26949){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26949));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26954 = arguments.length;
var i__22734__auto___26955 = (0);
while(true){
if((i__22734__auto___26955 < len__22733__auto___26954)){
args__22740__auto__.push((arguments[i__22734__auto___26955]));

var G__26956 = (i__22734__auto___26955 + (1));
i__22734__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq26953){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26953));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26958 = arguments.length;
var i__22734__auto___26959 = (0);
while(true){
if((i__22734__auto___26959 < len__22733__auto___26958)){
args__22740__auto__.push((arguments[i__22734__auto___26959]));

var G__26960 = (i__22734__auto___26959 + (1));
i__22734__auto___26959 = G__26960;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq26957){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26957));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26962 = arguments.length;
var i__22734__auto___26963 = (0);
while(true){
if((i__22734__auto___26963 < len__22733__auto___26962)){
args__22740__auto__.push((arguments[i__22734__auto___26963]));

var G__26964 = (i__22734__auto___26963 + (1));
i__22734__auto___26963 = G__26964;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq26961){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26961));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26966 = arguments.length;
var i__22734__auto___26967 = (0);
while(true){
if((i__22734__auto___26967 < len__22733__auto___26966)){
args__22740__auto__.push((arguments[i__22734__auto___26967]));

var G__26968 = (i__22734__auto___26967 + (1));
i__22734__auto___26967 = G__26968;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq26965){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26965));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26970 = arguments.length;
var i__22734__auto___26971 = (0);
while(true){
if((i__22734__auto___26971 < len__22733__auto___26970)){
args__22740__auto__.push((arguments[i__22734__auto___26971]));

var G__26972 = (i__22734__auto___26971 + (1));
i__22734__auto___26971 = G__26972;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq26969){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26969));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26974 = arguments.length;
var i__22734__auto___26975 = (0);
while(true){
if((i__22734__auto___26975 < len__22733__auto___26974)){
args__22740__auto__.push((arguments[i__22734__auto___26975]));

var G__26976 = (i__22734__auto___26975 + (1));
i__22734__auto___26975 = G__26976;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq26973){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26973));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26978 = arguments.length;
var i__22734__auto___26979 = (0);
while(true){
if((i__22734__auto___26979 < len__22733__auto___26978)){
args__22740__auto__.push((arguments[i__22734__auto___26979]));

var G__26980 = (i__22734__auto___26979 + (1));
i__22734__auto___26979 = G__26980;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq26977){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26977));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26982 = arguments.length;
var i__22734__auto___26983 = (0);
while(true){
if((i__22734__auto___26983 < len__22733__auto___26982)){
args__22740__auto__.push((arguments[i__22734__auto___26983]));

var G__26984 = (i__22734__auto___26983 + (1));
i__22734__auto___26983 = G__26984;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq26981){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26981));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26986 = arguments.length;
var i__22734__auto___26987 = (0);
while(true){
if((i__22734__auto___26987 < len__22733__auto___26986)){
args__22740__auto__.push((arguments[i__22734__auto___26987]));

var G__26988 = (i__22734__auto___26987 + (1));
i__22734__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq26985){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26985));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26990 = arguments.length;
var i__22734__auto___26991 = (0);
while(true){
if((i__22734__auto___26991 < len__22733__auto___26990)){
args__22740__auto__.push((arguments[i__22734__auto___26991]));

var G__26992 = (i__22734__auto___26991 + (1));
i__22734__auto___26991 = G__26992;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq26989){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26989));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26994 = arguments.length;
var i__22734__auto___26995 = (0);
while(true){
if((i__22734__auto___26995 < len__22733__auto___26994)){
args__22740__auto__.push((arguments[i__22734__auto___26995]));

var G__26996 = (i__22734__auto___26995 + (1));
i__22734__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq26993){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26993));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26998 = arguments.length;
var i__22734__auto___26999 = (0);
while(true){
if((i__22734__auto___26999 < len__22733__auto___26998)){
args__22740__auto__.push((arguments[i__22734__auto___26999]));

var G__27000 = (i__22734__auto___26999 + (1));
i__22734__auto___26999 = G__27000;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq26997){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26997));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27002 = arguments.length;
var i__22734__auto___27003 = (0);
while(true){
if((i__22734__auto___27003 < len__22733__auto___27002)){
args__22740__auto__.push((arguments[i__22734__auto___27003]));

var G__27004 = (i__22734__auto___27003 + (1));
i__22734__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq27001){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27001));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27006 = arguments.length;
var i__22734__auto___27007 = (0);
while(true){
if((i__22734__auto___27007 < len__22733__auto___27006)){
args__22740__auto__.push((arguments[i__22734__auto___27007]));

var G__27008 = (i__22734__auto___27007 + (1));
i__22734__auto___27007 = G__27008;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq27005){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27005));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27010 = arguments.length;
var i__22734__auto___27011 = (0);
while(true){
if((i__22734__auto___27011 < len__22733__auto___27010)){
args__22740__auto__.push((arguments[i__22734__auto___27011]));

var G__27012 = (i__22734__auto___27011 + (1));
i__22734__auto___27011 = G__27012;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq27009){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27009));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27014 = arguments.length;
var i__22734__auto___27015 = (0);
while(true){
if((i__22734__auto___27015 < len__22733__auto___27014)){
args__22740__auto__.push((arguments[i__22734__auto___27015]));

var G__27016 = (i__22734__auto___27015 + (1));
i__22734__auto___27015 = G__27016;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq27013){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27013));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27018 = arguments.length;
var i__22734__auto___27019 = (0);
while(true){
if((i__22734__auto___27019 < len__22733__auto___27018)){
args__22740__auto__.push((arguments[i__22734__auto___27019]));

var G__27020 = (i__22734__auto___27019 + (1));
i__22734__auto___27019 = G__27020;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq27017){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27017));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27022 = arguments.length;
var i__22734__auto___27023 = (0);
while(true){
if((i__22734__auto___27023 < len__22733__auto___27022)){
args__22740__auto__.push((arguments[i__22734__auto___27023]));

var G__27024 = (i__22734__auto___27023 + (1));
i__22734__auto___27023 = G__27024;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq27021){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27021));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27026 = arguments.length;
var i__22734__auto___27027 = (0);
while(true){
if((i__22734__auto___27027 < len__22733__auto___27026)){
args__22740__auto__.push((arguments[i__22734__auto___27027]));

var G__27028 = (i__22734__auto___27027 + (1));
i__22734__auto___27027 = G__27028;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq27025){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27025));
});


//# sourceMappingURL=core.js.map?rel=1490992942394