function CloseRecoPage() {
    const recopage = document.getElementById('reco-container');
    const bouton = document.getElementById('close-reco-btn');

    bouton.addEventListener('click', function(){
        recopage.style.display='none';
    });
}

CloseRecoPage();