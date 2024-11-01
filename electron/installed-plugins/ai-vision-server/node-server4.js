const axios = require('axios');

// Example of showing the overlay
// axios.post('http://localhost:5000/show_overlay')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Hide overlay
// axios.post('http://localhost:5000/hide_overlay')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Adjust detection range for all templates
// axios.post('http://localhost:5000/adjust_detection_range', {
//   global_threshold: 96,
//   template_thresholds: { 'trash_bin_icon.png': 98, 'empty_trash_bin.png': 96 }
// }).then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Change update interval (in seconds)
// axios.post('http://localhost:5000/change_update_interval', {
//   interval: 2  // Updates every 2 seconds
// }).then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Add a template with specific detection range
// axios.post('http://localhost:5000/add_template', {
//   template_path: 'new_template.png',
//   detection_range: 97
// }).then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Remove a template
// axios.post('http://localhost:5000/remove_template', {
//   template_path: 'trash_bin_icon.png'
// }).then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Get coordinates of a detected template
axios.post('http://localhost:5000/get_coords', {
  template_path: 'empty_trash_bin.png'
}).then(response => console.log(response.data))
  .catch(error => console.error(error));

// Capture screenshot of a detected template
// axios.post('http://localhost:5000/capture_screenshot', {
//   template_path: 'empty_trash_bin.png'
// }).then(response => console.log(response.data))
//   .catch(error => console.error(error));

// Stop the Python app
// axios.post('http://localhost:5000/stop')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));
