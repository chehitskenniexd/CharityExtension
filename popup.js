// $(document).ready(function () {
//   $('body').on('click', 'a', function () {
//     console.log('hi!');
//     chrome.tabs.create({ url: $(this).attr('href') });
//     return false;
//   });
// });

function openBloodTab() {
  chrome.tabs.create({url: document.getElementById("blood_button").attributes[1].textContent});
}
function openDonateTab() {
  chrome.tabs.create({url: document.getElementById("money_button").attributes[1].textContent});
}

document.getElementById("blood_button").addEventListener("click", openBloodTab);
document.getElementById("money_button").addEventListener("click", openDonateTab);
