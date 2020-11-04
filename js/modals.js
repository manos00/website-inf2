/* modal 1 */

/* define modal */
var modal1 = document.getElementById("modalid");

/* define button */
var btn = document.getElementById("btnid");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close1")[0];

/* function button opens modal */
btn.onclick = function () {
    modal1.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal1.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/* modal 2 */

/* define modal */
var modal2 = document.getElementById("modalid2");

/* define button */
var btn = document.getElementById("btnid2");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close2")[0];

/* function button opens modal */
btn.onclick = function () {
    modal2.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal2.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

/* modal 3 */

/* define modal */
var modal3 = document.getElementById("modalid3");

/* define button */
var btn = document.getElementById("btnid3");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close3")[0];

/* function button opens modal */
btn.onclick = function () {
    modal3.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal3.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

/* modal 4 */

/* define modal */
var modal4 = document.getElementById("modalid4");

/* define button */
var btn = document.getElementById("btnid4");

/* define <span> element that closes modal */
var span = document.getElementsByClassName("close4")[0];

/* function button opens modal */
btn.onclick = function () {
    modal4.style.display = "block";
}

/* on click of <span> (x) modal closes */
span.onclick = function () {
    modal4.style.display = "none";
}

/* modal closes if clicked anywhere outside of modal */
window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
