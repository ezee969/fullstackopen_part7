/* eslint-disable comma-dangle */
const totalLikes = (blogs) => blogs.reduce((acc, blog) => acc + blog.likes, 0);

const favoriteBlog = (blogs) => {
  const numberOfLikes = blogs.map((blog) => blog.likes);
  const maxNumberLikes = Math.max(...numberOfLikes);
  const mostLikedBlog = blogs.find((blog) => blog.likes === maxNumberLikes);

  return {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes,
  };
};

const mostBlogs = (blogs) => {
  const reducedBlogsByAuthor = [];

  blogs.forEach((blog) => {
    const blogIndex = reducedBlogsByAuthor.findIndex(
      (e) => e.author === blog.author
    );

    if (blogIndex === -1) {
      const newBlog = { author: blog.author, blogs: 1 };

      reducedBlogsByAuthor.push(newBlog);
    } else {
      reducedBlogsByAuthor[blogIndex].blogs += 1;
    }
  });

  const blogQuantities = reducedBlogsByAuthor.map((e) => e.blogs);
  const maxblogQuantities = Math.max(...blogQuantities);
  const maxBlogsAuthor = reducedBlogsByAuthor.find(
    (blog) => blog.blogs === maxblogQuantities
  );

  return maxBlogsAuthor;
};

const mostLiked = (blogs) => {
  const reducedBlogsByAuthor = [];

  blogs.forEach((blog) => {
    const blogIndex = reducedBlogsByAuthor.findIndex(
      (e) => e.author === blog.author
    );

    if (blogIndex === -1) {
      const newBlog = { author: blog.author, likes: blog.likes };

      reducedBlogsByAuthor.push(newBlog);
    } else {
      reducedBlogsByAuthor[blogIndex].likes += blog.likes;
    }
  });

  const authorLikes = reducedBlogsByAuthor.map((e) => e.likes);
  const maxAuthorLikes = Math.max(...authorLikes);
  const findMostLikedAuthor = reducedBlogsByAuthor.find(
    (blog) => blog.likes === maxAuthorLikes
  );

  return findMostLikedAuthor;
};

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLiked,
};
