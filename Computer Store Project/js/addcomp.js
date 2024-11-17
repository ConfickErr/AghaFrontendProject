var compname = document.getElementById('computer-name');
var producer = document.getElementById('computer-producer');
var newc = document.getElementById('computer-new');
var price = document.getElementById('computer-price');
var description = document.getElementById('computer-description');
var ram = document.getElementById('computer-ram');
var cpu = document.getElementById('computer-cpu');
var rom = document.getElementById('computer-rom');
var romType = document.getElementById('computer-rom-type');
var os = document.getElementById('computer-os');
var gpu = document.getElementById('computer-gpu');
var image = document.getElementById('computer-img');

var cardName = document.getElementById("card-name");
var cardProducer = document.getElementById('card-producer');
var cardPrice = document.getElementById('card-price');
var cardImage = document.getElementById('card-image');
var cardCpu = document.getElementById('card-cpu');
var cardRam = document.getElementById('card-ram');
var cardRom = document.getElementById('card-rom');
var cardGpu = document.getElementById('card-gpu');
var cardOs = document.getElementById('card-os');
var cardRomType = document.getElementById('card-rom-type');


var oldBadge = document.getElementById('old-badge');
var newBadge = document.getElementById('new-badge');

oldBadge.style.display = 'none';
newBadge.style.display = 'none';

var comps = [];
var compsString = localStorage.getItem('computers');

if (compsString != null) {
    comps = JSON.parse(compsString);

    for (let i = 0; i < comps.length; i++) {
        console.log(user.id);
    }
}

function addComputer(event) {
    event.preventDefault();
    if (checkFields()) {
        var comp = {};
        comp.id = parseInt(Math.random()*9000 + 1000);
        comp.name = compname.value;
        comp.producer = producer.value;
        comp.state = newc.value;
        comp.price = price.value;
        comp.description = description.value;
        comp.ram = ram.value;
        comp.cpu = cpu.value;
        comp.rom = rom.value;
        comp.romType = romType.value;
        comp.os = os.value;
        comp.gpu = gpu.value;
        comp.image = image.value;
        comp.user_id = user.id;
        comp.phone = user.phone;
        comps.push(comp);
        localStorage.setItem('computers', JSON.stringify(comps));
        window.location.href = 'my-computers.html';
    } else {
        alert('Please, input all data');
    }
}

function checkFields() {
    if (name.value != '' && producer.value != '' && newc.value != ''
        && price.value != '' && description.value != '' && ram.value != ''
        && cpu.value != '' && rom.value != '' && romType.value != ''
        && os.value != '' && gpu.value != '' && image.value != '') {
        return true;
    } else {
        return false;
    }
}

function fillNameCard() {
    if (compname.value.length >= 1) {
        cardName.innerText = compname.value;
    } else {
        cardName.innerText = 'Name';
    }
}

function fillProducerCard() {
    if (producer.value.length >= 1) {
        cardProducer.innerText = producer.value;
    } else {
        cardProducer.innerText = 'Name';
    }
}

function fillNewCard() {
    if (newc.value === 'Yes') {
        oldBadge.style.display = 'none';
        newBadge.style.display = 'inline';
        console.log('Yep')
    } else {
        oldBadge.style.display = 'inline';
        newBadge.style.display = 'none';
        console.log('Nah')
    }
    console.log('Boo')
}

function fillPriceCard() {
    if (price.value.length > 1) {
        cardPrice.innerText = price.value + '$';
    }
}

function fillRamCard() {
    if (ram.value.length > 1) {
        cardRam.innerText = ram.value + ' GB';
    }
}

function fillCpuCard() {
    cardCpu.innerText = cpu.value;
}

function fillRomCard() {
    if (rom.value.length > 1) {
        cardRom.innerText = rom.value + ' GB';
    }
}

function fillRomTypeCard() {
    cardRomType.innerText = ', ' + romType.value;
}

function fillImageLinkCard() {
    cardImage.setAttribute('src', image.value);
}

function fillOSCard() {
    cardOs.innerText = os.value;
}

function fillGpuCard() {
    if (gpu.value.length > 1) {
        cardGpu.innerText = gpu.value + ' GB';
    }
}