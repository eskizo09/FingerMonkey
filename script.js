// Configuración
const CONTRACT_ADDRESS = '0x60Dd286B42f704aB9B89bf34D53DF39Fb89150E6';
const DONATION_ADDRESS = '0x367bea4d6dc8d708dfb6be42f9415fb19869bd03';
const BUY_URL = 'https://pulsex.mypinata.cloud/ipfs/bafybeiajyhfbf6evh4mdabassmbtsy73ci2gmcgh4ffmjkrgsea35vqxba/#/?inputCurrency=0xA1077a294dDE1B09bB078844df40758a5D0f9a27&outputCurrency=0x60Dd286B42f704aB9B89bf34D53DF39Fb89150E6';

// Elementos
const copyBtn = document.getElementById('copyBtn');
const contractEl = document.getElementById('contractAddress');
const donateCopy = document.getElementById('donateCopy');
const donationEl = document.getElementById('donationAddr');
const buyBtn = document.getElementById('buyBtn');
const copyBtnStory = document.getElementById('copyBtnStory');
const contractElStory = document.getElementById('contractAddressStory');

contractEl.textContent = CONTRACT_ADDRESS;
donationEl.textContent = DONATION_ADDRESS;
contractElStory.textContent = CONTRACT_ADDRESS;

// Función copiar
async function copyToClipboard(text, triggerBtn){
  try{
    await navigator.clipboard.writeText(text);
    const original = triggerBtn.textContent;
    triggerBtn.textContent = 'Copied!';
    setTimeout(()=> triggerBtn.textContent = original, 1500);
  }catch{
    alert('Copy not supported');
  }
}

copyBtn.addEventListener('click', ()=> copyToClipboard(CONTRACT_ADDRESS, copyBtn));
donateCopy.addEventListener('click', ()=> copyToClipboard(DONATION_ADDRESS, donateCopy));
copyBtnStory.addEventListener('click', ()=> copyToClipboard(CONTRACT_ADDRESS, copyBtnStory));

// Botón de compra
buyBtn.addEventListener('click', ()=> {
  window.open(BUY_URL, '_blank');
});
