var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
var electron = require('electron');
var ipcRenderer = electron.ipcRenderer;
var favorites = Object;
function start() {
    console.log('App is starting');
    getData();
}
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, divLinks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('../../src/database/configs.json')];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    favorites = _a.sent();
                    console.log(favorites);
                    divLinks = document.getElementById('links');
                    renderFavorites(divLinks);
                    return [2 /*return*/];
            }
        });
    });
}
function renderFavorites(divLinks) {
    var favoritesHTML = '';
    favorites.sites.forEach(function (fav) {
        var _a = fav, name = _a.name, link = _a.link, image = _a.image;
        var favoriteHTML = "\n        <div class='opt'>\n            <img src=\"" + image + "\" alt=\"" + name + "\" width=\"50\">\n            <a class=\"link\" href=\"" + link + "\">" + name + "</a>\n        </div>\n        ";
        favoritesHTML += favoriteHTML;
    });
    divLinks.innerHTML = favoritesHTML;
    var _a = favorites.sites, width = _a.width, heigth = _a.heigth, over = _a.over;
    getLinks();
}
function getLinks() {
    var elementsLink = document.getElementsByClassName("link");
    for (var i = 0; i < (elementsLink.length - 1); i++) {
        elementsLink[i].addEventListener('click', function (event) {
            event.preventDefault();
            var link = event.target.href;
            switch (link) {
                case 'https://www.twitch.tv/':
                    alert("Após encontrar a live desejada, coloque-a em modo teatro!");
                    break;
                // case `file://${path.resolve(__dirname, 'spotify.html')}`:
                //     alert('Este recurso ainda não está disponível! A seguir, verá apenas uma representação.')
                //     break
                default:
                    break;
            }
            ipcRenderer.send('sendLink', link);
        });
    }
    var exitAdd = document.getElementsByClassName("exitAdd");
    var c;
    for (c = 0; c < exitAdd.length; c++) {
        exitAdd[c].addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('addModal').classList.toggle('desactive');
            document.getElementById('addModal').classList.toggle('active');
        });
    }
    //
}
start();
//# sourceMappingURL=renderer.js.map