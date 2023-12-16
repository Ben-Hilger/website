import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Blog {
  constructor (
              public id: string,
              public title: string, 
              public description: string,
              public createdByUser: string,
              public createdDate: Date,
              public blogLink: string) {}
}

export const blogConverter = {
  toFirestore: (blog: Blog) => {
      return {
        title: blog.title,
        description: blog.description,
        date_created: blog.createdDate,
        created_by_user: blog.createdByUser,
        blog_link: blog.blogLink
      };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => {
      const data = snapshot.data(options);
      return new Blog(snapshot.id, data.title, data.description, data.created_by_user, data.date_created, data.blog_link);
  }
};