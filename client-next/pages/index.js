import Link from "next/link";
import withLayout from "../components/layouts/withLayout";
import LandingSlider from "../components/image-headers/landing-slider";


const multipleSizes = require('../static/images/1.jpg?resize&sizes[]=375&sizes[]=568&sizes[]=768&sizes[]=1024&sizes[]=1366&sizes[]=1680&sizes[]=1920');

const Index = () => (
    <div>
        <LandingSlider />
    </div>
)

export default withLayout(Index)