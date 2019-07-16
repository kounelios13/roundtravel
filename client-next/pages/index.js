import Link from "next/link";
import { withAmp } from 'next/amp'

import Layout from "../components/layouts/layout";
export const config = { amp: true };


const Index = () => (
    <div>
        <p>asdas</p>
        <div>
            <amp-img width={200} height={200} layout='responsive' src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg" alt=""/>
        </div>
    </div>
)

export default Layout(Index)