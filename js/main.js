import axiosClient from "./Api/axiosClient";


console.log("hello form main js");


async function main() {
    const response = await axiosClient.get('/posts');
    console.log(response);
}
main();