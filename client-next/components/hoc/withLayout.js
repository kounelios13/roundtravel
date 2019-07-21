import AppRouter from "../router/app-router";
import Head from 'next/head'
import React from "react";


const withLayout = (Page) => {
    return class extends React.Component {
        static getInitialProps(ctx) {
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
            return {}
        }

        render() {
            return (
                <div className='container-fluid p-0 m-0'>
                    <Head>
                        <title>RoundTravel</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                              crossOrigin="anonymous">
                        </ link>
                    </Head>
                    <AppRouter/>
                    <Page {...this.props}/>
                </div>
            )
        }
    }
}

export default withLayout