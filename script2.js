const urlParams = new URLSearchParams(window.location.search);
const numbercorrectss = urlParams.get("numbercorrects");
const numberwrongss = urlParams.get("numberwrongs");

document.getElementById("numbercorrects3").textContent = numbercorrectss;
document.getElementById("numberwrongs3").textContent = numberwrongss;
