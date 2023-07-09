export default function authHeader() {
    let admin = JSON.parse(localStorage.getItem('admin'));

    if (admin && admin.token) {
        return {
            'x-access-token': admin.token,
            'Content-Type': 'multipart/form-data'
        };
    } else {
        return {};
    }
}