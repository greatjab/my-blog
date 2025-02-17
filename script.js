document.addEventListener("DOMContentLoaded", function () {
    const postList = document.getElementById("post-list");

    // Array of blog posts (Add new posts here)
    const posts = [
        { title: "My First Post", link: "posts/post1.html" },
        { title: "Another Cool Post", link: "posts/post2.html" }
    ];

    posts.forEach(post => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = post.link;
        a.textContent = post.title;
        li.appendChild(a);
        postList.appendChild(li);
    });
});
