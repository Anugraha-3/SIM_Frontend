import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3001;

// Enable CORS for development
app.use(cors());

// Set up multer for file uploads
const __dirname = path.resolve();

const upload = multer({
  dest: path.join(__dirname, 'uploads'),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Audio upload endpoint
app.post('/api/upload-audio', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }
  // Ensure the file is saved as .wav
  const oldPath = req.file.path;
  let newPath = oldPath;
  if (!oldPath.endsWith('.wav')) {
    newPath = oldPath + '.wav';
    fs.renameSync(oldPath, newPath);
  }
  res.json({ success: true, filename: path.basename(newPath), originalname: req.file.originalname });
});

app.listen(PORT, () => {
  console.log(`Audio upload server running on http://localhost:${PORT}`);
});
