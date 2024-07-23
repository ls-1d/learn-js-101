import { posts } from './data/data.js';

posts.forEach((post) => post.id);

const filteredPosts = posts.filter((post) => {
    return post.userId === 10;
});
// console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => post.id * 100);
// console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => sum + post);
console.log(reducedPosts);
