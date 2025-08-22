import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs-shop");
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return new Response("Failed to fetch products", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs-shop");

    const { name, description, price, image } = await req.json();

    if (!name || !description || !price || !image) {
      return new Response("Missing fields", { status: 400 });
    }

    const newProduct = { name, description, price, image, createdAt: new Date() };
    const result = await db.collection("products").insertOne(newProduct);

    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return new Response("Failed to add product", { status: 500 });
  }
}
