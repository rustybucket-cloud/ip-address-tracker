$(document).ready(() => {
    $('.search-button').on('click', () => {
        const ip = $('#ip-search').val()
        $.getJSON(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Yt69TXQ6SPIIsHfjqPyUPJOT6pjm5&ipAddress=${ip}`, (res) => {
            $('#ip').text(res.ip)
            $('#location').text(`${res.location.city}, ${res.location.region}`)
            $('#timezone').text(`UTC ${res.location.timezone}`)
            $('#isp').text(res.isp)

            createMap(res.location.lat, res.location.lng)
        })
    })
})

function createMap(lat, long) {
    const accessToken = 'pk.eyJ1IjoicnVzdHlidWNrZXQtY2xvdWQiLCJhIjoiY2wxamNwOXdlMjNzZzNvbGc0cTVpcnVlYyJ9.2HfzVWyik-vks2NadOwkqQ'
    const map = L.map('map').setView([lat, long], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken
    }).addTo(map);
}