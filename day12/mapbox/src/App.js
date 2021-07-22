import React, { Component } from 'react'

import './App.css';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFjcXVlc2RpdiIsImEiOiJja21jdjJhYmMyZjRjMnFtdHc2anJsdDBnIn0.dr8JtqViAcxV59z9zXLIag';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: -26.29,
      longitude: 27.88,
      zoom: 15,
      markers: [],
    };

    this.mapReference = React.createRef();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapReference.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.longitude, this.state.latitude],
      zoom: this.state.zoom,

    });

    this.map.on('move', (e) => {
      this.setState({
        latitude: this.map.getCenter().lat,
        longitude: this.map.getCenter().lng,
        zoom: this.map.getZoom(),
      });
    });

    this.map.on('click', (e) => {

      const marker = new mapboxgl.Marker({
        color: '#ff0000',
        draggable: false,
      }).setLngLat(e.lngLat).addTo(this.map);

      this.state.markers.push(marker);
      this.setState({
        markers: this.state.markers
      });
    });
  }

  removeMarker(marker) {
    marker.remove();

    const { markers } = this.state;
    const filteredMarkers = markers.filter((m) => {
      const markerId = (marker.getLngLat().lat + marker.getLngLat().lng);
      const mId = (m.getLngLat().lat + m.getLngLat().lng);
      return mId !== markerId;
    });
    this.setState({ markers: filteredMarkers });
  }

  render() {

    const { latitude, longitude, zoom, markers } = this.state;

    return (
      <div className="main">
        <div ref={this.mapReference} className="map-container">

          <div className="banner">
            Latitude: {latitude.toFixed(2)}  |  Longitude: {longitude.toFixed(2)} | Zoom: {zoom}
          </div>

          <div className="markers">
            {
              markers.map(marker => {
                return <div className="marker"
                  key={marker.getLngLat().lat + marker.getLngLat().lng}>
                  <div>
                    Latitude: {marker.getLngLat().lat.toFixed(2)}  |  Longitude: {marker.getLngLat().lng.toFixed(2)}
                  </div>
                  <button className="remove" onClick={() => this.removeMarker(marker)}>
                    X
                  </button>
                </div>
              })
            }
          </div>

        </div>
      </div>
    )
  }
}
