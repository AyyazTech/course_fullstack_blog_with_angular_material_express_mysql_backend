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

  static async getPostBySlug(slug: string) {
    let connection = await db;
    let response: any = await connection.query(
      `select  posts.*, categories.title as categoryTitle , categories.slug as categorySlug, users.name as userName from posts  
    left join categories on categories.id = posts.id 
    left join users on users.id = posts.userId  where posts.slug='${slug}'`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getPosts(
    options: {
      categorySlug?: string;
      authorId?: number;
      tagId?: number;
      searchKeyword?: string;
    } = {}
  ) {
    let connection = await db;
    let conditions = [];

    if (options.categorySlug)
      conditions.push(`categories.slug='${options.categorySlug}'`);
    if (options.searchKeyword)
      conditions.push(`posts.title like '%${options.searchKeyword}%'`);
    if (options.authorId) conditions.push(`posts.userId='${options.authorId}'`);
    if (options.tagId)
      conditions.push(
        `posts.id in (select postId from post_tags where post_tags.tagId = ${options.tagId})`
      );
    let query = `select posts.*, categories.title as categoryTitle , categories.slug as categorySlug, users.name as userName from posts 
    left join categories on categories.id = posts.categoryId 
    left join users on users.id = posts.userId 
     ${conditions.length > 0 ? "where " : ""} ${conditions.join(" and ")}

     order by createdAt desc
    `;
    let response: any = await connection.query(query);

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
