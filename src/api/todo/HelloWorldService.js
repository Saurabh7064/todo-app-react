import axios from "axios";

class HelloWorldService{
    executeHelloWorldService() {
        //console.log('executed service');
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }
}

export default new HelloWorldService()