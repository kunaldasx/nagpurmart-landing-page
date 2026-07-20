/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import L from "leaflet";
import { useLayoutEffect } from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	useMapEvents,
	useMap,
} from "react-leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Props {
	latitude: number;
	longitude: number;
	onLocationChange: (lat: number, lng: number) => void;
}

function MapEvents({
	onLocationChange,
}: {
	onLocationChange: (lat: number, lng: number) => void;
}) {
	useMapEvents({
		click(e) {
			onLocationChange(e.latlng.lat, e.latlng.lng);
		},
	});

	return null;
}

function Recenter({
	latitude,
	longitude,
}: {
	latitude: number;
	longitude: number;
}) {
	const map = useMap();

	useLayoutEffect(() => {
		requestAnimationFrame(() => {
			map.flyTo([latitude, longitude], map.getZoom(), {
				animate: true,
				duration: 0.5,
			});
		});
	}, [latitude, longitude, map]);

	return null;
}

export default function LocationPicker({
	latitude,
	longitude,
	onLocationChange,
}: Props) {
	const INITIAL_CENTER: [number, number] = [latitude, longitude];

	return (
		<MapContainer
			center={INITIAL_CENTER}
			zoom={16}
			style={{
				height: 350,
				width: "100%",
				borderRadius: 16,
			}}
		>
			<Recenter latitude={latitude} longitude={longitude} />

			<TileLayer
				attribution="© OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker
				draggable
				position={[latitude, longitude]}
				eventHandlers={{
					dragend(e) {
						const marker = e.target;
						const pos = marker.getLatLng();

						onLocationChange(pos.lat, pos.lng);
					},
				}}
			/>

			<MapEvents onLocationChange={onLocationChange} />
		</MapContainer>
	);
}
