const { Schema, Typess, model } = require("mongoose");

const productSchema = new Schema({
  _id: {
    type: String,
    required: [true, "Catalog number is required."],
    unique: [true, "Catalog number must be unique"],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
    min: [0, "Price cannot be negative."],
  },
  category: {
    type: String,
    required: [true, "Category is required."],
    enum: {
      values: [
        "Brake Disc",
        "Brake Pad",
        "Oil",
        "Oil Filter",
        "Cabin Filter",
        "Fuel Filter",
        "Air Filter",
        "Supplements",
      ],
      message: "{VALUE} is not a valid category.",
    },
  },
  brand: {
    type: String,
    required: [true, "Brand is required."],
  },
  vehicleCompatibility: [
    {
      make: {
        type: String,
        required: [true, "Vehicle Manufactorer is required."],
      },
      model: {
        type: String,
        required: [true, "Vehicle Model is required."],
      },
      year: {
        type: Number,
        required: [true, "Vehicle Year is required."],
        min: [1990, "Vehicle Year must be after 1990"],
        max: [
          new Date().getFullYear() + 1,
          "Vehicle Year cannot be in the future.",
        ],
      },
      engineType: {
        type: String,
        required: [true, "Vehicle Engine Type is required."],
      },
      trim: {
        type: String,
        required: false,
      },
    },
  ],
  stockQuantity: {
    type: Number,
    required: [true, "Stock Quantity is required."],
    min: [0, "Stock Quantity cannot be negative."],
  },
  // TODO: Think about upload images with multer
  images: {
    type: [String],
    // TODO: Default image
    default: [],
  },
  // TODO: userCreated
  // TODO: add reviews
  /* 
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
      },
      rating: {
        type: Number, // User rating
        min: [1, 'Rating must be at least 1.'],
        max: [5, 'Rating cannot exceed 5.'],
      },
      comment: {
        type: String, // User comment
      },
      createdAt: {
        type: Date, // Timestamp for when the review was created
        default: Date.now,
      },
    },
  ],
  */
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const ProductModel = model("ProductModel", productSchema);

module.exports = ProductModel;