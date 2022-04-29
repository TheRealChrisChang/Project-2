/* For Loop start */
function spookyLoop (w)
{
    for (let i = 0; i < 5; i++)
    {
    document.write("<h2>This will scare you five times: " + w + "!!!!!</h2>");
    }
}

spookyLoop ("SpOOoooOOoOoOky")
/* For Loop end */

/* grab name function start */
var playerName = window.prompt("Welcome to the Haunted House Simulator. \nWhat is your name?");
function goodBye (n) 
{   
    document.write("<h1>We hope you had fun " + n + "! And we hope we scared you!</h1>" )
}

goodBye (playerName);
/* grab name function end */

/* animated box ghost start */
var box = document.getElementById("ghost");
var button = document.getElementById("show-more-ghost");

button.onclick = function()
{
    if(box.className == "open")
    {
        //shrink box
        box.className = "";
        button.innerHTML = "Click to get spooked";
    }
    else
    {
        //expand box
        box.className = "open";
        button.innerHTML = "Click to not get spooked";
    }
};
/* animated box ghost end */


/* function to name monsters start */ 
(function () 
    {
        /* array to hold monster info */
        var monsterData =
        [
            {   /* monster 1 ghost girl */
                name: 'Ghost Girl',
                monsterType: 'Ghost',
                favoriteColor: 'Red',
                favoriteFood: 'Strawberry Short Cake',
                favoriteHobby: 'People watching',
                selector: 'm1'
            },
            {   /* monster 2 werewolf */
                name: 'Willy',
                monsterType: 'Werewolf',
                favoriteColor: 'Purple',
                favoriteFood: 'Spaghetti',
                favoriteHobby: 'Digging holes',
                selector: 'm2'
            },
            {   /* monster 3 zombie */
                name: 'Bob Zombie',
                monsterType: 'Zombie',
                favoriteColor: 'Green',
                favoriteFood: 'Jell-o (green Jell-o in particular)',
                favoriteHobby: 'Shredding guitar',
                selector: 'm3'
            }
        ];
    
        function Package(monsterData) 
        {
            this.name = monsterData.name;
            this.monsterType = monsterData.monsterType;
            this.favoriteColor = monsterData.favoriteColor;
            this.favoriteFood = monsterData.favoriteFood;
            this.favoriteHobby = monsterData.favoriteHobby;
            this.selector = monsterData.selector;
        }

        // Returns DOM element by id
        var getEl = function (id) 
        {
        return document.getElementById(id);
        };

        // Writes the package object's data to the 
        // appropriate DOM elements utilizing the package selector property.

        var writePackageInfo = function (package)
        {
            var selector = package.selector,
                nameEl = getEl(selector + '-name'),
                typeEl = getEl(selector + '-type'),
                fColorEl = getEl(selector + '-color'),
                fFoodEl = getEl(selector + '-food'),
                fHobbyEl = getEl(selector + "-hobby");

            // Write package to the DOM elements
            nameEl.textContent = package.name;
            typeEl.textContent = package.monsterType;
            fColorEl.textContent = package.favoriteColor;
            fFoodEl.textContent = package.favoriteFood;
            fHobbyEl.textContent = package.favoriteHobby;
        };

        //Writes the data for monsters
        var ghostGirl = new Package(monsterData[0]);
        writePackageInfo(ghostGirl);

        //Writes the data for monsters
        var werewolf = new Package(monsterData[1]);
        writePackageInfo(werewolf);

        //Writes the data for monsters
        var zombie = new Package(monsterData[2]);
        writePackageInfo(zombie);
    }
());
/* function to name monsters end*/ 

/* comment box start */
// Utility functions
function get(element) {
    return document.getElementById(element);
}

// application functions
function openModal() {
    var modal = get ('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // clear text
    title.value = '';
    text.value = '';

    // hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    // create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// wire up event handlers
window.addEventListener('load', function () {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});
/* comment box end */


