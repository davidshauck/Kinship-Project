const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async (done) => {
    const listings = db.collection('listings');

    const mockListing = {_id: 'some-user-id', name: 'John'};
    await listings.insertOne(mockListing);

    const insertedUser = await listings.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockListing);
    done()
  });
});