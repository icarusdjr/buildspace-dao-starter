import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE6E43223c3cFF7808835101ff3e80143c7f872ff",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Offworld Membership Ticket",
        description: "This NFT will give you access to OffworldDAO",
        image: readFileSync("scripts/assets/offworldDAO.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()