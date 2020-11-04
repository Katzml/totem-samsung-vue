import axios from 'axios'

const apiURL = '104.131.86.178'
// const apiURL = '127.0.0.1'
const apiPORT = '8010'

const axiosInstance = axios.create({
    baseURL: `http://${apiURL}:${apiPORT}`
});

const getVideos = () => axiosInstance.get('/api-v1/videos');

const getCategories = () => axiosInstance.get('/api-v1/categorias');

const getProviders = () => axiosInstance.get('/api-v1/distribuidores');

const getProviderByID = (providerID) => axiosInstance.get(`/api-v1/distribuidor/${providerID}`);

const getProvidersByName = (providerName) =>
    axiosInstance.get(`/api-v1/distribuidores?q=${providerName}`);

const getProvidersByCategory = (providerCategory) =>
    axiosInstance.get(`/api-v1/distribuidores?cat=${providerCategory}`);

export {
    getVideos,
    getCategories,
    getProviders,
    getProviderByID,
    getProvidersByName,
    getProvidersByCategory
}