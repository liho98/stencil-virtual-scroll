import{r as t,h as s,H as e,g as i}from"./p-05d26484.js";const r=class{constructor(s){t(this,s),this.rowCount=100}render(){return s("virtual-scroll",{target:"window",type:"table",rowCount:this.rowCount,height:300,rowHeight:56,rowRenderer:({index:t})=>s("tr",null,s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},s("div",{class:"text-sm leading-5 font-medium text-gray-900"},t)),s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},s("div",{class:"text-sm leading-5 font-medium text-gray-900"},"Rm 129.80")),s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},s("div",{class:"text-sm leading-5 text-gray-900"},"Boost")),s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},s("span",{class:"bg-green-100 text-green-800 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4"},"Success")),s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"},"One Utama"),s("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"},"3 mins ago"),s("td",{class:"px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"},s("a",{href:"#",class:"text-indigo-600 hover:text-indigo-900"},"View"))),onScrollReachedBottom:()=>{this.rowCount+=20,console.log("reached bottom")}})}};r.style=":host{display:block}";const l=class{constructor(s){t(this,s),this.height=0,this.rowCount=0,this.rowHeight=0,this.renderAhead=1,this.target="default",this.type="div",this.scrollTop=0,this.visibleRowCount=0,this.handleScrollBindComponent=this.handleScrollBindComponent.bind(this),this.handleScrollBindWindow=this.handleScrollBindWindow.bind(this)}handleScrollBindWindow(t){requestAnimationFrame(()=>{const{scrollTop:s,scrollHeight:e}=t.target.scrollingElement;s>this.scrollTop&&s>=e-this.visibleRowCount*this.rowHeight&&this.onScrollReachedBottom(),this.scrollTop=t.target.scrollingElement.scrollTop})}handleScrollBindComponent(t){requestAnimationFrame(()=>{const{scrollTop:s,scrollHeight:e}=t.target;s>this.scrollTop&&s>=e-357&&this.onScrollReachedBottom(),this.scrollTop=t.target.scrollTop})}componentWillLoad(){this.scrollTop=this.el.scrollTop,"default"===this.target?this.el.addEventListener("scroll",this.handleScrollBindComponent):(this.height=window.innerHeight,window.addEventListener("scroll",this.handleScrollBindWindow))}disconnectedCallback(){this.el.removeEventListener("scroll",this.handleScrollBindComponent),console.log("disconnectedCallback")}render(){const t=this.rowCount*this.rowHeight;let i=Math.floor(this.scrollTop/this.rowHeight)-this.renderAhead;i=Math.max(0,i),this.visibleRowCount=Math.ceil(this.height/this.rowHeight)+2*this.renderAhead,this.visibleRowCount=Math.min(this.rowCount-i,this.visibleRowCount);const r=i*this.rowHeight,l=this.rowRenderer,a=()=>new Array(this.visibleRowCount).fill(null).map((t,e)=>s(l,{index:e+i}));return s(e,{class:"block",style:{height:"default"===this.target?this.height+"px":"auto",overflow:"hidden auto"}},s("div",{class:"viewport",style:{overflow:"hidden",willChange:"transform",height:t+"px"}},s(()=>{switch(this.type){case"table":return s("table",{class:"w-full",style:{willChange:"transform",transform:`translateY(${r}px)`}},s(a,null));default:return s("div",{class:"w-full",style:{willChange:"transform",transform:`translateY(${r}px)`}},s(a,null))}},null)))}get el(){return i(this)}};l.style=":host{display:block}";export{r as demo_vscroll,l as virtual_scroll}