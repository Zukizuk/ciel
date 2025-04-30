import { FileTemplate } from "../types";

export const deProjectTemplate: FileTemplate[] = [
  {
    path: ".gitignore",
    content:
      ".venv/\n__pycache__/\n*.pyc\n*.pyo\n*.pyd\n*.db\n*.sqlite3\n*.egg-info/\n*.egg/\n*.log\n",
  },
  {
    path: "README.md",
    content:
      "# Project was Generated with CIEL\n\n\n## Project Title\n\nA brief description of your project.\n\n## Installation\n\nInstructions on how to install and set up the project.\n\n## Usage\n\nInstructions on how to use the project.\n\n## Contributing\n\nGuidelines for contributing to the project.\n\n## License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n",
  },
  {
    path: "LICENSE",
    content: `
MIT License

Copyright (c) 2025 Marzuk Sanni Entsie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    `,
  },
];
