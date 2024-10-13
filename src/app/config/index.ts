

import dotenv from 'dotenv';
import path from 'path';






dotenv.config({ path: path.join(process.cwd(), '.env') });




export default {
    host_address: process.env.HOST,
    sql_user: process.env.USER,
    sql_database_name: process.env.DATABASE_NAME,
    bcrypt_salt_round: process.env.SALT_ROUND
}

