export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://dbUser:todoDB@cluster0-ku63s.mongodb.net/user?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}