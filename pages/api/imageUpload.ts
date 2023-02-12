import express from 'express';
import multer from 'multer'

const app = express();
const upload = multer({dest: 'uploads/'})