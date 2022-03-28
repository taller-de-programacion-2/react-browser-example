export default function About() {
    return <div>
        <h1>About</h1>
        <p>Developed using:</p>
        <ul>
            <li> React </li>
            <li> <a href={process.env.REACT_APP_API_URL}>reqres.in</a></li>
        </ul>
    </div>
}