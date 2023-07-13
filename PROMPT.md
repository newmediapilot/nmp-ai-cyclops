Using node js I want you to create a module for me called 'cyclops.js'.

This module will watch a single file continuously, polling every 25ms.

It will be executed using node js like this `node main.js test-file.json`

The variable `test-file.json` can be any file.

When a change occurs to the file I want you to log some things to the console.

When I start the module, I want you to log "Cyclps is watching" with a spinner icon using ascii art.

When a change is detected, I want you to add a spacer line.

Then I want you to log the differences between the old an new version of the file,
do not include the unchanged versions. Make the old version Gray, and the new version Green.

I want you to add another spacer below the result, then continue to watch using the "Cyclops is watching" spinner icon using ascii art.