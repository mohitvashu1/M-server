import "dotenv/config";
if (!process.env.JWT_SECRET) {
    throw new Error("❌ JWT_SECRET is missing in .env");
}
export const JWT_SECRET = process.env.JWT_SECRET;
//# sourceMappingURL=env.js.map