import mongoose from "mongoose";
import 'dotenv/config';
import dns from 'dns';

// Fix for Node.js DNS ECONNREFUSED on SRV lookups (Windows)
dns.setServers(['8.8.8.8', '8.8.4.4']);

const MONGODB_URI = `${process.env.MONGODB_URI}/prescripto`;

const clearDB = async () => {
    try {
        console.log("Connecting to Database...");
        await mongoose.connect(MONGODB_URI);
        console.log("Database Connected.");

        console.log("Dropping the database to clear all data...");
        await mongoose.connection.db.dropDatabase();

        console.log("✅ All data has been successfully cleared.");
    } catch (error) {
        console.error("❌ Error clearing database:", error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
}

clearDB();
