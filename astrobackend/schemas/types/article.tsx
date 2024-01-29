const articles = {
  name: "articles",
  title: "Articles",
  type: "document",

  fields: [

    {
      name: "title",
      title: "Article Title",
      type: "string",
    },
    {
      name: "articleImage",
      title: "Article Image",
      type: "image",
      options: {
        hotspot: "true",
      },
    },
    {
      name: "articleBody",
      title: "Article Body",
      description: "Add your Article Body here in Markdown",
      // change to MARKDOWN
      type: "markdown",
    },
    {
      title: "Author",
      name: "articleAuthor",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "Article Slug",
      name: "articleSlug",
      type: "slug",

      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          name: "category",
          title: "Category",
          type: "string",
        },
      ],
    },
  ],


  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "articleImage",
    },
    prepare(selection: { author: any; }) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },


};

export default articles;
