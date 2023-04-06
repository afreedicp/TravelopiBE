const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('GET /travellers', () => {
  test('returns a list of travellers', async () => {
    const response = await request(app).get('/travellers');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /travellers/createTraveller', () => {
  afterAll(async () => {
    //     await prisma.travellers.deleteMany();
    await prisma.$disconnect();
  });

  test('creates a new traveller', async () => {
    const newTraveller = {
      name: 'Mark Refelo',
      email: 'Mark@ref.com',
      numberOfTravellers: 2,
      destination: 'India',
    };

    const response = await request(app)
      .post('/travellers/createTraveller')
      .send(newTraveller)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newTraveller.name);
    expect(response.body.email).toBe(newTraveller.email);
    expect(response.body.numberOfTravellers).toBe(
      newTraveller.numberOfTravellers
    );
    expect(response.body.destination).toBe(newTraveller.destination);
  });
});
