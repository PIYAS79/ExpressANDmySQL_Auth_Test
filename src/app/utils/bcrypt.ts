import bcrypt from 'bcrypt';
import config from '../config';

export const encriptPass = async (pass: string) => {
    return await bcrypt.hash(pass, Number(config.bcrypt_salt_round));
}