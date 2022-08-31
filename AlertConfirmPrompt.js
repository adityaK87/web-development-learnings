// Interaction musing alert ,confirm, prompt

// Alert in broswer JavaScript- Does not return anything
// alert("This is a message String");

// Prompt in JS
// let name=prompt("What is your name","guest");
// console.log(name) ;


let deletePost = confirm("Do you really want to delete Post")
// console.log(deletePost);
if (deletePost) {
    // Code to Delete the Post
    console.log("Your post has been deleted succesfully");
}
else {
    //Code to cancel deletion of the post
    console.log("Your post has not been deleted ");
}
