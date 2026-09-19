const project = document.getElementById('wdw-project');
const contact = document.getElementById('wdw-contact');
const stacks = document.getElementById('wdw-stacks');
const profil =document.getElementById('wdw-profil');
const profil_file=document.getElementById('wdw-profil-file');
const folder_nav=document.getElementById('folder-nav');
const spanStack = document.querySelector('.navbarcontainer__navbar__btn-nav__stacks-span');
const spanProject = document.querySelector('.navbarcontainer__navbar__btn-nav__project-span');
const spanContact = document.querySelector('.navbarcontainer__navbar__btn-nav__contact-span');
const spanProfil = document.querySelector('.navbarcontainer__navbar__btn-nav__profil-span');
const folderstackwdw=document.getElementById('pf-stacks-line');
const folderprojectwdw=document.getElementById('pf-project-line');
const folderprofilwdw=document.getElementById('pf-document-line');

function OpenAndCloseContact(){
    const openbtn = document.getElementById('btn-contact');
    const closebtn = document.getElementById('close-btn');
    const text = document.getElementById('navp-contact');

    openbtn.addEventListener('click', function(){
        contact.style.display = 'flex';
        contact.style.filter = 'brightness(100%)';
        project.style.filter = 'brightness(70%)';
        stacks.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        folder_nav.style.filter = "brightness(70%)";
        spanContact.style.display = 'block';
        contact.style.zIndex='2';
        if (project.style.zIndex=="2") {
            project.style.zIndex="1";
            folder_nav.style.zIndex='1';
            profil.style.zIndex="0";
        }else if(profil.style.zIndex=="2" && project.style.zIndex!=="-1"){
            project.style.zIndex="0";
            folder_nav.style.zIndex='0';
            profil.style.zIndex="1";
        }

        if (stacks.style.zIndex=="2") {
            stacks.style.zIndex="1";
            folder_nav.style.zIndex='1';
            profil.style.zIndex="0";
        }else if(profil.style.zIndex=="2"){
            stacks.style.zIndex="0";
            folder_nav.style.zIndex='0';
            profil.style.zIndex="1";
        }

        if (profil_file.style.zIndex=="2") {
            profil_file.style.zIndex="1";
            folder_nav.style.zIndex='1';
            profil.style.zIndex="0";
        }else if(profil.style.zIndex=="2"){
            profil_file.style.zIndex="0";
            folder_nav.style.zIndex='0';
            profil.style.zIndex="1";
        }
    });

    closebtn.addEventListener('click', function(){
        contact.style.display = 'none';
        spanContact.style.display = 'none';
        if (project.style.zIndex=="1") {
            project.style.zIndex="2";
            project.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            project.style.zIndex="1";
        }

        if (stacks.style.zIndex=="1") {
            stacks.style.zIndex="2";
            stacks.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            profil.style.zIndex="1";
        }else{
            profil.style.zIndex="2";
            profil.style.filter = 'brightness(100%)';
            stacks.style.zIndex="1";
        }

        if (profil_file.style.zIndex=='1') {
            profil_file.style.zIndex='2';
            folder_nav.style.zIndex='3';
            profil_file.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            contact.style.zIndex='1';
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            profil_file.style.zIndex='1';
        }
    });
    openbtn.addEventListener("mouseover", function() {
        text.style.display = "block";
    });
    openbtn.addEventListener("mouseout", function() {
        text.style.display = "none";
    });
}

function OpenAndCloseProject() {
    const openbtn = document.getElementById('btn-project');
    const secondopenbtn = document.querySelector('.project-nav-folder');
    const closebtn = document.getElementById('project-close-btn');
    const text = document.getElementById('navp-project');

    openbtn.addEventListener('click', function(){
        project.style.display = 'flex';
        folder_nav.style.display = 'flex';
        folderprojectwdw.style.backgroundColor='#444447';
        folderprofilwdw.style.backgroundColor='';
        folderstackwdw.style.backgroundColor='';
        stacks.style.display = 'none';
        profil_file.style.display='none';
        spanStack.style.display = 'none';
        project.style.filter = 'brightness(100%)';
        folder_nav.style.filter='brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        spanProject.style.display = 'block';
        project.style.zIndex='2';
        folder_nav.style.zIndex='3';
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
        profil_file.style.display='none';
        spanStack.style.display = 'none';
        folderprojectwdw.style.backgroundColor='#444447';
        folderprofilwdw.style.backgroundColor='';
        folderstackwdw.style.backgroundColor='';
        project.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        spanProject.style.display = 'block';
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
        spanProject.style.display = 'none';
        folder_nav.style.display ='none';
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

    openbtn.addEventListener("mouseover", function() {
        text.style.display = "block";
    });
    openbtn.addEventListener("mouseout", function() {
        text.style.display = "none";
    });
}

function OpenAndCloseStacks() {
    const openbtn = document.getElementById('btn-stacks');
    const secondopenbtn = document.querySelector('.stack-nav-folder');
    const closebtn = document.getElementById('stacks-close-btn');
    const text = document.getElementById('navp-stacks');

    openbtn.addEventListener('click', function(){
        stacks.style.display = 'flex';
        spanStack.style.display = 'block';
        project.style.display = 'none';
        profil_file.style.display='none';
        folder_nav.style.display = 'flex';
        folderstackwdw.style.backgroundColor='#444447';
        folderprofilwdw.style.backgroundColor='';
        folderprojectwdw.style.backgroundColor='';
        stacks.style.filter = 'brightness(100%)';
        folder_nav.style.filter='brightness(100%)';
        contact.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(70%)';
        spanProject.style.display = 'none';
        stacks.style.zIndex = '2';
        folder_nav.style.zIndex='3';
        project.style.zIndex = '-1';
        if (contact.style.zIndex=="2") {
            contact.style.zIndex="1";
            profil.style.zIndex="0";
        }else if (profil.style.zIndex=="2"){
            contact.style.zIndex="0";
            profil.style.zIndex="1";
        }
    });

    secondopenbtn.addEventListener('click', function(){
        stacks.style.display = 'flex';
        spanStack.style.display = 'block';
        project.style.display = 'none';
        profil_file.style.display='none';
        folderstackwdw.style.backgroundColor='#444447';
        folderprofilwdw.style.backgroundColor='';
        folderprojectwdw.style.backgroundColor='';
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
    });

    closebtn.addEventListener('click', function(){
        stacks.style.display='none';
        spanStack.style.display = 'none';
        folder_nav.style.display = 'none';
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

    openbtn.addEventListener("mouseover", function() {
        text.style.display = "block";
    });
    openbtn.addEventListener("mouseout", function() {
        text.style.display = "none";
    });
}

function OpenAndCloseProfil() {
    const openbtn = document.getElementById('btn-profil');
    const secondopenfirstpart = document.querySelector('.document-nav-file');
    const secondopensecondpart = document.getElementById('profil-txt-file');
    const closebtn = document.getElementById('profil-close-btn');
    const text = document.getElementById('navp-profil');
    const secondclosebtn = document.getElementById('profil-file-close-btn');

    openbtn.addEventListener('click', function(){
        profil.style.display = 'flex';
        profil.style.filter = 'brightness(100%)';
        project.style.filter = 'brightness(70%)';
        stacks.style.filter = 'brightness(70%)';
        contact.style.filter = 'brightness(70%)';
        folder_nav.style.filter = "brightness(70%)";
        spanProfil.style.display = 'block';
        profil.style.zIndex = '2';

        if (project.style.zIndex=="2") {
            project.style.zIndex="1";
            folder_nav.style.zIndex='1';
            contact.style.zIndex="0";
        }else if(contact.style.zIndex=="2" && project.style.zIndex!=="-1"){
            project.style.zIndex="0";
            folder_nav.style.zIndex='0';
            contact.style.zIndex="1";
        };

        if (stacks.style.zIndex=="2") {
            stacks.style.zIndex="1";
            folder_nav.style.zIndex='1';
            contact.style.zIndex="0";
        }else if(contact.style.zIndex=="2"){
            stacks.style.zIndex="0";
            folder_nav.style.zIndex='0';
            contact.style.zIndex="1";
        };

        if (profil_file.style.zIndex=='2') {
            profil_file.style.zIndex="1";
            folder_nav.style.zIndex='1';
            contact.style.zIndex="0";
        }else if(contact.style.zIndex=="2"){
            profil_file.style.zIndex="0";
            folder_nav.style.zIndex='0';
            contact.style.zIndex="1";
        };
    });

    secondopenfirstpart.addEventListener('click', function(){
        profil_file.style.display = 'flex'
        stacks.style.display = 'none';
        project.style.display = 'none';
        spanProject.style.display = 'none';
        spanStack.style.display='none';
        folderprofilwdw.style.backgroundColor='#444447';
        folderstackwdw.style.backgroundColor='';
        folderprojectwdw.style.backgroundColor='';
        profil_file.style.zIndex='2';
    });

    secondopensecondpart.addEventListener('click', function(){
        profil.style.display = 'flex';
        profil.style.zIndex='2';
        folder_nav.style.filter = "brightness(70%)";
        profil_file.style.filter = 'brightness(70%)';
        profil.style.filter = 'brightness(100%)';
        if (profil_file.style.zIndex=='2') {
            profil_file.style.zIndex="1";
            folder_nav.style.zIndex='1';
            contact.style.zIndex="0";
        };
    });

    closebtn.addEventListener('click', function(){
        profil.style.display='none';
        spanProfil.style.display='none';
        if (project.style.zIndex=="1") {
            project.style.zIndex="2";
            project.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            contact.style.zIndex="1";
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            project.style.zIndex="1";
        }

        if (stacks.style.zIndex=="1") {
            stacks.style.zIndex="2";
            stacks.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            contact.style.zIndex="1";
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            stacks.style.zIndex="1";
        }

        if (profil_file.style.zIndex=='1') {
            profil_file.style.zIndex='2';
            folder_nav.style.zIndex='3';
            profil_file.style.filter = 'brightness(100%)';
            folder_nav.style.filter = "brightness(100%)";
            contact.style.zIndex='1';
        }else{
            contact.style.zIndex="2";
            contact.style.filter='brightness(100%)';
            profil_file.style.zIndex='1';
        }
    });

    secondclosebtn.addEventListener('click', function(){
        profil_file.style.display='none';
        folder_nav.style.display = 'none';
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

    openbtn.addEventListener("mouseover", function() {
        text.style.display = "block";
    });
    openbtn.addEventListener("mouseout", function() {
        text.style.display = "none";
    });
}

OpenAndCloseContact();
OpenAndCloseProject();
OpenAndCloseStacks();
OpenAndCloseProfil();