
# ai-nmp-cyclops

**Description:**  
`ai-nmp-cyclops` is a utility designed to monitor file changes in real-time, displaying line-by-line differences. This tool is ideal for debugging or tracking modifications in a specific file, as it highlights additions, deletions, and unchanged lines in different colors.

## Features
- Real-time file watching for changes
- Color-coded difference reporting (green for additions, red for deletions, grey for unchanged text)
- Spinner animations to indicate active monitoring
- Cross-platform compatibility

## Installation
Ensure Node.js is installed, then clone the repository and install dependencies:
```bash
git clone https://github.com/newmediapilot/nmp-ai-cyclops.git
cd nmp-ai-cyclops
npm install
```

## Usage

### Command Overview
- **Start Watching a File**:  
   Watches a file and outputs changes to the terminal.
   ```bash
   node main.js <filename>
   ```

- **Run Test Script**:
   The `test` script runs `main.js` on a sample file, `test-file.json`.
   ```bash
   npm run test
   ```

- **Reset Environment**:
   The `reset` script removes `node_modules` and reinstalls dependencies to refresh the project environment.
   ```bash
   npm run reset
   ```

### Example Usage
To monitor a file (e.g., `example.txt`) for changes:
```bash
node main.js example.txt
```
You’ll see a spinner indicating that the file is being watched. When changes are detected, the utility will display the differences:
- **Green**: Added lines
- **Red**: Removed lines
- **Grey**: Unchanged lines

## How It Works
1. **File Watcher Initialization**: The utility uses `chokidar` to monitor the specified file for any changes.
2. **Difference Calculation**: When a change is detected, it reads the new content, compares it with the previous version, and identifies additions, deletions, and unchanged lines.
3. **Color-Coded Output**: Each difference is printed to the terminal in color:
   - **Green** for additions
   - **Red** for deletions
   - **Grey** for unchanged text
4. **Error Handling**: If any errors occur (e.g., file access issues), a failure message is displayed, and the watcher stops.

## Dependencies
- **chokidar**: For file watching
- **chalk**: For color-coded terminal output
- **ora**: For spinner animations
- **diff**: For calculating and displaying differences in file content

## License
This project is licensed under the ISC License.

## Author
Marcin Zajkowski
