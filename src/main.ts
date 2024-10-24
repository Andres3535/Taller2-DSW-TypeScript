import { series } from './data.js';

function renderSeriesInTable(): void {
    const tableBody = document.getElementById('seriesTableBody')!;
    let totalSeasons = 0;

    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody.appendChild(row);

        row.querySelector('.serie-link')!.addEventListener('click', (e) => {
            e.preventDefault();
            showSeriesDetail(serie);
        });

        totalSeasons += serie.seasons; 
    });

    const averageSeasons = (totalSeasons / series.length).toFixed(2);

    const averageRow = document.createElement('tr');
    averageRow.innerHTML = `
        <td colspan="3"><strong>Average Seasons</strong></td>
        <td>${averageSeasons}</td>
    `;
    tableBody.appendChild(averageRow);
}

function showSeriesDetail(serie: any): void {
    const detailCard = document.getElementById('seriesDetailCard')!;
    const seriesImage = document.getElementById('seriesImage') as HTMLImageElement;
    const seriesTitle = document.getElementById('seriesTitle')!;
    const seriesDescription = document.getElementById('seriesDescription')!;
    const seriesLink = document.getElementById('seriesLink') as HTMLAnchorElement;

    seriesImage.src = serie.image;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.url;

    detailCard.style.display = 'block';
}

renderSeriesInTable();
