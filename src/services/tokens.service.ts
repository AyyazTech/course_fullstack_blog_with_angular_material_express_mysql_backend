import { db } from "../db";

export class TokensService {
  static async getTokensByUserId(userId: number) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from tokens where userId = ${userId}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0];
    else return [];
  }

  static async deleteUserTokens(userId: number, type?: "access" | "refresh") {
    let connection = await db;
    let extraCondition = ``;

    if (type) extraCondition += `and type='${type}'`;

    await connection.query(
      `delete from tokens where userId = ${userId} ${extraCondition}`
    );

    return true;
  }

  static async createToken(
    token: string,
    userId: number,
    type: "refresh" | "access"
  ) {
    let connection = await db;
    await connection.query(
      `insert into tokens (token, userId, type) values('${token}', ${userId}, '${type}')`
    );
    return true;
  }

  static async getToken({
    type,
    token,
    userId,
  }: {
    type: "access" | "refresh";
    token: string;
    userId: number;
  }) {
    let connection = await db;
    let query = `select * from tokens where userId = ${userId} and type='${type}' and token='${token}'`;
    let response: any = await connection.query(query);

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }
}
