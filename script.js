var map = L.map('mapid').setView([39.6667427, -7.7822695, 9.21], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([39.3760698, -9.3790874, 21]).addTo(map)
    .bindPopup('<table><tr><td>TESTE1</td></tr><tr><td>TESTE2</td></tr><tr><td>TESTE3</td></tr></table>')
    .openPopup();

L.marker([38.6905353, -9.1722086, 19.25]).addTo(map)
    .bindPopup('<table><tr><td>TESTE1</td></tr><tr><td>TESTE2</td></tr><tr><td>TESTE3</td></tr></table>')
    .openPopup();

L.marker([41.6935403, -8.8093018, 18]).addTo(map)
    .bindPopup('<table><tr><td>TESTE1</td></tr><tr><td>TESTE2</td></tr><tr><td>TESTE3</td></tr></table>')
    .openPopup();

L.marker([39.6042563, -9.0857277, 21]).addTo(map)
    .bindPopup('<table><tr><td>TESTE1</td></tr><tr><td>TESTE2</td></tr><tr><td>TESTE3</td></tr></table>')
    .openPopup();
