"use strict";
//document.querySelector(".n").value;
// const H = document.querySelector(".h").value;

// var G = String(document.querySelector(".g").value);
// var W = document.querySelector(".w").value;
let msg;
const mm = function (mg) {
  document.querySelector(".msg").textContent = mg;
};
const bb = function (bm) {
  document.querySelector(".b").textContent = bm;
  // Math.round((bm + Number.EPSILON) * 100) / 100;
};
// const B = document.querySelector(".b");
document.querySelector(".ch").addEventListener("click", function () {
  const N = document.querySelector(".n").value;
  const G = String(document.querySelector(".g").value);
  const W = document.querySelector(".w").value;
  const H = document.querySelector(".h").value;

  // console.log(G);
  // console.log(H);
  // console.log(W);
  if (!H || !N || !W || G == "select") {
    alert("fill everithing");
  } else {
    let ans = (W / H / H) * 10000;

    ans = Math.round(ans * 100) / 100;
    bb(ans);
    if (G == "le") {
      if (ans < 18) {
        // console.log("a");
        msg = `${N} you are in 'under weight' your BMI should be 18 to 23`;
      } else if (ans >= 18 && ans < 23) {
        // console.log("b");
        msg = `${N} your in 'perfect 👌' maintain between 18 and 23`;
      } else {
        // console.log("c");
        msg = `${N} you are in 'under weight' your BMI should be 18 to 23`;
      }
      // console.log(ans);
      // console.log("s");
    } else {
      if (ans < 18.5) {
        // console.log("q");
        msg = `${N} your in 'under weight' your BMI should be 18.5 to 25`;
      } else if (ans > 18.4 && ans < 25) {
        // console.log("w");
        msg = `${N} you are 'perfect 👌' maintain between 18.5 and 25`;
      } else {
        // console.log("r");
        msg = `${N} you are in 'over weight' your BMI should be 18.5 to 25`;
      }

      // console.log(ans);
      // console.log("n");
    }
  }
  mm(msg);
});

document.querySelector(".reset").addEventListener("click", function () {
  //   G = "select";
  document.querySelector(".g").value = "select";
  document.querySelector(".w").value = "";
  document.querySelector(".h").value = "";
  document.querySelector(".n").value = "";
  document.querySelector(".b").textContent = "00";
  document.querySelector(".msg").textContent = "fill details";
  // console.log(G);
  //   bb(0);
});
