import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1l4hwsJMUGn7Art6AqqtgMWkxN2ZMgZ0NslLygJbFKwExk-UV99oaa9Zzqy3xOg4rZ0857foeSuBD76Q64h1wDS49KRfzy1YI4BGAb8KMtILopcvLdCGPvqzcHVeY3Yx'
    }
});