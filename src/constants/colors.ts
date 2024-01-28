const colors : Colors = {
    "DARK": {
        "bg": "#1a121b",
        "text": "#FFFFFF",
    }, 
    "LIGHT": {
        "bg": "#FFFFFF",
        "text": "#000000",
    }
}

export interface ColorScheme {
  "bg": string;
  "text": string;
}

export interface Colors {
  "DARK": ColorScheme;
  "LIGHT": ColorScheme;
}

export default colors;