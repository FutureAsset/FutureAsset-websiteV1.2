const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-nav');toggle?.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});mobile?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobile.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();
const pilotDialog = document.querySelector("#pilot-dialog");
const pilotCloseButton = document.querySelector(".modal-close");

function openPilotDialog() {
  if (!pilotDialog) return;

  pilotDialog.showModal();
  document.body.classList.add("modal-open");
}

function closePilotDialog() {
  if (!pilotDialog) return;

  pilotDialog.close();
  document.body.classList.remove("modal-open");
}

/*
  Opens the form from:
  - the new contact button
  - every existing link that points to #contact
*/
document.querySelectorAll('.js-open-pilot, a[href="#contact"]').forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openPilotDialog();
  });
});

pilotCloseButton?.addEventListener("click", closePilotDialog);

pilotDialog?.addEventListener("click", (event) => {
  if (event.target === pilotDialog) {
    closePilotDialog();
  }
});

pilotDialog?.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});
