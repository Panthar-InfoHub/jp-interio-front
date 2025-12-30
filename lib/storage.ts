"use server"


import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID!,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL!,
    private_key: process.env.GCP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  },
});

interface SignedUrlOptions {
  filename: string;
  contentType: string;
}


export async function getSignedUploadUrl({ filename, contentType }: SignedUrlOptions) {

  const key = `raw/${Date.now()}-${filename}`;
  const file = storage.bucket(process.env.GCP_BUCKET_NAME!).file(key);

  const [url] = await file.getSignedUrl({
    version: "v4",
    action: "write",
    expires: Date.now() + 5 * 60 * 1000, // valid 5 min
    contentType,
  });

  const gs_uri = `gs://${process.env.GCP_BUCKET_NAME}/${key}`

  return { url, key, gs_uri } // return signed URL + key + gsUri
}