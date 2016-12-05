/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var net=require("net"),fs=require("fs"),stream=require("stream"),util=require("util"),ENABLE_LOGGING=!1,log=function(){if(!ENABLE_LOGGING)return function(){};var e=!0,r="C:\\stdFork.log";return function(n){return e?(e=!1,void fs.writeFileSync(r,n+"\n")):void fs.appendFileSync(r,n+"\n")}}(),stdInPipeName=process.env.STDIN_PIPE_NAME,stdOutPipeName=process.env.STDOUT_PIPE_NAME,stdErrPipeName=process.env.STDERR_PIPE_NAME;log("STDIN_PIPE_NAME: "+stdInPipeName),log("STDOUT_PIPE_NAME: "+stdOutPipeName),log("STDERR_PIPE_NAME: "+stdErrPipeName),log("ELECTRON_RUN_AS_NODE: "+process.env.ELECTRON_RUN_AS_NODE),function(){log("Beginning stdout redirection...");var e=net.connect(stdOutPipeName);e.unref(),process.__defineGetter__("stdout",function(){return e});var r=net.connect(stdErrPipeName);r.unref(),process.__defineGetter__("stderr",function(){return r});var n=function(e,r,n,s){var o=new Buffer(r,s||"utf8");return t(e,o,0,o.length)},t=function(n,t,s,o,i){s=Math.abs(0|s),o=Math.abs(0|o);var f=t.length;if(s>f)throw new Error("offset out of bounds");if(o>f)throw new Error("length out of bounds");if((s+o|0)<s)throw new Error("off + len overflow");if(f-s<o)throw new Error("off + len > buffer.length");var l=t;return 0===s&&o===f||(l=t.slice(s,s+o)),1===n?e.write(l):r.write(l),l.length},s=fs.writeSync;fs.writeSync=function(e,r,o,i){return 1!==e&&2!==e?s.apply(fs,arguments):r instanceof Buffer?t.apply(null,arguments):("string"!=typeof r&&(r+=""),n.apply(null,arguments))},log("Finished defining process.stdout, process.stderr and fs.writeSync")}(),function(){var e=net.createServer(function(r){e.close(),log("Parent process has connected to my stdin. All should be good now."),process.__defineGetter__("stdin",function(){return r}),process.argv.splice(1,1);var n=process.argv[1];log("Loading program: "+n),delete process.env.STDIN_PIPE_NAME,delete process.env.STDOUT_PIPE_NAME,delete process.env.STDERR_PIPE_NAME,delete process.env.ELECTRON_RUN_AS_NODE,require(n),log("Finished loading program.");var t=!0,s=setInterval(function(){var e=r.listeners("data").length+r.listeners("end").length+r.listeners("close").length+r.listeners("error").length;e<=1?t&&(t=!1,r.unref()):t||(t=!0,r.ref())},1e3);s.unref()});e.listen(stdInPipeName,function(){process.stdout.write("ready")})}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7ba55c5860b152d999dda59393ca3ebeb1b5c85f/core/vs\base\node\stdForkStart.js.map
