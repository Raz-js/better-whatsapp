/*
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

let guiBtn = document.createElement("button");
guiBtn.innerHTML = "&nbsp;";
guiBtn.id = "guiBtn";
guiBtn.style = "padding: 0; border: none; margin: auto; text-align: center; color: #42cba5";
guiBtn.onclick = function() {
    togglegui()
}
myBtn.appendChild(guiBtn);

//-----------------------

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
console.log('%cBy Raz', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; font-style: italic; border: 2px solid white; margin: 30px;');