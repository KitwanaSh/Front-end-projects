const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postList = document.getElementById("post")


let allPosts = ""

for (let post of posts) {
    allPosts += `
    <div class = "user-name">
        <img src = "${post.avatar}" class = "avatar" />
        <div class = "imo">
            <p class = "name">${post.name}</p>
            <p class = "location">${post.location}</p>
        </div>
        <i class = "fa fa-ellipsis-v"></i>
    </div>
        
    </div>
    <img src = "${post.post}" class = "images" />
    <div class = "post-attr">
        <img src = "images/icon-heart.png" class = "heart"/>
        <img src = "images/icon-comment.png" />
        <img src = "images/icon-dm.png" />
        <i class = "fa fa-save"></i>
    </div>
    <div class = "comments">
        <p class= "num-likes">${post.likes} likes</p>
        <p class = "user-comments"><span class = "u-class">${post.username}</span> ${post.comment}</p>
    </div>
    `
}
postList.innerHTML = allPosts