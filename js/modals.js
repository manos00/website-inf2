/* modal 1 */

/* define modal */
var modal = document.getElementById("modalid");

/* define button */
var btn = document.getElementById("btnid");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close1")[0];

/* function button opens modal */
btn.onclick = function () {
    modal.style.display = "block";
    modal.style.position = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* modal 2 */

/* define modal */
var modal = document.getElementById("modalid2");

/* define button */
var btn = document.getElementById("btnid2");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close2")[0];

/* function button opens modal */
btn.onclick = function () {
    modal.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* modal 3 */

/* define modal */
var modal = document.getElementById("modalid3");

/* define button */
var btn = document.getElementById("btnid3");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close3")[0];

/* function button opens modal */
btn.onclick = function () {
    modal.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
