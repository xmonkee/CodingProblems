// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__9094_SHARP_){return (p1__9094_SHARP_ instanceof Node);
}):(function (p1__9095_SHARP_){try{return p1__9095_SHARP_.nodeType;
}catch (e9096){if((e9096 instanceof Error))
{var _ = e9096;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9096;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9097_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__9097_SHARP_);
}catch (e9098){if((e9098 instanceof Error))
{var _ = e9098;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9098;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9099_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__9099_SHARP_);
}catch (e9100){if((e9100 instanceof Error))
{var _ = e9100;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9100;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__9101_SHARP_){if(cljs.core.truth_((function (){var and__5835__auto__ = console;if(cljs.core.truth_(and__5835__auto__))
{return console.log;
} else
{return and__5835__auto__;
}
})()))
{return console.log(p1__9101_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e9103){if((e9103 instanceof Error))
{var _ = e9103;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9103;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.pad_seq = (function() { 
var pad_seq__delegate = function (n,coll,p__9104){var vec__9106 = p__9104;var x = cljs.core.nth.call(null,vec__9106,0,null);var p = cljs.core.repeat.call(null,n,x);var z = (n - cljs.core.count.call(null,coll));if((z > 0))
{return cljs.core.concat.call(null,coll,cljs.core.take.call(null,z,p));
} else
{return coll;
}
};
var pad_seq = function (n,coll,var_args){
var p__9104 = null;if (arguments.length > 2) {
  p__9104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pad_seq__delegate.call(this,n,coll,p__9104);};
pad_seq.cljs$lang$maxFixedArity = 2;
pad_seq.cljs$lang$applyTo = (function (arglist__9107){
var n = cljs.core.first(arglist__9107);
arglist__9107 = cljs.core.next(arglist__9107);
var coll = cljs.core.first(arglist__9107);
var p__9104 = cljs.core.rest(arglist__9107);
return pad_seq__delegate(n,coll,p__9104);
});
pad_seq.cljs$core$IFn$_invoke$arity$variadic = pad_seq__delegate;
return pad_seq;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.call(null,f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__9108_SHARP_){if(cljs.core.truth_((function (){var or__5847__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__9108_SHARP_);if(cljs.core.truth_(or__5847__auto__))
{return or__5847__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__9108_SHARP_);
}
})()))
{return unsplice.call(null,p1__9108_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9108_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
});
tailrecursion.hoplon.parse_args = (function parse_args(p__9111){var vec__9113 = p__9111;var head = cljs.core.nth.call(null,vec__9113,0,null);var tail = cljs.core.nthnext.call(null,vec__9113,1);var args = vec__9113;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_){
return (function (p1__9109_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__9109_SHARP_)));
});})(kw1_QMARK_))
;var drkw = ((function (kw1_QMARK_,mkkw){
return (function (p1__9110_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__9110_SHARP_)));
});})(kw1_QMARK_,mkkw))
;if(cljs.core.map_QMARK_.call(null,head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tail], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),drkw.call(null,args)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var prefix = (function (p1__9114_SHARP_){return p1__9114_SHARP_.substr(0,3);
});var suffix = ((function (prefix){
return (function (p1__9115_SHARP_){return cljs.core.keyword.call(null,p1__9115_SHARP_.substr(3));
});})(prefix))
;var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (prefix,suffix,dos,ons){
return (function (p1__9116_SHARP_,p2__9117_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__9116_SHARP_,/ /)),clojure.string.split.call(null,p2__9117_SHARP_,/ /)));
});})(prefix,suffix,dos,ons))
;var seq__9148_9174 = cljs.core.seq.call(null,attr);var chunk__9149_9175 = null;var count__9150_9176 = 0;var i__9151_9177 = 0;while(true){
if((i__9151_9177 < count__9150_9176))
{var vec__9152_9178 = cljs.core._nth.call(null,chunk__9149_9175,i__9151_9177);var k_9179 = cljs.core.nth.call(null,vec__9152_9178,0,null);var v_9180 = cljs.core.nth.call(null,vec__9152_9178,1,null);var k_9181__$1 = cljs.core.name.call(null,k_9179);var e_9182 = jQuery(this$);if(cljs.core._EQ_.call(null,k_9181__$1,"class"))
{var seq__9153_9183 = cljs.core.seq.call(null,clojure.string.split.call(null,v_9180,/ /));var chunk__9154_9184 = null;var count__9155_9185 = 0;var i__9156_9186 = 0;while(true){
if((i__9156_9186 < count__9155_9185))
{var cls_9187 = cljs.core._nth.call(null,chunk__9154_9184,i__9156_9186);e_9182.addClass(cls_9187);
{
var G__9188 = seq__9153_9183;
var G__9189 = chunk__9154_9184;
var G__9190 = count__9155_9185;
var G__9191 = (i__9156_9186 + 1);
seq__9153_9183 = G__9188;
chunk__9154_9184 = G__9189;
count__9155_9185 = G__9190;
i__9156_9186 = G__9191;
continue;
}
} else
{var temp__4092__auto___9192 = cljs.core.seq.call(null,seq__9153_9183);if(temp__4092__auto___9192)
{var seq__9153_9193__$1 = temp__4092__auto___9192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9153_9193__$1))
{var c__6595__auto___9194 = cljs.core.chunk_first.call(null,seq__9153_9193__$1);{
var G__9195 = cljs.core.chunk_rest.call(null,seq__9153_9193__$1);
var G__9196 = c__6595__auto___9194;
var G__9197 = cljs.core.count.call(null,c__6595__auto___9194);
var G__9198 = 0;
seq__9153_9183 = G__9195;
chunk__9154_9184 = G__9196;
count__9155_9185 = G__9197;
i__9156_9186 = G__9198;
continue;
}
} else
{var cls_9199 = cljs.core.first.call(null,seq__9153_9193__$1);e_9182.addClass(cls_9199);
{
var G__9200 = cljs.core.next.call(null,seq__9153_9193__$1);
var G__9201 = null;
var G__9202 = 0;
var G__9203 = 0;
seq__9153_9183 = G__9200;
chunk__9154_9184 = G__9201;
count__9155_9185 = G__9202;
i__9156_9186 = G__9203;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_9181__$1,"css"))
{e_9182.css(cljs.core.clj__GT_js.call(null,v_9180));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_9181__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_9181__$1),v_9180);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_9181__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_9181__$1),v_9180);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_9180))
{e_9182.removeAttr(k_9181__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_9180))
{e_9182.attr(k_9181__$1,k_9181__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_9182.attr(k_9181__$1,[cljs.core.str(v_9180)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__9204 = seq__9148_9174;
var G__9205 = chunk__9149_9175;
var G__9206 = count__9150_9176;
var G__9207 = (i__9151_9177 + 1);
seq__9148_9174 = G__9204;
chunk__9149_9175 = G__9205;
count__9150_9176 = G__9206;
i__9151_9177 = G__9207;
continue;
}
} else
{var temp__4092__auto___9208 = cljs.core.seq.call(null,seq__9148_9174);if(temp__4092__auto___9208)
{var seq__9148_9209__$1 = temp__4092__auto___9208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9148_9209__$1))
{var c__6595__auto___9210 = cljs.core.chunk_first.call(null,seq__9148_9209__$1);{
var G__9211 = cljs.core.chunk_rest.call(null,seq__9148_9209__$1);
var G__9212 = c__6595__auto___9210;
var G__9213 = cljs.core.count.call(null,c__6595__auto___9210);
var G__9214 = 0;
seq__9148_9174 = G__9211;
chunk__9149_9175 = G__9212;
count__9150_9176 = G__9213;
i__9151_9177 = G__9214;
continue;
}
} else
{var vec__9157_9215 = cljs.core.first.call(null,seq__9148_9209__$1);var k_9216 = cljs.core.nth.call(null,vec__9157_9215,0,null);var v_9217 = cljs.core.nth.call(null,vec__9157_9215,1,null);var k_9218__$1 = cljs.core.name.call(null,k_9216);var e_9219 = jQuery(this$);if(cljs.core._EQ_.call(null,k_9218__$1,"class"))
{var seq__9158_9220 = cljs.core.seq.call(null,clojure.string.split.call(null,v_9217,/ /));var chunk__9159_9221 = null;var count__9160_9222 = 0;var i__9161_9223 = 0;while(true){
if((i__9161_9223 < count__9160_9222))
{var cls_9224 = cljs.core._nth.call(null,chunk__9159_9221,i__9161_9223);e_9219.addClass(cls_9224);
{
var G__9225 = seq__9158_9220;
var G__9226 = chunk__9159_9221;
var G__9227 = count__9160_9222;
var G__9228 = (i__9161_9223 + 1);
seq__9158_9220 = G__9225;
chunk__9159_9221 = G__9226;
count__9160_9222 = G__9227;
i__9161_9223 = G__9228;
continue;
}
} else
{var temp__4092__auto___9229__$1 = cljs.core.seq.call(null,seq__9158_9220);if(temp__4092__auto___9229__$1)
{var seq__9158_9230__$1 = temp__4092__auto___9229__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9158_9230__$1))
{var c__6595__auto___9231 = cljs.core.chunk_first.call(null,seq__9158_9230__$1);{
var G__9232 = cljs.core.chunk_rest.call(null,seq__9158_9230__$1);
var G__9233 = c__6595__auto___9231;
var G__9234 = cljs.core.count.call(null,c__6595__auto___9231);
var G__9235 = 0;
seq__9158_9220 = G__9232;
chunk__9159_9221 = G__9233;
count__9160_9222 = G__9234;
i__9161_9223 = G__9235;
continue;
}
} else
{var cls_9236 = cljs.core.first.call(null,seq__9158_9230__$1);e_9219.addClass(cls_9236);
{
var G__9237 = cljs.core.next.call(null,seq__9158_9230__$1);
var G__9238 = null;
var G__9239 = 0;
var G__9240 = 0;
seq__9158_9220 = G__9237;
chunk__9159_9221 = G__9238;
count__9160_9222 = G__9239;
i__9161_9223 = G__9240;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_9218__$1,"css"))
{e_9219.css(cljs.core.clj__GT_js.call(null,v_9217));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_9218__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_9218__$1),v_9217);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_9218__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_9218__$1),v_9217);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_9217))
{e_9219.removeAttr(k_9218__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_9217))
{e_9219.attr(k_9218__$1,k_9218__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_9219.attr(k_9218__$1,[cljs.core.str(v_9217)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__9241 = cljs.core.next.call(null,seq__9148_9209__$1);
var G__9242 = null;
var G__9243 = 0;
var G__9244 = 0;
seq__9148_9174 = G__9241;
chunk__9149_9175 = G__9242;
count__9150_9176 = G__9243;
i__9151_9177 = G__9244;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__9162 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__9163 = null;var count__9164 = 0;var i__9165 = 0;while(true){
if((i__9165 < count__9164))
{var vec__9166 = cljs.core._nth.call(null,chunk__9163,i__9165);var k = cljs.core.nth.call(null,vec__9166,0,null);var v = cljs.core.nth.call(null,vec__9166,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9245 = seq__9162;
var G__9246 = chunk__9163;
var G__9247 = count__9164;
var G__9248 = (i__9165 + 1);
seq__9162 = G__9245;
chunk__9163 = G__9246;
count__9164 = G__9247;
i__9165 = G__9248;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9162);if(temp__4092__auto__)
{var seq__9162__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9162__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__9162__$1);{
var G__9249 = cljs.core.chunk_rest.call(null,seq__9162__$1);
var G__9250 = c__6595__auto__;
var G__9251 = cljs.core.count.call(null,c__6595__auto__);
var G__9252 = 0;
seq__9162 = G__9249;
chunk__9163 = G__9250;
count__9164 = G__9251;
i__9165 = G__9252;
continue;
}
} else
{var vec__9167 = cljs.core.first.call(null,seq__9162__$1);var k = cljs.core.nth.call(null,vec__9167,0,null);var v = cljs.core.nth.call(null,vec__9167,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9253 = cljs.core.next.call(null,seq__9162__$1);
var G__9254 = null;
var G__9255 = 0;
var G__9256 = 0;
seq__9162 = G__9253;
chunk__9163 = G__9254;
count__9164 = G__9255;
i__9165 = G__9256;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__9168 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__9169 = null;var count__9170 = 0;var i__9171 = 0;while(true){
if((i__9171 < count__9170))
{var vec__9172 = cljs.core._nth.call(null,chunk__9169,i__9171);var k = cljs.core.nth.call(null,vec__9172,0,null);var v = cljs.core.nth.call(null,vec__9172,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9168,chunk__9169,count__9170,i__9171,vec__9172,k,v){
return (function (p1__9119_SHARP_,p2__9120_SHARP_,p3__9121_SHARP_,p4__9118_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9118_SHARP_);
});})(seq__9168,chunk__9169,count__9170,i__9171,vec__9172,k,v))
);
{
var G__9257 = seq__9168;
var G__9258 = chunk__9169;
var G__9259 = count__9170;
var G__9260 = (i__9171 + 1);
seq__9168 = G__9257;
chunk__9169 = G__9258;
count__9170 = G__9259;
i__9171 = G__9260;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9168);if(temp__4092__auto__)
{var seq__9168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9168__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__9168__$1);{
var G__9261 = cljs.core.chunk_rest.call(null,seq__9168__$1);
var G__9262 = c__6595__auto__;
var G__9263 = cljs.core.count.call(null,c__6595__auto__);
var G__9264 = 0;
seq__9168 = G__9261;
chunk__9169 = G__9262;
count__9170 = G__9263;
i__9171 = G__9264;
continue;
}
} else
{var vec__9173 = cljs.core.first.call(null,seq__9168__$1);var k = cljs.core.nth.call(null,vec__9173,0,null);var v = cljs.core.nth.call(null,vec__9173,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9168,chunk__9169,count__9170,i__9171,vec__9173,k,v,seq__9168__$1,temp__4092__auto__){
return (function (p1__9119_SHARP_,p2__9120_SHARP_,p3__9121_SHARP_,p4__9118_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9118_SHARP_);
});})(seq__9168,chunk__9169,count__9170,i__9171,vec__9173,k,v,seq__9168__$1,temp__4092__auto__))
);
{
var G__9265 = cljs.core.next.call(null,seq__9168__$1);
var G__9266 = null;
var G__9267 = 0;
var G__9268 = 0;
seq__9168 = G__9265;
chunk__9169 = G__9266;
count__9170 = G__9267;
i__9171 = G__9268;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__9269_SHARP_,p2__9270_SHARP_){return p1__9269_SHARP_.appendChild(p2__9270_SHARP_);
}):(function (p1__9271_SHARP_,p2__9272_SHARP_){try{return p1__9271_SHARP_.appendChild(p2__9272_SHARP_);
}catch (e9273){if((e9273 instanceof Error))
{var _ = e9273;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9273;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,kids){var node = (function (p1__9274_SHARP_){if(typeof p1__9274_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__9274_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__9274_SHARP_)))
{return p1__9274_SHARP_;
} else
{return null;
}
}
});var seq__9279_9283 = cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__9280_9284 = null;var count__9281_9285 = 0;var i__9282_9286 = 0;while(true){
if((i__9282_9286 < count__9281_9285))
{var x_9287 = cljs.core._nth.call(null,chunk__9280_9284,i__9282_9286);tailrecursion.hoplon.append_child.call(null,this$,x_9287);
{
var G__9288 = seq__9279_9283;
var G__9289 = chunk__9280_9284;
var G__9290 = count__9281_9285;
var G__9291 = (i__9282_9286 + 1);
seq__9279_9283 = G__9288;
chunk__9280_9284 = G__9289;
count__9281_9285 = G__9290;
i__9282_9286 = G__9291;
continue;
}
} else
{var temp__4092__auto___9292 = cljs.core.seq.call(null,seq__9279_9283);if(temp__4092__auto___9292)
{var seq__9279_9293__$1 = temp__4092__auto___9292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9279_9293__$1))
{var c__6595__auto___9294 = cljs.core.chunk_first.call(null,seq__9279_9293__$1);{
var G__9295 = cljs.core.chunk_rest.call(null,seq__9279_9293__$1);
var G__9296 = c__6595__auto___9294;
var G__9297 = cljs.core.count.call(null,c__6595__auto___9294);
var G__9298 = 0;
seq__9279_9283 = G__9295;
chunk__9280_9284 = G__9296;
count__9281_9285 = G__9297;
i__9282_9286 = G__9298;
continue;
}
} else
{var x_9299 = cljs.core.first.call(null,seq__9279_9293__$1);tailrecursion.hoplon.append_child.call(null,this$,x_9299);
{
var G__9300 = cljs.core.next.call(null,seq__9279_9293__$1);
var G__9301 = null;
var G__9302 = 0;
var G__9303 = 0;
seq__9279_9283 = G__9300;
chunk__9280_9284 = G__9301;
count__9281_9285 = G__9302;
i__9282_9286 = G__9303;
continue;
}
}
} else
{}
}
break;
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__9311__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__9305 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9305,0,null);var kids = cljs.core.nth.call(null,vec__9305,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9306 = this$;G__9306.hoplonIFn(attr,kids);
return G__9306;
} else
{var G__9307 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9307,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9307,kids);
return G__9307;
}
};
var G__9311 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9311__delegate.call(this,self__,args);};
G__9311.cljs$lang$maxFixedArity = 1;
G__9311.cljs$lang$applyTo = (function (arglist__9312){
var self__ = cljs.core.first(arglist__9312);
var args = cljs.core.rest(arglist__9312);
return G__9311__delegate(self__,args);
});
G__9311.cljs$core$IFn$_invoke$arity$variadic = G__9311__delegate;
return G__9311;
})()
;
Element.prototype.apply = (function (self__,args9304){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9304)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9313__delegate = function (args){var this$ = this;var vec__9308 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9308,0,null);var kids = cljs.core.nth.call(null,vec__9308,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9309 = this$;G__9309.hoplonIFn(attr,kids);
return G__9309;
} else
{var G__9310 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9310,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9310,kids);
return G__9310;
}
};
var G__9313 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9313__delegate.call(this,args);};
G__9313.cljs$lang$maxFixedArity = 0;
G__9313.cljs$lang$applyTo = (function (arglist__9314){
var args = cljs.core.seq(arglist__9314);
return G__9313__delegate(args);
});
G__9313.cljs$core$IFn$_invoke$arity$variadic = G__9313__delegate;
return G__9313;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__9315__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__9315 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9315__delegate.call(this,args);};
G__9315.cljs$lang$maxFixedArity = 0;
G__9315.cljs$lang$applyTo = (function (arglist__9316){
var args = cljs.core.seq(arglist__9316);
return G__9315__delegate(args);
});
G__9315.cljs$core$IFn$_invoke$arity$variadic = G__9315__delegate;
return G__9315;
})()
;
});
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.body = tailrecursion.hoplon.make_elem_ctor.call(null,"body");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_elem_ctor.call(null,"head");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_elem_ctor.call(null,"html");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__9317_SHARP_){return document.createTextNode(p1__9317_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__9318_SHARP_){return document.createComment(p1__9318_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return f.call(null);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(html){return tailrecursion.hoplon.timeout.call(null,(function (){var body = jQuery("body");body.empty();
var seq__9327_9335 = cljs.core.seq.call(null,html);var chunk__9328_9336 = null;var count__9329_9337 = 0;var i__9330_9338 = 0;while(true){
if((i__9330_9338 < count__9329_9337))
{var x_9339 = cljs.core._nth.call(null,chunk__9328_9336,i__9330_9338);body.append(x_9339);
{
var G__9340 = seq__9327_9335;
var G__9341 = chunk__9328_9336;
var G__9342 = count__9329_9337;
var G__9343 = (i__9330_9338 + 1);
seq__9327_9335 = G__9340;
chunk__9328_9336 = G__9341;
count__9329_9337 = G__9342;
i__9330_9338 = G__9343;
continue;
}
} else
{var temp__4092__auto___9344 = cljs.core.seq.call(null,seq__9327_9335);if(temp__4092__auto___9344)
{var seq__9327_9345__$1 = temp__4092__auto___9344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9327_9345__$1))
{var c__6595__auto___9346 = cljs.core.chunk_first.call(null,seq__9327_9345__$1);{
var G__9347 = cljs.core.chunk_rest.call(null,seq__9327_9345__$1);
var G__9348 = c__6595__auto___9346;
var G__9349 = cljs.core.count.call(null,c__6595__auto___9346);
var G__9350 = 0;
seq__9327_9335 = G__9347;
chunk__9328_9336 = G__9348;
count__9329_9337 = G__9349;
i__9330_9338 = G__9350;
continue;
}
} else
{var x_9351 = cljs.core.first.call(null,seq__9327_9345__$1);body.append(x_9351);
{
var G__9352 = cljs.core.next.call(null,seq__9327_9345__$1);
var G__9353 = null;
var G__9354 = 0;
var G__9355 = 0;
seq__9327_9335 = G__9352;
chunk__9328_9336 = G__9353;
count__9329_9337 = G__9354;
i__9330_9338 = G__9355;
continue;
}
}
} else
{}
}
break;
}
body.on("submit",(function (e){return e.preventDefault();
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__9331 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__9332 = null;var count__9333 = 0;var i__9334 = 0;while(true){
if((i__9334 < count__9333))
{var f = cljs.core._nth.call(null,chunk__9332,i__9334);f.call(null);
{
var G__9356 = seq__9331;
var G__9357 = chunk__9332;
var G__9358 = count__9333;
var G__9359 = (i__9334 + 1);
seq__9331 = G__9356;
chunk__9332 = G__9357;
count__9333 = G__9358;
i__9334 = G__9359;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9331);if(temp__4092__auto__)
{var seq__9331__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9331__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__9331__$1);{
var G__9360 = cljs.core.chunk_rest.call(null,seq__9331__$1);
var G__9361 = c__6595__auto__;
var G__9362 = cljs.core.count.call(null,c__6595__auto__);
var G__9363 = 0;
seq__9331 = G__9360;
chunk__9332 = G__9361;
count__9333 = G__9362;
i__9334 = G__9363;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__9331__$1);f.call(null);
{
var G__9364 = cljs.core.next.call(null,seq__9331__$1);
var G__9365 = null;
var G__9366 = 0;
var G__9367 = 0;
seq__9331 = G__9364;
chunk__9332 = G__9365;
count__9333 = G__9366;
i__9334 = G__9367;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox = os.call(null,"left");var oy = os.call(null,"top");return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",1013904363),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));
(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));
return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val([cljs.core.str(v)].join('')).trigger("change");
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$.call(null,v)).trigger("change");
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__6705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__6706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__6707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__6708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__6709__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",(function() { 
var G__9368__delegate = function (elem,action,args){return action;
};
var G__9368 = function (elem,action,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9368__delegate.call(this,elem,action,args);};
G__9368.cljs$lang$maxFixedArity = 2;
G__9368.cljs$lang$applyTo = (function (arglist__9369){
var elem = cljs.core.first(arglist__9369);
arglist__9369 = cljs.core.next(arglist__9369);
var action = cljs.core.first(arglist__9369);
var args = cljs.core.rest(arglist__9369);
return G__9368__delegate(elem,action,args);
});
G__9368.cljs$core$IFn$_invoke$arity$variadic = G__9368__delegate;
return G__9368;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__6709__auto__,method_table__6705__auto__,prefer_table__6706__auto__,method_cache__6707__auto__,cached_hierarchy__6708__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__9370__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9370 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9370__delegate.call(this,elem,_,args);};
G__9370.cljs$lang$maxFixedArity = 2;
G__9370.cljs$lang$applyTo = (function (arglist__9371){
var elem = cljs.core.first(arglist__9371);
arglist__9371 = cljs.core.next(arglist__9371);
var _ = cljs.core.first(arglist__9371);
var args = cljs.core.rest(arglist__9371);
return G__9370__delegate(elem,_,args);
});
G__9370.cljs$core$IFn$_invoke$arity$variadic = G__9370__delegate;
return G__9370;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){return elem.call(null,kvs);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var seq__9372 = cljs.core.seq.call(null,kvs);var chunk__9373 = null;var count__9374 = 0;var i__9375 = 0;while(true){
if((i__9375 < count__9374))
{var vec__9376 = cljs.core._nth.call(null,chunk__9373,i__9375);var c = cljs.core.nth.call(null,vec__9376,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9376,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9378 = seq__9372;
var G__9379 = chunk__9373;
var G__9380 = count__9374;
var G__9381 = (i__9375 + 1);
seq__9372 = G__9378;
chunk__9373 = G__9379;
count__9374 = G__9380;
i__9375 = G__9381;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9372);if(temp__4092__auto__)
{var seq__9372__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9372__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__9372__$1);{
var G__9382 = cljs.core.chunk_rest.call(null,seq__9372__$1);
var G__9383 = c__6595__auto__;
var G__9384 = cljs.core.count.call(null,c__6595__auto__);
var G__9385 = 0;
seq__9372 = G__9382;
chunk__9373 = G__9383;
count__9374 = G__9384;
i__9375 = G__9385;
continue;
}
} else
{var vec__9377 = cljs.core.first.call(null,seq__9372__$1);var c = cljs.core.nth.call(null,vec__9377,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9377,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9386 = cljs.core.next.call(null,seq__9372__$1);
var G__9387 = null;
var G__9388 = 0;
var G__9389 = 0;
seq__9372 = G__9386;
chunk__9373 = G__9387;
count__9374 = G__9388;
i__9375 = G__9389;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__9390 = cljs.core.seq.call(null,kvs);var chunk__9391 = null;var count__9392 = 0;var i__9393 = 0;while(true){
if((i__9393 < count__9392))
{var vec__9394 = cljs.core._nth.call(null,chunk__9391,i__9393);var k = cljs.core.nth.call(null,vec__9394,0,null);var v = cljs.core.nth.call(null,vec__9394,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__9396 = seq__9390;
var G__9397 = chunk__9391;
var G__9398 = count__9392;
var G__9399 = (i__9393 + 1);
seq__9390 = G__9396;
chunk__9391 = G__9397;
count__9392 = G__9398;
i__9393 = G__9399;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9390);if(temp__4092__auto__)
{var seq__9390__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9390__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__9390__$1);{
var G__9400 = cljs.core.chunk_rest.call(null,seq__9390__$1);
var G__9401 = c__6595__auto__;
var G__9402 = cljs.core.count.call(null,c__6595__auto__);
var G__9403 = 0;
seq__9390 = G__9400;
chunk__9391 = G__9401;
count__9392 = G__9402;
i__9393 = G__9403;
continue;
}
} else
{var vec__9395 = cljs.core.first.call(null,seq__9390__$1);var k = cljs.core.nth.call(null,vec__9395,0,null);var v = cljs.core.nth.call(null,vec__9395,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__9404 = cljs.core.next.call(null,seq__9390__$1);
var G__9405 = null;
var G__9406 = 0;
var G__9407 = 0;
seq__9390 = G__9404;
chunk__9391 = G__9405;
count__9392 = G__9406;
i__9393 = G__9407;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),(function (elem,_,v){if(cljs.core.truth_(v))
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focus();
}));
} else
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focusout();
}));
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),(function (elem,_,___$1){return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),(function (elem,_,v){if(cljs.core.truth_(v))
{tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v);
} else
{return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),(function (elem,_,v){return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function on_BANG_(elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.lift.call(null,((function (pool_size){
return (function (G__9434,G__9433){return G__9433.call(null,G__9434);
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq){
return (function (G__9435,G__9436){return G__9435.call(null,G__9436);
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__9408_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__9438,G__9437){return (G__9437 < G__9438);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__9408_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__9409_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__9439,G__9441,G__9440){return G__9439.call(null,G__9440,G__9441);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__9409_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,(function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift.call(null,(function (G__9455,G__9453,G__9449,G__9450,G__9447,G__9451,G__9446,G__9448,G__9454,G__9452){if(cljs.core.truth_((G__9446 < G__9447)))
{var seq__9442_9456 = cljs.core.seq.call(null,G__9448.call(null,G__9446,G__9447));var chunk__9443_9457 = null;var count__9444_9458 = 0;var i__9445_9459 = 0;while(true){
if(cljs.core.truth_((i__9445_9459 < count__9444_9458)))
{var i_9460 = cljs.core._nth.call(null,chunk__9443_9457,i__9445_9459);var e_9461 = G__9449.call(null,G__9450.call(null,i_9460)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9451.call(null,i_9460));if(cljs.core.not.call(null,G__9452))
{G__9453.appendChild(e_9461);
} else
{G__9453.insertBefore(e_9461,G__9453.firstChild);
}
{
var G__9462 = seq__9442_9456;
var G__9463 = chunk__9443_9457;
var G__9464 = count__9444_9458;
var G__9465 = (i__9445_9459 + 1);
seq__9442_9456 = G__9462;
chunk__9443_9457 = G__9463;
count__9444_9458 = G__9464;
i__9445_9459 = G__9465;
continue;
}
} else
{var temp__4092__auto___9466 = cljs.core.seq.call(null,seq__9442_9456);if(temp__4092__auto___9466)
{var seq__9442_9467__$1 = temp__4092__auto___9466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9442_9467__$1))
{var c__6595__auto___9468 = cljs.core.chunk_first.call(null,seq__9442_9467__$1);{
var G__9469 = cljs.core.chunk_rest.call(null,seq__9442_9467__$1);
var G__9470 = c__6595__auto___9468;
var G__9471 = cljs.core.count.call(null,c__6595__auto___9468);
var G__9472 = 0;
seq__9442_9456 = G__9469;
chunk__9443_9457 = G__9470;
count__9444_9458 = G__9471;
i__9445_9459 = G__9472;
continue;
}
} else
{var i_9473 = cljs.core.first.call(null,seq__9442_9467__$1);var e_9474 = G__9449.call(null,G__9450.call(null,i_9473)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9451.call(null,i_9473));if(cljs.core.not.call(null,G__9452))
{G__9453.appendChild(e_9474);
} else
{G__9453.insertBefore(e_9474,G__9453.firstChild);
}
{
var G__9475 = cljs.core.next.call(null,seq__9442_9467__$1);
var G__9476 = null;
var G__9477 = 0;
var G__9478 = 0;
seq__9442_9456 = G__9475;
chunk__9443_9457 = G__9476;
count__9444_9458 = G__9477;
i__9445_9459 = G__9478;
continue;
}
}
} else
{}
}
break;
}
return G__9454.call(null,G__9455,G__9447);
} else
{return null;
}
})).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
}));
return d;
});
