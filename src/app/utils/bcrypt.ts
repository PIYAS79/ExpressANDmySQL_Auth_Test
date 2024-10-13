import bcrypt from 'bcrypt';
import config from '../config';





export const encodeDatabyBcrypt = async(password: string) => {
    console.log(config.bcrypt_salt_round)
    console.log(Number(config.bcrypt_salt_round))
    return await bcrypt.hash(password, Number(config.bcrypt_salt_round));
}

export const decodeDataByBcrypt = async(hashData: string, plianData: string) => {
    console.log(config.bcrypt_salt_round)
    console.log(Number(config.bcrypt_salt_round))
    return await bcrypt.compare(plianData, hashData);
}