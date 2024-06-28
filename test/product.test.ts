import Assert from "assert";
import ProductMongodbDAO from "../src/dao/mongodb/product.mongodb.dao";
import MongoDB from "./config/mongoDb.config";

const assert = Assert.strict;

const mongoDb = new MongoDB();

describe("", async function () {
  this.timeout(5000); // Maximum waiting time for all tests

  before(async function () {
    await mongoDb.connectToDb();
    this.productDao = new ProductMongodbDAO();
  });

  beforeEach(async function () {
    // Restore data from database
  });

  it("", async function () {
    console.log(await this.productDao.getAll());
  });
});
