import Link from "next/link";

import Layout from "../components/layouts/layout";
export const config = { amp: true };

const multipleSizes = require('../static/images/1.jpg?webp?resize&sizes[]=30&sizes[]=60&sizes[]=500');

const Index = () => (
    <div style={{width: '100px !important'}}>
        <picture>
            <noscript>
                <img srcSet={multipleSizes.srcSet} src={multipleSizes.src}  type="image/jpeg" />
            </noscript>
        </picture>
    </div>
)

export default Layout(Index)