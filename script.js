const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);

cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');
const darkContainerImg = document.querySelector('#dark-container .profile-container img');

darkContainerImg.src = 'https://drive.google.com/thumbnail?id=1C_PRM0MUUFSTzswJN-908Uw-1NavcRIS&sz=s800';


toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
            
        }, 1500);


        icons.forEach(icon => {

            icon.classList.toggle('bxs-sun');
        })

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');

    })
});

 