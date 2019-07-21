import React from 'react';
import withLayout from "../components/hoc/withLayout";
import ImageHeader from "../components/image-header/image-header";
import Link from "next/link";

const Index = () => {
    return (
        <div>
            <ImageHeader />
            <Link href={'/city/[id]'} as={'/city/παρισι'}><a>asda</a></Link>
        </div>
    );
};

export default withLayout(Index);