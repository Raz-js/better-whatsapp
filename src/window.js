const { BrowserWindow, shell } = require('electron');
const path = require('path');

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

function loadWhatsApp() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../assets/512x512.png'),
    webPreferences: { 
      // devTools: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  window.setMenuBarVisibility(false);

  window.on('close', (event) => { 
    event.preventDefault();
    window.hide();
  });

  window.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
  });

  window.loadURL('https://web.whatsapp.com/', { userAgent });

  setTimeout(() => {
    window.webContents.executeJavaScript(`const { BrowserWindow, shell } = require('electron');
const path = require('path');

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

function loadWhatsApp() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../assets/512x512.png'),
    webPreferences: { 
      // devTools: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  window.setMenuBarVisibility(false);

  window.on('close', (event) => { 
    event.preventDefault();
    window.hide();
  });

  window.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
  });

  window.loadURL('https://web.whatsapp.com/', { userAgent });

  setTimeout(() => {
    window.webContents.executeJavaScript(`/*
Whatsapp Spammer
By Raz
(Paste In Console To Run)
For "web.whatsapp.com"
*/

//Custom-Error
if (window.location.href.search("web.whatsapp.com") == -1) {
    throw new Error("You ain't in whatsapp bro, if this isn't correct go to our support server! discord.gg/f83SxgJdAb");
}

//Already-Injected
if (window.TKInjected && !window.TKInjectedDebug) {
    throw new Error("Already ran Whatsapp Toolkit! Advanced: Set !Window.TKInjectedDebug to bypass this.");
}
window.TKInjected = true

//Const-Echo
var echo = (function() {

    var queue = [];
    var ECHO_TOKEN = {};
    var RESET_INPUT = "%c ";
    var RESET_CSS = "";

    // Attach formatting utility method.
    function successFormatting(value) {

        queue.push({
            value: value,
            css: "display: inline-block ; background-color: #222e35 ; color: #3aaf90 ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
        });

        return (ECHO_TOKEN);

    }

    // Attach formatting utility method.
    function warningFormatting(value) {

        queue.push({
            value: value,
            css: "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
        });

        return (ECHO_TOKEN);

    }

    // I provide an echo-based proxy to the given Console Function. This uses an
    // internal queue to aggregate values before calling the given Console
    // Function with the desired formatting.
    function using(consoleFunction) {

        function consoleFunctionProxy() {

            // As we loop over the arguments, we're going to aggregate a set of
            // inputs and modifiers. The Inputs will ultimately be collapsed down
            // into a single string that acts as the first console.log parameter
            // while the modifiers are then SPREAD into console.log as 2...N.
            // --
            // NOTE: After each input/modifier pair, I'm adding a RESET pairing.
            // This implicitly resets the CSS after every formatted pairing.
            var inputs = [];
            var modifiers = [];

            for (var i = 0; i < arguments.length; i++) {

                // When the formatting utility methods are called, they return
                // a special token. This indicates that we should pull the
                // corresponding value out of the QUEUE instead of trying to
                // output the given argument directly.
                if (arguments[i] === ECHO_TOKEN) {

                    var item = queue.shift();

                    inputs.push(("%c" + item.value), RESET_INPUT);
                    modifiers.push(item.css, RESET_CSS);

                    // For every other argument type, output the value directly.
                } else {

                    var arg = arguments[i];

                    if (
                        (typeof(arg) === "object") ||
                        (typeof(arg) === "function")
                    ) {

                        inputs.push("%o", RESET_INPUT);
                        modifiers.push(arg, RESET_CSS);

                    } else {

                        inputs.push(("%c" + arg), RESET_INPUT);
                        modifiers.push(RESET_CSS, RESET_CSS);

                    }

                }

            }

            consoleFunction(inputs.join(""), ...modifiers);

            // Once we output the aggregated value, reset the queue. This should have
            // already been emptied by the .shift() calls; but the explicit reset
            // here acts as both a marker of intention as well as a fail-safe.
            queue = [];

        }

        return (consoleFunctionProxy);

    }

    return ({
        // Console(ish) functions.
        log: using(console.log),
        warn: using(console.warn),
        error: using(console.error),
        trace: using(console.trace),
        group: using(console.group),
        groupEnd: using(console.groupEnd),

        // Formatting functions.
        asSuccess: successFormatting,
        asWarning: warningFormatting
    });

})();

//Theme-Const
const injectTKCss = (id, css) => {
    const style = document.createElement("style")
    style.setAttribute(`css`, id)
    style.innerHTML = css
    document.head.appendChild(style)
}

const ejectTKCss = (id) => {
    const style = document.querySelector(`style[css="${id}"]`)
    if (style) style.remove()
}
//End

//Toast-InnerHTML
injectTKCss("toasts-css", `.dt-toast { 
  display: inline-flex; 
  box-sizing: border-box; 
  border-radius: 3px; 
  color: var(--text-normal); 
  font-size: 16px; 
  background-color: #040b03; 
  vertical-align: bottom; 
  box-shadow: var(--elevation-low); 
  margin: 0 10px 0 auto; 
  flex-grow: 1; 
  opacity: 1; 
  transition: opacity 0.3s ease-in-out; 
  width: fit-content; 
} 
.dt-toast.adding { 
  opacity: 0 
} 
.dt-toast.removing { 
  opacity: 0 
} 
.dt-toast:not(:last-child) { 
  margin-bottom: 5px 
} 
.dt-toast-container { 
  position: absolute; 
  bottom: 0; 
  right: 0; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-end; 
  max-width: 100%; 
  z-index: 999; 
  overflow: hidden; 
} 
.dt-toast-wrapper { 
  overflow: hidden; 
  height: auto; 
  margin: 0; 
  border-radius: 3px; 
  display: flex; 
  flex-direction: column; 
  min-width: auto; 
  transition-property: all; 
  transition-timing-function: ease; 
  transition-duration: 0.5s; 
} 
.dt-toast-type { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  min-width: 18px; 
  margin-right: 5px; 
  border-radius: 3px 0 0 3px; 
  background-color: transparent; 
  position: relative; 
} 
.dt-toast-type::after { 
  content: ""; 
  position: absolute; 
  background-color: #040b03; 
  width: 6px; 
  border-radius: 6px; 
  height: 100%; 
  right: -3px; 
} 
.dt-toast-type.success { 
  background-color: #0f6509; 
} 
.dt-toast-type.error { 
  background-color: var(--info-danger-foreground); 
} 
.dt-toast-type.info { 
  background-color: var(--brand-experiment); 
} 
.dt-toast-type.warning { 
  background-color: var(--info-warning-foreground); 
} 
.dt-toast-message { 
  display: inline-block; 
  user-select: text; 
} 
.dt-toast-message-wrapper { 
  flex: 1; 
  padding: 12px 6px 12px 3px; 
  position: relative; 
} 
.dt-toast-close { 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  padding: 2px 10px 0; 
  user-select: none; 
  color: var(--interactive-normal); 
  position: relative; 
  font-size: 14px; 
} 
.dt-toast-close:hover { 
  color: var(--interactive-hover); 
  background: linear-gradient(90deg, rgba(1,255,0,0) 0%, rgba(39,180,29,1) 40%);
}`)

//Toast-Container
const toastContainer = document.createElement("div");
toastContainer.className = "dt-toast-container";
document.body.appendChild(toastContainer);
const toastWrapper = document.createElement("div");
toastWrapper.className = "dt-toast-wrapper";
toastWrapper.style.marginBottom = "5px";
toastContainer.appendChild(toastWrapper);

function Timer(callback, delay) {
    let timerId, start, remaining = delay;
    const pause = function() {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };
    const resume = function() {
        if (timerId)
            return;
        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };
    resume();
    return {
        pause,
        resume
    };
}

//Toast-Const
function ls8sdajw8asjdia(text, options = {}) {
    const {
        type = "success", duration = 3000, autoClose = true, closeButton = true
    } = options;
    if (!autoClose && !closeButton)
        throw new Error("You can't have autoClose and closeButton disabled");
    const toast = document.createElement("div");
    toast.className = "dt-toast adding";
    setTimeout(() => toast.classList.remove("adding"), 300);
    toastWrapper.appendChild(toast);
    const toastType = document.createElement("span");
    toastType.className = `dt-toast-type ${type.toLowerCase()}`;
    toast.appendChild(toastType);
    const toastMessageWrapper = document.createElement("div");
    toastMessageWrapper.className = "dt-toast-message-wrapper";
    toast.appendChild(toastMessageWrapper);
    const toastMessage = document.createElement("span");
    toastMessage.className = "dt-toast-message";
    toastMessage.innerText = text;
    toastMessageWrapper.appendChild(toastMessage);

    function removeToast() {
        toast.classList.add("removing");
        setTimeout(() => toast.remove(), 300);
    }
    if (closeButton) {
        const toastClose = document.createElement("span");
        toastClose.className = "dt-toast-close";
        toastClose.innerText = "✕";
        toastClose.onclick = removeToast;
        toast.appendChild(toastClose);
    }
    const dur = Timer(() => autoClose && removeToast(), duration);
    toast.onmouseenter = dur.pause;
    toast.onmouseleave = dur.resume;
    return toast;
}

//SendMessage Const
function sendTKMsg(text){
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if(!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, text)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}

//Main-Button
var myBtn = document.getElementById("side");
let tkBtn = document.createElement("button");
tkBtn.innerHTML = "Spam";
tkBtn.className = "tkBtn";
tkBtn.id = "tkBtn";
tkBtn.style = "background-color: #111b21; padding: 0; border: none; margin: auto; text-align: center; color: #42cba5";
tkBtn.onclick = function() {
    other()
}
myBtn.appendChild(tkBtn);

//Second-Btn
var spammer = document.createElement("input");
spammer.type = "text";
spammer.id = "TKuserInput";
spammer.style = "background-color: #222e35; padding: 0; border: none; margin: auto; text-align: center; color: #42cba5; outline: none;";
spammer.value = "Put Text To Spam Here!"
myBtn.appendChild(spammer);

function other() {
    var msg = document.getElementById("TKuserInput").value;
    sendTKMsg(msg)
}

//Tab
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

//--------------------------------------Extra-Plugins----------------------------------------
var plugin1Toggle = "Toggle Blur"

function plugin1() {
    ls8sdajw8asjdia(plugin1Toggle)
    if (document.getElementById("plugin1").value == "OFF") {
        document.getElementById("plugin1").value = "ON";
        injectTKCss("Blur", `._3GlyB /*profile pic*/
{
  filter: blur(7px) grayscale(1);
  transition-delay: 0s;
}
._3yg5l /*Details group/self profile pic*/
{
  filter: blur(12px) grayscale(1);
  transition-delay: 0s;
}
._3GlyB:hover /*profile pic*/,
._3yg5l:hover /*Details group/self profile pic*/
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}
.zoWT4 /*List user/group name*/,
._21nHd /*Top user/group name*/,
.zzgSd /*Top group user preview*/,
._3WYXy /*Details username*/,
._1ux8Y /*Details username ~nickname*/,
._2PElp /*Starred messages username*/,
.czcZD /*Details group name*/,
.selectable-text ._3NUK1 /*About user phone number*/,
._37FrU /*Message in chat*/
{
  filter: blur(5px) grayscale(1);
  transition-delay: 0s;
}
.zoWT4:hover /*List user/group name*/,
._21nHd:hover /*Top user/group name*/,
.zzgSd:hover /*Top group user preview*/,
._3WYXy:hover /*Details username*/,
._1ux8Y:hover /*Details username ~nickname*/,
._2PElp:hover /*Starred messages username*/,
.czcZD:hover /*Details group name*/,
.selectable-text ._3NUK1:hover /*About user phone number*/,
._37FrU:hover /*Message in chat*/
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}`)
    } else {
        document.getElementById("plugin1").value = "OFF";
        ejectTKCss("Blur")
    }
}
//Plugin2 (spammer)
function confusion() {
    setTimeout(other, 2000);
    setTimeout(other, 4000);
    setTimeout(other, 6000);
    setTimeout(other, 8000);
    setTimeout(other, 10000);
}
var plugin2Toggle = "Mass-Spammer"

function plugin2() {
    ls8sdajw8asjdia(plugin2Toggle)
    confusion()
}
//-------------------------------------------------------------Edit
var plugin3Toggle = "Make Your Own Function!"

function plugin3() {
    ls8sdajw8asjdia(plugin3Toggle)
    if (document.getElementById("plugin3").value == "OFF") {
        document.getElementById("plugin3").value = "ON";
        //urfunc
    } else {
        document.getElementById("plugin3").value = "OFF";
        //removeurfunc
    }
}
//-------------------------------------------------------------------------------------------


var UI = document.createElement("div");
UI.innerHTML = `
	<div id="MenuCtrl" class="MenuCtrl" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Whatsapp Toolkit By Raz</center></h1>
<head>
<style>
html, body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000000;
}
.MenuCtrl {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
  border-radius: var(--borderWidth);
}
.MenuCtrl:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #36393e, #1e2124, #282b30);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  color: black; 
  background-color:#436036;
}
.button:hover {
  background-color:#abb4ff;
}
.button:active {
  box-shadow: 0 2px #666;
  transform: translateY(2px);
  background-color: #7d8bfa;
}
</style>
</head>
		<br>
		<button id="plugin1" class="button" value="OFF";></button>
		<br>
		<br>
		<button id="plugin2" class="button" value="OFF";"></button>
		<br>
		<br>
		<button id="plugin3" class="button" value="OFF";"></button>
		<br>
		<br>
	</div>`

dragElement(UI.firstElementChild);
document.body.appendChild(UI);

//TextButtons
var p1Inner = document.createElement("span");
var p1 = document.getElementById("plugin1");

p1Inner.innerHTML = plugin1Toggle
p1.appendChild(p1Inner);

var p2Inner = document.createElement("span");
var p2 = document.getElementById("plugin2");

p2Inner.innerHTML = plugin2Toggle
p2.appendChild(p2Inner);

var p3Inner = document.createElement("span");
var p3 = document.getElementById("plugin3");

p3Inner.innerHTML = plugin3Toggle
p3.appendChild(p3Inner);


function togglegui() {
    var box = document.getElementById("MenuCtrl");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

let guiBtn = document.createElement("button");
guiBtn.innerHTML = "• • • &nbsp;";
guiBtn.id = "guiBtn";
guiBtn.style = "padding: 0; border: none; margin: auto; text-align: center; color: #42cba5";
guiBtn.onclick = function() {
    togglegui()
}
myBtn.appendChild(guiBtn);

//-----------------------
let DataList = document.createElement("div");
DataList.innerHTML = `<div></div><div id="Texto1" class="custom">&nbsp;&nbsp;&nbsp;WA Toolkit By Raz&nbsp;&nbsp;&nbsp;</div></div><style>.custom { text-align: center; color: rgb(0 149 136); } .ByRaz { margin: 4px }</style>`
DataList.className = "ByRaz"
document.getElementsByClassName("uwk68")[0].appendChild(DataList);
//-----------------------

//showToast
ls8sdajw8asjdia("Injected Whatsapp Toolkit By Raz <3")

//GetPlugins
document.getElementById('plugin1').onclick = plugin1;
document.getElementById('plugin2').onclick = plugin2;
document.getElementById('plugin3').onclick = plugin3;

//Creds
injectTKCss("Creds", `custom {
color:
}`)

//After-Inject
let title_el = document.querySelector("title");
if (title_el)
    title_el.innerHTML = "[Injected] Whatsapp Toolkit";
togglegui()
if (clear) clear()
else console.clear()
echo.log(echo.asSuccess("[Injected] Whatsapp Toolkit"))
console.log('%cBy Raz', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; font-style: italic; border: 2px solid white; margin: 30px;');`);
  }, 30000);

  return window;
}

module.exports = { loadWhatsApp };
`);
  }, 30000);

  return window;
}

module.exports = { loadWhatsApp };
