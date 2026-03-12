import express from "express"
import multer from "multer"
import cors from "cors"
import dotenv from "dotenv"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import fs from "fs"

dotenv.config()

const app = express()
app.use(cors())

const upload = multer({ dest: "uploads/" })

const s3 = new S3Client({
 region: "auto",
 endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
 credentials: {
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
 }
})

app.post("/upload", upload.single("file"), async (req,res)=>{

 const file = req.file

 const command = new PutObjectCommand({
  Bucket: process.env.R2_BUCKET_NAME,
  Key: file.originalname,
  Body: fs.createReadStream(file.path)
 })

 await s3.send(command)

 res.json({
  url: `${process.env.R2_PUBLIC_URL}/${file.originalname}`
 })

})

app.listen(8787,()=>{
 console.log("backend running on 8787")
})
