import { db } from "../db";

export class UsersService {
  static async getUserById(id: any) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from users where id = ${id}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getUserByEmailAndPassword(email: string, password: string) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from users where email = '${email}' and password = '${password}'`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }
}
