import {db} from './fb.js';
import {Plotly} from './plotly.js';

const violences = ['fisica', 'material', 'psicologica', 'sexual'];
const otherDates = ['classe_social', 'etnia', 'genero', 'idade'];

export function renderCharts() {
    for (const violence of violences) {
        db.ref(`violences/${violence}`).once('value')
            .then(function(tabs) {
                const valores = tabs.val();
                const values = [];
                const namevalue = [];
                for (let i=0; i < Object.keys(valores).length; i++) {
                    values.push(valores[Object.keys(valores)[i]]);
                    namevalue.push(Object.keys(valores)[i]);
                }
                const data = [{
                    values: values,
                    labels: namevalue,
                    type: 'pie'
                }];
                const layout = {
                    height: 300,
                    width: 400,
                    grid: {rows: 2, columns: 2}
                };
                Plotly.plot(`${violence}`, data, layout);
            });
    }

    for (const type of otherDates) {
        db.ref(`other_dates/${type}`).once('value')
            .then(function(tabs) {
                const valores = tabs.val();
                const values = [];
                const namevalue = [];
                for (let i=0; i < Object.keys(valores).length; i++) {
                    values.push(valores[Object.keys(valores)[i]]);
                    namevalue.push(Object.keys(valores)[i]);
                }
                const data = [{
                    values: values,
                    labels: namevalue,
                    type: 'pie'
                }];
                const layout = {
                    height: 300,
                    width: 400
                };
                Plotly.plot(`${type}`, data, layout);
            });
    }
}
