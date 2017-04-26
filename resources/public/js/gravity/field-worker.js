// Start a worker to build and classify fields
importScripts("d3-3d.js");  // With d3.layout.force3d().
importScripts("svm.js");
importScripts("gravity-mod.js");  // Should be already cached

gravity.field.worker.create();  // Listen to your parent !
