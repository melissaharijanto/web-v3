const colors : Colors = {
    "DARK": {
        "bg": "black",
        "text": "white",
        "link": "#0096FF",
        "link-hover": "#4169E1"
    }, 
    "LIGHT": {
        "bg": "white",
        "text": "black",
        "link": "#4169E1",
        "link-hover": "#0096FF"
    }
}

export interface ColorScheme {
  "bg": string;
  "text": string;
  "link": string;
  "link-hover": string;
}

export interface Colors {
  "DARK": ColorScheme;
  "LIGHT": ColorScheme;
}

export default colors;