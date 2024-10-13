import { DB_User_Type, Register_User_Type } from "./auth.interface"

import pool from "../../Database/db"
import Final_App_Error from "../../class/Final_App_Error";
import httpStatus from "http-status";
import { RowDataPacket } from "mysql2";
import { encriptPass } from "../../utils/bcrypt";



const Register_User_Service = async (data: Register_User_Type) => {

    const { email, name, password } = data;

    const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT email
        FROM users
        WHERE email = ?
        `, [email]);
    if (rows.length > 0) {
        throw new Final_App_Error(httpStatus.CONFLICT, "Email is already registered into the DB");
    }
    const encriptedPass = await encriptPass(password);
    const [result] = await pool.query(`
        INSERT INTO users (email,password,name) VALUES
        (?,?,?)
        `, [email, encriptedPass, name])


    return result
}


export const Auth_Services = {
    Register_User_Service,

}