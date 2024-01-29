const authors = {
  name: "author",
  title: "Author",
  type: "document",

  fields: [
    {
      name: "firstName",  // key id
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "authorSlug",
      type: "slug",
      title: "Slug",
      options: {
        source: "firstName",
        maxLength: 75,
      },
    },
    {
      name: "aboutAuthor",
      title: "About Author",
      type: "array",
      of: [
        {
          title: "MD",
          // CHANGE TO MARKDOWN
          type: "string",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },

    {
      name: "avatarLink",
      title: "AvatarUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "firstName",
      media: "image",
    },
  },
};

export default authors;
