(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{366:function(t,i,r){t.exports=r.p+"assets/img/quicksort1.30f5be68.png"},367:function(t,i,r){t.exports=r.p+"assets/img/quicksort2.13ff8894.png"},368:function(t,i,r){t.exports=r.p+"assets/img/quicksort3.6a62af2d.png"},369:function(t,i,r){t.exports=r.p+"assets/img/quicksort4.6d5af821.png"},379:function(t,i,r){"use strict";r.r(i);var s=r(45),a=Object(s.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速排序算法学习记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速排序算法学习记录"}},[t._v("#")]),t._v(" 快速排序算法学习记录")]),t._v(" "),s("p",[t._v("递归实现")]),t._v(" "),s("ol",[s("li",[t._v("从左侧开始 mark 是遍历的边界位置，pivot 是基准值 ，与后面的数遍历比较\n"),s("img",{attrs:{src:r(366),alt:"quicksort1"}})]),t._v(" "),s("li",[t._v("遍历的元素比pivot大 ，继续遍历，小于pivot时，则mark先前进1位，遍历的元素与当前mark所在的值互换")])]),t._v(" "),s("img",{attrs:{src:r(367),alt:"quicksort2"}}),t._v(" "),s("img",{attrs:{src:r(368),alt:"quicksort3"}}),t._v("\n3. 遍历结束，pivot值与mark值互换\n"),s("img",{attrs:{src:r(369),alt:"quicksort4"}}),t._v("\n4. 新一轮的比较 分别从 0 到 pivot ，pivot 到数组length-1\n"),s("p",[t._v("总结：")]),t._v(" "),s("ol",[s("li",[t._v("从 0 到数组length-1 开始 start=0 end=数组length-1")]),t._v(" "),s("li",[t._v("0为初始mark位置，pivot等于数组[mark]")]),t._v(" "),s("li",[t._v("开始遍历，遍历元素与pivot 比较，比pivot大继续遍历，比pivot小，mark++，mark所在位置元素与遍历元素交换位置")]),t._v(" "),s("li",[t._v("遍历一边后，mark位置的值与pivot交换 使得mark左边均小于mark，右边均大于mark")]),t._v(" "),s("li",[t._v("pivot等于数组[mark]")]),t._v(" "),s("li",[t._v("分别从start到pivot-1,pivot+1到end重新遍历，并进入递归")]),t._v(" "),s("li",[t._v("直到遍历start>=end结束")])])])}),[],!1,null,null,null);i.default=a.exports}}]);