class Database {
  constructor() {
    this.state = [];
  }

  save(trip) {
    this.state.push(trip);
    return trip;
  }

  findAll() {
    return this.state;
  }
}

module.exports = { Database: new Database() };
