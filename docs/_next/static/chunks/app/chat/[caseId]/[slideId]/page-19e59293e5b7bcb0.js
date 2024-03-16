(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{9404:function(e,t,s){Promise.resolve().then(s.bind(s,726)),Promise.resolve().then(s.t.bind(s,5250,23))},726:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(7437);async function l(e,t){let s=(await e.beta.assistants.list({limit:"100"})).data.find(e=>e.name===t.name);return s?await e.beta.assistants.update(s.id,{instructions:t.instructions,name:t.name,model:t.model}):await e.beta.assistants.create({instructions:t.instructions,name:t.name,model:t.model})}var n=s(6691),r=s.n(n),o=s(2265),i=s(3697),u=s(4033),c=function(e){let{assistantId:t,title:s="",defaultChat:l=[]}=e,[n,c]=(0,o.useState)(""),[d,m]=(0,o.useState)(l),[g,f]=(0,o.useState)(null),[x,h]=(0,o.useState)(null),[b,p]=(0,o.useState)(null),[y,w]=(0,o.useState)(""),[v,j]=(0,o.useState)(!1),[N,S]=(0,o.useState)(!1),[k,C]=(0,o.useState)(null);(0,u.useSearchParams)(),(0,o.useRef)(null).current=k;let A=(0,o.useRef)(null);A.current=d;let I=async(e,t)=>{let s=await b.beta.threads.runs.retrieve(e,t);if("completed"==s.status){let t=await b.beta.threads.messages.list(e);S(e=>!1),m([...A.current,{isBot:!0,msg:t.data[0].content[0].text.value}])}else"failed"==s.status?(console.log("Run failed"),S(e=>!1),m([...A.current,{isBot:!0,msg:s.last_error.message}])):setTimeout(()=>I(e,t),200)},_=()=>{localStorage.setItem("openAIKey",y),j(e=>!0)},B=async()=>{let e;c("");let s=[...A.current,{isBot:!1,msg:n}];S(e=>!0),m(s),null==g?f(e=await b.beta.threads.create()):e=g,await b.beta.threads.messages.create(e.id,{role:"user",content:n});let a=await b.beta.threads.runs.create(e.id,{assistant_id:t});h(a),I(e.id,a.id)};return(0,o.useEffect)(()=>{!0==v&&""!=y&&p(new i.ZP({apiKey:y,dangerouslyAllowBrowser:!0}))},[v]),(0,o.useEffect)(()=>{let e=localStorage.getItem("openAIKey");null!=e&&""!=e&&(w(e),j(e=>!0))},[]),(0,a.jsxs)("div",{className:"h-full w-full md:p-4 flex flex-col bg-myBg gap-4",children:[(0,a.jsxs)("div",{className:"flex justify-between bg-myPrimary rounded-xl p-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(r(),{height:25,width:25,src:"/assistant.svg",alt:"logo"}),(0,a.jsx)("span",{className:"font-semibold",children:s||"CaseMate Chat"})]}),(0,a.jsx)("div",{className:"d-flex align-items-center gap-2 cursor-pointer",children:(0,a.jsx)(r(),{height:20,width:20,onClick:()=>{m(e=>[]),f(e=>null)},src:"/refresh.svg",alt:"refresh"})})]}),v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2 w-full h-full overflow-y-auto scroll",children:[d.map((e,t)=>(0,a.jsx)("div",{className:"".concat(e.isBot?"bg-gray-900 text-gray-100 self-start":"text-gray-900 bg-gray-100 self-end border-2"," rounded-lg  px-3 py-2 max-w-sm"),children:e.msg},t)),N&&(0,a.jsx)("div",{className:"bg-gray-900 text-gray-100 self-start rounded-lg  px-3 py-2 max-w-sm",children:(0,a.jsxs)("div",{className:"flex h-4 items-center gap-2",children:[(0,a.jsx)("div",{className:"bounce bounce1 rounded-full bg-slate-500 h-2 w-2"}),(0,a.jsx)("div",{className:"bounce bounce2 rounded-full bg-slate-500 h-2 w-2"}),(0,a.jsx)("div",{className:"bounce bounce3 rounded-full bg-slate-500 h-2 w-2"})]})})]}),(0,a.jsxs)("div",{className:"flex gap-2 mt-auto",children:[(0,a.jsx)("input",{id:"question",className:"bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"Ask a question",required:!0,value:n,onKeyDown:e=>{"Enter"!=e.code||e.shiftKey||B()},onChange:e=>c(e.target.value)}),(0,a.jsx)("button",{onClick:B,className:" bg-mySecondary hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center ",children:(0,a.jsx)(r(),{height:20,width:20,src:"/send.svg",alt:"send"})})]})]}):(0,a.jsxs)("div",{className:"flex max-w-xl flex-col pt-4 md:pt-0 gap-2 text-sm text-black",children:[(0,a.jsxs)("div",{className:" text-xl font-semibold mb-4",children:["Welcome to myAssistant, enter your ",(0,a.jsx)("a",{className:"underline italic",href:"https://platform.openai.com/api-keys",target:"_blank",children:"OpenAI key"})," to get started"]}),(0,a.jsx)("input",{id:"name",className:"bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"sk---------------",required:!0,value:y,onChange:e=>w(e.target.value)}),(0,a.jsx)("button",{onClick:()=>""!==y&&_(),className:"bg-mySecondary hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",children:"Add OpenAI Key"})]})]})};function d(e){let{slide:t}=e,[s,n]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{let e=localStorage.getItem("openAIKey"),s=new i.ZP({apiKey:e,dangerouslyAllowBrowser:!0});n((await l(s,t)).id)})()},[t]),(0,a.jsx)("div",{className:"h-screen",children:s&&(0,a.jsx)(c,{assistantId:s,title:"CaseMate Chat: ".concat(t.name),defaultChat:t.prompt||[]})})}}},function(e){e.O(0,[672,475,971,938,744],function(){return e(e.s=9404)}),_N_E=e.O()}]);