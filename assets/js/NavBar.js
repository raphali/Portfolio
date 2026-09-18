const project = document.getElementById('wdw-project');
const contact = document.getElementById('wdw-contact');
const stacks = document.getElementById('wdw-stacks');
const profil =document.getElementById('wdw-profil');

function OpenAndCloseContact(){
    const openbtn = document.getElementById('btn-contact');
    const closebtn = document.getElementById('close-btn');
    const span = document.querySelector('.navbarcontainer__navbar__btn-nav__contact-span');

    openbtn.addEventListener('click', function(){
        contact.style.display = 'flex';
        contact.style.filter = 'brightness(100%)';
        project.style.filter = 'brightness(70%)';
        stacks.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        span.style.display = 'block';
        contact.style.zIndex='2';
        if (project.style.zIndex=="2") {
            project.style.zIndex="1";
            profil.style.zIndex="0";
        }else if(profil.style.zIndex=="2" && project.style.zIndex!=="-1"){
            project.style.zIndex="0";
            profil.style.zIndex="1";
        }

        if (stacks.style.zIndex=="2") {
            stacks.style.zIndex="1";
            profil.style.zIndex="0";
        }else if(profil.style.zIndex=="2"){
            stacks.style.zIndex="0";
            profil.style.zIndex="1";
        }
    });

    closebtn.addEventListener('click', function(){
        contact.style.display = 'none';
        span.style.display = 'none';
        if (project.style.zIndex=="1") {
            project.style.zIndex="2";
            project.style.filter = 'brightness(100%)';
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            project.style.zIndex="1";
        }

        if (stacks.style.zIndex=="1") {
            stacks.style.zIndex="2";
            stacks.style.filter = 'brightness(100%)';
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            stacks.style.zIndex="1";
        }
    });
}

function OpenAndCloseProject() {
    const openbtn = document.getElementById('btn-project');
    const secondopenbtn = document.getElementById('s-project-line');
    const closebtn = document.getElementById('project-close-btn');
    const span = document.querySelector('.navbarcontainer__navbar__btn-nav__project-span');
    const spanStacks = document.querySelector('.navbarcontainer__navbar__btn-nav__stacks-span');


    openbtn.addEventListener('click', function(){
        project.style.display = 'flex';
        stacks.style.display = 'none';
        spanStacks.style.display = 'none';
        project.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        span.style.display = 'block';
        project.style.zIndex='2';
        if (contact.style.zIndex=="2") {
            contact.style.zIndex="1";
            profil.style.zIndex="0";
        }else if (profil.style.zIndex=="2"){
            contact.style.zIndex="0";
            profil.style.zIndex="1";
        }
    });

    secondopenbtn.addEventListener('click', function(){
        project.style.display = 'flex';
        stacks.style.display = 'none';
        spanStacks.style.display = 'none';
        project.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        span.style.display = 'block';
        project.style.zIndex='2';
        if (contact.style.zIndex=="2") {
            contact.style.zIndex="1";
            profil.style.zIndex="0";
        }else if (profil.style.zIndex=="2"){
            contact.style.zIndex="0";
            profil.style.zIndex="1";
        }
    });

    closebtn.addEventListener('click', function(){
        project.style.display='none';
        span.style.display = 'none';
        if (contact.style.zIndex=="1") {
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            contact.style.zIndex="1";
        }
    });
    
}

function OpenAndCloseStacks() {
    const openbtn = document.getElementById('btn-stacks');
    const secondopenbtn = document.getElementById('p-stacks-line');
    const span = document.querySelector('.navbarcontainer__navbar__btn-nav__stacks-span');
    const spanProject = document.querySelector('.navbarcontainer__navbar__btn-nav__project-span');
    const closebtn = document.getElementById('stacks-close-btn');

    openbtn.addEventListener('click', function(){
        stacks.style.display = 'flex';
        span.style.display = 'block';
        project.style.display = 'none';
        stacks.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        spanProject.style.display = 'none';
        stacks.style.zIndex = '2';
        project.style.zIndex = '-1';
        if (contact.style.zIndex=="2") {
            contact.style.zIndex="1";
            profil.style.zIndex="0";
        }else if (profil.style.zIndex=="2"){
            contact.style.zIndex="0";
            profil.style.zIndex="1";
        }
    })

    secondopenbtn.addEventListener('click', function(){
        stacks.style.display = 'flex';
        span.style.display = 'block';
        project.style.display = 'none';
        stacks.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        spanProject.style.display = 'none';
        stacks.style.zIndex = '2';
        project.style.zIndex = '-1';
        if (contact.style.zIndex=="2") {
            contact.style.zIndex="1";
            profil.style.zIndex="0";
        }else if (profil.style.zIndex=="2"){
            contact.style.zIndex="0";
            profil.style.zIndex="1";
        }
    })

    closebtn.addEventListener('click', function(){
        stacks.style.display='none';
        span.style.display = 'none';
        if (contact.style.zIndex=="1") {
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            contact.style.zIndex="1";
        }
    })
}

function OpenAndCloseProfil() {
    const openbtn = document.getElementById('btn-profil');
    const span = document.querySelector('.navbarcontainer__navbar__btn-nav__profil-span');
    const closebtn = document.getElementById('profil-close-btn');

    openbtn.addEventListener('click', function(){
        profil.style.display = 'flex';
        profil.style.filter = 'brightness(100%)';
        project.style.filter = 'brightness(70%)';
        stacks.style.filter = 'brightness(70%)';
        contact.style.filter = 'brightness(70%)';
        span.style.display = 'block';
        profil.style.zIndex = '2';
        if (project.style.zIndex=="2") {
            project.style.zIndex="1";
            contact.style.zIndex="0";
        }else if(contact.style.zIndex=="2" && project.style.zIndex!=="-1"){
            project.style.zIndex="0";
            contact.style.zIndex="1";
        };

        if (stacks.style.zIndex=="2") {
            stacks.style.zIndex="1";
            contact.style.zIndex="0";
        }else if(contact.style.zIndex=="2"){
            stacks.style.zIndex="0";
            contact.style.zIndex="1";
        };
    });

    closebtn.addEventListener('click', function(){
        profil.style.display='none';
        span.style.display='none';
        if (project.style.zIndex=="1") {
            project.style.zIndex="2";
            project.style.filter = 'brightness(100%)';
            contact.style.zIndex="1";
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            project.style.zIndex="1";
        }

        if (stacks.style.zIndex=="1") {
            stacks.style.zIndex="2";
            stacks.style.filter = 'brightness(100%)';
            contact.style.zIndex="1";
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            stacks.style.zIndex="1";
        }
    });
}

function CloseRecoPage() {
    const recopage = document.getElementById('reco-container');
    const bouton = document.getElementById('close-reco-btn');

    bouton.addEventListener('click', function(){
        recopage.style.display='none';
    });
}

OpenAndCloseContact();
OpenAndCloseProject();
OpenAndCloseStacks();
OpenAndCloseProfil();
CloseRecoPage();