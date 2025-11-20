# PDF Rule Checker

A simple web app that checks a PDF using LLM logic. The app allows users to upload a PDF, enter 3 rules, and validate the PDF against those rules using an LLM, displaying results in a table.

## Features

- Upload PDF files (2-10 pages)
- Enter 3 custom rules for validation
- LLM-powered rule checking with PASS/FAIL status
- Evidence, reasoning, and confidence score for each rule
- Results displayed in a clean table format

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **PDF Processing**: Mock text extraction (for demonstration)
- **LLM Integration**: Mock LLM (for demonstration, replace with real API)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd full-stack-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## How to Start

1. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```
   The backend will run on http://localhost:3001

2. Start the frontend application:
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will open at http://localhost:3002

## Usage

Upload a PDF, enter 3 rules, and click "Check Document" to see results.

## API Endpoint

- `POST /check-pdf`: Accepts PDF file and rules array, returns validation results.

## Example Rules

- "The document must have a purpose section."
- "The document must mention at least one date."
- "The document must define at least one term."

## License

ISC
