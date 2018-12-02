import {getNews} from '../modules/rss.module.js';
import {loadMap} from '../modules/map.module.js';
document.addEventListener('DOMContentLoaded', init);

function init() {
    getNews();
    loadMap();
    //     // Carregando o Feed Principal do mapa

//     // Carregando RSS Global
//     getNews();
//     // Carregando RSS Local

//     // Alguns Eventos
}
