import { Request } from 'express';
import cors from 'cors';

const whitelist = ['http://localhost:3000', 'http://localhost:5201'];

// Allow proxy at frontend to bypass  CORS
const corsOptionsDelegate = (req: Request, callback) => {
  let corsOptions: { origin: boolean };
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; 
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



// Don't allow proxy at frontend to bypass CORS
// const corsOptionsDelegate = {
//     origin: (origin, callback) => {
//       if (whitelist.indexOf(origin) !== -1 || !origin) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS of Ts-server'));
//       }
//     }
//   }


// To allow whitelisted domains only from frontend side
export const corsOptionsDelegateOption = cors(corsOptionsDelegate);

// To allow all the origins(domains) from frontend side
// export const corsOptionsDelegateOption = cors({ origin: '*' });