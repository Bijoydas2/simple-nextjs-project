import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/data/products.json");

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(data);
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return new Response("Failed to fetch products", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, image } = body;

    // Validate required fields
    if (!name || !description || !price || !image) {
      return new Response("Missing fields", { status: 400 });
    }

    const data = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(data);

    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
      image,
    };

    products.push(newProduct);

    await fs.writeFile(filePath, JSON.stringify(products, null, 2));

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return new Response("Failed to add product", { status: 500 });
  }
}
