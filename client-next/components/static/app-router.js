import Link from "next/link";
import '../../styles/main.scss'
import Head from 'next/head'


const linkStyle = {
    marginRight: 15
};

const AppRouter = () => (
    <div>
        <Head>
            <title>RoundTravel</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous">
            </ link>
        </Head>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default AppRouter