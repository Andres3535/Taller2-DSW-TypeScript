import { series } from './data.js';
function renderSeriesInTable() {
    var tableBody = document.getElementById('seriesTableBody');
    var totalSeasons = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        tableBody.appendChild(row);
        row.querySelector('.serie-link').addEventListener('click', function (e) {
            e.preventDefault();
            showSeriesDetail(serie);
        });
        totalSeasons += serie.seasons;
    });
    var averageSeasons = (totalSeasons / series.length).toFixed(2);
    var averageRow = document.createElement('tr');
    averageRow.innerHTML = "\n        <td colspan=\"3\"><strong>Average Seasons</strong></td>\n        <td>".concat(averageSeasons, "</td>\n    ");
    tableBody.appendChild(averageRow);
}
function showSeriesDetail(serie) {
    var detailCard = document.getElementById('seriesDetailCard');
    var seriesImage = document.getElementById('seriesImage');
    var seriesTitle = document.getElementById('seriesTitle');
    var seriesDescription = document.getElementById('seriesDescription');
    var seriesLink = document.getElementById('seriesLink');
    seriesImage.src = serie.image;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.url;
    detailCard.style.display = 'block';
}
renderSeriesInTable();
