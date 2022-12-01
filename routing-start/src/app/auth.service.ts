export class AuthService{
    logged_in = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() =>{
                    resolve(this.logged_in);
                },800);
            }
        );
        return promise
    }

    login() {
        this.logged_in = true;
    }

    logout() {
        this.logged_in = false;
    }
}