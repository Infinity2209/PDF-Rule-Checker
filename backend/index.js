const express = require('express');
const cors = require('cors');

const multer = require('multer');

// Mock PDF text extraction for demonstration

const extractTextFromPDF = async (buffer) => {

  // Simulate text extraction

  return 'This is sample text from the PDF. It contains some content for testing rules.';

};

// Mock LLM function for demonstration

const mockLLMCheck = async (rule, text) => {

  // Simulate LLM response

  const pass = Math.random() > 0.5;

  return {

    status: pass ? 'pass' : 'fail',

    evidence: `Found in page 1: 'Sample evidence for ${rule}'`,

    reasoning: `Document ${pass ? 'does' : 'does not'} satisfy the rule.`,

    confidence: Math.floor(Math.random() * 40) + 60, // 60-100

  };

};

const app = express();

const port = 3001;

// Enable CORS for all origins (for development)
app.use(cors({
  origin: 'http://localhost:3002', // Allow requests from frontend
  credentials: true
}));

// Multer for file upload

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

// Endpoint to upload PDF and check rules

app.post('/check-pdf', upload.single('pdf'), async (req, res) => {

  try {

    const pdfBuffer = req.file.buffer;

    const text = await extractTextFromPDF(pdfBuffer);

    const rules = JSON.parse(req.body.rules); // Parse rules from form data

    const results = [];

    for (const rule of rules) {

      const result = await mockLLMCheck(rule, text);

      results.push({ rule, ...result });

    }

    res.json(results);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

app.listen(port, () => {

  console.log(`Server running on port ${port}`);

});
