const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Salon = require('../../src/models/salon');

describe('salon', () => {
  beforeAll(async () => {
    await Salon.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should be able to create a new salon', async () => {
    const response = await request(app)
      .post('/salon')
      .send({
        password: '123abc',
        name: "Amazing Haircut",
        owner: "Thiago",
        description: "Here you'll got the best haircut of your life :D",
        contact: "35998651027",
        images: [],
        location: ["-22.2822849", "-46.3528733"],
      })
      .expect(204);
  });

  it('should return the list of salons', async () => {
    const response = await request(app)
      .get('/salon?longitude=-22.3178624&latitude=-46.3273575&max_distance=5')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
