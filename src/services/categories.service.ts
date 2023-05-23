import { db } from "../db";

export class CategoriesService {
  static async getCategoryId(id: any) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from categories where id = ${id}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getCategorySlug(slug: string) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from categories where slug = '${slug}'`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getCategories() {
    let connection = await db;
    let response = await connection.query(`select * from categories`);
    return response[0];
  }

  static async createCategory(title: string) {
    let connection = await db;

    let response = await connection.query(
      `insert into categories (title) values('${title}')`
    );

    return response[0];
  }

  static async updateCategory(title: string, id: any) {
    let connection = await db;

    return await connection.query(
      `update categories set title='${title}' where id = ${id}`
    );
  }

  static async deleteCategory(id: any) {
    let connection = await db;

    return connection.query(`delete from categories where id = ${id}`);
  }
}
