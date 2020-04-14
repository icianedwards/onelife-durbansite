var PathToModules = "JSONTest/modules";

var testData = [];

for (var mod = 0; mod < testModules.length; mod++) { 
    var modPath = PathToModules + '/' + testModules[mod] + '.js';
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = modPath;
    document.head.appendChild(script); 
}

setTimeout(function () { 
    var intiScript = document.createElement("script");
    intiScript.type = "text/javascript";
    intiScript.src = 'JSONTest/internal/initiate.js';
    document.body.appendChild(intiScript);
}, 5000);
