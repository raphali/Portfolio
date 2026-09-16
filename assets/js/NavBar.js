function CloseContact(){
    const contact = document.getElementById('wdw-contact');
    const project = document.getElementById('wdw-project');
    const bouton = document.getElementById('close-btn');

    bouton.addEventListener('click', function(){
        contact.style.display = 'none';
        project.style.filter = 'brightness(100%)';
    });
}

function OpenContact(){
    const contact = document.getElementById('wdw-contact');
    const project = document.getElementById('wdw-project');
    const navbtn = document.getElementById('btn-contact');

    navbtn.addEventListener('click', function(){
        contact.style.display = 'flex';
        contact.style.zIndex = '1';
        project.style.zIndex = '0';
        contact.style.filter = 'brightness(100%)';
        project.style.filter = 'brightness(70%)';
    });
}

function OpenProject() {
    const project = document.getElementById('wdw-project');
    const navbtn = document.getElementById('btn-project');
    const contact = document.getElementById('wdw-contact');

    navbtn.addEventListener('click', function(){
        project.style.display = 'flex';
        project.style.zIndex = '1';
        contact.style.zIndex = '0';
        project.style.filter = 'brightness(100%)';
        contact.style.filter = 'brightness(70%)';
    })
}

function CloseProject() {
    const project = document.getElementById('wdw-project');
    const contact = document.getElementById('wdw-contact');
    const bouton = document.getElementById('project-close-btn');

    bouton.addEventListener('click', function(){
        project.style.display='none';
        contact.style.filter = 'brightness(100%)';
    })
}

/*
Page projet et stacks superposées et quand l'une est fermée, l'autre se ferme aussi.
Page projet et page stacks accessibles depuis la nav mais aussi depuis la nav de l'explorateur de fichier (pas encore faite). 
Pour gerer filtre noir quand superposition des pages, jouer avec z-index et if.
*/

CloseContact();
OpenContact();
OpenProject();
CloseProject();