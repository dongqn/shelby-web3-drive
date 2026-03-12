# Shelby Web3 Drive

Shelby Web3 Drive is a decentralized file upload platform built with Node.js and Vite.

This project allows users to:

- Connect Web3 wallet
- Upload files
- Store files on Cloudflare R2
- Retrieve public file URLs

## Tech Stack

Frontend:
- Vite
- Vanilla JavaScript

Backend:
- Node.js
- Express
- Multer

Storage:
- Cloudflare R2 (S3 compatible)

## Project Structure

shelby-drive

backend/
server.js

frontend/
index.html
main.js

.env
package.json

## Installation

Clone repository

git clone https://github.com/YOURNAME/shelby-drive.git

Install dependencies

npm install

## Configure environment

Create `.env`

R2_ACCOUNT_ID=xxxx
R2_ACCESS_KEY_ID=xxxx
R2_SECRET_ACCESS_KEY=xxxx
R2_BUCKET_NAME=web3-drive-files
R2_PUBLIC_URL=https://xxxx.r2.dev

## Run project

Start backend

npm run backend

Start frontend

npm run frontend

Open browser

http://localhost:5173

## Features

- Web3 wallet connection
- File upload
- Decentralized storage
- Public file access

## License

MIT
