export default class apiService {
    constructor($http) {
        this.$http = $http;
    }

    getMovieInTheaters() {
        return this.$http.get('v2/movie/in_theaters').then(function (res) {
            console.log(res);
        })
    }
}