// Preload script for secure communication between main and renderer processes
// This file runs in a context that has access to both Node.js APIs and the DOM

// Since this is a simple local application that doesn't need IPC,
// we just need to ensure the renderer process can work properly
// All functionality is handled in the renderer using standard web APIs (localStorage)

window.addEventListener('DOMContentLoaded', () => {
  // Application initializes in renderer.js
});
