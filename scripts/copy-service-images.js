// This script helps copy images from uploads to the right directories
// To use: node scripts/copy-service-images.js

const fs = require('fs');
const path = require('path');

// Image mappings for services
const imageMap = {
  'print_house.jpg': {
    description: 'Perception Print House - Printing Solutions Provider',
    src: 'print_house.jpg' // The original image name
  },
  'perception_creative.jpg': {
    description: 'Perception Creative & Production Services',
    src: 'perception_creative.jpg'
  },
  'multimedia.jpg': {
    description: 'Perception Multimedia Services',
    src: 'multimedia.jpg' 
  },
  'souvenirs.jpg': {
    description: 'Custom Branded Souvenirs',
    src: 'souvenirs.jpg'
  },
  'office_staff.jpg': {
    description: 'Masslawry Office Staff',
    src: 'office_staff.jpg'
  },
  'btl_events.jpg': {
    description: 'BTL & Events Services',
    src: 'btl_events.jpg'
  },
  'bello_sign.jpg': {
    description: 'Bello Signage Installation',
    src: 'bello_sign.jpg'
  },
  'blue_sign.jpg': {
    description: 'Illuminated 3D Signage',
    src: 'blue_sign.jpg'
  }
};

// Create directories if they don't exist
const targetDir = path.resolve(__dirname, '../public/lovable-uploads/naa');
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Create a placeholder file for each image
Object.keys(imageMap).forEach(imageName => {
  const targetPath = path.join(targetDir, imageName);
  
  // Check if file already exists
  if (!fs.existsSync(targetPath)) {
    console.log(`Creating placeholder for ${imageName}`);
    
    // Create a text file with instructions on how to add the real image
    const placeholderContent = `This is a placeholder for ${imageName}
Description: ${imageMap[imageName].description}

To use an actual image:
1. Save the image as ${imageName}
2. Replace this file with your image in this directory
`;
    
    fs.writeFileSync(targetPath, placeholderContent);
    console.log(`Placeholder created at ${targetPath}`);
  } else {
    console.log(`File already exists at ${targetPath}`);
  }
});

console.log('\nService image placeholders have been created!');
console.log('Please replace the placeholders with actual images when available.');
console.log('Each placeholder contains instructions on what image to use.'); 