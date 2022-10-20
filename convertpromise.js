const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    if (posts.push(post)) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}
function getposts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
        resolve("Displayed");
      });
      document.body.innerHTML = output;
    }, 0);
  });
};
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve("Deleted");
      } else {
        reject("Inside catch no array is found");
      }
    }, 1000);
  });
};


async function display() {
  await createPost({ title: "post three", body: "This is post three" });
  getposts();
  await deletePost();
  getposts();
  await deletePost();
  getposts();
  await deletePost()
  getposts();
  await deletePost().catch((err)=>console.log(err))
}

display();
