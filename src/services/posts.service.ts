import { db } from "../db";
import { CategoriesService } from "./categories.service";

export class PostsService {
  static async getPostById(id: any) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from posts where id=${id}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getPosts() {
    let connection = await db;
    let response: any = await connection.query(`select * from posts`);

    return response[0];
  }

  static async deletePostById(id: any) {
    let connection = await db;
    connection.query(`delete from posts where id = ${id}`);
  }

  static async createPost({
    title,
    content,
    categoryId,
  }: {
    title: string;
    content: string;
    categoryId: any;
  }) {
    let connection = await db;
    let query = `insert into posts (title, content, categoryId) values('${title}', '${content}', ${categoryId})`;
    return await connection.query(query);
  }

  static async updatePost({
    title,
    content,
    categoryId,
    id,
  }: {
    title: string;
    content: string;
    categoryId: any;
    id: any;
  }) {
    let connection = await db;

    let sqlFieldsToUpdate = [];

    if (title) sqlFieldsToUpdate.push(`title='${title}'`);
    if (content) sqlFieldsToUpdate.push(`content='${content}'`);
    if (categoryId) {
      let category: any = await CategoriesService.getCategoryId(categoryId);
      if (!category) throw new Error("Category not found.");

      sqlFieldsToUpdate.push(`categoryId='${categoryId}'`);
    }

    if (sqlFieldsToUpdate.length < 1)
      throw new Error("Nothing was provided to update.");

    let query = `update posts set ${sqlFieldsToUpdate.join(
      ", "
    )} where id=${id}`;
    return await connection.query(query);
  }
}
