#!/usr/bin/env node

import cloudinary from "cloudinary"

// Configure Cloudinary
cloudinary.config({
    cloud_name: "ezaxx4wl",
    api_key: "419484376236142",
    api_secret: "46bo83gxpn0j9EQBGSNKeGkS6kM",
});

async function main() {
    try {
        // Upload a sample image from Cloudinary's demo domain
        const result = await cloudinary.uploader.upload(
            "https://res.cloudinary.com/demo/image/upload/sample.jpg"
        );

        console.log("Secure URL:", result.secure_url);
        console.log("Public ID:", result.public_id);

        // Fetch image metadata
        const details = await cloudinary.api.resource(result.public_id);

        console.log("\nImage Details");
        console.log("Width:", details.width);
        console.log("Height:", details.height);
        console.log("Format:", details.format);
        console.log("File Size (bytes):", details.bytes);

        // Generate an optimized URL
        const optimizedUrl = cloudinary.url(result.public_id, {
            fetch_format: "auto", // f_auto: serves the best image format for the browser
            quality: "auto",      // q_auto: automatically chooses an optimal quality
        });

        console.log("\nDone! Click link below to see optimized version of the image.");
        console.log("Check the size and the format.");
        console.log(optimizedUrl);
    } catch (err) {
        console.error("Error:", err);
    }
}

main();