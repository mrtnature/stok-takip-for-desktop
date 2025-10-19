// Preload script for secure communication between main and renderer processes
// This file runs in a context that has access to both Node.js APIs and the DOM

// Since this is a simple local application that doesn't need IPC,
// we just ensure the renderer process can work properly with standard web APIs.
// All functionality is handled in the renderer using localStorage and DOM APIs.
