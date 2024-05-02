import jwt from 'jsonwebtoken';

export interface Payload{
  email:string
  isPasswordDefault:boolean
}

const key = process.env.KEY;

// Function to generate JWT token
export const generateToken = (payload: Payload) => {
  // Generate JWT token with a secret key
  return jwt.sign(payload, key as string, { expiresIn: '1d' });
   
};

export const verifyToken = (token:string) => {
    try {
      // Verify JWT token using the secret key
      return jwt.verify(token, key as string) as Payload;
      
    } catch (error) {
      // Token is invalid or has expired
      return null;
    }
  };
