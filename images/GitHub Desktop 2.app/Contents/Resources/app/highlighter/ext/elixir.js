self.webpackChunk(["ext/elixir"],{17:function(a,b,c){"use strict";c.r(b);var d=c(0);d.defineMode("elixir",function(a){var b=function(a){for(var b={},c=0,d=a.length;c<d;++c)b[a[c]]=!0;return b},c=b(["alias","case","cond","def","defmodule","defp","defstruct","defprotocol","defimpl","defmacro","quote","unquote","receive","fn","do","else","else if","end","false","if","in","next","rescue","for","true","unless","when","nil","raise","throw","try","catch","after","with","require","use","__MODULE__","__FILE__","__DIR__","__ENV__","__CALLER__"]),d=b(["def","defmodule","defp","case","cond","rescue","try","catch","->"]),e=b(["end"]),f={"[":"]","{":"}","(":")"},g=void 0,h=function(a,b,c){return c.tokenize.push(a),a(b,c)},i=function(a,b){if(a.sol()&&a.match("\"\"\"")&&a.eol())return b.tokenize.push(o),"comment";if(a.eatSpace())return null;var c=a.next(),d=void 0;if("'"===c||"\""===c)return h(l(c,"string","\""===c),a,b);if("/"===c){var e=a.current().length;if(a.skipTo("/")){var i=a.current().length,j=0;for(a.backUp(a.current().length-e);a.current().length<i;){var k=a.next();if("("===k?j+=1:")"===k&&(j-=1),0>j)break}if(a.backUp(a.current().length-e),0==j)return h(l(c,"string-2",!0),a,b)}return"operator"}if("%"===c){var m="string",p=!0;a.eat("s")?m="atom":a.eat(/[WQ]/)?m="string":a.eat(/[r]/)?m="string-2":a.eat(/[wxq]/)&&(m="string",p=!1);var q=a.eat(/[^\w\s=]/);return q?(f.propertyIsEnumerable(q)&&(q=f[q]),h(l(q,m,p,!0),a,b)):"operator"}if("#"===c)return a.skipToEnd(),"comment";if("<"===c&&(d=a.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return h(n(d[1]),a,b);if("0"===c)return a.eat("x")?a.eatWhile(/[\da-fA-F]/):a.eat("b")?a.eatWhile(/[01]/):a.eatWhile(/[0-7]/),"number";if(/\d/.test(c))return a.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"===c){for(;a.match(/^\\[CM]-/););return a.eat("\\")?a.eatWhile(/\w/):a.next(),"string"}return":"===c?a.eat("'")?h(l("'","atom",!1),a,b):a.eat("\"")?h(l("\"","atom",!0),a,b):a.eat(/[\<\>]/)?(a.eat(/[\<\>]/),"atom"):a.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":a.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(a.eatWhile(/[\w$\xa1-\uffff]/),a.eat(/[\?\!\=]/),"atom"):"operator":"@"===c&&a.match(/^@?[a-zA-Z_\xa1-\uffff]/)?(a.eat("@"),a.eatWhile(/[\w\xa1-\uffff]/),"variable-2"):"$"===c?(a.eat(/[a-zA-Z_]/)?a.eatWhile(/[\w]/):a.eat(/\d/)?a.eat(/\d/):a.next(),"variable-3"):/[a-zA-Z_\xa1-\uffff]/.test(c)?(a.eatWhile(/[\w\xa1-\uffff]/),a.eat(/[\?\!]/),a.eat(":")?"atom":"ident"):"|"===c&&(b.varList||"{"===b.lastTok||"do"===b.lastTok)?(g="|",null):/[\(\)\[\]{}\\;]/.test(c)?(g=c,null):"-"===c&&a.eat(">")?"arrow":"|"===c&&a.eat(">")?"pipe":/[=+\-\/*:\.^%<>~|]/.test(c)?("."!==c||a.eatWhile(/[=+\-\/*:\.^%<>~|]/)||(g="."),"operator"):null},j=function a(b){return b||(b=1),function(c,d){if("}"===c.peek()){if(1===b)return d.tokenize.pop(),d.tokenize[d.tokenize.length-1](c,d);d.tokenize[d.tokenize.length-1]=a(b-1)}else"{"===c.peek()&&(d.tokenize[d.tokenize.length-1]=a(b+1));return i(c,d)}},k=function(){var a=!1;return function(b,c){return a?(c.tokenize.pop(),c.tokenize[c.tokenize.length-1](b,c)):(a=!0,i(b,c))}},l=function(a,b,c,d){return function(e,f){var g=!1,h=void 0;for("read-quoted-paused"===f.context.type&&(f.context=f.context.prev,e.eat("}"));null!=(h=e.next());){if(h===a&&(d||!g)){f.tokenize.pop();break}if(c&&"#"===h&&!g)if(e.eat("{")){"}"===a&&(f.context={prev:f.context,type:"read-quoted-paused"}),f.tokenize.push(j());break}else if(/[@\$]/.test(e.peek())){f.tokenize.push(k());break}g=!g&&"\\"===h}return b}},n=function(a){return function(b,c){return b.match(a)?c.tokenize.pop():b.skipToEnd(),"string"}},o=function(a,b){return a.sol()&&a.match("\"\"\"")&&a.eol()&&b.tokenize.pop(),a.skipToEnd(),"comment"};return{startState:function(){return{tokenize:[i],indented:0,context:{type:"top",indented:-a.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(a,b){g=null;var f=b.tokenize[b.tokenize.length-1](a,b),h=void 0,i=g;if("ident"===f){var j=a.current();f="."===b.lastTok?"property":c.propertyIsEnumerable(a.current())?"keyword":/^[A-Z]/.test(j)?"tag":"def"===b.lastTok||"class"===b.lastTok||b.varList?"def":"variable";var k=a.column()===a.indentation();"keyword"==f&&(i=j,d.propertyIsEnumerable(j)?h="indent":e.propertyIsEnumerable(j)?h="dedent":("if"===j||"unless"===j)&&k?h="indent":"do"===j&&b.context.indented<b.indented&&(h="indent"))}return(g||f&&"comment"!==f)&&(b.lastTok=i),"|"===g&&(b.varList=!b.varList),"indent"===h||/[\(\[\{]/.test(g)?b.context={prev:b.context,type:g||f,indented:b.indented}:("dedent"==h||/[\)\]\}]/.test(g))&&b.context.prev&&(b.context=b.context.prev),a.eol()&&(b.continuedLine="\\"===g||"operator"===f),f},electricInput:/^\s*(?:end|rescue|else if|else|catch\})$/,lineComment:"#"}}),d.defineMIME("text/x-elixir","elixir")}});
//# sourceMappingURL=elixir.js.map