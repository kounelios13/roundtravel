import React from 'react';
import fetch from 'isomorphic-unfetch';
import withError from "../../components/layouts/withError";
import withLayout from "../../components/layouts/withLayout";

const City = (props) => {
    return (
        <div>

        </div>
    );
};

City.getInitialProps = async function({query}) {
    const cityUrl = query.city

    const res = await fetch(
        'http://localhost:9000/cities/get',
        {
            headers: {
                'Content-Type':'application/json',
            },
            method: 'POST',
            body: JSON.stringify({url: cityUrl})
        }
    );

    const data = await res.json();

    if(data.status === 404){
        return {
            statusCode: 404
        }
    }else{
        return {
            city: data
        }
    }




}

export default withError(withLayout(City));