function cargarScript(script) {
    var scriptElement = document.createElement('script');
    scriptElement.src = script;
    document.head.appendChild(scriptElement);
}