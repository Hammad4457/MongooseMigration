import mongoose from 'mongoose';
import User from '../models/User'; // Adjust the path according to your project structure

// migrations/YYYYMMDDHHMMSS_add_age_to_user.js

module.exports = {
  async up(db) {
    await db.collection('users').updateMany({}, { $set: { age: null } });
  },

  async down(db) {
    await db.collection('users').updateMany({}, { $unset: { age: '' } });
  }
};

