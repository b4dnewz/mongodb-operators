export enum GeoJSONTypes {
    "Point",
    "LineString",
    "Polygon",
    "MultiPoint",
    "MultiLineString",
    "MultiPolygon",
    "GeometryCollection",
}

export interface GeoJSON {
    type: GeoJSONTypes;
    coordinates: number[];
}

export interface GeoSpatialOperators {
    $geoIntersects: {
        $geometry: GeoJSON,
    };
    $geoWithin: {
        $geometry: GeoJSON,
    };
    $near: {
        $geometry: GeoJSON
        $minDistance?: number
        $maxDistance?: number,
    };
    $nearSphere: {
        $geometry: GeoJSON
        $minDistance?: number
        $maxDistance?: number,
    };
}
