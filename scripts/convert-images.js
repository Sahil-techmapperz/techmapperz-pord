const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

async function convertToWebP() {
  const inputDir = path.join(__dirname, '../public/gis_images/drone_services/drone_data_processing');
  const images = ['point_cloud.PNG', 'orthomosaic.PNG', 'DSM.png', 'DEM.png', 'contour.png', '3d_mesh_modelling.PNG'];

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(inputDir, image.replace('.PNG', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`Converted ${image} to WebP`);
    } catch (error) {
      console.error(`Error converting ${image}:`, error);
    }
  }
}

convertToWebP();
