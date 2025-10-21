// checkEnvConnect.js
import dns from "dns";
import dotenv from "dotenv";
dotenv.config();
console.log("🔍 MONGO_URI (trunc):", process.env.MONGO_URI ? process.env.MONGO_URI.slice(0,40)+"..." : process.env.MONGO_URI);
console.log("🔍 DB_NAME:", process.env.DB_NAME);
console.log("🔍 DNS order (before):", dns.getDefaultResultOrder ? dns.getDefaultResultOrder() : "n/a");
dns.setDefaultResultOrder && dns.setDefaultResultOrder("ipv4first");
console.log("🔍 DNS order (after):", dns.getDefaultResultOrder ? dns.getDefaultResultOrder() : "n/a");
