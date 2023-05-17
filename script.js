$(document).ready(function () {
  $("#marks-form").validate({
    rules: {
      Physics: {
        required: true,
      },
    },
  });
});
function getValue() {
  selectElement = document.querySelector("#Physics");
  Physics = selectElement.value;
  console.log("Physics " + Physics);

  selectElement = document.querySelector("#Mechanics");
  Mechanics = selectElement.value;
  console.log("Mechanics " + Mechanics);

  selectElement = document.querySelector("#BEEBEL");
  BEEBEL = selectElement.value;
  console.log("BEEBEL " + BEEBEL);

  selectElement = document.querySelector("#PhyLab");
  PhyLab = selectElement.value;
  console.log("PhyLab " + PhyLab);

  selectElement = document.querySelector("#BelBeeLab");
  BelBeeLab = selectElement.value;
  console.log("BelBeeLab " + BelBeeLab);

  selectElement = document.querySelector("#Maths");
  Maths = selectElement.value;
  console.log("Maths " + Maths);

  selectElement = document.querySelector("#PC");
  PC = selectElement.value;
  console.log("PC " + PC);

  selectElement = document.querySelector("#CP");
  CP = selectElement.value;
  console.log("CP " + CP);
}

function display() {
  var result =
    Physics * 4 +
    Mechanics * 3 +
    BEEBEL * 4 +
    PhyLab * 1 +
    BelBeeLab * 1 +
    Maths * 4 +
    CP * 4;
  console.log("Your SGPA is: " + result / 21);
}
