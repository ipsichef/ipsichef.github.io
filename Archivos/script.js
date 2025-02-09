document.getElementById('control-panel-btn').addEventListener('click', function() {
    document.getElementById('control-panel').classList.toggle('hidden');
});

document.getElementById('close-panel-btn').addEventListener('click', function() {
    document.getElementById('control-panel').classList.add('hidden');
});