var map = L.map('mapid').setView([39.6667427, -7.7822695, 9.21], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([39.3760698, -9.3790874, 21]).addTo(map)
    .bindPopup('<table><tr><td>SENSOR 1</td></tr><tr><td>Temperatura: 17.3º C</td></tr><tr><td>Vento: 11 NÓS</td></tr></table>')
    .openPopup();

L.marker([38.6905353, -9.1722086, 19.25]).addTo(map)
    .bindPopup('<table><tr><td>SENSOR 2</td></tr><tr><td>Temperatura: 19.0º C</td></tr><tr><td>Vento: 11.5 NÓS</td></tr></table>')
    .openPopup();

L.marker([41.6935403, -8.8093018, 18]).addTo(map)
    .bindPopup('<table><tr><td>SENSOR 3</td></tr><tr><td>Temperatura: 15.7º C</td></tr><tr><td>Vento: 13 NÓS</td></tr></table>')
    .openPopup();

L.marker([39.6042563, -9.0857277, 21]).addTo(map)
    .bindPopup('<table><tr><td>SENSOR 4</td></tr><tr><td>Temperatura: 9.5º C</td></tr><tr><td>Vento: 13.3 NÓS</td></tr></table>')
    .openPopup();

L.marker([36.9600594, -7.8869711, 21]).addTo(map)
    .bindPopup('<table><tr><td>SENSOR 5</td></tr><tr><td>Temperatura: 6.0º C</td></tr><tr><td>Vento: 12 NÓS</td></tr></table>')
    .openPopup();