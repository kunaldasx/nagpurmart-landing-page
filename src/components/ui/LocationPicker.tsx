/* eslint-disable react-hooks/refs */
"use client";

import { useCallback, useRef, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface Props {
	latitude: number;
	longitude: number;
	onLocationChange: (lat: number, lng: number) => void;
}

const containerStyle: React.CSSProperties = {
	height: 350,
	width: "100%",
	borderRadius: 16,
};

const mapOptions: google.maps.MapOptions = {
	disableDefaultUI: false,
	clickableIcons: false,
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: false,
};

export default function LocationPicker({
	latitude,
	longitude,
	onLocationChange,
}: Props) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
	});

	const mapRef = useRef<google.maps.Map | null>(null);
	const [zoom, setZoom] = useState(16);

	const onLoad = useCallback((map: google.maps.Map) => {
		mapRef.current = map;
	}, []);

	const onUnmount = useCallback(() => {
		mapRef.current = null;
	}, []);

	const handleMapClick = (e: google.maps.MapMouseEvent) => {
		if (!e.latLng) return;
		onLocationChange(e.latLng.lat(), e.latLng.lng());
	};

	const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
		if (!e.latLng) return;
		onLocationChange(e.latLng.lat(), e.latLng.lng());
	};

	// Recenter smoothly whenever lat/lng props change (mirrors old Recenter logic)
	if (mapRef.current) {
		const currentCenter = mapRef.current.getCenter();
		if (
			!currentCenter ||
			currentCenter.lat() !== latitude ||
			currentCenter.lng() !== longitude
		) {
			mapRef.current.panTo({ lat: latitude, lng: longitude });
		}
	}

	if (!isLoaded) {
		return (
			<div
				style={containerStyle}
				className="flex items-center justify-center bg-gray-100 animate-pulse"
			>
				<span className="text-sm text-gray-400">Loading map…</span>
			</div>
		);
	}

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={{ lat: latitude, lng: longitude }}
			zoom={zoom}
			onLoad={onLoad}
			onUnmount={onUnmount}
			onClick={handleMapClick}
			onZoomChanged={() => {
				if (mapRef.current) {
					setZoom(mapRef.current.getZoom() ?? zoom);
				}
			}}
			options={mapOptions}
		>
			<Marker
				position={{ lat: latitude, lng: longitude }}
				draggable
				onDragEnd={handleMarkerDragEnd}
			/>
		</GoogleMap>
	);
}
