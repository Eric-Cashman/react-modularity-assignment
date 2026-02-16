# React Modularity Assignment

## Description
This project demonstrates component modularity in React using both default and named exports/imports. It includes a Header, Footer, and two interactive content components that share a reusable Button component.

## Author
Eric Cashman
Date: February 2026

## Features
- **Default Exports:** Header and Footer components
- **Named Exports:** ContentA, ContentB, and Button components
- **Component Reusability:** Button component used in multiple places
- **Interactive Elements:** Counter and message display with button interactions
- **Comprehensive Tests:** 19 test cases covering normal and edge cases

## Project Structure
```
src/
├── components/
│   ├── Header.js (default export)
│   ├── Header.test.js
│   ├── Footer.js (default export)
│   ├── ContentA.js (named export)
│   ├── ContentA.test.js
│   ├── ContentB.js (named export)
│   ├── ContentB.test.js
│   ├── SharedComponents.js (named export - Button)
│   └── SharedComponents.test.js
├── App.js
├── App.css
└── index.js
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/react-modularity-assignment.git
cd react-modularity-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Running Tests
```bash
npm test
```

Press `a` to run all tests.

## Component Details

### Default Exports
**Header.js:**
- Main navigation header
- Uses default export: `export default Header`
- Imported as: `import Header from './components/Header'`

**Footer.js:**
- Page footer with copyright
- Uses default export: `export default Footer`
- Imported as: `import Footer from './components/Footer'`

### Named Exports
**ContentA.js:**
- Interactive counter component
- Uses named export: `export function ContentA()`
- Imported as: `import { ContentA } from './components/ContentA'`

**ContentB.js:**
- Message display component
- Uses named export: `export function ContentB()`
- Imported as: `import { ContentB } from './components/ContentB'`

**SharedComponents.js:**
- Reusable Button component
- Uses named export: `export function Button()`
- Imported as: `import { Button } from './components/SharedComponents'`

## Test Cases

### Normal Cases (10 tests)
1. ✅ App renders learn react link
2. ✅ Header renders correctly
3. ✅ Header displays subtitle
4. ✅ Header uses correct HTML element
5. ✅ ContentA renders correctly
6. ✅ ContentA counter starts at 0
7. ✅ ContentA increment button works
8. ✅ ContentB renders correctly
9. ✅ ContentB displays initial message
10. ✅ Button renders with text

### Edge Cases (9 tests)
1. ✅ ContentA handles multiple rapid clicks
2. ✅ ContentA reset works from any number
3. ✅ ContentA reset works at 0
4. ✅ ContentB hello button changes message
5. ✅ ContentB goodbye button changes message
6. ✅ ContentB can switch between messages
7. ✅ ContentB multiple clicks on same button
8. ✅ Button works without onClick handler
9. ✅ Button handles multiple clicks

**Total: 19 tests (10 normal + 9 edge cases)** ✅

## How It Demonstrates Modularity

### Default vs Named Exports
- **Default exports** used for main/primary components (Header, Footer)
- **Named exports** used for reusable/shared components (Button, ContentA, ContentB)

### Component Reusability
The Button component from `SharedComponents.js` is imported and reused in both:
- ContentA (for Increment and Reset buttons)
- ContentB (for Say Hello and Say Goodbye buttons)

This demonstrates the DRY (Don't Repeat Yourself) principle and shows how a single component definition can be used throughout an application.

### Import Patterns
```javascript
// App.js shows both import styles:

// Default imports (no curly braces)
import Header from './components/Header';
import Footer from './components/Footer';

// Named imports (with curly braces)
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
```

## Key Learning Points
- **Default vs Named Exports:** When and why to use each type
- **Component Reusability:** Creating components that can be used in multiple places
- **Import Syntax:** Different ways to import components in React
- **Testing:** Writing comprehensive test cases for React components
- **Component Organization:** Structuring a React project for maintainability

## Technologies Used
- React 18
- Create React App
- React Testing Library
- Jest
- JavaScript ES6+

## Acknowledgments
- React Documentation
- Testing Library Documentation
- Create React App