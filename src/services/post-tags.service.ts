import { db } from "../db";

export class PostTagsService {
  static tableName = "post_tags";

  static async getPostTagsById(id: any) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from ${PostTagsService.tableName} where id = ${id}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getPostTags() {
    let connection = await db;
    let response = await connection.query(
      `select * from ${PostTagsService.tableName} `
    );
    return response[0];
  }

  static async createPostTag(postId: any, tagId: any) {
    let connection = await db;

    let response = await connection.query(
      `insert into ${PostTagsService.tableName}  (postId, tagId) values('${postId}', '${tagId}')`
    );

    return response[0];
  }

  static async deletePostTag(id: any) {
    let connection = await db;

    return connection.query(
      `delete from ${PostTagsService.tableName}  where id = ${id}`
    );
  }

  static async deletePostTagByPostId(postId: any) {
    let connection = await db;

    return connection.query(
      `delete from ${PostTagsService.tableName}  where postId = ${postId}`
    );
  }
}
