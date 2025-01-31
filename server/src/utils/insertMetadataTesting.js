const ProductModel = require("../models/ProductModel");

async function insertExampleMetadataInMongo() {
  try {
    const existingProducts = await ProductModel.find({});

    if (existingProducts.length > 0) {
      console.log(
        "Products already exist in the database, Skipping insertion."
      );
      return;
    }

    const metadata = [
      {
        _id: "BD123",
        description:
          "High-performance brake discs for improved stopping power.",
        price: 89.99,
        category: "Brake Disc",
        brand: "Brembo",
        vehicleCompatibility: [
          {
            make: "Toyota",
            model: "Camry",
            year: 2015,
            engineType: "2.5L 4-cylinder",
            trim: "LE",
          },
          {
            make: "Honda",
            model: "Accord",
            year: 2018,
            engineType: "1.5L 4-cylinder Turbo",
            trim: "EX",
          },
        ],
        stockQuantity: 50,
        images: ["https://example.com/images/bd123-1.jpg"],
        //reviews: [],
        isDeleted: false,
        createdAt: new Date("2023-10-01T12:00:00.000Z"),
        updatedAt: new Date("2023-10-01T12:00:00.000Z"),
      },
      {
        _id: "BP789",
        description: "Ceramic brake pads for smooth and quiet braking.",
        price: 45.99,
        category: "Brake Pad",
        brand: "Bosch",
        vehicleCompatibility: [
          {
            make: "Toyota",
            model: "Corolla",
            year: 2019,
            engineType: "1.8L 4-cylinder",
            trim: "SE",
          },
        ],
        stockQuantity: 100,
        images: ["https://example.com/images/bp789-1.jpg"],
        //reviews: [],
        isDeleted: false,
        createdAt: new Date("2023-10-01T12:00:00.000Z"),
        updatedAt: new Date("2023-10-01T12:00:00.000Z"),
      },
      {
        _id: "OIL123",
        description: "Full synthetic motor oil for high-performance engines.",
        price: 39.99,
        category: "Oil",
        brand: "Mobil 1",
        vehicleCompatibility: [
          {
            make: "BMW",
            model: "X5",
            year: 2021,
            engineType: "3.0L 6-cylinder Turbo",
            trim: "xDrive40i",
          },
        ],
        stockQuantity: 200,
        images: ["https://example.com/images/oil123-1.jpg"],
        //reviews: [],
        isDeleted: false,
        createdAt: new Date("2023-10-01T12:00:00.000Z"),
        updatedAt: new Date("2023-10-01T12:00:00.000Z"),
      },
    ];

    await ProductModel.insertMany(metadata);
    console.log("Example products inserted successfully.");
  } catch (err) {
    console.error("Error inserting metadata products:", err);
  }
}

module.exports = insertExampleMetadataInMongo;