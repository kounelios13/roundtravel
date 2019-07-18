import React from 'react';
import withLayout from "../../components/layouts/layout";
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';



const City = (props) => {
    return (
        <div>
            <h2>{props.ok}</h2>
        </div>
    );
};

City.getInitialProps = async function({query}) {


    const res = await fetch(
        'http://localhost:9000/cities/get',
        {
            headers: {
                'Content-Type':'application/json',
            },
            method: 'POST',
            body: JSON.stringify({url: query.name})
        }
    );

    const data = await res.json();

    return {
        ok: 'ok'
    }
}

export default City;