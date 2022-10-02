function turnOff() {
    var powerLight = document.getElementById('power-light');
    var lcdScreen = document.getElementById('lcd-screen');

    powerLight.style.backgroundColor = '#bbb';
    lcdScreen.innerHTML = '';
};

function turnOn() {
    var powerLight = document.getElementById('power-light');
    var lcdScreen = document.getElementById('lcd-screen');

    powerLight.style.backgroundColor = 'red';
    lcdScreen.innerHTML = '<img class="panel-lcd-on" src="assets/gb_lcd_on.gif"/>';
}