import { getBooks } from "../../steps/books/get_books.js";
import { generateTestData } from "../../utils/helpers.js";

describe("Read Book Data - List Books", () => {
  before(async () => {
    await generateTestData();
  });

  getBooks();
});


