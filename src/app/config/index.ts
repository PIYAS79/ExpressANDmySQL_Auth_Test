

import dotenv from 'dotenv';
import path from 'path';






dotenv.config({ path: path.join(process.cwd(), '.env') });




export default {
    host_address: process.env.HOST,
    sql_user: process.env.USER,
    sql_database_name: process.env.DATABASE_NAME,
    bcrypt_salt_round: process.env.SALT_ROUND,
    jwt_access_token_exp: process.env.JWT_ACC_EXP,
    jwt_refresh_token_exp: process.env.JWT_REF_EXP,
    jwt_secret: process.env.JWT_SECRET
}

