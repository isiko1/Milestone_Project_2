{"changed":true,"filter":false,"title":"main.js","tooltip":"/js/main.js","value":"function getData(url, cb) {\n   var xhr = new XMLHttpRequest();\n\n   xhr.open(\"GET\", \"url\");\n   xhr.send();\n    xhr.onreadystatechange = function() {\n if (this.readyState == 4 && this.status == 200) {\n   cb(JSON.parse(this.responseText));\n\n        }\n\n    };\n}\n\nfunction getTableHeaders(obj) {\n    var tableHeaders = [];\n    \n    Object.keys(obj).forEach(function(key){\n        tableHeaders.push(`<td>${key}</td>`);\n    });\n    return `<tr>${tableHeaders}</tr>`;\n}\nfunction generatePaginationButtons(next, prev) {\n    if (next && prev) {\n        \n    }\n}\nfunction writeToDocument(url) {\n    var tableRows = [];\n    var el = document.getElementByID(\"data\");\n    \n    getData(url,function(data) {\n        var pagination;\n        if (data.next || data.previous) {\n            pagination = generatePaginationButtons(data.next, data.previous)\n        }\n        data = data.results;\n        var tableHeaders = getTableHeaders(data[0]);\n        \n        data.forEach(function(item) {\n            var dataRow = [];\n           \n            Object.keys(item).forEach(function(key) {\n                var rowData = item[key].toString();\n                var truncatedData = rowData.substring(0, 15);\n                dataRow.push(`<td>${truncatedData}</td>`);\n            });\n            \n            tableRows.push(`<tr>${dataRows}</tr>`);\n            \n            });\n          el.innerHTML = `<table>${tableheaders}${tableRows}</table>${pagination}`;\n        });\n        \n}","undoManager":{"mark":18,"position":28,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":1},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":57,"column":1},"end":{"row":57,"column":2},"action":"insert","lines":["/"],"id":2},{"start":{"row":57,"column":2},"end":{"row":57,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":57,"column":2},"end":{"row":57,"column":3},"action":"remove","lines":["/"],"id":3},{"start":{"row":57,"column":1},"end":{"row":57,"column":2},"action":"remove","lines":["/"]}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["/"],"id":4}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"],"id":5}],[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["/"],"id":6},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["/"],"id":7}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["/"],"id":8},{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"remove","lines":["/"],"id":9},{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"remove","lines":["/"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"],"id":10},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["/"],"id":11},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["/"],"id":12}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["/"],"id":13}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["/"],"id":14}],[{"start":{"row":10,"column":1},"end":{"row":10,"column":2},"action":"insert","lines":["/"],"id":15},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["/"],"id":16},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"],"id":17}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["/"],"id":18},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["/"],"id":19},{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["/"],"id":20},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"remove","lines":[" "]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":["/"]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["/"]},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"remove","lines":[" "],"id":21},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["/"]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["/"],"id":22},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":[" "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":23},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["/"],"id":24},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":[" "],"id":25},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":[" "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["/"]},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["/"]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":[" "],"id":26}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "],"id":27},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["/"]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["/"]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"remove","lines":["/"],"id":28},{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":["/"]},{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"remove","lines":["/"]}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"remove","lines":["/"],"id":29},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":312.7272644042969,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1579561049756}