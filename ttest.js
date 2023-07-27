import ColorThief from "color-thief";
import colorNames from "color-name";

// Path to your image file
const imagePath = "./photo.jpg";

// Create a new instance of ColorThief
const colorThief = new ColorThief();

// Use ColorThief to get the dominant color
const dominantColor = colorThief.getColor(imagePath);

// Use ColorThief to get the palette of colors
const colorPalette = colorThief.getPalette(imagePath, 5); // Change the number to get more or fewer colors

// Function to find the closest color name based on RGB values
const findClosestColorName = (rgb) => {
  let closestColor = null;
  let closestDistance = Infinity;

  // Iterate over the color names
  for (const name in colorNames) {
    const colorRgb = colorNames[name];

    // Calculate the Euclidean distance between the RGB values
    const distance = Math.sqrt(
      Math.pow(rgb[0] - colorRgb[0], 2) +
        Math.pow(rgb[1] - colorRgb[1], 2) +
        Math.pow(rgb[2] - colorRgb[2], 2)
    );

    // Check if the current distance is closer than the previous closest distance
    if (distance < closestDistance) {
      closestColor = name;
      closestDistance = distance;
    }
  }

  return closestColor;
};

// Get the names of the dominant color and color palette
const dominantColorName = findClosestColorName(dominantColor);
const colorPaletteNames = colorPalette.map((color) =>
  findClosestColorName(color)
);

console.log("Dominant Color:", dominantColorName);
console.log("Color Palette:", colorPaletteNames);
