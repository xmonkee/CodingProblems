// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
}),null,null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){var queue = tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);while(true){
if(cljs.core.seq.call(null,queue))
{var next = cljs.core.key.call(null,cljs.core.peek.call(null,queue));var value = next.thunk.call(null);var continue_QMARK_ = cljs.core.not_EQ_.call(null,value,next.prev);var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__7722_SHARP_,p2__7723_SHARP_){return cljs.core.assoc.call(null,p1__7722_SHARP_,p2__7723_SHARP_,p2__7723_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__7724 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__7724;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
var seq__7729 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__7730 = null;var count__7731 = 0;var i__7732 = 0;while(true){
if((i__7732 < count__7731))
{var src = cljs.core._nth.call(null,chunk__7730,i__7732);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__7733 = seq__7729;
var G__7734 = chunk__7730;
var G__7735 = count__7731;
var G__7736 = (i__7732 + 1);
seq__7729 = G__7733;
chunk__7730 = G__7734;
count__7731 = G__7735;
i__7732 = G__7736;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7729);if(temp__4092__auto__)
{var seq__7729__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7729__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__7729__$1);{
var G__7737 = cljs.core.chunk_rest.call(null,seq__7729__$1);
var G__7738 = c__6595__auto__;
var G__7739 = cljs.core.count.call(null,c__6595__auto__);
var G__7740 = 0;
seq__7729 = G__7737;
chunk__7730 = G__7738;
count__7731 = G__7739;
i__7732 = G__7740;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__7729__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__7741 = cljs.core.next.call(null,seq__7729__$1);
var G__7742 = null;
var G__7743 = 0;
var G__7744 = 0;
seq__7729 = G__7741;
chunk__7730 = G__7742;
count__7731 = G__7743;
i__7732 = G__7744;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__7749){var vec__7770 = p__7749;var f = cljs.core.nth.call(null,vec__7770,0,null);var sources = cljs.core.nth.call(null,vec__7770,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__7771_7790 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__7772_7791 = null;var count__7773_7792 = 0;var i__7774_7793 = 0;while(true){
if((i__7774_7793 < count__7773_7792))
{var source_7794 = cljs.core._nth.call(null,chunk__7772_7791,i__7774_7793);source_7794.sinks = cljs.core.conj.call(null,source_7794.sinks,this$);
if((source_7794.rank > this$.rank))
{var seq__7775_7795 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7771_7790,chunk__7772_7791,count__7773_7792,i__7774_7793,source_7794){
return (function (p1__7745_SHARP_){return p1__7745_SHARP_.sinks;
});})(seq__7771_7790,chunk__7772_7791,count__7773_7792,i__7774_7793,source_7794))
,source_7794));var chunk__7776_7796 = null;var count__7777_7797 = 0;var i__7778_7798 = 0;while(true){
if((i__7778_7798 < count__7777_7797))
{var dep_7799 = cljs.core._nth.call(null,chunk__7776_7796,i__7778_7798);dep_7799.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7800 = seq__7775_7795;
var G__7801 = chunk__7776_7796;
var G__7802 = count__7777_7797;
var G__7803 = (i__7778_7798 + 1);
seq__7775_7795 = G__7800;
chunk__7776_7796 = G__7801;
count__7777_7797 = G__7802;
i__7778_7798 = G__7803;
continue;
}
} else
{var temp__4092__auto___7804 = cljs.core.seq.call(null,seq__7775_7795);if(temp__4092__auto___7804)
{var seq__7775_7805__$1 = temp__4092__auto___7804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7775_7805__$1))
{var c__6595__auto___7806 = cljs.core.chunk_first.call(null,seq__7775_7805__$1);{
var G__7807 = cljs.core.chunk_rest.call(null,seq__7775_7805__$1);
var G__7808 = c__6595__auto___7806;
var G__7809 = cljs.core.count.call(null,c__6595__auto___7806);
var G__7810 = 0;
seq__7775_7795 = G__7807;
chunk__7776_7796 = G__7808;
count__7777_7797 = G__7809;
i__7778_7798 = G__7810;
continue;
}
} else
{var dep_7811 = cljs.core.first.call(null,seq__7775_7805__$1);dep_7811.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7812 = cljs.core.next.call(null,seq__7775_7805__$1);
var G__7813 = null;
var G__7814 = 0;
var G__7815 = 0;
seq__7775_7795 = G__7812;
chunk__7776_7796 = G__7813;
count__7777_7797 = G__7814;
i__7778_7798 = G__7815;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__7816 = seq__7771_7790;
var G__7817 = chunk__7772_7791;
var G__7818 = count__7773_7792;
var G__7819 = (i__7774_7793 + 1);
seq__7771_7790 = G__7816;
chunk__7772_7791 = G__7817;
count__7773_7792 = G__7818;
i__7774_7793 = G__7819;
continue;
}
} else
{var temp__4092__auto___7820 = cljs.core.seq.call(null,seq__7771_7790);if(temp__4092__auto___7820)
{var seq__7771_7821__$1 = temp__4092__auto___7820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771_7821__$1))
{var c__6595__auto___7822 = cljs.core.chunk_first.call(null,seq__7771_7821__$1);{
var G__7823 = cljs.core.chunk_rest.call(null,seq__7771_7821__$1);
var G__7824 = c__6595__auto___7822;
var G__7825 = cljs.core.count.call(null,c__6595__auto___7822);
var G__7826 = 0;
seq__7771_7790 = G__7823;
chunk__7772_7791 = G__7824;
count__7773_7792 = G__7825;
i__7774_7793 = G__7826;
continue;
}
} else
{var source_7827 = cljs.core.first.call(null,seq__7771_7821__$1);source_7827.sinks = cljs.core.conj.call(null,source_7827.sinks,this$);
if((source_7827.rank > this$.rank))
{var seq__7779_7828 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7771_7790,chunk__7772_7791,count__7773_7792,i__7774_7793,source_7827,seq__7771_7821__$1,temp__4092__auto___7820){
return (function (p1__7745_SHARP_){return p1__7745_SHARP_.sinks;
});})(seq__7771_7790,chunk__7772_7791,count__7773_7792,i__7774_7793,source_7827,seq__7771_7821__$1,temp__4092__auto___7820))
,source_7827));var chunk__7780_7829 = null;var count__7781_7830 = 0;var i__7782_7831 = 0;while(true){
if((i__7782_7831 < count__7781_7830))
{var dep_7832 = cljs.core._nth.call(null,chunk__7780_7829,i__7782_7831);dep_7832.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7833 = seq__7779_7828;
var G__7834 = chunk__7780_7829;
var G__7835 = count__7781_7830;
var G__7836 = (i__7782_7831 + 1);
seq__7779_7828 = G__7833;
chunk__7780_7829 = G__7834;
count__7781_7830 = G__7835;
i__7782_7831 = G__7836;
continue;
}
} else
{var temp__4092__auto___7837__$1 = cljs.core.seq.call(null,seq__7779_7828);if(temp__4092__auto___7837__$1)
{var seq__7779_7838__$1 = temp__4092__auto___7837__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7779_7838__$1))
{var c__6595__auto___7839 = cljs.core.chunk_first.call(null,seq__7779_7838__$1);{
var G__7840 = cljs.core.chunk_rest.call(null,seq__7779_7838__$1);
var G__7841 = c__6595__auto___7839;
var G__7842 = cljs.core.count.call(null,c__6595__auto___7839);
var G__7843 = 0;
seq__7779_7828 = G__7840;
chunk__7780_7829 = G__7841;
count__7781_7830 = G__7842;
i__7782_7831 = G__7843;
continue;
}
} else
{var dep_7844 = cljs.core.first.call(null,seq__7779_7838__$1);dep_7844.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7845 = cljs.core.next.call(null,seq__7779_7838__$1);
var G__7846 = null;
var G__7847 = 0;
var G__7848 = 0;
seq__7779_7828 = G__7845;
chunk__7780_7829 = G__7846;
count__7781_7830 = G__7847;
i__7782_7831 = G__7848;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__7849 = cljs.core.next.call(null,seq__7771_7821__$1);
var G__7850 = null;
var G__7851 = 0;
var G__7852 = 0;
seq__7771_7790 = G__7849;
chunk__7772_7791 = G__7850;
count__7773_7792 = G__7851;
i__7774_7793 = G__7852;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__7746_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7746_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7746_SHARP_)));
});var thunk = ((function (compute){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__7783_7853 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__7784_7854 = null;var count__7785_7855 = 0;var i__7786_7856 = 0;while(true){
if((i__7786_7856 < count__7785_7855))
{var vec__7787_7857 = cljs.core._nth.call(null,chunk__7784_7854,i__7786_7856);var k_7858 = cljs.core.nth.call(null,vec__7787_7857,0,null);var f_7859__$1 = cljs.core.nth.call(null,vec__7787_7857,1,null);f_7859__$1.call(null,k_7858,this$,x,y);
{
var G__7860 = seq__7783_7853;
var G__7861 = chunk__7784_7854;
var G__7862 = count__7785_7855;
var G__7863 = (i__7786_7856 + 1);
seq__7783_7853 = G__7860;
chunk__7784_7854 = G__7861;
count__7785_7855 = G__7862;
i__7786_7856 = G__7863;
continue;
}
} else
{var temp__4092__auto___7864 = cljs.core.seq.call(null,seq__7783_7853);if(temp__4092__auto___7864)
{var seq__7783_7865__$1 = temp__4092__auto___7864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7783_7865__$1))
{var c__6595__auto___7866 = cljs.core.chunk_first.call(null,seq__7783_7865__$1);{
var G__7867 = cljs.core.chunk_rest.call(null,seq__7783_7865__$1);
var G__7868 = c__6595__auto___7866;
var G__7869 = cljs.core.count.call(null,c__6595__auto___7866);
var G__7870 = 0;
seq__7783_7853 = G__7867;
chunk__7784_7854 = G__7868;
count__7785_7855 = G__7869;
i__7786_7856 = G__7870;
continue;
}
} else
{var vec__7788_7871 = cljs.core.first.call(null,seq__7783_7865__$1);var k_7872 = cljs.core.nth.call(null,vec__7788_7871,0,null);var f_7873__$1 = cljs.core.nth.call(null,vec__7788_7871,1,null);f_7873__$1.call(null,k_7872,this$,x,y);
{
var G__7874 = cljs.core.next.call(null,seq__7783_7865__$1);
var G__7875 = null;
var G__7876 = 0;
var G__7877 = 0;
seq__7783_7853 = G__7874;
chunk__7784_7854 = G__7875;
count__7785_7855 = G__7876;
i__7786_7856 = G__7877;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),(cljs.core.truth_(f)?(function (){throw (new Error(err_mesg));
}):(function (p1__7748_SHARP_,p2__7747_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__7747_SHARP_);
})));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){return cljs.core.deref.call(null,this$);
}));
var G__7789 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__7789);
return G__7789;
};
var set_formula_BANG_ = function (this$,var_args){
var p__7749 = null;if (arguments.length > 1) {
  p__7749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__7749);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__7878){
var this$ = cljs.core.first(arglist__7878);
var p__7749 = cljs.core.rest(arglist__7878);
return set_formula_BANG___delegate(this$,p__7749);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__6414__auto__,writer__6415__auto__,opt__6416__auto__){return cljs.core._write.call(null,writer__6415__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__7879 = cljs.core.seq.call(null,self__.watches);var chunk__7880 = null;var count__7881 = 0;var i__7882 = 0;while(true){
if((i__7882 < count__7881))
{var vec__7883 = cljs.core._nth.call(null,chunk__7880,i__7882);var key = cljs.core.nth.call(null,vec__7883,0,null);var f = cljs.core.nth.call(null,vec__7883,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7885 = seq__7879;
var G__7886 = chunk__7880;
var G__7887 = count__7881;
var G__7888 = (i__7882 + 1);
seq__7879 = G__7885;
chunk__7880 = G__7886;
count__7881 = G__7887;
i__7882 = G__7888;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7879);if(temp__4092__auto__)
{var seq__7879__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7879__$1))
{var c__6595__auto__ = cljs.core.chunk_first.call(null,seq__7879__$1);{
var G__7889 = cljs.core.chunk_rest.call(null,seq__7879__$1);
var G__7890 = c__6595__auto__;
var G__7891 = cljs.core.count.call(null,c__6595__auto__);
var G__7892 = 0;
seq__7879 = G__7889;
chunk__7880 = G__7890;
count__7881 = G__7891;
i__7882 = G__7892;
continue;
}
} else
{var vec__7884 = cljs.core.first.call(null,seq__7879__$1);var key = cljs.core.nth.call(null,vec__7884,0,null);var f = cljs.core.nth.call(null,vec__7884,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7893 = cljs.core.next.call(null,seq__7879__$1);
var G__7894 = null;
var G__7895 = 0;
var G__7896 = 0;
seq__7879 = G__7893;
chunk__7880 = G__7894;
count__7881 = G__7895;
i__7882 = G__7896;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state__$1,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return (new tailrecursion.javelin.Cell(meta,state__$1,rank,prev,sources,sinks,thunk,watches,input_QMARK_));
});
tailrecursion.javelin.lift = (function lift(f){return (function() { 
var G__7897__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__7897 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7897__delegate.call(this,sources);};
G__7897.cljs$lang$maxFixedArity = 0;
G__7897.cljs$lang$applyTo = (function (arglist__7898){
var sources = cljs.core.seq(arglist__7898);
return G__7897__delegate(sources);
});
G__7897.cljs$core$IFn$_invoke$arity$variadic = G__7897__delegate;
return G__7897;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__5835__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__5835__auto__))
{return c.input_QMARK_;
} else
{return and__5835__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq = ((function (olds){
return (function (p1__7899_SHARP_,p2__7900_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7899_SHARP_,p2__7900_SHARP_),p2__7900_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__7902_SHARP_,p2__7901_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7902_SHARP_,p2__7901_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7904__delegate = function (rest__7903_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7903_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__7903_SHARP_);
return news;
};
var G__7904 = function (var_args){
var rest__7903_SHARP_ = null;if (arguments.length > 0) {
  rest__7903_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7904__delegate.call(this,rest__7903_SHARP_);};
G__7904.cljs$lang$maxFixedArity = 0;
G__7904.cljs$lang$applyTo = (function (arglist__7905){
var rest__7903_SHARP_ = cljs.core.seq(arglist__7905);
return G__7904__delegate(rest__7903_SHARP_);
});
G__7904.cljs$core$IFn$_invoke$arity$variadic = G__7904__delegate;
return G__7904;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__7906){
var cells = cljs.core.seq(arglist__7906);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth = ((function (cseq){
return (function (p1__7907_SHARP_,p2__7908_SHARP_){try{return cljs.core.nth.call(null,p1__7907_SHARP_,p2__7908_SHARP_);
}catch (e7911){if((e7911 instanceof Error))
{var _ = e7911;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7911;
} else
{return null;
}
}
}});})(cseq))
;return cljs.core.map.call(null,(function (p1__7909_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,cseq,p1__7909_SHARP_);
}),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
