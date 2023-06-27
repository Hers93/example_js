const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post1", "Post2", "Post"];
      const error = false;
      error ? reject("Hubo un error al obtener los posts") : resolve(posts);
    }, 2000);
  });
};

fetchPost()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
