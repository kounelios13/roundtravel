import Link from "next/link";
import Head from 'next/head'

import Layout from "../components/layouts/layout";

const multipleSizes = require('../static/images/1.jpg?resize&sizes[]=375&sizes[]=568&sizes[]=768&sizes[]=1024&sizes[]=1366&sizes[]=1680&sizes[]=1920');

const Index = () => (
    <div>

        {/*<picture>*/}
        {/*    <img className='img-fluid' srcSet={multipleSizes.srcSet} src={multipleSizes.src}  type="image/jpeg" />*/}
        {/*</picture>*/}

    </div>
)

export default Layout(Index)